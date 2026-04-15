---
brand: WordPress
tagline: Build your website, your way. The world's most popular CMS.
category: Content & Media
website: https://wordpress.com
---

# Information Architecture — WordPress

## 1. Overview
WordPress.com (by Automattic) is the hosted version of the world's most popular content management system, powering over 40% of all websites. The IA must serve an extraordinarily wide audience — from personal bloggers to enterprise publishers, small business sites to full e-commerce stores. Key features include the **Gutenberg block editor**, thousands of themes and plugins, Jetpack integration, and a tiered hosting model. The IA balances simplicity for beginners with depth for power users.

## 2. Site Map

```
wordpress.com
├── Home
├── Features
│   ├── Website builder
│   ├── Blog
│   ├── Online store (WooCommerce)
│   ├── Domain names
│   ├── Hosting
│   ├── Themes
│   ├── Plugins
│   ├── Jetpack (security, performance, growth)
│   ├── Email marketing
│   └── SEO tools
├── Pricing
│   ├── Free / Personal / Premium / Business / eCommerce / VIP
│   └── Feature comparison
├── Themes
│   ├── Browse all
│   ├── By category (Blog, Business, Portfolio, Store)
│   ├── Free / Premium
│   ├── Theme detail & demo
│   └── Block themes
├── Plugins
│   ├── Browse (Business+ plans)
│   ├── By category
│   ├── Featured / Popular
│   └── Plugin detail
├── Learn
│   ├── Blog (WordPress.com News)
│   ├── Courses
│   ├── Webinars
│   ├── Guides
│   └── Developer resources
├── Support
│   ├── Documentation
│   ├── Forums
│   ├── Live chat (paid plans)
│   └── Contact
├── Enterprise (WordPress VIP)
│   ├── Solutions
│   ├── Case studies
│   ├── Security
│   └── Contact sales
├── About
│   ├── Automattic
│   ├── Careers
│   ├── Press
│   └── Philosophy (democratize publishing)
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── DMCA
└── Auth
    ├── Log in
    └── Get started (free)

Site Admin (wp-admin / Calypso)
├── My Home (dashboard)
├── Stats (Jetpack analytics)
├── Posts
│   ├── All posts
│   ├── Add new (Gutenberg editor)
│   ├── Categories
│   └── Tags
├── Pages
│   ├── All pages
│   └── Add new
├── Media
│   └── Library
├── Comments
├── Appearance
│   ├── Themes
│   ├── Customize (site editor)
│   ├── Menus
│   └── Widgets
├── Plugins (Business+)
├── Users
│   ├── All users
│   ├── Invite
│   └── Roles
├── Tools
│   ├── Import / Export
│   ├── Earn (ads, memberships)
│   └── Marketing
├── Settings
│   ├── General
│   ├── Writing
│   ├── Reading
│   ├── Discussion
│   ├── Performance
│   ├── Domain
│   └── Security (2FA)
└── Plans & Billing
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| wordpress.com | Top nav | Logo, Features, Pricing, Themes, Plugins, Learn, Support, Log in, Get started |
| Features | Dropdown | Website builder, Blog, Store, Domain, Hosting, Themes, Plugins |
| Admin (Calypso) | Left sidebar | My Home, Stats, Posts, Pages, Media, Comments, Appearance, Plugins, Users, Tools, Settings |
| Gutenberg editor | Top toolbar + block inserter | Block palette, settings sidebar, preview, publish |
| Reader (social) | Top nav | Following, Discover, Conversations, Likes, Search |
| Mobile | Hamburger | Condensed admin sidebar |

**Key pattern**: WordPress has TWO admin experiences — the modern Calypso interface (React-based, at wordpress.com) and the classic wp-admin. The Gutenberg block editor is shared across both, becoming the primary content creation and site editing tool.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Post | title, body (blocks/Gutenberg), excerpt, featured image, categories, tags, author, status (draft/published/scheduled/private), slug, format (standard/gallery/video/quote/link) |
| Page | title, body (blocks), template, parent page, order, slug |
| Block | type (paragraph, image, gallery, heading, list, columns, embed, custom), attributes, inner blocks |
| Category | name, slug, parent, description |
| Tag | name, slug |
| Media | file, title, alt text, caption, type (image/video/audio/document) |
| Theme | name, version, author, template, block patterns, style variations |
| Plugin | name, version, author, description, settings |
| User | username, email, role (admin/editor/author/contributor/subscriber), profile |

## 5. User Flows

### 5a. Create a website
1. Sign up → choose site type (blog, business, portfolio, store)
2. Pick a domain (free subdomain or custom)
3. Select a theme → preview
4. Customize (colors, fonts, menus, widgets) via Site Editor
5. Add pages and posts → publish
6. Optionally upgrade plan for more features

### 5b. Write a blog post (Gutenberg)
1. Posts → Add New → Gutenberg editor
2. Add title → write content using blocks (paragraph, image, heading, list, embed)
3. Insert specialized blocks (gallery, quote, columns, table, code)
4. Set featured image, categories, tags, excerpt
5. Preview → Publish (or schedule)

### 5c. Build with blocks (Site Editor)
1. Appearance → Editor (full site editing)
2. Edit templates (home, single post, archive, 404)
3. Insert block patterns (pre-designed sections)
4. Customize global styles (typography, colors)
5. Save → entire site updated consistently

### 5d. Set up e-commerce
1. Upgrade to eCommerce plan → WooCommerce auto-installed
2. Run WooCommerce setup wizard (store details, shipping, payments)
3. Add products → configure inventory, pricing, variations
4. Customize store pages → set up checkout
5. Launch store → manage orders from admin

## 6. URL / Route Structure

```
# wordpress.com (marketing)
/                               → Home
/features/                      → Features overview
/pricing/                       → Plans
/themes/                        → Theme directory
/themes/{theme-slug}/           → Theme detail
/plugins/                       → Plugin directory
/learn/                         → Learning resources
/support/                       → Support docs
/enterprise/                    → WordPress VIP

# User site (yoursite.wordpress.com or custom domain)
/                               → Home
/{post-slug}/                   → Blog post
/page/{n}/                      → Pagination
/category/{slug}/               → Category archive
/tag/{slug}/                    → Tag archive
/author/{slug}/                 → Author archive
/{page-slug}/                   → Static page
/shop/                          → WooCommerce shop (if enabled)

# Admin
/wp-admin/                      → Classic admin
/posts/                         → Post management (Calypso)
/pages/                         → Page management (Calypso)
/customize/                     → Customizer (Calypso)
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Theme search | By keyword, category (blog/business/portfolio), free/premium, block themes |
| Plugin search | By keyword, category, popularity, rating |
| Support search | Full-text documentation and forum search |
| Admin — Posts | Filter by status, category, tag, author, date |
| Admin — Media | Search by filename, filter by type (image/video/audio) |
| Site search (frontend) | Built-in search widget/block, Jetpack enhanced search on higher plans |
| Reader | Discover posts by topic, search across WordPress.com network |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full admin sidebar, Gutenberg with wide blocks, multi-column themes |
| Tablet (768–1023px) | Collapsible admin sidebar, responsive themes, touch-friendly Gutenberg |
| Mobile (<768px) | Hamburger admin, simplified editor, responsive themes, mobile preview |
| App (iOS/Android) | Post creation, stats, comments, notifications — not full site editing |
| AMP | Optional AMP plugin for mobile-optimized pages |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Read public content, search, comment (if enabled) |
| Subscriber | Read members-only content, profile management |
| Contributor | Write drafts (cannot publish), edit own drafts |
| Author | Publish and manage own posts, upload media |
| Editor | Publish and manage all posts/pages, moderate comments |
| Administrator | Full access — themes, plugins, users, settings, billing |
| Super Admin (Multisite) | Network-wide administration |
| WordPress.com Free | Basic site, subdomain, limited storage, ads shown |
| WordPress.com Business+ | Plugins, themes, SFTP, full admin, custom code |
| WordPress VIP | Enterprise hosting, dedicated support, SLA, security |
