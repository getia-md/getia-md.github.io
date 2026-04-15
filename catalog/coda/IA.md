---
brand: Coda
tagline: A doc as powerful as an app
category: Productivity
website: https://coda.io
---

# Information Architecture — Coda

## Overview

Coda blends documents, spreadsheets, and applications into a single surface. A Coda doc is a collection of pages, each containing text, tables, buttons, formulas, and interactive controls. The key innovation is treating tables as first-class databases with formula-powered columns and "Packs" (third-party integrations) — turning every doc into a custom app without code.

## Site Map

```
coda.io
├── Home (Doc Gallery)
│   ├── Recent Docs
│   ├── Starred
│   ├── Created by Me
│   └── Shared with Me
├── Workspace
│   ├── Folders → Docs
│   └── Team Docs
├── Doc
│   ├── Pages (nested, sidebar tree)
│   │   ├── Canvas (rich text, headings, callouts)
│   │   ├── Tables (inline or full-page)
│   │   │   ├── Views (Grid, Detail, Form, Chart, Calendar, Kanban, Timeline)
│   │   │   └── Columns (text, number, select, formula, lookup, button, etc.)
│   │   ├── Controls (sliders, buttons, select lists)
│   │   └── Embeds
│   ├── Formulas (cross-table, cross-page)
│   ├── Automations (time-based or event-based rules)
│   ├── Packs (integrations: Slack, Gmail, GitHub, etc.)
│   └── Publishing (share as website)
├── Templates Gallery
├── Pack Hub
│   ├── Featured Packs
│   ├── By Category
│   └── Build a Pack (SDK)
├── Settings
│   ├── Account
│   ├── Workspace
│   ├── Billing
│   └── API
└── Marketing Site
    ├── Product
    ├── Solutions
    ├── Gallery
    └── Pricing
```

## Navigation Model

- **Left sidebar (home):** Recent, Starred, Workspace folders, Create new doc
- **Doc sidebar:** Page tree with drag-to-reorder, nesting, and collapse; page icons and emojis
- **In-doc:** Scroll through canvas content; tables inline or linked cross-page; formula bar when editing columns
- **Top bar (in doc):** Doc title, Share, Publish, Settings, version history
- **Cross-table references:** Formulas reference tables by name across pages — no rigid hierarchy

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, members, plan | → Folders, Docs |
| Folder | name | → Docs |
| Doc | title, icon, cover, published URL | → Pages, Tables, Automations, Packs |
| Page | title, content (blocks), nesting level | → Sub-pages, Tables, Controls |
| Table | name, columns, rows, views | → Formulas, Automations |
| Column | name, type, formula | → Table |
| Row | column values | → Table |
| View | type (grid/detail/form/chart/kanban/calendar/timeline), filters, sort | → Table |
| Pack | name, actions, formulas, sync tables | → Doc |
| Automation | trigger (time/row change), action (formula/pack action) | → Tables, Packs |
| Control | type (button/slider/select/text input), action | → Page, Formulas |

## User Flows

### 1. Build a Doc-App
`New Doc → Add Page → Create Table (columns: Task, Owner, Status, Due Date) → Add views (Kanban by Status, Calendar by Due Date) → Add formula columns → Add buttons for actions → Publish`

### 2. Use Packs for Integration
`Doc → Settings → Packs → Search for Slack → Install → In table, add column type: "Slack: Send Message" → Configure → Button triggers Slack message`

### 3. Create an Automation
`Doc → Automations → + New → Trigger: "Daily at 9am" or "When row matches filter" → Action: "Modify rows" or "Send notification" → Activate`

### 4. Publish as Website
`Doc → Publish → Set published pages → Choose layout (doc/landing page) → Custom domain (optional) → Publish`

## URL / Route Structure

```
coda.io/docs                                # Home / doc gallery
coda.io/d/{doc_id}/{doc_slug}               # Doc landing (first page)
coda.io/d/{doc_id}/{doc_slug}/_su{page_id}  # Specific page
coda.io/d/{doc_id}/_tbl{table_id}           # Table view
coda.io/form/{doc_id}/{form_id}             # Published form
coda.io/packs                               # Pack Hub
coda.io/templates                           # Templates gallery
coda.io/gallery                             # Community gallery
```

## Search & Filter

- **Home search:** Search docs by title across workspace
- **In-doc search (⌘F):** Full-text search across all pages and table cell content
- **Table filters:** Multi-condition filter builder per view; filters persist per view
- **Formula-powered filtering:** Dynamic filters using formulas referencing controls (e.g., slider value)
- **Pack Hub search:** Search packs by name, category, app

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Full page sidebar + canvas + table views; formula editing |
| Tablet (768–1023px) | Collapsible sidebar, responsive tables with horizontal scroll |
| Mobile app | Read-friendly doc navigation, simplified table views, form input supported |

## Access Control

| Role | Capabilities |
|------|-------------|
| Doc Owner | Full control: edit, share, publish, delete, manage permissions |
| Doc Editor | Edit content, tables, formulas, but not sharing settings |
| Doc Commenter | Add comments, cannot modify content |
| Doc Viewer | Read only |
| Published (public) | Anyone can view/interact with published pages; no sign-in needed |
| Workspace Admin | Manage members, billing, workspace-level settings |
