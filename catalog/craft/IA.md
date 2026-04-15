---
brand: Craft
tagline: Built for beautiful documents
category: Productivity
website: https://craft.do
---

# Information Architecture — Craft

## Overview

Craft is a document editor that prioritizes visual beauty and structure. Documents are built from blocks (text, toggles, cards, code, images) that can be nested, linked, and styled. The standout feature is the ability to share any document as a polished website with one click. With spaces for team collaboration and an AI assistant, Craft positions itself between notes apps and presentation tools.

## Site Map

```
craft.do
├── Home
│   ├── Daily Notes
│   ├── Recent Documents
│   ├── Favorites
│   └── Quick Note (widget)
├── Spaces
│   └── [Space]
│       ├── Folders
│       │   └── Documents
│       └── Shared Documents
├── Document
│   ├── Blocks
│   │   ├── Text (headings, body, lists)
│   │   ├── Page / Sub-page (linked document)
│   │   ├── Card (visual link block)
│   │   ├── Toggle (collapsible)
│   │   ├── Code Block
│   │   ├── Image / File
│   │   ├── Divider
│   │   ├── Table
│   │   └── Embed (web, video)
│   ├── Backlinks
│   ├── AI Assistant
│   ├── Comments
│   ├── Version History
│   └── Share / Publish as Website
├── All Documents (search index)
├── Trash
├── Settings
│   ├── Account
│   ├── Spaces
│   ├── Appearance (themes)
│   └── Subscription
└── Templates
```

## Navigation Model

- **Left sidebar:** Space selector, folder/document tree, Daily Notes, Favorites, Trash
- **Document view:** Full-width canvas; blocks are inline-editable; sub-pages appear as cards or inline
- **Block-level actions:** Slash command (/) for inserting blocks; drag handle for reordering; @ for mentions and links
- **Back-linking:** Documents link to each other via `@` mentions or card blocks; backlinks panel shows reverse references
- **AI Assistant:** Inline AI available in any document for summarizing, continuing, rewriting

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Space | name, icon, type (personal/team), members | → Folders, Documents |
| Folder | name, icon | → Sub-folders, Documents |
| Document | title, blocks, created date, cover image, icon | → Sub-documents, Backlinks, Comments |
| Block | type, content, styling, nesting level | → Document |
| Sub-page | linked document appearing as a block | → Parent Document, Child Document |
| Card | visual preview of a linked document | → Target Document |
| Daily Note | auto-created per date | → Space |
| Comment | text, author, block reference | → Document, Block |
| Published Page | URL, password, SEO settings | → Document |

## User Flows

### 1. Create a Structured Document
`+ New Document → Type title → / (slash) → Choose block types → Nest content with Tab → Add cards linking to sub-pages → Style with covers and icons`

### 2. Daily Notes Workflow
`Open Daily Notes → Today's note auto-created → Capture thoughts, meeting notes, links → Link to project docs with @ → Review past daily notes`

### 3. Publish as Website
`Document → Share → Publish to Web → Copy public URL → Optionally set password, custom subdomain, SEO title → Share link`

### 4. Team Collaboration
`Create Team Space → Invite members → Create shared folders → Co-edit documents in real-time → Add comments on specific blocks`

## URL / Route Structure

```
craft.do/                                      # Home
craft.do/s/{space_id}                          # Space
craft.do/d/{document_id}                       # Document (authenticated)
craft.do/d/{document_id}/{block_id}            # Jump to specific block
{custom-subdomain}.craft.me/{slug}             # Published page
craft.do/templates                             # Template gallery
```

## Search & Filter

- **Global search (⌘K):** Full-text across all documents, titles, and block content within a space
- **Backlinks panel:** See all documents referencing the current document
- **Recent documents:** Sorted by last opened/modified
- **Favorites:** Manually pinned documents for quick access
- **Folder browsing:** Hierarchical navigation as alternative to search
- **No advanced filter builder** — search is keyword-based

## Responsive Behavior

| Context | Behavior |
|---------|----------|
| macOS | Full sidebar + editor; native app with system integrations (Spotlight, Shortcuts) |
| iPad | Sidebar + editor in landscape; editor only in portrait; Apple Pencil for sketching |
| iPhone | Single-pane; document list → document; Quick Note widget for capture |
| Web (craft.do) | Full editor in browser, slightly reduced feature set vs native |
| Published pages | Fully responsive; optimized for reading on any screen size |

## Access Control

| Role | Capabilities |
|------|-------------|
| Space Owner | Full control: settings, members, billing, all documents |
| Space Editor | Create/edit documents, manage folders, comment |
| Space Viewer | Read documents, cannot edit |
| Document Sharer | Per-document link sharing with view/edit/comment permissions |
| Published Visitor | View published page; no sign-in required; optional password |
| Personal Space | Private to account; not shared unless explicitly published |
