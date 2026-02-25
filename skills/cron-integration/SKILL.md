---
name: Cron Integration
slug: cron-integration
description: Schedule autonomous Opportunity Scout runs via OpenClaw cron system
---

## Core Purpose

Configure the Opportunity Scout to run autonomously on a schedule (every 4 hours or 2 AM deep scout), continuously feeding the Pipeline without human intervention.

## Cron Job Configuration

### Job: `opportunity-scout-cycle`

**Schedule:** Every 4 hours (or 2 AM deep scout)

**Job ID:** `opportunity-scout` (auto-generated)

---

## Cron Job Definition

```json
{
  "name": "opportunity-scout-cycle",
  "schedule": {
    "kind": "cron",
    "expr": "0 */4 * * *",
    "tz": "America/Phoenix"
  },
  "payload": {
    "kind": "agentTurn",
    "message": "Run opportunity scouting cycle. Use these requirements:\n\n1. Run autonomous web searches for businesses discussing automation gaps:\n   - Use at least 3 different search patterns\n   - Rotate through industries: manufacturing, logistics, e-commerce, SaaS\n   - Target US/Canada, 50-200 employee companies\n\n2. For each company found:\n   - Research website, reviews, social presence\n   - Calculate Trust Score (0-100)\n   - Identify pain points (manual processes, inefficiencies)\n   - Propose automation angle (what COULD be automated, no pitch)\n\n3. Produce artifacts for EVERY prospect:\n   - prospect-<company-slug>.json (structured data)\n   - angle-<company-slug>.md\n   - trust-<company-slug>.json\n   - research-<company-slug>.md\n\n4. NO EMPTY OUTPUTS:\n   - Minimum 1 qualified prospect per run\n   - If 0 prospects, try 3 additional search patterns\n   - Document why in research summary\n\n5. Check Pipeline for duplicates before adding\n\n6. Present findings to CEO Atlas for subagent approval.",
    "model": "ollama/glm-4.7:cloud"
  },
  "delivery": {
    "mode": "announce",
    "channel": "telegram",
    "to": "5502951738"
  },
  "sessionTarget": "isolated",
  "enabled": true
}
```

**Breakdown:**

| Component | Value | Purpose |
|-----------|-------|---------|
| `schedule.kind` | `cron` | Use cron expression |
| `schedule.expr` | `0 */4 * * *` | Every 4 hours (12am, 4am, 8am, 12pm, 4pm, 8pm) |
| `schedule.tz` | `America/Phoenix` | Twin's timezone |
| `payload.kind` | `agentTurn` | Spawn isolated sub-agent |
| `payload.message` | Task instructions | Scout cycle requirements |
| `payload.model` | `glm-4.7:cloud` | Model to use |
| `delivery.mode` | `announce` | Send results to Telegram |
| `delivery.channel` | `telegram` | Push notifications |
| `delivery.to` | `5502951738` | Owner Twin's Telegram ID |
| `sessionTarget` | `isolated` | Run in separate session |
| `enabled` | `true` | Active scheduling |

---

## Alternative Schedule: Deep Scout (2 AM)

For more intensive research, run nightly at 2 AM:

```json
{
  "name": "night-scout-deep-dive",
  "schedule": {
    "kind": "cron",
    "expr": "0 2 * * *",
    "tz": "America/Phoenix"
  },
  "payload": {
    "kind": "agentTurn",
    "message": "Deep opportunity scouting cycle (2 AM):\n\n1. Perform 5+ deep searches across industries\n2. Research each company thoroughly (10+ minutes per prospect)\n3. Generate 5-8 high-quality prospects\n4. Produce full artifact set for each\n5. Minimum Trust Score 70 required\n6. Present to CEO Atlas",
    "model": "glm-4.7:cloud"
  },
  "delivery": {
    "mode": "announce",
    "channel": "telegram",
    "to": "5502951738"
  },
  "sessionTarget": "isolated",
  "enabled": true
}
```

---

## Adding the Cron Job

### Method 1: via cron tool

```bash
openclaw cron add '{
  "name": "opportunity-scout-cycle",
  "schedule": {
    "kind": "cron",
    "expr": "0 */4 * * *",
    "tz": "America/Phoenix"
  },
  "payload": {
    "kind": "agentTurn",
    "message": "Run opportunity scouting cycle...",
    "model": "glm-4.7:cloud"
  },
  "delivery": {
    "mode": "announce",
    "channel": "telegram",
    "to": "5502951738"
  },
  "sessionTarget": "isolated",
  "enabled": true
}'
```

### Method 2: via JSON file

Create `/Users/atlas/.openclaw/workspace/config/cron-opportunity-scout.json`:

```json
{
  "name": "opportunity-scout-cycle",
  "schedule": {
    "kind": "cron",
    "expr": "0 */4 * * *",
    "tz": "America/Phoenix"
  },
  "payload": {
    "kind": "agentTurn",
    "message": "Run opportunity scouting cycle...",
    "model": "glm-4.7:cloud"
  },
  "delivery": {
    "mode": "announce",
    "channel": "telegram",
    "to": "5502951738"
  },
  "sessionTarget": "isolated",
  "enabled": true
}
```

Then load:

```bash
openclaw cron add @/Users/atlas/.openclaw/workspace/config/cron-opportunity-scout.json
```

---

## Cron Job Management

### List all cron jobs

```bash
openclaw cron list
```

**Output:**
```
┌──────────────┬────────────────┬─────────────────┬──────────┬────────┬────────┐
│ Job ID       │ Name           │ Schedule         │ Next Run │ Status  │ Enabled│
├──────────────┼────────────────┼─────────────────┼──────────┼────────┼────────┤
│ abc123...    │ opportunity ...│ 0 */4 * * *     │ 2:00 AM  │ Active  │ ✅    │
│ def456...    │ night-scout    │ 0 2 * * *       │ 2:00 AM  │ Active  │ ✅    │
└──────────────┴────────────────┴─────────────────┴──────────┴────────┴────────┘
```

---

### Get job details

```bash
openclaw cron get <job-id>
```

---

### Update job schedule

```bash
openclaw cron update <job-id> '{
  "schedule": {"kind": "cron", "expr": "0 2 * * *", "tz": "America/Phoenix"}
}'
```

---

### Enable/disable job

```bash
openclaw cron update <job-id> '{"enabled": false}'
```

---

### Remove job

```bash
openclaw cron remove <job-id>
```

---

### Run job immediately (test)

```bash
openclaw cron run <job-id> --mode force
```

---

## Run History

Check job execution history:

```bash
openclaw cron runs <job-id>
```

**Output:**
```
┌──────────┬──────────────┬──────────┬────────┬──────────────┐
│ Run ID   │ Timestamp    │ Status   │ Tokens │ Output       │
├──────────┼──────────────┼──────────┼────────┼──────────────┤
│ run-001  │ 2026-02-24 0 │ success  │ 125k   │ 3 prospects  │
│ run-002  │ 2026-02-24 4 │ success  │ 98k    │ 4 prospects  │
│ run-003  │ 2026-02-24 8 │ error    │ 45k    │ timeout      │
└──────────┴──────────────┴──────────┴────────┴──────────────┘
```

---

## Governance Flow with Cron

```
[Every 4 hours]
         ↓
     Cron triggers
         ↓
Opportunity Scout (subagent) runs
         ↓
  Finds 3-5 prospects
         ↓
  CEO Atlas reviews subagent work
         ↓
  CEO Atlas presents to Owner Twin
         ↓
  Owner Twin approves/rejects each opportunity
         ↓
  Approved prospects → Pipeline
  Rejected prospects → Logged to memory
```

---

## Monitoring & Alerts

### Success Metrics

Track cron job health:

```json
{
  "job_id": "opportunity-scout-cycle",
  "metrics": {
    "avg_prospects_per_run": 4.2,
    "avg_trust_score": 74,
    "success_rate": 95,
    "last_run": "2026-02-24T02:00:00Z",
    "status": "healthy"
  }
}
```

### Alert Conditions

**Alert CEO Atlas if:**
- ❌ 3+ consecutive failures
- ❌ 0 prospects for 2+ runs
- ❌ Avg Trust Score < 60
- ❌ Run time > 30 mins

**Alert Owner Twin if:**
- ❌ 5+ consecutive failures
- ❌ System down (cron not running)

---

## Log Files

Cron job writes logs to:

```
/tmp/openclaw/cron/opportunity-scout/
├── run-2026-02-24-0000.log      # Full execution log
├── run-2026-02-24-0400.log
├── run-2026-02-24-0800.log
└── ... (rotated)
```

**Log format:**
```
[2026-02-24T02:00:00Z] Starting opportunity scout cycle
[2026-02-24T02:00:05Z] Search pattern 1: "manual inventory" manufacturing
[2026-02-24T02:00:45Z] Found 2 prospects
[2026-02-24T02:01:30Z] Search pattern 2: "order processing manual" e-commerce
[2026-02-24T02:02:15Z] Found 3 prospects
[2026-02-24T02:03:00Z] Enriching prospects...
[2026-02-24T02:10:30Z] Artifacts generated for 5 prospects
[2026-02-24T02:11:00Z] De-duplication check: all new
[2026-02-24T02:11:30Z] Completed. 5 prospects ready for CEO Atlas
```

---

## Telegram Delivery Format

When cron completes, send to Owner Twin:

```
🧭 Opportunity Scout Cycle Complete

Run: 2026-02-24 2:00 AM
Duration: 11 minutes 30 seconds

**Results:**
- Prospects found: 5
- Avg Trust Score: 76
- High-value (Score >70): 4
- Pipeline ready: 5

**Top Opportunities:**
1. Acme Manufacturing (Score: 82) - Manual inventory tracking
2. Beta Logistics (Score: 79) - Shipping delays
3. Gamma Corp (Score: 76) - Order processing

CEO Atlas has reviewed 5/5 prospects.
Owner Twin: Approve for Pipeline or see full details.

[See details] [Approve all] [Reject all]
```

With inline buttons via Lobster workflows:

```json
{
  "buttons": [
    [{"text": "📊 See details", "callback_data": "details:scout-run-001"}],
    [{"text": "✅ Approve all", "callback_data": "approve:scout-run-001"}],
    [{"text": "❌ Reject", "callback_data": "reject:scout-run-001"}]
  ]
}
```

---

## Testing Cron Job

Before enabling in production, test manually:

```bash
# Run once immediately
openclaw cron run <job-id> --mode force

# Check output
openclaw cron runs <job-id> | tail -5

# Verify artifacts
ls -la /Users/atlas/.openclaw/workspace/agents/opportunity-scout/outputs/
```

---

## Rollback Plan

If cron job misbehaves:

```bash
# Disable immediately
openclaw cron update <job-id> '{"enabled": false}'

# Check logs for errors
cat /tmp/openclaw/cron/opportunity-scout/run-*.log | grep ERROR

# Fix and re-enable
openclaw cron update <job-id> '{"enabled": true}'
```

---

## Success Checklist

- ✅ Cron job defined with correct schedule
- ✅ Agent message includes full requirements (artifacts, no empty outputs)
- ✅ Delivery configured (Telegram announcement to Owner Twin)
- ✅ Session target: isolated (doesn't block main session)
- ✅ Log directory exists and writable
- ✅ Test run completed successfully
- ✅ Artifacts verified (JSON + Markdown per prospect)
- ✅ Trust Scores calculated properly
- ✅ De-duplication working
- ✅ CEO Atlas approval flow integrated
- ✅ Owner Twin can approve/reject

---

**Cron Scheduled. Opportunities flowing autonomously.** 🧭