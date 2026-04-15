---
brand: Stability AI
tagline: AI by the people, for the people.
category: AI & ML
website: https://stability.ai
---

# Stability AI — Information Architecture

## Overview

Stability AI is the company behind Stable Diffusion, the most widely adopted open-source image generation model. The IA spans two surfaces: the **corporate/research website** (stability.ai) for model releases, API docs, and company info, and **DreamStudio** (the hosted generation platform, now transitioning to the Stability API). The architecture reflects Stability's dual identity as both an open-source model provider and a commercial API platform. Key products include Stable Diffusion (image), Stable Video Diffusion (video), Stable Audio (music/SFX), and Stable LM (language). The platform emphasizes model accessibility — models are downloadable, API-accessible, and integrable into third-party tools.

## Site Map

```
stability.ai
├── / (Home — hero, product overview)
├── /stable-image (Stable Image product page)
├── /stable-video (Stable Video product page)
├── /stable-audio (Stable Audio product page)
├── /stable-code (Stable Code product page)
├── /memberships (Pricing / API plans)
├── /news (Blog / announcements)
│   └── /{slug}
├── /research (Research papers)
│   └── /{paper_slug}
├── /careers
├── /about
├── /contact
└── /terms | /privacy | /aup

platform.stability.ai (API & Developer Platform)
├── / (Dashboard — API usage, quick start)
├── /sandbox (Interactive playground — generate images)
├── /account
│   ├── /keys (API keys)
│   ├── /credits (Credit balance)
│   └── /billing
├── /docs (API documentation)
│   ├── /getting-started
│   ├── /rest-api
│   │   ├── /v2beta/stable-image/generate
│   │   ├── /v2beta/stable-image/edit
│   │   └── /v2beta/stable-image/upscale
│   └── /sdks
└── /auth
```

## Navigation Model

- **Corporate site nav**: Top bar — Products (dropdown: Stable Image, Stable Video, Stable Audio), Memberships, News, Developers (→ platform), Company (About, Careers, Contact)
- **Platform nav**: Left sidebar — Dashboard, Sandbox (playground), API Keys, Credits, Docs
- **Docs navigation**: Left sidebar with API endpoint tree; right sidebar with table of contents
- **Utility navigation**: Top-right — Sign In / Dashboard link (corporate); avatar → Account (platform)
- **Product page navigation**: Each product page has anchor sections — Features, Examples, API, Pricing
- **Mobile**: Hamburger menu on corporate site; platform is desktop-optimized

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Model/Product Page | Product name, description, capabilities, examples, API endpoint info, pricing | Stability-curated |
| Sandbox Generation | Prompt, negative prompt, model, parameters (steps, cfg scale, size, seed), output images | User-owned |
| API Key | Key string, name, created date | User-owned |
| Credit Balance | Purchased credits, usage history, remaining balance | User account |
| Blog Post | Title, date, author, body (Markdown/rich text), images | Stability editorial |
| Research Paper | Title, abstract, authors, PDF link, model card | Stability research |
| API Endpoint | Path, method, parameters, response schema, code examples | Documentation |

## User Flows

### Generating an Image (Sandbox)
1. User navigates to Sandbox on platform
2. Selects model (Stable Diffusion 3, SDXL, SD 1.5)
3. Enters prompt and optional negative prompt
4. Adjusts parameters: size, steps, CFG scale, seed, style preset
5. Clicks Generate → image(s) appear in gallery
6. Download, save, or iterate on the prompt
7. Credits deducted per generation

### API Integration
1. Developer creates account → gets API key from Account → Keys
2. Reads API docs — REST endpoints for generate, edit, upscale
3. Makes API call with prompt, parameters, and API key in header
4. Receives base64-encoded image or URL in response
5. Monitors usage in Dashboard — credits consumed, request history

### Using Open-Source Models Locally
1. User visits model page (e.g., Stable Diffusion 3)
2. Downloads model weights from Hugging Face (linked from Stability site)
3. Runs locally using ComfyUI, Automatic1111, or custom code
4. No credits consumed; runs on user's own hardware
5. Subject to model license (community vs. commercial)

## URL / Route Structure

| Pattern | Description |
|---|---|
| `stability.ai/` | Corporate home |
| `stability.ai/stable-image` | Image product page |
| `stability.ai/stable-video` | Video product page |
| `stability.ai/memberships` | Pricing |
| `stability.ai/news/{slug}` | Blog post |
| `stability.ai/research/{slug}` | Research paper |
| `platform.stability.ai/` | Developer dashboard |
| `platform.stability.ai/sandbox` | Image playground |
| `platform.stability.ai/account/keys` | API keys |
| `platform.stability.ai/docs/{path}` | API docs |

Two distinct domains: corporate (stability.ai) and platform (platform.stability.ai). Corporate uses slugs; platform uses functional paths.

## Search & Filter

- **Sandbox**: No search — focused workflow with a single generation form
- **API docs search**: Full-text search across documentation
- **News/Blog**: Browseable by date; no search or tags
- **Model discovery**: Products listed on corporate site; no marketplace or model search
- **Platform**: No usage search — simple list of recent generations and API calls

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full nav + hero sections + multi-column feature grids |
| Desktop (1024-1280px) | Responsive grids (3→2 columns) |
| Tablet (768-1024px) | Hamburger nav + stacked sections + 2-column grids |
| Mobile (<768px) | Single-column layout, full-width images, stacked cards |

- Corporate site is fully responsive with mobile-first design
- Platform (Sandbox) is functional on tablet but designed for desktop
- Generated images scale to container width
- API docs have responsive sidebar that becomes a top dropdown on mobile
- Blog posts are single-column with responsive images

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Browse corporate site, read docs, no platform access |
| Free account | Platform access, limited free credits for Sandbox |
| Paid (credit packs) | Purchase credits for API and Sandbox usage |
| Professional ($20/mo) | Monthly credit allocation, commercial license, priority API |
| Enterprise | Custom pricing, dedicated support, SLA, volume discounts, fine-tuning |

- Authentication: Email/password, Google OAuth
- Credit system: Pay-per-generation; costs vary by model and resolution
- API keys: Bearer token; rate-limited by plan
- Model licensing: Open-source models have community license (non-commercial) and commercial license (paid membership)
- Content policy: NSFW filter enabled by default; some models restrict certain content
- Open-source: Model weights downloadable for self-hosting (Hugging Face); no Stability platform credits needed
