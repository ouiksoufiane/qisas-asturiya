# REPORT_VIDEO_LIBRARY — v17

**Date:** 2026-05-17  
**Version:** videos-data.js v17  
**Scope:** Audit complète مكتبة الفيديو — crédibilité, cohérence, admin

---

## Fichiers modifiés

| Fichier | Changements |
|---------|-------------|
| `videos-data.js` | Ajout champ `status` sur les 11 séries · correction `osman.totalEps` (170→337) · correction `eskiya.totalEps` (145→249) · bump v16→v17 |
| `videos.html` | Renommage "الصوت"→"النسخة المتوفرة" · `buildSeries()` filtre les séries `hidden` · `renderStats()` exclut les séries `hidden` du dénominateur · `getSeriesStatus()` reçoit `explicitStatus` (3ᵉ arg) · `renderHero()` et `renderSeries()` passent le statut explicite |
| `admin.html` | `fetchPlaylist()` : pagination nextPageToken (bouton "جلب الصفحة التالية") · `importSelected()` : stocke `embeddable` et `lastCheckedAt` · bump `?v=17` |

---

## Problèmes détectés et corrigés

### 1. Mauvais `totalEps` (faux-positifs "needs_review")
- **osman** : déclaré 170 épisodes alors que la série compte 337+ épisodes en arabe. 40 entrées étaient marquées en dépassement. → Corrigé : `totalEps: 337`
- **eskiya** : déclaré 145 épisodes, maximum trouvé = 249. → Corrigé : `totalEps: 249`
- Après correction : **0 épisode hors-index**

### 2. Série sans aucune entrée (harim)
- **harim** : 0 épisodes dans `VIDEO_LIBRARY`, s'affichait avec "0 حلقة" → peu crédible.
- → Corrigé : `status: 'hidden'` — filtrée de l'affichage et du calcul de stats.

### 3. Statuts `getSeriesStatus()` non appliqués
- `renderHero()` et `renderSeries()` appelaient `getSeriesStatus(available, total)` sans passer le `status` explicite défini dans `SERIES_INFO`. Le badge affiché ignorait les overrides manuels (ex. `yunusemre` completée à 90% mais non marquée `complete`).
- → Corrigé : les deux fonctions passent maintenant `s.status` comme 3ᵉ argument.

### 4. Import playlist sans pagination
- `fetchPlaylist()` ne gérait pas le `nextPageToken` YouTube — impossible d'importer plus de 50 épisodes d'une playlist.
- → Corrigé : stockage du token, bouton "جلب الصفحة التالية" (hidden si pas de page suivante), accumulation dans `importPreviewData`.

### 5. Métadonnées manquantes à l'import
- `importSelected()` ne stockait pas `embeddable` ni `lastCheckedAt` dans les entrées créées.
- → Corrigé : les deux champs sont ajoutés à chaque entrée importée.

---

## État des séries

| Série | Dispo | Total | % | Statut | Affiché |
|-------|-------|-------|---|--------|---------|
| ertugrul | 112 | 150 | 75% | near_complete | شبه مكتملة |
| osman | 109 | 337 | 32% | partial | قيد الإكمال |
| harim | 0 | 139 | 0% | **hidden** | **masquée** |
| wadi | 40 | 250 | 16% | partial | قيد الإكمال |
| hufra | 27 | 100 | 27% | partial | قيد الإكمال |
| eskiya | 26 | 249 | 10% | partial | قيد الإكمال |
| yunusemre | 54 | 60 | 90% | complete | مكتملة ✓ |
| omar | 6 | 31 | 19% | partial | قيد الإكمال |
| taer | 9 | 161 | 6% | selected | حلقات مختارة |
| fazilet | 5 | 80 | 6% | selected | حلقات مختارة |
| ask | 6 | 79 | 8% | selected | حلقات مختارة |

**Total épisodes disponibles :** 395 sur 1 537 épisodes attendus (10 séries actives)  
**Films turcs :** 159 (f1–f158 + darija_1)

---

## Prochaines étapes recommandées

1. **Ajouter des épisodes harim** (ou supprimer définitivement la série) — actuellement cachée
2. **Campagne d'ajout pour osman/wadi/eskiya** — toutes sous 35%, impression de bibliothèque incomplète
3. **Vérifier les ytId** des séries `selected` — certains peuvent être supprimés/privés depuis leur import initial
4. **Compléter yunusemre** — à 90%, 6 épisodes manquants seulement
5. **Ajouter `needs_review`** automatique dans admin si `episode > totalEps` lors de l'import
