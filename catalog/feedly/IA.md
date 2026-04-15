---
brand: Feedly
tagline: Track the topics and trends that matter to you.
category: Content & Media
website: https://feedly.com
---

# Information Architecture — Feedly

## 1. Overview
Feedly is an RSS reader and content intelligence platform that aggregates news, blogs, and research sources into a unified feed. The IA is organized around **Feeds** (RSS subscriptions), **Boards** (curated collections for sharing/organizing), and **Leo** (an AI assistant that prioritizes, summarizes, and filters content). Feedly spans from individual power-readers to enterprise teams tracking competitive intelligence, threat research, and industry trends.

## 2. Site Map

```
feedly.com
├── Home (marketing)
├── My Feedly (Auth — core experience)
│   ├── Today (AI-prioritized)
│   ├── All feeds
│   ├── Feed folders
│   │   ├── /{folder-name}
│   │   └── Individual feed
│   ├── Boards
│   │   ├── Personal boards
│   │   ├── Team boards (shared)
│   │   └── /{board-name}
│   ├── Read Later
│   ├── Recently Read
│   ├── Saved searches (Keyword Alerts)
│   └── Newsletters
├── Leo AI
│   ├── Priority articles
│   ├── Topic tracking
│   ├── Entity tracking (companies, people, products)
│   ├── Trend detection
│   ├── AI summaries
│   ├── Mute filters
│   └── Custom AI models
├── Discover / Add Content
│   ├── Search sources (blogs, news, YouTube, Reddit, etc.)
│   ├── Browse by topic
│   ├── Featured sources
│   ├── Newsletters integration
│   └── Twitter / social feeds
├── Integrations
│   ├── Slack
│   ├── Microsoft Teams
│   ├── Zapier
│   ├── Buffer
│   ├── Notion
│   ├── Evernote
│   └── ... (many more)
├── Pricing
│   ├── Free / Pro / Pro+ / Business / Enterprise
│   └── Feature comparison
├── Solutions
│   ├── Market intelligence
│   ├── Threat intelligence
│   ├── Research
│   ├── PR & communications
│   └── Content marketing
├── Help Center
│   ├── Getting started
│   ├── Feeds & sources
│   ├── Leo AI
│   ├── Boards & sharing
│   ├── Integrations
│   └── Contact
├── Blog
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── GDPR
└── Auth
    ├── Log in
    └── Get started
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| App (auth) | Left sidebar | Today, Feeds (collapsible folders), Boards, Read Later, Recently Read, Leo (AI) |
| Feed view | Top bar | All / Unread, view mode (magazine/title-only/cards), sort (newest/oldest/relevance), mark all read |
| Article view | Inline expansion or full view | Summary, full article, save to board, read later, share, highlight, note |
| Leo AI | Inline badges + sidebar filter | Priority flag, topic tag, entity tag, summary overlay |
| Mobile app | Bottom tabs | Today, Feeds, Boards, Search, More |

**Key pattern**: The sidebar is the primary organizational structure — feeds grouped into folders, boards as curated output. Leo AI works as an invisible layer that tags and prioritizes articles inline, not as a separate view.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Article | title, source, author, published date, summary, full text, images, URL, Leo score, topics, entities, read/unread |
| Feed (Source) | name, URL (RSS), category, frequency, last updated, article count |
| Folder | name, feeds, unread count |
| Board | name, articles (saved), owner, shared flag, team, notes |
| Keyword Alert | query, sources scope, results, frequency |
| Leo Rule | type (topic/entity/keyword/mute), criteria, action (prioritize/mute/tag) |
| Highlight | text, article, note, color |
| Newsletter | sender, subject, body, assigned folder |

## 5. User Flows

### 5a. Add sources & read
1. Click "+" or Discover → search for blog/site/YouTube channel/subreddit
2. Add to folder → articles appear in feed
3. Browse feed → read inline or open full article
4. Mark as read, save to board, or share

### 5b. Train Leo AI
1. Read articles → Leo learns from your reading patterns
2. Set explicit rules: "Prioritize articles about 'AI regulation'"
3. Set mute filters: "Hide articles about sports"
4. Leo adds priority badges → "Today" view shows AI-curated top articles
5. Review Leo's picks → thumbs up/down to improve

### 5c. Team collaboration (Business)
1. Create shared board → invite team members
2. Save relevant articles to board → add notes/highlights
3. Team sees curated intelligence board
4. Share board via Slack integration or email digest
5. Track what team members saved and annotated

### 5d. Keyword Alerts
1. Set up keyword alert (e.g., "competitor name" OR "product launch")
2. Feedly monitors all sources for matches
3. Matching articles appear in dedicated alert feed
4. Optionally forward to Slack or email

## 6. URL / Route Structure

```
/                               → Marketing home
/i/discover/                    → Discover sources
/i/discover/search/{query}/     → Source search
/i/latest/                      → All feeds (auth)
/i/folder/{folder-id}/          → Folder view
/i/subscription/{feed-id}/      → Individual feed
/i/board/{board-id}/            → Board view
/i/saved/                       → Read Later
/i/recently-read/               → Recently Read
/i/keyword/{alert-id}/          → Keyword alert
/i/leo/                         → Leo AI settings
/i/entry/{entry-id}/            → Full article view
/pricing/                       → Pricing plans
/solutions/{use-case}/          → Solution page
/blog/                          → Blog
/help/                          → Help center
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Source search | Find RSS feeds by URL, site name, or topic |
| Article search | Search within subscribed feeds by keyword, date, source |
| Leo filters | Priority level (must-read, important), topic, entity, source |
| View modes | All vs. Unread only |
| Sort | Newest, oldest, relevance (Leo-powered) |
| Board search | Search within board articles |
| Keyword alerts | Persistent keyword monitoring across sources |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Sidebar + 3-pane view (folders / article list / article detail), full Leo dashboard |
| Tablet (768–1023px) | Collapsible sidebar, 2-pane (list + detail) |
| Mobile (<768px) | Hamburger sidebar, single-pane, swipe to mark read, pull-to-refresh |
| App (iOS/Android) | Bottom tabs, offline reading, widget for unread count |
| Browser extension | Quick save to board from any web page |

## 9. Access Control

| Role | Access |
|------|--------|
| Free User | Up to 100 sources, 3 feeds, basic organization |
| Pro | Unlimited sources, Leo AI (basic), boards, notes, power search |
| Pro+ | Leo AI (advanced), keyword alerts, AI summaries, integrations (Slack, Teams) |
| Business | Team boards, shared feeds, team analytics, SAML SSO |
| Enterprise | Custom AI models, compliance features, dedicated support, API access |
| Team Member | Access to shared boards/feeds, configurable permissions (view/contribute/admin) |
| API Developer | Programmatic access to feeds, entries, boards, search |
| Internal | Content indexing, AI model training, infrastructure |
