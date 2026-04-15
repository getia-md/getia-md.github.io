---
brand: Netlify
tagline: The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web.
category: Developer Tools
website: https://netlify.com
---

# Netlify — Information Architecture

## Overview

Netlify pioneered the JAMstack hosting model and remains a leading platform for deploying modern web applications. The IA is organized around a **site-centric deployment dashboard** — every project is a "site" with its own deploy history, build settings, domain configuration, and function endpoints. The architecture supports Git-based continuous deployment (push to deploy), deploy previews (per-PR deployments), serverless functions, edge functions, forms, identity (auth), and split testing. Netlify's IA reflects a developer-friendly philosophy: minimal configuration, sensible defaults, and a flat hierarchy where sites are the primary organizational unit.

## Site Map

```
app.netlify.com
├── / (Team dashboard — all sites)
├── /teams/{team_slug}
│   └── /overview (Team overview)
├── /sites/{site_id} (Individual site)
│   ├── /overview (Deploy status, recent deploys)
│   ├── /deploys (Deploy history)
│   │   └── /{deploy_id} (Deploy detail — log, summary)
│   ├── /settings
│   │   ├── /general (Site name, build settings, repo link)
│   │   ├── /build-deploy (Build command, publish dir, env vars)
│   │   ├── /domain-management (Custom domains, DNS, HTTPS)
│   │   ├── /notifications (Deploy notifications — Slack, email, webhook)
│   │   ├── /forms (Form submissions)
│   │   ├── /functions (Serverless functions config)
│   │   ├── /identity (Auth/user management)
│   │   ├── /access-control (Password protection, JWT)
│   │   └── /analytics
│   ├── /functions (Function logs & invocations)
│   ├── /forms (Form submission data)
│   ├── /analytics (Site analytics)
│   └── /plugins (Build plugins)
├── /account/settings
│   ├── /general
│   ├── /billing
│   ├── /members
│   └── /audit-log
├── /integrations (Integration marketplace)
└── /drop (Drag-and-drop deploy)

netlify.com (marketing)
├── / (Home)
├── /pricing
├── /products/* (Platform, Connect, Create)
├── /docs (Documentation)
└── /blog
```

## Navigation Model

- **Primary navigation**: Top bar — Sites (team dashboard), Integrations, Docs, Support, Team selector
- **Site navigation**: Left sidebar within a site — Overview, Deploys, Functions, Forms, Analytics, Plugins, Settings
- **Settings navigation**: Nested sub-nav within Settings — General, Build & Deploy, Domain Management, Notifications, etc.
- **Team navigation**: Team dropdown in top bar → switch between teams/orgs
- **Deploy navigation**: Deploy list → click deploy → deploy log with build output, summary, and deploy preview link
- **Breadcrumbs**: Team → Site → Section → Sub-section
- **Mobile**: Responsive dashboard; deploy logs are scrollable single-column

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Site | Name, repo link, build settings, domains, deploy history, functions, forms | Team-owned |
| Deploy | Commit hash, branch, status (success/fail/building), build log, deploy URL, timestamp | Part of site |
| Deploy Preview | Unique URL for a specific PR/branch deploy, shareable | Part of site |
| Function | Serverless function file, invocation logs, endpoint URL | Part of site |
| Form | HTML form name, submissions list, notification settings | Part of site |
| Build Plugin | npm package extending build process, configuration | Part of site |
| Environment Variable | Key-value pair, scoped to deploy context (production, branch deploys, deploy previews) | Part of site |
| Team | Name, members, sites, billing plan, audit log | Team-owned |

## User Flows

### Deploy a New Site
1. User clicks "Add New Site" → "Import from Git"
2. Connects GitHub/GitLab/Bitbucket → selects repository
3. Configures: branch to deploy, build command, publish directory
4. Clicks Deploy → build starts immediately
5. Build log streams in real-time → site deployed to `{site-name}.netlify.app`
6. Subsequent Git pushes trigger automatic deploys

### Deploy Preview Workflow
1. Developer opens a PR on GitHub
2. Netlify automatically builds the PR branch
3. Deploy preview URL posted as PR comment (unique URL per commit)
4. Reviewer clicks link → sees the changes live
5. PR merged → production deploy triggered automatically

### Custom Domain Setup
1. User navigates to Site → Settings → Domain Management
2. Adds custom domain → Netlify provides DNS records
3. Option A: Use Netlify DNS (point nameservers) — automatic HTTPS via Let's Encrypt
4. Option B: External DNS — add CNAME record manually
5. HTTPS certificate provisioned automatically

### Serverless Functions
1. User creates `/netlify/functions/` directory in repo
2. Writes function files (JS/TS) → each file becomes an API endpoint
3. Deploys → functions available at `/.netlify/functions/{name}`
4. Monitor invocations and logs in Functions tab
5. Environment variables accessible in function runtime

## URL / Route Structure

| Pattern | Description |
|---|---|
| `app.netlify.com/` | Team dashboard |
| `app.netlify.com/teams/{slug}` | Team overview |
| `app.netlify.com/sites/{site_id}` | Site overview |
| `app.netlify.com/sites/{site_id}/deploys` | Deploy history |
| `app.netlify.com/sites/{site_id}/deploys/{deploy_id}` | Deploy detail |
| `app.netlify.com/sites/{site_id}/settings/general` | Site settings |
| `app.netlify.com/sites/{site_id}/functions` | Functions |
| `app.netlify.com/sites/{site_id}/forms` | Forms |
| `app.netlify.com/sites/{site_id}/analytics` | Analytics |
| `app.netlify.com/account/settings` | Account settings |
| `app.netlify.com/drop` | Drag-and-drop deploy |

Site IDs are human-readable slugs (derived from site name). Deploy IDs are alphanumeric.

## Search & Filter

- **Site search**: Search sites by name in team dashboard
- **Deploy filtering**: Filter deploys by branch (production, branch deploys, deploy previews), status (success, failed, building), date
- **Function logs**: Filter by function name, date range
- **Form submissions**: Filter by form name, date range
- **Plugin search**: Search build plugins by name/category in integration marketplace
- **No full-text search**: Cannot search deploy logs or function output content
- **Docs search**: Full-text documentation search

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1024px) | Top nav + site sidebar + main content area |
| Tablet (768-1024px) | Collapsible sidebar + full-width content |
| Mobile (<768px) | Hamburger menu, single-column layout, deploy logs as scrollable blocks |

- Dashboard site cards reflow from grid to list on mobile
- Deploy log output is monospace with horizontal scroll for long lines
- Settings forms stack vertically
- Analytics charts resize responsively
- Drag-and-drop deploy area works on desktop only

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site, docs (no dashboard) |
| Free (Starter) | 1 member, 100GB bandwidth, 300 build minutes/mo, basic features |
| Pro ($19/member/mo) | Unlimited members, 1TB bandwidth, 25K build minutes, analytics, background functions |
| Business ($99/member/mo) | Pro + SAML SSO, audit log, priority support |
| Enterprise | Custom limits, SLA, dedicated support, advanced security |
| Team roles | Owner → Admin → Developer → Collaborator (view-only on specific sites) |

- Authentication: Email/password, GitHub OAuth, GitLab OAuth, Bitbucket OAuth
- Site-level access: Sites can be public (anyone can view) or password-protected
- Deploy notifications: Per-site webhook/email/Slack configuration
- Environment variables: Secret by default; not exposed in build logs
- Audit log: Available on Business+ plans — tracks all team member actions
