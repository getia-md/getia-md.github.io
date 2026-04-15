---
brand: Basecamp
tagline: The refreshingly simple project management tool
category: Productivity
website: https://basecamp.com
---

# Information Architecture — Basecamp

## Overview

Basecamp takes an opinionated, anti-complexity stance on project management. Each project is a self-contained "basecamp" with six fixed tools: Message Board, To-dos, Schedule, Docs & Files, Campfire (chat), and Automatic Check-ins. There are no Gantt charts, no custom fields, and no infinite configurations — by design. The Lineup view provides leadership-level project tracking, and Hill Charts offer a unique progress visualization.

## Site Map

```
basecamp.com
├── Home (HQ)
│   ├── Your Assignments
│   ├── Your Bookmarks
│   ├── Your Schedule
│   └── Your Drafts
├── Projects
│   └── [Project]
│       ├── Message Board (long-form announcements)
│       ├── To-dos
│       │   ├── To-do Lists
│       │   │   └── To-do Items (assignee, due date, notes)
│       │   └── Completed
│       ├── Campfire (group chat)
│       ├── Schedule (shared calendar)
│       ├── Docs & Files
│       │   ├── Documents
│       │   └── Files
│       ├── Automatic Check-ins (recurring prompts)
│       └── Card Table (kanban — optional)
│           └── Columns → Cards
├── Teams
│   └── [Team] (same six tools as projects)
├── Lineup (leadership view)
│   ├── Projects on timeline
│   └── Hill Charts
├── Hey! (Notifications)
│   ├── New for You
│   └── Catch Up (read later)
├── Pings (Direct Messages)
├── Activity (global feed)
│   ├── Latest Activity
│   ├── Someone's Activity
│   └── Overdue To-dos
├── Find (Search)
└── Admin
    ├── Account Settings
    ├── People
    ├── Billing
    └── Templates
```

## Navigation Model

- **Top bar:** Home, Lineup, Hey! (notifications), Activity, Find, Pings, My Stuff dropdown
- **Home page:** Project cards in a grid; "Your Assignments" and "Your Schedule" are personal aggregations
- **Inside a project:** Six tool icons at the top (Message Board, To-dos, Campfire, Schedule, Docs & Files, Check-ins)
- **Breadcrumbs:** Always visible, showing Project → Tool → Item hierarchy
- **No sidebar:** Basecamp deliberately avoids persistent sidebars to keep attention on one thing at a time

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Project | name, description, color, people, tools enabled | → Messages, To-dos, Events, Documents, Campfire, Check-ins |
| Message | title, body (rich text), category, creator | → Comments, Project |
| To-do List | title, description | → To-do Items |
| To-do Item | title, assignee, due date, notes, completed | → Comments |
| Campfire | Real-time group chat per project | → Messages (chat), Project |
| Event (Schedule) | title, date/time, duration, recurring | → Comments, Project |
| Document | title, body (rich text) | → Project |
| File | name, type, size | → Project |
| Check-in | recurring question (e.g., "What did you work on today?") | → Responses, Project |
| Card Table | columns, cards | → Project |
| Hill Chart | scopes, positions (uphill/downhill) | → To-do Lists |

## User Flows

### 1. Kick Off a Project
`Home → + New Project → Name, description, people → Choose tools → Post intro on Message Board → Create To-do Lists → Set Schedule milestones`

### 2. Post an Update
`Project → Message Board → + New Message → Choose category (Announcement/FYI/Pitch/Heartbeat) → Write → Notify → Team comments`

### 3. Track Progress with Hill Charts
`Project → To-dos → Hill Chart → Drag scopes uphill (figuring out) → Over the hill → Downhill (execution) → Compare snapshots over time`

### 4. Daily Check-in
`Automatic Check-in fires (e.g., "What did you work on today?") → Respond in-app or via email → Team sees all responses in one thread`

## URL / Route Structure

```
3.basecamp.com/{account_id}/                           # Home
3.basecamp.com/{account_id}/projects/{project_id}      # Project overview
3.basecamp.com/{account_id}/buckets/{id}/messages       # Message Board
3.basecamp.com/{account_id}/buckets/{id}/todolists      # To-dos
3.basecamp.com/{account_id}/buckets/{id}/chats/{id}     # Campfire
3.basecamp.com/{account_id}/buckets/{id}/schedules/{id} # Schedule
3.basecamp.com/{account_id}/buckets/{id}/vaults/{id}    # Docs & Files
3.basecamp.com/{account_id}/reports/todos               # My Assignments
3.basecamp.com/{account_id}/lineup                      # Lineup
```

## Search & Filter

- **Find (global search):** Full-text across messages, to-dos, documents, comments, and campfire chats
- **Scoped search:** Filter by project, person, type (message/to-do/document/event)
- **Activity feed:** Filter by project or person; "Overdue" filter for to-dos
- **Hey! menu:** Catch Up feature lets you defer notifications to read later
- **No custom filters or saved views** — consistent with Basecamp's simplicity philosophy

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Centered content column (max-width), no persistent sidebar |
| Tablet (768–1023px) | Same centered layout, responsive project grid |
| Mobile (iOS/Android app) | Bottom tab nav (Home, Hey!, Activity, Pings, My Stuff), full-featured native app |
| Email integration | Reply to most notifications via email; content posted back to Basecamp |

## Access Control

| Role | Capabilities |
|------|-------------|
| Account Owner | Billing, full admin, manage all people and projects |
| Admin | Manage people, create projects, access all projects |
| User | Access assigned projects, create content within them |
| Client (external) | Access specific projects; can be hidden from certain tools (e.g., Campfire) |
| Guest | Single-project access, limited to invited tools |
| Public link | Share a message/document as read-only public URL |
