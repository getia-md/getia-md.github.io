---
brand: Mixpanel
tagline: Powerful, self-serve product analytics
category: Business SaaS
website: https://mixpanel.com
---

# Information Architecture — Mixpanel

## Overview

Mixpanel is an event-based product analytics platform focused on helping teams measure what people do inside their product. The IA is built around three core report types — Insights (trends), Funnels (conversion), and Flows (user paths) — plus Retention and advanced analysis. Unlike page-view analytics, Mixpanel tracks custom events and properties, enabling teams to ask "Who did what, and why?" rather than "How many page views?"

## Site Map

```
mixpanel.com
├── Home (Overview Dashboard)
│   ├── Key Metrics Summary
│   ├── Recent Reports
│   └── Bookmarks
├── Reports
│   ├── Insights (Trends & Segmentation)
│   ├── Funnels (Conversion Analysis)
│   ├── Flows (User Path Analysis)
│   ├── Retention (Cohort Retention)
│   └── Custom Reports
├── Users
│   ├── User Profiles
│   ├── Cohorts (behavioral segments)
│   └── User Look-Up (event stream)
├── Boards (Dashboards)
│   ├── Personal Boards
│   ├── Team Boards
│   └── Board Builder (drag-and-drop layout)
├── Alerts
│   ├── Custom Alerts (threshold-based)
│   └── Anomaly Detection (automatic)
├── Data Management
│   ├── Lexicon (event/property dictionary)
│   ├── Data Views (filtered event subsets)
│   ├── Lookup Tables
│   ├── Custom Properties (computed)
│   └── Data Pipelines (export)
├── Settings
│   ├── Organization
│   ├── Projects
│   ├── Team Members
│   ├── Service Accounts
│   └── Data Governance
└── Marketing Site
    ├── Product
    ├── Solutions
    ├── Pricing
    └── Templates (pre-built reports)
```

## Navigation Model

- **Left sidebar:** Home, Reports (Insights, Funnels, Flows, Retention), Users, Boards, Data Management
- **Report builder:** Select report type → Choose events → Add breakdowns (properties) → Set date range → Visualize (line, bar, table, pie)
- **Boards:** Grid layout of report cards; click card to open full report
- **User Look-Up:** Search user → Profile page with properties, event timeline, cohort memberships
- **Top bar:** Project switcher, global search, bookmarks, alerts, user menu

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Project | name, token, timezone, data retention | → Events, Properties, Reports |
| Event | name, properties, volume, first/last seen | → Users, Reports |
| Property | name, type (event/user/group/lookup), data type | → Events, Users |
| User (Profile) | distinct_id, user properties, event history | → Cohorts, Events |
| Cohort | name, definition (behavioral/demographic), size | → Users, Reports (segment by) |
| Report | type (insight/funnel/flow/retention), query, visualization, board | → Events, Properties, Cohorts |
| Board | name, cards (reports), layout | → Reports |
| Alert | name, metric, threshold/anomaly, notification channel | → Report metric |
| Lexicon Entry | event/property, description, tags, visibility (visible/hidden/dropped) | → Data governance |
| Data View | name, filtered event subset | → Reports |

## User Flows

### 1. Analyze Event Trends
`Reports → Insights → Select event (e.g., "Song Played") → Breakdown by property (e.g., "Genre") → Set to Last 30 Days → Line chart → Compare to previous period → Save to Board`

### 2. Measure Conversion
`Reports → Funnels → Add steps (e.g., "Search" → "View Item" → "Add to Cart" → "Purchase") → View conversion rates → Breakdown by user property (e.g., "Plan Type") → Identify drop-off`

### 3. Explore User Paths
`Reports → Flows → Set starting event → View top paths users take → Click a path branch to drill down → Identify unexpected navigation patterns`

### 4. Set Up an Alert
`Alerts → + New → Select metric (e.g., "Daily Active Users") → Set threshold (e.g., "drops below 1000") → Choose notification (email/Slack) → Save`

## URL / Route Structure

```
mixpanel.com/project/{project_id}/view/home          # Home
mixpanel.com/project/{project_id}/view/insights       # Insights report
mixpanel.com/project/{project_id}/view/funnels        # Funnels report
mixpanel.com/project/{project_id}/view/flows          # Flows report
mixpanel.com/project/{project_id}/view/retention      # Retention report
mixpanel.com/project/{project_id}/view/users          # Users / Cohorts
mixpanel.com/project/{project_id}/view/boards/{id}    # Board
mixpanel.com/project/{project_id}/view/user/{id}      # User profile
mixpanel.com/project/{project_id}/data-management     # Lexicon
```

## Search & Filter

- **Global search:** Find reports, boards, events, properties, cohorts by name
- **Lexicon search:** Search/filter events and properties; manage visibility (show/hide/drop)
- **Report filtering:** Filter by any event/user property with operators (equals, contains, greater than, etc.); AND/OR conditions
- **Cohort builder:** Multi-condition behavioral + demographic filters
- **User search:** Look up by distinct_id or user property
- **Date range:** Relative (last N days) or absolute; comparison to previous period

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1280px+) | Full report builder with sidebar, chart, and breakdown panels |
| Tablet | Board viewing works; report building is cramped but functional |
| Mobile | View boards and reports (read-only); no report creation; dashboard-optimized |

## Access Control

| Role | Capabilities |
|------|-------------|
| Organization Owner | Billing, all projects, member management |
| Organization Admin | Manage members, project settings |
| Project Owner | Full project control, data governance |
| Project Admin | Manage project settings, data views |
| Analyst | Create/edit reports, cohorts, boards |
| Consumer | View reports and boards, cannot create or modify |
| Service Account | API access with scoped permissions |
