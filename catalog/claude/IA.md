---
brand: Claude
tagline: Talk to Claude, an AI assistant from Anthropic.
category: AI & ML
website: https://claude.ai
---

# Claude — Information Architecture

## Overview

Claude is Anthropic's AI assistant product, designed around safety, helpfulness, and extended thinking. The IA centers on a **conversation workspace model** augmented by Projects (persistent context containers), Artifacts (rendered outputs like code, documents, and diagrams), and a 200K-token context window that enables working with entire codebases or long documents. The interface is deliberately minimal — a single-pane chat with an expandable Artifacts panel. Claude differentiates through its thinking process (extended thinking mode), project-based organization, and emphasis on nuanced, well-reasoned responses. Tiers include Free, Pro, Team, and Enterprise.

## Site Map

```
claude.ai
├── / (Home / new conversation)
├── /chat/{conversation_id} (Active conversation)
├── /project/{project_id} (Project workspace)
│   └── /chat/{conversation_id} (Conversation within project)
├── /artifacts (Artifact gallery — recent artifacts)
├── /settings
│   ├── /profile
│   ├── /appearance
│   ├── /privacy
│   └── /subscription
├── /login
├── /recents (Recent conversations)
└── /starred (Starred conversations)
```

## Navigation Model

- **Primary navigation**: Left sidebar with sections — Recents (conversation list), Starred, Projects
- **Secondary navigation**: Model selector at top of chat (Claude Sonnet 4, Claude Opus 4, Haiku)
- **Utility navigation**: Bottom-left user avatar → Settings, Subscription, Help, Log out
- **Contextual navigation**: Artifact panel slides in from right; toggleable via artifact preview chips in chat
- **Project navigation**: Within a project — project knowledge (uploaded files, instructions), conversation list scoped to project
- **Mobile**: Bottom tab bar with Chat, Recents, and Menu; sidebar replaced by modal drawer

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Conversation | Threaded message exchange with model tag, timestamps | User-owned |
| Message | Markdown text, code blocks, LaTeX, inline citations | Part of conversation |
| Artifact | Standalone rendered content — React component, HTML page, SVG, Markdown doc, Mermaid diagram, code file | Linked to conversation, downloadable |
| Project | Named container with custom instructions, knowledge files, and scoped conversations | User or Team-owned |
| Knowledge File | PDF, TXT, CSV, code files uploaded to a project as persistent context | Part of project |
| Starred Conversation | Bookmarked conversation for quick access | User-owned |

## User Flows

### Starting a Conversation
1. User lands on `/` → empty chat with prompt input and model selector
2. Types message → response streams in real-time
3. Conversation auto-titled and saved to Recents in sidebar
4. User can star, rename, or delete the conversation

### Working with Artifacts
1. Claude generates code, a document, or diagram in response
2. Artifact chip appears in chat → click to expand Artifact panel
3. Artifact renders live (React components run in sandboxed iframe)
4. User can copy, download, or remix ("make it darker", "add animations")
5. Multiple artifacts in one conversation are navigable via artifact tabs

### Using Projects
1. User creates a project with a name and custom instructions
2. Uploads knowledge files (codebase, docs, specs)
3. All conversations within the project inherit the knowledge + instructions
4. Enables domain-specific expertise without re-uploading context each time

### Extended Thinking
1. User enables extended thinking or asks a complex reasoning question
2. Claude shows a "Thinking..." block with collapsible thought process
3. Thought tokens are visible but clearly separated from the final response
4. Enables chain-of-thought reasoning for math, coding, analysis tasks

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Home / new conversation |
| `/chat/{uuid}` | Individual conversation |
| `/project/{uuid}` | Project overview |
| `/project/{uuid}/chat/{uuid}` | Conversation within a project |
| `/artifacts` | Recent artifacts gallery |
| `/settings/*` | User settings |
| `/login` | Authentication |

Client-side SPA routing. UUIDs for conversations and projects. No public sharing URLs by default — conversations are private.

## Search & Filter

- **Conversation search**: Text search across conversation titles in sidebar
- **No full-text message search**: Search is limited to titles, not message content
- **Project filtering**: Conversations can be filtered by project membership
- **Artifact browsing**: Recent artifacts are browsable in a gallery view but not searchable
- **No tag system**: Conversations rely on starring and recency for organization

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1024px) | Persistent sidebar + chat pane + collapsible Artifact panel (3-column max) |
| Tablet (768-1024px) | Collapsible sidebar, chat + Artifact panel overlay |
| Mobile (<768px) | Full-screen chat, Artifact panel as modal overlay, sidebar as drawer |

- Artifact panel on mobile expands to full-screen with a close button
- Input area has adaptive height with attachment button
- Model selector is a compact pill on mobile
- Touch: swipe to open sidebar drawer

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | No access (login required) |
| Free user | Claude Sonnet (limited messages/day), basic artifacts, no projects |
| Pro ($20/mo) | Claude Opus 4, Sonnet 4, Haiku, higher rate limits, Projects, extended thinking, priority access |
| Team ($25/user/mo) | Pro features + team workspace, shared projects, admin controls, no training on data |
| Enterprise | Team features + SSO/SAML, SCIM, audit logs, custom data retention, dedicated support |

- Authentication: Email/password, Google OAuth
- Privacy: Users can opt out of training; conversations not used for training by default on Pro/Team/Enterprise
- Sharing: No public sharing of conversations (privacy-first design)
- Projects: Owner can share with team members (Team/Enterprise)
