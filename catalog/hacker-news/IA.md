---
brand: Hacker News
tagline: News for hackers, by hackers
category: Social & Communication
website: https://news.ycombinator.com
---

# Information Architecture — Hacker News

## 1. Overview

Hacker News (HN) is Y Combinator's minimalist technology news aggregator and discussion forum. The IA is intentionally sparse — a single-column list of links ranked by a gravity-based algorithm, threaded comments, and virtually no media embellishments. This design philosophy prioritizes substance over presentation, rewarding intellectual curiosity and deep technical discussion. The site has barely changed its layout since 2007.

## 2. Site Map

```
Hacker News
├── Front Page (Top Stories)
├── New (newest submissions)
├── Past (top stories from past days)
├── Comments (recent comments across all threads)
├── Ask HN
│   └── [Ask HN submissions — community questions]
├── Show HN
│   └── [Show HN submissions — project demos]
├── Jobs
│   └── [YC company job postings]
├── Submit
│   └── Submit link or text post
├── Item (story/comment detail)
│   ├── Story metadata (points, submitter, time, comment count)
│   └── Threaded comments (recursive)
├── User Profile
│   ├── About
│   ├── Karma
│   ├── Submissions
│   └── Comments
├── Threads (user's comment history)
├── Favorites (saved stories/comments)
├── Leaders (top karma users)
├── Guidelines
├── FAQ
├── API
│   ├── /v0/topstories
│   ├── /v0/newstories
│   ├── /v0/item/{id}
│   └── /v0/user/{id}
└── Lists
    ├── Best (highest-voted recent stories)
    ├── Active (most-discussed)
    └── Noob Comments (new users' comments for mentoring)
```

## 3. Navigation Model

- **Type**: Single horizontal text nav bar at top (orange header)
- **Top Bar Links**: Y logo | Hacker News | new | past | comments | ask | show | jobs | submit
- **Right Side**: Login/logout, username link
- **No Sidebar**: Pure single-column layout
- **Pagination**: "More" link at bottom of every list page (30 items per page)
- **Thread Navigation**: Click comment count → full threaded discussion; indent = nesting depth
- **No JavaScript-based Navigation**: All navigation is server-rendered page loads

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Story | title, URL (or text body for Ask/Show HN), points, submitter, timestamp, comment count | → Comments, → User |
| Comment | text (markdown-ish), author, timestamp, parent, points (hidden for 24h) | → Story, → Parent Comment, → User |
| Ask HN | title (prefixed "Ask HN:"), text body, points, submitter | → Comments |
| Show HN | title (prefixed "Show HN:"), URL, text body, points | → Comments |
| Job Posting | title, URL, company (YC batch), timestamp | standalone (no comments/votes) |
| User Profile | username, created date, karma, about (text), submissions, comments | → Stories, → Comments |
| Poll (rare) | title, options, vote counts | → Comments |

## 5. User Flows

### Reading & Voting
1. Visit front page → Scan ranked list of 30 story titles with domains
2. Click title → Opens external link (or HN text post)
3. Click comment count → View threaded discussion
4. Upvote stories/comments (if >500 karma: can also downvote comments)
5. Click "More" at bottom → Next page of stories

### Submitting a Story
1. Click "submit" in nav → Enter URL and title (or text for Ask/Show HN)
2. Submit → Story appears on /newest
3. If it gains upvotes quickly, it rises to the front page via ranking algorithm
4. Points decay over time (gravity model): score / (age + 2)^1.8

### Show HN Flow
1. Submit with title starting "Show HN:" + project URL + description
2. Appears on /show page and /newest
3. Community provides feedback in comments
4. Successful Show HN posts reach front page

## 6. URL / Route Structure

```
news.ycombinator.com/                       # Front page (top stories)
news.ycombinator.com/newest                 # New submissions
news.ycombinator.com/past?page={date}       # Past top stories
news.ycombinator.com/newcomments            # Recent comments
news.ycombinator.com/ask                    # Ask HN
news.ycombinator.com/show                   # Show HN
news.ycombinator.com/jobs                   # YC job postings
news.ycombinator.com/item?id={id}           # Story or comment detail
news.ycombinator.com/user?id={username}     # User profile
news.ycombinator.com/threads?id={username}  # User's comments
news.ycombinator.com/favorites?id={username}# User's favorites
news.ycombinator.com/submit                 # Submit form
news.ycombinator.com/leaders                # Top karma leaderboard
hacker-news.firebaseio.com/v0/             # Public API root
```

## 7. Search & Filter

- **No Built-in Search**: HN has no native search feature on the site
- **Algolia HN Search**: hn.algolia.com provides full-text search (official integration)
  - Filter by stories, comments, date range, popularity
- **List Filters**: Top / New / Best / Active / Ask / Show / Jobs — predefined views
- **Past Page**: Browse top stories by specific date
- **No Tags/Categories**: Stories are not categorized; ranking is purely algorithmic
- **Flagging**: Users can flag inappropriate content; flagged stories may be de-ranked or killed

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| All Sizes | Same HTML layout — no responsive breakpoints; table-based layout from 2007 |
| Mobile | Horizontal scroll possible on very narrow screens; text remains readable; tap targets are small |
| Desktop | Narrow centered column (~85% width); generous whitespace; monospace-friendly |
| No Media Queries | Site predates responsive web design; works through simplicity rather than adaptation |
| Third-Party Apps | Mobile experience primarily through third-party clients (Harmonic, Hack, Materialistic) that provide proper mobile UI |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Anonymous Visitor | Read all stories and comments; view profiles; use API |
| Registered User | Submit stories, comment, upvote, flag, edit own posts (within ~2 hours), save favorites |
| User (karma > 500) | Downvote comments, access to /bestcomments |
| User (karma > 30) | Can set "showdead" to see killed/flagged posts |
| Moderator (dang, sctb) | Edit titles, merge duplicates, kill/unkill stories, detach comments, ban users, add [flagged]/[dead] labels |
| New User | Comments may appear in /newcomments for community mentoring; rate-limited posting |
| Banned/Hellbanned | Posts visible only to self; invisible to others (shadow ban) |
| YC Founder | Can post jobs to /jobs; may have special submission privileges |
