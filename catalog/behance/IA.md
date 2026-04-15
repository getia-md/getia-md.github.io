---
brand: Behance
tagline: The world's largest creative network for showcasing and discovering creative work
category: Social & Communication
website: https://behance.net
---

# Information Architecture — Behance

## 1. Overview

Behance is Adobe's creative portfolio platform for showcasing and discovering professional design, illustration, photography, and other creative work. The IA is organized around Projects (multi-image case studies), Moodboards, and Live Streams, with deep integration into the Adobe Creative Cloud ecosystem. The platform serves as both a public portfolio and a professional discovery tool for recruiters and art directors.

## 2. Site Map

```
Behance
├── Home / Discover
│   ├── For You (personalized)
│   ├── Curated Galleries
│   ├── Featured Projects
│   ├── Creative Fields
│   │   ├── Graphic Design
│   │   ├── Illustration
│   │   ├── Photography
│   │   ├── UI/UX
│   │   ├── Motion Graphics
│   │   ├── 3D Art
│   │   ├── Fashion
│   │   └── [20+ fields]
│   └── Trending
├── Project Detail
│   ├── Image gallery (scrollable case study)
│   ├── Description & tools used
│   ├── Appreciations (likes) & views
│   ├── Comments
│   ├── Tags & creative fields
│   ├── Owner info
│   └── Related Projects
├── Moodboards
│   ├── User's Moodboards
│   └── [Moodboard] → Saved projects, images, references
├── Live Streams
│   ├── Live Now
│   ├── Upcoming
│   └── Replays
├── Jobs
│   ├── Job Listings
│   ├── Filter by role, location, type
│   └── Job Detail → Apply
├── Search
│   ├── Projects
│   ├── People
│   ├── Moodboards
│   ├── Assets (Adobe Stock integration)
│   └── Live Streams
├── Profile
│   ├── Projects
│   ├── Moodboards
│   ├── Appreciated (liked projects)
│   ├── Following / Followers
│   ├── Stats
│   ├── Resume / Work Experience
│   ├── Tools & Skills
│   ├── Availability badge
│   └── Adobe Portfolio link
├── Adobe Portfolio (connected)
│   └── Custom portfolio website (powered by Behance content)
├── ProSite
├── Hire Me / Freelance
└── Settings
    ├── Account (Adobe ID)
    ├── Notifications
    ├── Privacy
    └── Connected Apps
```

## 3. Navigation Model

- **Type**: Top nav bar (desktop), bottom tab bar (mobile app)
- **Desktop Top Bar**: Behance logo (home), Explore, Live, Jobs, Hire Freelancers | Search, Notifications, Upload, Profile
- **Mobile App Bottom Tabs**: Home, Search, Create (+), Notifications, Profile
- **Creative Field Navigation**: Category chips on Explore; sidebar on search results
- **Project Viewing**: Long vertical scroll through project images (case study format)
- **Adobe Ecosystem Links**: Deep links to Creative Cloud, Adobe Portfolio, Adobe Stock

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Project | cover image, images/videos (ordered), title, description, creative fields, tags, tools used, appreciations, views, comments, published date, license | → Owner, → Creative Fields, → Tags |
| Moodboard | name, description, saved items (projects, images, external references), visibility | → User, → Projects |
| Live Stream | title, streamer, scheduled time, status (live/replay), viewer count, category | → User, → Creative Field |
| User Profile | name, bio, location, avatar, banner, creative fields, tools, follower count, work experience, availability | → Projects, → Moodboards |
| Comment | text, author, timestamp, appreciations | → Project |
| Job Listing | title, company, location, type, salary range, description, creative field | → Company |
| Asset | image, license type, Adobe Stock metadata | → Adobe Stock |
| Team/Company | name, logo, members, projects | → Projects, → Job Listings |

## 5. User Flows

### Publishing a Project
1. Click "Create a Project" → Upload images/videos in sequence
2. Arrange order → Add captions, descriptions for each module
3. Set cover image → Add title, creative fields, tags, tools used
4. Set visibility (public, private, draft) → Publish
5. Project appears in followers' feeds, field galleries, and search

### Discovering Work
1. Visit Explore → Browse by creative field or "For You" recommendations
2. Scroll project grid → Click to open full case study (long vertical scroll)
3. Appreciate (like) → Save to Moodboard for reference
4. Follow creator for future projects

### Building a Portfolio
1. Upload multiple projects showcasing different skills
2. Set profile bio, work experience, tools/skills
3. Enable "Available for Freelance" badge
4. Optionally connect Adobe Portfolio for a custom domain portfolio site
5. Projects auto-sync from Behance to Adobe Portfolio

## 6. URL / Route Structure

```
behance.net/                                # Home / discover
behance.net/gallery/{id}/{slug}             # Project detail
behance.net/search/projects?field={field}   # Browse by creative field
behance.net/search/projects?search={query}  # Search results
behance.net/{username}                      # User profile
behance.net/{username}/moodboards           # User's moodboards
behance.net/{username}/appreciated          # Liked projects
behance.net/live                            # Live streams
behance.net/live/{streamId}                 # Stream detail/replay
behance.net/joblist                         # Job board
behance.net/joblist/{id}                    # Job detail
behance.net/hire                            # Hire freelancers
myportfolio.com/ (or custom domain)         # Adobe Portfolio (connected)
```

## 7. Search & Filter

- **Global Search**: Projects, people, moodboards, assets, live streams
- **Creative Field Filter**: 20+ fields (Graphic Design, Photography, Motion, etc.)
- **Tool Filter**: Filter by software used (Photoshop, Figma, Blender, etc.)
- **Color Filter**: Search by dominant color in projects
- **Sort**: Recommended, Most Appreciated, Most Viewed, Most Discussed, Most Recent
- **Location Filter**: Find creators by city/country
- **Availability Filter**: Show only "Available for Freelance" profiles
- **Adobe Stock Integration**: Search stock assets alongside community projects

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile App | Bottom tab bar; single-column project grid; full-screen project viewer; swipe between projects |
| Mobile Web (< 768px) | 1-2 column grid; hamburger nav; project detail as vertical scroll page |
| Tablet (768–1024px) | 2-3 column grid; project detail with sidebar metadata |
| Desktop (> 1024px) | 3-4 column project grid; sticky top nav; project detail as full-width scroll with floating action bar |
| Large Desktop (> 1440px) | 5+ column grid; wider project detail; expanded sidebar (tools, tags, related) |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Anonymous Visitor | Browse projects, view profiles, search; limited views before sign-up prompt |
| Registered User (free) | Upload projects, create moodboards, appreciate, comment, follow, go live |
| Adobe Creative Cloud Subscriber | Full Behance access + Adobe Portfolio, extra storage, Fonts, Stock integration |
| Pro / Freelance User | "Available for Hire" badge, priority in search, enhanced analytics |
| Company / Team | Team profile, post jobs, manage team portfolio, coordinate hiring |
| Curator / Staff | Feature projects in curated galleries, manage trending, moderate content |
| Job Poster | Create and manage job listings, receive applications |
