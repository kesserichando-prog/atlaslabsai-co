# Telegram Channel Troubleshooting Report
**Date:** 2026-02-23
**Time:** 8:05 PM MST
**Requester:** Twin
**Issue:** Unable to connect OpenClaw to any communication channel; Telegram is the required channel for remote access

---

## Executive Summary

**Root Cause Identified:** Telegram channel is configured as enabled but **missing the bot token** required for authentication.

**Status:** Channel exists in codebase but cannot start without credentials.

---

## Detailed Findings

### 1. Current Configuration Status

**File:** `~/.openclaw/openclaw.json`

```json
"channels": {
  "telegram": {
    "dmPolicy": "pairing",
    "enabled": true,              ← ✅ Enabled
    "groupPolicy": "allowlist",
    "streaming": "off"
  }
}
```

**Missing Configuration:**
- ❌ `botToken` - The Telegram bot token string
- ❌ `tokenFile` - Path to a file containing the token
- ❌ Environment variable `TELEGRAM_BOT_TOKEN` - Also not set

### 2. Verification from `openclaw status`

**Channels Table:** EMPTY
```
Channels
┌──────────┬─────────┬────────┬─────────────────────────────────────────┐
│ Channel  │ Enabled │ State  │ Detail                                  │
├──────────┼─────────┼────────┼─────────────────────────────────────────┤
└──────────┴─────────┴────────┴─────────────────────────────────────────┘
```

**Interpretation:** The Telegram channel is registered in code but not showing in the active channels list because it fails configuration validation.

### 3. Plugin Verification

**Telegram Plugin Location:** `/opt/homebrew/lib/node_modules/openclaw/extensions/telegram/`

*Files Present:*
- `index.ts` - Plugin registration ✓
- `openclaw.plugin.json` - Plugin metadata ✓
- `src/channel.ts` - Channel implementation ✓
- `src/runtime.ts` - Runtime bridge ✓
- `node_modules/` - Dependencies ✓

**Plugin Status:** Code is correct and present.

### 4. Code Validation (From Plugin Source)

The Telegram plugin code expects one of these three token sources:

**Option 1: Direct Token in Config:**
```json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"
    }
  }
}
```

**Option 2: Token File:**
```json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "tokenFile": "/path/to/telegram-token.txt"
    }
  }
}
```

**Option 3: Environment Variable (DEFAULT account only):**
```bash
export TELEGRAM_BOT_TOKEN="123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"
```

### 5. Evidence from Logs

**Error Message Observed Earlier:**
```
Unknown channel: telegram
```

**Root Explanation:** The channel "exists" in OpenClaw's channel registry but fails to initialize when the Gateway starts because it lacks credentials. The plugin is loaded but `isConfigured()` returns `false` due to missing token.

### 6. Session Evidence

**Old Telegram Session Present:**
```
agent:main:telegram:direct:6401… | direct | 12h ago
```

This old session indicates Telegram **was working previously**, suggesting:
- The bot token may have been removed from config
- OR the token was invalidated/revoked
- OR the configuration file was reset/overwritten

---

## Solution Proposals

### Option 1: Add Bot Token Directly (Quickest)

**Steps:**
1. OpenClaw has a channel setup CLI. Run:
   ```bash
   openclaw channel setup telegram --token <YOUR_BOT_TOKEN>
   ```

2. This will automatically update `~/.openclaw/openclaw.json` with the token.

**Advantages:**
- ✅ Quickest fix
- ✅ Automatic config management
- ✅ Handles all required fields

**Note:** You previously shared credentials in chat (security not recommended), but the proper setup requires the **Telegram Bot Token** specifically. You mentioned this earlier.

---

### Option 2: Manually Edit Config File

**Steps:**
1. Edit `~/.openclaw/openclaw.json`
2. Add `botToken` to telegram section:
   ```json
   {
     "channels": {
       "telegram": {
         "dmPolicy": "pairing",
         "enabled": true,
         "groupPolicy": "allowlist",
         "streaming": "off",
         "botToken": "YOUR_TELEGRAM_BOT_TOKEN_HERE"
       }
     }
   }
   ```
3. Restart OpenClaw Gateway:
   ```bash
   openclaw gateway restart
   ```

**Advantages:**
- Direct control
- Transparent configuration

**Disadvantages:**
- Manual error prone
- Requires Gateway restart

---

### Option 3: Use Environment Variable (For Security)

**Steps:**
1. Set environment variable:
   ```bash
   export TELEGRAM_BOT_TOKEN="YOUR_BOT_TOKEN"
   ```

2. Add to shell profile (e.g., `~/.zshrc`):
   ```bash
   echo 'export TELEGRAM_BOT_TOKEN="YOUR_BOT_TOKEN"' >> ~/.zshrc
   source ~/.zshrc
   ```

3. Restart OpenClaw Gateway:
   ```bash
   openclaw gateway restart
   ```

**Advantages:**
- ✅ More secure (not stored in plaintext config)
- ✅ Easier to rotate tokens
- ✅ Works well with deployment/automation

---

### Option 4: Token File (For Production)

**Steps:**
1. Create file with restricted permissions:
   ```bash
   echo "YOUR_BOT_TOKEN" > ~/.telegram-token
   chmod 600 ~/.telegram-token
   ```

2. Update config:
   ```json
   {
     "channels": {
       "telegram": {
         "tokenFile": "/Users/atlas/.telegram-token",
         "enabled": true
       }
     }
   }
   ```

3. Restart Gateway: `openclaw gateway restart`

**Advantages:**
- ✅ Production best practice
- ✅ File permission controls
- ✅ Easier to manage secrets

---

## Verification Steps (After Fix)

Run these commands to verify the fix works:

1. **Check channel status:**
   ```bash
   openclaw status | grep -A 5 Channels
   ```
   *Expected:* telegram should appear in the Channels table

2. **Check Gateway logs:**
   ```bash
   openclaw logs | tail -50
   ```
   *Expected:* Should see "starting provider" for Telegram

3. **Test connection:**
   ```bash
   openclaw channel check telegram
   ```
   *(if available)*

---

## Security Notes

⚠️ **WARNING:** Do NOT share bot tokens in chat or plaintext messages.

✅ **Recommended:** Use Option 3 (Environment Variable) or Option 4 (Token File) for production security.

## Additional Observations

1. **Gateway Service is Running:**
   - PID: 74450
   - Status: active
   - No errors in service logs

2. **Other Channels:**
   - Only webchat is currently functional
   - No other channels configured

3. **Token Management:**
   - OpenClaw supports multiple Telegram accounts (bot tokens)
   - Each account needs its own unique token
   - Duplicate tokens are rejected as a security measure

---

## Summary Table

| Issue | Status | Impact |
|-------|--------|--------|
| Plugin Installed | ✅ Present | N/A |
| Configuration Enabled | ⚠️ Partial | Cannot start |
| Bot Token Configured | ❌ Missing | **BLOCKING** |
| Gateway Running | ✅ Running | N/A |
| Old Session Exists | ✅ Evidence | Was working before |

---

**Recommendation:** Use **Option 1** (`openclaw channel setup telegram --token <TOKEN>`) for the quickest resolution, then consider migrating to **Option 3** or **4** for long-term security.

**Next Action:** Provide the Telegram Bot Token (using the `openclaw channel setup` command) to restore functionality.

---
*End of Report*