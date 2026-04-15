---
brand: Bear
tagline: Write beautifully on iPhone, iPad, and Mac
category: Productivity
website: https://bear.app
---

# Information Architecture — Bear

## Overview

Bear is a Markdown-based note-taking app exclusively for Apple platforms (macOS, iOS, iPadOS). Its IA is radically simple: there are no notebooks or folders — organization is entirely tag-based, with nested tags (e.g., `#work/projects/alpha`) creating a virtual hierarchy. The focus is on beautiful typography, a distraction-free writing experience, and fast search.

## Site Map

```
bear.app
├── Sidebar
│   ├── Notes (all)
│   ├── Untagged
│   ├── Todo (notes with checkboxes)
│   ├── Today
│   ├── Archive
│   ├── Trash
│   └── Tags Tree
│       ├── #tag
│       │   └── #tag/subtag
│       │       └── #tag/subtag/child
│       └── ...
├── Note List (middle pane)
│   ├── Note previews
│   ├── Sort (date modified, date created, title)
│   └── Pin to top
├── Editor (right pane)
│   ├── Markdown content
│   ├── Rich previews (images, code blocks, sketches)
│   ├── Inline tags (#)
│   ├── Backlinks / Wikilinks ([[note title]])
│   ├── Table of Contents
│   ├── Focus Mode (typewriter scrolling)
│   └── Export (PDF, HTML, DOCX, MD, JPG, etc.)
├── Preferences
│   ├── General
│   ├── Editor (font, theme, Markdown compatibility)
│   ├── Privacy (encryption, app lock)
│   └── Bear Pro (sync, export, themes)
└── No web app / No Android
```

## Navigation Model

- **Three-pane layout (Mac):** Sidebar (tags/system collections) → Note List → Editor
- **iOS:** Tab-like navigation — Sidebar → Note List → Note (push navigation)
- **Tag-driven navigation:** Clicking a tag in the sidebar filters the note list; clicking a nested tag shows children
- **Wikilinks:** `[[note title]]` creates bidirectional links between notes for non-hierarchical navigation
- **Quick open (⌘P):** Jump to any note by title search

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Note | title (first line), body (Markdown), created date, modified date, pinned | → Tags (inline), Backlinks |
| Tag | name, nesting (via `/`), auto-generated from note content | → Notes (many-to-many) |
| Wikilink | `[[target note title]]` | → Notes (bidirectional) |
| Todo Item | checkbox within note body | → Note |
| Attachment | images, files, sketches (Apple Pencil) | → Note (inline) |
| Archive | archived notes (hidden from main view) | → Notes |
| Trash | deleted notes (30-day retention) | → Notes |

## User Flows

### 1. Capture a Note
`⌘N (or + button) → Start typing → Add #tags inline → Auto-saved → Tag tree updates in sidebar`

### 2. Organize with Nested Tags
`In note, type #work/projects/alpha → Sidebar shows work → projects → alpha hierarchy → Click any level to filter`

### 3. Link Notes Together
`In note, type [[Meeting Notes 2024]] → Creates clickable link → Target note shows backlink → Navigate between related notes`

### 4. Focus Writing Session
`Open note → View → Focus Mode → Typewriter scrolling enabled → Hide sidebar (⌘1) → Hide note list (⌘2) → Distraction-free writing`

## URL / Route Structure

Bear is a native app and does not use web URLs. Internal linking uses:

```
bear://x-callback-url/open-note?title={title}    # Open note by title
bear://x-callback-url/open-note?id={id}           # Open note by ID
bear://x-callback-url/create?title={t}&text={t}   # Create note
bear://x-callback-url/search?term={query}         # Search
bear://x-callback-url/open-tag?name={tag}          # Open tag
```

## Search & Filter

- **Global search (⌘F in sidebar):** Full-text search across all note titles and body content; instant results
- **In-note search (⌘F in editor):** Find within current note with highlight
- **Special search tokens:** `@today`, `@yesterday`, `@images`, `@files`, `@todo`, `@done`, `@code`
- **Tag filtering:** Select tag in sidebar to filter note list; nested tags include children
- **System collections:** Pre-built filters — Notes, Untagged, Todo, Today, Archive, Trash

## Responsive Behavior

| Context | Behavior |
|---------|----------|
| macOS | Three-pane resizable layout; hide sidebar/note list independently; multiple windows |
| iPad | Adaptive layout — sidebar + list + editor in landscape; stack in portrait; Split View supported |
| iPhone | Single-pane push navigation: Tags → Note List → Editor |
| No web app | No browser access; sync via iCloud across Apple devices only |

## Access Control

| Level | Description |
|-------|-------------|
| Single-user | Bear is personal — no collaboration, no sharing within app |
| App Lock | Face ID / Touch ID / password to open app |
| Note Encryption | Individual notes can be encrypted with a password |
| Export/Share | Share notes via export (PDF, MD, etc.) or system share sheet |
| Bear Pro | Subscription required for sync, all themes, and advanced export formats |
