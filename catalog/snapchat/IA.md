---
brand: Snapchat
tagline: Life's more fun when you live in the moment
category: Social & Communication
website: https://snapchat.com
---

# Information Architecture — Snapchat

## 1. Overview

Snapchat is an ephemeral-first multimedia messaging platform centered on camera-driven communication, AR experiences, and short-form content. The IA revolves around the camera as the home screen, with horizontal swipe navigation to access conversations, stories, Snap Map, and Spotlight. Every surface is designed for speed — capture, augment, share, and move on.

## 2. Site Map

```
Snapchat
├── Camera (Home)
│   ├── AR Lenses
│   ├── Filters
│   ├── Sounds
│   └── Snap / Story / Spotlight Publish
├── Chat (swipe right)
│   ├── Friend Conversations
│   ├── Group Chats
│   ├── My AI (ChatGPT-powered assistant)
│   └── Snap Streaks
├── Stories (swipe left)
│   ├── Friends' Stories
│   ├── Subscriptions
│   ├── For You
│   └── Discover (publisher stories)
├── Snap Map (swipe down or tab)
│   ├── Friends' Locations
│   ├── Heatmap
│   ├── Places (businesses)
│   └── Our Story (location-based)
├── Spotlight (tab)
│   ├── Feed (algorithmic)
│   ├── Trending
│   └── Sounds / Topics
├── Profile
│   ├── Snapcode / Bitmoji
│   ├── Snap Score
│   ├── My Stories
│   ├── Memories (Snaps, Stories, Camera Roll)
│   ├── Spotlight submissions
│   └── Snapchat+ (subscription)
├── Settings
│   ├── Account
│   ├── Privacy
│   ├── Notifications
│   ├── Memories
│   ├── Connected Apps
│   └── Snapchat+ Management
└── Web/Marketing Site
    ├── Download
    ├── Advertising (Snap Ads Manager)
    ├── AR (Lens Studio)
    ├── Newsroom
    ├── Safety Center
    └── Careers
```

## 3. Navigation Model

- **Type**: Camera-centric with tab bar + swipe gestures
- **Bottom Tab Bar**: Snap Map, Chat, Camera (center), Stories, Spotlight
- **Gesture Nav**: Swipe right → Chat; Swipe left → Stories; Swipe down → Map
- **Camera Controls**: Shutter button (tap = photo, hold = video), lens carousel, flip camera
- **Profile Access**: Top-left Bitmoji avatar → profile, settings, Snapchat+
- **Search**: Top bar — universal search for friends, groups, Discover, Lenses, Places

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Snap | media (photo/video), duration, lens/filter, caption, stickers, send-to list, viewed flag | → Conversation, → Story, → Spotlight |
| Story | snaps (ordered), owner, timestamp, expiry (24h), viewers list, screenshot count | → Profile, → Discover |
| Chat Message | text/media/sticker/Bitmoji, sender, timestamp, opened/saved status, streak count | → Conversation |
| Spotlight Post | video, caption, sounds, hashtags, likes, shares, view count | → Profile, → Sound |
| Lens | 3D model/effect, creator, category, lens link | → Snap, → Lens Studio |
| Memory | saved snap/story, date, location, searchable labels | → Profile |
| Place | name, address, coordinates, category, hours, Snaps from location | → Snap Map |
| Snap Streak | participants (2), current count, expiry timer | → Chat |

## 5. User Flows

### Daily Story Posting
1. Open app → lands on Camera → Select lens or filter
2. Capture photo/video → Add text, stickers, drawings
3. Tap "Story" button → Choose "My Story" / "Close Friends" / custom list
4. Story appears in friends' Stories tab; auto-expires in 24 hours

### Snap Map Exploration
1. Tap Map tab or swipe down from Camera
2. See friend Bitmojis on map (if sharing location)
3. Tap Heatmap hotspot → View public "Our Story" snaps from that location
4. Tap Place pin → See business info, hours, Snaps tagged there

### Spotlight Content Discovery
1. Tap Spotlight tab → Vertical scroll through short-form videos
2. Double-tap to like → Swipe up for next → Tap sound badge to see other videos using same audio
3. Tap creator profile → Follow or subscribe

## 6. URL / Route Structure

```
snapchat.com/                           # Marketing homepage
snapchat.com/download                   # App download
snapchat.com/add/{username}             # Add friend deeplink
snapchat.com/t/{snapcode}               # Snapcode redirect
snapchat.com/spotlight/{id}             # Spotlight video (web view)
snapchat.com/discover/{publisher}       # Publisher Discover page
story.snapchat.com/s/{storyId}          # Shared story link
lens.snapchat.com/                      # Lens explorer
ads.snapchat.com/                       # Ads Manager
ar.snap.com/                            # Lens Studio portal
map.snapchat.com/                       # Snap Map web view
newsroom.snap.com/                      # Press / Newsroom
```

## 7. Search & Filter

- **Universal Search Bar**: Friends, groups, Discover publishers, Lenses, Places, sounds, Topics
- **Chat Search**: Search within individual conversations
- **Memories Search**: Auto-labeled by date, location, content type (AI-generated labels)
- **Spotlight**: Browse by trending sounds, topics, hashtags
- **Snap Map**: Search places by name, category, or address
- **Discover**: Filtered by subscriptions and "For You" algorithmic recommendations

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (primary) | Full gesture-based navigation; camera is default home screen; single-pane with tab bar |
| Tablet | Scaled phone layout; split view for Chat (list + thread) |
| Web (snapchat.com) | Marketing site only — no full app experience; Spotlight videos viewable; Snap Map viewable |
| Desktop (web.snapchat.com) | Limited chat + calling via web browser; no camera features |
| Lens Studio (Desktop) | Full desktop AR creation tool; separate application |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Registered User | Send Snaps, post Stories, chat, view Map, browse Spotlight, use Lenses |
| Snapchat+ Subscriber | Custom app icons, Story rewatch indicator, priority replies, extended streaks, My AI customization |
| Creator (Spotlight) | Post Spotlight videos, access analytics, receive Creator Fund payouts |
| Discover Publisher | Publish editorial content on Discover, access Snap Publisher tools |
| Advertiser | Access Ads Manager, create campaigns, view analytics, manage Snap Pixel |
| Minor (< 13) | Account creation blocked; 13-17 have restricted settings (Family Center) |
| Ghost Mode User | Location hidden on Snap Map; can still view friends' locations |
| Blocked User | Cannot send Snaps/chats, view Stories, or see location of blocking user |
