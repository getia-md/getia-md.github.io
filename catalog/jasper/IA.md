---
brand: Jasper
tagline: AI copilot for enterprise marketing teams.
category: AI & ML
website: https://jasper.ai
---

# Jasper — Information Architecture

## Overview

Jasper is an AI marketing platform designed for enterprise content teams. Unlike general-purpose AI chatbots, Jasper's IA is built around a **brand-aware content production pipeline** — every feature is oriented toward producing on-brand marketing content at scale. The architecture integrates brand voice profiles, knowledge bases (company facts, style guides, product info), campaign management, and multi-channel content creation (blog posts, ads, social media, emails). The IA reflects enterprise marketing workflows: plan campaign → generate content → review → publish, with governance and approval layers. Key structural elements include the Brand Voice engine, Template library, Document editor, Art generation, and Campaign planner.

## Site Map

```
app.jasper.ai
├── / (Dashboard — recent, campaigns, usage)
├── /chat (AI chat with brand context)
├── /documents
│   ├── / (All documents)
│   └── /{doc_id} (Document editor)
├── /campaigns
│   ├── / (Campaign list)
│   └── /{campaign_id} (Campaign workspace)
│       ├── /brief
│       ├── /content
│       └── /analytics
├── /templates
│   ├── / (Template gallery)
│   └── /{template_id} (Template runner)
├── /art (AI image generation)
├── /brand-voice
│   ├── / (Voice profiles)
│   ├── /{voice_id} (Individual voice config)
│   └── /knowledge (Knowledge base)
├── /workflows (Automated content pipelines)
├── /integrations (Connected tools — Google Docs, Notion, etc.)
├── /analytics (Content performance)
├── /admin
│   ├── /team (User management)
│   ├── /billing
│   ├── /security
│   └── /usage
└── /settings
```

## Navigation Model

- **Primary navigation**: Left sidebar — Home, Chat, Documents, Campaigns, Templates, Art, Brand Voice
- **Secondary navigation**: Within Campaigns — tabs for Brief, Content Assets, Analytics
- **Admin navigation**: Separate Admin section in sidebar for team managers
- **Template navigation**: Category-based browsing (Blog, Ads, Social, Email, SEO, etc.)
- **Brand Voice selector**: Persistent dropdown in content creation interfaces — applies voice to all generations
- **Utility navigation**: Top-right — notifications bell, credits/usage indicator, avatar → Settings
- **Mobile**: Responsive but desktop-optimized; sidebar collapses to hamburger

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Document | Rich-text editor document with AI assistance, title, folder, tags | User/Team |
| Campaign | Brief (goals, audience, channels) + linked content assets + analytics | Team-owned |
| Brand Voice | Name, description, tone attributes, example content, rules | Org-level |
| Knowledge Base Entry | Company facts, product specs, style rules — fed as context to all generations | Org-level |
| Template | Predefined form with input fields → structured AI output (e.g., "Facebook Ad Copy") | Jasper-provided or custom |
| Art Image | AI-generated image with prompt, style, mood, brand colors | User-owned |
| Workflow | Automated multi-step content pipeline (e.g., blog post → social snippets → email) | Org-level |

## User Flows

### Brand Voice-Powered Content Creation
1. Admin configures Brand Voice: uploads style guide, sets tone (witty, professional, bold), adds example content
2. Admin adds Knowledge Base entries: product names, FAQs, competitive positioning
3. Content creator opens Document editor → Brand Voice auto-selected
4. Types or uses `/` command to trigger AI generation with brand context
5. AI generates content matching the brand's tone, using accurate product details
6. Review → publish or export to CMS

### Campaign Workflow
1. Marketing lead creates Campaign → fills brief (objective, target audience, key messages, channels)
2. Jasper suggests content plan based on brief: 3 blog posts, 10 social posts, 2 email sequences
3. Team members generate individual assets using Templates or Document editor
4. All assets linked to Campaign → visible in Campaign workspace
5. Analytics track content performance across channels

### Template-Based Generation
1. User browses Template gallery → selects "Google Ads Copy"
2. Fills input fields: product name, target keyword, audience, CTA
3. Brand Voice automatically applied → clicks Generate
4. Jasper produces multiple variations → user picks best ones
5. Copy to clipboard or export to Google Ads

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Dashboard |
| `/chat` | AI chat interface |
| `/documents/{uuid}` | Document editor |
| `/campaigns/{uuid}` | Campaign workspace |
| `/campaigns/{uuid}/brief` | Campaign brief |
| `/templates` | Template gallery |
| `/templates/{slug}` | Template runner |
| `/art` | Image generation |
| `/brand-voice/{uuid}` | Brand voice config |
| `/brand-voice/knowledge` | Knowledge base |
| `/admin/*` | Admin panel |
| `/settings` | User settings |

UUIDs for user-generated content. Templates use slugs. Single-page application.

## Search & Filter

- **Document search**: Full-text search across document titles and content
- **Template search**: Search by name + category filters (Blog, Ads, Social Media, Email, SEO, Product Description, etc.)
- **Campaign filtering**: Filter by status (Active, Draft, Completed), date, owner
- **Knowledge Base search**: Search company knowledge entries by keyword
- **No public content**: All content is private to the organization
- **Tag system**: Documents and assets can be tagged for organization

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full sidebar + document editor with AI panel + Brand Voice selector |
| Desktop (1024-1280px) | Collapsible sidebar + full editor |
| Tablet (768-1024px) | Sidebar as overlay + simplified editor toolbar |
| Mobile (<768px) | Functional but limited — chat works well, document editor is basic |

- Document editor adapts to available width (max-width container for readability)
- Template forms stack vertically on mobile
- Campaign workspace shows card grid that reflows
- AI art generation adapts image preview to viewport

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site only; no product access |
| Creator | Generate content, use templates, create documents, limited Brand Voice access |
| Team ($49/seat/mo) | Full Brand Voice, campaigns, collaboration, knowledge base, custom templates |
| Business | Team features + API, workflows, SSO, advanced analytics, custom AI models |
| Enterprise | Business + dedicated CSM, custom training, SLA, audit logs |
| Admin | Manage users, Brand Voice, Knowledge Base, billing, usage limits |
| Editor | Create and edit content; no admin access |
| Viewer | Read-only access to shared content |

- Authentication: Email/password, Google SSO, SAML (Enterprise)
- Word limits: Plans have monthly word generation limits
- Seat-based pricing: Per-user licensing for teams
- Data privacy: SOC 2 compliant; customer data not used for training
- Brand Voice governance: Only Admins can create/modify Brand Voice profiles
