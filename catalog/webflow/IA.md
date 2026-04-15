---
brand: Webflow
tagline: Build with the power of code — without writing any.
category: Content & Media
website: https://webflow.com
---

# Information Architecture — Webflow

## 1. Overview
Webflow is a visual web development platform that combines a drag-and-drop designer with the full power of HTML, CSS, and JavaScript — producing clean, semantic code without requiring developers to write it. The IA serves **designers** (visual builder, interactions, CMS), **developers** (custom code, APIs, logic), **marketers** (CMS, SEO, forms), and **enterprises** (hosting, security, collaboration). Webflow University (education) is a major content pillar alongside the product.

## 2. Site Map

```
webflow.com
├── Home
├── Product
│   ├── Designer (visual builder)
│   ├── CMS (dynamic content)
│   ├── Interactions & animations
│   ├── Ecommerce
│   ├── Localization (multi-language)
│   ├── Memberships
│   ├── Logic (visual workflows)
│   ├── Hosting
│   ├── SEO
│   ├── Accessibility
│   └── Figma to Webflow
├── Solutions
│   ├── By role (Designers, Marketers, Developers)
│   ├── By company size (Startup, Enterprise)
│   ├── By use case (Landing pages, Blogs, Portfolios, Ecommerce)
│   └── Enterprise
├── Pricing
│   ├── Site plans (Free / Basic / CMS / Business / Enterprise)
│   ├── Workspace plans (Starter / Growth / Enterprise)
│   └── Ecommerce plans
├── Templates
│   ├── Free templates
│   ├── Premium templates
│   ├── Browse by category
│   └── Template detail & preview
├── Marketplace
│   ├── Templates
│   ├── Apps (integrations)
│   └── Experts (hire Webflow developers)
├── Resources
│   ├── Webflow University (courses & tutorials)
│   ├── Blog
│   ├── Community forum
│   ├── Showcase (user-built sites)
│   ├── Glossary
│   ├── Made in Webflow
│   └── Events / Conf
├── Developers
│   ├── API documentation
│   ├── Custom code
│   ├── Logic (workflows)
│   └── Integrations
├── About
│   ├── Company
│   ├── Careers
│   ├── Press
│   └── Accessibility statement
├── Support
│   ├── Help articles
│   ├── Status page
│   └── Contact
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── DPA
└── Auth
    ├── Log in
    └── Get started (free)

Webflow Designer (App)
├── Canvas (visual editor)
├── Left panel
│   ├── Elements (drag-and-drop)
│   ├── Navigator (element tree)
│   ├── Components
│   └── Pages
├── Right panel
│   ├── Style panel (CSS visual editor)
│   ├── Settings (element attributes)
│   ├── Interactions (animations)
│   └── Conditional visibility
├── Top bar
│   ├── Breakpoint switcher (desktop, tablet, mobile landscape, mobile portrait)
│   ├── Preview
│   ├── Publish
│   └── Share / Collaborate
├── CMS panel
│   ├── Collections
│   ├── Collection items
│   └── Dynamic bindings
├── Ecommerce
│   ├── Products
│   ├── Orders
│   └── Settings
├── Logic panel
│   ├── Flows (visual automation)
│   ├── Triggers
│   └── Actions
└── Settings
    ├── General
    ├── Publishing
    ├── SEO
    ├── Custom code
    ├── Forms
    ├── Integrations
    └── Backups
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| webflow.com | Top nav | Logo, Product, Solutions, Resources, Enterprise, Pricing, Log in, Get started |
| Product | Mega-menu | Feature grid with icons + descriptions |
| Resources | Mega-menu | University, Blog, Community, Showcase, Marketplace |
| Designer | Dual panel | Left panel (elements, navigator) + Right panel (styles, settings, interactions) |
| Designer top bar | Breakpoint switcher + tools | Responsive preview, publish, collaborate |
| Footer | Multi-column | Product, Company, Resources, Community, Legal |

**Key pattern**: The Designer is a full IDE experience in the browser — left panel for structure, right panel for styling, top bar for responsive preview. The website itself uses Webflow-built marketing (eating their own dog food).

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Site (Project) | name, subdomain/custom domain, plan, collaborators, published status |
| Page | name, slug, SEO settings, custom code, template |
| CMS Collection | name, fields (text, image, rich text, reference, multi-reference, date, switch, color, etc.) |
| CMS Item | collection, field values, slug, published status, draft |
| Component | name, properties (configurable per instance), slots |
| Interaction | trigger (scroll, click, hover, load), animation steps, easing, targets |
| Form | name, fields, action (email, webhook, Zapier), submissions |
| Ecommerce Product | name, slug, price, images, SKU, categories, variants, tax, shipping |

## 5. User Flows

### 5a. Build a website
1. Sign up → choose template or start blank
2. Designer opens → drag elements to canvas
3. Style with visual CSS panel (classes, flexbox, grid)
4. Add pages → set navigation
5. Preview across breakpoints → adjust responsive design
6. Publish to webflow.io subdomain or custom domain

### 5b. CMS-driven blog
1. Create CMS Collection (e.g., "Blog Posts") → define fields
2. Add CMS items (articles with title, body, image, author, date)
3. Create Collection Template page → bind dynamic content
4. Create Collection List on pages → display post cards
5. Publish → new CMS items auto-populate pages

### 5c. Add interactions
1. Select element → open Interactions panel
2. Choose trigger (scroll into view, mouse hover, page load, click)
3. Define animation (opacity, transform, position, size, color)
4. Set timing, easing, delay
5. Preview → interaction plays on trigger

### 5d. Client handoff
1. Designer builds site → invites client to workspace
2. Client accesses CMS Editor (simplified view — edit content only)
3. Client updates text, images, CMS items — cannot break design
4. Changes publish via "Publish" button or auto-publish

## 6. URL / Route Structure

```
# webflow.com (marketing)
/                               → Home
/product/                       → Product overview
/designer/                      → Designer feature
/cms/                           → CMS feature
/interactions-animations/       → Interactions
/ecommerce/                     → Ecommerce
/pricing/                       → Pricing
/templates/                     → Template directory
/templates/{slug}/              → Template detail
/marketplace/                   → Marketplace
/marketplace/apps/              → App integrations
/experts/                       → Hire an expert
/blog/                          → Blog
/blog/{slug}/                   → Blog post
/made-in-webflow/               → Showcase
/university/                    → Webflow University
/university/lessons/{slug}/     → Lesson
/developers/                    → Developer docs

# Designer (app)
/design/{site-id}               → Visual editor
/editor/{site-id}               → CMS Editor (client)

# Published site
/                               → Home
/{page-slug}                    → Static page
/{collection-slug}/{item-slug}  → CMS item page
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Template search | By keyword, category (business, portfolio, blog, ecommerce), free/premium |
| Marketplace search | Apps by category, experts by skill |
| University search | Full-text across lessons and courses |
| Blog search | By keyword, category |
| Designer (Navigator) | Search elements in the DOM tree |
| CMS | Search/filter collection items by field values |
| Help search | Keyword → categorized support articles |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full Designer panels, marketing site with rich animations |
| Tablet (768–1023px) | Designer works but reduced canvas space |
| Mobile (<768px) | Designer not supported (desktop required), marketing site fully responsive |
| Designer breakpoints | 4 built-in: Desktop (default) → Tablet (991px) → Mobile Landscape (767px) → Mobile Portrait (478px) |
| Published sites | Responsive per designer's breakpoint configurations |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Marketing site, templates, showcase, University, blog |
| Free Account | 2 projects, Designer access, webflow.io subdomain, limited CMS items |
| Basic Plan | Custom domain, no CMS |
| CMS Plan | CMS, 2000 items, form submissions |
| Business Plan | 10,000 CMS items, custom code, form file uploads |
| Enterprise | SSO, SLA, advanced security, dedicated support, custom limits |
| Workspace Collaborator | Designer access with configurable permissions (can design / can edit content / can manage) |
| CMS Editor (Client) | Content editing only — no design access, simple UI |
| Developer | API access, custom code injection, Logic |
| Internal | Infrastructure, template review, marketplace curation |
