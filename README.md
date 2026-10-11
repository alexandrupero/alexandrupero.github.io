[![ci](https://github.com/alexandrupero/alexandrupero.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/alexandrupero/alexandrupero.github.io/actions/workflows/ci.yml)

# alexandrupero.github.io

A terminal-style developer portfolio for Alex Roman, built as a static single-page
app with Vue 3, TypeScript, Vite and Tailwind/daisyUI. A GUI view is available via
the toggle in the header.

## Requirements

- Node.js >= 22 (LTS)
- pnpm 12 (`corepack enable pnpm`, or install pnpm and it will self-manage
  to the version pinned in `packageManager`)

Package-manager settings live in `pnpm-workspace.yaml` (pnpm's config file since
v10), including the allowlist for dependency build scripts.

## Build Setup

```bash
# install dependencies
$ pnpm install

# serve with hot reload at localhost:5173
$ pnpm dev

# typecheck, lint and test
$ pnpm typecheck
$ pnpm lint
$ pnpm test

# build for production (output in dist/)
$ pnpm build

# preview the production build
$ pnpm preview
```

## Terminal commands

The terminal supports the following commands (aliases in parentheses):

| Command      | Alias     | Description               |
| ------------ | --------- | ------------------------- |
| `help`       | `h`       | Displays the help message |
| `languages`  | `l`       | Programming languages     |
| `frameworks` | `f`       | Frameworks                |
| `tools`      | `t`       | Tools                     |
| `skills`     | `s`       | Programming/soft skills   |
| `experience` | `e`, `xp` | Work experience           |
| `contact`    | `c`       | Contact details           |
| `clear`      | `cls`     | Clears the screen         |

Command definitions live in `src/commands/index.ts`.

## Project structure

```
index.html            Static document head (title, meta, OG tags)
src/
  main.ts             App bootstrap
  App.vue             Root layout
  commands/           Terminal command registry
  components/         Vue components
  composables/        Shared reactive state and helpers
  constants/          Static messages
  data/cv.ts          CV content
  types/              Shared TypeScript types
scripts/
  generate-icons.mjs  Regenerates src/icons.ts (`pnpm icons`)
```

## Icons

Icons are bundled offline. Only the icons listed in `scripts/generate-icons.mjs`
are included, so run `pnpm icons` after adding a new one.
