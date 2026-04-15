---
brand: BigCommerce
tagline: Ecommerce for a new era. Enterprise power, simplified.
category: E-Commerce & Fintech
website: https://www.bigcommerce.com
---

# Information Architecture — BigCommerce

## 1. Overview
BigCommerce is an enterprise-grade SaaS e-commerce platform offering hosted storefronts, headless commerce via API, multi-storefront capabilities, and an extensive app marketplace. The IA serves three audiences: **merchants** evaluating the platform, **developers** building integrations, and **partners/agencies** reselling or implementing BigCommerce. Unlike self-hosted WooCommerce, BigCommerce is fully managed — hosting, security, and updates are handled by the platform.

## 2. Site Map

```
bigcommerce.com
├── Home
├── Product
│   ├── Platform overview
│   ├── Storefront
│   │   ├── Stencil (theme engine)
│   │   ├── Page Builder
│   │   └── Headless commerce
│   ├── Multi-Storefront
│   ├── B2B Edition
│   ├── Omnichannel (Amazon, eBay, social, POS)
│   ├── Payments
│   ├── Shipping
│   ├── International & multi-currency
│   ├── SEO
│   └── Security & reliability
├── Solutions
│   ├── By industry (Fashion, Food, B2B, etc.)
│   ├── By business size (SMB, Mid-market, Enterprise)
│   ├── Headless commerce
│   ├── Multi-storefront
│   └── B2B
├── Pricing
│   ├── Standard / Plus / Pro / Enterprise
│   └── Feature comparison
├── Apps & Integrations
│   ├── App marketplace
│   ├── Browse by category
│   ├── Featured apps
│   ├── Free apps
│   └── App detail page
├── Developers
│   ├── API documentation
│   ├── SDKs & tools
│   ├── Stencil theme docs
│   ├── Headless / Storefront API
│   ├── BigDesign (component library)
│   └── Developer community
├── Partners
│   ├── Partner program
│   ├── Agency directory
│   ├── Technology partners
│   └── Become a partner
├── Resources
│   ├── Blog
│   ├── Case studies
│   ├── Webinars
│   ├── Guides & reports
│   ├── University (learning center)
│   └── Community forum
├── Support
│   ├── Help center
│   ├── Knowledge base
│   ├── System status
│   └── Contact
├── About
│   ├── Company
│   ├── Careers
│   ├── Press
│   └── Trust & security
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── SLA
└── Auth
    ├── Log in
    └── Start free trial
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top nav | Logo, Products, Solutions, Pricing, Apps, Resources, Request Demo, Start Trial |
| Products | Mega-menu | Platform features organized by capability area |
| Solutions | Mega-menu | By industry, by size, by use case |
| Developer | Separate docs site | Left sidebar with API reference, guides, tutorials |
| Control Panel | Left sidebar | Orders, Products, Customers, Marketing, Analytics, Channel Manager, Apps, Settings |
| Footer | Multi-column | Product, Solutions, Partners, Resources, Company, Legal |

**Key pattern**: The marketing site is comparison-oriented (vs. Shopify, vs. WooCommerce), with ROI calculators and migration guides. The developer docs are a separate subdomain with their own IA.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Product (Platform Feature) | name, description, benefits, screenshots, related features |
| App (Marketplace) | name, developer, description, price, rating, reviews, category, compatibility |
| Case Study | merchant, industry, challenge, solution, results, quote, URL |
| Plan | name (Standard/Plus/Pro/Enterprise), price, features, limits |
| Blog Post | title, author, date, category, body, CTA |
| API Endpoint | resource, methods, parameters, examples, versioning |

### Merchant Store Content Model

| Entity | Attributes |
|--------|-----------|
| Product | name, SKU, price, variants (size/color), images, description, categories, brand, custom fields, inventory |
| Category | name, description, image, parent, sort order |
| Order | number, customer, items, total, status, payment, shipping, channel |
| Customer | name, email, addresses, groups, order history, account |
| Storefront | name, domain, channel, locale, currency |

## 5. User Flows

### 5a. Merchant — Evaluate & sign up
1. Land on home → explore Product features or Solutions by industry
2. View pricing → compare plans → start free trial
3. Onboarding wizard → store name, industry, products
4. Add products, configure payments, choose theme
5. Customize with Page Builder → launch store

### 5b. Merchant — Multi-storefront
1. Create primary store → go to Channel Manager
2. Add new storefront → assign domain, locale, currency
3. Share product catalog or create storefront-specific products
4. Unique themes per storefront → launch multiple brands from one dashboard

### 5c. Developer — Headless build
1. Visit developer docs → Storefront API / GraphQL reference
2. Choose frontend framework (Next.js, Gatsby, etc.)
3. Use BigCommerce as backend (products, cart, checkout API)
4. Build custom frontend → connect via API keys
5. Deploy independently → BigCommerce handles commerce logic

### 5d. Partner — Agency implementation
1. Join Partner Program → access resources, training
2. Client engagement → migrate or build store on BigCommerce
3. Use Stencil CLI for theme development, API for custom integrations
4. Launch client store → ongoing management via Control Panel

## 6. URL / Route Structure

```
# Marketing site
/                               → Home
/product/                       → Platform overview
/product/{feature}/             → Feature detail
/solutions/{industry}/          → Industry solution
/essentials/pricing/            → Pricing & plans
/apps/                          → App marketplace
/apps/{category}/               → App category
/apps/{app-slug}/               → App detail
/partners/                      → Partner program
/resources/blog/                → Blog
/resources/blog/{slug}/         → Blog post
/case-studies/{slug}/           → Case study
/support/                       → Help center

# Developer docs (developer.bigcommerce.com)
/docs/                          → Docs home
/docs/rest-management/          → REST API reference
/docs/storefront/               → Storefront API
/docs/stencil-docs/             → Theme development

# Merchant store (customizable)
/                               → Storefront home
/categories/{slug}/             → Category page
/products/{slug}/               → Product page
/cart.php                       → Cart
/checkout/                      → Checkout
/account.php                    → Customer account
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| App marketplace search | Keyword, category, free/paid, rating, developer |
| Help center search | Full-text knowledge base search |
| Blog search | By category (Marketing, Technology, Operations, Design) |
| Developer docs search | API endpoint search, guide keyword search |
| Merchant store (built-in) | Product search, category facets, price/brand/attribute filters, sort options |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full mega-menu, comparison tables, multi-column app grid |
| Tablet (768–1023px) | Condensed nav, 2-column grid, scrollable comparison |
| Mobile (<768px) | Hamburger menu, single-column, accordion features, mobile CTA bar |
| Control Panel | Responsive admin — works on tablet, limited on phone |
| Merchant storefronts | Responsive themes (Cornerstone default is fully responsive) |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Marketing site, pricing, app marketplace, docs |
| Trial User | Full Control Panel access, limited to trial period |
| Store Owner | Full admin — products, orders, settings, apps, users |
| Store Admin | Configurable permissions — may exclude billing or user management |
| Staff (limited) | Assigned sections only (e.g., orders only, products only) |
| Customer (storefront) | Browse, purchase, account, order history, wishlists |
| Developer | API keys, webhook management, theme development |
| Partner / Agency | Multi-store management, partner dashboard, referral tracking |
| Internal (BigCommerce) | Merchant support, platform operations, partner management |
