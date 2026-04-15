---
brand: Perplexity
tagline: Ask anything. Get instant answers with cited sources.
category: AI & ML
website: https://perplexity.ai
---

# Perplexity — Information Architecture

## Overview

Perplexity is an AI-powered answer engine that combines large language models with real-time web search to deliver cited, sourced responses. Unlike traditional chatbots, Perplexity's IA is built around a **search-first, citation-centric paradigm** — every answer includes inline references to source URLs, and the interface resembles a search engine more than a chat app. Key differentiators include Focus modes (All, Academic, Writing, Wolfram, YouTube, Reddit), Collections (shared research spaces), and Pro Search (multi-step reasoning with follow-up clarifications). The product spans web, mobile apps, Chrome extension, and API.

## Site Map

```
perplexity.ai
├── / (Home / search bar)
├── /search/{query_id} (Search result thread)
├── /collections
│   ├── / (All collections)
│   └── /{collection_id} (Individual collection)
├── /library (Saved threads)
├── /discover (Trending topics / curated content)
├── /profile/{username} (Public profile)
├── /spaces (Collaborative spaces)
│   └── /{space_id}
├── /settings
│   ├── /account
│   ├── /ai-profile
│   └── /subscription
├── /pro (Pro upgrade page)
├── /api (API docs and keys)
└── /auth/login
```

## Navigation Model

- **Primary navigation**: Left sidebar — Home (new search), Discover, Library, Collections/Spaces
- **Central element**: Large search bar with Focus mode selector (the dominant UI element)
- **Secondary navigation**: Suggested follow-up questions below each answer
- **Utility navigation**: Top-right user avatar → Profile, Settings, Subscription
- **Thread navigation**: Within a search thread — sequential Q&A pairs, each with its own source panel
- **Mobile**: Bottom tab bar (Home, Discover, Library, Profile); search bar at top

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Search Thread | Sequential question-answer pairs with citations, related questions | User-owned, shareable |
| Answer | Markdown text with numbered inline citations, images, quick facts panel | Part of thread |
| Source Card | URL, title, favicon, snippet from cited web page | System-generated |
| Collection | Named group of related threads with description, collaborators | User/shared |
| Space | Collaborative research workspace with custom AI instructions and shared threads | Team-owned |
| Discover Article | AI-generated summary of trending topic with sources | System-curated |
| AI Profile | User preferences for personalized answers (expertise level, interests) | User-owned |

## User Flows

### Standard Search
1. User lands on `/` → types question in prominent search bar
2. Selects Focus mode (optional): All, Academic, Writing, Wolfram|Alpha, YouTube, Reddit
3. Perplexity searches web in real-time → shows "Searching..." with source URLs loading
4. Answer streams in with inline citation numbers → source cards displayed in side panel
5. Follow-up questions suggested below → user can continue the thread
6. Thread auto-saved to Library

### Pro Search (Multi-Step)
1. User toggles "Pro" switch on search bar
2. Perplexity may ask clarifying questions before searching
3. Performs multi-step research: initial search → analysis → deeper searches → synthesis
4. Shows reasoning steps and intermediate findings
5. Final answer is more comprehensive with more sources

### Collection Research
1. User creates a Collection with a topic name
2. Runs multiple searches, adding relevant threads to the Collection
3. Invites collaborators to the Collection
4. Collection serves as a shared research knowledge base
5. AI can reference previous threads in the Collection for context

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Home / new search |
| `/search/{alphanumeric_id}` | Individual search thread |
| `/collections/{uuid}` | Collection view |
| `/spaces/{uuid}` | Space view |
| `/library` | User's saved threads |
| `/discover` | Trending / curated content |
| `/profile/{username}` | Public user profile |
| `/settings/*` | Account settings |
| `/pro` | Subscription upgrade |

Threads use short alphanumeric IDs. Collections and Spaces use UUIDs. Public profiles use usernames.

## Search & Filter

- **Primary search**: The main product IS search — natural language queries processed through LLM + web search pipeline
- **Focus modes**: Filter search to specific sources — Academic (papers), Reddit, YouTube, Wolfram|Alpha, Writing (no search, pure LLM)
- **Library search**: Text search across saved thread titles
- **Discover filters**: Topic categories (Technology, Science, Business, Entertainment, Sports, etc.)
- **No advanced operators**: Unlike Google, no `site:`, `filetype:`, or Boolean operators — natural language only
- **Related questions**: AI-generated follow-up queries for deeper exploration

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1024px) | Sidebar + centered search/answer pane + source panel on right |
| Tablet (768-1024px) | Collapsible sidebar, answer pane full-width, sources below answer |
| Mobile (<768px) | Bottom tab nav, full-width search bar, sources as expandable section below answer |

- Source cards stack vertically on mobile (horizontal carousel on desktop)
- Focus mode selector becomes a horizontal scroll strip on mobile
- Follow-up questions render as tappable chips
- Discover feed is a responsive card grid (3 columns → 2 → 1)

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Limited searches, basic model, no Library persistence |
| Free (signed in) | Unlimited basic searches, Library, Collections, 5 Pro Searches/day |
| Pro ($20/mo) | Unlimited Pro Search, GPT-4o/Claude/Sonar access, file upload, AI Profile, API credits |
| Enterprise | Pro features + team management, SSO, data privacy guarantees |

- Authentication: Email/password, Google OAuth, Apple Sign-In
- Sharing: Threads shareable via public link; Collections can have collaborators
- API: Separate API key with usage-based billing
- Data: Free tier conversations may be used for improvement; Pro has opt-out
