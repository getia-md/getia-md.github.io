---
brand: Cursor
tagline: The AI Code Editor.
category: AI & ML
website: https://cursor.com
---

# Cursor — Information Architecture

## Overview

Cursor is a VS Code-forked AI code editor that deeply integrates LLM capabilities into every layer of the coding experience. The IA inherits VS Code's **editor-centric workspace model** (file tree, tabs, terminal, panels) but adds AI-native surfaces: Cmd+K (inline edit/generate), Composer (multi-file AI agent), Tab (intelligent autocomplete), and Chat (contextual conversation). The key architectural differentiator is that AI is not a sidebar bolt-on — it operates within the code itself, editing across files, understanding project context via codebase indexing, and proposing diffs that users accept or reject. The product ships as a desktop application (Electron) with a companion web presence for marketing, docs, and account management.

## Site Map

```
cursor.com (marketing/account)
├── / (Marketing home)
├── /pricing
├── /changelog
├── /docs (Documentation)
│   ├── /get-started
│   ├── /tab
│   ├── /cmd-k
│   ├── /chat
│   ├── /composer
│   └── /context
├── /settings (Web account settings)
│   ├── /subscription
│   ├── /usage
│   └── /team
├── /blog
├── /privacy
└── /download

Desktop App (Electron)
├── Editor workspace (VS Code-derived)
│   ├── File explorer (sidebar)
│   ├── Open editors (tabs)
│   ├── Terminal panel
│   ├── Source control (Git)
│   ├── Extensions
│   └── Search
├── AI Surfaces
│   ├── Cmd+K (inline prompt bar)
│   ├── Chat (right sidebar panel)
│   ├── Composer (multi-file agent panel)
│   └── Tab (autocomplete — no UI, inline ghost text)
├── Settings
│   ├── AI model selection
│   ├── Codebase indexing
│   ├── Privacy mode
│   └── Rules for AI (.cursorrules)
└── Command palette (Cmd+Shift+P)
```

## Navigation Model

- **Primary navigation (desktop app)**: VS Code activity bar — Explorer, Search, Source Control, Extensions, plus Cursor-specific Chat icon
- **File navigation**: File tree in sidebar, Cmd+P quick-open, tab bar, breadcrumbs
- **AI navigation**: Cmd+K triggers inline prompt anywhere in code; Cmd+L opens Chat panel; Cmd+I opens Composer
- **Settings navigation**: Cursor settings (gear icon) → tabs for General, Models, Features, Privacy, Rules
- **Command palette**: Cmd+Shift+P — unified command access (VS Code convention)
- **Web navigation**: Top bar — Features, Pricing, Docs, Blog, Download, Sign In
- **No mobile navigation**: Desktop-only application

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Workspace | Root directory with files, .cursorrules, .cursor/ config | User-defined |
| File | Source code file open in editor — the primary object of interaction | Project |
| Cmd+K Edit | Inline prompt → diff preview → accept/reject | Ephemeral |
| Chat Conversation | Message thread with code context references (@file, @symbol, @codebase) | Session-based |
| Composer Session | Multi-file editing agent with step-by-step plan, file changes, terminal commands | Session-based |
| Tab Completion | Ghost-text autocomplete suggestion using ML model | Ephemeral |
| .cursorrules | Project-specific instructions for AI behavior | Project config |
| Codebase Index | Embedded vector index of all project files for semantic search | Auto-generated |

## User Flows

### Cmd+K Inline Editing
1. User selects code block (or places cursor at insertion point)
2. Presses Cmd+K → inline prompt bar appears
3. Types instruction (e.g., "add error handling" or "convert to async/await")
4. Cursor generates diff preview — green/red inline changes
5. User presses Enter to accept, Escape to reject, or edits the prompt
6. Changes applied to file

### Composer (Multi-File Agent)
1. User presses Cmd+I → Composer panel opens
2. Types high-level task (e.g., "add authentication to the API using JWT")
3. Composer analyzes codebase context → creates a step-by-step plan
4. Generates changes across multiple files simultaneously
5. User reviews each file's diff → Accept All or accept individually
6. Can run terminal commands (npm install, etc.) as part of the plan

### Chat with Context
1. User opens Chat panel (Cmd+L)
2. Types question — automatically includes current file as context
3. Can explicitly add context: @filename, @symbol, @codebase (searches indexed codebase), @web
4. AI responds with code suggestions, explanations, referenced files
5. "Apply" button on code blocks inserts/replaces code in the active file

### Tab Autocomplete
1. User types code → Cursor predicts next edit (not just next token)
2. Ghost text appears showing suggested completion
3. Tab to accept, keep typing to refine, Escape to dismiss
4. Can predict multi-line completions and even the next edit location

## URL / Route Structure

| Pattern | Description |
|---|---|
| `cursor.com/` | Marketing home |
| `cursor.com/pricing` | Plans and pricing |
| `cursor.com/docs/{section}` | Documentation |
| `cursor.com/changelog` | Version history |
| `cursor.com/settings` | Web account management |
| `cursor.com/settings/subscription` | Subscription management |
| `cursor.com/settings/usage` | Usage stats (requests, tokens) |
| `cursor.com/download` | Download page |

Desktop app uses local file paths (not URLs). Web presence is marketing + account management only.

## Search & Filter

- **Code search**: VS Code's built-in search (Cmd+Shift+F) — regex, file-type filters, include/exclude patterns
- **Semantic search**: @codebase in Chat/Composer uses vector embedding search over project files
- **Quick open**: Cmd+P — fuzzy file name search
- **Symbol search**: Cmd+T — search by function/class/variable name
- **Docs search**: Documentation site has keyword search
- **No cloud search**: All code stays local; no cloud-hosted workspace search

## Responsive Behavior

| Surface | Behavior |
|---|---|
| Desktop App | Fixed layout — sidebar (resizable), editor pane(s), panel (bottom), chat (right). Supports split editors, drag-and-drop panels |
| Marketing Site | Responsive: desktop hero → tablet card stack → mobile single-column |
| Documentation | Responsive: sidebar TOC (desktop) → hamburger (mobile), content max-width container |

- Desktop app is not responsive in the traditional sense — it's a native-feeling window with resizable panes
- Minimum window size approximately 800x600
- Chat and Composer panels can be resized or toggled
- Multi-monitor support: editor windows can be detached

## Access Control

| Role | Permissions |
|---|---|
| Free (Hobby) | 2000 completions, 50 slow premium requests/mo, limited models |
| Pro ($20/mo) | Unlimited completions, 500 fast premium requests/mo, all models (GPT-4, Claude, etc.) |
| Business ($40/seat/mo) | Pro features + team billing, admin dashboard, enforced privacy mode, centralized settings |
| Enterprise | Business + SSO/SAML, custom deployment, audit logs, dedicated support |

- Authentication: GitHub OAuth, Google OAuth, email/password
- Privacy Mode: When enabled, no code is stored on Cursor servers; all requests are ephemeral
- Model selection: Users choose which LLM to use (Claude, GPT-4, Cursor's own models)
- .cursorrules: Project-level AI behavior configuration (not access control, but AI governance)
- No telemetry by default in privacy mode; opt-in usage analytics
