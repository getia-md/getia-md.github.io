---
brand: Depop
tagline: The creative community's marketplace.
category: E-Commerce & Fintech
website: https://www.depop.com
---

# Information Architecture — Depop

## 1. Overview
Depop is a social shopping platform targeting Gen-Z, focused on secondhand fashion, vintage clothing, and unique/handmade items. The IA blends **social media patterns** (follow sellers, like items, explore feed) with **marketplace mechanics** (buy, sell, ship). The Explore page is the heart of discovery — curated edits, trending styles, and algorithmically surfaced items create a scrollable, Instagram-like experience for fashion resale.

## 2. Site Map

```
depop.com
├── Home
├── Explore
│   ├── For You (algorithmic feed)
│   ├── Trending
│   ├── Edits (curated collections)
│   ├── Top sellers
│   └── Depop Picks
├── Search
│   ├── Results grid
│   ├── Category browse
│   │   ├── Womenswear
│   │   ├── Menswear
│   │   ├── Jewelry & Accessories
│   │   ├── Bags
│   │   ├── Shoes
│   │   └── Home & Tech
│   └── Style tags (Y2K, Cottagecore, Streetwear, etc.)
├── Sell
│   ├── List an item
│   ├── Seller hub
│   ├── Shipping guide
│   └── Seller tips / blog
├── Item Page
│   ├── Photos
│   ├── Description
│   ├── Size & condition
│   ├── Seller profile link
│   ├── Buy / Make offer
│   ├── Like / Save
│   └── Share
├── User Profile (Shop)
│   ├── Bio & avatar
│   ├── Listings
│   ├── Reviews
│   ├── Followers / Following
│   └── Sold items
├── Messages (DMs)
├── Help
│   ├── Buying
│   ├── Selling
│   ├── Shipping & returns
│   ├── Safety
│   └── Contact
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Community guidelines
└── Auth
    ├── Log in
    └── Sign up
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top bar | Logo, Search bar, Explore, Sell, Messages, Profile, Cart |
| Explore | Horizontal tabs | For You, Trending, Edits, Categories |
| Category | Filter bar | Style, size, price, condition, color, brand, sort |
| Footer | Compact | About, Help, Legal, Social links, App badges |
| App | Bottom tab bar | Home, Search, Sell (+), Inbox, Profile |

**Key pattern**: Social-first navigation — the explore/feed experience dominates. User profiles function as storefronts, blending social following with commerce.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Item | photos (up to 4), description, price, size, condition, brand, category, style tags, likes count |
| User / Shop | username, avatar, bio, location, followers, following, listings, reviews, verified seller badge |
| Edit (Curated) | title, description, items list, editor, cover image |
| Review | buyer, seller, rating (1-5 stars), comment, transaction date |
| Message Thread | participants, messages, item reference, timestamps |
| Style Tag | name (e.g., "Y2K", "Grunge"), associated items count |

## 5. User Flows

### 5a. Browse & buy
1. Open Explore → scroll "For You" feed or browse edits
2. Tap item → view photos, description, seller reviews
3. "Buy" or "Make an offer"
4. Checkout (Apple Pay, card, PayPal) → confirm
5. Seller ships → buyer receives → leave review

### 5b. List & sell
1. Tap Sell (+) → take/upload up to 4 photos
2. Add description, brand, size, condition, price
3. Add style tags (e.g., #vintage #y2k #streetwear)
4. Choose shipping option → publish
5. Item appears in your shop and in search/explore

### 5c. Social engagement
1. Discover seller on Explore → view their shop/profile
2. Follow seller → their new listings appear in your feed
3. Like items → saved to your likes; seller gets notification
4. DM seller with questions → negotiate or discuss

## 6. URL / Route Structure

```
/                           → Home
/explore/                   → Explore / For You
/search/?q={query}          → Search results
/category/{slug}/           → Category browse
/products/{item-id}/        → Item detail page
/sell/                      → List new item
/{username}/                → User shop / profile
/{username}/reviews/        → Seller reviews
/messages/                  → Message inbox
/likes/                     → Liked items (auth)
/help/                      → Help center
/help/{topic}/              → Help article
/blog/                      → Seller tips & style guides
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Global search | Autocomplete, trending searches, recent searches |
| Filters | Category, subcategory, size, price range, condition, brand, color, style tag |
| Sort | Relevance, newest, price low-high, price high-low |
| Style tags | Clickable tags (#vintage, #y2k) that filter results |
| Saved search | Notifications when new items match |
| Explore algorithm | Personalized based on likes, follows, browse history |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | 4-column item grid, sidebar filters, full seller profiles |
| Tablet (768–1023px) | 3-column grid, top filter bar |
| Mobile (<768px) | 2-column grid, bottom-sheet filters, swipeable photos |
| App (iOS/Android) | Bottom tabs, camera-first sell, pull-to-refresh feed, push notifications for likes/messages |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Browse, search, view items and profiles |
| Logged-in User | Buy, sell, like, follow, message, reviews |
| Verified Seller | Verification badge, boosted visibility |
| Top Seller | Featured in Explore, analytics dashboard |
| Internal Moderator | Content moderation, counterfeit review, dispute resolution |
| Editorial Team | Create Edits, featured collections, Depop Picks |
