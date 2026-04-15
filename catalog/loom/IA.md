---
brand: Loom
tagline: Say it with video — async video messaging for work
category: Productivity
website: https://loom.com
---

# Information Architecture — Loom

## Overview

Loom is an async video messaging platform that lets users record screen, camera, or both, and instantly share a link. The IA is deliberately simple — the core loop is Record → Share → Watch → React. The library organizes recordings into folders, while viewer analytics (who watched, watch %, CTA clicks) turn passive video into a measurable communication tool.

## Site Map

```
loom.com
├── My Library
│   ├── My Videos
│   ├── Shared with Me
│   ├── Starred
│   └── Archive
├── Workspace Library
│   ├── Folders
│   │   └── [Folder] → Videos
│   └── All Videos
├── Video Player Page
│   ├── Video Player
│   ├── Transcript (auto-generated)
│   ├── Chapters
│   ├── Comments (timestamped)
│   ├── Emoji Reactions
│   ├── CTA Button
│   └── Viewer Insights
├── Recorder
│   ├── Screen + Camera
│   ├── Screen Only
│   ├── Camera Only
│   └── Recording Controls (pause, restart, drawing tools)
├── Settings
│   ├── Account
│   ├── Workspace
│   ├── Recording Defaults
│   ├── Notifications
│   └── Integrations
└── Marketing Site
    ├── Use Cases (Sales, Engineering, Product, etc.)
    ├── Enterprise
    ├── Pricing
    └── Resources
```

## Navigation Model

- **Left sidebar:** My Library, Workspace Library, Folders tree, Shared with Me, Starred
- **Top bar:** Search, Record button (primary CTA), Notifications, Account menu
- **Video page:** Player with transcript sidebar, comments below, viewer insights in analytics tab
- **Recorder:** Desktop app or Chrome extension; floating recording controls overlay

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, members, plan | → Folders, Videos |
| Folder | name, privacy | → Videos, Sub-folders |
| Video (Loom) | title, thumbnail, duration, recording type, created date | → Transcript, Comments, Viewer Analytics, CTA |
| Transcript | auto-generated text, editable, timestamps | → Video |
| Chapter | title, start time | → Video |
| Comment | text, timestamp, author, emoji reactions | → Video |
| CTA | type (link/button), text, URL | → Video |
| Viewer Insight | viewer identity, watch %, watch date, CTA clicked | → Video |

## User Flows

### 1. Record and Share
`Click Record → Choose screen+camera → Record → Stop → Auto-upload → Copy link → Paste in Slack/email`

### 2. Review a Loom
`Open link → Watch video → Read transcript → Add timestamped comment or emoji reaction → Click CTA if present`

### 3. Analyze Engagement
`My Library → Select video → Analytics tab → View total views, unique viewers, avg watch %, completion rate, CTA click rate`

### 4. Organize Workspace
`Workspace Library → Create Folder (e.g., "Onboarding") → Drag videos into folder → Set folder privacy → Share folder link`

## URL / Route Structure

```
loom.com/looms/videos                     # My Videos library
loom.com/looms/shared                     # Shared with Me
loom.com/looms/folders/{folder_id}        # Folder view
loom.com/share/{video_id}                 # Public/shared video player
loom.com/looms/{video_id}/analytics       # Video analytics
loom.com/spaces/{workspace_id}            # Workspace library
loom.com/settings                         # Account settings
```

## Search & Filter

- **Global search:** Search videos by title, transcript content, and folder name
- **Library filters:** Filter by recording type, date range, duration, creator
- **Sort:** By date created, last viewed, title, duration
- **Transcript search:** Within a video, search transcript text to jump to a timestamp
- **Workspace search:** Admins can search across all workspace videos

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Full library + video player with transcript sidebar |
| Tablet (768–1023px) | Single-column library, transcript below video |
| Mobile | View-only (watch, comment, react); recording via mobile app; bottom nav (Library, Record, Notifications) |

## Access Control

| Role | Capabilities |
|------|-------------|
| Workspace Admin | Manage members, billing, workspace settings, all content |
| Creator (member) | Record, upload, edit own videos, organize into folders |
| Creator Lite | Record and share, limited editing features |
| Viewer (workspace) | View videos in workspace library, comment |
| External Viewer | Access via shared link, can comment if enabled, no library access |
| Password-protected | Requires password to view (per-video setting) |
