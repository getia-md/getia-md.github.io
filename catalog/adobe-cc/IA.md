---
brand: Adobe Creative Cloud
tagline: Creativity for all. The world's best creative apps and services.
category: Content & Media
website: https://www.adobe.com
---

# Information Architecture — Adobe Creative Cloud

## 1. Overview
Adobe Creative Cloud is the industry-standard creative software suite encompassing 20+ applications for photography (Photoshop, Lightroom), design (Illustrator, InDesign, XD), video (Premiere Pro, After Effects), 3D (Substance 3D), web (Dreamweaver, Animate), and emerging categories (Adobe Firefly AI, Adobe Express). The IA is massive — spanning individual app marketing, a unified Creative Cloud desktop app, Adobe.com's cross-product marketplace, cloud document management, and learning resources. Adobe's architecture must serve hobbyists, professionals, students, teams, and enterprises.

## 2. Site Map

```
adobe.com
├── Home
├── Creative Cloud
│   ├── Overview
│   ├── All Apps plan
│   ├── Photography plan (Photoshop + Lightroom)
│   ├── Single App plans
│   └── Compare plans
├── Products (Individual Apps)
│   ├── Photoshop
│   ├── Illustrator
│   ├── Premiere Pro
│   ├── After Effects
│   ├── InDesign
│   ├── Lightroom
│   ├── XD
│   ├── Adobe Express
│   ├── Fresco
│   ├── Dimension
│   ├── Aero
│   ├── Animate
│   ├── Dreamweaver
│   ├── Audition
│   ├── Character Animator
│   ├── Substance 3D (Painter, Designer, Sampler, Stager)
│   ├── Adobe Firefly (AI)
│   ├── Acrobat
│   └── ... (20+ apps)
│   └── App detail page
│       ├── Overview & features
│       ├── What's new
│       ├── System requirements
│       ├── Free trial
│       └── Buy
├── Adobe Firefly
│   ├── Text to image
│   ├── Generative fill
│   ├── Generative expand
│   ├── Text effects
│   └── AI models
├── Adobe Stock
│   ├── Photos
│   ├── Illustrations
│   ├── Vectors
│   ├── Videos
│   ├── Audio
│   ├── Templates
│   └── 3D assets
├── Adobe Fonts
│   ├── Browse fonts
│   ├── Font packs
│   └── Foundries
├── Behance (Community)
│   ├── Discover
│   ├── Galleries
│   ├── Job listings
│   └── Live streams
├── Plans & Pricing
│   ├── Individuals
│   ├── Business
│   ├── Students & Teachers
│   ├── Schools & Universities
│   └── Government
├── Learn & Support
│   ├── Tutorials (per app)
│   ├── User guides (per app)
│   ├── Community forums
│   ├── Adobe Live (livestreams)
│   ├── Certifications
│   └── Support (per app)
├── For Business
│   ├── Creative Cloud for Teams
│   ├── Creative Cloud for Enterprise
│   ├── Adobe Admin Console
│   ├── Deployment guides
│   └── Managed services
├── Adobe Account
│   ├── Plans & products
│   ├── App downloads
│   ├── Cloud storage
│   ├── Fonts
│   ├── Stock credits
│   └── Payment & billing
├── About
│   ├── Company
│   ├── Careers
│   ├── Newsroom
│   ├── Corporate responsibility
│   └── Adobe MAX (conference)
├── Legal
│   ├── Terms
│   ├── Privacy
│   ├── Accessibility
│   └── EULA
└── Auth
    ├── Sign in
    └── Create account

Creative Cloud Desktop App
├── Home
│   ├── Recent files
│   ├── Learning / Tutorials
│   └── What's new
├── Apps
│   ├── Installed
│   ├── Available to install
│   ├── Updates
│   └── Beta apps
├── Files
│   ├── Cloud Documents
│   ├── Libraries
│   ├── Synced files
│   └── Shared with me
├── Discover
│   ├── Tutorials
│   ├── Livestreams
│   └── Plugins / Marketplace
├── Fonts
│   ├── Browse
│   ├── Activated fonts
│   └── Font packs
├── Stock
│   ├── Search
│   ├── Saved
│   └── License history
├── Marketplace
│   ├── Plugins (per app)
│   ├── Extensions
│   └── Actions & presets
└── Settings
    ├── Account
    ├── Preferences
    ├── Cloud storage
    └── Beta features
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| adobe.com | Mega-nav | Creativity & Design, PDF & E-Signatures, Marketing & Commerce, Help & Support, Sign in |
| Creative Cloud | Sub-nav | Overview, Apps, Plans, Features, Business, Students, What's New |
| App page | Local nav | Overview, Features, What's New, Compare, System Req, Free Trial |
| CC Desktop | Left sidebar | Home, Apps, Files, Discover, Fonts, Stock, Marketplace |
| Individual app | Menu bar + panels | Varies per app (Photoshop: Layers, Properties, Tools, etc.) |
| Footer | Mega-footer | Products, For Business, Resources, About, Legal (per region) |

**Key pattern**: Adobe.com is a massive matrix — products x audiences x use cases. The navigation uses mega-menus to handle the breadth. The CC Desktop App acts as a unified launcher and file manager across all apps. Each app has its own deep IA internally.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Application | name, icon, description, features, platforms (Mac/Win/iPad/Web), version, plan eligibility |
| Cloud Document | name, app, thumbnail, last modified, shared flag, version history, collaborators |
| Library | name, elements (colors, character styles, graphics, patterns), shared flag, team |
| Font | family, styles (weights), foundry, classification, language support, activated flag |
| Stock Asset | type (photo/vector/video/template/3D), preview, license type, price/credits, keywords |
| Plugin | name, developer, supported apps, rating, reviews, price, install count |
| Tutorial | title, app, skill level, duration, instructor, steps, video |
| Plan | name (All Apps/Single App/Photography), price, apps included, storage, features |
| Behance Project | title, creator, images/videos, tools used, views, appreciations, comments |

## 5. User Flows

### 5a. Subscribe & start creating
1. Browse plans on adobe.com → choose plan (All Apps, Single App, Photography)
2. Sign in / create Adobe ID → enter payment
3. Download CC Desktop App → install desired applications
4. Open app → create new document → start designing
5. Save to Creative Cloud → access from any device

### 5b. Cross-app workflow
1. Design logo in Illustrator → save as CC Library element
2. Open Photoshop → use logo from shared Library in composition
3. Place composition in InDesign layout → export for print
4. Edit video in Premiere Pro → use same brand assets from Library
5. Libraries sync across all apps automatically

### 5c. Adobe Stock integration
1. Search Adobe Stock (from within Photoshop or Stock website)
2. Preview watermarked asset in design
3. License asset → watermark removed, high-res downloaded
4. Asset linked in document → always up to date

### 5d. Adobe Firefly AI
1. Open Firefly (web or in Photoshop/Illustrator)
2. Enter text prompt → "a watercolor painting of a mountain sunset"
3. Generate variations → select preferred result
4. Edit in full app → use in commercial work (commercially safe training data)

### 5e. Team/Enterprise deployment
1. IT admin signs into Admin Console
2. Purchase team plan → assign licenses to users
3. Configure deployment (managed install, auto-updates)
4. Set storage policies, shared Libraries, font activation
5. Monitor usage analytics, manage seats

## 6. URL / Route Structure

```
# adobe.com
/                                   → Home
/creativecloud/                     → Creative Cloud overview
/creativecloud/plans/               → Plans & pricing
/products/photoshop/                → Photoshop
/products/illustrator/              → Illustrator
/products/premiere/                 → Premiere Pro
/products/{app-slug}/               → Any app detail
/products/{app-slug}/features/      → App features
/firefly/                           → Adobe Firefly
/stock/                             → Adobe Stock
/fonts/                             → Adobe Fonts
/fonts/font/{family}/               → Font family detail
/express/                           → Adobe Express
/learn/                             → Learning hub
/learn/photoshop/tutorials/         → App-specific tutorials
/support/                           → Support hub
/support/{app-slug}/                → App-specific support
/business/                          → For Business
/education/                         → For Students

# Behance
/behance.net/gallery/{id}/{slug}    → Project
/behance.net/{username}             → Creator profile

# Admin Console
/adminconsole.adobe.com/            → IT Admin dashboard

# Creative Cloud Assets
/assets.adobe.com/                  → Cloud files & libraries
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Adobe.com search | Cross-product search (apps, tutorials, support, stock) |
| Stock search | Visual search, keyword, filters (type, orientation, color, people, AI-generated) |
| Fonts search | By name, classification (serif, sans, script), weight, language, designer |
| Behance search | By project, creator, tool used, field (graphic design, photography, etc.) |
| Tutorial search | By app, skill level (beginner/intermediate/advanced), duration |
| Plugin marketplace | By app, category, rating, free/paid |
| CC Desktop | Search installed/available apps, fonts, stock, files |
| In-app (e.g., Photoshop) | Layers, actions, brushes, fonts, stock, plugins |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full mega-navigation, product showcases, multi-column layouts |
| Tablet (768–1023px) | Condensed navigation, responsive product grids, some apps available (iPad versions) |
| Mobile (<768px) | Hamburger menu, single-column, app download CTAs, simplified plans comparison |
| Desktop apps | Fixed resolution with resizable panels, HiDPI support |
| iPad apps (Photoshop, Illustrator, Fresco) | Touch-optimized UI, Apple Pencil support |
| Web apps (Express, Firefly, Lightroom Web) | Fully responsive browser-based experience |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Marketing pages, free tutorials, Behance viewing, free tier of Express/Firefly |
| Free Account | Adobe Express (limited), 2GB cloud storage, Adobe Fonts (limited), Firefly credits (limited) |
| Single App Subscriber | One app + 100GB storage + Adobe Fonts + limited Firefly credits |
| All Apps Subscriber | 20+ apps + 100GB storage + Fonts + Firefly + Stock credits |
| Photography Plan | Photoshop + Lightroom + 20GB/1TB storage |
| Student/Teacher | All Apps at discounted rate |
| Team Member | Assigned apps + shared Libraries + team storage |
| Team Admin | License management, Admin Console, user provisioning, shared Libraries |
| Enterprise Admin | SSO/SAML, advanced deployment, federated ID, compliance, API |
| Stock Contributor | Upload and sell assets on Adobe Stock |
| Behance User | Publish projects, follow creators, find jobs |
| Plugin Developer | Build and distribute plugins via Adobe Marketplace |
| Internal | Product development, content curation, Stock moderation, support |
