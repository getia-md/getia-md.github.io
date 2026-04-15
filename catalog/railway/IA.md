---
brand: Railway
tagline: Bring your code, we'll handle the rest.
category: Developer Tools
website: https://railway.app
---

# Railway — Information Architecture

## Overview

Railway is a cloud deployment platform that emphasizes simplicity and developer experience. The IA is built around a unique **project canvas model** — each project is a visual canvas where services (apps, databases, cron jobs) appear as connected cards that can be arranged spatially. This canvas metaphor differentiates Railway from traditional dashboard-based platforms (Heroku, Render): you can visually see your infrastructure topology. Each service card on the canvas links to logs, deployments, variables, and settings. Railway supports deploying from GitHub, Docker, or templates, and includes managed databases (Postgres, Redis, MySQL, MongoDB) as first-class canvas objects.

## Site Map

```
railway.app
├── / (Home — marketing)
├── /pricing
├── /templates (Community deployment templates)
│   └── /{template_slug}
├── /changelog
├── /docs (Documentation)
├── /dashboard (Projects list)
├── /project/{project_id} (Project canvas)
│   ├── /service/{service_id} (Service detail)
│   │   ├── /deployments
│   │   │   └── /{deployment_id} (Deployment logs)
│   │   ├── /variables (Environment variables)
│   │   ├── /metrics (CPU, memory, network)
│   │   ├── /settings (Build, deploy, networking config)
│   │   └── /volumes
│   └── /settings (Project settings)
│       ├── /general
│       ├── /members
│       ├── /environments
│       └── /danger
├── /account
│   ├── /billing
│   ├── /tokens
│   ├── /teams
│   └── /referrals
└── /auth
```

## Navigation Model

- **Primary navigation**: Top bar — Dashboard (projects list), Templates, Docs, changelog; team selector
- **Canvas navigation**: The project canvas IS the navigation — click service cards to drill into detail; drag to arrange; zoom/pan the canvas
- **Service navigation**: Within a service — tabs for Deployments, Variables, Metrics, Settings, Volumes
- **Environment selector**: Top bar within a project — switch between environments (production, staging, development)
- **Utility navigation**: Top-right — avatar → Account, Billing, Teams, Tokens, Sign out
- **Template navigation**: Browse templates by category with search
- **Mobile**: Canvas is viewable but interaction-limited; service details work well on mobile

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Project | Name, canvas (visual layout of services), environments, members, settings | User/Team-owned |
| Service | Name, source (GitHub repo, Docker image, or database), deployments, variables, volumes, networking | Part of project |
| Deployment | Build logs, deploy logs, status, commit hash, timestamp, resource usage | Part of service |
| Environment | Named deployment context (production, staging, etc.) with independent variables and service instances | Part of project |
| Variable | Key-value pair, scoped to service + environment, supports references (${{service.VAR}}) | Part of service |
| Volume | Persistent storage attached to a service, mount path, size | Part of service |
| Template | Pre-configured project blueprint with services, variables, and deployment instructions | Community/Railway |
| Database Service | Managed Postgres/Redis/MySQL/MongoDB as a canvas service with connection string | Part of project |

## User Flows

### Deploying from GitHub
1. User clicks "New Project" → "Deploy from GitHub Repo"
2. Connects GitHub → selects repository
3. Railway auto-detects language/framework → configures build (Nixpacks)
4. Service appears as a card on the project canvas
5. Deployment starts automatically → build + deploy logs stream in real-time
6. Public URL generated (or custom domain configurable)
7. Subsequent pushes to the configured branch trigger automatic deploys

### Adding a Database
1. On the project canvas → right-click or "New" → "Database"
2. Selects database type (Postgres, Redis, MySQL, MongoDB)
3. Database service appears as a card on the canvas
4. Connection string auto-populated as variable → reference from app service using `${{Postgres.DATABASE_URL}}`
5. Database is accessible immediately — no configuration needed

### Multi-Environment Workflow
1. User creates environments (production, staging, development) in Project Settings
2. Each environment has independent service deployments and variables
3. Environment selector in top bar switches the canvas view
4. Deploy to staging first → test → promote to production
5. Variables can differ per environment (different API keys, database URLs)

### Template Deployment
1. User browses template gallery (e.g., "Next.js + Postgres + Redis")
2. Clicks "Deploy" → configures variables (API keys, secrets)
3. Railway provisions all services defined in the template
4. Canvas shows the complete topology with connected services
5. User customizes by connecting their own GitHub repo

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Marketing home |
| `/dashboard` | Projects list |
| `/project/{uuid}` | Project canvas |
| `/project/{uuid}/service/{uuid}` | Service detail |
| `/project/{uuid}/service/{uuid}/deployments/{uuid}` | Deployment logs |
| `/project/{uuid}/service/{uuid}/variables` | Variables |
| `/project/{uuid}/service/{uuid}/metrics` | Metrics |
| `/project/{uuid}/settings` | Project settings |
| `/templates` | Template gallery |
| `/templates/{slug}` | Template detail |
| `/account/*` | Account settings |
| `/docs/*` | Documentation |

UUIDs for projects, services, and deployments. Templates use slugs.

## Search & Filter

- **Project search**: Search projects by name on dashboard
- **Template search**: Full-text search + category filters (Databases, Frameworks, Tools, etc.)
- **Log search**: Search/filter deployment logs by keyword (within a specific deployment)
- **Variable search**: Filter variables by key name within a service
- **No cross-project search**: Projects are independent workspaces
- **Docs search**: Full-text documentation search

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full project canvas with service cards, zoom/pan, drag-and-drop |
| Desktop (1024-1280px) | Canvas with smaller cards, fewer visible at once |
| Tablet (768-1024px) | Canvas viewable but cramped; service detail as slide-over panel |
| Mobile (<768px) | Canvas replaced with service list view; service detail full-screen |

- The canvas is the most distinctive UI element — uses WebGL/Canvas rendering for smooth pan/zoom
- On mobile, the canvas experience degrades to a list of services (practical but loses the visual topology)
- Deployment logs are monospace with automatic scroll and search highlighting
- Metrics charts resize responsively
- Template cards reflow from grid to single-column

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site, docs, template gallery (view only) |
| Free (Hobby) | $5 free credit/mo, limited resources, 1 member per project |
| Pro ($5/seat/mo + usage) | Unlimited projects, team members, higher resource limits, usage-based billing |
| Team | Pro features + shared billing, team management, role-based access |
| Enterprise | SSO, audit logs, SLA, priority support, custom networking |
| Project roles | Admin (full control) → Member (deploy, manage services) → Viewer (read-only) |

- Authentication: Email/password, GitHub OAuth
- Usage-based billing: CPU, memory, network, and storage billed per usage (Pro plan)
- Environment isolation: Each environment has separate deployments and variables
- Variable visibility: Secrets masked in UI; only accessible to service runtime
- Public networking: Services can have public URLs or be private (service-to-service only)
- Token-based CI: API tokens for deploying from CI/CD pipelines
