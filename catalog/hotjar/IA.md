---
brand: Hotjar
tagline: Understand how users behave on your site
category: Business SaaS
website: https://hotjar.com
---

# Information Architecture — Hotjar

## Overview

Hotjar is a behavior analytics and user feedback tool that shows you what users do on your website through visual tools: heatmaps (click/move/scroll), session recordings, and surveys. Unlike event-based analytics platforms, Hotjar focuses on qualitative "why" insights. The IA is organized around three pillars: Observe (heatmaps, recordings), Ask (surveys, feedback), and Engage (user interviews).

## Site Map

```
hotjar.com
├── Dashboard
│   ├── Key Metrics (Recordings, Heatmaps, Surveys)
│   ├── Highlights (saved clips)
│   └── Trends
├── Observe
│   ├── Heatmaps
│   │   ├── Click Maps
│   │   ├── Move Maps
│   │   ├── Scroll Maps
│   │   ├── Rage Click Maps
│   │   └── Comparison (device/segment)
│   ├── Recordings (Session Replay)
│   │   ├── Recording List (filterable)
│   │   ├── Recording Player
│   │   │   ├── Playback Controls
│   │   │   ├── User Journey (page sequence)
│   │   │   ├── Events Timeline
│   │   │   ├── Console Errors
│   │   │   └── User Details
│   │   └── Segments (filtered views)
│   └── Funnels
│       ├── Funnel Builder
│       └── Drop-off Analysis → Recordings
├── Ask
│   ├── Surveys
│   │   ├── Survey Builder (questions, targeting, appearance)
│   │   ├── Survey Results (responses, NPS, charts)
│   │   └── Templates
│   ├── Feedback (Widget)
│   │   ├── Incoming Feedback
│   │   ├── Feedback Widget Settings
│   │   └── Sentiment Analysis
│   └── Interviews (Engage)
│       ├── Recruit Participants
│       ├── Schedule
│       └── Incentives
├── Highlights
│   ├── Saved Clips (from recordings)
│   ├── Collections
│   └── Share / Embed
├── Trends
│   ├── Metrics Over Time
│   └── Page-Level Trends
├── Integrations
│   ├── Analytics (Google Analytics, Segment)
│   ├── A/B Testing (Optimizely, VWO)
│   ├── Collaboration (Slack, Jira, Trello)
│   └── Tag Managers
├── Settings
│   ├── Organization
│   ├── Sites
│   ├── Team Members
│   ├── Billing
│   ├── Tracking Code
│   └── Privacy (data suppression)
└── Marketing Site
    ├── Products
    ├── Pricing
    ├── Use Cases
    └── Resources
```

## Navigation Model

- **Left sidebar:** Dashboard, Heatmaps, Recordings, Surveys, Feedback, Funnels, Highlights, Trends, Engage
- **Heatmap viewer:** URL input → Select page → Toggle between Click/Move/Scroll/Rage click → Filter by device/date/segment
- **Recording player:** Full-page video player with timeline, user journey sidebar, event markers
- **Survey builder:** Step flow — Questions → Appearance → Targeting (page/behavior) → Launch
- **Highlights:** Clips saved from recordings organized in collections for sharing with team

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Site | domain, tracking code, plan | → Heatmaps, Recordings, Surveys |
| Heatmap | URL/page, type (click/move/scroll), date range, device filter | → Site |
| Recording | session ID, pages visited, duration, country, device, user ID, events | → Highlights, Site |
| Event (in recording) | type (click, rage click, u-turn, error), timestamp, element | → Recording |
| Survey | name, questions, targeting rules, appearance, status (active/paused) | → Responses, Site |
| Survey Response | answers, user info, page URL, timestamp | → Survey |
| Feedback | rating (emoji), comment, screenshot, page URL, timestamp | → Site |
| Highlight (Clip) | start/end time, note, recording reference | → Recording, Collection |
| Collection | name, highlights | → Highlights |
| Funnel | steps (URLs/events), conversion rates | → Recordings (drop-off links) |

## User Flows

### 1. Analyze Page Performance with Heatmaps
`Heatmaps → + New → Enter page URL → View click map → Switch to scroll map → See where users stop scrolling → Filter by mobile → Share with team`

### 2. Watch User Sessions
`Recordings → Filter (e.g., "Rage clicks > 0" + "Pages visited includes /checkout") → Play recording → Watch user struggle → Save highlight → Share clip`

### 3. Collect User Feedback
`Surveys → + New → Choose template (NPS, exit intent, custom) → Add questions → Set targeting (specific page, after 30s, exit intent) → Launch → Review responses`

### 4. Investigate Funnel Drop-off
`Funnels → + New → Define steps (e.g., "/products" → "/cart" → "/checkout" → "/confirmation") → View conversion rates → Click drop-off → Watch recordings of users who dropped`

## URL / Route Structure

```
insights.hotjar.com/sites/{site_id}/dashboard              # Dashboard
insights.hotjar.com/sites/{site_id}/heatmaps/{id}          # Heatmap
insights.hotjar.com/sites/{site_id}/recordings              # Recording list
insights.hotjar.com/sites/{site_id}/recordings/{id}/play    # Recording player
insights.hotjar.com/sites/{site_id}/surveys/{id}            # Survey
insights.hotjar.com/sites/{site_id}/surveys/{id}/responses  # Survey responses
insights.hotjar.com/sites/{site_id}/feedback                # Feedback inbox
insights.hotjar.com/sites/{site_id}/funnels/{id}            # Funnel
insights.hotjar.com/sites/{site_id}/highlights              # Highlights
```

## Search & Filter

- **Recording filters:** Page URL visited, country, device, duration, rage clicks, u-turns, console errors, user attributes, date range, referrer
- **Heatmap filters:** Device type, date range, custom user attributes
- **Survey response filters:** By question answer, page, date, completion status
- **Feedback filters:** By rating (emoji), date, page URL, keyword in comment
- **Funnel filters:** By user segment, device, date range

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1280px+) | Full dashboard, heatmap overlay, recording player with journey sidebar |
| Tablet | Dashboard and survey results viewable; recording player functional |
| Mobile | Limited — dashboard metrics viewable; heatmap/recording analysis requires desktop |
| Tracked site | Hotjar tracks behavior on all device sizes; heatmaps can be filtered by device |

## Access Control

| Role | Capabilities |
|------|-------------|
| Account Owner | Billing, all sites, organization settings |
| Admin | Manage team, all sites, full feature access |
| Manager | Create/manage heatmaps, recordings filters, surveys; cannot manage team |
| Viewer | View heatmaps, recordings, survey results; cannot create or modify |
| Site-level access | Members can be scoped to specific sites within an organization |
| Privacy controls | CSS selectors to suppress sensitive content in recordings; IP blocking |
