# Personal Ops UI

React-based Personal Ops dashboard (training + nutrition + recovery) backed by Supabase.

- Hosted on Cloudflare Pages.
- Uses Supabase Auth + Personal Ops tables.
- Legacy static UIs are preserved under `legacy/` and `archive/`.

## Stack

- React + Vite
- Supabase JS (auth + data)
- Cloudflare Pages for hosting

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Data source

This UI reads the latest `pos_report_daily` row from Supabase.

## Legacy UI snapshots

- `legacy/` contains the last static HTML/JS dashboard and report.
- `archive/` contains historical variants recovered from git history.
