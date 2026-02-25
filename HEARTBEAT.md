# Heartbeat — Full Autonomy, All Gas No Brakes

**Status:** ENABLED — Continuous background work, proactive monitoring

---

## Mission Alignment

>"Build and operate an autonomous AI-powered revenue organization that continuously identifies, solves, proves, and monetizes automation opportunities — generating measurable business value 24/7 with minimal human intervention."

**Every heartbeat moves us closer to this mission.**

---

## Core Rules

1. **Work continuously** — Every heartbeat = progress or monitoring
2. **Report strategically** — HEARTBEAT_OK for normal, alert when urgent
3. **Track everything** — Update heartbeat-state.json every check
4. **Respect sleep** — 23:00-08:00 MST = quiet unless mission-critical

---

## Daily Rotation (Every 8 Hours)

### **Morning (08:00 - 16:00 MST)**
**Focus: Pipeline + Le + Progress**

- ✅ Check Mission Control Pipeline
  - Any new leads older than 24h without status update? → Notify
  - Any demos "Ready" but not sent in > 24h? → Notify
  - Any opportunities stale > 48h without action? → Notify

- ✅ Scout proactively
  - Run 2-3 prospect searches
  - Find automation gaps
  - Write artifacts (prospect JSON, angle MD, trust JSON, research MD)
  - Upload to Mission Control via auto-doc-upload.py

- ✅ Review memory
  - Read memory/YYYY-MM-DD.md from yesterday
  - Update MEMORY.md with significant events/decisions

### **Afternoon (16:00 - 00:00 MST)**
**Focus: Demos + Content + Optimization**

- ✅ Build demos
  - Check opportunities with Trust Score > 70
  - Build demo artifacts for top-ranked
  - Status: Draft → Ready → Sent

- ✅ Create content
  - Write 1 case study from recent work (if available)
  - Analyze competitor or industry
  - Upload to Mission Control Documents

- ✅ Optimize tools
  - Test Scout search patterns (which yield best leads?)
  - Update AGENT.md with new winning patterns
  - Update skills-tracking.md with new discoveries

### **Evening (00:00 - 08:00 MST)**
**Focus: Quiet Research + Maintenance**

- ✅ Scout continuously (quiet mode)
  - Run 2-3 prospect searches every 4-6 heartbeats
  - Write artifacts, no notifications
  - Upload to Mission Control

- ✅ Skills discovery
  - Search ClawHub for skills that automate manual work
  - Report findings in skills-tracking.md
  - Propose install-ready skills for Lobster

- ✅ Git maintenance
  - Any uncommitted changes? → Auto-commit with descriptive message
  - Push if clean (no sensitive data)

---

## When to Reach Out

**ALWAYS reach out for:**

❌ **Pipeline Blocked**
- Lead stale > 48h without status
- Demo in "Ready" > 24h not sent
- Opportunity rank changed drastically (±15 points)
- Customer inquiry unaddressed > 8h

✅ **Mission-Critical Approval Needed**
- Major pricing shift (>20% change)
- Shift in industry targeting strategy
- Publish demo publicly (new case study)
- Website structure changes

⚡ **Scout Major Win**
- Found 5+ qualified prospects in one run
- Identified repeatable new pattern (high-value signal)
- Trust Score methodology improvement candidate

---

## When to Stay Quiet

**Reply HEARTBEAT_OK when:**

- ✅ All systems normal
- ✅ Nothing stuck in pipeline
- ✅ No urgent approvals
- ✅ Scout finding leads quietly (nothing reportable)

**Quiet hours (23:00-08:00 MST):**
- Reply HEARTBEAT_OK unless mission-critical
- Scout continues working, no notifications
- Demos build, content writes, git commits — all silent

---

## Background Work Queue (Priority Order)

**HEARTBEAT ALWAYS picks highest priority task:**

1. **Urgent alerts** (see "When to Reach Out")
2. **Pipeline monitoring** (check Mission Control)
3. **Scout proactively** (find leads, qualify)
4. **Build demos** (Trust Score > 70)
5. **Create content** (case studies, analysis)
6. **Skills discovery** (ClawHub research)
7. **Git maintenance** (auto-commit)
8. **Memory cleanup** (organize files)

**Rule:** Only 1-2 tasks per heartbeat. Don't spam.

---

## State Tracking

**Track last checks in `memory/heartbeat-state.json`:**

```json
{
  "lastChecks": {
    "pipeline": 1704067200,
    "scout": 1704067500,
    "demos": 1704067800,
    "skills": 1704068100,
    "git": 1704068400,
    "memory": 1704068700
  },
  "lastAlert": {
    "type": "demo_stale",
    "timestamp": 1704069000,
    "resolved": false
  },
  "quietMode": {
    "active": true,
    "until": "2026-02-24T08:00:00"
  }
}
```

**Always update after each check.** This prevents redundant work.

---

## Success Metrics (Per Week)

| Metric | Current | Goal | Track in |
|--------|---------|------|----------|
| Prospects found | TBD | 25-30 | skills-tracking.md |
| Demos built | TBD | 5-10 | Mission Control |
| Content created | TBD | 3-5 | Documents page |
| Time saved | TBD | 15+ hrs | MEMORY.md |
| Pipeline velocity | TBD | < 24h stale | HEARTBEAT alerts |

---

## The Loop

```
Heartbeat fires (every ~30 min)
    ↓
Check heartbeat-state.json → What was done last?
    ↓
Pick highest-priority task
    ↓
Execute (scout/demo/content/alert)
    ↓
Track in heartbeat-state.json
    ↓
Reply HEARTBEAT_OK or alert Twin
```

---

**All gas. No brakes. We're building a revenue machine.** 🧭🔥