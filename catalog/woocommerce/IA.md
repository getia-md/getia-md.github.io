---
brand: WooCommerce
tagline: The open-source e-commerce platform for WordPress.
category: E-Commerce & Fintech
website: https://woocommerce.com
---

# Information Architecture — WooCommerce

## 1. Overview
WooCommerce is a free, open-source e-commerce plugin for WordPress that turns any WordPress site into an online store. The IA of woocommerce.com itself serves as a **hub for the ecosystem** — plugin downloads, extensions marketplace, documentation, and community. The actual store IA is infinitely customizable by each merchant. WooCommerce's architecture supports self-hosted stores, 800+ extensions, multiple payment gateways, and deep integration with the WordPress ecosystem.

## 2. Site Map

```
woocommerce.com
├── Home
├── Features
│   ├── Core features
│   ├── Payments (WooPayments)
│   ├── Shipping
│   ├── Marketing & email
│   ├── Multichannel selling
│   ├── Analytics
│   ├── Mobile app
│   └── Customization (themes & blocks)
├── Extensions Store
│   ├── Browse all
│   ├── By category
│   │   ├── Payments
│   │   ├── Shipping
│   │   ├── Marketing
│   │   ├── Product management
│   │   ├── Store management
│   │   ├── Subscriptions
│   │   ├── Bookings
│   │   └── ... (many more)
│   ├── Free extensions
│   ├── Developed by Woo
│   └── Extension detail page
├── Themes
│   ├── Free themes
│   ├── Premium themes
│   └── Theme detail
├── Develop
│   ├── Getting started
│   ├── REST API documentation
│   ├── Extension development
│   ├── Theme development
│   ├── WooCommerce CLI
│   ├── Code reference
│   └── Contributing (GitHub)
├── Resources
│   ├── Blog
│   ├── Documentation
│   │   ├── Setup & configuration
│   │   ├── Products
│   │   ├── Orders & shipping
│   │   ├── Payments
│   │   └── Troubleshooting
│   ├── Community forum
│   ├── Success stories
│   └── WooCommerce Showcase
├── Pricing (WooPayments / extensions)
├── About
│   ├── Company (Automattic)
│   ├── Partners
│   ├── Careers
│   └── Press
├── Support
│   ├── Documentation
│   ├── Community forum
│   └── Contact (priority support)
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Trademark guidelines
└── Auth
    ├── Log in (WordPress.com account)
    └── Get started
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top nav | Logo, Features, Extensions, Develop, Resources, Enterprise, Get started CTA |
| Extensions | Mega-menu | Categories, Featured, Free, By Woo, search |
| Documentation | Left sidebar | Nested doc tree (setup, products, orders, payments, API) |
| Footer | Multi-column | Products, Develop, Resources, Community, Company |
| WP Admin (merchant) | Left sidebar | WooCommerce → Orders, Products, Customers, Analytics, Marketing, Settings, Extensions |

**Key pattern**: The site is an ecosystem hub — not the product itself. Merchants interact with WooCommerce through their own WordPress admin. The website drives discovery (extensions, themes), education (docs), and community.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Extension | name, developer, description, price (free/paid), rating, reviews, version, compatibility, screenshots |
| Theme | name, developer, price, demo URL, features, compatibility |
| Documentation Page | title, body (markdown), category, breadcrumb path, last updated, related pages |
| Blog Post | title, author, date, category, body, featured image |
| Success Story | merchant name, industry, challenge, solution, results, URL |
| API Endpoint | resource, methods, parameters, request/response examples |

### Merchant Store Content Model (customizable)

| Entity | Attributes |
|--------|-----------|
| Product | name, SKU, price, sale price, description, images, categories, tags, attributes, variations, stock, type (simple/variable/grouped/external) |
| Order | number, customer, items, total, status, payment method, shipping method, tracking |
| Customer | name, email, billing/shipping address, order history, account |
| Coupon | code, discount type (% / fixed / free shipping), conditions, usage limits, expiry |
| Category | name, slug, parent, description, image, display type |

## 5. User Flows

### 5a. Merchant — Set up a store
1. Install WordPress → install WooCommerce plugin
2. Run setup wizard (store details, industry, products, shipping, payments, tax)
3. Add products (name, price, images, categories, inventory)
4. Configure payment gateway (WooPayments, Stripe, PayPal)
5. Choose theme → customize appearance → launch store

### 5b. Merchant — Add extensions
1. Browse Extensions Store on woocommerce.com
2. Find extension (e.g., Subscriptions, Bookings, Memberships)
3. Purchase / download → install on WordPress site
4. Configure extension settings in WP Admin → activate

### 5c. Customer — Purchase (on merchant's store)
1. Browse products → filter by category, price, attributes
2. Add to cart → view cart
3. Checkout → billing/shipping info → select payment method
4. Order confirmation → email receipt
5. Track order → receive shipment

### 5d. Developer — Build extension
1. Visit Develop section → read extension development docs
2. Use WooCommerce CLI + REST API for development
3. Test with WooCommerce test suite
4. Submit to Extensions Store (or distribute independently)

## 6. URL / Route Structure

```
# woocommerce.com
/                               → Home
/features/                      → Feature overview
/products/                      → Extensions store
/products/{category}/           → Extension category
/products/{extension-slug}/     → Extension detail
/themes/                        → Theme directory
/themes/{theme-slug}/           → Theme detail
/document/{doc-slug}/           → Documentation page
/developers/                    → Developer hub
/developers/docs/               → API documentation
/blog/                          → Blog
/blog/{slug}/                   → Blog post
/showcase/                      → Success stories
/support/                       → Support hub

# Merchant store (customizable)
/                               → Shop home
/shop/                          → Product catalog
/product-category/{slug}/       → Category page
/product/{slug}/                → Product detail
/cart/                          → Cart
/checkout/                      → Checkout
/my-account/                    → Customer account
/my-account/orders/             → Order history
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Extension search | Keyword, category filter, free/paid, compatibility version |
| Documentation search | Full-text across all docs, filtered by section |
| Theme search | By price (free/paid), features, industry |
| Blog search | Keyword, category, date |
| Merchant store (default) | Product search, category filter, price filter, attribute filter (size, color), sort (price, date, popularity, rating) |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full mega-menu, multi-column extension grid, sidebar docs navigation |
| Tablet (768–1023px) | Condensed nav, 2-column grid, collapsible doc sidebar |
| Mobile (<768px) | Hamburger menu, single-column, accordion docs, mobile-friendly extension cards |
| WooCommerce Mobile App | Store management — orders, products, analytics (not customer-facing) |
| Merchant stores | Responsive behavior depends on chosen theme; Storefront (default) is fully responsive |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor (woocommerce.com) | Browse extensions, themes, docs, blog |
| Registered User | Purchase extensions, access downloads, support tickets |
| Merchant (WP Admin — Shop Manager) | Products, orders, customers, coupons, analytics, settings |
| Merchant (WP Admin — Administrator) | Full WooCommerce + WordPress settings, extensions, themes |
| Customer (merchant store) | Browse, purchase, account, order history, reviews |
| Developer | API access, webhook configuration, extension/theme development |
| Automattic Staff | Extension review, partner management, ecosystem support |
