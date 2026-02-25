---
name: Trust Score Calculator
slug: trust-score
description: Calculate 0-100 Trust Score for companies with 10-component breakdown and verification
---

## Core Purpose

Calculate a standardized Trust Score (0-100) for any prospect company to prioritize outreach and filter out low-quality leads.

## Score Components (100 points total)

| Component | Points | Evaluation Method |
|-----------|--------|-------------------|
| **Website Quality** | 10 | SSL certificate, responsive design, professional headers, clear navigation |
| **Reviews** | 10 | Google reviews (count, rating), industry-specific reviews (G2, Capterra) |
| **Social Presence** | 10 | LinkedIn page exists, Twitter/X active, recent posts (last 30 days) |
| **Industry Conversion Rate** | 25 | Historical conversion by industry (from Pipeline data) |
| **Competitor Saturation** | 15 | Under-served industries score higher (less automation competition) |
| **Clear Positioning** | 20 | Can we understand what they do? (products/services, target market) |
| **Effort Score** | 10 | Inverse (easier-to-reach = higher score) |

## Evaluation Criteria

### 1. Website Quality (10 pts)

**Check:**
- SSL certificate (`https://` + valid cert)
- Mobile-responsive (viewport meta tag, CSS media queries)
- Professional headers (company logo, clear title tag)
- Clear navigation (menu items, sitemap)
- No obvious errors (404s, broken links)

**Scoring:**
- 10: SSL + mobile + professional headers + clear navigation
- 7-8: SSL + decent design, minor issues
- 4-6: SSL but amateur design
- 0-3: No SSL, broken site

**Verification:** `web_fetch` the homepage, check `<head>` and responsive indicators

---

### 2. Reviews (10 pts)

**Check Google Maps/Business:**
- Review count (0-10 maps to 0-10 pts)
- Rating (4.5+ = bonus 2 pts, 4.0-4.5 = bonus 1 pt)
- Recent reviews (last 90 days = bonus 1 pt)

**Check industry-specific if applicable:**
- G2, Capterra, App Store, Trustpilot
- Any verified review = min 2 pts
- 10+ reviews = +2 pts

**Scoring:**
- 10: 20+ Google reviews + industry reviews + 4.5+ rating + recent activity
- 7-8: 10-20 reviews + decent rating
- 4-6: 5-10 reviews
- 0-3: No reviews or very few

**Verification:** `web_search` "[company] reviews Google" or "[company] reviews G2"

---

### 3. Social Presence (10 pts)

**Check LinkedIn:**
- Company page exists (+3 pts)
- 50+ employees listed (+2 pts)
- Recent post (last 30 days) (+3 pts)
- 500+ followers (+2 pts)

**Check Twitter/X (optional bonus):**
- Account exists (+1 pt)
- Active (last 30 days) (+1 pt)

**Scoring:**
- 10: LinkedIn + Twitter + recent activity
- 7-8: LinkedIn + recent posts
- 4-6: LinkedIn exists, minimal activity
- 0-3: No LinkedIn or skeleton page

**Verification:** `web_search` "[company] LinkedIn", `web_search` "[company] Twitter"

---

### 4. Industry Conversion Rate (25 pts) - **HIGHEST WEIGHT**

**From Pipeline data:**
- Track conversion by industry over time
- "Manufacturing": conversion rate X%
- "Logistics": conversion rate Y%
- Etc.

**Scoring map (example, adjust based on actual data):**
- 25: Manufacturing, Logistics (converting well)
- 20: E-commerce, SaaS, Retail
- 15: Healthcare (slower, regulated)
- 10: Professional Services
- 5: Education, Government (very slow)

**Verification:** Query Pipeline table, aggregate by industry

---

### 5. Competitor Saturation (15 pts)

**Logic:** Less automation competition = higher opportunity

**Research:**
- Search for automation vendors targeting this industry
- Count how many companies are doing "X industry automation"
- Under-served = higher score, saturated = lower

**Scoring:**
- 15: Under 3 competitors (greenfield)
- 10-12: 3-5 competitors
- 5-8: 5-10 competitors
- 0-3: 10+ competitors (saturated)

**Verification:** `web_search` "[industry] automation vendors" or "[industry] automation solution"

---

### 6. Clear Positioning (20 pts)

**Check:**
- Can we describe what they do in 1 sentence?
- Clear products/services listed?
- Target market obvious (B2B, B2C, SMB, enterprise)?
- No vague "we do everything" language

**Scoring:**
- 20: Crystal clear positioning (products, market, ICP)
- 15-17: Clear but could be more specific
- 10-14: Somewhat clear, a bit vague
- 5-9: Vague, hard to understand what they do
- 0-4: Completely unclear

**Verification:** `web_fetch` homepage + About page, summarize positioning

---

### 7. Effort Score (10 pts) - **INVERSE WEIGHT**

**Logic:** Easier to reach = higher score

**Check:**
- Contact page exists with form? (+2 pts)
- Email addresses listed? (+3 pts)
- Phone number? (+2 pts)
- Decision-maker names findable? (LinkedIn) (+3 pts)

**Scoring:**
- 10: All contact methods available + decision makers identified
- 7-8: Good contact info, some decision makers
- 4-6: Contact form only, no direct emails
- 0-3: No contact info, hard to reach

**Verification:** `web_fetch` contact page, `web_search` "[company] CEO" or "[company] operations director"

---

## Final Score Calculation

```
Total = Website(10) + Reviews(10) + Social(10) + Industry(25) + Competitors(15) + Positioning(20) + Effort(10)

Trust Score = Min(100, Max(0, Total))
```

## Tiers (for prioritization)

| Score | Tier | Action |
|-------|------|--------|
| 90-100 | ⭐⭐⭐ Elite | Immediate outreach, manual research |
| 80-89 | ⭐⭐ High | High priority, auto-approve for Research Analyst |
| 70-79 | ⭐ Good | Standard pipeline entry |
| 60-69 | Medium | Lower priority, requires more verification |
| <60 | Low | Skip or requires strong justification |

## Output Schema (JSON)

```json
{
  "company_name": "Acme Manufacturing",
  "website": "https://acme-mfg.com",
  "trust_score": 78,
  "breakdown": {
    "website": {
      "score": 8,
      "findings": "SSL valid, responsive design, minor navigation issues",
      "verified": true
    },
    "reviews": {
      "score": 7,
      "findings": "12 Google reviews, 4.2 rating, no recent activity",
      "verified": true
    },
    "social": {
      "score": 7,
      "findings": "LinkedIn active, 75 employees, no Twitter",
      "verified": true
    },
    "industry_conversion": {
      "score": 18,
      "findings": "Manufacturing industry, 18% historical conversion",
      "verified": true
    },
    "competitor_saturation": {
      "score": 14,
      "findings": "3 automation vendors in manufacturing space",
      "verified": true
    },
    "positioning": {
      "score": 17,
      "findings": "Clear: custom metal fabrication for aerospace defense",
      "verified": true
    },
    "effort": {
      "score": 7,
      "findings": "Contact form + email, LinkedIn decision makers found",
      "verified": true
    }
  },
  "tier": "⭐ Good",
  "recommendation": "Standard pipeline entry"
}
```

## Red Flags (Auto-Score Zeroes)

If any component gets 0 and there's a critical issue:
- No HTTPS = security risk
- No website = invalid business
- No contact info = can't reach
- Scam reports = reject immediately

## Usage

```python
scorer = TrustScoreCalculator()
score_data = scorer.calculate(
    company="Acme Manufacturing",
    website="https://acme-mfg.com",
    industry="Manufacturing",
    tools=[web_search, web_fetch]  # for verification
)
# Returns trust_score: 78, breakdown: {...}
```