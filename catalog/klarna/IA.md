---
brand: Klarna
tagline: Smoooth shopping. Pay later.
category: E-Commerce & Fintech
website: https://www.klarna.com
---

# Information Architecture — Klarna

## 1. Overview
Klarna is a global buy-now-pay-later (BNPL) platform that lets shoppers split purchases into 4 interest-free installments, pay in 30 days, or finance over time. The IA centers on a dual audience: **consumers** seeking flexible checkout and a shopping discovery experience, and **merchants** looking to integrate Klarna's payment solutions. The Klarna app extends the experience with a full shopping hub, price-drop alerts, and a one-time card for in-store use.

## 2. Site Map

```
klarna.com
├── Home
├── Shopping (Consumer)
│   ├── What is Klarna
│   ├── Pay in 4
│   ├── Pay in 30 days
│   ├── Financing (monthly payments)
│   ├── Klarna Card
│   ├── One-time card
│   └── Klarna App
│       ├── Shopping feed
│       ├── Deals & offers
│       ├── Wish lists
│       └── Price-drop notifications
├── Stores / Shop Directory
│   ├── Browse by category
│   ├── Featured stores
│   └── Store detail page
├── Business (Merchant)
│   ├── Payment solutions
│   ├── On-site messaging
│   ├── Checkout integration
│   ├── Pricing
│   ├── Platforms & partners
│   └── Developer docs
├── About
│   ├── Company
│   ├── Careers
│   ├── Press
│   ├── Sustainability
│   └── Investor relations
├── Support / Help Center
│   ├── Consumer FAQ
│   ├── Merchant FAQ
│   └── Contact
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Cookie policy
└── Auth
    ├── Log in (consumer / merchant)
    └── Sign up
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top nav bar | Logo, Shopping, Business, Log in / Sign up, country selector |
| Consumer | Mega-menu | Products (Pay in 4, Financing, Klarna Card), App, Stores |
| Business | Mega-menu | Solutions, Pricing, Platforms, Docs, Get started CTA |
| Footer | Multi-column | About, Products, Support, Legal, Social links, App store badges |
| Mobile | Hamburger + bottom tab (app) | Simplified nav, app-like store browsing |

**Key pattern**: Audience split at the top level — consumer vs. business — with a sticky "Get the app" CTA on mobile viewports.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Payment Product | name, description, eligibility, how-it-works steps, merchant availability |
| Store | name, logo, categories, Klarna products accepted, URL, offers |
| Deal / Offer | store, discount %, expiry, terms, featured flag |
| Help Article | title, body, category, audience (consumer/merchant), related articles |
| Press Release | date, title, body, region, media assets |
| Developer Doc | title, endpoint, code samples, SDK, version |

## 5. User Flows

### 5a. Consumer — Pay in 4 checkout
1. Browse store directory or shop externally → choose Klarna at checkout
2. Log in / sign up (email + phone verification)
3. Instant soft-credit approval → see 4-payment schedule
4. Confirm → order placed, 1st payment charged
5. Remaining 3 auto-charged biweekly → tracked in app/dashboard

### 5b. Merchant — Integration
1. Land on Business page → select platform (Shopify, WooCommerce, custom)
2. Review pricing & terms → Sign up
3. Access Merchant Portal → install plugin / API keys
4. Configure checkout options → test in sandbox
5. Go live → monitor via Merchant Dashboard

### 5c. Shopping discovery (app)
1. Open Klarna app → browsing feed of curated deals
2. Search or browse by category → view store/product
3. Add to wish list → receive price-drop notification
4. Tap "Buy" → checkout with Klarna, choose payment plan

## 6. URL / Route Structure

```
/                           → Home
/shopping/                  → Consumer landing
/pay-in-4/                  → Pay in 4 product
/monthly-financing/         → Financing product
/klarna-card/               → Klarna Card
/stores/                    → Store directory
/stores/{slug}/             → Individual store
/business/                  → Merchant landing
/business/products/         → Solutions overview
/business/pricing/          → Pricing
/docs/                      → Developer documentation
/about/                     → Company info
/customer-service/          → Help center
/customer-service/{topic}/  → Help article
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Store search | Autocomplete, category suggestions, recent searches |
| Category filter | Fashion, Electronics, Home, Beauty, etc. |
| Deal filtering | Sort by discount %, new arrivals, trending |
| Help search | Keyword → article results, grouped by consumer/merchant |
| Country/locale | Changes store availability, currency, legal terms |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full mega-menu, multi-column store grid, side-by-side product comparison |
| Tablet (768–1023px) | Condensed nav, 2-column grid, collapsible sections |
| Mobile (<768px) | Hamburger menu, single-column, bottom-fixed "Get the app" banner, swipeable deal cards |
| Klarna App | Native bottom tabs (Home, Search, Purchases, Profile), pull-to-refresh feed |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Browse stores, view products, read help |
| Logged-in Consumer | Pay in 4, financing, purchase history, wish lists, one-time card |
| Klarna Card Holder | Physical/virtual card management, cashback rewards |
| Merchant Admin | Dashboard, settlements, integration settings, analytics |
| Merchant Developer | API keys, sandbox, docs, webhook configuration |
| Internal Admin | User management, risk review, compliance tools |
