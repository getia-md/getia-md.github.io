---
brand: Framer
tagline: Ship sites fast. Design and publish without code.
category: Content & Media
website: https://www.framer.com
---

# Information Architecture — Framer

## 1. Overview
Framer is a website builder that emphasizes speed, visual polish, and component-driven design. Originally a prototyping tool, Framer has pivoted to a full **publish-ready website builder** with a built-in CMS, animations, responsive breakpoints, and localization. The IA is streamlined for speed — designers can go from idea to published site in hours, not weeks. Framer sites are known for smooth animations, modern aesthetics, and excellent performance.

## 2. Site Map

```
framer.com
├── Home
├── Features
│   ├── Design (visual canvas)
│   ├── CMS (content management)
│   ├── Animations (scroll, hover, page transitions)
│   ├── Components (reusable, with variants + overrides)
│   ├── Responsive design (breakpoints)
│   ├── Localization (multi-language)
│   ├── SEO
│   ├── Forms
│   ├── Hosting (edge CDN)
│   ├── Analytics
│   └── AI (generate copy, images, layouts)
├── Templates
│   ├── Free templates
│   ├── Premium templates
│   ├── Browse by category (Landing, Portfolio, SaaS, Agency, Blog)
│   └── Template detail & preview
├── Marketplace
│   ├── Components (community-built)
│   ├── Templates
│   └── Plugins
├── Pricing
│   ├── Free / Mini / Basic / Pro
│   └── Feature comparison
├── Resources
│   ├── Academy (video tutorials)
│   ├── Blog
│   ├── Community (Discord)
│   ├── Showcase (sites built with Framer)
│   ├── Updates / Changelog
│   └── Developers (code components)
├── Enterprise
│   ├── Solutions
│   ├── Security
│   └── Contact sales
├── Support
│   ├── Help center
│   └── Contact
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── DPA
└── Auth
    ├── Log in
    └── Start for free

Framer Editor (Canvas)
├── Canvas (WYSIWYG)
├── Left panel
│   ├── Layers (element tree)
│   ├── Pages
│   ├── CMS Collections
│   ├── Assets
│   └── Components library
├── Right panel
│   ├── Properties (layout, sizing, typography, colors, effects)
│   ├── Fill & border
│   ├── Interactions (hover, scroll, tap animations)
│   ├── CMS bindings
│   └── Responsive overrides
├── Top bar
│   ├── Breakpoint selector (Desktop, Tablet, Phone)
│   ├── Preview
│   ├── Publish
│   ├── Share / Collaborate
│   └── AI tools
├── CMS panel
│   ├── Collections (define schema)
│   ├── Items (add/edit content)
│   └── Template pages
└── Settings
    ├── General (name, domain, favicon)
    ├── SEO
    ├── Analytics
    ├── Localization
    ├── Custom code
    ├── Redirects
    └── Forms
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| framer.com | Top nav | Logo, Features, Templates, Pricing, Enterprise, Resources, Log in, Start for free |
| Features | Dropdown | Design, CMS, Animations, Components, AI, Localization |
| Editor | Dual panel | Left (layers, pages, CMS, assets) + Right (properties, interactions) |
| Editor top | Toolbar | Breakpoint switch, preview, publish, undo/redo |
| Footer | Compact | Product, Resources, Company, Legal |

**Key pattern**: The editor is canvas-centric — maximum space for the visual design, with collapsible panels. Framer emphasizes "what you see is what ships" — the editor IS the published site layout.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Site (Project) | name, slug, custom domain, plan, collaborators, published URL |
| Page | name, path, SEO metadata, layout, breakpoint overrides |
| Component | name, variants, properties (configurable), overrides, code component flag |
| CMS Collection | name, fields (text, rich text, image, number, boolean, date, link, color, reference) |
| CMS Item | collection, field values, slug, published flag |
| Animation | trigger (scroll, hover, appear, tap), properties (opacity, scale, position, rotation), easing, delay |
| Form | fields, action (email, webhook), submissions |
| Locale | language, country, translations, published flag |

## 5. User Flows

### 5a. Build a site from template
1. Browse templates → preview → "Use Template"
2. Framer editor opens with template loaded
3. Replace content (text, images) → adjust styles
4. Set custom domain → configure SEO
5. Publish → site live on edge CDN

### 5b. Design from scratch
1. New project → blank canvas
2. Draw frames → add elements (text, images, buttons, sections)
3. Use auto-layout (flexbox-based) for responsive structure
4. Create components → reuse with variants
5. Add animations → preview → publish

### 5c. CMS-powered pages
1. Create CMS Collection (e.g., "Projects") → define fields
2. Add items (content entries)
3. Create CMS page → bind fields to design elements
4. Create collection list on pages → displays items dynamically
5. Add/edit CMS items → site updates automatically

### 5d. Localization
1. Settings → Localization → add languages
2. Content auto-duplicated per locale
3. Translate content (or use AI auto-translate)
4. Set locale-specific URLs (e.g., /fr/, /de/)
5. Visitors see localized version based on browser language or URL

## 6. URL / Route Structure

```
# framer.com (marketing)
/                               → Home
/features/                      → Features
/features/{feature}/            → Feature detail
/templates/                     → Template directory
/templates/{slug}/              → Template preview
/marketplace/                   → Components & plugins
/pricing/                       → Pricing
/academy/                       → Video tutorials
/blog/                          → Blog
/blog/{slug}/                   → Blog post
/showcase/                      → Site showcase
/updates/                       → Changelog
/developers/                    → Code components docs
/help/                          → Help center

# Editor
/projects/{id}                  → Editor canvas

# Published site (custom domain)
/                               → Home
/{page-path}                    → Page
/{collection}/{item-slug}       → CMS detail page
/{locale}/{page-path}           → Localized page
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Template search | By keyword, category (SaaS, Agency, Portfolio, Blog), free/premium |
| Marketplace search | Components, plugins by keyword and category |
| Academy search | Search tutorials by topic |
| Editor — Layers | Search elements in layer tree by name |
| CMS | Filter/search collection items by field values |
| Help search | Keyword → categorized articles |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full editor canvas, dual panels, marketing site with showcase animations |
| Tablet (768–1023px) | Editor usable but constrained; marketing site responsive |
| Mobile (<768px) | Editor not supported (desktop only); marketing site fully responsive |
| Editor breakpoints | Desktop (1200px default) → Tablet → Phone (390px) |
| Published sites | Responsive per breakpoint configurations set in editor |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Marketing site, templates, showcase, academy |
| Free Account | 1 site, Framer subdomain, limited CMS items, Framer badge |
| Mini Plan | Custom domain, remove badge, basic features |
| Basic Plan | More CMS items, form submissions, analytics |
| Pro Plan | Advanced staging, password protection, high CMS limits |
| Enterprise | SSO, SLA, audit logs, advanced security |
| Collaborator | Editor access with role-based permissions (edit / comment / view) |
| CMS Editor | Content editing only (simplified editor view) |
| Developer | Code components (React), custom API integrations |
| Internal | Template curation, marketplace review, infrastructure |
