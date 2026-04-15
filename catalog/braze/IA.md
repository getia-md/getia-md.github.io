---
brand: Braze
tagline: Power customer engagement that drives growth
category: Business SaaS
website: https://braze.com
---

# Information Architecture — Braze

## Overview

Braze is a customer engagement platform that orchestrates cross-channel messaging — push notifications, email, in-app messages, SMS, webhooks, and Content Cards — through a unified campaign and Canvas (journey) system. The IA is organized around Messaging (campaigns/canvases), Audience (user profiles and segments), and Data (events, attributes, currents). Canvas, Braze's visual journey builder, is the centerpiece for multi-step, branching engagement flows.

## Site Map

```
braze.com
├── Dashboard (Home)
│   ├── Campaign Performance Overview
│   ├── MAU / DAU Stats
│   └── Recent Campaigns
├── Messaging
│   ├── Campaigns
│   │   ├── All Campaigns
│   │   ├── [Campaign]
│   │   │   ├── Channel (Push / Email / In-App / SMS / Content Card / Webhook)
│   │   │   ├── Compose (content editor)
│   │   │   ├── Target Audience (segment + filters)
│   │   │   ├── Delivery (scheduled / action-based / API-triggered)
│   │   │   ├── Conversions (tracking events)
│   │   │   └── Analytics
│   │   └── + Create Campaign
│   ├── Canvas (Journey Builder)
│   │   ├── All Canvases
│   │   ├── [Canvas]
│   │   │   ├── Visual Builder
│   │   │   │   ├── Entry (audience + schedule)
│   │   │   │   ├── Message Steps
│   │   │   │   ├── Delay Steps
│   │   │   │   ├── Decision Split
│   │   │   │   ├── Experiment Paths (A/B)
│   │   │   │   ├── Audience Paths
│   │   │   │   ├── Action Paths
│   │   │   │   └── Webhook / Content Update Steps
│   │   │   └── Analytics
│   │   └── + Create Canvas
│   └── Templates
│       ├── Email Templates
│       ├── Content Block Templates
│       ├── Push Templates
│       └── In-App Message Templates
├── Audience
│   ├── Segments
│   │   ├── Segment Builder (nested filters)
│   │   └── Segment Extensions (SQL)
│   ├── User Search
│   │   └── User Profile
│   │       ├── Attributes
│   │       ├── Custom Events
│   │       ├── Purchases
│   │       ├── Devices
│   │       ├── Message History
│   │       └── Engagement (campaigns/canvases received)
│   └── Cohorts (import from analytics tools)
├── Data
│   ├── Custom Events
│   ├── Custom Attributes
│   ├── Catalogs (product data)
│   ├── Currents (real-time data export)
│   ├── Data Transformation
│   └── Preferences Center
├── Analytics
│   ├── Campaign Comparison
│   ├── Report Builder
│   ├── Global Control Group
│   ├── Retention Reports
│   └── Revenue Reports
├── Settings
│   ├── App Groups
│   ├── Manage Users (team)
│   ├── API Settings (keys, endpoints)
│   ├── Email Settings (domains, IPs)
│   ├── Push Settings (APNs, FCM)
│   ├── Connected Content (API calls in templates)
│   └── Subscription Groups
└── Marketing Site
    ├── Platform
    ├── Channels
    ├── Solutions
    └── Resources
```

## Navigation Model

- **Left sidebar:** Dashboard, Campaigns, Canvas, Templates, Segments, User Search, Data, Analytics, Settings
- **Campaign builder:** Step flow — Channel → Compose → Target → Delivery → Conversions → Launch
- **Canvas builder:** Full-screen visual canvas — drag steps, connect with arrows, configure each step inline
- **User profile:** Multi-tab view — attributes, events, purchases, devices, engagement history
- **Top bar:** App group switcher, search, create button, workspace settings

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| App Group | name, API key, apps (iOS/Android/Web) | → Users, Campaigns, Canvases |
| User Profile | external_id, email, phone, attributes, events, devices | → Segments, Campaigns, Canvases |
| Segment | name, filters (attribute/event/purchase/retarget/cohort), size | → Users, Campaigns, Canvases |
| Campaign | name, channel(s), content, audience, delivery, conversions | → Segment, Analytics |
| Canvas | name, steps (message/delay/split/experiment), entry audience, schedule | → Segments, Analytics |
| Canvas Step | type, content, delay duration, split conditions | → Canvas |
| Template | type (email/push/in-app), content, variables | → Campaigns, Canvases |
| Content Block | name, HTML/Liquid content, reusable across templates | → Templates |
| Custom Event | name, properties, volume | → User Profile, Segments |
| Custom Attribute | name, data type, values | → User Profile, Segments |
| Currents | connector (S3, Azure Blob, etc.), event types, real-time export | → Analytics pipeline |
| Subscription Group | name, channel (email/SMS), members | → Users |

## User Flows

### 1. Launch a Push Campaign
`Campaigns → + Create → Push Notification → Compose (title, body, image, deep link) → Target segment → Set delivery (scheduled or action-based) → Set conversion event → Launch`

### 2. Build a Multi-Step Canvas
`Canvas → + Create → Set entry audience + schedule → Add Message step (welcome email) → Add Delay (2 days) → Add Decision Split (opened email?) → Branch A: Send push → Branch B: Send reminder email → Launch`

### 3. Analyze Cross-Channel Performance
`Analytics → Report Builder → Select campaigns/canvases → Compare metrics (sends, opens, clicks, conversions, revenue) → Export report`

### 4. Search and Inspect a User
`Audience → User Search → Enter email/external_id → View profile → Check attribute values → Review event history → See which campaigns/canvases they received → Debug delivery issues`

## URL / Route Structure

```
dashboard.braze.com/{app_group}/                           # Dashboard
dashboard.braze.com/{app_group}/engagement/campaigns        # Campaigns
dashboard.braze.com/{app_group}/engagement/campaigns/{id}   # Campaign detail
dashboard.braze.com/{app_group}/engagement/canvases         # Canvases
dashboard.braze.com/{app_group}/engagement/canvases/{id}    # Canvas builder
dashboard.braze.com/{app_group}/engagement/segments         # Segments
dashboard.braze.com/{app_group}/users/user_search           # User search
dashboard.braze.com/{app_group}/data/custom_events          # Custom events
dashboard.braze.com/{app_group}/data/currents               # Currents
dashboard.braze.com/{app_group}/reports/                    # Analytics
```

## Search & Filter

- **User search:** By email, external_id, phone, Braze user_id, alias
- **Segment builder:** Multi-condition filter with AND/OR logic across attributes, events (count/time/property), purchases, devices, campaign/canvas retargeting
- **Campaign/Canvas list:** Search by name, filter by channel, status (active/draft/stopped), tags
- **Event/Attribute search (Data):** Search custom events and attributes by name, view volume
- **Analytics filters:** Date range, channel, campaign/canvas comparison

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1280px+) | Full dashboard with Canvas visual builder, campaign composer, analytics |
| Tablet | Dashboard and campaign list viewable; Canvas builder requires desktop |
| Mobile | Not supported — Braze dashboard is desktop-only |
| End-user channels | Push, in-app messages, Content Cards, and email are all mobile-responsive by design |

## Access Control

| Role | Capabilities |
|------|-------------|
| Admin | Full access — users, settings, campaigns, canvases, data, billing |
| Developer | API settings, data management, technical configuration |
| Marketer (full) | Create/edit/launch campaigns and canvases, manage segments, view analytics |
| Marketer (limited) | Create drafts, cannot launch; view analytics |
| Analyst | View campaigns, analytics, user profiles; read-only |
| Custom Role | Granular per-feature permissions (Enterprise) |
| App Group isolation | Users scoped to specific app groups; no cross-group access |
