---
brand: Anthropic Console
tagline: Build with Claude. API playground, workbench, and developer tools.
category: AI & ML
website: https://console.anthropic.com
---

# Anthropic Console — Information Architecture

## Overview

The Anthropic Console is the developer-facing portal for building with Claude's API. The IA is structured as a **developer console** modeled after cloud platform dashboards (GCP Console, Stripe Dashboard) — it combines an interactive API playground (Workbench), API key management, usage monitoring, billing, and prompt optimization tools. Unlike claude.ai (the consumer product), the Console targets developers and organizations integrating Claude into their applications. The Workbench is the centerpiece: an interactive prompt engineering environment where developers can test prompts, adjust parameters, compare models, and generate API code snippets.

## Site Map

```
console.anthropic.com
├── / (Dashboard — usage overview, quick actions)
├── /workbench (API Playground / Prompt Workbench)
│   └── /{workbench_id} (Saved workbench session)
├── /prompts (Prompt library — saved prompt templates)
│   └── /{prompt_id}
├── /api-keys (API key management)
├── /usage (Usage analytics — tokens, costs, rate limits)
├── /billing
│   ├── /plans
│   ├── /invoices
│   └── /payment-methods
├── /settings
│   ├── /organization
│   ├── /members
│   ├── /limits (Rate limits & spend limits)
│   └── /profile
├── /logs (API request logs)
├── /docs (→ redirects to docs.anthropic.com)
└── /auth
```

## Navigation Model

- **Primary navigation**: Left sidebar — Dashboard, Workbench, Prompts, API Keys, Logs, Usage, Billing, Settings
- **Workbench navigation**: Top bar with model selector, temperature/max-tokens sliders, system prompt panel, user/assistant message pairs
- **Settings navigation**: Sub-tabs within Settings — Organization, Members, Limits, Profile
- **Utility navigation**: Top-right — organization switcher (for multi-org users), avatar → Profile, Sign out
- **Contextual navigation**: Workbench has "Get Code" button that generates Python/TypeScript/curl code from current config
- **Documentation links**: Contextual links throughout the UI pointing to docs.anthropic.com

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Workbench Session | Model, system prompt, message pairs, parameters (temperature, max_tokens, top_p), response | User-owned, saveable |
| Saved Prompt | Named prompt template with variables, model config, system prompt | User/Org-owned |
| API Key | Key string, name, permissions, created date, last used | Org-scoped |
| Usage Record | Timestamp, model, input/output tokens, cost, endpoint | Org-scoped |
| Organization | Name, members, billing info, API keys, rate limits | Org |
| Invoice | Billing period, usage breakdown by model, total cost | Org billing |
| Log Entry | API request details — model, tokens, latency, status code, truncated prompt | Org-scoped |

## User Flows

### Prompt Engineering in Workbench
1. Developer opens Workbench → selects model (Claude Sonnet 4, Opus 4, Haiku)
2. Writes system prompt in dedicated panel
3. Adds user message → clicks "Run" or Cmd+Enter
4. Response streams in the assistant panel
5. Adjusts parameters (temperature, max tokens) → re-runs
6. Clicks "Get Code" → copies Python/TypeScript/curl snippet
7. Saves as named prompt for later use or sharing with team

### API Key Management
1. Developer navigates to API Keys
2. Clicks "Create Key" → names the key, sets permissions
3. Key displayed once → copy and store securely
4. Key appears in list with usage stats and last-used date
5. Can revoke/delete keys; set rate limits per key

### Monitoring Usage & Costs
1. Developer navigates to Usage
2. Views dashboard: tokens consumed (input/output), costs by model, request volume
3. Filters by date range, model, API key
4. Charts show trends over time
5. Billing page shows invoices and payment methods

### Organization Management
1. Admin navigates to Settings → Members
2. Invites team members by email
3. Assigns roles (Admin, Developer, Billing)
4. Sets spend limits and rate limits for the organization
5. Manages multiple API keys with different permission scopes

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Dashboard |
| `/workbench` | New workbench session |
| `/workbench/{uuid}` | Saved workbench session |
| `/prompts` | Prompt library |
| `/prompts/{uuid}` | Individual saved prompt |
| `/api-keys` | API key management |
| `/usage` | Usage analytics |
| `/billing` | Billing management |
| `/billing/invoices` | Invoice history |
| `/settings/organization` | Org settings |
| `/settings/members` | Team management |
| `/settings/limits` | Rate/spend limits |
| `/logs` | API logs |

Standard SPA routing. UUIDs for saved prompts and workbench sessions.

## Search & Filter

- **Prompt search**: Search saved prompts by name
- **Usage filters**: Filter by date range, model (Sonnet, Opus, Haiku), API key
- **Log filters**: Filter API logs by model, status code, date range, latency threshold
- **No global search**: No unified search across the entire console
- **API key search**: Filter keys by name

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full sidebar + Workbench with side-by-side system/user/assistant panels |
| Desktop (1024-1280px) | Collapsible sidebar + full Workbench |
| Tablet (768-1024px) | Minimal sidebar (icons) + Workbench panels stack vertically |
| Mobile (<768px) | Functional but not optimized — Workbench is a desktop tool |

- Workbench panels (system prompt, messages, parameters) stack vertically on narrow screens
- Usage charts resize responsively
- API key table adapts to narrower widths (truncated key previews)
- Code generation modal is full-screen on mobile

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | No access (authentication required) |
| Developer | Use Workbench, manage own API keys, view usage |
| Admin | Full access — manage members, billing, org settings, all API keys |
| Billing | View/manage billing, invoices, payment methods |

- Authentication: Email/password, Google OAuth, GitHub OAuth
- Organization model: Users belong to one or more organizations; API keys are org-scoped
- API key permissions: Keys can be scoped to specific capabilities
- Rate limits: Configurable per-org and per-key; different tiers have different defaults
- Spend limits: Admins can set monthly spend caps to prevent cost overruns
- SOC 2 Type II compliant; data not used for training by default
