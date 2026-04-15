---
brand: Zapier
tagline: Automation that moves you forward
category: Productivity
website: https://zapier.com
---

# Information Architecture — Zapier

## Overview

Zapier connects 6,000+ apps through automated workflows called "Zaps." Each Zap follows a trigger→action model: an event in one app automatically triggers actions in one or more other apps. The IA is organized around a dashboard of Zaps, an app directory, and a step-by-step Zap editor. Tables, Interfaces, and Chatbots extend Zapier from a connector into a lightweight app-building platform.

## Site Map

```
zapier.com
├── Dashboard (Home)
│   ├── My Zaps
│   ├── Recently Run
│   └── Usage Stats
├── Zaps
│   ├── All Zaps
│   ├── Folders
│   └── Shared Zaps
├── Zap Editor
│   ├── Trigger Step
│   ├── Action Step(s)
│   ├── Filter / Path (branching)
│   ├── Formatter / Code Step
│   └── Test & Publish
├── Tables (Zapier Tables)
│   ├── Table Views
│   ├── Fields
│   └── Linked Zaps
├── Interfaces (Zapier Interfaces)
│   ├── Pages
│   ├── Forms
│   ├── Kanban
│   └── Link Tables
├── Chatbots
├── Canvas (Visual Workflow Builder)
├── Task History
│   ├── By Zap
│   ├── By Status (success/error/held)
│   └── Replay
├── App Directory
│   ├── Browse by Category
│   ├── Search
│   └── App Profile → Triggers & Actions
├── Settings
│   ├── Account
│   ├── Billing
│   ├── Team Members
│   ├── Connected Accounts
│   └── API Keys
└── Marketing Site
    ├── Apps
    ├── Explore (use case templates)
    ├── Pricing
    └── Resources
```

## Navigation Model

- **Left sidebar:** Home, Zaps, Tables, Interfaces, Chatbots, Canvas, Task History
- **Top bar:** Search, Create (+), Account, Notifications
- **Zap Editor:** Vertical step-by-step flow — each step expands to configure trigger/action/filter
- **App Directory:** Card grid browseable by category; each app page lists available triggers & actions

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Zap | name, status (on/off), folder, last run | → Steps (Trigger, Actions, Filters, Paths) |
| Step | type (trigger/action/filter/path/formatter), app, event | → Connected Account, Field Mapping |
| Connected Account | app name, auth credentials, label | → Steps |
| Task | Zap run instance, status, timestamp, data payload | → Zap |
| Table | name, fields, records | → Zaps (linked), Interfaces |
| Interface | name, pages, components | → Tables, Zaps |
| Folder | name | → Zaps |
| App (Directory) | name, category, triggers, actions, auth type | → Zaps |

## User Flows

### 1. Create a Zap
`+ Create → Choose Trigger App → Select trigger event → Connect account → Configure → + Action → Choose Action App → Select action event → Map fields → Test → Turn On`

### 2. Build a Multi-Step Zap with Branching
`Trigger → + Path → Branch A (filter condition) → Action A → Branch B → Action B → Publish`

### 3. Monitor and Debug
`Task History → Filter by Zap or status → View failed task → Inspect input/output data → Fix field mapping → Replay task`

### 4. Build a Form-to-Workflow App
`Interfaces → + New → Add Form page → Define fields → Link to Table → Create Zap triggered by new Table record → Actions`

## URL / Route Structure

```
zapier.com/app/dashboard                    # Dashboard
zapier.com/app/zaps                         # All Zaps
zapier.com/app/zaps/folder/{id}             # Zap folder
zapier.com/editor/{zap_id}                  # Zap editor
zapier.com/app/history                      # Task history
zapier.com/app/tables/{table_id}            # Table
zapier.com/app/interfaces/{id}              # Interface
zapier.com/app/connections                  # Connected accounts
zapier.com/apps/{app-slug}/integrations     # App directory page
zapier.com/apps/{app1}/integrations/{app2}  # App pair integrations
```

## Search & Filter

- **Global search:** Find Zaps, apps, tables, interfaces by keyword
- **App Directory search:** Search 6,000+ apps, filter by category, sort by popularity
- **Task History filters:** By Zap, date range, status (success/error/held/filtered), search by data content
- **Zap list filters:** By status (on/off), app, folder, last run date
- **Explore (templates):** Search pre-built Zap templates by app combination or use case

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Full sidebar + Zap editor with field mapping panels |
| Tablet (768–1023px) | Collapsible sidebar, Zap editor scrolls vertically |
| Mobile | Dashboard and task history viewable; Zap editing not supported (desktop-only experience) |

## Access Control

| Role | Capabilities |
|------|-------------|
| Account Owner | Billing, all settings, manage members, all Zaps |
| Admin | Manage team members, view all Zaps, manage shared folders |
| Member | Create/edit own Zaps, use shared folders, shared app connections |
| Restricted Member | Use only pre-approved apps and shared Zaps |
| Shared Zap (link) | View-only Zap template for duplication, no editing |
