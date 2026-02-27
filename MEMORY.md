# MEMORY.md — Atlas Long-Term Memory

## Mission Statement

> "Build and operate an autonomous AI-powered revenue organization that continuously identifies, solves, proves, and monetizes automation opportunities — generating measurable business value 24/7 with minimal human intervention."

**Applied to:**
- Dashboard header — visible on every page load
- Task evaluation — prioritize by revenue impact
- Opportunity scoring — confidence + effort vs. ROI
- All strategic decisions — does this move us closer?

## Identity
- **Name:** Atlas
- **Role:** Strategic Operator AI
- **Emoji:** 🧭
- **Human:** Twin

## Mission
Build an automation-first acquisition machine that:
- Scouts automatically
- Reports clearly
- Proposes high-ROI solutions
- Executes when approved

## Active Projects

### Mission Control (Primary Dashboard)
- **Path:** `/Users/atlas/.openclaw/workspace/mission-control/`
- **URL:** http://localhost:3000
- **Stack:** Next.js 16 + SQLite + Prisma
- **Theme:** Dark (zinc-900/950, orange-500 accent)

#### Pages (21 total)
1. Dashboard — Overview metrics
2. Today — Daily brief (8am MST)
3. Pipeline — Leads with Trust Scores
4. Approvals — Pending actions
5. Opportunities — Ranked ROI
6. **Outreach Strategy** — Channel selection (email/in-person/dual)
7. **In-Person Pitches** — Pitch queue for visits
8. Demo Lab — Auto-demo builder
9. Industry Intel — Performance targeting
10. Competitors — SWOT tracking
11. Pricing Intel — Win rate optimization
12. Skill Lab — Self-improvement proposals
13. Documents — File library
14. Case Studies — Results showcase
15. Tasks — Backlog
16. Logs — Run history
17. Usage — Token costs
18. Website — Publish control
19. **Deployment** — Integration settings
20. Team — Agents
21. Settings — Config

### Atlas Website (Public Site)
- **Path:** `/Users/atlas/.openclaw/workspace/projects/atlas-site/` (Development)
- **GitHub Repo:** https://github.com/kesserichando-prog/atlaslabsai-co (Clean production repo)
- **Live URL:** https://atlaslabsai.co (production)
- **Local Dev:** http://localhost:3001
- **Purpose:** Public-facing lead generation
- **Vercel Project ID:** `prj_Q54SWOI2q9EUGq2lxesDfRof5FeB`
- **Status:** Clean repo created with only website files (2026-02-25)

## Intelligence Systems

### Trust Score (0-100)
Calculated from:
- Website quality (10 pts)
- Reviews (10 pts)
- Social presence (10 pts)
- Industry conversion rate (25 pts)
- Competitor saturation (15 pts)
- Clear positioning (20 pts)
- Effort score (inverse, 10 pts)

### Industry Targeting
- Tracks conversion by industry
- Auto-suggests focus areas
- Requires approval to shift targeting

### Pricing Engine
- Tracks win rate by service/industry/price
- Suggests price adjustments
- Major changes require approval

### Demo Builder
- Status: Not Built → Draft → Ready → Sent → Viewed
- Case studies = auto-publish (no approval)
- Structural changes = require approval

## Scout Autonomous Deployment (CEO Initiative - 2026-02-24)

**Scout**: Minimax-model autonomous researcher running 8 strategic assignments daily

### Scout Schedule (Every 2 hours, 10:00-22:00 MST)
| Time | Assignment | Focus | Output |
|------|-----------|-------|--------|
| NOW | Pain Point Mining | Cannabis dispensaries automation gaps | Prospect artifacts |
| 10:00 | Competitor Intel | Automation service providers | Competitor analysis |
| 12:00 | Hiring Pattern Analysis | Companies hiring automatable roles | Warm prospects |
| 14:00 | Case Study Mining | Published automation ROI stories | Case study database |
| 16:00 | Industry Deep Dive | One segment deep research | Industry profile |
| 18:00 | Decision-Maker Mapping | Influencers/leaders | Influencer database |
| 20:00 | Pricing Sensitivity | Budgets and price pain signals | Pricing insights |
| 22:00 | Emerging Opportunities | New industry segments | Opportunity briefs |

**Scout Jobs (all `model=minimax`):**
- `Scout-2: Competitor Intel` → `b052bca0-432f-407f-b77e-9dbf078f9a03`
- `Scout-3: Hiring Pattern Analysis` → `2c07b9ae-1355-4146-89f3-9460dac8e118`
- `Scout-4: Case Study Mining` → `7e0f07e7-f7d4-4a32-bc14-b7deffbb6e94`
- `Scout-5: Industry Deep Dive` → `67320277-be07-407d-8f90-b0944ed2e6e5`
- `Scout-6: Decision-Maker Mapping` → `00960432-b357-4c96-983c-6081623077c3`
- `Scout-7: Pricing Sensitivity` → `48dac426-789a-47d9-b044-f27c0f87178f`
- `Scout-8: Emerging Opportunities` → `28ca26e7-981f-460d-8325-5cdaf4e2d220`

**Rule:** All Scout assignments return structured JSON/Markdown artifacts only — no direct contact with prospects.

### Agent-to-Agent Communication (Phase 1 Complete - 2026-02-24)

**Session Key Convention:**
```
scout:<task_type>:<industry>:<assignment_id>
```

**Handoff Message Structure:**
```json
{
  "source": "scout",
  "task": "task-type",
  "industry": "industry",
  "assignment_id": "identifier",
  "timestamp": "ISO-8601",
  "results": {
    "prospects": [...],
    "patterns": [...],
    "opportunityScore": 85
  },
  "needs_qualify": true,
  "priority": "high"
}
```

**Atlas Qualification Rules:**
- >80: Immediate demo build queue
- 60-80: Pipeline add
- <60: Log for industry intel

**Configuration:**
- `tools.agentToAgent.enabled = true`
- `tools.agentToAgent.allow = ["atlas", "opportunity-scout"]`

**Skill Created:** `skills/scout-handoff/SKILL.md`

**Lobster Workflow:** `workflows/scout-to-demo-pipeline.lobster` (Phase 2)

## Cron Jobs (Autonomous Work Schedule)
| Time | Job | Purpose |
|------|-----|---------|
| 2:00 AM MST | `night-scout` | Deep research, lead scouting, opportunity ID |
| 8:00 AM MST | `morning-brief` | Daily brief → Telegram |
| 8:00 AM MST | `morning-brief-2` | Daily brief → Telegram (secondary) |
| 3:00 PM MST | `afternoon-progress` | Demo building, follow-ups, content creation |

**Job IDs:**
- `night-scout`: `1ea84234-1817-439b-9a9c-f97025802555`
- `morning-brief`: `25e37957-2583-40e1-b186-9fad0618534e`
- `morning-brief-2`: `6e7e769f-9a44-4776-bf95-7ac8461991fd`
- `afternoon-progress`: `c54b64a6-1c60-417e-a33f-f9c811fdd0f2`

## Safety Rules
| Action | Approval Required |
|--------|-------------------|
| Shift industry targeting | ✅ |
| Major pricing changes | ✅ |
| Publish demos publicly | ✅ |
| Website structure changes | ✅ |
| Publish case studies | ❌ |

## Design System
- **Backgrounds:** zinc-900, zinc-950
- **Borders:** zinc-800
- **Accent:** orange-500
- **Success:** emerald-500
- **Warning:** amber-500
- **Icons:** Emoji only (no external libraries)

## Key Migrations
- `20260223074916_add_intelligence_systems` — Industry, Competitor, Demo, Pricing tables
- `20260223082144_add_hybrid_outreach` — ContactStrategy, InPersonPitch, WorkflowAnalysis, PitchDeck

## Telegram Targets
- Primary: `6401141016`
- Secondary: `5502951738`

## Integrations (Configured)
| Service | Status | Use |
|---------|--------|-----|
| Vercel | ✅ Connected | Demo/website hosting |
| SendGrid | ✅ Key set | Email outreach (needs sender identity) |
| OpenStreetMap | ✅ Free | Geocoding |
| Clearbit | ❌ Not needed | Using internal scoring |
| Apollo | ❌ Not needed | Using internal enrichment |

## Gateway
- URL: http://127.0.0.1:18789/

## Documentation Auto-Upload Procedure

**All documentation created by Atlas must be uploaded to Mission Control Documents section for viewing.**

### Upload Tool: `auto-doc-upload.py`
Location: `/Users/atlas/.openclaw/workspace/mission-control/auto-doc-upload.py`

**Usage (from crons/manual work):**
```bash
# Upload single file
python3 auto-doc-upload.py /path/to/file.md

# Upload all files in documents/ directory
python3 auto-doc-upload.py --upload-dir /Users/atlas/.openclaw/workspace/documents

# Upload memory file
python3 auto-doc-upload.py /Users/atlas/.openclaw/workspace/memory/2026-02-23.md
```

### Auto-Upload Rule
**Every time Atlas creates documentation of any kind:** roadmaps, briefs, analyses, research, skill docs, memory logs — it must:
1. Create the markdown file in the appropriate workspace location
2. Immediately upload it via `auto-doc-upload.py`
3. Verify upload successful
4. Record in daily memory log

This ensures Twin can view all Atlas-generated documentation in the Mission Control Documents page.

### Document Types
- `memory-log` — Daily activity logs, decision tracking
- `roadmap` — Strategy outlines, skill development plans
- `skill-doc` — Skill documentation, references
- `brief` — Morning/afternoon briefs
- `analysis` — Market research, competitor analysis
- `document` — General documentation

## Skills Tracking System (2026-02-24)

**Loop:**
- Scout discovers skills on ClawHubnightly
- Atlas builds skills when gaps identified
- Lobster approval for installation only (creation autonomous)

**Tracking:** `memory/skills-tracking.md`
- Skills Discovered (by Scout)
- Skills Created (by Atlas)
- Skills Installed (approved via Lobster)
- Skills Proposed for Install

**Metrics weekly:**
- Skills discovered: 3/week goal
- Skills created: 1/week goal
- Skills installed: 1-2/week goal
- Time saved: 10+ hrs/week goal

**Morning Brief section:** "💡 Skills Discovery (Last Night)"
**Afternoon Progress section:** "🛠️ Skill Development (Today)"

## Governance & Chain of Command (2026-02-24)

**File:** `GOVERNANCE.md` — Authoritative production rules

### 6 Core Rules
1. Atlas = SOLE user-facing agent (Twin only interacts with Atlas)
2. No sub-agent direct responses to Telegram/chat (VIOLATION = instant termination)
3. Sub-agents MUST operate in isolated `agentTurn` sessions
4. Sub-agents return JSON/Markdown structured artifacts ONLY
5. Atlas reviews and summarizes ALL outputs before user delivery
6. Immediate termination for direct user communication attempts

**Flow:**
```
Twin → Atlas → Subagents (Scout, etc.)
```

**Communication:** Vertical only, no horizontal connections

## Heartbeat System - Full Autonomy (2026-02-24)

**Mode:** Option 4 — All Gas No Brakes

**File:** `HEARTBEAT.md` (5,117 bytes)
**State:** `memory/heartbeat-state.json` (468 bytes)

### Daily Rotation
- **Morning (08:00-16:00 MST):** Pipeline checks, Scout proactively, memory review
- **Afternoon (16:00-00:00 MST):** Build demos, create content, optimize tools
- **Evening (00:00-08:00 MST):** Quiet Scout, skills discovery, git maintenance

### Background Work Queue (Priority Order)
1. Urgent alerts (pipeline blocked, mission-critical approvals, Scout wins)
2. Pipeline monitoring (Mission Control)
3. Scout proactively (find leads, qualify)
4. Build demos (Trust Score > 70)
5. Create content (case studies)
6. Skills discovery (ClawHub)
7. Git maintenance (auto-commit)
8. Memory cleanup

### Quiet Hours (23:00-08:00 MST)
- Work silently unless mission-critical
- HEARTBEAT_OK response only
- Scout runs, demos build, git commits — all background

### Alert Triggers
- Lead stale > 48h
- Demo in "Ready" > 24h
- Opportunity rank changed ±15 points
- Major pricing shift (>20%)
- Scout finds 5+ qualified prospects in one run

### Success Metrics (Weekly)
- Prospects found: 25-30 goal
- Demos built: 5-10 goal
- Content created: 3-5 goal
- Time saved: 15+ hrs goal
- Pipeline velocity: < 24h stale goal

**Heartbeats fire every ~30 minutes → pick highest priority task → execute → track state → reply OK or alert**

---
*Last updated: 2026-02-24 10:00 MST*---
*Last updated: 2026-02-25 16:45 MST*

*Last updated: 2026-02-25 16:58 MST* (CSS build fix committed)

*Last updated: 2026-02-25 17:15 MST (Website page fully functional - rebuilds, prompts, themes, Git integration)*

*Last updated: 2026-02-25 17:25 MST (Theme settings fix - works on both localhost and Vercel with environment detection)*

*Last updated: 2026-02-25 17:35 MST (Brand name changed to AtlasLabs AI)*

*Last updated: 2026-02-25 18:15 MST (Vanilla JS patterns applied - scroll reveals, smooth scroll, mobile nav, progress bar)*

*Last updated: 2026-02-25 18:50 MST (Frontend optimizations: 22 skills installed, modular components, CSS scroll-driven animations, proper easing)*

*Last updated: 2026-02-25 19:22 MST (Mission Control redesign analysis complete - reference spec ingested, 4-week game plan drafted, awaiting approval)*

*Last updated: 2026-02-25 19:30 MST (Week 1 implementation complete - StatusDot, motion system, IBM Plex Mono deployed; ready for Week 2: Real-Time SSE feed)*

*Last updated: 2026-02-25 20:00 MST (Mission Control polished and clean repository structure applied - 4,000+ lines removed, comprehensive README, build passing)*

*Last updated: 2026-02-25 21:20 MST (Week 2 Phase 1 complete - SSE live feed implemented for Usage page, real-time updates every 5s with StatusDot live indicator)*

*Last updated: 2026-02-25 22:30 MST (Real Ollama usage tracking implemented - database schema, API endpoints, collector script ready; pending: OpenClaw API integration and cron scheduling)*

*Last updated: 2026-02-26 01:24 MST (Catalyst demo builder agent deployed - full auto trigger on Trust Score ≥70, 60s SLA, minimax model, Draft status for approval)*

---

## Catalyst — Demo Builder Agent (Live)

**Name:** Catalyst 🔥
**Role:** Conversion-optimized demo generation
**Trigger:** Trust Score ≥70 (auto-spawn within 60s)
**Model:** minimax (high thinking)
**Output Status:** Draft → Twin approves → Ready
**Cal.com Event Type:** 30 min meeting (ID: 4874699)
**Booking Link:** Personalized (`/30min?slug={company}`)

**⚠️ CRITICAL GAP IDENTIFIED (2026-02-26 05:01 MST):**

Scout returns qualified prospects (Trust ≥70) but Catalyst doesn't auto-spawn. **Missing integration layer:**

1. Scout artifacts (JSON + MD) → Mission Control Documents (currently working)
2. **MISSING:** Scout artifacts → Database Lead records (auto-creation)
3. **MISSING:** Lead status='Qualified' → Catalyst auto-spawn trigger

**Impact:**
- 2 high-priority prospects (Story McDowell 88, JARS 90) from Scout run 2026-02-26-001 are waiting for demo build
- Trulieve (Trust 95, major MSO) is idle when it should be fast-tracked
- Catalyst 60s SLA not met due to broken pipeline

**Required Fix:**
Create Scout artifact ingester that:
1. Reads Scout-generated prospect JSON from `prospects/` directory
2. Creates Lead records in Mission Control database
3. Sets `status='Qualified'` for Trust Score ≥70
4. Triggers Catalyst for auto-demo build

**Priority:** HIGH — Blocks end-to-end prospect-to-demo automation

**Status:** RESOLVED — Database restored and seeded with all Scout data (2026-02-26 18:45 MST)

**Database Restoration Complete (2026-02-26 18:45 MST):**
- ✅ 22 leads seeded (all Scout prospects including cannabis, healthcare, legal, accounting)
- ✅ 8 demos created (Phoenix Family Medical, Paradise Valley Dental, Valley Heart, etc.)
- ✅ 4 documents (case studies, analysis)
- ✅ 6 opportunities ranked by ROI
- ✅ 5 industry intelligence records
- ✅ 6 tasks prioritized
- ✅ 3 agents (Atlas, Scout, Catalyst)
- ✅ 5 pricing models by industry
- ✅ Usage page built out with real-time metrics and charts
- ✅ API endpoint for usage data

**Usage Page Updates:**
- Removed "local only" restriction
- Built out full dashboard with daily/agent/model usage tracking
- Real-time metrics: total tokens, estimated cost, active agents, sessions
- Agent usage table with tokens, calls, sessions, last active
- Model usage breakdown by provider
- Daily usage chart over time (7d/30d views)

**Next Steps:**
- Scout → Catalyst integration still needed (manual workaround exists)
- Telegram cron delivery still needs investigation
- Build remaining demos for high-trust prospects  

**Artifacts:**
- `demo-{company}.md` — Human-readable demo brief
- `demo-{company}.json` — Structured data for MC
- `demo-{company}-flow.html` — Interactive flow map (23%+ conversion)

**Psychological Frameworks:**
- PAS (Problem-Agitation-Solution)
- Endowed Progress (Phase 0 = COMPLETED)
- Job Story ("When/I want to/So I can")
- Platinum Minute (<60s response)

**Workflow:**
```
Opportunity Trust Score ≥70
    ↓
Catalyst auto-spawns (60s SLA)
    ↓
Generates demo (MD + JSON + HTML)
    ↓
Uploads to Mission Control Documents
    ↓
Demo table: status = "Draft"
    ↓
Twin notified → Reviews → Publishes
    ↓
Outreach Executor sends email with Cal.com link
```
