# Contributing to Feather Speed (`CONTRIBUTING.md`)

Thank you for helping make **Feather Speed** the standard for hardware-aware adaptive frontend and backend apps! Both **human developers** and **AI coding agents** are welcome to contribute.

---

## 1. High-Impact Ways to Contribute
- **Hardware & Network Heuristics:** Improve RAM, CPU core, battery, and `NetworkInformation` detection in `src/frontend.mjs` and `src/backend.mjs`.
- **Framework & Runtime Adapters:** Add zero-dependency helpers for Next.js, Astro, Vite, Bun, Cloudflare Workers, or Node.js worker pools.
- **Interactive Live Simulator:** Enhance `preview/index.html` with additional device presets (e.g., school Chromebooks, Raspberry Pi, low-tier VPS).

## 2. Human & AI Agent Guardrails (`AGENTS.md` + `llms.txt`)
- **Zero Dependencies (`0` npm packages):** Use only standard browser APIs and `node:os` built-ins.
- **Graceful Fallback:** Browser heuristics must degrade cleanly when `navigator.deviceMemory` or `navigator.connection` is unavailable (Safari/Firefox).
- **Visible Files Only:** Keep all agent docs, specs, and skills in visible root directories (`AGENTS.md`, `llms.txt`, `HANDOFF.md`, `mistakes.md`, `skills/`).

## 3. 60-Second Verification Gate (Required Before Every PR)
```bash
node bin/feather-perf.mjs diagnose
```

## 4. 3-Step Pull Request Workflow
1. **Fork & Branch:** `git checkout -b feat/your-adaptive-improvement`
2. **Verify Locally:** Run `node bin/feather-perf.mjs diagnose` and confirm clean `ECO` / `BALANCED` / `ULTRA` JSON telemetry output.
3. **Submit a Pull Request:** Open a PR against `main` with your CLI verification output. *(Mobile contributors can edit docs or `skills/adaptive-lightweight-apps/SKILL.md` directly in the GitHub web/mobile UI.)*

## 5. IP Safety & MIT License
All contributions must be original clean-room code and are licensed under the repository's [MIT License](LICENSE).
