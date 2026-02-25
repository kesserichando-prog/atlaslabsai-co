---
name: De-duplication
slug: deduplication
description: Check Pipeline for duplicate prospects using fuzzy matching and similarity scoring
---

## Core Purpose

Before adding a new prospect to the Pipeline, verify it's not already in the system. Avoid wasting time on duplicates and track prospect evolution over time.

## Why De-duplication Matters

1. **Don't re-research** the same company quarterly
2. **Track progress** - has this been contacted before?
3. **Update intelligence** - if prospect exists, don't create new record, UPDATE it
4. **Clean Pipeline** - remove outdated duplicates

## De-duplication Process

### Step 1: Query Pipeline for Prospects

**Query logic:**
```sql
SELECT company_name, website, industry, location, status, last_contacted
FROM Pipeline
WHERE lower(company_name) LIKE lower('%<search_term>%')
   OR website = '<company_website>'
   OR location LIKE '%<location>%'
ORDER BY last_updated DESC
```

**Search terms:**
- Full company name: "Acme Manufacturing"
- Partial name (remove suffix): "Acme"
- Website domain: "acme-mfg.com"

---

### Step 2: Similarity Scoring

For each matching prospect, calculate similarity score (0-1).

| Field | Weight | Scoring Logic |
|-------|--------|---------------|
| **Company Name** | 30% | Exact match = 1.0, contains name = 0.8, similar = 0.6 |
| **Website** | 40% | Exact match = 1.0, same domain = 0.9, different = 0 |
| **Industry** | 15% | Same = 1.0, related industry = 0.5, different = 0 |
| **Location** | 15% | Same city = 1.0, same state = 0.7, different = 0 |

**Total similarity = (Name × 0.30) + (Website × 0.40) + (Industry × 0.15) + (Location × 0.15)**

---

### Step 3: Determine Action

| Similarity Score | Action | Rationale |
|------------------|--------|-----------|
| **≥ 0.90** | ❌ **Skip** - Duplicate confirmed | Same company, no new value |
| **0.75 - 0.89** | 🔧 **Update** - Existing prospect | Likely same prospect, merge intelligence |
| **0.50 - 0.74** | ⚠️ **Review** - Possible duplicate | Check manually or flag for CEO Atlas |
| **< 0.50** | ✅ **Add** - New prospect | Different company |

---

## Duplicate Scenarios & Actions

### Scenario 1: Exact Match (Score ≥ 0.90)

**Example:**
```
New: "Acme Manufacturing", https://acme-mfg.com, Manufacturing, Phoenix
Existing: "Acme Manufacturing", https://acme-mfg.com, Manufacturing, Phoenix
Similarity: 1.0
Action: SKIP
```

**Don't create new record.** Log to `logs/`:

```markdown
Duplicate detected: Acme Manufacturing
- Matched against: Pipeline ID #1234 (added 2026-01-15)
- Similarity score: 1.0
- Action: Skipped (duplicate)
```

---

### Scenario 2: Same Company, New Intelligence (Score 0.75 - 0.89)

**Example:**
```
New: "Acme Manufacturing", https://acme-mfg.com, Manufacturing, Phoenix
Existing: "Acme Corp", https://acme-mfg.com, Manufacturing, Phoenix
Similarity: 0.85
```

**Don't create new record. UPDATE existing:**

- Add new pain points to existing record
- Update contact info if better/newer
- Refresh Trust Score
- Log update in `logs/`

```markdown
Intelligence update: Acme Manufacturing (Pipeline ID #1234)
- Matched against existing record: "Acme Corp"
- Similarity score: 0.85
- Action: Updated existing record
- Added: 1 new pain point (production scheduling delays)
- Updated: contact info (new VP Operations email)
```

---

### Scenario 3: Possible Duplicate (Score 0.50 - 0.74)

**Example:**
```
New: "Acme Manufacturing", https://acme-mfg.com, Manufacturing, Phoenix
Existing: "Acme Steel", https://acme-steel.com, Manufacturing, Phoenix
Similarity: 0.65
```

**Don't auto-add. FLAG for CEO Atlas review:**

```json
{
  "action": "manual_review_required",
  "prospect": "Acme Manufacturing",
  "similar_prospects": [
    {"id": 5678, "name": "Acme Steel", "similarity": 0.65, "website": "https://acme-steel.com"}
  ],
  "recommendation": "Same owner, different subsidiaries? Check if same business.",
  "confidence": "low"
}
```

---

### Scenario 4: Different Company (Score < 0.50)

**Example:**
```
New: "Acme Manufacturing", https://acme-mfg.com, Manufacturing, Phoenix
Existing: "Acme Logistics", https://acme-logistics.com, Logistics, Phoenix
Similarity: 0.35
```

**Add to Pipeline as new prospect:**
- Create new record
- Generate full artifacts (prospect JSON, angle MD, trust JSON, research MD)
- Log creation to `logs/`

---

## Fuzzy Matching Algorithm

### Company Name Similarity

```python
def company_name_similarity(new_name, existing_name):
    # Remove common suffixes/prefixes
    new = normalize_name(new_name)  # "Acme Manufacturing"
    existing = normalize_name(existing_name)  # "Acme Mfg"

    # Exact match
    if new == existing:
        return 1.0

    # Contains match
    if new in existing or existing in new:
        return 0.8

    # Similarity (Jaro-Winkler or Levenshtein)
    similarity = calculate_string_similarity(new, existing)
    if similarity >= 0.8:
        return 0.7
    elif similarity >= 0.6:
        return 0.5
    else:
        return 0.0
```

**Normalization rules:**
- Lowercase
- Remove: LLC, Inc, Corp, Co, Ltd, Manufacturing, Group, etc.
- Standardize: Mfg → Manufacturing, Inc → LLC
- Trim spaces

**Examples:**
```
"Acme Manufacturing" → "acme"
"Acme Mfg LLC" → "acme"
"Acme Manufacturing Group" → "acme"
# All resolve to same base, similarity = 1.0
```

---

### Website Similarity

```python
def website_similarity(new_url, existing_url):
    # Extract domain
    new_domain = extract_domain(new_url)  # "acme-mfg.com"
    existing_domain = extract_domain(existing_url)  # "acme-mfg.com"

    # Exact domain match
    if new_domain == existing_domain:
        return 1.0

    # Same parent domain (subdomains)
    new_base = get_base_domain(new_domain)  # "acme.com"
    existing_base = get_base_domain(existing_domain)  # "acme.com"

    if new_base == existing_base:
        return 0.9

    # Different domains
    return 0.0
```

---

### Industry Similarity

```python
def industry_similarity(new_industry, existing_industry):
    # Exact match
    if new_industry == existing_industry:
        return 1.0

    # Related industries
    related_pairs = {
        "Manuf": ["Manufacturing", "Production", "Fabrication"],
        "Logistics": ["Logistics", "Distribution", "Supply Chain"],
        "Ecommerce": ["E-commerce", "Retail", "Online Sales"],
        "SaaS": ["SaaS", "Software", "Technology"],
        "Health": ["Healthcare", "Medical", "Health"]
    }

    for group, members in related_pairs.items():
        if new_industry in members and existing_industry in members:
            return 0.5

    # Different industries
    return 0.0
```

---

### Location Similarity

```python
def location_similarity(new_loc, existing_loc):
    # Extract city/state
    new_city_state = parse_location(new_loc)
    existing_city_state = parse_location(existing_loc)

    # Same city
    if new_city_state == existing_city_state:
        return 1.0

    # Same state
    if new_city_state[1] == existing_city_state[1]:
        return 0.7

    # Different
    return 0.0
```

---

## Tracking Duplicates

Log all de-duplication decisions to `logs/deduplication-YYYY-MM-DD.jsonl`:

```jsonl
{"timestamp":"2026-02-24T02:00:00Z","prospect":"Acme Manufacturing","action":"skip","similar_to":"Pipeline #1234","similarity":1.0}
{"timestamp":"2026-02-24T02:05:00Z","prospect":"Beta Logistics","action":"update","similar_to":"Pipeline #5678","similarity":0.82}
{"timestamp":"2026-02-24T02:10:00Z","prospect":"Gamma Corp","action":"add","similar_to":null,"similarity":0.0}
{"timestamp":"2026-02-24T02:15:00Z","prospect":"Delta Mfg","action":"manual_review","similar_to":[{"id":9012,"name":"Delta Industries","similarity":0.68}]}
```

---

## Periodic Cleanup

Run monthly: Identify and flag outdated duplicates

**Query:**
```sql
SELECT company_name, COUNT(*) as duplicate_count
FROM Pipeline
WHERE last_contacted < DATE_SUB(NOW(), INTERVAL 6 MONTH)
GROUP BY company_name
HAVING duplicate_count > 1
```

**Action:**
- Flag for CEO Atlas review
- Merge intelligence
- Remove older stale records

---

## Output Schema

```json
{
  "prospect": "Acme Manufacturing",
  "action": "skip|update|add|manual_review",
  "similarity_score": 0.85,
  "similar_prospects": [
    {
      "id": 1234,
      "company_name": "Acme Mfg LLC",
      "website": "https://acme-mfg.com",
      "similarity": 0.85
    }
  ],
  "recommendation": "Update existing record #1234 with new intelligence",
  "confidence": "high"
}
```

---

## Usage

```python
deduplicator = DeDuplicator(
    pipeline_query=get_pipeline_prospects
)

result = deduplicator.check(prospect)
# Returns: {action, similarity, similar_prospects, recommendation}

if result["action"] == "add":
    create_prospect_record(prospect)
elif result["action"] == "update":
    update_existing_record(result["similar_prospects"][0]["id"], prospect)
elif result["action"] == "manual_review":
    flag_for_ceo_atlas(prospect, result["similar_prospects"])
 elif result["action"] == "skip":
    log_duplicate(prospect, result["similar_prospects"][0])
```