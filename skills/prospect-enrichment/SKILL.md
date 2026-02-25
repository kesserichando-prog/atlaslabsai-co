---
name: Prospect Enrichment
slug: prospect-enrichment
description: Transform raw company URLs into structured prospect records with contact info, deal size, pain points
---

## Core Purpose

Convert basic company information (name, website URL) into a rich, structured prospect record with all data needed for CEO Atlas review and Owner Twin approval.

## Input Data

```json
{
  "company_name": "Acme Manufacturing",
  "website": "https://acme-mfg.com",
  "industry": "Manufacturing",
  "raw_source": "[search result or reference]"
}
```

## Output: Structured Prospect Record

### Required Fields

```json
{
  "company": {
    "name": "Acme Manufacturing",
    "website": "https://acme-mfg.com",
    "industry": "Manufacturing",
    "size": "50-200 employees",
    "location": "Phoenix, Arizona, United States",
    "founded": "2012",
    "description": "Custom metal fabrication for aerospace and defense"
  },
  "pain_points": [
    {
      "problem": "Manual inventory tracking across 3 locations",
      "impact": "20 hours/week wasted on reconciliation, data entry errors cause stockouts",
      "urgency": "high"
    },
    {
      "problem": "No real-time visibility into production scheduling",
      "impact": "Delayed orders, missed deadlines",
      "urgency": "medium"
    }
  ],
  "automation_angle": {
    "gap": "Manual inventory tracking with no real-time synchronization across locations",
    "solution": "Centralized inventory management system with QR/barcode scanning + automated reorder alerts",
    "impact": "Reduce manual entry by 80%, save 20 hrs/week, eliminate stockouts",
    "effort_score": 6,
    "tech_fit": "Can integrate with existing QuickBooks + use handheld scanners",
    "estimated_cost_range": "$5,000-$15,000"
  },
  "contact": {
    "primary": {
      "name": "Jane Smith",
      "title": "VP Operations",
      "linkedin": "linkedin.com/in/janesmith-operations",
      "email": "jane@acme-mfg.com",
      "phone_found": true
    },
    "secondary": {
      "name": "Robert Johnson",
      "title": "Director of IT",
      "linkedin": "linkedin.com/in/robertjohnson-it"
    }
  },
  "trust_score": {
    "total": 78,
    "breakdown": {
      "website": 8,
      "reviews": 7,
      "social": 7,
      "industry_conversion": 18,
      "competitor_saturation": 14,
      "positioning": 17,
      "effort": 7
    },
    "tier": "⭐ Good"
  },
  "deal_size": {
    "estimated": 12000,
    "currency": "USD",
    "confidence": 70,
    "confidence_rationale": "Company size + pain point urgency + tech fit"
  },
  "tech_stack": [
    "QuickBooks",
    "Salesforce (partial)",
    "Handheld scanners (legacy)",
    "Excel spreadsheets"
  ],
  "sources": [
    "website",
    "linkedin",
    "google-reviews",
    "industry-reports"
  ],
  "confidence": 85,
  "enriched_at": "2026-02-24T02:00:00Z"
}
```

## Enrichment Process

### Step 1: Basic Company Info (Website Analysis)

**Actions:**
- `web_fetch` the homepage
- Parse `<title>`, `<meta description>`, About page
- Extract location (footer, contact page)
- Determine company size (employee count from LinkedIn)
- Identify industry (explicit or inferred)

**Fields filled:** `company.name`, `company.website`, `company.location`, `company.size`, `company.description`

---

### Step 2: Tech Stack Detection

**Actions:**
- Scan website for tech clues:
  - "Powered by [platform]" (Shopify, WordPress, etc.)
  - Login portals (Salesforce, HubSpot, Zendesk)
  - Integrations mentioned (QuickBooks, NetSuite)
  - Analytics (Google Analytics, Mixpanel)
- `web_search` "[company] tech stack" or "[company] software"

**Fields filled:** `tech_stack`

---

### Step 3: Social Media Verification

**Actions:**
- `web_search` "[company] LinkedIn" → find company page
- Extract employee count, recent posts
- `web_search` "[company] Twitter/X" → check if active
- Verify company details across platforms

**Fields filled:** `company.size` (refined), Trust Score social component

---

### Step 4: Contact Discovery

**Actions:**
- `web_fetch` Contact page → forms, emails, phone
- `web_search` "[company] VP Operations" or "[company] CEO"
- Search LinkedIn for decision-makers:
  - Titles: VP Operations, CTO, Director of IT, Operations Manager, CFO
- Extract names, LinkedIn profiles, emails

**Fields filled:** `contact.primary`, `contact.secondary`

**Quality checks:**
- Verify email format (company domain, not generic)
- Check if decision-maker is still active (last LinkedIn post < 6mo)

---

### Step 5: Pain Point Extraction

**Actions:**
- Scan company blog, case studies, testimonials
- Look for language: "manual," "spreadsheet," "time-consuming," "error-prone"
- `web_search` "[company] challenges" or "[company] problems"
- Extract specific problems + business impact

**Fields filled:** `pain_points` (array of objects)

**Template for each pain point:**
```json
{
  "problem": "Concise problem statement",
  "impact": "Quantified impact (time, money, errors)",
  "urgency": "high|medium|low"
}
```

---

### Step 6: Deal Size Estimation

**Formula:**
```
Base Deal Size = Company Size Multiplier × Industry Multiplier × Pain Urgency × Tech Fit

Company Size Multipliers:
- 10-50 employees: $3,000-$8,000
- 50-200 employees: $5,000-$15,000
- 200-500 employees: $10,000-$30,000
- 500+ employees: $25,000-$75,000

Industry Multipliers:
- Manufacturing, Logistics: 1.0x
- E-commerce, SaaS: 0.8x
- Healthcare: 1.2x (regulated = higher value)
- Professional Services: 0.7x

Pain Urgency:
- High: 1.2x (critical business impact)
- Medium: 1.0x
- Low: 0.7x

Tech Fit:
- Easy integration (existing tech stack): 1.0x
- Requires new systems: 0.8x

Example (50-200 employees, Manufacturing, High urgency, Good fit):
$10,000 × 1.0 × 1.2 × 1.0 = $12,000
```

**Fields filled:** `deal_size.estimated`, `deal_size.confidence`, `deal_size.confidence_rationale`

---

### Step 7: Trust Score Calculation

Use Trust Score Calculator skill with full verification.

**Fields filled:** `trust_score`, `trust_score.tier`

---

### Step 8: Automation Angle (The Most Critical Field)

**NOT a pitch. NOT a demo. Just facts.**

**Structure:**

```json
{
  "gap": "What's broken (1-2 sentences)",
  "solution": "What could fix it (1-2 sentences)",
  "impact": "What changes (time saved, money saved, errors reduced)",
  "effort_score": 1-10 (higher = harder),
  "tech_fit": "How this integrates with their stack",
  "estimated_cost_range": "Rough cost estimate for solution"
}
```

**Good Example:**
```json
{
  "gap": "Manual inventory tracking across 3 locations with no real-time sync",
  "solution": "Centralized inventory management system with QR/barcode scanning and automated reorder alerts",
  "impact": "Reduce manual entry by 80%, save 20 hours/week, eliminate stockouts",
  "effort_score": 6,
  "tech_fit": "Can integrate with existing QuickBooks + use handheld scanners they already own",
  "estimated_cost_range": "$8,000-$12,000"
}
```

**Bad Example (DON'T DO THIS):**
```json
{
  "gap": "They need inventory automation",
  "solution": "Our amazing solution will transform their business",
  "impact": "Huge ROI guaranteed",
  "effort_score": 3,
  "tech_fit": "We can integrate anything!",
  "estimated_cost_range": "$5,000-$50,000"  ← too vague
}
```

---

## Artifact Output

For each prospect, generate 4 files:

### 1. `prospect-[company-name-slug].json`
The structured record (see schema above)

### 2. `angle-[company-name-slug].md`
```markdown
# Automation Angle

**Company**: Acme Manufacturing

## Current State
[Describe what's broken in 2-3 sentences]

## Proposed Automation
[Describe what could be done in 2-3 sentences]

## Estimated Impact
- Time saved: 20 hours/week
- Errors reduced: 80%
- Cost avoided: $5,000/month (stockouts)

## Effort Score
6/10 - Moderate complexity, requires ERP integration

## Tech Fit
Good - Can build on existing QuickBooks + use handheld scanners
```

### 3. `trust-[company-name-slug].json`
Trust Score breakdown (from Trust Score Calculator)

### 4. `research-[company-name-slug].md`
```markdown
# Research Summary

**Company**: Acme Manufacturing
**Research Date**: 2026-02-24

## Sources Checked
- ✅ Website (https://acme-mfg.com)
- ✅ LinkedIn (company page)
- ✅ Google Reviews
- ❌ G2 (no reviews found)
- ✅ Industry reports (manufacturing automation trends)

## Key Findings
- 75 employees, 3 locations (Phoenix, Tucson, Flagstaff)
- Uses QuickBooks, legacy handheld scanners
- Manual inventory reconciliation takes 20 hrs/week
- VP Operations is Jane Smith, active on LinkedIn

## Pain Points Confirmed
1. Manual inventory tracking (mentioned in blog post)
2. Production scheduling delays (case study reference)

## Confidence
85/100 - Multiple sources confirm, decision-makers reachable
```

---

## Non-Negotiable Rules

- ✅ Minimum 1 pain point identified
- ✅ Automation angle present (not pitch, not demo)
- ✅ Contact info found (email, LinkedIn, or phone)
- ✅ Trust Score calculated
- ✅ Deal size estimated with rationale
- ✅ Sources listed (what was checked, what wasn't)
- ❌ No empty prospect records
- ❌ No missing automation angles

## Usage

```python
enricher = ProspectEnrichment(
    company_name="Acme Manufacturing",
    website="https://acme-mfg.com",
    industry="Manufacturing"
)

prospect = enricher.enrich(
    tools=[web_search, web_fetch],
    trust_scorer=TrustScoreCalculator()
)
# Returns: structured prospect object
# Generates: 4 files (JSON + Markdown)
```