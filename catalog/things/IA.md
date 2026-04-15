---
brand: Things 3
tagline: The award-winning personal task manager
category: Productivity
website: https://culturedcode.com/things
---

# Information Architecture — Things 3

## Overview

Things 3 is a GTD (Getting Things Done)-inspired task manager for Apple platforms. Its IA faithfully implements GTD's structure: an Inbox for capture, Today/Upcoming/Anytime/Someday for temporal scoping, and Areas → Projects → Tasks for the organizational hierarchy. The design is intentionally opinionated — no custom views, no team features, just a refined personal productivity system.

## Site Map

```
Things 3
├── Inbox (Quick Capture)
├── Today
│   ├── Today items
│   └── This Evening (sub-section)
├── Upcoming (date-based timeline)
├── Anytime (no specific date)
├── Someday (deferred / low priority)
├── Logbook (completed items)
├── Trash
├── Areas
│   └── [Area]
│       └── Projects
│           └── [Project]
│               ├── Headings (sections)
│               └── Tasks
│                   ├── Checklist Items
│                   ├── Notes (rich text)
│                   ├── Tags
│                   ├── Deadline
│                   ├── When (start date: Today/Evening/Someday/specific date)
│                   └── Reminders
├── Quick Find (⌘F)
└── Preferences
    ├── General
    ├── Quick Entry (global shortcut)
    ├── Calendar Integration
    ├── Siri & Shortcuts
    └── Things Cloud (sync)
```

## Navigation Model

- **Left sidebar:** Fixed list — Inbox, Today, Upcoming, Anytime, Someday, Logbook, Trash; followed by Areas and Projects tree
- **Main content:** Task list for selected view; projects show headings as section dividers
- **Task detail:** Inline expansion below task title — notes, checklist, tags, dates
- **Quick Entry (⌃Space):** Global floating window to capture a task from any app
- **Quick Find (⌘F):** Instant search across all tasks, projects, and areas

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Inbox | Default capture location | → Tasks |
| Area | title, order | → Projects, Tasks (area-level) |
| Project | title, area, notes, deadline, when (start), tags | → Headings, Tasks |
| Heading | title, order | → Tasks (within project) |
| Task (To-Do) | title, notes, when (today/evening/someday/date), deadline, tags, checklist | → Checklist Items |
| Checklist Item | title, completed | → Task |
| Tag | name | → Tasks, Projects (many-to-many) |
| Logbook | Completed tasks with completion date | → Tasks, Projects |
| Repeating Task | repeat schedule (daily/weekly/monthly/custom) | → Task template |

## User Flows

### 1. GTD Capture
`⌃Space (Quick Entry) → Type task → Optionally set When/Deadline/Tags/Project → Save → Lands in Inbox or specified project`

### 2. Daily Review (Today)
`Today → Review morning tasks → Drag tasks to re-order → Complete tasks (checkmark) → Evening: switch to "This Evening" section → Clear Today`

### 3. Weekly Review
`Inbox → Process each item: assign project, set When date, or move to Someday → Review Someday list → Promote items to Anytime or schedule`

### 4. Project Planning
`+ New Project → Set area → Add Headings (e.g., "Research", "Draft", "Review") → Add tasks under each → Set project deadline → Review in Upcoming`

## URL / Route Structure

Things 3 is a native Apple app using URL schemes:

```
things:///show?id=inbox              # Show Inbox
things:///show?id=today              # Show Today
things:///show?id=upcoming           # Show Upcoming
things:///show?id=anytime            # Show Anytime
things:///show?id=someday            # Show Someday
things:///show?id=logbook            # Show Logbook
things:///add?title={t}&when={d}     # Quick add task
things:///add-project?title={t}      # Create project
things:///search?query={q}           # Search
things:///json?data=[...]            # Bulk import (JSON)
```

## Search & Filter

- **Quick Find (⌘F):** Instant full-text search across task titles, notes, project names, area names, tags
- **Tag filtering:** Click a tag to filter current view to matching items; multi-tag AND filtering
- **Built-in views as filters:** Today, Upcoming, Anytime, Someday are effectively temporal filters
- **Type-to-filter:** In any list, start typing to narrow visible items
- **No custom filter/query builder** — intentionally limited to keep UX simple

## Responsive Behavior

| Context | Behavior |
|---------|----------|
| macOS | Two-pane: sidebar + task list; task detail expands inline; multiple windows supported |
| iPad | Sidebar + list; landscape shows both; portrait collapses sidebar; drag & drop between lists |
| iPhone | Single-pane push navigation; swipe gestures for complete/schedule; Magic Plus button for context-aware add |
| Apple Watch | View Today list, complete tasks, add via dictation |
| No web/Android | Apple ecosystem only; sync via Things Cloud |

## Access Control

| Level | Description |
|-------|-------------|
| Single-user | Things is personal — no collaboration or sharing features |
| Things Cloud | Proprietary sync across Mac, iPhone, iPad, Apple Watch; encrypted |
| No export | No built-in bulk export (data accessible via AppleScript on Mac) |
| Siri / Shortcuts | Add tasks via voice or iOS Shortcuts automation |
| Mail to Things | Forward emails to a personal Things address to create tasks |
