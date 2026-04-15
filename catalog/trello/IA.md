---
brand: Trello
tagline: Trello helps teams move work forward
category: Productivity
website: https://trello.com
---

# Information Architecture — Trello

## Overview

Trello pioneered the digital Kanban board, and its IA reflects that simplicity: Workspaces contain Boards, Boards contain Lists, and Lists contain Cards. This flat, visual hierarchy makes Trello immediately intuitive. Power-Ups extend functionality, and Butler provides no-code automation — but the core mental model remains a board of cards you drag between columns.

## Site Map

```
trello.com
├── Home
│   ├── Boards (recently viewed)
│   ├── Starred Boards
│   └── Templates
├── Workspaces
│   └── [Workspace]
│       ├── Boards
│       ├── Members
│       ├── Settings
│       └── Views
│           ├── Table View
│           ├── Calendar View
│           └── Timeline View (Premium)
├── Board
│   ├── Lists → Cards
│   ├── Board Menu
│   │   ├── Filters
│   │   ├── Power-Ups
│   │   ├── Butler (Automation)
│   │   ├── Labels
│   │   ├── Archived Items
│   │   └── Settings
│   └── Card Detail
│       ├── Description
│       ├── Checklists
│       ├── Attachments
│       ├── Comments / Activity
│       ├── Due Date
│       ├── Members
│       ├── Labels
│       └── Custom Fields
├── Search
├── Templates Gallery
└── Marketing Site
    ├── Features
    ├── Solutions
    ├── Plans
    └── Resources
```

## Navigation Model

- **Top bar (persistent):** Trello logo (→ Home), Workspaces dropdown, Recent, Starred, Templates, Create, Search, Notifications bell, User menu
- **Home page:** Board grid organized by workspace and starred status
- **Board view:** Horizontal scroll of lists; board menu slides in from the right
- **Card detail:** Modal overlay on top of board — no page navigation required
- **Workspace sidebar:** Boards list, Members, Settings, Views (table/calendar/timeline)

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, type (team/education/etc.), logo | → Boards, Members |
| Board | name, background, visibility, Power-Ups | → Lists, Labels, Custom Fields |
| List | name, position | → Cards |
| Card | title, description, due date, members, labels, position | → Checklists, Comments, Attachments |
| Checklist | title | → Checklist Items (text, complete/incomplete) |
| Label | name, color | → Cards (many-to-many) |
| Power-Up | name, type (integration/utility) | → Board |
| Butler Rule | trigger, action(s) | → Board |

## User Flows

### 1. Create a Board and Add Cards
`+ Create → Board → Name, background, workspace → Add Lists (e.g., To Do, Doing, Done) → + Add Card to each list`

### 2. Move Work Forward (Core Loop)
`Board → Drag card from "To Do" to "Doing" → Open card → Update checklist progress → Drag to "Done"`

### 3. Set Up Butler Automation
`Board Menu → Butler → + Create Rule → When [trigger], do [action(s)] → e.g., "When card moved to Done, check all items and remove members"`

### 4. Use a Template
`Templates Gallery → Browse by category → Use Template → Customize board name and workspace`

## URL / Route Structure

```
trello.com/u/{username}/boards           # User's boards
trello.com/w/{workspace}/home            # Workspace home
trello.com/b/{board_id}/{board_slug}     # Board view
trello.com/c/{card_id}/{card_slug}       # Card detail (also opens as modal on board)
trello.com/templates                     # Template gallery
trello.com/search?q=...                  # Search results
```

## Search & Filter

- **Global search:** Full-text across board names, card titles, descriptions, comments; search operators (`@me`, `#label`, `has:attachments`, `is:open`, `board:name`)
- **Board filter (menu → Filter):** By member, label, due date (overdue/next day/next week), keyword
- **Card filter bar:** Quick filter chips visible on board for active filters
- **Saved searches:** Not native; achieved via bookmarked search URLs

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Horizontal scrolling lists, full card detail modal, board menu sidebar |
| Tablet (768–1023px) | Same layout, touch-optimized drag and drop |
| Mobile app | Vertical stack of lists, swipe between lists, card detail as full screen, bottom tabs (Boards, Search, Notifications, Account) |

## Access Control

| Role | Capabilities |
|------|-------------|
| Workspace Admin | Manage workspace settings, billing, members, all boards |
| Board Admin | Configure board settings, Power-Ups, manage members |
| Board Member | Create/edit/move/archive cards, add comments |
| Board Observer | View board only, cannot edit (Enterprise feature) |
| Guest (multi-board) | Access specific boards within a workspace |
| Public Board | Anyone with link can view (no editing) |
