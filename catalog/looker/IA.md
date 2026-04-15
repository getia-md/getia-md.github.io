---
brand: Looker
tagline: A modern platform for data
category: Business SaaS
website: https://looker.com
---

# Information Architecture — Looker (Google Cloud)

## Overview

Looker is a business intelligence platform (now part of Google Cloud) built on a unique modeling layer called LookML. Unlike traditional BI tools where users write SQL directly, Looker uses LookML to define a semantic data model — dimensions, measures, relationships — which then powers a self-service Explore interface. The IA is organized around Explores (ad-hoc analysis), Looks (saved queries), and Dashboards (collections of visualizations).

## Site Map

```
looker.com
├── Home
│   ├── Recently Viewed
│   ├── Favorites
│   ├── Boards (curated collections)
│   └── Folders
├── Explore
│   ├── [Explore Name] (per-model)
│   │   ├── Dimensions (fields)
│   │   ├── Measures (aggregations)
│   │   ├── Filters
│   │   ├── Pivots
│   │   ├── Visualization (chart type)
│   │   ├── Data Table
│   │   └── SQL Tab (generated query)
│   └── Browse Explores by Model
├── Looks (Saved Queries)
│   ├── Look Detail (visualization + data)
│   └── Look Scheduler (email/Slack delivery)
├── Dashboards
│   ├── Dashboard Builder
│   │   ├── Tiles (Look tiles, Text, Markdown, Images)
│   │   ├── Filters (dashboard-level)
│   │   ├── Cross-filtering
│   │   └── Drill-down
│   ├── LookML Dashboards (code-defined)
│   └── User-defined Dashboards (UI-built)
├── Boards (Curated Collections)
│   ├── Looks, Dashboards, Explores organized thematically
│   └── Sections
├── Folders
│   ├── Personal Folder
│   ├── Shared Folders
│   └── Users Folder (per-user personal space)
├── Admin (for admins)
│   ├── Users & Groups
│   ├── Roles
│   ├── Content Access
│   ├── Connections (database)
│   ├── Projects (LookML repos)
│   ├── Platform Settings
│   ├── Queries (performance)
│   └── Scheduler History
├── Develop (LookML IDE)
│   ├── Projects
│   │   ├── Models
│   │   ├── Views
│   │   ├── Explores
│   │   ├── Dashboards (LookML)
│   │   └── Derived Tables
│   ├── Git Integration
│   ├── Data Tests
│   └── Content Validator
└── Embedded Analytics
    ├── Embed SDK
    ├── SSO Embed
    └── API
```

## Navigation Model

- **Left sidebar:** Home, Explore, Develop, Admin (role-dependent), Folders, Boards
- **Explore interface:** Field picker (left) → Visualization + Data (center) → Filter bar (top)
- **Dashboard:** Tile grid with filter bar; each tile links to its underlying Explore/Look
- **LookML IDE (Develop):** File tree (left) → Code editor (center) → SQL Runner / Model diagram
- **Drill-down:** Click any data point → Drill menu shows related dimensions/Explores

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Connection | name, dialect (BigQuery/Snowflake/Postgres/etc.), credentials | → Models |
| Project | name, git repo, models, views | → LookML files |
| Model | name, connection, explores | → Views, Explores |
| View | name, SQL table/derived, dimensions, measures | → Model, Explores |
| Explore | name, base view, joins, always_filter | → Model, Looks, Dashboards |
| Dimension | name, type, SQL definition, label, group | → View |
| Measure | name, type (count/sum/average/etc.), SQL, drill_fields | → View |
| Look | name, explore query, visualization type, filters | → Explore, Folder, Dashboard tile |
| Dashboard | name, tiles, filters, layout | → Looks, Queries, Folder |
| Board | name, sections | → Looks, Dashboards, Explores |
| Folder | name, parent folder | → Looks, Dashboards, child Folders |
| Schedule | destination (email/S3/Slack/webhook), frequency, format | → Look, Dashboard |

## User Flows

### 1. Explore Data (Self-Service)
`Explore → Select Explore (e.g., "Orders") → Pick dimensions (date, product category) → Pick measures (total revenue, order count) → Add filter (date range) → Run → Visualize → Save as Look`

### 2. Build a Dashboard
`+ New → Dashboard → Add tiles from existing Looks or new queries → Arrange layout → Add dashboard filters (linked to tile filters) → Save → Share folder`

### 3. Develop LookML Model
`Develop → Open Project → Edit View file (add dimension/measure) → Validate LookML → Test in Explore → Commit to Git → Deploy to production`

### 4. Schedule a Report
`Look or Dashboard → Schedule → Set recipients (email/Slack/S3) → Set frequency (daily/weekly/cron) → Set format (PDF/CSV/PNG) → Set filters → Save`

## URL / Route Structure

```
{instance}.looker.com/                                    # Home
{instance}.looker.com/explore/{model}/{explore}           # Explore
{instance}.looker.com/looks/{look_id}                     # Look
{instance}.looker.com/dashboards/{dashboard_id}           # Dashboard
{instance}.looker.com/folders/{folder_id}                 # Folder
{instance}.looker.com/boards/{board_id}                   # Board
{instance}.looker.com/projects/{project}/files            # LookML IDE
{instance}.looker.com/admin                               # Admin panel
{instance}.looker.com/sql/{connection}                    # SQL Runner
```

## Search & Filter

- **Global search:** Find Looks, Dashboards, Explores, Boards by name or description
- **Explore field search:** Search dimensions and measures by name within the field picker
- **Explore filters:** Multi-field filter bar with operators (is, is not, contains, starts with, in range, etc.)
- **Dashboard filters:** Dashboard-level filters that propagate to all tiles; linked or independent
- **Content Validator:** Identify broken content (Looks/Dashboards referencing deleted LookML fields)
- **SQL Runner:** Direct SQL query execution against connected databases

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1280px+) | Full Explore interface, LookML IDE, dashboard builder |
| Tablet | Dashboard viewing works; Explore and IDE require desktop |
| Mobile | Dashboard and Look viewing via responsive layout; no editing; scheduled reports via email |
| Embedded | Looker content embeds responsively in iframes; responsive SDK controls available |

## Access Control

| Role | Capabilities |
|------|-------------|
| Admin | Full platform access — users, connections, LookML projects, all content |
| Developer | LookML IDE access, create/edit models, deploy to production |
| Explorer | Create Explores, save Looks, build Dashboards |
| Viewer | View shared Looks and Dashboards; cannot create Explores |
| Embed User (SSO) | Scoped access to embedded content; row-level security via user attributes |
| Model Set | Restrict which models/Explores a role can access |
| Permission Set | Granular feature permissions (explore, schedule, download, create, admin) |
| Folder Access | Content-level read/write per folder for users/groups |
