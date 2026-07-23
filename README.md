# Community OS

Event management platform (public event pages, organizer dashboard, mobile
check-in scanner) as a pnpm monorepo of Vue 3 + Vite microfrontends sharing a
common UI package.

## Status

**Design phase — done.** Three screens designed in Claude Design (Tailwind
mockups, Slate/Neutral + Indigo palette): Event Landing Page, Organizer
Dashboard, and the mobile Check-in Console (idle scanner + valid/duplicate/
invalid-ticket states).

**Engineering phase — foundation laid.** Monorepo scaffolding and the shared
`@community-os/ui` package exist; no app (landing/dashboard/check-in) has
been scaffolded yet.

## Structure

```
community-os/
├── packages/
│   └── ui/                  # @community-os/ui — shared design system
│       ├── tailwind.config.ts   # preset: colors/radius/shadow tokens
│       └── src/
│           ├── styles/tokens.css    # HSL CSS variables, light/dark
│           ├── components/          # Button, Badge, Input, Card*, Table*, Modal
│           ├── utils/cn.ts          # clsx + tailwind-merge
│           └── index.ts             # public exports
└── apps/                     # microfrontends — not created yet
```

`@community-os/ui` ships source (no build step): consuming apps compile it
through their own Vite, so changes hot-reload across the package boundary.

## Getting started

```bash
corepack enable
corepack prepare pnpm@9.15.0 --activate
pnpm install
```

```bash
pnpm dev         # runs `dev` in every workspace package that has one
pnpm build       # runs `build` in every workspace package that has one
pnpm lint
pnpm typecheck
```

## Next steps

- Scaffold `apps/landing`, `apps/dashboard`, `apps/checkin` with Vite +
  vue-ts, each consuming `@community-os/ui`.
- Wire each app's `tailwind.config.ts` to the `@community-os/ui` preset.
- Replace the Claude Design mockups with real data/API integration.
