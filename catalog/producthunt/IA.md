---
brand: Product Hunt
tagline: The best new products in tech
category: Social & Communication
website: https://producthunt.com
---

# Information Architecture — Product Hunt

## 1. Overview

Product Hunt is a daily curation platform for discovering and launching new tech products, apps, tools, and services. The IA revolves around a daily leaderboard — products launched each day compete for upvotes, with a community of makers, investors, and early adopters providing feedback. The platform also hosts Collections, Discussions, and launch tools for founders to build pre-launch audiences.

## 2. Site Map

```
Product Hunt
├── Home (Today's Launches)
│   ├── Daily Leaderboard
│   ├── Top Products (ranked by upvotes)
│   ├── Time-based filters (Today, Yesterday, This Week, This Month)
│   └── Featured / Staff Picks
├── Product Page
│   ├── Gallery (screenshots, video)
│   ├── Description & tagline
│   ├── Maker info
│   ├── Upvote button & count
│   ├── Comments / Discussion
│   ├── Related Products
│   ├── Alternatives
│   └── Reviews
├── Topics
│   ├── AI
│   ├── Developer Tools
│   ├── Design
│   ├── Productivity
│   ├── Marketing
│   └── [50+ topics]
├── Collections
│   ├── Staff Collections
│   ├── Community Collections
│   └── [Collection] → Products list
├── Launches
│   ├── Ship (pre-launch pages)
│   ├── Coming Soon
│   └── Launch Checklist
├── Discussions
│   ├── Ask PH
│   ├── Introductions
│   └── General
├── Leaderboard
│   ├── Daily / Weekly / Monthly
│   ├── Golden Kitty Awards (annual)
│   └── Hall of Fame
├── Profile
│   ├── Products Made
│   ├── Products Hunted
│   ├── Upvotes
│   ├── Collections
│   ├── Activity
│   └── Streak (daily visit)
├── Newsletter
├── Changelog (Product Hunt's own updates)
└── Advertise
```

## 3. Navigation Model

- **Type**: Top nav bar (desktop), bottom tab bar (mobile)
- **Desktop Top Bar**: Logo (home), Products, Launches, Discussions, Collections, Advertise | Search, Notifications, Profile
- **Mobile Bottom Tabs**: Home, Topics, Launch, Notifications, Profile
- **Daily Navigation**: Date picker or "Yesterday" / "This Week" / "This Month" tabs on home
- **Product Detail**: Modal overlay on desktop; full-screen on mobile
- **Topic Chips**: Horizontal scrollable topic filters on home and search

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Product | name, tagline, description, URL, gallery (images/video), upvote count, comment count, maker(s), topic tags, launch date, featured badge | → Maker(s), → Topic(s), → Comments, → Collections |
| Comment | text, author, timestamp, upvotes, replies, maker badge | → Product, → User |
| Collection | name, description, curator, products list, follower count | → Products, → Curator |
| Discussion | title, body, author, category (Ask PH, etc.), comments, upvotes | → Comments |
| Topic | name, slug, product count, description | → Products |
| Ship Page (Coming Soon) | name, description, email signup count, maker, launch date | → Product (when launched) |
| User Profile | name, headline, avatar, Twitter/website, maker history, upvote history, streak | → Products, → Collections |
| Review | rating, text, author, helpful votes | → Product |

## 5. User Flows

### Discovering Products
1. Visit home → See today's product launches ranked by upvotes
2. Browse by topic chips (AI, Developer Tools, etc.) or time period
3. Click product → View gallery, description, maker comments
4. Upvote with one click → Leave a comment or question for the maker
5. Click "Get it" → Redirect to product website

### Launching a Product
1. Creator sets up Ship page (pre-launch) → Collects email signups
2. On launch day: Submit product with tagline, description, screenshots, video
3. Product appears on daily leaderboard at midnight PT
4. Maker responds to comments throughout the day → Engages community
5. End of day → Final ranking determined; top products get featured badge

### Curating Collections
1. Click "Collections" → "New Collection"
2. Add title and description → Search and add products
3. Publish → Collection appears on profile and in Collections directory
4. Community can follow the collection for updates

## 6. URL / Route Structure

```
producthunt.com/                            # Today's launches
producthunt.com/products/{slug}             # Product page
producthunt.com/posts/{slug}                # Launch post (legacy)
producthunt.com/topics/{topic}              # Topic page
producthunt.com/collections/{slug}          # Collection page
producthunt.com/@{username}                 # User profile
producthunt.com/discussions                 # Discussion forum
producthunt.com/discussions/{id}            # Discussion thread
producthunt.com/leaderboard/daily/{date}    # Daily leaderboard
producthunt.com/leaderboard/monthly/{year}/{month}  # Monthly leaderboard
producthunt.com/ship                        # Pre-launch / Ship pages
producthunt.com/newsletter                  # Newsletter signup
producthunt.com/golden-kitty-awards         # Annual awards
producthunt.com/advertise                   # Advertising info
api.producthunt.com/v2/                     # GraphQL API
```

## 7. Search & Filter

- **Global Search**: Products, collections, makers, discussions, topics
- **Topic Filters**: Filter home feed by product category
- **Time Filters**: Today, Yesterday, This Week, This Month, Custom Date
- **Leaderboard**: Daily #1-5 products, weekly top, monthly top, yearly Golden Kitty
- **Sort Options**: Popular (upvotes), Newest, Most Discussed
- **Alternative Products**: "Alternatives to {product}" sections on product pages
- **Newsletter Curation**: Daily/weekly email digest of top-ranked products

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (< 768px) | Single-column product list; bottom tab bar; product detail full-screen; simplified gallery |
| Tablet (768–1024px) | Wider product cards; two-column collections; product detail as sheet |
| Desktop (> 1024px) | Product list with preview on hover; product detail as modal overlay; right sidebar for trending/ads |
| Email (Newsletter) | Responsive email template; top 5 products with thumbnails and upvote counts |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Anonymous Visitor | Browse products, view comments, search; prompted to sign up for upvoting |
| Registered User | Upvote, comment, create collections, follow topics/makers, submit products, daily streak |
| Maker (verified) | Launch products, respond with "Maker" badge on comments, access launch analytics, create Ship pages |
| Hunter | Submit/hunt other people's products to the leaderboard (with attribution) |
| Moderator / Staff | Feature products, manage content, curate staff collections, moderate discussions |
| Advertiser | Promote products as sponsored listings on the leaderboard |
| API User | Query products, posts, collections via GraphQL API with OAuth token |
