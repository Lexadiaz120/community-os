# @community-os/website

Spanish-language marketing/sales landing page for Community OS itself
(not to be confused with the per-event landing page module). Vite + Vue 3
+ Tailwind, consuming `@community-os/ui` for tokens and components.

## Develop

```bash
pnpm --filter @community-os/website dev
```

## Build

```bash
pnpm --filter @community-os/website build
```

Builds with `base: "/community-os/"` (GitHub Pages project-site path) by
default — override with `BASE_PATH=/` for a custom domain.

## Deploy

Pushes to `main` that touch this app (or `packages/ui`) trigger
[`.github/workflows/deploy-website.yml`](../../.github/workflows/deploy-website.yml),
which builds and publishes `dist/` to GitHub Pages.
