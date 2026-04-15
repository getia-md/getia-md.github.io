---
brand: Mercari
tagline: The selling app. Sell almost anything.
category: E-Commerce & Fintech
website: https://www.mercari.com
---

# Information Architecture — Mercari

## 1. Overview
Mercari is a consumer-to-consumer (C2C) marketplace where anyone can buy and sell almost anything — from clothing and electronics to home goods and collectibles. The IA revolves around **listing simplicity** (photo-first listing in minutes), **buyer protection** (item authentication for luxury goods, money-back guarantee), and **prepaid shipping labels** that remove friction. Mercari's architecture supports both web and app with near-feature-parity.

## 2. Site Map

```
mercari.com
├── Home (personalized feed)
├── Browse
│   ├── Categories
│   │   ├── Women's
│   │   ├── Men's
│   │   ├── Electronics
│   │   ├── Home
│   │   ├── Toys & Games
│   │   ├── Sports
│   │   └── ... (20+ categories)
│   ├── Brands
│   ├── Trending
│   └── Deals
├── Search
│   ├── Results
│   ├── Saved searches
│   └── Search alerts
├── Sell
│   ├── List an item
│   ├── Shipping options
│   ├── Smart pricing
│   └── Seller dashboard
├── Item Detail Page
│   ├── Photos
│   ├── Description
│   ├── Seller info
│   ├── Shipping details
│   ├── Make an offer
│   ├── Buy now
│   └── Authenticate (luxury)
├── Mercari Authenticate
│   ├── How it works
│   └── Eligible brands
├── My Page (Profile)
│   ├── Listings
│   ├── Purchases
│   ├── Offers (sent/received)
│   ├── Balance & earnings
│   ├── Reviews
│   └── Settings
├── Help Center
│   ├── Buying
│   ├── Selling
│   ├── Shipping
│   ├── Returns
│   └── Contact
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Prohibited items
└── Auth
    ├── Log in
    └── Sign up
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top bar | Logo, Search bar (prominent), Browse, Sell button, Inbox, Profile, Cart |
| Browse | Category sidebar + filters | Category tree, price range, condition, brand |
| Footer | Multi-column | Categories, Resources, Company, Legal, App badges |
| App | Bottom tab bar | Home, Search, Sell (camera icon), Inbox, My Page |

**Key pattern**: Search bar is the dominant navigation element. The "Sell" button is always visible as a persistent CTA, reflecting the two-sided marketplace model.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Listing | title, photos (up to 12), description, price, condition, category, brand, size, shipping method, seller |
| Offer | listing, buyer, amount, expiration, counter-offer, status |
| User Profile | username, avatar, rating, reviews count, listings, verified badge |
| Transaction | listing, buyer, seller, price, shipping tracking, status (purchased → shipped → delivered → rated) |
| Shipping Label | carrier, tracking number, estimated delivery, prepaid flag |
| Authentication | listing, status (pending/authentic/not authentic), certificate |

## 5. User Flows

### 5a. List an item
1. Tap "Sell" → camera opens → take/upload photos
2. AI auto-suggests title, category, brand from photo
3. Fill in details (condition, description, price)
4. Select shipping (prepaid label or ship on your own)
5. Enable Smart Pricing (auto price drops) → Publish

### 5b. Buy an item
1. Search or browse → find item → view detail page
2. "Buy Now" or "Make an Offer" (negotiate)
3. Checkout → select payment method (credit, debit, Mercari balance)
4. Seller ships → tracking visible to buyer
5. Item delivered → buyer confirms → rate seller → funds released

### 5c. Authenticate luxury item
1. Seller lists luxury item → opts into Mercari Authenticate
2. Buyer purchases → item ships to Mercari authentication center
3. Expert inspection → item verified authentic
4. Forwarded to buyer with authentication certificate

## 6. URL / Route Structure

```
/                           → Home feed
/search/                    → Search results
/search/?keyword={q}        → Keyword search
/category/{id}/             → Category browse
/item/{item-id}/            → Item detail page
/sell/                      → List new item
/mypage/                    → User profile/dashboard
/mypage/listings/           → Active listings
/mypage/purchases/          → Purchase history
/mypage/balance/            → Earnings & balance
/authenticate/              → Authentication info
/help/                      → Help center
/help/{category}/           → Help category
/help/{category}/{article}/ → Help article
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Global search | Autocomplete, recent searches, trending terms, photo search |
| Filters | Category, price range, condition (new/like new/good/fair/poor), brand, size, color |
| Sort | Relevance, newest, price low-high, price high-low, likes |
| Saved search | Save criteria → push notification when new match listed |
| Smart pricing alerts | Buyer gets notified when watched item drops in price |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Multi-column grid (4-5 items), sidebar filters, full item detail |
| Tablet (768–1023px) | 3-column grid, collapsible filters |
| Mobile (<768px) | 2-column grid, bottom sheet filters, floating sell button |
| App (iOS/Android) | Bottom tabs, camera-first sell flow, swipeable photos, push notifications |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Browse, search, view items (cannot buy or sell) |
| Logged-in User | Buy, sell, make offers, message sellers, reviews |
| Verified User | Higher selling limits, direct deposit of earnings |
| Seller | Listing management, earnings dashboard, shipping labels |
| Buyer | Purchase history, returns, order tracking |
| Internal Moderator | Listing review, prohibited items enforcement, dispute resolution |
| Authentication Team | Luxury item verification, certificate issuance |
