---
brand: ChatGPT
tagline: Get answers. Find inspiration. Be more productive.
category: AI & ML
website: https://chat.openai.com
---

# ChatGPT — Information Architecture

## Overview

ChatGPT is OpenAI's conversational AI product, serving hundreds of millions of users across web, mobile, and desktop. The IA revolves around a **conversation-first paradigm** — every interaction begins and lives within a chat thread. The architecture has expanded from simple Q&A to a multi-modal workspace supporting GPTs (custom agents), Canvas (collaborative editing), memory (persistent user context), file analysis, image generation (DALL·E), browsing, and code execution. The left sidebar acts as an ever-growing conversation history, while the main canvas is dedicated to the active thread. The product differentiates free, Plus, Team, and Enterprise tiers, each unlocking additional models (GPT-4o, o1, o3) and capabilities.

## Site Map

```
chat.openai.com
├── / (New chat / home)
├── /c/{conversation_id} (Individual conversation)
├── /g/{gpt_id} (GPT detail / launch)
├── /gpts
│   ├── /discovery (GPT Store browse)
│   ├── /mine (My GPTs)
│   └── /editor (GPT Builder)
├── /canvas (Canvas documents)
├── /settings
│   ├── /general
│   ├── /personalization (Custom instructions, memory)
│   ├── /data-controls
│   ├── /security
│   └── /subscription
├── /share/{share_id} (Shared conversation read-only)
├── /auth/login
└── /auth/callback
```

## Navigation Model

- **Primary navigation**: Left sidebar — conversation list with search, grouped by date (Today, Yesterday, Previous 7 Days, etc.)
- **Secondary navigation**: Top-left model selector dropdown (GPT-4o, o1, o3-mini, etc.)
- **Utility navigation**: Bottom-left user avatar → Settings, My Plan, My GPTs, Log out
- **Contextual navigation**: Within a conversation — branch points (edit & regenerate), Canvas toggle, attachment menu
- **Mobile navigation**: Hamburger menu replaces sidebar; swipe to open conversation list
- **GPT Store**: Separate browse experience with category tabs (Writing, Productivity, Research, etc.)

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Conversation | Thread of alternating user/assistant messages, each with timestamps, model tag, optional attachments | User-owned, deletable |
| Message | Text (Markdown), code blocks, images, file attachments, tool-use indicators | Part of conversation |
| Canvas Document | Rich-text or code document co-edited with AI, versioned | Linked to conversation |
| GPT | Name, description, instructions, conversation starters, knowledge files, actions, icon | Creator-owned, publishable |
| Memory | Key-value facts extracted from conversations | User-owned, editable/deletable |
| Shared Link | Read-only snapshot of a conversation at share time | Public or link-only |
| Project | Folder grouping conversations + files + custom instructions | User/Team-owned |

## User Flows

### New Conversation
1. User lands on `/` → sees prompt input + suggested prompts
2. Types message → selects model (or uses default)
3. Message streams in real-time via SSE
4. Conversation auto-saved to sidebar with AI-generated title
5. User can continue, branch (edit earlier message), or start new chat

### Using a GPT
1. User navigates to GPT Store or `/g/{id}`
2. Sees GPT description + conversation starters
3. Clicks starter or types custom prompt
4. Conversation opens in main chat with GPT context pre-loaded
5. GPT may invoke external actions (API calls) with user consent

### Canvas Workflow
1. User requests a document or code artifact
2. ChatGPT opens Canvas panel alongside chat
3. User can directly edit text; AI can suggest inline changes
4. Version history allows rollback
5. Export as file or copy to clipboard

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Home / new chat |
| `/c/{uuid}` | Existing conversation |
| `/g/{slug}` | GPT detail and launch page |
| `/gpts/discovery` | GPT Store |
| `/gpts/editor` | GPT Builder |
| `/gpts/editor/{gpt_id}` | Edit specific GPT |
| `/share/{share_id}` | Shared conversation (public) |
| `/settings/*` | Settings sub-pages |

Routes are client-side (SPA); the conversation ID is a UUID. Shared links use a separate short ID. No SEO-oriented slug pattern — conversations are private by default.

## Search & Filter

- **Conversation search**: Full-text search across conversation titles and message content, accessible from sidebar search bar
- **GPT Store search**: Keyword search + category filters (Top Picks, DALL·E, Writing, Research, Programming, Education, Lifestyle)
- **No advanced filters**: No date-range, model-type, or tag-based filtering for conversations
- **Memory search**: Users can browse and search stored memory items in Settings → Personalization

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1024px) | Persistent sidebar + full chat canvas + optional Canvas side panel |
| Tablet (768-1024px) | Collapsible sidebar, full chat, Canvas overlays |
| Mobile (<768px) | Sidebar hidden (hamburger toggle), full-width chat, Canvas as bottom sheet or full-screen |

- Message bubbles are full-width on mobile with reduced padding
- Model selector moves into a compact dropdown
- File upload and attachment options collapse into a `+` menu
- Touch-optimized: swipe-to-open sidebar, long-press for message actions

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | No access (login required) |
| Free user | GPT-4o-mini, limited GPT-4o, limited image gen, no Canvas, basic memory |
| Plus ($20/mo) | Full GPT-4o, o1, o3-mini, Canvas, DALL·E, Advanced Data Analysis, 50 GPT-4o messages/3hr |
| Team ($25/user/mo) | Plus features + workspace, admin console, no training on data |
| Enterprise | Team features + SSO/SAML, SCIM, admin analytics, extended context, priority access |

- Authentication: Email/password, Google OAuth, Microsoft OAuth, Apple Sign-In
- Data controls: Users can opt out of model training, export data, delete account
- Shared links: Anyone with link can view; creator can revoke
- GPT publishing: Private, anyone with link, or public (GPT Store)
