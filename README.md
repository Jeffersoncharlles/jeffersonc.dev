# jeffersonc.dev

A personal portfolio and blog built as an interactive developer experience. The project blends a VS Code-inspired shell, responsive device mockups, a separate editorial blog, and a Payload CMS-backed content layer.

Um portfólio pessoal e blog construídos como uma experiência interativa para devs. O projeto combina uma interface inspirada em VS Code, mockups responsivos de dispositivos, um blog editorial separado e uma camada de conteúdo baseada em Payload CMS.

## Overview / Visão geral

This repository is organized around three main experiences:

- The main portfolio uses a VS Code-style interface with a file explorer, header, and responsive tablet/mobile mockups.
- The blog uses a cleaner editorial layout with its own route group and transitions.
- The content model is managed through Payload CMS and a PostgreSQL database.

Este repositório é organizado em torno de três experiências principais:

- O portfólio principal usa uma interface no estilo VS Code, com explorer, header e mockups responsivos para tablet/mobile.
- O blog usa um layout editorial mais limpo, com seu próprio grupo de rotas e transições.
- O modelo de conteúdo é gerenciado com Payload CMS e PostgreSQL.

## Stack

### Frameworks and runtime / Frameworks e runtime

- Next.js 16.2.2
- React 19.2.4
- React DOM 19.2.4
- TypeScript 5

### CMS and data / CMS e dados

- Payload 3.82.1
- @payloadcms/next 3.82.1
- @payloadcms/db-postgres 3.82.1
- @payloadcms/richtext-lexical 3.82.1
- PostgreSQL
- Zod for environment validation and runtime input validation

### UI, styling, and motion / UI, estilos e movimento

- Tailwind CSS v4
- @tailwindcss/postcss
- Framer Motion
- motion
- Lucide React
- class-variance-authority
- clsx
- tailwind-merge
- radix-ui
- date-fns

### Testing and quality / Testes e qualidade

- Jest
- jest-environment-jsdom
- @testing-library/react
- @testing-library/jest-dom
- @testing-library/user-event
- Playwright
- @playwright/test
- @faker-js/faker
- Biome
- lefthook

## Project structure / Estrutura do projeto

- `src/app/(app)/(vscode)` - main portfolio shell with the VS Code-inspired layout and device mockups.
- `src/app/(app)/(vscode)/(rotas)` - route content rendered inside the editor-like shell.
- `src/app/(app)/blog` - editorial blog layout and blog routes.
- `src/app/(payload)` - Payload admin, API, and related server routes.
- `src/app/_components` - app-level shared components, such as the header.
- `src/components` - reusable UI components, sidebar pieces, and device mockups.
- `src/core` - clean architecture layers: application, domain, and infra.
- `src/core/application` - use cases and repository contracts.
- `src/core/domain` - domain entities.
- `src/core/infra` - CMS collections, repositories, and service implementations.
- `src/shared` - shared utilities, environment validation, and app-wide helpers.
- `src/tests` - unit and component tests.
- `src/tests/components` - component-oriented tests.
- `src/tests/core` - infrastructure and repository tests.
- `migrations` - database migration files.
- `public` and `media` - static assets and image files.
- `playwright.config.ts` - Playwright configuration. No checked-in e2e specs are currently present.

## Payload CMS and database / Payload CMS e banco

The CMS is configured in `payload.config.ts` and uses PostgreSQL through the Payload Postgres adapter.

Collections and globals currently registered:

- Users
- HomeCards
- Projects
- Infrastructure
- Education
- Blog
- Media
- SystemStatus global

Environment variables required by the app:

- `DATABASE_URL`
- `PAYLOAD_SECRET`
- `NEXT_PUBLIC_SERVER_URL`
- `NODE_ENV` is optional and defaults to `development`

The environment contract is validated in `src/shared/env/index.ts`.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Starts the Next.js development server. |
| `pnpm build` | Builds the production application. |
| `pnpm start` | Starts the production server. |
| `pnpm lint` | Runs Biome checks. |
| `pnpm format` | Formats the codebase with Biome. |
| `pnpm typecheck` | Runs TypeScript without emitting output. |
| `pnpm test` | Runs Jest unit tests. |
| `pnpm test:watch` | Runs Jest in watch mode. |
| `pnpm test:coverage` | Runs Jest coverage output. |
| `pnpm test:e2e` | Runs Playwright tests. |
| `pnpm test:e2e:ui` | Runs Playwright with UI mode. |
| `pnpm seed` | Seeds the database through Payload. |
| `pnpm postinstall` | Regenerates the Payload import map and types. |
| `pnpm payload:fix` | Helper script for Payload code generation. |

## Development

```bash
pnpm install
pnpm dev
```

Open the local app in the browser after the dev server starts.

For a more complete local workflow, use:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm test:e2e
```

## Notes

- The main portfolio experience is intentionally split into desktop, tablet, and mobile shells.
- The codebase uses a clean architecture approach in `src/core` instead of putting all data logic inside route handlers.
- Test files currently live under `src/tests`, not a root-level `tests` directory.
- E2E tooling is configured, but no committed Playwright spec files are present at the moment.
