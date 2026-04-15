---
brand: Pocket
tagline: Save it. Read it later. Get smarter.
category: Content & Media
website: https://getpocket.com
---

# Information Architecture — Pocket

## 1. Overview
Pocket (by Mozilla) is a read-it-later service that lets users save articles, videos, and web pages for offline consumption. The IA is intentionally minimal — a **save → organize → read** pipeline. Pocket differentiates through its recommendation engine (surfacing curated articles), tagging system, and distraction-free reading mode that strips away website clutter. It serves as both a personal reading library and a content discovery platform.

## 2. Site Map

```
getpocket.com
├── Home (marketing)
├── My List (Auth — core experience)
│   ├── Saved items
│   ├── Archive
│   ├── Favorites
│   ├── Highlights
│   ├── Tags
│   │   └── /{tag-name}
│   ├── All items / Articles / Videos
│   └── Search
├── Discover (Recommendations)
│   ├── Best of web (curated)
│   ├── Topics
│   │   ├── Technology
│   │   ├── Science
│   │   ├── Self-improvement
│   │   ├── Food
│   │   ├── Entertainment
│   │   └── ... (12+ topics)
│   ├── Popular
│   └── Trending
├── Collections (editorial)
│   ├── Curated reading lists
│   └── /{collection-slug}
├── Pocket Premium
│   ├── Permanent library
│   ├── Full-text search
│   ├── Suggested tags
│   ├── Ad-free Discover
│   └── Unlimited highlights
├── Apps & Extensions
│   ├── Browser extension (Chrome, Firefox, Safari)
│   ├── iOS app
│   ├── Android app
│   └── API
├── Help
│   ├── Getting started
│   ├── Saving content
│   ├── Reading & listening
│   ├── Account
│   └── Contact
├── About
│   ├── Company
│   └── Blog
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Cookie policy
└── Auth
    ├── Log in
    └── Sign up
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| App/Web (auth) | Left sidebar | My List, Archive, Favorites, Highlights, Tags, Discover |
| My List | Top bar | All / Articles / Videos, sort, filter, search |
| Item view | Minimal toolbar | Font size, theme (light/dark/sepia), listen (TTS), archive, favorite, tag, share, delete |
| Discover | Topic tabs | Best Of, Popular, Topics |
| Extension | Popup | Save current page, add tags, view recent saves |
| Mobile app | Bottom tabs | Home (My List), Discover, Search, Settings |

**Key pattern**: The reading view is purposefully distraction-free — no ads, no sidebar, no related articles. The focus is entirely on the content. Tags replace folders as the organizational paradigm.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Saved Item | URL, title, excerpt, thumbnail, domain/source, date saved, tags, favorite flag, status (unread/archived), estimated read time, type (article/video) |
| Tag | name, items count, user-defined |
| Highlight | text selection, item, color, note |
| Recommendation | title, URL, excerpt, source, topic, curator note |
| Collection | title, description, items (ordered), curator |

## 5. User Flows

### 5a. Save & read
1. Browse the web → click Pocket extension or share-to-Pocket
2. Article saved → appears in My List
3. Optionally add tags for organization
4. Open in Pocket → distraction-free reader view
5. Archive when finished (or delete)

### 5b. Tag & organize
1. View My List → select item(s) → "Tag"
2. Type tag name(s) → apply (Premium: auto-suggested tags)
3. Browse by tag in sidebar → filtered view of saved items
4. Bulk actions: tag, archive, delete, favorite

### 5c. Discover & save
1. Visit Discover tab → browse curated recommendations
2. Filter by topic (Technology, Science, Food, etc.)
3. Read article preview → save to My List for later
4. Articles surfaced by editorial team + algorithmic recommendations

### 5d. Listen (TTS)
1. Open saved article → tap "Listen" button
2. Text-to-speech reads article aloud
3. Control speed, play/pause → listen while commuting
4. Syncs position across devices

## 6. URL / Route Structure

```
/                           → Marketing home
/saves/                     → My List (auth)
/saves/archive/             → Archived items
/saves/favorites/           → Favorited items
/saves/highlights/          → All highlights
/saves/tags/{tag}/          → Items with tag
/saves/search?query={q}    → Search saved items
/explore/                   → Discover / Recommendations
/explore/{topic}/           → Topic recommendations
/collections/{slug}/        → Curated collection
/read/{item-id}             → Reader view
/premium/                   → Pocket Premium
/apps/                      → Download apps
/help/                      → Help center
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| My List search | Keyword search across saved titles and content (Premium: full-text) |
| Tag filter | Click tag in sidebar → show all items with that tag |
| Type filter | All, Articles only, Videos only |
| Sort | Newest saved, oldest saved |
| Status filter | My List (unread) vs. Archive |
| Discover filter | By topic, popularity, trending |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Sidebar + list/grid view, wide reader view, multi-column Discover |
| Tablet (768–1023px) | Collapsible sidebar, grid view, comfortable reader |
| Mobile (<768px) | Bottom tabs, card list, full-screen reader, swipe to archive |
| Browser extension | Compact popup — save button, tags, recent saves |
| App (iOS/Android) | Offline reading, TTS, dark mode, widget for quick save |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Marketing page, public collections, Discover (limited) |
| Free User | Save unlimited items, 3 highlights/article, tags, archive, basic search |
| Pocket Premium | Full-text search, permanent library (saved even if original deleted), suggested tags, unlimited highlights, ad-free Discover |
| Mozilla Account (SSO) | Firefox integration, synced saves across browsers |
| API Developer | Save, retrieve, modify items programmatically |
| Editorial Team | Curate Discover content, create Collections |
| Internal | Recommendation engine tuning, content moderation |
