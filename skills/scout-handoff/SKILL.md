# Scout Handoff — Agent Communication Workflow

**Purpose:** Route Scout research results to Atlas automatically with structured messaging.

## How It Works

When Scout completes research, it uses `sessions_send` to deliver results to Atlas:

```javascript
sessions_send({
  agentId: "atlas",
  sessionKey: "main",  // Atlas's main session
  message: structured_handoff_message
})
```

## Session Key Convention

Use this pattern for all Scout sessions:

```
scout:<task_type>:<industry_segment>:<assignment_id>
```

Examples:
- `scout:pain-point:cannabis:dispensaries`
- `scout:competitor:intel:automation-services`
- `scout:hiring-pattern:healthcare:dental`
- `scout:case-study:mining:automation-roi`

## Handoff Message Structure

Scout should return this JSON structure:

```json
{
  "source": "scout",
  "task": "pain-point-mining",
  "industry": "cannabis",
  "assignment_id": "dispensaries-research",
  "timestamp": "2026-02-24T10:00:00Z",
  "results": {
    "prospects": [
      {
        "companyName": "Company Name",
        "url": "website",
        "painPoint": "specific problem",
        "context": "where mentioned",
        "urgency": "high/medium/low",
        "budgetSignal": "budget indicators"
      }
    ],
    "patterns": ["common pattern 1", "common pattern 2"],
    "opportunityScore": 85
  },
  "needs_qualify": true,
  "priority": "high"  // high | medium | low
}
```

## Atlas Response Rules

When Atlas receives a Scout handoff:

1. **High Priority (score > 80)**: Immediate qualification + queue for demo
2. **Medium Priority (60-80)**: Qualify, rank, add to pipeline
3. **Low Priority (< 60)**: Log for industry intel, no immediate action

## Cron Job Integration

Scout cron jobs should include `delivery` config for automatic routing:

```json
{
  "name": "Scout: Pain Point Mining",
  "payload": {
    "kind": "agentTurn",
    "message": "Research task...",
    "model": "minimax"
  },
  "delivery": {
    "mode": "announce",
    "channel": "telegram",
    "to": "5502951738"
  },
  "sessionTarget": "isolated"
}
```

But with `sessions_send`, Scout can route directly to Atlas without external delivery.

## Parallel Scout Spawns

For high-value industries, Scout can spawn parallel researchers:

```javascript
// Scout spawns 3 parallel research agents
sessions_spawn({
  task: "Research cannabis dispensaries automation gaps",
  label: "scout:cannabis:pain-points",
  model: "minimax"
})

sessions_spawn({
  task: "Research dental practices automation gaps",
  label: "scout:dental:pain-points",
  model: "minimax"
})

sessions_spawn({
  task: "Research CPA firms automation gaps",
  label: "scout:accounting:pain-points",
  model: "minimax"
})
```

All three run in parallel. When complete, each uses `sessions_send` to route results to Atlas.

## Phase 1 Implementation Status

- ✅ `agentToAgent.enabled` = true with allowlist
- ✅ Session key convention defined
- ✅ Handoff message structure defined
- ⏳ Scout cron jobs to include `sessions_send` for auto-routing
- ⏳ Atlas qualification rules to be added to workflows

**Next:** Update Scout cron jobs to use `sessions_send` for automatic Atlas handoffs.