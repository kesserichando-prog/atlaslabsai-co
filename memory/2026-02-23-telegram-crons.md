# Telegram Cron Configuration — 2026-02-23
**Time:** 9:10 PM MST
**Status:** ✅ Configured and Active

---

## Changes Made

### Cron Jobs Updated:

**1. morning-brief** (already configured)
- Schedule: 8:00 AM MST daily
- Delivery: Telegram → `6401141016` (primary)
- Status: ✅ Ready (old errors will clear on next run)

**2. morning-brief-2** (already configured)
- Schedule: 8:00 AM MST daily
- Delivery: Telegram → `5502951738` (secondary)
- Status: ✅ Ready (old errors will clear on next run)

**3. afternoon-progress** (UPDATED)
- Schedule: 3:00 PM MST daily
- Delivery: **Changed from `channel: "last"` → `telegram: 6401141016`**
- Status: ✅ Configured

**4. afternoon-progress-2** (NEW JOB CREATED)
- Schedule: 3:00 PM MST daily
- Delivery: Telegram → `5502951738` (secondary)
- Job ID: `27d78542-bfda-4477-908d-d721663a32c1`
- Status: ✅ Configured

**5. night-scout** (unchanged)
- Schedule: 2:00 AM MST daily
- Delivery: `channel: "last"` (uses most recent session)
- Status: ✅ Working

---

## Delivery Matrix

| Cron Job | Time (MST) | Telegram 6401... | Telegram 5502... |
|----------|-----------|-----------------|-----------------|
| morning-brief | 8:00 AM | ✅ Primary | |
| morning-brief-2 | 8:00 AM | | ✅ Secondary |
| afternoon-progress | 3:00 PM | ✅ Primary | |
| afternoon-progress-2 | 3:00 PM | | ✅ Secondary |
| night-scout | 2:00 AM | ✅ Last channel | ✅ Last channel |

---

## Job IDs Reference

- `night-scout`: `1ea84234-1817-439b-9a9c-f97025802555`
- `morning-brief`: `25e37957-2583-40e1-b186-9fad0618534e`
- `morning-brief-2`: `6e7e769f-9a44-4776-bf95-7ac8461991fd`
- `afternoon-progress`: `c54b64a6-1c60-417e-a33f-f9c811fdd0f2`
- `afternoon-progress-2`: `27d78542-bfda-4477-908d-d721663a32c1`

---

## Next Scheduled Runs

| Job | Next Run (MST) |
|-----|---------------|
| night-scout | 2:00 AM (tomorrow) |
| morning-brief | 8:00 AM (tomorrow) |
| morning-brief-2 | 8:00 AM (tomorrow) |
| afternoon-progress | 3:00 PM (tomorrow) |
| afternoon-progress-2 | 3:00 PM (tomorrow) |

---

## Notes

- Previous errors in morning-brief jobs were from when Telegram was disabled
- Those errors will clear on the next successful run
- `night-scout` continues to use `channel: "last"` which will route to whichever Telegram was most recently active
- Both Telegram targets (6401... and 5502...) will receive all briefs
- No manual action needed — jobs will run automatically per schedule

---

*Configuration complete — Telegram delivery restored for all cron jobs.*