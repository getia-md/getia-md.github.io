---
brand: Audible
tagline: Stories that surround you. Listen anywhere, anytime.
category: Content & Media
website: https://www.audible.com
---

# Information Architecture — Audible

## 1. Overview
Audible (an Amazon company) is the world's largest audiobook and spoken-word platform. The IA is structured around a **credit-based membership model** — members receive monthly credits to exchange for any title, plus access to the Audible Plus catalog (included titles). The experience combines a retail marketplace (browse, purchase, wishlist) with a streaming library (Plus catalog), and deep Amazon ecosystem integration (Whispersync for switching between Kindle and Audible).

## 2. Site Map

```
audible.com
├── Home (personalized)
├── Browse
│   ├── Audiobooks
│   │   ├── Best Sellers
│   │   ├── New Releases
│   │   ├── Coming Soon
│   │   ├── By genre (Mystery, Sci-Fi, Business, etc.)
│   │   └── Audible Originals
│   ├── Podcasts
│   │   ├── Originals
│   │   ├── Popular
│   │   └── By category
│   ├── Audible Plus Catalog
│   │   ├── Included with membership
│   │   └── Browse by genre
│   ├── Kids & Family
│   └── Sleep & Wellness
├── Title Detail Page
│   ├── Cover art, title, author, narrator
│   ├── Sample (play preview)
│   ├── Rating & reviews
│   ├── Length, release date, language
│   ├── Series info
│   ├── Buy with credit / Buy with money / Add to Plus
│   ├── Whispersync availability
│   ├── Listeners also enjoyed
│   └── Editorial reviews
├── Search
│   ├── Results (audiobooks, podcasts, authors, narrators)
│   └── Filters
├── Membership
│   ├── Plans (Plus, Premium Plus 1-credit, Premium Plus 2-credit)
│   ├── Benefits
│   ├── Gift memberships
│   └── Corporate plans
├── Library (Auth)
│   ├── Titles (purchased + credits)
│   ├── Plus catalog (streaming)
│   ├── Wish list
│   ├── Collections
│   ├── Listening stats
│   ├── Credits remaining
│   └── Purchase history
├── My Account
│   ├── Membership details
│   ├── Payment settings
│   ├── Listening preferences
│   └── Connected devices
├── Help Center
│   ├── Getting started
│   ├── Membership & billing
│   ├── Listening & app
│   ├── Returns & exchanges
│   └── Contact
├── Legal
│   ├── Conditions of Use
│   ├── Privacy
│   └── Listening guarantee
└── Auth
    ├── Sign in (Amazon account)
    └── Start free trial
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top bar | Logo, Search bar, Browse, Plus Catalog, Categories, Library, Cart, Account |
| Browse | Category mega-menu | Genres, Best Sellers, New Releases, Originals, Podcasts, Kids |
| Title page | Action buttons | Buy, Add to Wish List, Sample, Share |
| Library | Top tabs | All, Titles, Podcasts, Plus Catalog, Wish List |
| App | Bottom tabs | Home, Discover, Library, Profile |
| Persistent player | Bottom bar | Book cover mini, play/pause, skip 30s, speed, sleep timer |

**Key pattern**: The credit model shapes the IA — "Use a Credit" vs. "Buy for $X" is a constant decision point. The Plus catalog is a secondary layer of "free with membership" content, always distinguished from credit-worthy purchases.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Title (Audiobook) | title, author(s), narrator(s), length, release date, publisher, language, cover art, sample, price, credit-eligible, Plus-included, series, rating, reviews count |
| Series | name, books (ordered), author, genre |
| Podcast | name, description, episodes, creator, category, Audible Original flag |
| Review | user, rating (1-5), title, body, helpful votes |
| Collection | name, owner, titles, public/private |
| Listening Stats | hours listened, titles finished, badges, streaks |
| Credit | balance, expiry, tier (1/2 per month) |

## 5. User Flows

### 5a. Browse & purchase with credit
1. Browse categories or search → find title
2. Play sample (5-minute preview)
3. Click "1 Credit" → title added to Library
4. Download in app → listen offline
5. Rate and review after listening

### 5b. Whispersync experience
1. Buy Kindle eBook on Amazon → Audible version available at reduced price
2. Purchase Audible companion → Whispersync enabled
3. Read on Kindle → switch to Audible app → picks up where you left off
4. Seamlessly transition between reading and listening

### 5c. Plus catalog streaming
1. Browse Plus Catalog → thousands of included titles
2. Add to Library → stream or download
3. Listen without using a credit
4. Titles may rotate in/out of Plus catalog

### 5d. Membership management
1. Account → Membership Details
2. View plan, next billing date, credits remaining
3. Upgrade/downgrade plan → change credit allocation
4. Pause membership (up to 3 months) or cancel
5. Unused credits carry over (up to rollover limit)

## 6. URL / Route Structure

```
/                               → Home (personalized)
/cat/                           → Browse categories
/cat/{genre}/                   → Genre page
/cat/best-sellers/              → Best sellers
/cat/new-releases/              → New releases
/ep/{asin}                      → Title detail page
/pd/{podcast-asin}              → Podcast detail
/search?keywords={q}            → Search results
/plus/                          → Plus catalog
/membership/                    → Membership plans
/lib/                           → My Library (auth)
/lib/wish-list/                 → Wish list (auth)
/account/                       → Account settings (auth)
/help/                          → Help center
/help/{topic}/                  → Help article
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Global search | By title, author, narrator; autocomplete suggestions |
| Genre filter | Fiction, Non-fiction, Business, Sci-Fi, Mystery, Romance, etc. |
| Length filter | Under 1 hour, 1-3h, 3-6h, 6-10h, 10-20h, 20+ hours |
| Format filter | Audiobooks, Podcasts, Originals, Plus catalog only |
| Sort | Relevance, best sellers, average rating, newest, price |
| Whispersync filter | Show only titles with Kindle companion |
| Library search | Search within owned titles, filter by listened/unfinished |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full browse grid (4-5 columns), sidebar filters, detailed title page |
| Tablet (768–1023px) | 3-column grid, collapsible filters |
| Mobile web (<768px) | 2-column grid, bottom-sheet filters, simplified title page, deep-link to app |
| App (iOS/Android) | Full listening experience — downloads, playback speed, sleep timer, car mode, bookmarks, clips |
| Alexa / Smart speakers | Voice-driven — "Alexa, read my audiobook" → continues where you left off |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Browse catalog, view title details, play samples |
| Free (no membership) | Purchase individual titles at full price, access purchased library |
| Audible Plus Member | Plus catalog access (stream/download included titles), no credits |
| Premium Plus Member (1 credit) | 1 credit/month + Plus catalog + member discounts (30% off) |
| Premium Plus Member (2 credits) | 2 credits/month + all Premium Plus benefits |
| Family Plan | Shared benefits, individual libraries |
| Corporate / Gift | Pre-paid plans, bulk credit management |
| Internal | Catalog management, editorial picks, content partnerships |
