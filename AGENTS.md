# Feather Speed — Fractal Agent Contract (`AGENTS.md`)

- **Pillar:** CRTA Tech Solutions (Public MIT Open-Source Toolkit · renamed from `feather-perf`)
- **North Star:** Zero-dependency hardware-aware adaptive performance engine that scales concurrency, polling, and DOM budgets to live RAM (`os.freemem()`) and CPU cores (`os.cpus().length`).

## Hard Phase Locks & Guardrails
- **Zero Dependencies:** Never add npm packages to `feather-speed`. Use Node/Bun built-ins (`node:os`) and standard Web APIs only.
- **3 Hardware Tiers:** Preserve consistent tier thresholds (`ECO`, `BALANCED`, `ULTRA`) across backend and frontend guidance.
- **Master Spec Sync:** Keep `HANDOFF.md`, `mistakes.md`, and `/Users/kelli/Documents/CRTA-Master-Spec/projects/feather-perf.md` updated on milestones.

## Stack, Entry Points & Verification
- **Stack:** Zero-dependency JavaScript (ESM) + Node/Bun built-ins.
- **Entry Points:** `bin/feather-perf.mjs` (CLI binary), `skills/adaptive-lightweight-apps/SKILL.md`, `scripts/validate-handoff.mjs`.
- **Verification:** `node bin/feather-perf.mjs diagnose` (or `/Users/kelli/.bun/bin/bun bin/feather-perf.mjs diagnose`).

## Pointers
- State & Index: [`HANDOFF.md`](HANDOFF.md) · [`mistakes.md`](mistakes.md) · [`llms.txt`](llms.txt)
- Rules & Skills: [`.agents/rules/zero-deps-hardware.md`](.agents/rules/zero-deps-hardware.md) · [`skills/adaptive-lightweight-apps/SKILL.md`](skills/adaptive-lightweight-apps/SKILL.md)
- Active Signature: `> 🟢 **𝙵𝙴𝙰𝚃𝙷𝙴𝚁-𝚂𝙿𝙴𝙴𝙳** · \`ADAPTIVE HARDWARE ENGINE\` — *Active on this step*`

## 4-Stage Loop
1. **Frame:** Target low-RAM laptops, Chromebooks, and older phones without degrading 16GB+ hosts.
2. **Bridge:** Enforce `zero-deps-hardware.md` (zero npm deps, `node:os` parity).
3. **Proof:** Run `diagnose` CLI and verify live tier output.
4. **Push-Off:** Update `HANDOFF.md` and mirror hardware budgets into consuming apps (e.g., Openflex).

## Live State & Next Action
- **State:** `v1.0` live on GitHub (`0` deps, active in Openflex).
- **Next Action:** Add optional `bin/feather-speed.mjs` alias only if publishing to npm; keep `bin/feather-perf.mjs` working for backward compatibility.
