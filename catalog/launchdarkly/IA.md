---
brand: LaunchDarkly
tagline: Ship faster. Reduce risk. Build better software.
category: Developer Tools
website: https://launchdarkly.com
---

# LaunchDarkly — Information Architecture

## Overview

LaunchDarkly is the market-leading feature management platform that enables teams to control feature releases through feature flags (also called feature toggles). The IA is structured around a **flag-centric management hierarchy**: Organization → Project → Environment → Feature Flags. Each flag can be toggled, targeted to specific user segments, and configured with multivariate values. The platform goes beyond simple on/off toggles to support progressive rollouts, A/B experiments, entitlements, and release automation. The IA also incorporates Segments (reusable user groups), Metrics (for experimentation), and Contexts (the evolution of "users" into multi-dimensional targeting entities). The dashboard is designed for both developers (who create flags) and product managers (who control rollouts).

## Site Map

```
app.launchdarkly.com
├── / (Dashboard — flag activity, recent changes)
├── /{project_key}/flags (Feature flags list)
│   └── /{flag_key} (Flag detail — targeting, variations, activity)
│       ├── /targeting (Targeting rules & rollout)
│       ├── /variations (Flag value variations)
│       ├── /activity (Audit log for this flag)
│       ├── /experiments (A/B experiments linked)
│       └── /settings (Flag metadata)
├── /{project_key}/segments (User/Context segments)
│   └── /{segment_key}
├── /{project_key}/contexts (Context explorer — live user data)
│   └── /{context_id}
├── /{project_key}/experiments (Experimentation)
│   └── /{experiment_key}
├── /{project_key}/metrics (Metric definitions for experiments)
│   └── /{metric_key}
├── /{project_key}/releases (Release pipelines)
│   └── /{release_id}
├── /settings
│   ├── /projects (Project management)
│   ├── /environments (Environment management)
│   ├── /members (Team members & roles)
│   ├── /teams
│   ├── /integrations (Slack, Jira, Datadog, etc.)
│   ├── /webhooks
│   ├── /access-tokens
│   ├── /security (SSO, MFA)
│   └── /billing
├── /changelog (Account-wide audit log)
└── /auth
```

## Navigation Model

- **Primary navigation**: Left sidebar — Dashboard, Feature Flags, Segments, Contexts, Experiments, Releases
- **Environment selector**: Prominent dropdown in top bar — switches all views between environments (Production, Staging, Development, QA)
- **Project selector**: Top-left dropdown for multi-project organizations
- **Flag detail navigation**: Tabs within a flag — Targeting, Variations, Insights, Activity, Code References, Settings
- **Settings navigation**: Separate settings section — Projects, Environments, Members, Teams, Integrations, Billing
- **Utility navigation**: Top-right — changelog (audit), avatar → Account, Sign out
- **Quick actions**: Flag list has inline toggles — flip a flag on/off without opening the detail page
- **Mobile**: Not optimized for mobile — enterprise desktop tool

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Feature Flag | Key, name, description, variations (boolean, string, number, JSON), targeting rules, prerequisites, tags | Project-scoped |
| Targeting Rule | Context attributes (email, plan, country, etc.), operator, values, rollout percentage, variation to serve | Part of flag |
| Variation | Named value — the actual value served to the application (e.g., true/false, "v1"/"v2") | Part of flag |
| Segment | Key, name, rules for including/excluding contexts, reusable across flags | Project-scoped |
| Context | Entity being evaluated (user, device, organization) with attributes, flag evaluations | Runtime data |
| Experiment | Flag + metric pairing, statistical analysis of variation impact | Project-scoped |
| Metric | Custom event (click-through, conversion, latency), measured for experiments | Project-scoped |
| Release Pipeline | Staged rollout plan: flag changes across environments with approval gates | Project-scoped |
| Environment | Named deployment target (production, staging, dev) with independent flag states | Project-level |
| Audit Entry | Who changed what flag, when, in which environment, old/new values | Account-level |

## User Flows

### Creating and Rolling Out a Feature Flag
1. Developer creates a flag: key (`enable-new-checkout`), name, boolean type
2. Flag defaults to `false` in all environments
3. Wraps new feature code with flag check: `if (ldClient.variation('enable-new-checkout')))`
4. Deploys code — feature is off for all users
5. Product manager opens flag → Targeting tab → enables for internal team (segment: "employees")
6. Monitors feedback → adds 10% rollout to production users
7. Gradually increases to 50%, 100% → flag becomes permanent → remove flag from code

### Targeted Rollout with Segments
1. User creates Segment: "beta-users" with rules (email contains "@beta.com" OR attribute "plan" = "enterprise")
2. Opens flag → Targeting → adds targeting rule: Segment "beta-users" → serve `true`
3. All matching users see the new feature
4. Segment is reusable — apply to multiple flags

### A/B Experiment
1. User creates Metric: "checkout-conversion" (custom event from app)
2. Creates Experiment: links flag (`checkout-variant`) with metric
3. Flag has 3 variations: "control", "variant-a", "variant-b"
4. Sets rollout: 34% each variation
5. Experiment runs → statistical analysis shows which variant performs best
6. Winning variant rolled out to 100%

### Release Pipeline
1. Team creates Release Pipeline with stages: Dev → Staging → Canary → Production
2. Links flag changes to each stage
3. Start release → flag enabled in Dev automatically
4. Promote to Staging → approval gate (requires team lead approval)
5. Promote to Canary (5% of production) → monitor metrics
6. Promote to Production (100%) — full rollout complete

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Dashboard |
| `/{project_key}/flags` | Flag list |
| `/{project_key}/flags/{flag_key}` | Flag detail |
| `/{project_key}/flags/{flag_key}/targeting` | Targeting rules |
| `/{project_key}/segments/{segment_key}` | Segment detail |
| `/{project_key}/contexts` | Context explorer |
| `/{project_key}/experiments/{key}` | Experiment detail |
| `/{project_key}/releases/{id}` | Release pipeline |
| `/settings/projects` | Project management |
| `/settings/members` | Team members |
| `/settings/integrations` | Integrations |
| `/changelog` | Audit log |

Project and flag keys are developer-defined slugs (e.g., `my-app`, `enable-dark-mode`). Environment key is a query parameter or part of the UI state, not the URL.

## Search & Filter

- **Flag search**: Search flags by key, name, or tag; filter by status (on/off), tags, maintainer
- **Flag list filtering**: Filter by archived, temporary/permanent, recently changed, stale (not evaluated)
- **Context search**: Search individual contexts by key or attributes
- **Segment search**: Search segments by key or name
- **Audit log search**: Filter by member, flag, project, environment, date range, action type
- **Code references**: Search codebase for flag references (integrated with GitHub/GitLab)
- **Tag system**: Flags and segments can be tagged for categorization (e.g., "frontend", "mobile", "experiment")

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full sidebar + flag list with inline toggles + targeting rules detail |
| Desktop (1024-1280px) | Collapsible sidebar + full content |
| Tablet (768-1024px) | Sidebar as overlay + simplified flag list |
| Mobile (<768px) | Not a primary use case — basic functionality available but complex targeting rules are impractical |

- Flag list is a data-dense table — environment toggle columns visible on desktop, hidden on mobile
- Targeting rules builder uses nested conditions — requires desktop-width for comfortable editing
- Dashboard activity feed works at all sizes
- Experiment results charts resize responsively
- Audit log table scrolls horizontally on narrow screens

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | No access |
| Reader | View flags, segments, contexts (no modifications) |
| Writer | Reader + create/edit flags, targeting rules, segments |
| Admin | Writer + manage projects, environments, members, integrations |
| Owner | Admin + billing, account-level settings |
| Custom roles | Enterprise: define granular permissions per resource type |
| Approval workflows | Require approval from specific roles before flag changes in production |

- Authentication: Email/password, Google OAuth, SSO/SAML (Enterprise), MFA
- Environment-level permissions: Different roles per environment (e.g., Writer in staging, Reader in production)
- Approval gates: Require approval before changes to specific flags or environments
- API tokens: Service tokens (project-scoped) and personal tokens (user-scoped)
- SDK keys: Client-side and server-side keys per environment (client-side keys are safe to expose)
- Audit trail: Every flag change logged with who, what, when, and diff
- Integrations: Slack notifications, Jira ticket linking, Datadog/New Relic metrics forwarding
