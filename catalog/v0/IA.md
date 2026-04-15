---
brand: v0
tagline: Chat with v0. Generate UI with simple text prompts.
category: AI & ML
website: https://v0.dev
---

# v0 — Information Architecture

## Overview

v0 is Vercel's AI-powered UI generation tool that converts natural language prompts into production-ready React components using shadcn/ui and Tailwind CSS. The IA is structured as a **prompt-to-component workshop** — the interface is a chat where each AI response is a live-rendered, editable UI component. Unlike general-purpose AI tools, v0 is laser-focused on frontend generation: every output is a functional React component that can be copied, iterated upon, or deployed directly to Vercel. The product emphasizes an iterative design loop: prompt → preview → refine → ship. It integrates tightly with the Next.js/Vercel ecosystem.

## Site Map

```
v0.dev
├── / (Home — prompt input + featured generations)
├── /chat/{chat_id} (Generation conversation)
├── /community (Community-shared generations)
│   └── /t/{generation_id} (Individual shared generation)
├── /docs (Documentation)
├── /pricing
├── /settings
│   ├── /account
│   └── /subscription
└── /auth
```

## Navigation Model

- **Primary navigation**: Minimal — centered prompt input is the hero; top bar with logo, Community, Docs, Pricing, Sign In
- **Chat navigation**: Left sidebar lists conversation history (similar to ChatGPT); main area shows prompt/response pairs
- **Component navigation**: Each AI response shows a rendered preview with tabs for Preview / Code
- **Iteration navigation**: Follow-up prompts refine the component; previous versions accessible in the conversation
- **Community navigation**: Browse shared generations with category filters
- **Utility navigation**: Top-right avatar → Settings, Subscription, Sign out
- **Mobile**: Responsive; preview components scale down but code editing is desktop-optimized

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Chat/Conversation | Sequential prompt-response pairs, each response containing a generated component | User-owned |
| Generated Component | React/JSX code using shadcn/ui + Tailwind, live preview, code view | Part of conversation |
| Component Version | Each iteration in a conversation is a new version; all versions are preserved | Part of conversation |
| Shared Generation | Public snapshot of a generated component with prompt | User-shared, public |
| Prompt | Natural language description of desired UI, optionally with image attachments | User input |

## User Flows

### Generating a UI Component
1. User lands on `/` → types prompt (e.g., "a pricing page with 3 tiers, dark theme, with toggle for monthly/annual")
2. v0 generates React component code using shadcn/ui + Tailwind
3. Live preview renders immediately alongside the code
4. User can toggle between Preview and Code views
5. Copy code snippet to use in their project, or continue iterating

### Iterative Refinement
1. After initial generation, user types follow-up (e.g., "make the popular tier highlighted, add a comparison table below")
2. v0 generates updated component preserving existing structure
3. Each iteration produces a new version — all accessible in conversation history
4. User can reference "go back to version 2 but keep the color scheme from version 4"

### Using Generated Code
1. User clicks "Copy Code" or "Add to Codebase"
2. Code includes shadcn/ui component imports and Tailwind classes
3. User runs `npx shadcn@latest add` to install required shadcn components
4. Paste generated code into their Next.js/React project
5. v0 can also deploy directly to Vercel with "Deploy" button

### Community Browsing
1. User navigates to Community page
2. Browses featured/trending generations
3. Clicks a generation → sees live preview + prompt used
4. Can fork: "Remix" opens the generation in a new chat for customization
5. Share URL allows anyone to view and remix

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Home — prompt input |
| `/chat/{uuid}` | Chat conversation |
| `/community` | Community gallery |
| `/t/{short_id}` | Shared generation (public) |
| `/docs` | Documentation |
| `/pricing` | Pricing page |
| `/settings/*` | Account settings |

Conversations use UUIDs. Shared generations use shorter IDs. Minimal route structure reflecting the product's focused scope.

## Search & Filter

- **Community search**: Search shared generations by keyword/description
- **Community filters**: Categories (Dashboard, Landing Page, E-commerce, Form, Chart, etc.)
- **Conversation history**: Searchable by title/prompt in sidebar
- **No component library search**: v0 generates custom components rather than searching a library
- **Sort**: Trending, Most Popular, Newest in community

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1024px) | Sidebar (conversation list) + main area (prompt + preview/code split) |
| Tablet (768-1024px) | Collapsible sidebar + preview/code tabs instead of side-by-side |
| Mobile (<768px) | No sidebar (hamburger), full-width prompt input, preview/code as tabs |

- Generated component previews are rendered in an iframe that responds to viewport
- Users can toggle preview sizes (desktop/tablet/mobile) to test responsiveness of generated output
- Code view has syntax highlighting with horizontal scroll
- Prompt input area adapts to keyboard on mobile

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Browse community generations; no generation access |
| Free (signed in) | Limited generations per day (usage cap), community access |
| Premium ($20/mo) | Higher generation limits, priority queue, longer conversations |
| Team | Premium features + shared workspace, team billing |

- Authentication: Vercel account (GitHub, GitLab, Bitbucket OAuth), Google OAuth, email
- Generation limits: Free tier has daily/monthly caps; premium has higher limits
- Sharing: Generated components can be shared via public URL or kept private
- Code ownership: Users own the generated code; MIT-compatible output
- Vercel integration: One-click deploy of generated components to Vercel
