# Personal Ops UI Setup

## Cloudflare Pages

This UI is deployed on Cloudflare Pages.

- Project: `personal-ops-ui`
- Production URL: https://personal-ops-ui.pages.dev

Deploy from the repo root:

```bash
npm install
npm run build
wrangler pages deploy dist --project-name personal-ops-ui
```

## Supabase

Supabase credentials are configured in `src/lib/supabase.js`.

## Legacy UI

- `legacy/` holds the previous static dashboard and report files.
- `archive/` holds older variants pulled from history.
