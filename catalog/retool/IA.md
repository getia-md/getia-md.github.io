---
brand: Retool
tagline: Build internal tools, remarkably fast.
category: Developer Tools
website: https://retool.com
---

# Retool — Information Architecture

## Overview

Retool is a low-code platform for building internal tools — admin panels, dashboards, CRUD apps, and workflow automation. The IA is organized around a **drag-and-drop builder with query-first data architecture** — the centerpiece is a visual editor where developers drag UI components (tables, forms, charts, buttons) onto a canvas and connect them to data queries (SQL, REST APIs, GraphQL, Firebase, Stripe, etc.). The key insight shaping the IA is that internal tools follow predictable patterns: fetch data → display in table → allow editing → execute action. Retool abstracts away frontend boilerplate while giving developers full control over the data layer. The platform supports web apps, mobile apps (Retool Mobile), workflows (backend automation), and embedded apps.

## Site Map

```
{org}.retool.com
├── / (App list — home page)
├── /apps (Application list)
│   ├── /new (Create new app)
│   └── /{app_id}/edit (App builder — drag-and-drop editor)
│       ├── Canvas (component layout)
│       ├── Query editor (bottom panel)
│       ├── Component inspector (right panel)
│       └── State inspector (left panel — app data)
├── /apps/{app_id} (App in presentation mode — end-user view)
├── /workflows (Workflow list)
│   ├── /new
│   └── /{workflow_id}/edit (Visual workflow builder)
├── /resources (Data source connections)
│   └── /{resource_id} (Resource config)
├── /mobile (Retool Mobile apps)
│   └── /{mobile_app_id}/edit
├── /folders (App organization)
│   └── /{folder_id}
├── /modules (Reusable component modules)
│   └── /{module_id}/edit
├── /settings
│   ├── /general
│   ├── /members
│   ├── /groups (Permission groups)
│   ├── /sso
│   ├── /audit-log
│   ├── /branding (White-label — Enterprise)
│   └── /billing
├── /source-control (Git sync settings)
└── /auth
```

## Navigation Model

- **Primary navigation**: Left sidebar — Apps (list), Workflows, Resources, Settings
- **Builder navigation**: Three-panel layout — Left (component tree + state inspector), Center (canvas + query editor), Right (component properties inspector)
- **Query editor**: Bottom panel in builder — tabbed queries connected to different data sources
- **Component panel**: Drag components from a categorized panel — Tables, Forms, Charts, Inputs, Display, Layout, Navigation
- **App folder navigation**: Folder tree for organizing apps; starred apps for quick access
- **Page navigation**: Within an app — multiple pages connected via navigation components
- **Utility navigation**: Top bar — app name, version history, share, preview, deploy
- **Mobile**: End-user apps are responsive; the builder requires desktop

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| App | Name, pages, components, queries, event handlers, JS/CSS, version history | Org-owned |
| Component | Type (Table, Form, TextInput, Button, Chart, etc.), properties, event handlers, data bindings | Part of app |
| Query | Type (SQL, REST API, GraphQL, JS transformer), data source, configuration, caching | Part of app |
| Resource | Data source connection — type, host, credentials, SSL config | Org-level |
| Workflow | Trigger (webhook, schedule, app button), steps (query, transform, condition, loop), execution history | Org-owned |
| Module | Reusable component group with defined inputs/outputs, shareable across apps | Org-level |
| Folder | Named container for organizing apps | Org-level |
| Version | App snapshot at a point in time, deployable, rollbackable | Part of app |

## User Flows

### Building a CRUD App
1. Developer creates new app → blank canvas opens
2. Creates Resource: connects to PostgreSQL database (host, credentials)
3. Adds a SQL query: `SELECT * FROM users WHERE active = true`
4. Drags Table component onto canvas → binds `data` property to query results
5. Enables inline editing on table → adds "Save Changes" button
6. Button triggers an update query: `UPDATE users SET name = {{table1.changesetObject.name}} WHERE id = {{table1.selectedRow.id}}`
7. Adds Form component for creating new users → connected to INSERT query
8. Deploys app → shares URL with team

### Connecting to Data Sources
1. Admin navigates to Resources → "Create New"
2. Selects resource type from 60+ integrations (PostgreSQL, MySQL, MongoDB, REST API, Stripe, Snowflake, etc.)
3. Enters connection details (host, port, credentials, SSL)
4. Tests connection → saves
5. Resource available to all apps in the organization
6. Permissions: restrict which groups can use which resources

### Workflow Automation
1. Developer creates Workflow → selects trigger (schedule: every hour, or webhook)
2. Adds steps: Query (fetch data) → JS Transform (process) → Condition (if/else) → Query (write result)
3. Each step can use different data sources
4. Tests workflow with sample data
5. Deploys → workflow runs automatically on trigger
6. Monitors execution history for failures

### Version Control & Deployment
1. Developer edits app in edit mode → changes are auto-saved as draft
2. Clicks "Deploy" → creates a new version (snapshot)
3. End-users see the deployed version (not the draft)
4. Can roll back to any previous version
5. Git sync: optionally sync app JSON to GitHub for version control

## URL / Route Structure

| Pattern | Description |
|---|---|
| `{org}.retool.com/` | App list (home) |
| `{org}.retool.com/apps/{uuid}/edit` | App builder |
| `{org}.retool.com/apps/{uuid}` | App in presentation mode |
| `{org}.retool.com/workflows/{uuid}/edit` | Workflow builder |
| `{org}.retool.com/resources/{uuid}` | Resource config |
| `{org}.retool.com/mobile/{uuid}/edit` | Mobile app builder |
| `{org}.retool.com/modules/{uuid}/edit` | Module builder |
| `{org}.retool.com/folders/{uuid}` | Folder contents |
| `{org}.retool.com/settings/*` | Organization settings |

Org-scoped subdomain. UUIDs for apps, workflows, and resources. Builder vs. presentation mode distinguished by `/edit` suffix.

## Search & Filter

- **App search**: Search apps by name on home page
- **Component search**: Search available components in builder component panel
- **Resource search**: Filter resources by type (PostgreSQL, REST API, etc.) or name
- **Query results**: Table components support client-side search and column filtering
- **Audit log search**: Filter by user, action, resource, date range
- **No marketplace**: Unlike some low-code platforms, no public app/template marketplace
- **Workflow search**: Search workflows by name

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Builder (Desktop only, >1280px) | Three-panel layout — component tree, canvas, inspector. Full query editor below |
| End-user app (Desktop, >1024px) | App layout as designed — components in arranged positions |
| End-user app (Tablet, 768-1024px) | Components can be configured to reflow or hide on smaller screens |
| End-user app (Mobile, <768px) | Limited — web apps are desktop-first; Retool Mobile is a separate product |

- The builder itself is desktop-only — requires ~1280px minimum for comfortable use
- End-user apps can be made responsive using Retool's layout containers and responsive breakpoints
- Table component has built-in horizontal scroll for many columns
- Retool Mobile is a separate builder optimized for mobile app UIs
- Components can be conditionally shown/hidden based on viewport size

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | No access (all apps require authentication) |
| End User | Use apps (presentation mode only); no builder access |
| Editor | Build and edit apps, create queries, manage modules |
| Admin | Editor + manage members, resources, settings, billing |
| Custom Groups | Fine-grained permissions per app, resource, and workflow |
| Viewer | View apps but cannot interact with write operations (configurable per app) |

- Authentication: Email/password, Google OAuth, SSO/SAML (Business+), LDAP, OpenID Connect
- App-level permissions: Each app can restrict access to specific groups/users
- Resource permissions: Restrict which groups can use which data sources
- Query-level audit: All queries logged with user, timestamp, parameters (Enterprise)
- Row-level security: Queries can filter data based on `{{ current_user }}` attributes
- Environment variables: Secret values stored as Retool-managed environment variables
- Self-hosted option: Run Retool on your own infrastructure for full data control
- SOC 2 Type II, HIPAA compliant (Enterprise)
