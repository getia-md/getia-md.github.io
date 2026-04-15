---
brand: Tableau
tagline: See and understand your data
category: Business SaaS
website: https://tableau.com
---

# Information Architecture — Tableau

## Overview

Tableau is the industry-leading data visualization platform, built on the principle of visual analytics — dragging fields onto shelves (rows, columns, marks) to build interactive charts. The IA spans a desktop authoring tool (Tableau Desktop), a publishing and sharing platform (Tableau Server/Cloud), and a free public gallery (Tableau Public). The core hierarchy is Workbook → Worksheet → Dashboard → Story, with data sources connecting to virtually any database.

## Site Map

```
Tableau (Desktop + Server/Cloud)
├── Tableau Desktop (Authoring)
│   ├── Start Page
│   │   ├── Recent Workbooks
│   │   ├── Saved Data Sources
│   │   └── Connect (new data source)
│   ├── Data Source Page
│   │   ├── Connections (files, databases, cloud)
│   │   ├── Tables (drag to canvas)
│   │   ├── Joins / Unions / Relationships
│   │   ├── Data Preview
│   │   └── Filters (data source level)
│   ├── Worksheet
│   │   ├── Data Pane (dimensions, measures)
│   │   ├── Shelves (Columns, Rows, Filters, Pages, Marks)
│   │   ├── Marks Card (color, size, label, detail, tooltip, shape)
│   │   ├── Show Me (chart type suggestions)
│   │   ├── Analytics Pane (trend lines, reference lines, forecasts)
│   │   └── Viz Canvas
│   ├── Dashboard
│   │   ├── Sheets (drag worksheets)
│   │   ├── Objects (text, image, web page, blank, navigation)
│   │   ├── Filters / Parameters
│   │   ├── Actions (filter, highlight, URL, set, parameter)
│   │   └── Device Layouts (desktop, tablet, phone)
│   └── Story
│       ├── Story Points (sequence of dashboards/sheets)
│       └── Captions / Annotations
├── Tableau Server / Cloud
│   ├── Home
│   │   ├── Favorites
│   │   ├── Recents
│   │   └── Recommendations (AI-powered)
│   ├── Explore
│   │   ├── Projects (folders)
│   │   ├── Workbooks
│   │   ├── Views (individual sheets/dashboards)
│   │   └── Data Sources (published)
│   ├── Web Editing (browser-based authoring)
│   ├── Ask Data (natural language query)
│   ├── Data Management
│   │   ├── Prep Conductor (scheduled data prep)
│   │   ├── External Assets (databases, tables)
│   │   ├── Data Quality Warnings
│   │   └── Lineage
│   ├── Collections (curated content groups)
│   ├── Subscriptions & Alerts
│   ├── Admin
│   │   ├── Users & Groups
│   │   ├── Sites
│   │   ├── Schedules (extract refresh)
│   │   ├── Tasks
│   │   ├── Settings
│   │   └── Status (server health)
│   └── Personal Space (private sandbox)
├── Tableau Public
│   ├── Discover (featured vizzes)
│   ├── Author Profiles
│   ├── Viz of the Day
│   └── Public Gallery
└── Tableau Prep (Data Preparation)
    ├── Connections
    ├── Flow Steps (clean, shape, combine)
    └── Output (to data source / file)
```

## Navigation Model

- **Tableau Desktop:** Tab-based — each worksheet/dashboard/story is a tab at the bottom; Data pane + Analytics pane on the left
- **Tableau Server/Cloud:** Top nav — Home, Explore, Favorites, Recents, Collections; left sidebar shows project hierarchy
- **Shelf-based interaction (Desktop):** Drag fields from Data pane → Rows/Columns/Marks shelves; Show Me panel suggests chart types
- **Dashboard:** Drag worksheets and objects onto a tiled/floating layout canvas
- **Drill-down/Actions:** Click a mark → filter other sheets, highlight, or navigate via configured actions

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Data Source | type (live/extract), connection, tables, joins/relationships | → Workbooks, Worksheets |
| Workbook | name, project, owner, published/local | → Worksheets, Dashboards, Stories, Data Sources |
| Worksheet | name, dimensions, measures, marks, filters, calculations | → Data Source, Dashboard |
| Dashboard | name, sheets, objects, actions, device layouts, filters | → Worksheets, Workbook |
| Story | name, story points (captions + content) | → Worksheets, Dashboards |
| Project (Server) | name, permissions, nested projects | → Workbooks, Data Sources |
| Calculation | name, formula (Tableau calculation language) | → Worksheet |
| Parameter | name, data type, allowable values | → Calculations, Filters |
| Set | name, condition or manual members | → Dimensions, Actions |
| Extract | schedule (refresh frequency), incremental/full | → Data Source |
| Collection (Cloud) | name, curated items | → Workbooks, Views |
| Subscription | view, schedule, recipient | → Dashboard/View |

## User Flows

### 1. Build a Visualization (Desktop)
`Connect to data → Drag dimension to Columns → Drag measure to Rows → Show Me suggests chart → Refine with Marks card (color, size) → Add filters → Format → Publish to Server`

### 2. Create an Interactive Dashboard
`New Dashboard → Drag sheets onto canvas → Add filter controls → Configure Actions (click sheet A filters sheet B) → Add device layouts (tablet, phone) → Test interactivity → Publish`

### 3. Tell a Data Story
`New Story → Add story point → Select dashboard/sheet → Add caption → Navigate audience through data narrative → Publish`

### 4. Explore on Server/Cloud
`Home → Explore → Browse projects → Open workbook → Interact with dashboard (filter, drill) → Subscribe for email updates → Download data if permitted`

## URL / Route Structure

```
# Tableau Cloud / Server
{site}.online.tableau.com/#/home                          # Home
{site}.online.tableau.com/#/explore                       # Explore
{site}.online.tableau.com/#/projects/{id}                 # Project
{site}.online.tableau.com/#/workbooks/{id}                # Workbook
{site}.online.tableau.com/#/views/{workbook}/{view}       # View (dashboard/sheet)
{site}.online.tableau.com/#/datasources                   # Data Sources
{site}.online.tableau.com/#/collections/{id}              # Collection
{site}.online.tableau.com/#/settings                      # Admin settings

# Tableau Public
public.tableau.com/app/profile/{username}                 # Author profile
public.tableau.com/views/{workbook}/{view}                # Public viz
public.tableau.com/app/discover                           # Discover gallery
```

## Search & Filter

- **Server/Cloud search:** Full-text across workbook names, view names, data source names, tags; filter by content type, project, owner, date
- **Ask Data (NLP):** Type natural language questions (e.g., "Show me sales by region last quarter") → Tableau generates a visualization
- **Desktop field search:** Search dimensions and measures in the Data pane
- **Filter shelf:** Interactive filters — range sliders, dropdowns, checkboxes, relative date, wildcard match
- **Recommendation engine (Server):** AI-powered content suggestions based on user behavior and popularity

## Responsive Behavior

| Context | Behavior |
|---------|----------|
| Tableau Desktop | Fixed-size authoring canvas; device layouts preview desktop/tablet/phone |
| Dashboard device layouts | Separate layout for desktop (default), tablet, phone — author controls element placement per breakpoint |
| Tableau Server/Cloud (browser) | Responsive viewer that adapts dashboard rendering; toolbars adjust |
| Tableau Mobile app | Dedicated mobile experience for viewing and interacting with dashboards; favorites, recents, search |
| Tableau Public | Responsive embed; viz resizes within container |

## Access Control

| Role | Capabilities |
|------|-------------|
| Server/Site Admin | Full platform control — users, sites, settings, all content |
| Creator | Author in Desktop/Web, publish, manage data sources, full interaction |
| Explorer | Web editing, interact with published content, save to personal space |
| Viewer | View and interact with dashboards; filter, drill-down; subscribe; no editing |
| Project Leader | Manage content and permissions within specific projects |
| Project-level permissions | View, Explore, Publish, Admin per project |
| Row-level security | User filters restrict data visibility per user/group at the data source level |
| Tableau Public | All content is public; no access control |
