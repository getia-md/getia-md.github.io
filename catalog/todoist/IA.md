---
brand: Todoist
tagline: Organize work and life with Todoist
category: Productivity
website: https://todoist.com
---

# Information Architecture — Todoist

## Overview

Todoist is a focused task management app built for personal productivity and small team collaboration. Its IA is intentionally minimal: Projects contain Tasks, and Tasks can have sub-tasks. The magic lies in its natural language input ("Buy milk tomorrow p1 #Shopping"), smart date parsing, and a Karma gamification system. Filters and labels provide cross-project views without adding structural complexity.

## Site Map

```
todoist.com
├── Inbox (default capture)
├── Today
├── Upcoming (7-day + overdue)
├── Filters & Labels
│   ├── Filters (custom queries)
│   └── Labels (tags)
├── Projects
│   └── [Project]
│       ├── List View
│       ├── Board View
│       ├── Sections
│       └── Comments
├── Completed (Activity Log)
├── Karma (Productivity Score)
├── Settings
│   ├── Account
│   ├── General (theme, language, defaults)
│   ├── Notifications
│   ├── Integrations
│   └── Subscription
└── Templates Gallery
```

## Navigation Model

- **Left sidebar:** Inbox, Today, Upcoming, Filters & Labels section, Projects tree (collapsible, drag-to-reorder)
- **Top bar:** Quick Add (+ / Q), Search (⌘K), Productivity (Karma), Notifications, Settings
- **Project view:** Toggle between List and Board; Sections act as swim lanes or column headers
- **Task detail:** Inline expansion or side panel — title, description, sub-tasks, comments, activity

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Inbox | Built-in capture project | → Tasks |
| Project | name, color, icon, view (list/board), favorite | → Sections, Tasks, Sub-projects, Comments |
| Section | name, order | → Tasks |
| Task | title (natural language), description, due date/time, priority (P1–P4), assignee | → Sub-tasks, Labels, Comments, Reminders |
| Label | name, color | → Tasks (many-to-many) |
| Filter | name, query string | Virtual view (no storage) |
| Comment | text, attachments | → Task or Project |
| Karma | daily/weekly goals, score, streaks | → User |

## User Flows

### 1. Quick Capture
`Quick Add (Q) → Type "Call dentist Thursday p2 #Health" → Todoist parses date, priority, label → Add Task`

### 2. Plan the Day
`Today → Review tasks due today + overdue → Reschedule or reprioritize → Work through list → Complete`

### 3. Create a Custom Filter
`Filters & Labels → + Add Filter → Query: "assigned to: me & due before: next week & p1" → Save → Pin to sidebar`

### 4. Team Collaboration
`Project → Share → Invite via email → Assign tasks to members → Comment on tasks → Track completion`

## URL / Route Structure

```
app.todoist.com/app/inbox                  # Inbox
app.todoist.com/app/today                  # Today view
app.todoist.com/app/upcoming               # Upcoming view
app.todoist.com/app/project/{project_id}   # Project
app.todoist.com/app/filter/{filter_id}     # Custom filter
app.todoist.com/app/label/{label_name}     # Label view
app.todoist.com/app/task/{task_id}         # Task detail
app.todoist.com/app/activity               # Completed tasks / log
app.todoist.com/app/settings               # Settings
```

## Search & Filter

- **Global search (⌘K / /):** Full-text across task titles, descriptions, comments, project names
- **Filter queries:** Custom syntax — `due: today`, `priority: 1`, `assigned to: me`, `#ProjectName`, `@LabelName`, operators `&`, `|`, `!`
- **Built-in views:** Today, Upcoming serve as pre-built filters
- **Sort:** By date, priority, name, assignee (within any view)
- **Quick filter bar:** Person, priority, label, due date chips in project view

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Sidebar + main content; task detail as inline expansion or side panel |
| Tablet (768–1023px) | Collapsible sidebar, same layout |
| Mobile app | Bottom nav (Today, Inbox, Browse, Search), swipe to complete/schedule, Quick Add FAB |

## Access Control

| Role | Capabilities |
|------|-------------|
| Project Owner | Full project settings, archive/delete, manage members |
| Project Member | Add/edit/complete tasks, comment, assign |
| Viewer | View tasks only, cannot modify (Business plan) |
| Personal (non-shared) | Full control, single-user projects |
| Free tier | Up to 5 active projects, 5 collaborators per project |
