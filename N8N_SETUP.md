# Guide Setup — Automatisation n8n

## Vue d'ensemble

```
n8n Workflow
    │
    ├─ POST /api/n8n?action=import-playlist  → YouTube API → GitHub → Vercel redeploy
    ├─ POST /api/n8n?action=import-films     → YouTube API → GitHub → Vercel redeploy
    ├─ POST /api/n8n?action=search-films     → YouTube Search → retourne résultats
    └─ POST /api/n8n?action=verify           → oEmbed check → rapport liens morts
```

---

## Étape 1 — Créer un dépôt GitHub

```bash
cd /Users/soufiane/Desktop/qisas-asturiya
git init
git add .
git commit -m "init: qisas-asturiya"
```

Puis sur github.com : créer un nouveau repo `qisas-asturiya` (privé ou public).

```bash
git remote add origin https://github.com/TON_COMPTE/qisas-asturiya.git
git push -u origin main
```

---

## Étape 2 — Connecter Vercel à GitHub

1. Dashboard Vercel → Settings → Git → Connect to GitHub Repository
2. Sélectionner `qisas-asturiya`
3. Désormais, chaque push GitHub déclenche un redéploiement automatique

---

## Étape 3 — Variables d'environnement Vercel

Dans Vercel → Settings → Environment Variables, ajouter :

| Variable | Valeur | Description |
|----------|--------|-------------|
| `YOUTUBE_API_KEY` | `AIza...` | Clé YouTube Data API v3 (déjà configurée) |
| `GITHUB_TOKEN` | `ghp_...` | Token GitHub (repo scope) |
| `GITHUB_REPO` | `TON_COMPTE/qisas-asturiya` | Owner/repo GitHub |
| `GITHUB_BRANCH` | `main` | Branche principale |
| `N8N_SECRET` | (mot de passe fort) | Secret partagé avec n8n |

> Générer `N8N_SECRET` : `openssl rand -base64 32`

---

## Étape 4 — Variables d'environnement n8n

Dans n8n → Settings → Variables (ou credentials), créer :
- Variable `N8N_SECRET` : même valeur que dans Vercel

OU utiliser les Credentials HTTP Header Auth :
- Header name: `Authorization`
- Header value: `Bearer TON_N8N_SECRET`

---

## Étape 5 — Importer les workflows

Dans n8n → Workflows → Import :
1. `n8n/01-import-playlist.json`
2. `n8n/02-discover-films.json`
3. `n8n/03-verify-library.json`

Activer chaque workflow après import.

---

## Utilisation

### Importer des épisodes d'une playlist YouTube

```bash
curl -X POST https://ton-n8n.com/webhook/qa-import-playlist \
  -H "Content-Type: application/json" \
  -d '{
    "playlist_url": "https://youtube.com/playlist?list=PLxxxxx",
    "series_id": "ertugrul",
    "season": "3",
    "lang": "ar",
    "start_ep": 52
  }'
```

**Series IDs disponibles :**
`ertugrul`, `osman`, `wadi`, `hufra`, `eskiya`, `yunusemre`, `omar`, `taer`, `fazilet`, `ask`

**Langues :** `ar` (العربية), `darija` (الدارجة), `tr` (التركية), `fr` (Français)

---

### Découvrir et importer des films turcs

```bash
curl -X POST https://ton-n8n.com/webhook/qa-discover-films \
  -H "Content-Type: application/json" \
  -d '{
    "query": "فيلم تركي مدبلج عربي دراما 2024",
    "category": "دراما",
    "lang": "ar",
    "max": 20
  }'
```

**Requêtes de recherche recommandées :**
```
فيلم تركي مدبلج عربي دراما 2024
فيلم تركي مدبلج عربي رعب إثارة
فيلم تركي مدبلج عربي أكشن
فيلم تركي مدبلج عربي رومانسي
فيلم تركي مدبلج عربي تاريخي
فيلم تركي مدبلج بالدارجة
فيلم تركي مدبلج عربي كوميديا
Turkish movie dubbed Arabic 2023 full
```

---

### Chercher sans importer (prévisualiser d'abord)

```bash
curl -X POST https://qisas-asturiya.vercel.app/api/n8n?action=search-films \
  -H "Authorization: Bearer TON_N8N_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"query": "فيلم تركي مدبلج عربي 2024", "max": 20}'
```

Retourne les `ytIds` — tu peux les inspecter puis les envoyer à `import-films`.

---

### Importer des films avec des ytIds spécifiques

```bash
curl -X POST https://qisas-asturiya.vercel.app/api/n8n?action=import-films \
  -H "Authorization: Bearer TON_N8N_SECRET" \
  -H "Content-Type: application/json" \
  -d '{
    "ytIds": ["VIDEO_ID_1", "VIDEO_ID_2", "VIDEO_ID_3"],
    "category": "أكشن",
    "lang": "ar"
  }'
```

---

### Vérifier l'état de la bibliothèque

```bash
curl https://qisas-asturiya.vercel.app/api/n8n?action=status \
  -H "Authorization: Bearer TON_N8N_SECRET"
```

---

### Vérification manuelle des liens

```bash
curl -X POST https://qisas-asturiya.vercel.app/api/n8n?action=verify \
  -H "Authorization: Bearer TON_N8N_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"ytIds": ["dQw4w9WgXcQ", "VIDEO_ID_2"]}'
```

---

## Workflow agents (Claude Code)

Pour lancer une session d'ajout de contenu :

```bash
# 1. Chercher les playlists d'une série
curl -X POST https://qisas-asturiya.vercel.app/api/n8n?action=search-films \
  -H "Authorization: Bearer $N8N_SECRET" \
  -d '{"query": "قيامة عثمان مدبلج عربي الموسم 4", "max": 50, "duration_filter": "long"}'

# 2. Importer une playlist complète
curl -X POST https://ton-n8n.com/webhook/qa-import-playlist \
  -d '{"playlist_url": "URL_TROUVÉE", "series_id": "osman", "season": "4", "lang": "ar"}'

# 3. Vérifier le résultat
curl https://qisas-asturiya.vercel.app/api/n8n?action=status -H "Authorization: Bearer $N8N_SECRET"
```

---

## Catégories de films à couvrir (roadmap)

| Catégorie | Requête de recherche | Priorité |
|-----------|---------------------|----------|
| دراما | `فيلم تركي مدبلج عربي دراما 2024` | 🔴 Haute |
| رعب / إثارة | `فيلم تركي رعب مدبلج عربي` | 🔴 Haute |
| أكشن | `Turkish action movie Arabic dubbed` | 🟡 Moyen |
| رومانسية | `فيلم رومانسي تركي مدبلج عربي` | 🟡 Moyen |
| تاريخي | `فيلم تاريخي تركي مدبلج عربي` | 🟡 Moyen |
| دارجة | `فيلم تركي مدبلج بالدارجة المغربية` | 🟠 Spécial |
| كوميديا | `فيلم تركي كوميديا مدبلج عربي` | 🟢 Bas |

## Séries à compléter (priorité)

| Série | Actuel | Total | Manquant |
|-------|--------|-------|---------|
| osman | 109 | 337 | 228 eps |
| wadi | 40 | 250 | 210 eps |
| eskiya | 26 | 249 | 223 eps |
| hufra | 27 | 100 | 73 eps |
| ertugrul | 112 | 150 | 38 eps |
| yunusemre | 54 | 60 | 6 eps |
