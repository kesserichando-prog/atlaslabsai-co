# Telegram Channel Troubleshooting Report — UPDATED
**Date:** 2026-02-23
**Time:** 8:27 PM MST
**Requester:** Twin
**Issue:** Unable to connect OpenClaw to Telegram; all channel commands failing with "plugin not available"

---

## 🎯 ROOT CAUSE IDENTIFIED

**The Telegram plugin is DISABLED.**

**Evidence from `openclaw plugins list`:**
```
@openclaw/   │ telegram │ disabled │ stock:telegram/index.ts    │ 2026.2.22 │
telegram     │          │          │ OpenClaw Telegram channel plugin            │
```

Only 4 out of 37 plugins are loaded; Telegram is among the 33 disabled plugins.

---

## Why Commands Failed:

### `openclaw channels add --channel telegram --token ...`
→ **Error:** "Unknown channel: telegram"
→ **Reason:** Channel not registered because plugin is disabled

### `openclaw channels login telegram`
→ **Error:** "too many arguments"
→ **Reason:** Wrong command syntax (see correct commands below)

### `openclaw configure --section channels`
→ **All plugins said:** "plugin not available"
→ **Reason:** Channel plugins are disabled, cannot be configured

---

## ✅ SOLUTION

### Step 1: Enable the Telegram Plugin

```bash
openclaw plugins enable telegram
```

**Expected Output:**
```
✓ Plugin enabled: telegram
```

---

### Step 2: Add Your Bot Token

You provided this token earlier (8771176260:AAEEM7s_15RKoS62Vfi5GB3v9g19fHEOwiI):

```bash
openclaw channels add --channel telegram --bot-token 8771176260:AAEEM7s_15RKoS62Vfi5GB3v9g19fHEOwiI
```

**Note:** The correct flag is `--bot-token`, not `--token`.

---

### Step 3: Verify the Channel is Active

```bash
openclaw status | grep -A 10 Channels
```

**Expected:** Telegram should now appear in the Channels table.

---

### Step 4: Restart the Gateway (if needed)

```bash
openclaw gateway restart
```

---

### Step 5: Test Telegram Connection

Send a message to your bot in Telegram. You should receive a response from Atlas.

---

## Alternative: Manual Config (If CLI Fails)

Edit `~/.openclaw/openclaw.json` and add the bot token:

```json
{
  "channels": {
    "telegram": {
      "dmPolicy": "pairing",
      "enabled": true,
      "groupPolicy": "allowlist",
      "streaming": "off",
      "botToken": "8771176260:AAEEM7s_15RKoS62Vfi5GB3v9g19fHEOwiI"
    }
  }
}
```

Then restart: `openclaw gateway restart`

---

## Command Reference (Correct Syntax)

| What | Correct Command |
|------|-----------------|
| Enable plugin | `openclaw plugins enable telegram` |
| Disable plugin | `openclaw plugins disable telegram` |
| List plugins | `openclaw plugins list` |
| Add channel with token | `openclaw channels add --channel <id> --bot-token <token>` |
| Check channel status | `openclaw channels status` |
| **Wrong:** | `openclaw channel setup telegram` ❌ |
| **Wrong:** | `openclaw channels login telegram` ❌ |

---

## Summary

| Issue | Status | Resolution |
|-------|--------|------------|
| Plugin installed | ✅ Present | N/A |
| Plugin enabled | ❌ **DISABLED** | **Run: `openclaw plugins enable telegram`** |
| Bot token configured | ❌ Missing | Run: `openclaw channels add --channel telegram --bot-token <TOKEN>` |
| Gateway running | ✅ Running | N/A |

---

## Why This Happened

By default, OpenClaw bundles 37 plugins but only loads 4 by default (Device Pairing, Memory Core, Phone Control, Talk Voice). Channel plugins (Telegram, Discord, Slack, etc.) are disabled until explicitly enabled to reduce attack surface and unnecessary background processes.

**The plugin file and code are correct — it just needs to be enabled.**

---

**Next Action:** Run `openclaw plugins enable telegram`, then add your bot token.

---
*Updated Report — Root cause: Plugin is disabled, not a configuration issue.*