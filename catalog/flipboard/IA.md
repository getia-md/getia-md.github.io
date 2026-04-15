---
brand: Flipboard
tagline: Stories for you. Curated by people who care.
category: Content & Media
website: https://www.flipboard.com
---

# Information Architecture — Flipboard

## 1. Overview
Flipboard is a magazine-style news aggregation platform known for its signature **flip animation** (page-turn gesture) and visually rich content presentation. The IA centers on **Magazines** (user-curated collections), **Storyboards** (editorial narratives), and **Smart Magazines** (AI-curated topic feeds). Content is sourced from RSS, social media, and publisher partnerships, then presented in a beautiful, lean-back reading experience that mimics a glossy magazine.

## 2. Site Map

```
flipboard.com
├── Home (For You feed)
├── Explore
│   ├── Topics
│   │   ├── Technology
│   │   ├── Science
│   │   ├── Politics
│   │   ├── Business
│   │   ├── Design
│   │   ├── Food
│   │   ├── Travel
│   │   ├── Sports
│   │   └── ... (100+ topics)
│   ├── Smart Magazines (AI-curated)
│   ├── Community Magazines (user-created)
│   ├── Storyboards (editorial)
│   └── Publisher channels
├── Following
│   ├── Followed topics
│   ├── Followed magazines
│   ├── Followed publishers
│   └── Followed people
├── Magazines
│   ├── My magazines
│   ├── Liked magazines
│   └── Magazine detail
│       ├── Cover image
│       ├── Description
│       ├── Curator
│       ├── Article list
│       └── Flip-through view
├── Storyboard
│   ├── Narrative layout
│   ├── Mixed media (text, images, video, tweets)
│   └── Author / curator
├── Article View
│   ├── Full article (in-app reader or linked)
│   ├── Flip to related stories
│   ├── Like / Comment / Share
│   └── Flip into magazine
├── Profile
│   ├── Bio & avatar
│   ├── Magazines curated
│   ├── Storyboards
│   ├── Liked articles
│   ├── Followers / Following
│   └── Activity
├── Notifications
├── Flipboard TV
│   ├── Video news
│   └── Channels
├── Help
│   ├── Getting started
│   ├── Reading
│   ├── Curating
│   ├── Privacy
│   └── Contact
├── Publishers
│   ├── Partner program
│   ├── Content integration
│   └── Analytics
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Community guidelines
└── Auth
    ├── Log in
    └── Sign up
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| App | Bottom tab bar | Home, Following, Explore, Notifications, Profile |
| Web | Top nav | Logo, Home, Following, Explore, Notifications, Profile, Search |
| Article | Gesture-based | Flip up/down (swipe) to navigate between articles — magazine page-turn metaphor |
| Magazine | Cover + scroll | Visual cover, then flip through articles |
| Explore | Topic grid | Visual topic cards, magazine covers |
| Profile | Tab sections | Magazines, Storyboards, Likes, Activity |

**Key pattern**: The flip gesture IS the navigation. Vertical swipes page through articles like a physical magazine. This gesture-driven nav replaces traditional lists and is Flipboard's signature UX.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Article | title, source/publisher, author, body (or link), cover image, published date, likes, comments, flipped-into count |
| Magazine | title, description, cover image, curator, articles, followers, topic tags, public/private |
| Smart Magazine | topic, AI-curated articles, auto-updating, follower count |
| Storyboard | title, author, narrative blocks (text, image, video, embed), cover image |
| Topic | name, related topics, Smart Magazine, follower count |
| Publisher Channel | name, logo, articles, followers, verified flag |
| Profile | name, avatar, bio, magazines, followers, following |

## 5. User Flows

### 5a. Read & discover
1. Open Flipboard → Home "For You" feed (personalized)
2. Flip through articles (vertical swipe gesture)
3. Tap article → full view (in-app reader or original source)
4. Like, comment, or flip into a personal magazine
5. Explore tab → browse topics → follow new topics for more content

### 5b. Curate a magazine
1. Tap "+" → create new magazine (title, description, cover)
2. Browse articles → "Flip into" your magazine
3. Arrange article order → publish
4. Share magazine link → followers can subscribe
5. Magazine grows as you continue adding articles

### 5c. Create a Storyboard
1. New Storyboard → title + cover image
2. Add blocks: text paragraphs, images, video embeds, tweets, articles
3. Arrange narrative flow → preview
4. Publish → appears on profile and can be shared

### 5d. Follow & personalize
1. During onboarding → select interests (5+ topics)
2. Flipboard curates Home feed based on selections
3. Follow specific magazines, publishers, and people
4. "Following" tab shows chronological updates from followed sources
5. AI refines recommendations based on reading behavior

## 6. URL / Route Structure

```
/                               → Home (For You)
/explore/                       → Explore topics
/topic/{topic-slug}/            → Topic Smart Magazine
/@{username}/                   → User profile
/@{username}/{magazine-slug}/   → User magazine
/storyboard/{slug}/             → Storyboard
/article/{slug}/                → Article view
/search?q={query}               → Search results
/publishers/                    → Publisher program
/help/                          → Help center
/tv/                            → Flipboard TV
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Global search | Search articles, magazines, topics, people, publishers |
| Topic browse | Visual grid of 100+ topics |
| Magazine search | By title, topic, curator |
| Following filter | Filter by magazines, topics, people, publishers |
| Smart Magazine | Auto-curated, no manual filtering needed |
| Sort (implicit) | Home = algorithmic, Following = chronological |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Magazine-style layout, multi-column, click-to-flip, full Storyboard view |
| Tablet (768–1023px) | Optimized for flip gesture (iPad is the signature Flipboard experience), landscape + portrait |
| Mobile (<768px) | Vertical flip, full-screen articles, bottom tabs |
| App (iOS/Android) | Native flip animation, offline reading, push notifications for breaking news |
| Web widget | Embeddable magazine widget for blogs/sites |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Browse public magazines, articles (limited), topic pages |
| Logged-in User | Personalized feed, create magazines, follow, like, comment, Storyboards |
| Curator | Public magazine with followers, editorial influence |
| Publisher (Partner) | Verified channel, analytics, content integration, monetization |
| Flipboard TV Contributor | Video content submission, channel management |
| Editorial Team | Smart Magazine curation, featured content, Storyboard promotion |
| Internal | Content moderation, recommendation engine, publisher relations |
