---
brand: Fiverr
tagline: Find the perfect freelance services for your business.
category: E-Commerce & Fintech
website: https://www.fiverr.com
---

# Information Architecture — Fiverr

## 1. Overview
Fiverr is a freelance services marketplace where sellers offer productized services called **gigs** — fixed-scope deliverables with tiered pricing packages. The IA is buyer-centric: categories, search, and recommendations are optimized for clients finding talent. Key differentiators include the gig-based model (vs. hourly bidding), Fiverr Pro (vetted premium talent), Fiverr Business (team collaboration), and a resolution center for dispute management.

## 2. Site Map

```
fiverr.com
├── Home
├── Explore (Categories)
│   ├── Graphics & Design
│   ├── Digital Marketing
│   ├── Writing & Translation
│   ├── Video & Animation
│   ├── Music & Audio
│   ├── Programming & Tech
│   ├── Business
│   ├── Data
│   ├── Photography
│   ├── AI Services
│   └── ... (subcategories per category)
├── Fiverr Pro
│   ├── Vetted talent directory
│   └── Pro seller profiles
├── Fiverr Business
│   ├── Team collaboration
│   ├── Business invoicing
│   └── Dedicated success manager
├── Gig Page
│   ├── Gig title & gallery (images/video)
│   ├── About the gig
│   ├── Packages (Basic / Standard / Premium)
│   ├── Gig extras (add-ons)
│   ├── Seller profile snippet
│   ├── Reviews
│   ├── FAQ
│   ├── Compare packages table
│   └── Contact seller / Order
├── Seller Profile
│   ├── Bio, skills, languages
│   ├── Portfolio
│   ├── Active gigs
│   ├── Reviews
│   ├── Response time / Delivery time stats
│   └── Seller level (New / Level 1 / Level 2 / Top Rated)
├── Become a Seller
│   ├── How it works
│   ├── Create a gig
│   └── Seller resources / Academy
├── Orders (Auth)
│   ├── Active orders
│   ├── Delivered orders
│   ├── Completed
│   ├── Cancelled
│   └── Resolution center
├── Help & Education
│   ├── Help center
│   ├── Community forum
│   ├── Blog
│   └── Fiverr Academy (courses)
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Content policy
└── Auth
    ├── Log in
    └── Join (sign up)
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top bar | Logo, Search bar (prominent), Explore (categories), Fiverr Pro, Fiverr Business, Become a Seller, Sign in/Join |
| Category | Sub-nav bar | Category breadcrumb → subcategory links |
| Gig page | Tabbed sections | Overview, Packages, About Seller, Reviews, FAQ |
| Footer | Multi-column | Categories, About, Support, Community, Legal |
| Seller dashboard | Left sidebar | Dashboard, Gigs, Orders, Earnings, Analytics, Learn |

**Key pattern**: The search bar and category mega-menu are the primary discovery mechanisms. Gig pages use a comparison table for packages — a unique pattern in freelance marketplaces.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Gig | title, gallery (images + intro video), description, category, subcategory, tags, packages (3 tiers), extras, delivery time, revisions, FAQ |
| Package | tier (Basic/Standard/Premium), name, description, price, delivery days, revisions, features checklist |
| Seller | username, avatar, bio, country, languages, skills, member since, level, rating, reviews count, response time |
| Order | gig, package, extras, buyer, seller, requirements, delivery, revisions, status, timeline |
| Review | buyer, rating (1-5), comment, timestamp, seller response |
| Portfolio Item | title, images/video, category, associated gig |

## 5. User Flows

### 5a. Buyer — Find & order a gig
1. Search or browse category → view gig results (grid/list)
2. Open gig page → compare Basic/Standard/Premium packages
3. Select package → add extras (faster delivery, extra revisions)
4. Proceed to order → fill in buyer requirements (brief)
5. Pay → seller begins work → delivery → approve or request revision

### 5b. Seller — Create a gig
1. "Become a Seller" → complete profile (skills, languages, bio)
2. Create gig → title, category, tags
3. Define 3 packages (scope, price, delivery time, revisions)
4. Upload gallery (images, intro video)
5. Write description, FAQ → publish
6. Promote via social or Fiverr's promoted gigs

### 5c. Custom order
1. Buyer contacts seller via inbox → discusses requirements
2. Seller creates a custom offer (price, scope, delivery time)
3. Buyer reviews → accepts → order created
4. Standard delivery/revision flow

## 6. URL / Route Structure

```
/                               → Home
/categories/{category}/         → Category page
/categories/{cat}/{subcat}/     → Subcategory
/search/gigs?query={q}          → Search results
/{username}/{gig-slug}          → Gig detail page
/{username}/                    → Seller profile
/pro/                           → Fiverr Pro
/business/                      → Fiverr Business
/start_selling/                 → Become a seller
/users/{username}/manage_gigs   → Seller dashboard (auth)
/orders/                        → Order management (auth)
/inbox/                         → Messages (auth)
/help/                          → Help center
/community/                     → Forum
/resources/                     → Blog / Academy
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Global search | Autocomplete, trending searches, AI-powered matching, category suggestions |
| Filters | Category, seller level, budget range, delivery time, seller language, seller location, Pro seller toggle |
| Sort | Relevance, Best Selling, Newest, Budget-friendly |
| Gig comparison | Side-by-side package tiers on gig page |
| Saved gigs | Bookmark for later, organized in lists |
| Buyer requests | Sellers can browse buyer requests and submit offers |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Category mega-menu, multi-column gig grid, package comparison table, sidebar filters |
| Tablet (768–1023px) | 2-3 column grid, collapsible filters, scrollable packages |
| Mobile (<768px) | Single column, bottom-sheet filters, swipeable package tabs, sticky order bar |
| App (iOS/Android) | Bottom tabs (Home, Search, Orders, Inbox, Profile), push for order updates |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Browse categories, view gigs and profiles, read reviews |
| Buyer | Order gigs, message sellers, leave reviews, manage orders |
| Seller (New) | Create gigs (up to 7), receive orders, limited analytics |
| Seller (Level 1) | More gig slots, custom offers, gig extras |
| Seller (Level 2) | Priority support, gig multiples, higher visibility |
| Top Rated Seller | Badge, premium support, eligibility for Fiverr's Choice |
| Fiverr Pro | Vetted badge, Pro search placement, dedicated support |
| Business Account | Team management, consolidated billing, success manager |
| Internal | Dispute resolution, content moderation, seller vetting |
