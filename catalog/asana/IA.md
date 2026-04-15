---
brand: Asana
tagline: Manage your team's work, projects, & tasks online
category: Productivity
website: https://asana.com
---

# Information Architecture — Asana

## Overview

Asana is a work management platform that helps teams orchestrate work from daily tasks to strategic initiatives. The IA centers on a workspace→team→project→task hierarchy, giving users multiple lenses (List, Board, Timeline, Calendar) to view the same underlying data. The "My Tasks" hub personalizes the experience by surfacing individually-relevant work across all projects.

## Site Map

```
asana.com
├── Home (Dashboard)
│   ├── My Tasks
│   ├── Inbox (Notifications)
│   └── Reporting
├── Projects
│   ├── List View
│   ├── Board View
│   ├── Timeline (Gantt)
│   ├── Calendar View
│   └── Overview / Brief
├── Portfolios
│   ├── Portfolio Dashboard
│   └── Status Updates
├── Goals
│   ├── Company Goals
│   ├── Team Goals
│   └── My Goals
├── Teams
│   ├── Team Projects
│   └── Team Conversations
├── Search
├── Admin Console
│   ├── Members
│   ├── Billing
│   ├── Security
│   └── Apps & Integrations
└── Marketing Site
    ├── Product
    ├── Solutions
    ├── Resources
    ├── Pricing
    └── Enterprise
```

## Navigation Model

- **Left sidebar (persistent):** Home, My Tasks, Inbox, Reporting, Portfolios, Goals, followed by a Teams/Projects tree
- **Top bar:** Global search (⌘K), Create button (+), workspace switcher
- **Project-level tabs:** Overview, List, Board, Timeline, Calendar, Files, Messages
- **Contextual right pane:** Task detail slides in from the right without leaving the project view

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, members, billing plan | → Teams, Projects |
| Team | name, description, privacy | → Projects, Members |
| Project | name, owner, color, view, status | → Sections, Tasks, Milestones |
| Section | name, order | → Tasks |
| Task | title, assignee, due date, description, priority, tags | → Subtasks, Comments, Attachments |
| Goal | title, owner, time period, metric | → Sub-goals, Projects |
| Portfolio | name, owner | → Projects |
| Custom Field | name, type (text/number/enum) | → Projects, Tasks |

## User Flows

### 1. Create and Assign a Task
`Project → + Add Task → Fill title, assignee, due date → Set section → Save`

### 2. Track Project Progress
`Portfolios → Select Portfolio → View status indicators → Drill into project → Check Timeline / Milestones`

### 3. Review Personal Work
`My Tasks → Sort by due date/project → Mark complete / Snooze to later`

### 4. Set and Track Goals
`Goals → + New Goal → Set time period, metric type → Link sub-goals or projects → Update progress`

## URL / Route Structure

```
app.asana.com/0/home                     # Dashboard
app.asana.com/0/inbox                    # Notifications
app.asana.com/0/{project_id}/list        # Project list view
app.asana.com/0/{project_id}/board       # Project board view
app.asana.com/0/{project_id}/timeline    # Project timeline
app.asana.com/0/{task_id}               # Task detail (overlay)
app.asana.com/0/portfolios/{id}          # Portfolio
app.asana.com/0/goals                    # Goals
app.asana.com/0/search?q=...             # Search results
```

## Search & Filter

- **Global search (⌘K):** Full-text across tasks, projects, conversations, and messages
- **Advanced search:** Filter by assignee, project, due date, completion status, custom fields, created by, tags
- **Saved searches:** Persist as "Reports" accessible from Reporting section
- **Project filters:** Sort/filter within any project view by assignee, due date, section, custom fields

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Full sidebar + project view + task detail pane (three-column) |
| Tablet (768–1023px) | Collapsible sidebar, task detail replaces project view |
| Mobile app (iOS/Android) | Bottom tab navigation (Home, My Tasks, Inbox, Search), simplified views |

## Access Control

| Role | Capabilities |
|------|-------------|
| Organization Admin | Full workspace settings, billing, member management, security controls |
| Team Admin | Manage team membership, team-level settings |
| Project Owner | Configure project, manage members, set permissions |
| Project Editor | Create/edit tasks, change views |
| Project Commenter | Comment only, cannot modify tasks |
| Guest | Limited to explicitly shared projects, no team browsing |
