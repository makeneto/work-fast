# work-fast

> One command to add the quick-flow guide to the root of any project.

## Overview

CLI that copies the `guia` folder (quick-work method, three passes per task, polish list, timebox and session close) into the root of the current project, the same way shadcn/ui copies components.

## Features

- Adds the `guia` folder with a single command
- Works with pnpm, npm and bun
- Safe by default: never overwrites an existing folder without `--force`
- Custom destination with `--dir`

## Stack

- TypeScript
- Node.js (no runtime dependencies)

## Requirements

- Node.js 18 or higher

## Local Development

```bash
pnpm install
pnpm build
pnpm pack
```

## Scripts

- `pnpm build`: compiles `src` to `dist`
- `pnpm pack`: generates a tarball to test locally

## Main Structure

```
work-fast/
├── src/index.ts
├── fluxo-rapido/
├── trabalhar-rápido.pdf
├── package.json
└── tsconfig.json
```

## Usage Flow

```bash
pnpm dlx work-fast
npx work-fast
bunx work-fast
```

Options:

- `--force`, `-f`: overwrite if the folder already exists
- `--dir`, `-d`: destination folder (default: `guia`)

## Publishing

`pnpm dlx` downloads packages from the npm registry. To publish this package,
sign in to an npm account that has permission to publish it, then run:

```bash
pnpm login
pnpm publish --no-git-checks
```

The `prepack` script builds the CLI before the package is created. The
`--no-git-checks` option is useful when publishing from a copy that is not a Git
repository. Before publishing, verify the generated package with
`pnpm pack --dry-run` and make sure it includes `dist/index.js`,
`fluxo-rapido/` and `trabalhar-rápido.pdf`.
After a successful publish, install it in any project with:

```bash
pnpm dlx work-fast
```

## Quality and Contribution

Issues and pull requests are welcome. Keep the CLI dependency-free and written in TypeScript.

## License

MIT
