---
brand: ClickUp
tagline: One app to replace them all
category: Productivity
website: https://clickup.com
---

# Information Architecture — ClickUp

## Overview

ClickUp is an all-in-one productivity platform that consolidates project management, docs, goals, whiteboards, and chat into a single application. Its IA is defined by a deep hierarchy — Workspace → Space → Folder → List → Task — offering extreme customizability at every level. Each node in the hierarchy can have its own statuses, custom fields, and views, making it both powerful and complex.

## Site Map

```
clickup.com
├── Home (Dashboard)
│   ├── My Work
│   ├── Favorites
│   └── Assigned Comments
├── Spaces
│   └── [Space]
│       ├── Folders
│       │   └── Lists
│       │       ├── List View
│       │       ├── Board View
│       │       ├── Calendar View
│       │       ├── Gantt View
│       │       ├── Table View
│       │       ├── Mind Map
│       │       └── Activity View
│       └── Folderless Lists
├── Everything View
├── Docs
│   ├── Documents
│   └── Wikis
├── Whiteboards
├── Dashboards
├── Goals
├── Inbox (Notifications)
├── Chat
├── Automations
├── Integrations
├── Template Center
└── Settings
    ├── Workspace
    ├── Spaces
    ├── People
    ├── Imports/Exports
    └── Security
```

## Navigation Model

- **Left sidebar:** Home, Inbox, Docs, Dashboards, Whiteboards, Goals, plus the Spaces tree (collapsible)
- **Top bar:** Global search (⌘K), quick-create (+), breadcrumb trail, notifications bell
- **View bar:** Horizontal tabs for switching between views within any list/folder/space
- **Task detail:** Full-page or modal view with subtasks, comments, attachments, activity, relationships
- **Everything View:** Flat view aggregating all tasks across all spaces with filters

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, members, plan | → Spaces |
| Space | name, color, avatar, features enabled | → Folders, Lists, Statuses |
| Folder | name, statuses override | → Lists |
| List | name, statuses, custom fields | → Tasks |
| Task | title, assignee(s), status, priority, due date, time estimate, tags | → Subtasks, Checklists, Comments, Attachments, Dependencies |
| Doc | title, content (blocks), sharing | → Workspace, Pages |
| Goal | name, target (number/currency/true-false/task), owner | → Key Results, Tasks |
| Dashboard | name, widgets | → Data sources (lists, spaces) |
| Whiteboard | name, objects, collaborators | → Workspace |

## User Flows

### 1. Set Up a New Space
`Sidebar → + Create Space → Name, color, icon → Enable features (Statuses, Time Tracking, Custom Fields, etc.) → Create default lists`

### 2. Create a Task with Dependencies
`List → + New Task → Title, assignee, priority → Open detail → Add dependency (waiting on / blocking) → Set due dates`

### 3. Build a Dashboard
`Dashboards → + New → Add widgets (Sprint Velocity, Workload, Time Tracking, Custom Charts) → Select data sources → Arrange`

### 4. Set and Track Goals
`Goals → + New Goal → Define target type → Add key results → Link tasks → Monitor completion percentage`

## URL / Route Structure

```
app.clickup.com/{workspace_id}/home                    # Home dashboard
app.clickup.com/{workspace_id}/v/l/{list_id}           # List view
app.clickup.com/{workspace_id}/v/b/{list_id}           # Board view
app.clickup.com/{workspace_id}/v/dc/{list_id}          # Calendar view
app.clickup.com/{workspace_id}/v/gh/{list_id}          # Gantt view
app.clickup.com/t/{task_id}                            # Task detail
app.clickup.com/{workspace_id}/docs/{doc_id}           # Document
app.clickup.com/{workspace_id}/dashboards/{id}         # Dashboard
app.clickup.com/{workspace_id}/goals                   # Goals
```

## Search & Filter

- **Global search (⌘K):** Full-text across tasks, docs, comments, people; recent searches, saved searches
- **List/Folder filters:** Multi-field filter builder (status, assignee, priority, tags, custom fields, dates) with AND/OR/NOT logic
- **Group by & Sort:** Group by any field; multi-level sort
- **Me Mode:** Quick toggle to filter any view to only the current user's tasks
- **Saved filters:** Persist as reusable filter sets applicable across views

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1280px+) | Full sidebar + view + task detail panel (three columns possible) |
| Tablet (768–1279px) | Collapsible sidebar, single-view focus, task detail as overlay |
| Mobile app | Bottom nav (Home, Notifications, Add, Search, Menu), card-based task views |

## Access Control

| Role | Capabilities |
|------|-------------|
| Owner | Full workspace control, billing, transfer ownership |
| Admin | User management, workspace settings, all spaces |
| Member | Access granted spaces, create tasks, manage own items |
| Guest (internal) | Limited to specific lists/folders, no space-level access |
| Guest (external) | Specific item/list access only, no sidebar navigation |
| Custom Role | Configurable permissions per feature (Enterprise plan) |
