# Skills Tracking - Continuous Improvement

This file tracks what skills we're discovering, creating, and installing to make the team more efficient.

**Last updated:** 2026-02-26

---

## Week of 2026-02-24

### Skills Discovered (by Scout 🔍)
*Automated discovery via ClawHub searches - 2026-02-24 04:40 AM*

| Skill | Source | Purpose | Status | Impact |
|-------|--------|---------|--------|--------|
| **lead-hunter** | ClawHub galacticpuffin | Automated lead generation + enrichment with email/social scoring | 🔍 Discovered | High: Full lead pipeline automation |
| **lead-enrichment** | ClawHub audsmith28 | Turn name/company into full dossier: social links, bio, intel, talking points | 🔍 Discovered | Critical: Reduces research by 80% |
| **lead-generation** | ClawHub atyachin | Live social prospecting (Twitter, Instagram, Reddit) finds intent buyers | 🔍 Discovered | High: Real-time lead discovery |
| **deep-research-pro** | ClawHub parags | Multi-source web research with cited reports, no API keys | 🔍 Discovered | Medium: Complements Scout research |
| **n8n-workflow-automation** | ClawHub KOwl64 | Design n8n workflows with triggers, error handling, logging, retries, review queues | 🔍 Discovered (2026-02-25) | High: Build automations quickly for clients |
| **sales-pipeline-tracker** | ClawHub 1kalin | Track deals through stages, forecast revenue, identify bottlenecks | 🔍 Discovered (2026-02-25) | Medium: Pipeline management automation |
| **abm-outbound** | ClawHub dru-ca | Multi-channel ABM: LinkedIn scrape → Apollo → Skip Trace → email/LinkedIn/handwritten letters | 🔍 Discovered (2026-02-25) | Critical: Full-stack outreach automation |
| **weekly-report-generator** | ClawHub 1kalin | Auto-generate structured weekly KPI/accomplishment/blocker/plans reports | 🔍 Discovered (2026-02-25) | Medium: Save 1-2 hrs/week on reporting |
| **task-decomposer** | ClawHub 10e9928a | Decompose complex requests into subtasks, search skills.sh, create new skills when needed | 🔍 Discovered (2026-02-25) | Medium: Automate workflow breakdown for complex requests |
| **lead-scorer** | ClawHub 1kalin | Score and qualify leads with customizable criteria (fit, intent, engagement) | 🔍 Discovered (2026-02-25) | Medium: Could integrate with Trust Score for dual-scoring |
| **daily-report** | ClawHub | Automated daily reports (complement to weekly-report-generator) | 🔍 Discovered (2026-02-25) | Low: Could automate daily brief creation |
| **notion-api-integration** | ClawHub | Notion API integration and workflow automation | 🔍 Discovered (2026-02-25) | Medium: Document management + knowledge base |
| **pdf-to-structured** | ClawHub | Convert PDF to structured data | 🔍 Discovered (2026-02-25) | High: Automate document processing and data extraction |
| **paperless** | ClawHub | Document management and OCR automation | 🔍 Discovered (2026-02-25) | Medium: Document archive + search automation |
| **automation-workflows** | ClawHub | General automation workflow templates | 🔍 Discovered (2026-02-26) | Medium: Could accelerate demo builds |
| **ai-web-automation** | ClawHub | AI-powered web automation tasks | 🔍 Discovered (2026-02-26) | Medium: Scraping, form fill, data extraction |
| **data-automation-service** | ClawHub | Data processing and ETL workflows | 🔍 Discovered (2026-02-26) | Medium: Data pipelines, transformation |
| **x-post-automation** | ClawHub | X(Twitter) post automation | 🔍 Discovered (2026-02-26) | Low: Marketing automation |
| **windows-ui-automation** | ClawHub | Windows UI automation | 🔍 Discovered (2026-02-26) | Low: Desktop automation |
| **activecampaign-automation** | ClawHub | ActiveCampaign workflow automation | 🔍 Discovered (2026-02-26) | Low: Email marketing integration |
| trust-score-calculator | Local | Automates Trust Score calculation | ✅ Built | Active |
| prospect-enrichment | Local | Auto-enrich company research | ✅ Ready | Active |

### Skills Created (by Atlas 🧭)
*Built when gaps identified in daily work*

| Skill | Use Case | Time Saved | Status |
|-------|----------|------------|--------|
| manual-data-extract | Extract structured data from unstructured text | 2 hrs/day → automated | Testing (5 runs) |
| outreach-template-builder | Generate personalized outreach | 15 min/email → 2 min | Design phase |
| pricing-calculator | Optimize pricing by industry | Researching best practices | Planning |

### Skills Installed (approved via Lobster 🦞)
*Only installed after Twin approves*

| Skill | Approved | Installed | Impact |
|-------|----------|-----------|--------|
| skill-creator | 2026-02-20 | 2026-02-20 | Enables autonomous skill creation |
| market-research | 2026-02-21 | 2026-02-21 | Market sizing + competitor analysis |
| pricing | 2026-02-21 | 2026-02-21 | Pricing strategy optimization |

### Skills Proposed for Install 🔒
*Waiting for Lobster approval*

| Skill | Source | Ready | What it does | Time saved | Test results |
|-------|--------|-------|--------------|------------|--------------|
| **lead-enrichment** | ClawHub audsmith28 | 2026-02-24 | Name/company → full dossier (LinkedIn, Twitter, GitHub, company intel, talking points) | 15-30 min/prospect | N/A (needs testing) |
| **lead-hunter** | ClawHub galacticpuffin | 2026-02-24 | Find prospects + enrich emails/socials + score & prioritize pipeline | Full pipeline automation | N/A (needs testing) |

### Previous Proposals
| Skill | Source | Ready | What it does | Time saved | Test results |
|-------|--------|-------|--------------|------------|--------------|
| prospect-enrichment | Local | 2026-02-24 | Automates company research | 15-30 min per prospect | 10 prospects in 5 min vs 3 hrs manually |

---

## Velocity Metrics

| Metric | Week 1 (Feb 17-23) | Week 2 (Feb 24-Mar 2) | Goal |
|--------|-------------------|----------------------|------|
| Skills discovered | 2 | TBD | 3/week |
| Skills created | 1 | TBD | 1/week |
| Skills installed | 3 | TBD | 1-2/week |
| Time saved/week | 5 hrs | TBD | 10 hrs/week |

---

## Why This Matters

Every skill we discover, create, or install makes the team:
- **Faster** — Less manual work, more impact
- **Sharper** — Better tools for our specific stack
- **Stronger** — Continuous improvement, not plateauing

**The team that builds better tools, wins.**

---

## Latest Scout Discovery: 2026-02-24 04:40 AM

### 🎯 Two High-Impact Skills Identified

**1. lead-enrichment (1.1.0)**
- **Owner:** audsmith28
- **Last updated:** 2026-02-24
- **What it does:**
  - Single input: name + company (or email, or LinkedIn URL)
  - Output: Full dossier with social links, bio, company intel, recent activity
  - Aggregates from: LinkedIn, Twitter, GitHub, company websites, news
  - Formats: JSON, Markdown, CRM-ready
  - Batch processing supported

**Impact on Current Work:**
- Manual Triad Electronic Technologies research took ~15 min across multiple sites
- lead-enrichment could do this in <30 seconds
- For goal of 25-30 prospects/week: 7.5 hrs → 15 min (95% time reduction)
- **Recommendation:** HIGH PRIORITY for install

**2. lead-hunter (1.0.1)**
- **Owner:** galacticpuffin
- **Last updated:** 2026-02-24 (today!)
- **What it does:**
  - Automated lead generation
  - Enrichment: emails, socials, company data
  - Scoring & prioritization pipeline
  - "Your agent builds pipeline while you sleep"

**Impact on Current Work:**
- Replaces much of Opportunity Scout's manual search + research work
- Could automate: web search → company research → enrich → score
- For 25-30 prospects/week: Full pipeline automation possible
- **Recommendation:** HIGH PRIORITY for install (may need to coordinate with existing Scout system)

### 💡 Integration Opportunity

These skills could significantly enhance the Opportunity Scout system:

**Current Scout Flow:**
```
Web search → manual research (website, LinkedIn, reviews) → manual enrichment → manual score → artifacts
```

**Enhanced Scout Flow with lead-enrichment:**
```
Web search → lead-enrichment (automated) → score → artifacts
```

Time reduction: ~15 min/prospect → <1 min/prospect (90%+ faster)

**With lead-hunter added:**
```
lead-hunter (find + enrich + score) → artifact generation → pipeline
```

Time reduction: ~15 min/prospect → automated (no labor)

---

## Decision Point for Lobster

**Question:** Should we install lead-enrichment and/or lead-hunter?

**Lead-enrichment:**
- Pros: Clearly defined, single purpose, tested (1.1.0), 95% time reduction on research
- Cons: May need to validate data quality against our Trust Score methodology
- Effort: Low install, test with 3-5 current prospects

**Lead-hunter:**
- Pros: Full pipeline automation, highly rated (3.363), actively maintained
- Cons: May overlap with Opportunity Scout system, need to integrate not replace
- Effort: Medium install, test run 1, validate against our scoring methodology

**Recommendation:** Start with lead-enrichment (lower risk, clear wins), then evaluate lead-hunter after testing.

---

## Latest Scout Discovery: 2026-02-25 06:00 AM

### 🎯 Three More Skills for Automation and Workflow

**1. task-decomposer (MEDIUM PRIORITY)**
- **Owner:** 10e9928a
- **Rating:** 1.027
- **Last updated:** 2026-02-25
- **What it does:**
  - Decomposes complex user requests into executable subtasks
  - Identifies required capabilities
  - Searches skills.sh for existing skills
  - Creates new skills when no solution exists
  - "Use when user submits complex multi-step request, wants to automate workflows"

**Impact on Current Work:**
- Could automate: Breaking down complex automation projects into manageable steps
- Would integrate with: skill-creator workflow (already have)
- **Use case:** When prospect submits "automate our entire dispatch system", task-decomposer breaks it down
- **Recommendation:** Test with 2-3 complex automation scenarios

**2. lead-scorer (MEDIUM PRIORITY)**
- **Owner:** 1kalin
- **Rating:** 0.921
- **Last updated:** 2026-02-25
- **What it does:**
  - Score and qualify leads using customizable criteria
  - Prioritize pipeline by: fit, intent, engagement
  - Focus on deals most likely to close

**Impact on Current Work:**
- We have Trust Score for prospect qualification
- lead-scorer adds: fit, intent, engagement scoring
- **Potential integration:** Dual-scoring system
  - Trust Score (0-100): Company quality, fit for automation
  - Lead Score (0-100): Intent, engagement, deal likelihood
- **Use case:** Score prospects after initial outreach to prioritize follow-ups
- **Recommendation:** Medium - evaluate if dual-scoring adds value or creates complexity

**3. daily-report (LOW PRIORITY)**
- **Owner:** Unknown
- **Rating:** 0.961
- **Last updated:** 2026-02-02
- **What it does:**
  - Automated daily reports
  - Complement to weekly-report-generator

**Impact on Current Work:**
- Could automate: Daily brief generation (morning/afternoon progress)
- We already create: briefs/morning-brief-YYYY-MM-DD.md
- **Use case:** Automate parts of morning brief creation
- **Recommendation:** Low - evaluate after testing weekly-report-generator

### 💡 Integration Opportunities

**Workflow Automation with task-decomposer:**

**Current Process:**
```
Prospect identified → Contact → Discovery call → Manual scope → Manual breakdown → Quote
```

**Powered by task-decomposer:**
```
Prospect identified → Contact → Discovery call → Automated scope → AI-breakdown → Quote faster
```

**Lead Qualification Pipeline:**
```
Prospect → Trust Score (Atlas) → Outreach → Engagement → Lead Score (lead-scorer) → Follow-up priority
```

### ⚠️ Dependencies to Check

**task-decomposer:**
- Needs access to skills.sh API (we have clawhub integration)
- Tested on complex automation scenarios?

**lead-scorer:**
- Customizable criteria mapping?
- How does scoring criteria compare to our Trust Score methodology?

---

## Latest Scout Discovery: 2026-02-25 04:10 AM

### 🎯 Five New Skills for Outreach and Automation

**1. abm-outbound (HIGH PRIORITY)**
- **Owner:** dru-ca
- **Rating:** 1.023
- **Last updated:** 2026-02-25
- **What it does:**
  - Multi-channel ABM automation
  - LinkedIn URL → coordinated outbound campaigns
  - Scrapes profiles, enriches with Apollo (email + phone)
  - Gets mailing addresses via Skip Trace
  - Orchestrate: email sequences + LinkedIn touches + handwritten letters (Scribeless)
  - "Secret weapon for standing out in crowded inboxes"

**Impact on Current Work:**
- Currently: Manual research + email writing (15-30 min/prospect)
- With abm-outbound: 1-2 min/prospect (90%+ time reduction)
- For 25-30 prospects/week: 7.5 hrs → 45 min
- **Strength:** Multi-channel (email + LinkedIn + handwritten) = higher response rate
- **Recommendation:** CRITICAL for outreach - test with 3-5 prospects

**2. n8n-workflow-automation**
- **Owner:** KOwl64
- **Rating:** 3.691
- **Last updated:** 2026-02-25
- **What it does:**
  - Design n8n workflow JSON with robust triggers
  - Idempotency, error handling, logging, retries
  - Human-in-the-loop review queues
  - Auditable automation

**Impact on Current Work:**
- We BUILD automation for clients - this could help build them faster
- Reduces time to design client workflows
- Ensures robustness (error handling, logging built-in)
- **Use case:** Demo automation builder for prospects
- **Recommendation:** MEDIUM priority - test for demo building workflow

**3. sales-pipeline-tracker**
- **Owner:** 1kalin
- **Rating:** 3.597
- **Last updated:** 2026-02-25
- **What it does:**
  - Track deals through every stage (lead → close)
  - Manage pipeline stages, update deal status
  - Forecast revenue, identify bottlenecks

**Impact on Current Work:**
- Mission Control has Pipeline page already - may duplicate
- Could complement with: forecasting, bottleneck analysis
- **Use case:** Revenue forecasting for Atlas operations
- **Recommendation:** LOW priority for now (evaluate Mission Control gaps first)

**4. weekly-report-generator**
- **Owner:** 1kalin
- **Rating:** 0.980
- **Last updated:** 2026-02-25
- **What it does:**
  - Auto-generate structured weekly business reports
  - Covers: KPIs, accomplishments, blockers, plans
  - "Save hours of reporting time every week"

**Impact on Current Work:**
- Currently: Manual brief creation (morning/afternoon progress)
- With skill: Automated KPI/accomplishment summary
- **Use case:** Could automate parts of morning brief
- **Recommendation:** MEDIUM priority - could reduce reporting overhead

### 💡 Integration Opportunities

**Outreach Stack with abm-outbound:**
```
Prospect scoring (Trust Score > 70) → Demo built → Multi-channel outreach:
  - Email sequence (abm-outbound)
  - LinkedIn touch (abm-outbound)
  - Handwritten letter (abm-outbound)
```

**Automation Demo Builder with n8n-workflow-automation:**
```
Prospect pain point identified → n8n-workflow-automation → Client demo JSON → Quick prototype
```

### ⚠️ Dependencies to Check

**abm-outbound requires:**
- Apollo API key (for email/phone enrichment)
- Skip Trace access (for mailing addresses)
- Scribeless account (for handwritten letters) - optional

**Before install:**
1. Verify Apollo access/costs
2. Check Skip Trace availability
3. Confirm integration complexity with existing outreach flow

---

## Latest Scout Discovery: 2026-02-26 06:31 AM

### 🎯 Five New Skills for Automation

**1. automation-workflows (MEDIUM PRIORITY)**
- **Owner:** Unknown
- **Rating:** 3.632
- **What it does:**
  - General automation workflow templates
  - Pre-built patterns for common tasks

**Impact on Current Work:**
- Could accelerate demo builds with reusable workflow patterns
- Reduces design time for client automation proposals
- **Use case:** Quick template for common automation scenarios
- **Recommendation:** Test for demo building efficiency

**2. ai-web-automation (MEDIUM PRIORITY)**
- **Owner:** Unknown
- **Rating:** 3.393
- **What it does:**
  - AI-powered web automation tasks
  - Scraping, form fill, data extraction

**Impact on Current Work:**
- Could automate: Web research, form submissions, data extraction
- We already have document-processing skill - may overlap
- **Use case:** Automate prospect data collection from websites
- **Recommendation:** Evaluate overlap with existing skills

**3. data-automation-service (MEDIUM PRIORITY)**
- **Owner:** Unknown
- **Rating:** 3.283
- **What it does:**
  - Data processing and ETL workflows
  - Transform and load data pipelines

**Impact on Current Work:**
- We have etl-pipelines skill - may duplicate
- Could complement with: Additional connectors, templates
- **Use case:** Client data migration projects
- **Recommendation:** Check against etl-pipelines skill first

**4. x-post-automation (LOW PRIORITY)**
- **Owner:** Unknown
- **Rating:** 3.473
- **What it does:**
  - X(Twitter) post automation

**Impact on Current Work:**
- Marketing automation
- **Use case:** Automated social posting
- **Recommendation:** Low priority - not core to mission

**5. windows-ui-automation (LOW PRIORITY)**
- **Owner:** Unknown
- **Rating:** 3.465
- **What it does:**
  - Windows UI automation

**Impact on Current Work:**
- Desktop automation
- **Use case:** Legacy system integration
- **Recommendation:** Low priority - macOS environment

### 💡 Integration Opportunities

**Demo Builder Acceleration:**
```
automation-workflows + ai-web-automation → Faster client demos
```

### ⚠️ Dependencies to Check

**automation-workflows:**
- Template library quality?
- Customization flexibility?

**ai-web-automation:**
- Browser control method (Playwright/Selenium)?
- Anti-bot handling?

**data-automation-service:**
- Connector ecosystem?
- Performance on large datasets?

---