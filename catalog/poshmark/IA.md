---
brand: Poshmark
tagline: Social commerce. Sell and shop, powered by community.
category: E-Commerce & Fintech
website: https://www.poshmark.com
---

# Information Architecture — Poshmark

## 1. Overview
Poshmark is a social commerce marketplace for new and secondhand fashion, home, and beauty. Its differentiator is the **social selling model** — Posh Parties (themed live shopping events), sharing listings to boost visibility, bundles for multi-item purchases, and an offer/counter-offer negotiation system. The IA treats every user as both a buyer and a seller, with the closet (profile) as the storefront and sharing as the primary growth mechanic.

## 2. Site Map

```
poshmark.com
├── Home (feed)
├── Browse
│   ├── Women
│   ├── Men
│   ├── Kids
│   ├── Home
│   ├── Beauty
│   ├── Pets
│   ├── Electronics
│   ├── Luxury (Posh Authenticate)
│   └── Boutiques
├── Brands
│   ├── A-Z directory
│   └── /{brand-name}
├── Posh Parties
│   ├── Upcoming parties
│   ├── Current parties
│   ├── Past parties
│   └── Party detail (themed: "Best in Shoes", "Nike Party", etc.)
├── Sell
│   ├── List an item
│   ├── Seller tools
│   ├── Posh Ambassador program
│   └── Shipping guide (prepaid labels)
├── Listing Page
│   ├── Photos
│   ├── Description & details
│   ├── Size, brand, condition
│   ├── Buy now / Make offer
│   ├── Bundle (add to bundle with same seller)
│   ├── Comments
│   ├── Share / Like
│   └── Seller closet link
├── Closet (User Profile)
│   ├── Available listings
│   ├── Sold items
│   ├── About
│   ├── Meet the Posher
│   ├── Love Notes (reviews)
│   └── Followers / Following
├── My Closet (Dashboard)
│   ├── My listings
│   ├── My purchases
│   ├── My offers (sent/received)
│   ├── My bundles
│   ├── My earnings
│   ├── Posh Stats
│   └── Settings
├── Help Center
│   ├── Buying
│   ├── Selling
│   ├── Shipping & returns
│   ├── Posh Protect
│   └── Contact
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Seller policy
└── Auth
    ├── Log in
    └── Sign up
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top bar | Logo, Search, Browse (categories), Posh Parties, Sell, notifications, Profile |
| Browse | Category mega-menu | Departments → Categories → Subcategories, Brand browse |
| Listing | Action bar | Buy, Offer, Bundle, Share, Like, Comment |
| Footer | Multi-column | Categories, Company, Resources, Legal, App badges |
| App | Bottom tabs | Feed, Shop, Sell (+), Closet, Account |

**Key pattern**: "Share" is a primary action — sharing your own or others' listings to followers and parties is how items get visibility. The feed is a social timeline of shared listings.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Listing | photos (up to 16), title, description, size, brand, category, original price, listing price, condition, likes, comments, shares |
| Closet (User) | username, avatar, bio, cover photo, listings count, followers, following, Love Notes, Posh Ambassador status |
| Offer | listing, buyer, amount, counter-amount, expiration (24h), status |
| Bundle | seller, buyer, items list, bundle discount, offer, shipping |
| Posh Party | theme, date/time, host(s), listed items, duration |
| Love Note (Review) | buyer, seller, listing, rating, comment, photo |

## 5. User Flows

### 5a. Buy with offer
1. Browse/search → find listing → "Make an Offer"
2. Enter offer amount (must meet minimum % of listing price)
3. Seller receives → Accept / Counter / Decline within 24h
4. If accepted → buyer charged → seller ships with prepaid label
5. Item delivered → buyer accepts or opens case → seller paid after 3 days

### 5b. Create a bundle
1. Visit a seller's closet → add multiple items to bundle
2. Seller sees bundle → offers bundle discount
3. Buyer can also make an offer on the bundle
4. Single checkout, single shipping for all items

### 5c. Posh Party participation
1. View upcoming parties → join a themed party (e.g., "Date Night Style")
2. Share eligible listings to the party
3. Browse party listings → like, share, buy
4. Host picks "Host Picks" — featured listings get extra visibility

### 5d. Sell an item
1. Tap "Sell" → photo first (up to 16 photos)
2. Fill in brand, size, category, condition, price
3. Publish → share to feed, parties, followers
4. Buyer purchases → prepaid USPS label generated → ship within 3 days
5. Earnings credited to Posh balance after buyer accepts

## 6. URL / Route Structure

```
/                           → Home feed
/search?query={q}           → Search results
/category/{department}/     → Department browse
/brand/{brand-name}/        → Brand listings
/listing/{listing-id}       → Listing detail
/closet/{username}          → User closet (shop)
/closet/{username}/about    → Meet the Posher
/parties/                   → Posh Parties index
/party/{party-id}           → Party detail
/sell/                      → List item
/account/                   → Dashboard (auth)
/account/listings/          → My listings (auth)
/account/offers/            → My offers (auth)
/account/earnings/          → My earnings (auth)
/help/                      → Help center
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Global search | By keyword, brand, seller; autocomplete with suggestions |
| Filters | Category, size, brand, price range, condition (NWT/NWOT/Good/Fair), color |
| Sort | Just Shared, Recently Reduced, Lowest Price, Highest Price, Relevance |
| Brand browse | A-Z directory, popular brands, brand + category combos |
| Saved search | Push alerts when new matching listings posted |
| My Closet filter | Available, sold, drafts, price drops needed |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | 4-5 column listing grid, sidebar filters, full closet view |
| Tablet (768–1023px) | 3-column grid, collapsible filters |
| Mobile (<768px) | 2-column grid, bottom-sheet filters, sticky sell button |
| App (iOS/Android) | Bottom tabs, swipe-to-share, camera-first sell, party notifications |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Browse, search, view listings and closets |
| Logged-in User | Buy, sell, offer, bundle, share, like, comment, follow |
| Posh Ambassador | Verified badge, community leader perks, party hosting eligibility |
| Suggested User | Boosted visibility, onboarding mentor for new users |
| Seller | Earnings dashboard, shipping labels, Posh Stats analytics |
| Internal Moderator | Listing review, counterfeit detection, dispute resolution |
| Authentication Team | Posh Authenticate for luxury items ($500+) |
