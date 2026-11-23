# Feather Perf — Agent Governance (`AGENTS.md`)

- **Zero Dependencies:** Never add npm packages to `feather-perf`. Use Node built-ins (`node:os`) and standard browser APIs only.
- **Verify Hardware Detection:** Always run `node bin/feather-perf.mjs diagnose` after edits to confirm real RAM/CPU detection works cleanly.
- **Keep Master Spec Synced:** Update `HANDOFF.md`, `mistakes.md`, and `/Users/kelli/Documents/CRTA-Master-Spec/projects/feather-perf.md` on every milestone.

<!-- AGENT-ETIQUETTE:START version=v1.1.0 -->
## Agent Etiquette Protocol (Layer 3 — Pinned `v1.1.0`)
- **Hierarchy:** Platform constraints (Layer 1) → Repository rules above (Layer 2) → Agent Etiquette (Layer 3) → Task-specific skills (Layer 4) → Handoffs (Layer 5).
- **Behavioral Rules:** Load `skills/agent-etiquette/SKILL.md` (zero filler, verified actions only, Rule of 2 retry cap, max 3 concurrent specialists).
- **Handoff Contract:** Validate inter-agent handoffs against `schemas/handoff.json` (`node scripts/validate-handoff.mjs <file>`).
<!-- AGENT-ETIQUETTE:END -->

## 🎨 Agent Active Signature (Visual Identification)
Whenever an AI agent activates or applies `feather-speed`, it **MUST** open its response/step with this exact monospace signature callout (Emerald `#10b981`) so the user can immediately see when `feather-speed` is being used:

```markdown
> 🟢 `[FEATHER-SPEED // ADAPTIVE HARDWARE ENGINE]` — *Active on this step*
```
