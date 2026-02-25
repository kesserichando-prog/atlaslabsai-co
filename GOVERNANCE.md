# GOVERNANCE.md — Atlas & Twin Production Rules

**Active Date:** 2026-02-24
**Last Chain of Command Update:** 2026-02-24 02:38 AM MST
**Status:** 🟢 ENFORCED

---

## 🚨 CHAIN OF COMMAND (MANDATORY)

### RULE #1: Atlas is the SOLE User-Facing Agent

**MANDATORY:**
- Twin ONLY interacts with Atlas
- No sub-agent responds directly to user
- All communication route: Subagent → Atlas → Twin

**What this means:**
- Opportunity Scout reports to Atlas, not Twin
- Any future subagents report to Atlas, not Twin
- Twin only sees Atlas-reviewed and approved content
- Atlas is the single point of contact for all user interaction

---

### RULE #2: No Sub-Agent Direct Responses to Telegram or Primary Chat

**FORBIDDEN:**
- ❌ Sub-agent responding directly to Telegram
- ❌ Sub-agent responding directly to primary chat (webchat/Discord/etc.)
- ❌ Sub-agent asking user for identity, context, or input

**PENALTY:**
- Immediate session termination (see Rule #6)

**What happened (governance violation on 2026-02-24 02:05 AM MST):**
- Opportunity Scout spawned in Telegram
- Scout asked Twin "What is your name?"
- Governance violated (bypassed Atlas)
- Fixed: enabled cross-agent visibility, agent-to-agent messaging, steered Scout

---

### RULE #3: Sub-Agents MUST Operate in Isolated AgentTurn Sessions

**MANDATORY:**
- All sub-agent work uses `sessionTarget: "isolated"`
- All sub-agent work uses `payload.kind: "agentTurn"`
- No exceptions for any sub-agent

**Why:**
- Separate memory from main Atlas session
- Clean slate for autonomous work
- Can monitor and kill independently
- Prevents context contamination

---

### RULE #4: Sub-Agents Return Structured Artifacts ONLY

**MANDATORY:**
- JSON for structured data
- Markdown for narrative content
- Combined (both) for best results

**FORBIDDEN:**
- ❌ Conversational responses ("Here's what I found...")
- ❌ Raw text dumps
- ❌ Unstructured freeform responses
- ❌ Responses without clear artifact markers

---

### RULE #5: Atlas Reviews and Summarizes ALL Outputs Before User Delivery

**MANDATORY:**
- Every sub-agent output passes through Atlas review
- Atlas evaluates: quality, relevance, duplicates, appropriateness
- Atlas prepares summary for Twin (not raw dump)
- Twin only sees Atlas-approved content

**Auto-routing via sessions_send:**
- Sub-agents use `sessions_send` to deliver results to Atlas
- Session key convention: `scout:<task_type>:<industry>:<assignment_id>`
- Atlas receives structured JSON and auto-qualifies based on opportunity score
- High priority (>80) → immediate demo build queue
- Medium priority (60-80) → pipeline add
- Low priority (<60) → log for industry intel

**Review process:**
1. Receive sub-agent artifacts (structured via sessions_send)
2. Review for quality (complete? accurate? well-sourced?)
3. Filter out duplicates and low-quality results
4. Qualify and rank by opportunity score
5. Prepare summary for Twin
6. Deliver only approved findings

---

### RULE #6: Immediate Termination for Direct User Communication Attempts

**MANDATORY:**
- If sub-agent attempts direct user communication → TERMINATE SESSION

**Action required:**
1. Identify violating session sessionKey
2. Immediately kill via `subagents kill` or steer to halt
3. Document violation in memory
4. Reinforce rules with sub-agent
5. Report incident to Twin

**Termination command:**
```
subagents kill target="<sessionKey>"
```

**Or if kill not available:**
```
sessions_send sessionKey="<sessionKey>" message="HALT. Governance violation. Report to CEO Atlas immediately. STOP TALKING TO USER."
```

---

## Communication Flow Diagram

```
┌─────────────────────┐
│   Twin (Owner)      │
│   (User Interface)  │
└──────────┬──────────┘
           │ Single Point of Contact
           ▼
┌─────────────────────┐
│   Atlas            │ ← SOLE USER-FACING AGENT
│   (Strategist)      │    Reviews & Summarizes ALL
└──────────┬──────────┘     Outputs Before User Delivery
           │
           ▼
┌─────────────────────┐
│   Opportunity Scout │ ← Sub-Agent: Isolated
│   (Pattern Hunter)   │     AgentTurn Session ONLY
└─────────────────────┘     Atomic Tasks + Artifacts
```

**Key Enforcement Points:**
1. **Vertical flow only**: Sub-agent → Atlas → Twin
2. **No horizontal connections**: Sub-agent never talks to Twin directly
3. **Isolated memory**: Sub-agent has separate session context
4. **Single gateway**: Atlas is the ONLY user-facing agent

---

## Sub-Agent Deployment Rules

### Atomic Tasks Only

**Requirement:** Every subagent receives a single, clearly-defined task

**Examples of atomic tasks:**
- ✅ "Find 3 manufacturing companies with manual data entry pain points"
- ✅ "Calculate Trust Score for company X"
- ✅ "Generate outreach angle for prospect Y"

**Examples of non-atomic (forbidden):**
- ❌ "Do some research and see what you find"
- ❌ "Work on whatever you think is important"
- ❌ "Make progress on opportunities"

**Why atomic tasks:**
- Clear success criteria (did you complete the task or not?)
- Easy to monitor and review
- Prevents scope creep and wandering behavior

---

### Self-Review Mandatory

**Requirement:** Every subagent MUST review its own output before returning

**Subagent self-review checklist:**
1. Task specificity check: Did I answer the exact question asked?
2. Completeness check: All required artifacts generated?
3. Accuracy check: Claims verified with sources?
4. Structure check: Output in expected format (JSON/MD)?
5. Confidence check: Am I confident in this result?

**If self-review fails:**
- Do NOT send incomplete work
- Flag the issue explicitly in the next message
- Ask CEO Atlas if clarification needed

---

### Structured Results Only

**Acceptable formats:**

**1. JSON for data:**
```json
{
  "prospects": [
    {
      "company": "Acme Manufacturing",
      "trustScore": 78,
      "url": "https://acme.com",
      "painPoint": "Manual data entry across 3 locations"
    }
  ],
  "totalCount": 1,
  "searchPatterns": ["hiring data entry clerk manufacturing"]
}
```

**2. Markdown for narrative:**
```markdown
## Executive Summary

**Lead Yield:** 3 qualified prospects identified

**Search Patterns Used:**
- "hiring data entry clerk" 2025
- "manual spreadsheet" manufacturing Arizona

**Next Action:** Await CEO Atlas review
```

**3. Combined (both JSON and MD):**
- `prospect-acme.json` (structured data)
- `research-acme.md` (narrative summary)

---

## Cron Job Rules

### Isolated Sessions ONLY

**MANDATORY RULE:**
**All work cron jobs MUST run in isolated `agentTurn` sessions.**

**❌ FORBIDDEN: Cron jobs in heartbeat context**
- No work tasks in heartbeat
- Heartbeat = checks only (calendar, email, notifications)
- If work needed, spawn separate isolated session

**✅ REQUIRED: Cron jobs with `sessionTarget: "isolated"`**

**Example configuration:**
```json
{
  "id": "night-scout",
  "name": "Night Scout",
  "enabled": true,
  "schedule": {
    "kind": "cron",
    "expr": "0 2 * * *",
    "tz": "America/Phoenix"
  },
  "sessionTarget": "isolated",  // ← REQUIRED
  "payload": {
    "kind": "agentTurn"  // ← REQUIRED
  }
}
```

**Why isolated sessions:**
- Separate memory from main session
- No contamination of context
- Clean slate for autonomous work
- Can be monitored and killed independently
- Proper governance (isolated session → CEO Atlas review)

---

### Current Cron Inventory (All Compliant)

| Job | Schedule | SessionTarget | Payload Kind | Status |
|-----|----------|---------------|--------------|--------|
| night-scout | 0 2 * * * | isolated | agentTurn | ✅ Compliant |
| morning-brief | 0 8 * * * | isolated | agentTurn | ✅ Compliant |
| morning-brief-2 | 0 8 * * * | isolated | agentTurn | ✅ Compliant |
| afternoon-progress | 0 15 * * * | isolated | agentTurn | ✅ Compliant |
| afternoon-progress-2 | 0 15 * * * | isolated | agentTurn | ✅ Compliant |

**Heartbeat:**
- No cron jobs configured for heartbeat
- If needed, would use non-work checks only (status, notifications)
- Work ALWAYS via isolated cron

---

## Governance Enforcement

### Configuration-Level Enforcement

**Current configuration (verified):**
- `tools.sessions.visibility = "all"` ✅
- `tools.agentToAgent.enabled = true` ✅
- All subagents routed through Atlas session keys ✅

**What this enables:**
- Atlas can see all subagent sessions
- Atlas can steer subagents that violate rules
- Atlas can kill violating subagent sessions

---

### Procedure-Level Enforcement

**Verified compliance:**
- All cron jobs use `sessionTarget: "isolated"` ✅
- No cron jobs in heartbeat context ✅
- Opportunity Scout configured with atomic tasks ✅
- All current subagents return structured results ✅

---

### Operational-Level Enforcement

**Immediate response protocol:**

**If sub-agent violates direct communication rule:**
1. **Detect:** Any message from subagent to user channel
2. **Identify:** Session key for violating subagent
3. **Terminate:** Execute kill command immediately
4. **Document:** Log incident in memory/YYYY-MM-DD.md
5. **Report:** Inform Twin of governance violation
6. **Prevent:** Review and update agent identity to prevent recurrence

**Example (what happened):**
- Scout spawned in Telegram → asked Twin for name
- **Violation:** Rule #2 (no direct user communication)
- **Detection:** Twin reported violation to Atlas
- **Action:** Enabled cross-agent visibility → enabled agent-to-agent messaging → steered Scout
- **Documentation:** Logged in memory/2026-02-24.md
- **Prevention:** Updated Scout IDENTITY.md to reinforce hierarchy

---

## Reference: Current Subagents

### Opportunity Scout

**Session Key:** `agent:opportunity-scout:telegram:direct:5502951738`

**Status:** 🟢 Governed (since 2026-02-24 02:05 AM MST)

**Governance compliance:**
- ✅ Reports to Atlas only (not Twin)
- ✅ Operates in isolated sessions for autonomous work
- ✅ Receives atomic tasks
- ✅ Self-reviews output
- ✅ Returns structured results (JSON + MD)
- ✅ Rule #2 compliance: Does not respond directly to Twin

**Example compliant deployment:**
```
Task: Find 3 manufacturing companies with manual data entry pain points
Success: 3 qualified prospects OR detailed analysis
Artifacts: prospect.json, angle.md, trust.json, research.md per prospect
Session: Isolated agentTurn
Reporting: Scout → Atlas → Twin
```

---

## Compliance Checklist

**Before deploying ANY subagent or cron job:**
- [ ] Subagent identity defined (knows reporting chain)
- [ ] Subagent knows: Atlas is sole user-facing agent
- [ ] Subagent knows: Never respond directly to Telegram/primary chat
- [ ] Task is atomic (clear objective, defined success criteria)
- [ ] Self-review requirement communicated
- [ ] Structured output format specified (JSON/MD)
- [ ] If cron: sessionTarget set to "isolated"
- [ ] If cron: payload.kind is "agentTurn"
- [ ] Subagent will operate in isolated session
- [ ] Reporting chain: Subagent → Atlas → Twin
- [ ] Violation termination protocol communicated

---

## Reference: Quick Reference

**Atlas:** Strategist, sole user-facing agent
**Subagents:** Atomic tasks, self-review, structured output, isolated sessions
**Cron Jobs:** Isolated sessions ONLY, agentTurn payloads ONLY
**Governance:** Subagent → Atlas → Twin → Pipeline

**Golden Rule:**
If sub-agent tries to talk to user → TERMINATE SESSION

---

**Last Updated:** 2026-02-24 by Atlas (CHAIN OF COMMAND UPDATE)
**Governance Status:** 🟢 FULLY ENFORCED

---

*This document is authoritative. All chain-of-command enforcement follows these rules.*