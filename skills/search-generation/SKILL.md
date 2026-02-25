---
name: Search Query Generation
slug: search-generation
description: Generate high-quality search queries for finding businesses discussing automation gaps
---

## Core Purpose

Create search queries that surface real businesses actively discussing or experiencing automation problems. Avoid broad terms that return irrelevant results.

## Query Framework

### Pattern 1: Pain Point + Industry

**Structure:** `[pain point]` `[industry]` `[geography]`

**Examples:**
- "manual data entry" "manufacturing" "Arizona"
- "spreadsheets" "logistics" "California"
- "automation gap" "order processing" "SaaS"

### Pattern 2: Process + Problem

**Structure:** `[process]` "inefficient" OR "manual" OR "error-prone"

**Examples:**
- "inventory tracking" manual "too slow"
- "shipping" manual delays "expensive"
- "customer support" manual "overwhelmed"

### Pattern 3: Size Constraints

**Structure:** `"50-200 employees"` OR "midsize" OR "growing company"

**Examples:**
- "inventory management" "50-200 employees" manufacturing
- "automation needs" midsize e-commerce

### Pattern 4: Technology Clues

**Structure:** `[platform]` "automation" OR "integration" OR "API"

**Examples:**
- "Shopify" automation "manual order processing"
- "QuickBooks" "manual reconciliation" inventory
- "Salesforce" "manual data entry" leads

## High-Value Pain Points

**Always include terms suggesting problems:**
- "too slow," "time-consuming," "manual," "spreadsheets," "excel hell"
- "error-prone," "inaccurate," "data entry," "reconciliation"
- "can't track," "don't know inventory," "orders lost"
- "need to automate," "looking for solution," "inefficient workflow"

**Avoid:**
- Generic terms like "automation," "software," "SaaS" (too broad)
- Marketing language like "best," "leading," "#1"
- Company names (research, don't search specific companies)

## Industry-Specific Term Pairs

| Industry | Pain Points | Automation Targets |
|----------|-------------|-------------------|
| Manufacturing | production planning, quality control, inventory tracking | ERP, QC software, RFID, barcode systems |
| Logistics/Distribution | warehouse management, route optimization, shipping delays | WMS, route planning, tracking systems |
| E-commerce | order processing, inventory sync, checkout flow | Platforms, inventory tools, payment integration |
| SaaS | customer onboarding, churn analysis, manual reporting | Analytics, onboarding tools, billing automation |
| Retail | inventory management, POS integration, customer data | POS systems, CRM integration, analytics |
| Healthcare | patient scheduling, billing, records, HIP compliance | EHR, scheduling systems, billing automation |
| Professional Services | client tracking, billing, proposals, project management | PSA software, CRM, time tracking |

## Geographic Modifiers

- **US/Canada focus:** "United States," "Canada," "North America"
- **Regional:** "California," "Texas," "Phoenix AZ," "Toronto"
- **Size + geo:** "50-200 employees" "manufacturing" "United States"

## Search Strategy per Run

Per Opportunity Scout cycle, rotate through:

1. **Industry A** + **2 pain points** + **geo modifier**
2. **Industry B** + **2 pain points** + **size constraint**
3. **Industry C** + **2 pain points** + **technology clue**
4. **Cross-industry** + **common pain point** + **size constraint**

**Example rotation (1 run = 4 searches):**
```
1. "manual inventory tracking" manufacturing "United States"
2. "order processing manual" e-commerce "100-200 employees"
3. "shipping delays" logistics "California"
4. "data entry spreadsheets" "midsize company"
```

## Avoid These Mistakes

- ❌ Searching for specific company names (research separately)
- ❌ Marketing/broader terms like "CRM software" (boring)
- ❌ Terms that return job postings, not business problems
- ❌ Keywords that trigger competitor ads, not discussion

## Success Criteria

**Good query:** "manual inventory tracking manufacturing Arizona"
- ✅ Specific pain point
- ✅ Industry-specific
- ✅ Geographic constraint
- ✅ Likely returns company pages/blog posts

**Bad query:** "CRM software" or "manufacturing automation"
- ❌ Too broad
- ❌ Returns vendors, not problems
- ❌ No pain point indication

## Usage

```python
# Generate 4 queries per run opportunity scout
querier = QueryGenerator()
queries = querier.generate(
    industries=["manufacturing", "logistics", "e-commerce", "SaaS"],
    pain_points=["manual inventory", "order processing", "shipping delays", "data entry"],
    constraints=["50-200 employees", "United States", "California", "midsize"]
)
# Returns: ["manual inventory tracking manufacturing 50-200 employees", ...]
```