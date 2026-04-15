---
brand: Grafana
tagline: The open observability platform.
category: Developer Tools
website: https://grafana.com
---

# Grafana — Information Architecture

## Overview

Grafana is the leading open-source observability platform, combining dashboards, alerting, and data source integration into a unified visualization layer. The IA is built around a **dashboard-centric visualization model** — dashboards are the primary objects, each containing panels (charts, tables, stat displays) that query data sources (Prometheus, Loki, Elasticsearch, InfluxDB, CloudWatch, and 100+ others). The platform has evolved from a pure visualization tool into the LGTM stack: Loki (logs), Grafana (visualization), Tempo (traces), Mimir (metrics). Grafana operates in two modes: self-hosted (open source, downloaded and run on your infrastructure) and Grafana Cloud (fully managed SaaS). The IA reflects deep extensibility — plugins for data sources, panels, and apps.

## Site Map

```
{instance}.grafana.net (Grafana Cloud) or self-hosted
├── / (Home dashboard)
├── /dashboards (Dashboard list)
│   ├── /folder/{uid} (Dashboard folder)
│   └── /d/{uid}/{slug} (Individual dashboard)
│       └── ?viewPanel={id} (Panel detail/edit)
├── /explore (Ad-hoc data exploration)
├── /alerting
│   ├── /list (Alert rules)
│   ├── /notifications (Contact points)
│   ├── /routes (Notification policies)
│   ├── /silences (Alert silences)
│   └── /groups (Alert groups)
├── /connections
│   ├── /datasources (Data source configuration)
│   │   └── /{datasource_uid}
│   └── /plugins (Plugin catalog)
├── /admin
│   ├── /users
│   ├── /orgs
│   ├── /teams
│   ├── /service-accounts
│   └── /settings (Server config)
├── /profile (User preferences)
├── /playlists (Dashboard playlists)
├── /library-panels (Reusable panels)
├── /annotations (Annotation list)
└── /api/* (HTTP API)

grafana.com (marketing + cloud portal)
├── / (Home)
├── /products (Grafana, Loki, Tempo, Mimir, k6, OnCall, etc.)
├── /pricing
├── /docs (Documentation)
├── /tutorials
├── /grafana/dashboards (Community dashboard gallery)
└── /plugins (Plugin directory)
```

## Navigation Model

- **Primary navigation**: Left sidebar (icon bar) — Home, Dashboards, Explore, Alerting, Connections, Administration
- **Dashboard navigation**: Folder tree in dashboard list; dashboard toolbar with time range picker, variables, auto-refresh
- **Panel navigation**: Click panel title → View, Edit, Inspect, Share; full-screen panel view
- **Data source navigation**: Within Connections — list of configured data sources, each with its own settings page
- **Explore navigation**: Split view (compare two queries side-by-side), query history, log/metric/trace mode toggle
- **Variable dropdowns**: Dashboard variables in top bar — dynamic dropdowns that filter all panels
- **Utility navigation**: Top-right — time range picker (critical), user avatar, help, toggle sidebar
- **Mobile**: Responsive dashboards; panels stack vertically

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Dashboard | Title, UID, panels, variables, annotations, links, time range, folder, permissions | User/Team/Org-owned |
| Panel | Title, visualization type (time series, gauge, table, stat, heatmap, etc.), queries, transform, thresholds | Part of dashboard |
| Data Source | Type (Prometheus, Loki, etc.), URL, auth config, default queries | Org-level |
| Alert Rule | Query condition, evaluation interval, labels, annotations, notification contact point | Org-level |
| Folder | Name, permissions, contains dashboards | Org-level |
| Plugin | Type (data source, panel, app), name, version, author | Community/Grafana Labs |
| Annotation | Timestamp, text, tags, dashboard, panel — event markers on charts | User/API-created |
| Library Panel | Reusable panel definition shared across dashboards | Org-level |
| Playlist | Ordered list of dashboards for auto-rotation display (NOC/TV mode) | User-owned |

## User Flows

### Building a Dashboard
1. User creates new dashboard (or duplicates existing)
2. Clicks "Add Panel" → selects visualization type (time series, bar chart, gauge, etc.)
3. Configures query: selects data source → writes PromQL, LogQL, SQL, etc.
4. Adjusts visualization options: axes, legends, colors, thresholds
5. Adds template variables (dropdowns for filtering by host, service, region)
6. Arranges panels by drag-and-drop on the grid layout
7. Saves to a folder with permissions

### Explore (Ad-Hoc Investigation)
1. User opens Explore → selects data source
2. Writes query (e.g., PromQL for metrics, LogQL for logs)
3. Results visualize immediately — toggle between graph, table, and raw
4. Split view: add a second query pane for comparison
5. Convert useful queries into dashboard panels via "Add to Dashboard" button

### Setting Up Alerting
1. User navigates to Alerting → "Create Alert Rule"
2. Defines condition: data source query + threshold (e.g., `avg(cpu_usage) > 80%`)
3. Sets evaluation interval and pending period
4. Configures labels and annotations (for routing and descriptions)
5. Links to Contact Point (email, Slack, PagerDuty, OpsGenie, etc.)
6. Defines Notification Policy: routing rules based on labels
7. Alert fires → notification sent → shows in Alert List with state (Firing, Pending, Normal)

### Incident Response (TV Dashboard)
1. Team creates a dashboard with key SLI panels (latency, error rate, throughput)
2. Sets up Playlist with critical dashboards
3. Displays on NOC/war room TV in kiosk mode (auto-rotating)
4. Alert panel on dashboard shows active alerts
5. Click-through from alert to related dashboard for investigation

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Home dashboard |
| `/dashboards` | Dashboard list |
| `/dashboards/folder/{uid}` | Folder contents |
| `/d/{uid}/{slug}` | Dashboard view |
| `/d/{uid}/{slug}?editPanel={id}` | Panel editor |
| `/explore` | Data exploration |
| `/alerting/list` | Alert rules |
| `/alerting/notifications` | Contact points |
| `/connections/datasources` | Data sources |
| `/connections/datasources/{uid}` | Data source config |
| `/plugins/{plugin_id}` | Plugin detail |
| `/admin/users` | User management |
| `/library-panels` | Library panels |

Dashboard UIDs are short alphanumeric strings. URL slug is the dashboard title (slugified). Panel IDs are numeric. Query strings used extensively for panel selection, time range, and variable values.

## Search & Filter

- **Dashboard search**: Cmd+K opens search — search dashboards by title, tags, folder; recently viewed
- **Explore query history**: Browse and re-run previous queries
- **Alert filtering**: Filter by state (Firing, Pending, Normal), label matchers, folder
- **Data source search**: Search configured data sources by name or type
- **Plugin catalog search**: Search available plugins by name, type (data source, panel, app)
- **Community dashboard search**: Search grafana.com for shared dashboards by name, data source, tags
- **Dashboard tags**: Tag-based categorization for dashboards — filter by tag in dashboard list
- **Panel-level filtering**: Template variables act as live filters across all panels in a dashboard

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full sidebar + dashboard grid layout with multiple panels per row |
| Desktop (1024-1280px) | Collapsed sidebar (icon-only) + dashboard grid |
| Tablet (768-1024px) | Panels reflow to fewer columns, sidebar as overlay |
| Mobile (<768px) | Sidebar hidden, panels stack to single column, time picker in compact mode |

- Dashboards use a 24-column grid — panels resize and stack responsively
- Time series charts are the most responsive element — resize smoothly
- Tables may require horizontal scroll on narrow screens
- Panel headers (title, dropdown) remain accessible at all sizes
- Kiosk mode (TV display) hides all chrome — panels only
- Explore split-view collapses to single pane on mobile

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Can be enabled for public dashboards (configurable) |
| Viewer | View dashboards, explore data, view alerts |
| Editor | Viewer + create/edit dashboards, create alert rules, manage playlists |
| Admin | Editor + manage users, data sources, plugins, org settings |
| Server Admin (self-hosted) | Full server administration — all orgs |
| Grafana Cloud | Free (3 users, 10k metrics), Pro ($8/user/mo), Advanced, Enterprise |

- Authentication: Built-in (email/password), OAuth (Google, GitHub, GitLab, Azure AD, Okta), LDAP, SAML
- Folder permissions: Dashboards inherit folder permissions; granular role assignment per folder
- Data source permissions: Restrict which teams/users can query specific data sources (Enterprise)
- API keys: Service accounts with token-based auth for automation
- Team-based access: Create teams → assign folder/dashboard permissions to teams
- Dashboard provisioning: Dashboards defined as JSON/YAML in code, auto-deployed (GitOps)
- RBAC (Enterprise): Fine-grained role-based access control with custom roles and permissions
