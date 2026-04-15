---
brand: Hashnode
tagline: Blog on your own domain. Powered by the developer community.
category: Content & Media
website: https://hashnode.com
---

# Information Architecture — Hashnode

## 1. Overview
Hashnode is a developer blogging platform that uniquely allows bloggers to publish on their **own custom domain** while leveraging Hashnode's community, CDN, and SEO infrastructure. The IA supports both the community hub (hashnode.com feed, discussions, challenges) and individual blog instances (myblog.dev). Key features include Series (multi-part tutorials), Newsletter integration, GitHub-backed editing, and a built-in analytics dashboard.

## 2. Site Map

```
hashnode.com (Community Hub)
├── Home (Community Feed)
│   ├── Featured
│   ├── Recent
│   ├── Best (week/month/year)
│   └── Following
├── Explore
│   ├── Tags (#javascript, #devops, #aws, etc.)
│   ├── Trending tags
│   ├── Top blogs
│   └── Hackathons & challenges
├── Article Page (community view)
│   ├── Title, cover image, author
│   ├── Body (Markdown)
│   ├── Reactions (likes)
│   ├── Comments
│   ├── Tags
│   └── Read on author's blog (link)
├── User Profile
│   ├── Bio, social links
│   ├── Articles
│   ├── Badges
│   ├── Blog link (custom domain)
│   └── Followers / Following
├── Notifications
├── Bookmarks

myblog.hashnode.dev (or custom domain)
├── Blog Home
│   ├── Posts list
│   ├── Featured post
│   ├── Newsletter signup
│   └── About page
├── Post Page
│   ├── Title, cover, date, tags
│   ├── Body (Markdown rendered)
│   ├── Table of contents (auto-generated)
│   ├── Series navigation (prev/next)
│   ├── Reactions & comments
│   └── Share
├── Series
│   ├── Series overview
│   └── Ordered post list
├── Tags
│   └── Posts filtered by tag
├── About / Custom pages

Dashboard (Auth)
├── Posts
│   ├── Published
│   ├── Drafts
│   └── Scheduled
├── Series management
├── Newsletter
│   ├── Subscribers
│   └── Send newsletter
├── Analytics
│   ├── Views, reads, reactions
│   ├── Top posts
│   ├── Traffic sources
│   └── Geography
├── Blog settings
│   ├── General (name, description, logo)
│   ├── Domain (custom domain setup)
│   ├── Appearance (theme, colors, layout)
│   ├── Integrations (analytics, comments, GitHub backup)
│   ├── Newsletter settings
│   └── SEO / Social cards
├── Account settings
│   ├── Profile
│   ├── Social accounts
│   └── Developer (API keys)
└── Sponsors / Widgets
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Community hub | Top nav | Logo, Explore, Bookmarks, Notifications, Write, Profile |
| Community feed | Top tabs | Featured, Recent, Best, Following |
| Individual blog | Custom header | Blog name/logo, navigation links (Home, Tags, About, Newsletter) |
| Post page | Sticky sidebar | Table of contents (auto-generated from headings) |
| Dashboard | Left sidebar | Posts, Series, Newsletter, Analytics, Settings |
| Mobile | Hamburger | Condensed nav for both community and blog views |

**Key pattern**: Dual identity — hashnode.com is the community (discovery + social), while each blog is a standalone site on the author's own domain. Content lives on the blog but is syndicated to the community feed.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Post | title, slug, body (Markdown), cover image, tags, series, published date, canonical URL, SEO description, reactions, comments, read time |
| Series | name, description, posts (ordered), cover image |
| Blog | name, subdomain/custom domain, description, logo, favicon, theme, social links, newsletter enabled |
| Tag | name, articles count, followers count, community-wide |
| Comment | author, body (Markdown), parent comment, reactions, timestamp |
| Newsletter Issue | subject, body, recipient list, sent date, stats (opens, clicks) |
| Badge | name, icon, criteria (e.g., streak, milestone) |
| User | username, name, bio, avatar, blog URL, social links, badges |

## 5. User Flows

### 5a. Write & publish
1. Click "Write" → Markdown editor (or use GitHub-backed source)
2. Write article → add title, cover image, tags
3. Assign to series (optional) → set SEO metadata
4. Publish → article appears on personal blog AND community feed
5. Optionally send as newsletter to subscribers

### 5b. Set up custom domain
1. Dashboard → Settings → Domain
2. Enter custom domain (e.g., blog.mydomain.dev)
3. Add CNAME record at DNS provider → point to Hashnode
4. Hashnode provisions SSL → blog live on custom domain
5. All posts served from custom domain with Hashnode CDN

### 5c. Discover & engage (community)
1. Visit hashnode.com → browse Featured/Recent/Best
2. React to articles (like) → comment (threaded Markdown)
3. Follow authors → their posts appear in Following tab
4. Follow tags → see tagged content in feed
5. Bookmark articles for later reading

### 5d. Series creation
1. Dashboard → New Series → title, description, cover
2. Create posts → assign to series
3. Series page auto-generates with ordered navigation
4. Readers navigate prev/next within series
5. Series appears as a cohesive learning path

## 6. URL / Route Structure

```
# Community (hashnode.com)
/                               → Community feed
/explore/                       → Explore tags & blogs
/n/tag/{tag-name}/              → Tag page
/@{username}/                   → User profile
/{username}/{post-slug}         → Article (community view)
/notifications/                 → Notifications (auth)
/bookmarks/                     → Bookmarks (auth)

# Individual blog (custom domain or {blog}.hashnode.dev)
/                               → Blog home
/{post-slug}                    → Post page
/series/{series-slug}           → Series overview
/tag/{tag-name}                 → Tag filter
/newsletter                     → Newsletter signup
/about                          → About page

# Dashboard
/dashboard/                     → Posts list
/dashboard/drafts/              → Drafts
/dashboard/series/              → Series management
/dashboard/newsletter/          → Newsletter management
/dashboard/analytics/           → Analytics
/dashboard/settings/            → Blog settings
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Community search | By keyword, author, tag |
| Feed filter | Featured, Recent, Best (week/month/year), Following |
| Tag browse | Popular tags, trending, all tags directory |
| Blog search | Search within individual blog posts |
| Dashboard filter | Published, drafts, scheduled, by series |
| Analytics filter | By post, date range, traffic source |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full community feed, sidebar with trending tags, wide reading view with ToC sidebar |
| Tablet (768–1023px) | Single-column feed, collapsible ToC, simplified dashboard |
| Mobile (<768px) | Hamburger nav, full-width posts, floating actions, bottom sheet for ToC |
| Individual blog | Responsive by default (theme-dependent), mobile-optimized typography |
| AMP | Optional AMP versions for Google discover/search |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Read articles on community and individual blogs, search |
| Logged-in User | Write articles, comment, react, follow, bookmark, newsletter subscribe |
| Blog Owner | Full blog admin — posts, series, newsletter, analytics, settings, domain |
| Team Blog Member | Write/edit posts on team blog, configurable permissions |
| Newsletter Subscriber | Receive email newsletters, manage preferences |
| Hashnode Ambassador | Badge, early access to features, community leadership |
| API Developer | Headless CMS access, programmatic publishing |
| Internal | Community moderation, featured content selection, infrastructure |
