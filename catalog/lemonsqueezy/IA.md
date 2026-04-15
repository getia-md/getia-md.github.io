---
brand: Lemon Squeezy
tagline: Payments, tax & subscriptions for software companies.
category: E-Commerce & Fintech
website: https://www.lemonsqueezy.com
---

# Information Architecture — Lemon Squeezy

## 1. Overview
Lemon Squeezy is an all-in-one platform for selling digital products and SaaS subscriptions, acting as a **merchant of record** — meaning it handles global tax compliance (VAT, GST, sales tax), payment processing, and fraud prevention on behalf of the seller. The IA is developer-friendly, with a clean dashboard, robust API, and focus on simplifying the business side of selling software, digital downloads, and subscriptions.

## 2. Site Map

```
lemonsqueezy.com
├── Home
├── Features
│   ├── Payments
│   ├── Subscriptions
│   ├── Global tax compliance
│   ├── Fraud prevention
│   ├── Checkout
│   ├── Email marketing
│   ├── Affiliates
│   ├── License keys (software)
│   ├── Customer portal
│   └── Analytics & reporting
├── Pricing
├── Customers
│   ├── SaaS companies
│   ├── Digital creators
│   ├── Course creators
│   └── Case studies
├── Developers
│   ├── API documentation
│   ├── Webhooks
│   ├── SDKs (JS, Python, etc.)
│   ├── Checkout.js (embedded)
│   └── Changelog
├── Store / Product Page
│   ├── /{store}/{product}
│   ├── Product description
│   ├── Pricing / variants
│   ├── Buy / Subscribe button
│   └── Checkout overlay
├── Dashboard (Auth)
│   ├── Overview (revenue, MRR, customers)
│   ├── Products
│   │   ├── Create / Edit
│   │   ├── Variants
│   │   ├── Files
│   │   └── License keys
│   ├── Stores
│   ├── Orders
│   ├── Subscriptions
│   ├── Customers
│   ├── Discounts
│   ├── Email
│   ├── Affiliates
│   ├── Payouts
│   └── Settings
├── Blog
├── Help Center
│   ├── Getting started
│   ├── Products & stores
│   ├── Payments & tax
│   ├── Subscriptions
│   ├── API & integrations
│   └── Contact
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── DPA
└── Auth
    ├── Log in
    └── Sign up
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top nav | Logo, Features, Pricing, Customers, Developers, Log in, Sign up CTA |
| Features | Dropdown grid | Payments, Subscriptions, Tax, Checkout, Email, Affiliates, License Keys |
| Developers | Dropdown | API Docs, Webhooks, SDKs, Changelog |
| Dashboard | Left sidebar | Overview, Products, Stores, Orders, Subscriptions, Customers, Discounts, Email, Affiliates, Payouts, Settings |
| Footer | Multi-column | Product, Developers, Resources, Company, Legal |

**Key pattern**: Merchant-of-record positioning is front and center — "We handle tax so you don't have to" drives the feature hierarchy. Developer docs are a top-level navigation item, reflecting the technical audience.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Product | name, description, media, variants, price, files, license key config, store |
| Variant | name, price, description, license activation limit, files |
| Store | name, slug, currency, domain, logo, theme |
| Order | customer, product, variant, amount, tax collected, status, payment method |
| Subscription | customer, product, plan, interval, status (active/paused/cancelled), MRR contribution |
| Customer | email, name, orders, subscriptions, lifetime value, portal access |
| License Key | key string, product, activation limit, activations used, status, expiry |
| Discount | code, type (% or fixed), applies to (product/store), usage limit, expiry |
| Payout | period, gross, fees, tax remitted, net, status |

## 5. User Flows

### 5a. Seller — Set up a product
1. Sign up → create a Store (name, slug, currency)
2. Add Product → name, description, upload files or set license key rules
3. Set pricing / variants → configure checkout (overlay or hosted page)
4. Lemon Squeezy handles tax calculation, collection, and remittance
5. Share product URL or embed checkout on own site → start selling

### 5b. Buyer — Purchase
1. Visit product page or embedded checkout
2. Select variant → enter email and payment info
3. Tax auto-calculated based on buyer location
4. Pay → receive email with download link / license key / account access
5. Access customer portal for subscription management

### 5c. SaaS license key flow
1. Seller configures product with license key settings (activation limit, expiry)
2. Buyer purchases → unique license key generated
3. Buyer activates license in software (API call to validate)
4. Lemon Squeezy API returns activation status → software unlocked
5. Seller tracks activations in dashboard

### 5d. Subscription management
1. Customer subscribes → recurring billing on interval
2. Customer accesses portal → update payment, change plan, cancel
3. Seller sees MRR, churn, LTV in dashboard
4. Dunning emails auto-sent for failed payments

## 6. URL / Route Structure

```
/                               → Home
/features/                      → Features overview
/features/{feature-slug}/       → Individual feature
/pricing/                       → Pricing
/customers/                     → Case studies
/docs/api/                      → API documentation
/docs/api/{endpoint}/           → API endpoint detail
/changelog/                     → Product changelog
/{store-slug}/                  → Store page
/{store-slug}/{product-slug}/   → Product page
/checkout/buy/{variant-id}      → Checkout
/blog/                          → Blog
/blog/{slug}/                   → Blog post
/help/                          → Help center
/help/{category}/{article}/     → Help article
/app/                           → Dashboard (auth)
/app/products/                  → Products (auth)
/app/orders/                    → Orders (auth)
/app/subscriptions/             → Subscriptions (auth)
/billing/                       → Customer portal (buyer auth)
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| API docs search | Full-text search across endpoints, guides, examples |
| Dashboard — Orders | Filter by product, status, date range, customer |
| Dashboard — Subscriptions | Filter by status (active/cancelled/past due), product, plan |
| Dashboard — Customers | Search by email, filter by LTV, product purchased |
| Help search | Keyword search with categorized results |
| Changelog | Chronological, filterable by feature area |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full nav, feature grid, dashboard with charts, side-by-side API docs |
| Tablet (768–1023px) | Condensed nav, stacked feature cards, collapsible sidebar |
| Mobile (<768px) | Hamburger menu, single-column, simplified dashboard, mobile-optimized checkout |
| Embedded checkout | Responsive overlay that adapts to host page width |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Marketing pages, pricing, docs, blog |
| Seller (Free) | Full platform access, Lemon Squeezy takes % + fixed fee per transaction |
| Team Member | Configurable permissions per store (view only, manage products, manage finances) |
| Buyer / Customer | Purchase, download, license activation, customer portal, subscription management |
| Affiliate | Unique referral links, commission dashboard, payout tracking |
| Internal Admin | Merchant review, fraud detection, payout processing, tax compliance |
