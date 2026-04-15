---
brand: Dev.to
tagline: Where programmers share ideas and help each other grow.
category: Content & Media
website: https://dev.to
---

# Information Architecture — Dev.to

## 1. Overview
Dev.to is a community platform for software developers to write articles, share knowledge, discuss ideas, and discover tools. Built on the open-source **Forem** platform, the IA mirrors a social network with developer-centric content types: articles, discussions, listings (job posts, events, products), and organization pages. The design is intentionally simple, fast-loading, and accessible — reflecting the developer audience's values.

## 2. Site Map

```
dev.to
├── Home (Feed)
│   ├── Relevant (personalized)
│   ├── Latest
│   ├── Top (week/month/year/all)
│   └── Feed (from followed tags/people)
├── Tags
│   ├── Popular tags (#javascript, #webdev, #python, #react, etc.)
│   ├── Tag detail page
│   │   ├── Articles with tag
│   │   ├── Tag description & rules
│   │   └── Moderators
│   └── All tags directory
├── Search
│   ├── Articles
│   ├── People
│   ├── Organizations
│   └── Tags
├── Article Page
│   ├── Title, cover image, author
│   ├── Body (Markdown rendered)
│   ├── Tags
│   ├── Reactions (unicorn, heart, bookmark, fire)
│   ├── Comments (threaded)
│   ├── Reading time
│   └── Related articles
├── Listings
│   ├── Jobs
│   ├── Events
│   ├── Products & Tools
│   ├── Education
│   ├── Mentors
│   └── Collabs (looking for collaborators)
├── Podcasts
│   ├── Dev.to Podcast
│   └── Community podcasts
├── Videos
│   ├── Community video posts
│   └── Video detail
├── User Profile
│   ├── Bio, location, links
│   ├── Articles
│   ├── Comments
│   ├── Badges
│   └── Organizations
├── Organization Page
│   ├── Org info
│   ├── Members
│   └── Published articles
├── Write (New Post)
│   ├── Markdown editor
│   ├── Front matter (title, tags, cover image, series)
│   ├── Preview
│   └── Publish / Save draft
├── Dashboard (Auth)
│   ├── My posts
│   ├── Drafts
│   ├── Analytics (views, reactions)
│   ├── Followers
│   ├── Following (tags, people, organizations)
│   ├── Notifications
│   └── Settings
├── About
│   ├── About DEV
│   ├── Code of Conduct
│   ├── FAQ
│   └── Contact
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Content policy
└── Auth
    ├── Log in (email, GitHub, Twitter)
    └── Create account
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top bar | Logo, Search bar, Write a Post CTA, Notifications bell, Profile avatar |
| Home | Left sidebar | Home, Listings, Podcasts, Videos, Tags, FAQ, Forem, About |
| Home | Right sidebar | Active discussions, trending tags, hackathons/events |
| Feed | Top tabs | Relevant, Latest, Top |
| Article | Floating sidebar | Reactions (heart, unicorn, bookmark, fire), share, comment jump |
| Mobile | Hamburger menu | Same as left sidebar, condensed |

**Key pattern**: The home feed dominates. Left sidebar provides secondary navigation. Articles use a floating reaction bar (inspired by social media) — reactions are visible and low-friction. Markdown-native writing encourages developer participation.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Article | title, body (Markdown), cover image, tags (up to 4), author, published date, reading time, reactions (heart/unicorn/bookmark/fire), comments count, series |
| Comment | author, body (Markdown), parent comment (threaded), reactions, timestamp |
| Tag | name, description, rules, color, moderators, followers count, articles count |
| User | username, name, bio, avatar, location, links (GitHub, Twitter, website), badges, articles, followers, following |
| Organization | name, slug, logo, description, members, articles |
| Listing | title, body, category (job/event/product/education/mentor/collab), tags, author, expiry |
| Badge | name, icon, description, award criteria |
| Series | name, articles (ordered), author |

## 5. User Flows

### 5a. Read & engage
1. Visit home → scroll feed (Relevant/Latest/Top)
2. Click article → read → react (heart, unicorn, bookmark)
3. Scroll to comments → reply (threaded Markdown)
4. Follow author or tags for more relevant content
5. Bookmark saved to reading list

### 5b. Write & publish
1. Click "Create Post" → Markdown editor opens
2. Write article with front matter (title, tags, cover image)
3. Preview rendered article → edit
4. Publish → appears in Latest feed
5. If tagged, appears in tag feed → community reacts and comments

### 5c. Discover via tags
1. Browse popular tags (#javascript, #beginners, #tutorial)
2. Follow tags → articles appear in "Feed" tab
3. Tag page shows latest/top articles with that tag
4. Discover related tags and community members

### 5d. Post a listing
1. Navigate to Listings → select category (Job, Event, Product, etc.)
2. Write listing (Markdown) → add tags
3. Publish (some categories require credits)
4. Listing appears in Listings section and sidebar

## 6. URL / Route Structure

```
/                           → Home feed
/top/{period}               → Top posts (week/month/year/infinity)
/latest                     → Latest posts
/search?q={query}           → Search results
/t/{tag-name}               → Tag page
/{username}/                → User profile
/{username}/{article-slug}  → Article page
/org/{org-slug}             → Organization page
/new                        → Write new post (auth)
/dashboard                  → Dashboard (auth)
/notifications              → Notifications (auth)
/readinglist                → Bookmarks (auth)
/listings                   → Listings
/listings/{category}        → Listing category
/pod                        → Podcasts
/videos                     → Videos
/about                      → About
/code-of-conduct            → Code of Conduct
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Global search | By keyword across articles, people, orgs, tags |
| Feed filter | Relevant (algorithmic), Latest, Top (time-bounded) |
| Tag filter | Follow/unfollow tags to customize feed |
| Listing filter | By category (jobs, events, products, etc.) |
| Article sort | Most reactions, most comments, newest |
| Reading list | Personal bookmarks, searchable |
| Dashboard analytics | Views, reactions, comments per post |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | 3-column layout (sidebar + feed + right sidebar), full article with floating reactions |
| Tablet (768–1023px) | 2-column (feed + sidebar), collapsible left nav |
| Mobile (<768px) | Single column, hamburger nav, bottom-anchored reactions, simplified sidebar |
| PWA | Installable progressive web app, offline reading for cached articles |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Read articles, browse tags, search, view profiles |
| Logged-in User | Write articles, comment, react, follow, bookmark, listings, customize feed |
| Trusted User | Reduced moderation queue, tag moderator eligibility |
| Tag Moderator | Manage tag rules, moderate tag content, pin articles |
| Organization Admin | Manage org page, invite members, publish under org |
| Admin (DEV Team) | Full moderation, content policy enforcement, badge awards, site config |
| Forem Instance Owner | Self-hosted community management (separate deployment) |
