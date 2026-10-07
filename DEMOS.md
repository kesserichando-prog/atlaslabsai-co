# Demo Pages

All demo flows are served as standalone HTML files from `/public/demos/`.

## How to Access

Simply use the direct URL format:
```
https://atlaslabsai.co/demos/demo-{company-name}-flow.html
```

## Available Demos

1. **Arizona Same Day Trucking**
   - URL: `/demos/demo-arizona-same-day-trucking-flow.html`
   - Trust Score: 73

2. **Apex Medical Billing**
   - URL: `/demos/demo-apex-medical-billing-flow.html`
   - Trust Score: 86

3. **JARS Cannabis**
   - URL: `/demos/demo-jars-cannabis-flow.html`
   - Trust Score: 90

4. **Story McDowell (Nature's Medicine)**
   - URL: `/demos/demo-story-mcdowell-flow.html`
   - Trust Score: 88

5. **Trulieve**
   - URL: `/demos/demo-trulieve-flow.html`
   - Trust Score: 95

6. **Test Automation Corp**
   - URL: `/demos/demo-test-automation-corp-flow.html`
   - Trust Score: 85

7. **AZ Insurance Team**
   - URL: `/demos/demo-az-insurance-team-flow.html`
   - Trust Score: 71

8. **South Mountain Internal Medicine**
   - URL: `/demos/demo-south-mountain-internal-medicine-flow.html`
   - Trust Score: 72

9. **Elliott 24-7**
   - URL: `/demos/demo-elliott-247-flow.html`
   - Trust Score: 82

## For Prospects

Send the direct link to prospects - it's a standalone HTML file with all styling embedded, no Next.js rendering needed.

## How New Demos Are Added

When Catalyst builds a new demo:
1. Generates 3 artifacts: `.md`, `.json`, `.html` (flow map)
2. Copies the `.html` file to `public/demos/`
3. Commits and pushes to GitHub
4. Demo is immediately accessible at `/demos/demo-{slug}-flow.html`