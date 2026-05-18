// api/n8n.js — Automation bridge for n8n workflows
// Required Vercel env vars:
//   N8N_SECRET       — Bearer token to authenticate n8n requests
//   YOUTUBE_API_KEY  — YouTube Data API v3
//   GITHUB_TOKEN     — Personal access token (repo scope)
//   GITHUB_REPO      — "owner/repo" e.g. "soufiane/qisas-asturiya"
//   GITHUB_BRANCH    — default: "main"
//
// Actions (POST /api/n8n?action=...):
//   status           — library stats + env check (GET allowed)
//   import-playlist  — fetch YouTube playlist → append VIDEO_LIBRARY entries
//   import-films     — add YouTube video IDs → append TURKISH_FILMS entries
//   verify           — check ytIds via oEmbed, returns ok/dead/restricted lists

const YT_API  = 'https://www.googleapis.com/youtube/v3';
const GH_API  = 'https://api.github.com';

// ── Utilities ─────────────────────────────────────────────────
function resp(res, status, data) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(JSON.stringify(data));
}

function authenticated(req) {
  const secret = process.env.N8N_SECRET;
  if (!secret) return true;
  const h = req.headers['authorization'] || req.headers['x-n8n-secret'] || '';
  return h === `Bearer ${secret}` || h === secret;
}

async function readBody(req) {
  return new Promise(resolve => {
    let data = '';
    req.on('data', c => { data += c; });
    req.on('end', () => { try { resolve(JSON.parse(data)); } catch { resolve({}); } });
  });
}

function isoDuration(iso = '') {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return '';
  const h = Number(m[1]||0), min = Number(m[2]||0), sec = Number(m[3]||0);
  return h
    ? `${h}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}`
    : `${min}:${String(sec).padStart(2,'0')}`;
}

// Auto-detect episode number from Arabic/English title
function detectEp(title = '', fallback = 1) {
  const patterns = [
    /الحلقة\s+(\d+)/,  /ح\s*(\d+)\b/, /حلقة\s*(\d+)/,
    /Episode\s+(\d+)/i, /Ep\.?\s*(\d+)/i, /\bE(\d+)\b/i,
    /\[(\d+)\]/, /\b(\d{1,3})\s*[-–]\s/,
    /\s(\d{1,3})\s*[|\/\\]/,  /\s(\d{1,3})\s*$/,
  ];
  for (const p of patterns) {
    const m = title.match(p);
    if (m) { const n = Number(m[1]); if (n > 0 && n < 2000) return String(n); }
  }
  return String(fallback);
}

function escStr(s = '') { return String(s).replace(/\\/g,'\\\\').replace(/'/g,"\\'"); }

// ── YouTube API ────────────────────────────────────────────────
async function ytGet(path, params) {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) throw new Error('Missing YOUTUBE_API_KEY');
  const url = new URL(YT_API + path);
  Object.entries({ ...params, key }).forEach(([k, v]) => url.searchParams.set(k, v));
  const r = await fetch(url);
  const d = await r.json();
  if (!r.ok) throw new Error(d?.error?.message || 'YouTube API error');
  return d;
}

async function fetchPlaylistAll(playlistId, maxTotal = 500) {
  const ids = [];
  let pageToken = '';
  do {
    const d = await ytGet('/playlistItems', {
      part: 'contentDetails', playlistId, maxResults: '50',
      ...(pageToken ? { pageToken } : {})
    });
    (d.items || []).forEach(i => { const id = i.contentDetails?.videoId; if (id) ids.push(id); });
    pageToken = d.nextPageToken || '';
  } while (pageToken && ids.length < maxTotal);

  // Fetch video details in chunks of 50
  const details = [];
  for (let i = 0; i < ids.length; i += 50) {
    const d = await ytGet('/videos', {
      part: 'snippet,contentDetails,status', id: ids.slice(i, i+50).join(',')
    });
    details.push(...(d.items || []));
  }
  return { ids, details };
}

async function fetchVideoDetails(ytIds) {
  const details = [];
  for (let i = 0; i < ytIds.length; i += 50) {
    const d = await ytGet('/videos', {
      part: 'snippet,contentDetails,status', id: ytIds.slice(i, i+50).join(',')
    });
    details.push(...(d.items || []));
  }
  return details;
}

// ── GitHub API ─────────────────────────────────────────────────
function ghHeaders() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) throw new Error('Missing GITHUB_TOKEN — configure in Vercel env vars');
  return {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'Content-Type': 'application/json'
  };
}

async function ghGetFile(repo, branch, filePath) {
  const r = await fetch(`${GH_API}/repos/${repo}/contents/${filePath}?ref=${branch}`, { headers: ghHeaders() });
  if (!r.ok) { const e = await r.json().catch(()=>{}); throw new Error(`GitHub read error: ${e?.message || r.status}`); }
  const d = await r.json();
  return { content: Buffer.from(d.content, 'base64').toString('utf8'), sha: d.sha };
}

async function ghUpdateFile(repo, branch, filePath, content, message, sha) {
  const r = await fetch(`${GH_API}/repos/${repo}/contents/${filePath}`, {
    method: 'PUT',
    headers: ghHeaders(),
    body: JSON.stringify({ message, content: Buffer.from(content, 'utf8').toString('base64'), sha, branch })
  });
  if (!r.ok) { const e = await r.json().catch(()=>{}); throw new Error(`GitHub write error: ${e?.message || r.status}`); }
  return r.json();
}

// ── videos-data.js parsing ─────────────────────────────────────
function parseLibrary(jsContent) {
  const existingIds = new Set([...jsContent.matchAll(/ytId:\s*['"]([A-Za-z0-9_-]{6,})['"]/g)].map(m => m[1]));
  const filmNums = [...jsContent.matchAll(/id:\s*'f(\d+)'/g)].map(m => parseInt(m[1]));
  const nextFilmIdx = filmNums.length ? Math.max(...filmNums) + 1 : 1;
  return { existingIds, nextFilmIdx };
}

function insertAtMarker(jsContent, marker, newEntries) {
  if (!newEntries.length) return jsContent;
  const block = '\n' + newEntries.join(',\n') + ',';
  if (!jsContent.includes(marker)) throw new Error(`Marker "${marker}" not found in videos-data.js`);
  return jsContent.replace(marker, block + '\n' + marker);
}

function entryEpisode({ series_id, season, epNum, ytId, lang, title, duration, source, channelTitle, desc }) {
  const padded = String(epNum).padStart(3, '0');
  const id = `${series_id}_s${season}e${padded}`;
  return [
    `  { id:'${id}', series:'${escStr(series_id)}', season:'${season}', episode:'${epNum}',`,
    `    title:'الحلقة ${epNum}', ytId:'${ytId}', langs:{ ${lang}:'${ytId}' },`,
    `    duration:'${duration}', cat:'مسلسلات تركية', type:'حلقة',`,
    `    source:'${escStr(source || channelTitle || '')}', desc:'${escStr(desc || title || '')}',`,
    `    embeddable:true, lastCheckedAt:'${new Date().toISOString()}' }`
  ].join('\n');
}

function entryFilm({ idx, ytId, title, titleOrig, poster, duration, year, genre, lang, source, desc }) {
  return [
    `  { id:'f${idx}', title:'${escStr(title)}', titleOrig:'${escStr(titleOrig||'')}',`,
    `    ytId:'${ytId}', poster:'${poster}', duration:'${duration}', year:'${year||''}',`,
    `    genre:[${(genre||['دراما']).map(g=>`'${escStr(g)}'`).join(',')}],`,
    `    source:'${escStr(source||'')}', desc:'${escStr(desc||'')}', lang:'${lang||'ar'}',`,
    `    embeddable:true, lastCheckedAt:'${new Date().toISOString()}' }`
  ].join('\n');
}

// ── Main handler ───────────────────────────────────────────────
module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization,Content-Type,X-N8N-Secret');
    res.statusCode = 204; res.end(); return;
  }

  if (!authenticated(req)) return resp(res, 401, { error: 'Unauthorized — wrong or missing N8N_SECRET' });

  const body = req.method === 'POST' ? await readBody(req) : {};
  const action = req.query.action || body.action || (req.method === 'GET' ? 'status' : '');

  const repo   = process.env.GITHUB_REPO;
  const branch = process.env.GITHUB_BRANCH || 'main';
  const filePath = 'videos-data.js';

  try {

    // ════ STATUS ═══════════════════════════════════════════════
    if (action === 'status') {
      const env = {
        youtube:    !!process.env.YOUTUBE_API_KEY,
        github:     !!process.env.GITHUB_TOKEN && !!repo,
        n8n_secret: !!process.env.N8N_SECRET,
        repo:       repo || '(not set)',
        branch
      };
      if (!repo) return resp(res, 200, { status: 'ok', env, note: 'GITHUB_REPO not configured — set it in Vercel env vars to enable sync' });

      const { content } = await ghGetFile(repo, branch, filePath);
      const { existingIds, nextFilmIdx } = parseLibrary(content);
      return resp(res, 200, { status: 'ok', env, stats: {
        total_ytIds: existingIds.size,
        film_count: nextFilmIdx - 1,
        episode_count: existingIds.size - (nextFilmIdx - 1)
      }});
    }

    // All write actions require GitHub
    if (!repo) return resp(res, 400, { error: 'GITHUB_REPO not configured in Vercel env vars' });

    // ════ IMPORT-PLAYLIST ══════════════════════════════════════
    if (action === 'import-playlist') {
      const { playlist_url, series_id, season = '1', lang = 'ar', start_ep = 0, max = 500 } = body;
      if (!playlist_url || !series_id) return resp(res, 400, { error: 'Required: playlist_url, series_id' });

      const m = playlist_url.match(/[?&]list=([A-Za-z0-9_-]+)/) || playlist_url.match(/^([A-Za-z0-9_-]{10,})$/);
      if (!m) return resp(res, 400, { error: 'Invalid playlist URL' });
      const playlistId = m[1];

      const { content: jsContent, sha } = await ghGetFile(repo, branch, filePath);
      const { existingIds } = parseLibrary(jsContent);

      const { details } = await fetchPlaylistAll(playlistId, Number(max));

      const newEntries = [];
      let added = 0, skipped = 0, epCounter = Number(start_ep);

      for (const v of details) {
        const sn = v.snippet || {}, cd = v.contentDetails || {}, st = v.status || {};
        if (!v.id || existingIds.has(v.id)) { skipped++; continue; }
        if (st.embeddable === false || st.privacyStatus === 'private') { skipped++; continue; }

        epCounter++;
        const epNum = detectEp(sn.title || '', epCounter);
        const duration = isoDuration(cd.duration || '');
        const thumb = sn.thumbnails?.high?.url || sn.thumbnails?.medium?.url || '';

        newEntries.push(entryEpisode({
          series_id, season, epNum, ytId: v.id, lang,
          title: sn.title, duration,
          source: sn.channelTitle, channelTitle: sn.channelTitle,
          desc: sn.title
        }));
        added++;
      }

      if (!added) return resp(res, 200, { action, added: 0, skipped, note: 'No new videos to add' });

      const updated = insertAtMarker(jsContent, '// END_VIDEO_LIBRARY', newEntries);
      await ghUpdateFile(repo, branch, filePath, updated,
        `n8n: +${added} eps — ${series_id} s${season} [bot]`, sha);

      return resp(res, 200, { action, added, skipped, series: series_id, season, playlist: playlistId });
    }

    // ════ IMPORT-FILMS ═════════════════════════════════════════
    if (action === 'import-films') {
      const { ytIds: rawIds, category = 'دراما', lang = 'ar', year } = body;
      if (!rawIds?.length) return resp(res, 400, { error: 'Required: ytIds (array of YouTube video IDs)' });

      const { content: jsContent, sha } = await ghGetFile(repo, branch, filePath);
      const { existingIds, nextFilmIdx } = parseLibrary(jsContent);

      const freshIds = rawIds.filter(id => !existingIds.has(id));
      if (!freshIds.length) return resp(res, 200, { action, added: 0, skipped: rawIds.length, note: 'All already in library' });

      const details = await fetchVideoDetails(freshIds);
      const newEntries = [];
      let filmIdx = nextFilmIdx;
      let skipped = rawIds.length - freshIds.length;

      for (const v of details) {
        const sn = v.snippet || {}, cd = v.contentDetails || {}, st = v.status || {};
        if (st.embeddable === false || st.privacyStatus === 'private') { skipped++; continue; }

        const duration = isoDuration(cd.duration || '');
        const poster = sn.thumbnails?.high?.url || `https://img.youtube.com/vi/${v.id}/hqdefault.jpg`;
        const filmYear = year || sn.publishedAt?.slice(0, 4) || '';

        newEntries.push(entryFilm({
          idx: filmIdx, ytId: v.id,
          title: sn.title || v.id, titleOrig: '',
          poster, duration, year: filmYear,
          genre: [category], lang,
          source: sn.channelTitle || '', desc: ''
        }));
        filmIdx++;
      }

      if (!newEntries.length) return resp(res, 200, { action, added: 0, note: 'No valid films found' });

      const updated = insertAtMarker(jsContent, '// END_TURKISH_FILMS', newEntries);
      await ghUpdateFile(repo, branch, filePath, updated,
        `n8n: +${newEntries.length} films — ${category} [bot]`, sha);

      return resp(res, 200, { action, added: newEntries.length, skipped, category, first_id: `f${nextFilmIdx}` });
    }

    // ════ VERIFY ═══════════════════════════════════════════════
    if (action === 'verify') {
      const { ytIds } = body;
      if (!ytIds?.length) return resp(res, 400, { error: 'Required: ytIds array' });

      const ok = [], dead = [], restricted = [];

      await Promise.all(ytIds.map(async id => {
        try {
          const r = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`);
          if (r.status === 200) ok.push(id);
          else if (r.status === 401) restricted.push(id);
          else dead.push(id);
        } catch { dead.push(id); }
      }));

      return resp(res, 200, { action, total: ytIds.length, ok: ok.length, dead, restricted });
    }

    // ════ SEARCH-FILMS (YouTube search, returns ytIds for review) ═
    if (action === 'search-films') {
      const { query, max = 20, duration_filter = 'long' } = body;
      if (!query) return resp(res, 400, { error: 'Required: query' });

      const data = await ytGet('/search', {
        part: 'snippet', q: query, type: 'video',
        videoDuration: duration_filter,
        videoEmbeddable: 'true',
        maxResults: String(Math.min(Number(max), 50)),
        relevanceLanguage: 'ar'
      });

      const results = (data.items || []).map(i => ({
        ytId: i.id?.videoId,
        title: i.snippet?.title,
        channel: i.snippet?.channelTitle,
        published: i.snippet?.publishedAt?.slice(0, 10),
        thumbnail: i.snippet?.thumbnails?.high?.url
      })).filter(r => r.ytId);

      return resp(res, 200, { action, query, count: results.length, results });
    }

    return resp(res, 400, { error: `Unknown action: "${action}"`, available: ['status','import-playlist','import-films','verify','search-films'] });

  } catch (e) {
    return resp(res, 500, { error: e.message || 'Server error' });
  }
};
