---
brand: Pinterest
tagline: Discover and do what you love
category: Social & Communication
website: https://pinterest.com
---

# Information Architecture — Pinterest

## 1. Overview

Pinterest is a visual discovery engine that helps users find inspiration, save ideas, and shop products through an image-first interface. The IA is organized around Pins (individual ideas), Boards (curated collections), and a personalized Home Feed powered by visual recommendation algorithms. The platform bridges inspiration and action — from mood board to purchase, recipe to meal, design idea to renovation.

## 2. Site Map

```
Pinterest
├── Home Feed (personalized)
├── Search / Explore
│   ├── Trending
│   ├── Categories
│   │   ├── Home Decor
│   │   ├── Fashion
│   │   ├── Food & Drink
│   │   ├── Beauty
│   │   ├── DIY & Crafts
│   │   ├── Travel
│   │   └── [30+ categories]
│   └── Lens (visual search / camera)
├── Create
│   ├── Create Pin
│   ├── Create Idea Pin (multi-page)
│   └── Create Board
├── Notifications
│   ├── Activity
│   └── Messages
├── Profile
│   ├── Created Pins
│   ├── Saved Boards
│   │   └── [Board] → Pins, Sections
│   ├── Tried (completed ideas)
│   └── Followers / Following
├── Business Hub (creator/business accounts)
│   ├── Analytics
│   ├── Ads Manager
│   ├── Catalogs
│   └── Claim Website
├── Settings
│   ├── Account
│   ├── Profile
│   ├── Privacy
│   ├── Notifications
│   ├── Security
│   └── Brand Permissions
└── Shopping
    ├── Shop Tab
    ├── Product Pins
    ├── Shopping Lists
    └── Verified Merchant badges
```

## 3. Navigation Model

- **Type**: Top nav bar (desktop), bottom tab bar (mobile)
- **Desktop Top Bar**: Home, Explore, Create (+), Notifications (bell), Messages, Profile avatar, Search bar (prominent)
- **Mobile Bottom Tabs**: Home, Search, Create (+), Notifications, Profile
- **Pin Detail**: Overlay / full-screen modal; "More like this" waterfall below
- **Board Navigation**: Grid of boards → tap board → masonry grid of pins within
- **Back Behavior**: Browser-like history stack; pins can be deep-linked

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Pin | image/video, title, description, link (source URL), creator, saves count, comments | → Board(s), → Topic, → Product |
| Idea Pin | multi-page (up to 20 pages), video/image per page, music, tags, step-by-step | → Profile, → Topic |
| Board | name, description, cover, privacy (public/secret), collaborators, sections | → Pins, → Profile |
| Board Section | name, position within board | → Pins, → Board |
| Product Pin | price, availability, merchant, buy link, reviews | → Pin, → Catalog |
| Topic | name, related topics, curated Pins | → Pins, → Search |
| User Profile | display name, username, bio, avatar, website, verified status, follower count | → Boards, → Pins |
| Collection (Shopping List) | saved product pins, price tracking | → Product Pins |

## 5. User Flows

### Saving Inspiration
1. Scroll Home Feed → Tap Pin → View detail with source link
2. Tap "Save" → Select existing board or create new board
3. Pin saved to board → "More like this" suggestions appear below
4. Repeat to build a thematic collection

### Visual Search with Lens
1. Tap Search → Tap Camera icon (Lens)
2. Point camera at object (furniture, outfit, food) → Capture
3. Pinterest returns visually similar Pins and shoppable products
4. Tap result → View Pin detail → Save or shop

### Shopping Flow
1. Browse Home Feed or Search → Tap Product Pin (price badge visible)
2. View product details, price, availability, merchant info
3. Tap "Visit" → Redirect to merchant website for checkout
4. Or tap "Save to Shopping List" for price-drop notifications

## 6. URL / Route Structure

```
pinterest.com/                              # Home feed (logged in) / landing (logged out)
pinterest.com/search/pins/?q={query}        # Search results
pinterest.com/ideas/{topic}/                # Topic / category page
pinterest.com/pin/{pinId}/                  # Pin detail
pinterest.com/{username}/                   # User profile
pinterest.com/{username}/{board-slug}/      # Board view
pinterest.com/{username}/{board}/{section}/ # Board section
pinterest.com/settings/                     # Account settings
pinterest.com/business/                     # Business hub
ads.pinterest.com/                          # Ads Manager
analytics.pinterest.com/                    # Analytics dashboard
```

## 7. Search & Filter

- **Search Bar**: Keyword search with autocomplete, trending suggestions, recent searches
- **Guided Search**: Clickable filter bubbles (e.g., "modern" "minimalist" "small space") refine results contextually
- **Visual Search (Lens)**: Camera-based; crop area of an image to search for similar items
- **Search Filters**: Pins / Boards / Profiles toggle; aspect ratio, color filter for design searches
- **Shop Filter**: Filter by price range, brand, availability, verified merchant
- **Board Search**: Search within a specific board's pins
- **Home Feed Tuning**: "Hide" or "See fewer like this" to adjust algorithmic recommendations

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (< 768px) | 2-column masonry grid; bottom tab bar; full-screen pin detail; swipe to browse |
| Tablet (768–1024px) | 3–4 column masonry grid; bottom tab bar; split view for boards |
| Desktop (1024–1440px) | 5–6 column masonry grid; top nav bar; pin detail as centered overlay modal |
| Large Desktop (> 1440px) | 7+ column masonry grid; wider pin modal with side panel for "More like this" |
| Web (logged out) | Full-screen pin preview with signup wall after scroll threshold |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Anonymous Visitor | View pins (limited), search; prompted to sign up after a few interactions |
| Registered User | Save pins, create boards, follow users/topics, comment, message, shop |
| Creator Account | All user features + Idea Pins analytics, audience insights, claim website |
| Business Account | All creator features + Ads Manager, catalog upload, conversion tracking, Shopping API |
| Board Collaborator | Add/remove pins on shared board; cannot delete the board itself |
| Verified Merchant | Blue checkmark on product pins, "Verified Merchant" badge, Shop tab eligibility |
| Advertiser | Create promoted pins, set targeting, manage campaigns and budgets |
