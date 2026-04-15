---
brand: Bluesky
tagline: Social media as it should be
category: Social & Communication
website: https://bsky.app
---

# Information Architecture — Bluesky

## 1. Overview

Bluesky is a decentralized social network built on the AT Protocol (Authenticated Transfer Protocol), offering a Twitter-like microblogging experience with user sovereignty over data and algorithms. The IA mirrors familiar social feeds — timeline, notifications, profile — but adds protocol-level features like custom feeds, starter packs, domain-based identity verification, and the ability to self-host your data through Personal Data Servers (PDS).

## 2. Site Map

```
Bluesky
├── Home / Timeline
│   ├── Following (chronological)
│   ├── Discover (algorithmic)
│   └── Custom Feeds (user-subscribed)
│       ├── What's Hot
│       ├── Mutuals
│       ├── Quiet Posters
│       └── [Community-built feeds]
├── Search / Explore
│   ├── Trending Topics
│   ├── Trending Posts
│   ├── Suggested Follows
│   └── Search (posts, users, feeds)
├── Notifications
│   ├── Likes
│   ├── Reposts
│   ├── Replies
│   ├── Mentions
│   ├── Follows
│   └── Quotes
├── Messages (DMs)
│   ├── Conversations
│   └── Message Requests
├── Feeds (custom feed browser)
│   ├── My Feeds (pinned)
│   ├── Discover Feeds
│   └── Feed detail (preview + subscribe)
├── Lists
│   ├── Curation Lists
│   ├── Moderation Lists (mute/block)
│   └── List detail
├── Starter Packs
│   ├── My Starter Packs
│   └── Starter Pack detail (follow all)
├── Profile
│   ├── Posts
│   ├── Replies
│   ├── Media
│   ├── Likes
│   ├── Feeds (created)
│   ├── Lists (created)
│   ├── Starter Packs (created)
│   ├── Followers / Following
│   └── Domain handle (identity)
├── Settings
│   ├── Account
│   ├── Privacy
│   ├── Moderation
│   │   ├── Content Filters
│   │   ├── Muted Words
│   │   ├── Muted Accounts
│   │   ├── Blocked Accounts
│   │   └── Moderation Lists
│   ├── App Passwords
│   ├── Handle Change
│   └── Export Data
└── Web / Docs
    ├── AT Protocol Documentation
    ├── Developer API
    ├── Community Guidelines
    └── Blog
```

## 3. Navigation Model

- **Type**: Left sidebar (desktop) / bottom tab bar (mobile)
- **Desktop Sidebar**: Home, Search, Notifications, Messages, Feeds, Lists, Profile, Settings
- **Mobile Bottom Tabs**: Home, Search, Notifications, Messages, Profile
- **Feed Switcher**: Horizontal tabs at top of Home — Following, Discover, pinned custom feeds
- **Compose**: Floating "+" button (mobile) / "New Post" button in sidebar (desktop)
- **Thread Navigation**: Tap post → thread view with parent and replies

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Post | text (300 chars), images (4 max), video, link card, language tag, timestamp, like/repost/reply counts | → Thread, → Author, → Feed(s) |
| Reply | inherits Post + parent reference, root reference | → Thread, → Parent Post |
| Repost | reference to original post, timestamp | → Post, → User |
| Quote Post | inherits Post + embedded quoted post | → Original Post |
| Custom Feed | name, description, algorithm (feed generator), creator, like count | → Posts (filtered/sorted) |
| List | name, description, type (curation/moderation), members | → Users |
| Starter Pack | name, description, included users, included feeds, creator | → Users, → Feeds |
| User Profile | display name, handle (domain-based), avatar, banner, bio, follower/following counts | → Posts, → Feeds, → Lists |
| Label | type (content warning, moderation), source (labeler service) | → Post, → User |

## 5. User Flows

### Custom Feed Discovery
1. Tap "Feeds" in nav → Browse "Discover Feeds" section
2. Preview feed (see sample posts) → Tap "Pin" to add to home tab bar
3. Return to Home → Swipe between Following, Discover, and pinned custom feeds
4. Reorder or unpin feeds in Settings → Saved Feeds

### Setting Up Domain Handle
1. Go to Settings → Handle → "I have my own domain"
2. Add DNS TXT record `_atproto.{domain}` with DID value
3. Verify → Handle changes from `user.bsky.social` to `user.com`
4. Domain serves as decentralized identity verification

### Using Starter Packs
1. Receive starter pack link from another user
2. Open link → See list of recommended accounts and feeds
3. Tap "Follow All" → Instantly follow all accounts in pack
4. Subscribed feeds added to Home feed tabs

## 6. URL / Route Structure

```
bsky.app/                                  # Home / timeline
bsky.app/profile/{handle}                  # User profile
bsky.app/profile/{handle}/post/{postId}    # Post / thread detail
bsky.app/profile/{handle}/feed/{feedSlug}  # Custom feed
bsky.app/profile/{handle}/lists/{listId}   # List detail
bsky.app/starter-pack/{handle}/{packId}    # Starter pack
bsky.app/search?q={query}                  # Search results
bsky.app/feeds                             # Feed discovery
bsky.app/notifications                     # Notifications
bsky.app/messages                          # DMs
bsky.app/settings                          # Settings
docs.bsky.app/                             # Developer documentation
```

## 7. Search & Filter

- **Universal Search**: Posts (full-text), users (handle/display name), feeds
- **Trending**: Trending topics and posts on Explore tab
- **Post Filters**: Search results filterable by "Latest" or "Top"; filter by language
- **Content Filters**: User-configurable content labels (adult, violence, etc.) via moderation settings
- **Muted Words**: Keyword-based muting hides posts containing specified terms
- **Feed Algorithms**: Custom feeds act as persistent search/filter — e.g., "Posts with images from mutuals"
- **Moderation Lists**: Subscribe to community-maintained block/mute lists

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (< 768px) | Bottom tab bar; single-column feed; full-screen thread view; swipe between feed tabs |
| Tablet (768–1024px) | Bottom tab bar; wider feed column; optional right sidebar for trending |
| Desktop (> 1024px) | Left sidebar navigation; centered feed column; right sidebar (trending, suggested follows) |
| PWA | Installable progressive web app; notifications support; works offline for cached content |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Registered User | Post, reply, repost, quote, like, DM, create feeds/lists/starter packs, customize moderation |
| Custom Handle User | Uses own domain as handle; serves as verification (no separate verification system) |
| Feed Generator Operator | Hosts feed algorithm; defines ranking/filtering logic via AT Protocol feed generator API |
| Labeler Service | Applies moderation labels to content/accounts; users can subscribe to labeler services |
| PDS Self-Hoster | Hosts own data server; full data sovereignty; can migrate between providers |
| Non-registered Visitor | View public profiles and posts on bsky.app; cannot interact |
| Muted/Blocked User | Muted: posts hidden from muter's feeds; Blocked: cannot view or interact with blocker |
| App Password Holder | Third-party app access with limited permissions; revocable from settings |
