# Ordino Cypress Boilerplate (v1)

Cypress-based test project using `@ordino.ai/ordino-engine`.

---

## What’s included

- **UI tests:** Login and home flows against the demo app (`https://demoapp.ordino.ai/login`).
- **API tests:** CRUD against the demo API (`https://demoapi.ordino.ai/api/`).
- **Reports:** Mochawesome and Allure output under `ordino-report/`.
- **Entrypoint:** `ordino.initialize.js` — single script for install, run, and open.

---

## Project structure

```
.
├── ordino/
│   ├── e2e/
│   │   ├── ui/              # UI specs (e.g. ordino_login.cy.ts, ordino_home.cy.ts)
│   │   └── api/             # API specs (e.g. ordino_service.cy.ts)
│   ├── service/             # API service layer and payloads
│   ├── pages/               # Page objects (OrdinoLoginPage, OrdinoHomePage, OrdinoSidePanel)
│   ├── support/             # e2e.ts, commands.ts
│   └── fixtures/            # Test fixtures (if any)
├── ordino.config.ts         # Cypress config (specPattern, env, reporter)
├── ordino.initialize.js     # CLI: initialize, runTest, openTest
├── package.json
├── tsconfig.json
└── .gitignore
```

---

## Prerequisites

- **Node.js** 18+ (or as required by Cypress and the engine).
- **npm** (or use the project’s install script).

---

## Setup

1. **Install dependencies**

   ```bash
   npm run initialize
   ```

   This removes `package-lock.json` (if present) and runs `npm install`. You can pass extra flags, e.g.:

   ```bash
   npm run initialize -- --legacy-peer-deps
   ```

2. **Environment**

   If your project includes a `.env` file, it may look like:

   ```
   PROJECT_ID=your-project-uuid
   ```

   Do not edit the project ID in the env.

---

## NPM scripts

| Script | Command | Description |
|--------|--------|-------------|
| `initialize` | `node ordino.initialize.js --initialize` | Install dependencies (see Setup). |
| `oi:run:test` | `node ordino.initialize.js --runTest` | Run all tests headless. |
| `oi:open:test` | `node ordino.initialize.js --openTest` | Open Cypress interactive runner. |

All test commands use `ordino.config.ts`. Specs are under `ordino/e2e/**/*.cy.ts`. Reports go to `ordino-report/`.

---

## How to run tests

- **Headless (CI-friendly):**
  ```bash
  npm run oi:run:test
  ```
- **Interactive (Cypress UI):**
  ```bash
  npm run oi:open:test
  ```
- **With extra Cypress args:**
  ```bash
  npm run oi:run:test -- --env shard=1/2
  npm run oi:run:test -- --spec "ordino/e2e/ui/**/*.cy.ts"
  ```

---

## How to add or change tests

1. **UI tests**  
   - Add or edit specs under `ordino/e2e/ui/` (e.g. `ordino_login.cy.ts`, `ordino_home.cy.ts`).  
   - Use the existing page objects in `ordino/pages/` (e.g. `OrdinoLoginPage`, `OrdinoHomePage`) or add new ones.  
   - Use `ordinoSuite` from `@ordino.ai/ordino-engine` for tagged suites if desired.

2. **API tests**  
   - Add or edit specs under `ordino/e2e/api/`.  
   - Reuse or extend `ordino/service/requests/ordinoService.ts` and payloads in `ordino/service/payloads/`.

3. **Config**  
   - Change `specPattern`, `baseUrl`, reporter, or env in `ordino.config.ts`.  
   - Base URL for UI tests is in `e2e.baseUrl` (default: `https://demoapp.ordino.ai/login`).  
   - API base URL is set inside the service (default: `https://demoapi.ordino.ai/api/`).

4. **Support**  
   - Global setup and custom commands live in `ordino/support/e2e.ts` and `ordino/support/commands.ts`.

---

## Key files

- **ordino.config.ts** — Cypress configuration (specPattern, supportFile, baseUrl, reporter, env).
- **ordino.initialize.js** — Entrypoint for npm scripts (install, run, open).

---

## Troubleshooting

- **Cypress not installed or wrong version**  
  Re-run `npm run initialize` or run `npx cypress install` if needed.

- **TypeScript or module errors**  
  Check `tsconfig.json` and that dependencies are installed.

- **Allure / Mochawesome reports missing**  
  Ensure at least one test run has completed; reports are written to `ordino-report/`.

---

## Next steps

- Point `baseUrl` and API base URLs to your own app when moving off the demo.  
- Add CI (e.g. GitHub Actions or GitLab CI) that runs `npm run oi:run:test` and publishes or uploads `ordino-report/`.  
- Add env vars or config when you need report association or other integration.
