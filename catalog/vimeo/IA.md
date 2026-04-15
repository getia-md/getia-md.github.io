---
brand: Vimeo
tagline: Professional video for all. Create, manage, and share.
category: Content & Media
website: https://www.vimeo.com
---

# Information Architecture — Vimeo

## 1. Overview
Vimeo is a professional video platform offering high-quality hosting, live streaming, OTT (over-the-top) channel creation, video analytics, and collaboration tools. Unlike YouTube's ad-driven model, Vimeo is subscription-based and creator-focused — no ads, clean player, privacy controls, and enterprise-grade features. The IA serves individual creators, small businesses, and enterprise teams with distinct product tiers.

## 2. Site Map

```
vimeo.com
├── Home
├── Features
│   ├── Video hosting
│   ├── Video player (customizable)
│   ├── Live streaming
│   ├── Screen recording
│   ├── Video editing
│   ├── AI-powered tools
│   ├── Collaboration & review
│   ├── Analytics
│   ├── Privacy & security
│   └── Interactive video
├── Solutions
│   ├── Marketing & communications
│   ├── Enterprise video
│   ├── Live events
│   ├── OTT (Vimeo OTT)
│   ├── Education
│   └── Houses of worship
├── Watch (Public videos)
│   ├── Staff Picks
│   ├── Categories (Film, Animation, Music, etc.)
│   ├── Channels
│   ├── Groups
│   └── Video detail page
├── Pricing
│   ├── Starter / Standard / Advanced / Enterprise
│   └── Feature comparison
├── Create
│   ├── Video editor
│   ├── Templates
│   ├── Stock footage
│   ├── Screen recorder
│   └── AI script generator
├── Developer
│   ├── API documentation
│   ├── Player SDK
│   ├── OEmbed
│   └── Webhooks
├── My Videos (Dashboard, auth)
│   ├── Library
│   ├── Folders / projects
│   ├── Review pages
│   ├── Analytics
│   ├── Live events
│   └── Settings
├── Help Center
│   ├── Getting started
│   ├── Account & billing
│   ├── Video management
│   ├── Live streaming
│   ├── Privacy
│   └── Contact
├── About
│   ├── Company
│   ├── Careers
│   ├── Press
│   └── Blog
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Copyright (DMCA)
└── Auth
    ├── Log in
    └── Join / Start free
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top nav | Logo, Features, Solutions, Watch, Pricing, Log in, Join CTA |
| Features | Dropdown grid | Hosting, Player, Live, Edit, AI, Analytics, Collaboration |
| Solutions | Dropdown | By use case, enterprise CTA |
| Watch | Sub-nav | Staff Picks, Categories, Channels |
| Dashboard | Left sidebar | Library, Folders, Analytics, Live, Create, Settings |
| Footer | Multi-column | Product, Solutions, Resources, Apps, Company |

**Key pattern**: Dual identity — Vimeo is both a watching community (public videos, Staff Picks) and a B2B video platform (enterprise hosting, analytics). The nav balances both but increasingly prioritizes the B2B/SaaS side.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Video | title, description, file, thumbnail, privacy (public/password/private/domain-restricted), tags, categories, chapters, captions |
| Folder / Project | name, videos, collaborators, review settings |
| Live Event | title, schedule, stream key, destinations, chat, replay |
| Channel | name, description, owner, followers, videos |
| Review Page | video, timestamped comments, reviewers, approval status |
| Analytics Report | video, plays, impressions, engagement, geography, devices |

## 5. User Flows

### 5a. Upload & share
1. Log in → "New video" → upload file (drag & drop)
2. Set title, description, thumbnail, privacy
3. Choose embed settings (custom player colors, controls)
4. Copy link or embed code → share
5. View analytics as viewers engage

### 5b. Team review workflow
1. Upload video to project folder
2. Create review page → invite reviewers via email
3. Reviewers add timestamped comments on video
4. Creator addresses feedback → upload new version
5. Reviewer approves → video finalized

### 5c. Live streaming
1. Create Live Event → set title, date/time, privacy
2. Configure stream settings (encoder, quality, simulcast destinations)
3. Go live → monitor chat and viewer count
4. End stream → replay auto-available
5. View post-event analytics

### 5d. OTT channel
1. Subscribe to Vimeo OTT → create channel
2. Upload content library → organize into series/seasons
3. Set monetization (subscription, transaction, free)
4. Launch branded apps (iOS, Android, Roku, Apple TV)
5. Manage subscribers and revenue in dashboard

## 6. URL / Route Structure

```
/                           → Home
/features/                  → Feature overview
/features/{feature}/        → Feature detail
/solutions/{use-case}/      → Solution page
/watch/                     → Public video feed
/channels/{slug}/           → Channel page
/{username}/                → Creator profile
/{username}/{video-id}      → Video detail page
/create/                    → Creation tools
/pricing/                   → Plans
/developers/                → API docs
/manage/videos/             → Video library (auth)
/manage/folders/            → Projects (auth)
/analytics/                 → Analytics (auth)
/live/                      → Live events (auth)
/help/                      → Help center
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Watch search | By keyword, category, duration, license, upload date |
| Library search | Search own videos by title, tags, folder |
| Analytics filter | By video, date range, geography, device |
| Help search | Keyword → categorized support articles |
| Staff Picks | Curated, not searchable — editorial selection |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full nav, widescreen video player, sidebar library, analytics dashboards |
| Tablet (768–1023px) | Responsive player, condensed nav, stacked library |
| Mobile (<768px) | Hamburger menu, full-width player, simplified upload, basic analytics |
| App (iOS/Android) | Upload, manage, view analytics, watch — not full editing |
| Embed | Responsive player that adapts to container width, customizable aspect ratio |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Watch public videos, browse Staff Picks, channels |
| Free User | Upload (limited storage), basic player, limited analytics |
| Starter | More storage, player customization, privacy controls |
| Standard | Team features, review pages, stock footage, advanced analytics |
| Advanced | Live streaming, advanced privacy, OTT, API access |
| Enterprise | SSO, custom SLA, dedicated support, advanced security |
| Team Member | Configurable per-folder/project access (view, upload, admin) |
| Reviewer (external) | Comment and approve on review pages only |
| Developer | API keys, player SDK, webhook configuration |
| Internal | Content moderation, copyright review, support |
