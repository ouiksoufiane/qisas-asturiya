// Vercel Serverless Function: /api/youtube
// Requires env: YOUTUBE_API_KEY
// Usage:
//   /api/youtube?action=video&url=https://youtube.com/watch?v=...
//   /api/youtube?action=playlist&url=https://youtube.com/playlist?list=...&max=50

const API = 'https://www.googleapis.com/youtube/v3';

function json(res, status, data) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(data));
}
function extractVideoId(input='') {
  const s = String(input);
  const m = s.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([A-Za-z0-9_-]{6,})/) || s.match(/^([A-Za-z0-9_-]{6,})$/);
  return m ? m[1] : '';
}
function extractPlaylistId(input='') {
  const s = String(input);
  const m = s.match(/[?&]list=([A-Za-z0-9_-]+)/) || s.match(/^([A-Za-z0-9_-]{10,})$/);
  return m ? m[1] : '';
}
function isoDuration(iso='') {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return '';
  const h = Number(m[1]||0), min = Number(m[2]||0), sec = Number(m[3]||0);
  return h ? `${h}:${String(min).padStart(2,'0')}:${String(sec).padStart(2,'0')}` : `${min}:${String(sec).padStart(2,'0')}`;
}
async function yt(path, params) {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) throw new Error('Missing YOUTUBE_API_KEY');
  const url = new URL(API + path);
  Object.entries({...params, key}).forEach(([k,v]) => url.searchParams.set(k, v));
  const r = await fetch(url);
  const data = await r.json();
  if (!r.ok) throw new Error(data?.error?.message || 'YouTube API error');
  return data;
}
function mapVideo(item) {
  const sn = item.snippet || {}, cd = item.contentDetails || {}, st = item.status || {};
  const thumb = sn.thumbnails?.maxres?.url || sn.thumbnails?.high?.url || sn.thumbnails?.medium?.url || sn.thumbnails?.default?.url || '';
  return {
    ytId: item.id,
    title: sn.title || '',
    source: sn.channelTitle || '',
    channelId: sn.channelId || '',
    desc: sn.description || '',
    duration: isoDuration(cd.duration || ''),
    thumbnail: thumb,
    captions: cd.caption === 'true',
    embeddable: st.embeddable !== false,
    privacyStatus: st.privacyStatus || ''
  };
}
async function getVideos(ids) {
  if (!ids.length) return [];
  const chunks = [];
  for (let i=0; i<ids.length; i+=50) chunks.push(ids.slice(i, i+50));
  const out = [];
  for (const chunk of chunks) {
    const data = await yt('/videos', { part:'snippet,contentDetails,status', id:chunk.join(','), maxResults:'50' });
    out.push(...(data.items || []).map(mapVideo));
  }
  return out;
}

module.exports = async (req, res) => {
  try {
    const action = req.query.action || 'video';

    // oEmbed proxy — no API key required, avoids CORS on the client
    if (action === 'oembed') {
      const id = extractVideoId(req.query.url || req.query.id || '');
      if (!id) return json(res, 400, { error: 'Invalid video ID' });
      const ytUrl = encodeURIComponent(`https://www.youtube.com/watch?v=${id}`);
      const r = await fetch(`https://www.youtube.com/oembed?url=${ytUrl}&format=json`);
      if (r.status === 200) {
        const d = await r.json();
        return json(res, 200, { valid: true, embeddable: true, id, title: d.title || '', author: d.author_name || '', thumbnail: `https://img.youtube.com/vi/${id}/mqdefault.jpg` });
      }
      return json(res, 200, { valid: false, embeddable: false, id, status: r.status });
    }

    if (action === 'video') {
      const id = extractVideoId(req.query.url || req.query.id || '');
      if (!id) return json(res, 400, { error:'Invalid YouTube video URL' });
      const [video] = await getVideos([id]);
      return json(res, 200, { video });
    }
    if (action === 'playlist') {
      const playlistId = extractPlaylistId(req.query.url || req.query.id || '');
      if (!playlistId) return json(res, 400, { error:'Invalid playlist URL' });
      const max = Math.min(Number(req.query.max || 50), 50);
      const pageToken = req.query.pageToken || '';
      const data = await yt('/playlistItems', { part:'snippet,contentDetails', playlistId, maxResults:String(max), ...(pageToken ? {pageToken} : {}) });
      const ids = (data.items || []).map(i => i.contentDetails?.videoId || i.snippet?.resourceId?.videoId).filter(Boolean);
      const videos = await getVideos(ids);
      return json(res, 200, { playlistId, nextPageToken:data.nextPageToken || '', videos });
    }
    return json(res, 400, { error:'Unknown action' });
  } catch (e) {
    return json(res, 500, { error:e.message || 'Server error' });
  }
};
