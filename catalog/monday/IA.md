---
brand: Monday.com
tagline: A Work OS that lets you shape workflows your way
category: Productivity
website: https://monday.com
---

# Information Architecture — Monday.com

## Overview

Monday.com is a "Work OS" — a flexible platform where teams build custom workflows using colorful, spreadsheet-like boards. The IA is built around workspaces → folders → boards → groups → items, with each board acting as a configurable database. Heavy emphasis on visual customization (colors, column types) and automation recipes differentiate it from traditional project management tools.

## Site Map

```
monday.com
├── My Work
│   ├── Assigned to Me
│   └── Mentioned
├── Workspaces
│   └── [Workspace]
│       ├── Folders
│       │   └── Boards
│       │       ├── Main Table (default)
│       │       ├── Kanban View
│       │       ├── Timeline View
│       │       ├── Calendar View
│       │       ├── Chart View
│       │       ├── Files Gallery
│       │       └── Dashboard
│       └── Docs
├── Inbox (Notifications)
├── Dashboards
├── Automations Center
├── Integrations Center
├── Apps Marketplace
├── Admin
│   ├── Users
│   ├── Billing
│   ├── Security
│   ├── Customization
│   └── API
└── Marketing Site
    ├── Products (Work Mgmt, CRM, Dev, Service)
    ├── Solutions
    ├── Pricing
    └── Resources
```

## Navigation Model

- **Left sidebar:** Workspace selector (dropdown), favorites, recent boards, workspace tree (folders → boards)
- **Top bar:** Search, Inbox (bell icon), My Work, "+" button for new board/doc/dashboard
- **Board-level header:** View switcher tabs, filter, sort, group by, person filter, automations, integrations
- **Item detail:** Opens as a slide-out panel with updates (comments), activity log, files

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, icon, color, type (open/closed) | → Folders, Boards, Members |
| Folder | name | → Sub-folders, Boards |
| Board | name, type (main/shareable/private), columns | → Groups, Items, Views, Automations |
| Group | name, color, collapsed state | → Items |
| Item | column values (status, person, date, number, text, etc.) | → Sub-items, Updates, Files |
| Column | type, title, settings | Defines board schema |
| Dashboard | name, widgets | → Boards (data sources) |
| Automation | trigger, conditions, actions | → Boards |
| Doc | title, content blocks | → Workspace |

## User Flows

### 1. Create a Board from Template
`+ New → Board → Choose template (or blank) → Name board → Set workspace → Customize columns`

### 2. Set Up an Automation
`Board → Automations → + Add Automation → Select recipe (e.g., "When status changes, notify someone") → Configure → Activate`

### 3. Build a Cross-Board Dashboard
`+ New → Dashboard → Add Widget → Select board(s) + column(s) → Choose chart type → Arrange layout`

### 4. Track Personal Work
`My Work → View items assigned to me across all boards → Filter by date/status → Click item to open detail`

## URL / Route Structure

```
{slug}.monday.com/boards/{board_id}                  # Board main table
{slug}.monday.com/boards/{board_id}/views/{view_id}  # Specific view
{slug}.monday.com/boards/{board_id}/pulses/{item_id} # Item detail
{slug}.monday.com/dashboards/{id}                    # Dashboard
{slug}.monday.com/docs/{id}                          # Document
{slug}.monday.com/workspaces/{id}                    # Workspace landing
{slug}.monday.com/inbox                              # Notifications
```

## Search & Filter

- **Global search:** Searches across boards, items, updates, and docs; supports filtering by board, person, date
- **Board-level filters:** Column-based filtering with AND/OR logic; saveable as filter presets
- **Quick filters (person pills):** One-click filter to a specific person's items
- **Sort:** Multi-column sort within any board view
- **Group by:** Re-organize items by any column value dynamically

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1200px+) | Full sidebar + board with horizontal scroll for many columns |
| Tablet (768–1199px) | Collapsible sidebar, board adapts with fewer visible columns |
| Mobile app | Bottom nav (Home, My Work, Inbox, Search, Menu), simplified board views, swipe actions |

## Access Control

| Role | Capabilities |
|------|-------------|
| Admin | Full account control, billing, security, user management |
| Member | Create boards, full edit in assigned workspaces |
| Viewer | View boards, cannot edit items or columns |
| Guest | Access only to boards explicitly shared, limited features |
| Board Owner | Manage board permissions, columns, automations |
| Board Subscriber | Receive notifications without editing |
