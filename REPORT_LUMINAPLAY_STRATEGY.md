# REPORT — Stratégie Bibliothèque Professionnelle v18
## Inspiré LuminaPlay, adapté public arabe/marocain

**Date :** 2026-05-17  
**Version déployée :** v18

---

## Chantier v18 — ce qui a été fait

| # | Tâche | Statut |
|---|-------|--------|
| 1 | Renommer "مكتبة الفيديو" → "مكتبة المسلسلات التركية" (videos.html, series.html, index.html, nav, titres, meta) | ✅ |
| 2 | Cacher séries avec 0 épisode (`status: 'hidden'`) | ✅ v17 |
| 3 | Classement complet : complete / near_complete / partial / selected / hidden | ✅ v17 |
| 4 | Afficher "X من أصل Y حلقة" + statut coloré + source | ✅ |
| 5 | Admin : nextPageToken pagination playlists >50 épisodes | ✅ v17 |
| 5 | Admin : preview avant import + détection doublons | ✅ v17 |
| 5 | Admin : `embeddable` + `lastCheckedAt` stockés à l'import | ✅ v17 |
| 6 | Page série dédiée `series.html?id=...` — hero, onglets saisons, grille épisodes, modal player | ✅ |
| 6 | Cartes series.html : clic → `series.html?id=...` (plus d'ouverture inline) | ✅ |
| 7 | Renommer "الصوت" → "النسخة المتوفرة" (videos.html + series.html modal) | ✅ |
| 8 | Bloc "ملخص بالدارجة 🇲🇦" dans modal player series.html (s'affiche si `ep.darijaDesc` existe) | ✅ |
| 8 | Badge "🇲🇦 دارجة" sur la carte épisode si darijaDesc présent | ✅ |
| 8 | Warning embed si `ep.embeddable === false` | ✅ |
| 9 | REPORT_LUMINAPLAY_STRATEGY.md | ✅ |

---

## Ce qui distingue LuminaPlay (principes, pas copie)

LuminaPlay est inaccessible depuis le serveur (403), mais ses patterns standards sont :
- **Hierarchy claire** : catalogue → page série → player
- **Metadata rich** : note, année, durée totale, genres, statut disponibilité
- **Progress tracking** : % regardé par série, épisode suivant suggéré
- **Fiabilité signalée** : badges clairs "disponible", "incomplet", "bientôt"
- **Single-page par série** : une URL indexable par série, pas de modal

**Ce qu'on a adapté pour notre public arabe/marocain :**
- "ملخص بالدارجة" — réponse directe au besoin linguistique marocain
- "النسخة المتوفرة" — terminologie plus précise que "الصوت" pour les versions doublées
- Classification honnête visible (قيد الإكمال, حلقات مختارة) plutôt que cacher l'incomplet
- URL propre `series.html?id=ertugrul` — partageable, indexable

---

## Architecture actuelle

```
videos.html          → catalogue (cartes séries + films)
  └── click carte    → series.html?id=<id>
series.html?id=...   → page dédiée (hero + saisons + grille + modal player)
admin.html           → import playlist YouTube, gestion bibliothèque
videos-data.js       → source unique : SERIES_INFO + VIDEO_LIBRARY + TURKISH_FILMS
api/youtube.js       → proxy YouTube API (playlist, video, oembed)
```

---

## État des séries au 2026-05-17

| Série | Dispo | Total | % | Statut affiché | Priorité ajout |
|-------|-------|-------|---|----------------|---------------|
| ertugrul | 112 | 150 | 75% | شبه مكتملة | 🟡 Moyen |
| yunusemre | 54 | 60 | 90% | مكتملة ✓ | 🟢 6 eps seulement |
| osman | 109 | 337 | 32% | قيد الإكمال | 🔴 Priorité haute |
| wadi | 40 | 250 | 16% | قيد الإكمال | 🔴 Priorité haute |
| hufra | 27 | 100 | 27% | قيد الإكمال | 🔴 Priorité haute |
| eskiya | 26 | 249 | 10% | قيد الإكمال | 🔴 Priorité haute |
| omar | 6 | 31 | 19% | قيد الإكمال | 🟡 Moyen |
| taer | 9 | 161 | 6% | حلقات مختارة | 🟠 Décider |
| fazilet | 5 | 80 | 6% | حلقات مختارة | 🟠 Décider |
| ask | 6 | 79 | 8% | حلقات مختارة | 🟠 Décider |
| harim | 0 | 139 | 0% | **masquée** | Ajouter ou supprimer |

**Films turcs :** 159 (f1–f158 + darija_1)

---

## Prochaines étapes recommandées

### Court terme (impactant)
1. **Compléter yunusemre** — 6 épisodes manquants, passer à "مكتملة ✓" réelle
2. **Décider harim** — ajouter des épisodes ou supprimer définitivement la série
3. **Ajouter des épisodes osman + wadi** — séries populaires mais très incomplètes
4. **Ajouter `darijaDesc`** sur quelques épisodes pilotes (ertugrul s1e1, osman s1e1) — tester le bloc Darija

### Moyen terme (crédibilité)
5. **Vérification hebdomadaire ytId** — certains peuvent être supprimés de YouTube
6. **"Épisode suivant" automatique** dans series.html modal — après fin lecture, proposer l'épisode suivant
7. **Recherche dans series.html** — filtrer les épisodes par numéro ou titre dans la page série
8. **Compteur de vues local** — utiliser localStorage, afficher badge "الأكثر مشاهدة"

### Long terme (différenciation)
9. **Page films dédiée** — `film.html?id=...` similaire à series.html pour les TURKISH_FILMS
10. **Transcriptions Darija** — partenariat ou IA pour générer des résumés par épisode
11. **SEO** — sitemap dynamique, meta OG par série, JSON-LD VideoObject

---

## Notes architecture

- **Pas de backend** : tout est statique + Vercel serverless `/api/youtube.js`
- **Source de vérité unique** : `videos-data.js` — ne jamais dupliquer les données
- **Clé YouTube API** : configure via Vercel env `YOUTUBE_API_KEY` pour l'admin
- **Token Vercel** : à révoquer sur vercel.com/account/tokens après chaque déploiement
