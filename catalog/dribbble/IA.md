---
brand: Dribbble
tagline: Discover the world's top designers & creatives
category: Social & Communication
website: https://dribbble.com
---

# Information Architecture — Dribbble

## 1. Overview

Dribbble is a design community and portfolio platform where designers share "shots" — small screenshots of their work — to showcase skills, find inspiration, and get hired. The IA is centered on a visual grid of shots with filtering by category, color, and tag, supported by a robust hiring marketplace connecting designers with teams. The platform serves as both a creative social network and a professional career platform.

## 2. Site Map

```
Dribbble
├── Home / Explore
│   ├── Popular
│   ├── New & Noteworthy
│   ├── Following
│   └── Category Filters
│       ├── Animation
│       ├── Branding
│       ├── Illustration
│       ├── Mobile
│       ├── Print
│       ├── Product Design
│       ├── Typography
│       ├── Web Design
│       └── [more categories]
├── Shot Detail
│   ├── Full-size image / video
│   ├── Description
│   ├── Tags
│   ├── Color palette (extracted)
│   ├── Likes & Views
│   ├── Comments
│   ├── Rebounds (responses)
│   └── Related Shots
├── Shots (browse all)
│   ├── Filter by category, color, timeframe
│   └── Sort by popular, recent
├── Designers (hiring marketplace)
│   ├── Browse Designers
│   ├── Filter by specialty, location, availability
│   └── Designer Profile → Hire CTA
├── Jobs Board
│   ├── Job Listings
│   ├── Filter by role, location, type
│   └── Job Detail → Apply
├── Hiring (for companies)
│   ├── Post a Job
│   ├── Designer Search
│   └── Hiring Suite
├── Profile
│   ├── Shots
│   ├── Collections
│   ├── Liked Shots
│   ├── About / Bio
│   ├── Skills & Tools
│   ├── Availability badge
│   └── Work history
├── Collections (curated shot groups)
├── Teams
│   ├── Team Profile
│   ├── Team Members
│   └── Team Shots
├── Go Pro (subscription)
│   ├── Pro Features
│   └── Pricing
└── Blog / Resources
    ├── Design articles
    ├── Courtside (blog)
    └── Overtime (podcast)
```

## 3. Navigation Model

- **Type**: Top nav bar with mega dropdown
- **Desktop Top Bar**: Logo (home), Explore, Hire Designers, Find Jobs, Blog | Search, Notifications, Upload, Profile
- **Mobile**: Hamburger menu + bottom action bar
- **Shot Grid**: Masonry/uniform grid; hover reveals title, designer, likes; click opens detail
- **Category Tabs**: Horizontal scrollable category chips on Explore
- **Filtering**: Color picker, category dropdown, timeframe selector

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Shot | image(s)/video/GIF, title, description, tags, category, color palette, views, likes, saves, comments, attachments | → Designer, → Collection, → Rebounds |
| Rebound | inherits Shot + reference to parent shot (creative response) | → Parent Shot |
| Collection | name, description, shots list, curator | → Shots, → User |
| Designer Profile | name, bio, location, avatar, skills, tools, availability, work history, follower count | → Shots, → Teams |
| Team | name, logo, description, members, location | → Shots, → Designers |
| Job Listing | title, company, location (remote/onsite), type (full-time/contract/freelance), salary, description | → Team/Company |
| Comment | text, author, timestamp, likes | → Shot |
| Tag | name | → Shots |

## 5. User Flows

### Showcasing Work
1. Click "Upload" → Drag images/video → Add title, description, tags
2. Select category → System extracts color palette automatically
3. Publish → Shot appears in followers' feeds and category pages
4. Community members like, comment, or create rebounds

### Finding Design Inspiration
1. Browse Explore → Filter by category (e.g., "Mobile") + color (#FF5733)
2. Scroll masonry grid → Hover to preview; click for full detail
3. Save to Collection for future reference
4. Follow designer for more of their work

### Hiring a Designer
1. Company visits "Hire Designers" → Search by specialty, location, availability
2. Browse designer profiles → Review shots portfolio
3. Click "Hire Me" → Send project brief through Dribbble
4. Or post job on Jobs Board → Designers apply

## 6. URL / Route Structure

```
dribbble.com/                               # Home / explore
dribbble.com/shots/{id}-{slug}              # Shot detail
dribbble.com/shots/popular                  # Popular shots
dribbble.com/shots?tag={tag}                # Shots by tag
dribbble.com/{username}                     # Designer profile
dribbble.com/{username}/collections         # User's collections
dribbble.com/{username}/collections/{id}    # Collection detail
dribbble.com/teams/{slug}                   # Team profile
dribbble.com/designers                      # Designer marketplace
dribbble.com/jobs                           # Job board
dribbble.com/jobs/{id}-{slug}               # Job detail
dribbble.com/pro                            # Pro subscription
dribbble.com/tags/{tag}                     # Tag browse page
dribbble.com/stories                        # Blog / Courtside
```

## 7. Search & Filter

- **Global Search**: Shots, designers, teams, tags
- **Shot Filters**: Category, color (hex picker), timeframe (now, past week, past month), made with (tool: Figma, Sketch, etc.)
- **Sort**: Popular, Recent, Following
- **Designer Search**: Specialty (UI, UX, branding, illustration), location, availability (for hire), Pro status
- **Job Search**: Role type, location, remote/onsite, full-time/contract/freelance
- **Color Search**: Pick a color → find shots using that color palette
- **Tag Browse**: Click any tag to see all shots with that tag

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (< 768px) | 1-2 column shot grid; hamburger nav; full-screen shot detail; simplified filters |
| Tablet (768–1024px) | 2-3 column shot grid; top nav preserved; shot detail as overlay |
| Desktop (1024–1440px) | 4 column shot grid; full top nav bar; shot detail as modal with sidebar |
| Large Desktop (> 1440px) | 5-6 column shot grid; expanded filtering panel; wider modal |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Anonymous Visitor | Browse shots, view profiles, search; limited interactions (prompted to sign up) |
| Free User | Upload limited shots, like, comment, follow, create collections |
| Pro User | Unlimited uploads, attach files to shots, custom profile, portfolio website, "Available for hire" badge, advanced analytics |
| Team Account | Team profile, shared portfolio, member management, team shots |
| Employer | Post jobs, search designer marketplace, contact designers |
| Admin/Staff | Feature shots, curate "Popular" feed, moderate content |
