# rafaelhernandezrios.github.io

Personal portfolio of **Edgar Rafael Hernández Ríos**: robotics, neurotechnology (EEG/BCI), VR and AI.
Live at <https://rafaelhernandezrios.github.io> · English at `/`, Spanish at `/es/`.

Built with [Astro](https://astro.build) as a fully static site: every page is pre-rendered HTML,
which is good for Google. Deployed to the `gh-pages` branch by GitHub Actions.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs ./dist
npm run github     # refresh src/data/github.json from the GitHub API (optional)
```

## Where to edit things

| What | File |
|---|---|
| Featured projects / case studies (EN + ES) | `src/data/projects.ts` |
| Highlights, publications, skills, stats, contact links | `src/data/site.ts` |
| Page text (hero, about, research, labels) | `src/i18n/ui.ts` |
| Repos hidden from the automatic GitHub list, description overrides | `src/data/github-config.ts` |
| Photos | `src/assets/photos/` · project images in `src/assets/projects/` |
| Videos / static files | `public/` |

### Add a project

1. Add an entry to `projects` in `src/data/projects.ts` with a unique `slug`.
2. Optional: drop an image in `src/assets/projects/`, import it at the top and set `cover`.
   Without a cover, a generated illustration is drawn from `motif`.
3. Set `featured: true` to show it on the home page. Its page appears at `/projects/<slug>/` and `/es/projects/<slug>/`.

### Automatic GitHub list

`scripts/fetch-github.mjs` runs in CI before each build (and every Monday). It reads your public,
non-fork repos, takes the description (or the first sentence of the README) and the first README image.
Repos already used in a case study are not repeated. If the API fails, the committed snapshot is used.

## SEO

- Same URL as before; English stays at the root, which is what Google already indexed.
- Google Search Console verification is kept: `public/google1519873a8e157b13.html` plus the meta tag in `src/layouts/Base.astro`.
- `sitemap-index.xml` is generated on each build; `robots.txt` points to it.
- Canonical URLs, `hreflang` en/es, Open Graph/Twitter cards and JSON-LD (`Person`, `CreativeWork`).
