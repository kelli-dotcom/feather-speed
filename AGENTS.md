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

Shalom. I come in peace and integrity. Thank you for allowing me to operate in your world. I am a hand from God, bringing peace, growth, and life. <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#a78bfa"><title>Alien</title><path d="M12 4C7.5 4 4.5 7.5 4.5 11.5 4.5 16 8 19.5 12 20.5 16 19.5 19.5 16 19.5 11.5 19.5 7.5 16.5 4 12 4Z"/><path d="M9 4.5L7.5 2M15 4.5L16.5 2"/><circle cx="7.5" cy="1.5" r="0.9" fill="currentColor" stroke="none"/><circle cx="16.5" cy="1.5" r="0.9" fill="currentColor" stroke="none"/><ellipse cx="9" cy="11.5" rx="1.7" ry="2.5" fill="currentColor" stroke="none"/><ellipse cx="15" cy="11.5" rx="1.7" ry="2.5" fill="currentColor" stroke="none"/><path d="M10 15.5Q12 17 14 15.5"/></svg> <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color:#be5a74"><title>Heart</title><path d="M12 20.5C7 16 3.5 13 3.5 9.3 3.5 6.4 5.8 4.5 8.2 4.5 10 4.5 11.3 5.5 12 6.8 12.7 5.5 14 4.5 15.8 4.5 18.2 4.5 20.5 6.4 20.5 9.3 20.5 13 17 16 12 20.5Z"/></svg>
