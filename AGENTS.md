# Neo — Agent guide

## Stack
TypeScript + React 18 + React Router 5 + Redux Toolkit + Redux Form + RsBuild + CSS + Jest + MSW

## Commands
| Action | Command |
|---|---|
| Dev server | `npm run start` (rsbuild dev, port 8080, hot) |
| Production build | `npm run build` (outputs to `dist/`) |
| Lint | `npm run eslint` |
| Lint + fix | `npm run eslint:fix` |
| Format check | `npm run prettier` |
| Format write | `npm run prettier:write` |
| Unit tests | `npm test` (alias: `jest ./src`) |
| Integration tests | `npm run test:integration` (alias: `jest ./tests`) |
| Coverage | `npm run coverage` |

## Env
- Dev: `.env.dev.js` → `apiUrl: 'http://api.neo.local/'`
- Production: `.env.production.js` → `apiUrl: '/api'`
- Global `APP_ENV` injected via RsBuild `source.define` (declared in `globals.d.ts`)
- Install with `npm ci` (Docker); `legacy-peer-deps=true` in `.npmrc`
- Backend: separate repo at `https://github.com/Mirantus/neo-api`

## Architecture
- **Entry**: `src/index.tsx` renders `<Provider><Router history={createBrowserHistory()}><Application /></Router></Provider>` into `#app`
- **Store**: `src/store/index.ts` — Redux Toolkit `configureStore` with reducers: `form`, `items`, `loading`, `message`, `user`
- **Routing**: React Router v5 (`react-router`, not `react-router-dom`). Routes in `src/components/application.tsx`. Lazy-loaded via `React.lazy` + `Suspense`
- **API**: `src/utils/api.ts` custom fetch — reads `token` cookie via `js-cookie`, appends to every request, uses `APP_ENV.apiUrl`
- **Aliases** (RsBuild + tsconfig): `pages/*` → `src/pages/*`
- **Styling**: CSS + PostCSS (autoprefixer) via RsBuild

## Conventions
- **Prettier**: 120 print width, 4-space tabs, trailing commas es5 (`src/.prettierrc`)
- **Lint**: ESLint with `@typescript-eslint`, `react`, `react-hooks`, `import` plugins; extends `prettier`
- **Husky**: pre-commit = `lint-staged` (runs prettier on staged files); pre-push = `npm t` (unit tests)
- **File naming**: Components PascalCase; reducers, slices, utils camelCase

## Testing quirks
- Unit tests live next to source files (`*.spec.ts` / `*.spec.tsx`), run with `jest ./src`
- Integration tests in `tests/`, use React Testing Library + MSW (mock server at `tests/mocks/server.ts`), run with `jest ./tests`
- `setupTests.ts` configures Enzyme adapter + `jest.setTimeout(30000)` + `whatwg-fetch` polyfill
- jest config has `testEnvironment: "node"` (not jsdom); MSW handlers and `whatwg-fetch` polyfill provide DOM API for integration tests
- Integration tests use `createMemoryHistory` via a test wrapper (`tests/mocks/application.tsx`)
- `ts-jest` is used for TypeScript transform
- Snapshot tests exist via `react-test-renderer`

## Docker
- `docker-compose.yml` — dev service (builds Dockerfile, exposes 8080, syncs files)
- `Dockerfile` — dev image (node:18-alpine, `npm ci`, `npm run start`)
- `Dockerfile.prod` — multi-stage: build (node:18-alpine) → nginx serving `dist/`
