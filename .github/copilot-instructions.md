<!-- Copilot / AI agent instructions for the CardForge project -->
# CardForge — Copilot instructions

Purpose: give an AI coding agent immediate, actionable context so it can make safe, targeted edits to this repository.

Quick start (how the app runs)
- Open `index.html` in a browser (no build step). The app uses native ES modules (script type="module").
- html2canvas is loaded from a CDN in `index.html`; an internet connection is required for exports to work.

High-level architecture (big picture)
- Entry: `index.html` — mounts UI, imports JS modules with `type="module"`.
- UI -> DOM-driven: form inputs with unique `id`s are read directly by modules.
- Modules in `scripts/` hold small, single-purpose exports:
  - `CardRenderer.js` — produces DOM preview from form values (exported renderCard()).
  - `ThemeManager.js` — toggles dark mode and persists theme in localStorage (exported initTheme()).
  - `StorageManager.js` — saveData()/loadData() persist the rendered card to localStorage.
  - `ExportManager.js` — downloadCard() uses html2canvas to export the visible card as PNG.
  - `TemplateSelector.js` — currently empty; treat as the place for template logic.

Key patterns & conventions (project-specific)
-- DOM-first, id-based wiring: functions expect specific DOM ids (for example: cardForm, displayName, photoUpload). Use those ids when adding features.
- No bundler / no npm: keep edits compatible with direct browser module imports and relative paths.
- Small modules, named exports: add new features as small modules and import them in `index.html`'s module script.
- Persisted state: localStorage keys are used directly (see `StorageManager.js` — key `businessCard`).

Integration points & external deps
- html2canvas CDN in `index.html` — used by `ExportManager.js`.
- Browser APIs: FileReader for image uploads, localStorage for persistence.

Important, discoverable issues to watch for
- `scripts/CardRenderer.js`: the photo input is read as `.value` but later used as if it were the input element (`photoInput.files[0]`) — this is a bug to fix when handling uploads.
- `scripts/StorageManager.js` loadData() assigns `displayPhone` from `data.email` (likely a copy/paste bug). Verify and correct.
- `TemplateSelector.js` is empty; adding templates should follow the module pattern used elsewhere and be imported by `index.html`.

Recommended change-safety rules for agents
- Preserve the no-build, browser-module execution model. If adding npm packages, also add clear instructions and a minimal build path.
- When editing exports or DOM ids, update `index.html` imports and listeners accordingly.
- Make small, isolated commits that change one module or one DOM id mapping at a time.

Examples (where to look)
- To render a card: 'renderCard()' in `scripts/CardRenderer.js` — updates the display elements (displayName, displayTitle, etc.).
- To save/load: `saveData()` / `loadData()` in `scripts/StorageManager.js` — uses `localStorage.setItem('businessCard', ...)`.
- To export: `downloadCard()` in `scripts/ExportManager.js` — calls `html2canvas(card).then(...)`.

Developer workflows & debugging tips
- Run: open `index.html` in a browser (File → Open). Use DevTools to monitor console logs; modules use console.log("Rendering card function triggered") etc.
- Debugging uploads: test with the browser's File input and inspect `photoUpload.files` in console. Fix the `.value` vs element bug first.
- Persistent state: clear `localStorage` when testing load/save by running `localStorage.removeItem('businessCard')` in DevTools.

When to ask a human
- Ambiguous UX changes (layout, templates) — ask for design intent or sample assets.
- Adding a build system or external dependencies — confirm whether the project owner wants a bundler.

If you edit files, produce a small test step in your commit message (e.g., "Open index.html, fill form, click Generate, Download") so reviewers can validate behavior quickly.

Contact / context
- Owner: repository root and README.md describe this as a simple browser-based business card generator.

End of instructions.
