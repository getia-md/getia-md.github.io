---
brand: Neon
tagline: Serverless Postgres. Branch your database like code.
category: Developer Tools
website: https://neon.tech
---

# Neon — Information Architecture

## Overview

Neon is a serverless Postgres platform that separates storage and compute, enabling features impossible with traditional Postgres: instant branching, autoscaling to zero, point-in-time restore, and bottomless storage. The IA follows a **project-branch-endpoint model** — each project is a Postgres cluster, branches are copy-on-write snapshots of the database, and endpoints are compute instances that serve queries. Like PlanetScale, Neon embraces the Git branching metaphor for databases, but applies it to Postgres. The platform targets developers who want managed Postgres with developer-friendly features (database preview branches for PRs, instant provisioning, scale-to-zero for cost efficiency).

## Site Map

```
console.neon.tech
├── / (Projects list — dashboard)
├── /projects/{project_id}
│   ├── /branches (Branch list)
│   │   └── /{branch_id} (Branch detail — tables, roles, compute)
│   ├── /tables (Schema browser / table viewer)
│   ├── /sql-editor (Web SQL console)
│   ├── /databases (Database list within project)
│   ├── /roles (Postgres roles / users)
│   ├── /monitoring (CPU, memory, connections, storage metrics)
│   ├── /integrations (Vercel, GitHub, Hasura, etc.)
│   ├── /settings
│   │   ├── /general
│   │   ├── /compute (Autoscaling config)
│   │   ├── /storage (Data retention, history)
│   │   └── /delete
│   └── /connection-details (Connection strings)
├── /settings
│   ├── /account
│   ├── /billing
│   ├── /api-keys
│   └── /organizations
├── /docs (Documentation — docs.neon.tech)
└── /auth
```

## Navigation Model

- **Primary navigation**: Left sidebar — Projects (top-level list), then within a project: Dashboard, Branches, Tables, SQL Editor, Databases, Roles, Monitoring, Integrations, Settings
- **Branch selector**: Prominent dropdown at top of project pages — switch between branches to view their schema, data, and compute
- **Connection details**: Accessible from dashboard and sidebar — shows connection string with branch selector
- **Utility navigation**: Top-right — organization switcher, avatar → Account Settings, Billing, API Keys
- **Docs navigation**: Separate docs site (docs.neon.tech) with sidebar table of contents
- **Mobile**: Responsive console; SQL editor works but is optimized for desktop

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Project | Name, region, Postgres version, branches, databases, roles, connection pooler config | User/Org-owned |
| Branch | Name, parent branch, creation point (LSN/timestamp), compute endpoint, databases, schema | Part of project |
| Compute Endpoint | vCPU size, autoscaling range (min/max CU), suspend timeout, status (active/idle) | Part of branch |
| Database | Name (within Postgres), owner role, size, tables | Part of branch |
| Role | Postgres role name, password, permissions | Part of project |
| Table | Name, columns, data (browseable in UI), row count | Part of database |
| Integration | Connected service (Vercel, GitHub), config, status | Part of project |
| Monitoring Metric | CPU utilization, RAM, active connections, storage size, compute hours | Analytics |

## User Flows

### Creating a Project
1. User clicks "New Project" → enters name, selects region (AWS us-east-1, eu-west-1, ap-southeast-1)
2. Selects Postgres version (14, 15, 16)
3. Project created instantly (< 1 second) with default `main` branch
4. Connection string displayed immediately — copy for application use
5. Default database `neondb` and role created automatically

### Database Branching for Development
1. Developer navigates to Branches → "Create Branch"
2. Selects parent branch (`main`) and branching point (current or point-in-time)
3. Branch created instantly (copy-on-write — no data duplication)
4. Branch gets its own compute endpoint and connection string
5. Developer tests schema changes on branch without affecting production
6. When satisfied, applies migration to `main` via application migration tool

### Vercel Integration (Preview Branches)
1. User connects Neon project to Vercel project via Integration
2. For each Vercel preview deployment (PR), Neon creates a database branch automatically
3. Preview deployment connects to its own database branch
4. PR merged → preview branch can be auto-deleted
5. Enables full-stack preview environments with isolated data

### Point-in-Time Restore
1. User navigates to branch → History
2. Selects a timestamp or LSN to restore to
3. Creates a new branch from that point in history
4. New branch has the exact data state at that moment
5. Can be used for debugging, data recovery, or analysis

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Projects dashboard |
| `/projects/{project_id}` | Project overview |
| `/projects/{project_id}/branches` | Branch list |
| `/projects/{project_id}/branches/{branch_id}` | Branch detail |
| `/projects/{project_id}/tables` | Table browser |
| `/projects/{project_id}/sql-editor` | SQL console |
| `/projects/{project_id}/monitoring` | Metrics |
| `/projects/{project_id}/settings/*` | Project settings |
| `/settings/*` | Account settings |

Project IDs are short alphanumeric strings. Branch IDs are also alphanumeric. Clean hierarchical routing.

## Search & Filter

- **Project search**: Filter projects by name on dashboard
- **Branch filtering**: Filter by parent branch, creation date
- **Table browser**: Browse tables with column details; data viewer with row pagination
- **SQL Editor**: Full SQL query capability — the primary data exploration tool
- **Monitoring filters**: Time range selector (1h, 6h, 24h, 7d, 30d) for metrics
- **No cross-project search**: Each project is independent
- **Docs search**: Full-text search on docs.neon.tech

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full sidebar + content area with tables, charts, SQL editor |
| Desktop (1024-1280px) | Collapsible sidebar + full content |
| Tablet (768-1024px) | Sidebar as drawer + simplified layout |
| Mobile (<768px) | Hamburger nav + single-column; SQL editor limited but functional |

- Connection string display includes copy button at all sizes
- Branch selector remains accessible as a dropdown at all breakpoints
- Monitoring charts resize responsively (axis labels may truncate)
- Table data viewer scrolls horizontally for wide tables
- SQL editor on mobile shows results below query input (stacked)

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site, docs (no console) |
| Free | 1 project, 0.5 GiB storage, 1 branch (+ dev branches with 24hr data retention), autosuspend after 5 min |
| Launch ($19/mo) | 10 projects, 10 GiB storage, 100 branches, configurable autosuspend, point-in-time restore (7 days) |
| Scale ($69/mo) | 50 projects, 50 GiB storage, 500 branches, 30-day history, read replicas, IP allow list |
| Enterprise | Custom limits, SSO, audit logs, SLA, dedicated support, 99.99% uptime |
| Organization roles | Admin (full control, billing) → Member (manage projects) → Viewer (read-only) |
| Database roles | Postgres standard roles — owner, read-write, read-only |

- Authentication: Email/password, GitHub OAuth, Google OAuth
- API keys: Bearer tokens for Neon API (manage projects, branches programmatically)
- Connection auth: Postgres password per role; connection pooler (PgBouncer) included
- Branch permissions: Branches inherit project permissions; no per-branch access control
- IP allowlisting: Scale plan and above — restrict database connections to specific IPs
- Data residency: Region selection at project creation; data stays in chosen AWS region
