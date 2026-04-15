---
brand: BeReal
tagline: Your friends for real
category: Social & Communication
website: https://bereal.com
---

# Information Architecture — BeReal

## 1. Overview

BeReal is an anti-curation social platform that prompts all users simultaneously at a random time each day to share an unfiltered dual-camera photo within a 2-minute window. The IA is radically simple — no followers count, no likes, no filters — designed to strip away performative social media behaviors. The entire experience revolves around one daily moment of authenticity.

## 2. Site Map

```
BeReal
├── Daily Feed
│   ├── Friends Tab (mutual friends' BeReals)
│   ├── Discovery Tab (public BeReals worldwide)
│   └── BTS (Bonus BeReals — extra posts)
├── Post Capture
│   ├── Dual Camera Capture (front + back)
│   ├── Retake (with counter displayed)
│   ├── Caption
│   └── Location tag (optional)
├── BeReal Detail
│   ├── Photo (dual-view: selfie + world)
│   ├── RealMojis (selfie reactions)
│   ├── Comments
│   ├── Time posted vs. notification time
│   └── Retake count
├── Memories
│   ├── Calendar view (your past BeReals)
│   └── Monthly/Yearly recaps
├── Profile
│   ├── Username
│   ├── Friends list
│   ├── Streaks
│   └── BeReal history
├── Friends
│   ├── Add Friends (contacts, username, link)
│   ├── Friend Requests
│   └── Suggestions
├── Notifications
│   ├── Daily "Time to BeReal!" push
│   ├── Friend reactions
│   └── New friend requests
└── Settings
    ├── Account
    ├── Privacy
    ├── Notifications
    ├── Memories (export)
    └── Help / Contact
```

## 3. Navigation Model

- **Type**: Minimal bottom tab bar
- **Bottom Tabs**: Feed, Friends (or Discovery), Profile
- **Daily Notification**: Push notification → opens camera directly
- **Post Button**: Prominent capture button; only appears during daily window or for BTS
- **Feed Toggle**: Friends / Discovery tab switch at top of feed
- **Minimal Depth**: Almost all content is 1–2 taps from the feed

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| BeReal Post | front photo, back photo, timestamp, caption, location, retake count, late flag | → User, → RealMojis, → Comments |
| RealMoji | selfie reaction (photo), reactor user, timestamp | → BeReal Post, → User |
| Comment | text, author, timestamp | → BeReal Post |
| BTS (Bonus) | additional dual-camera post, same attributes as BeReal | → User |
| Memory | date, front/back photos, caption, location | → Calendar, → User |
| Streak | two users, streak count, active/expired | → Friends |
| User Profile | username, display name, avatar (last BeReal), friend count, streak info | → Posts, → Friends |

## 5. User Flows

### Daily BeReal Capture
1. Random push notification: "Time to BeReal!" → All users notified simultaneously
2. Open app → Camera activates with 2-minute countdown
3. Capture → Front and back cameras fire simultaneously
4. Add optional caption and location → Post
5. If posted late, "Late" badge displayed with exact delay time
6. Retake allowed, but retake count is visible to friends

### Reacting with RealMoji
1. View friend's BeReal in feed → Tap RealMoji bar
2. Front camera activates → Capture selfie as reaction
3. Choose from preset expressions or custom selfie
4. RealMoji appears on the friend's post

### Viewing Memories
1. Tap Profile → "Memories" section
2. Calendar grid shows one thumbnail per day
3. Tap date → View that day's BeReal (front + back)
4. Scroll through months for personal time capsule

## 6. URL / Route Structure

```
bereal.com/                             # Marketing landing page
bereal.com/download                     # App store redirect
bereal.com/{username}                   # Profile deeplink (opens in app)
bfrn.link/{shortcode}                   # Shared BeReal deeplink
```

## 7. Search & Filter

- **Friend Search**: Search by username or real name to add friends
- **Discovery Feed**: Browse public BeReals by region (no keyword search)
- **Memories**: Browse by date (calendar view); no text search
- **No Hashtags**: No tagging, trending, or algorithmic discovery by design
- **Intentionally Minimal**: Search features are deliberately limited to discourage clout-seeking behavior

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (primary & only) | Full-screen vertical layout; dual-photo stacked or picture-in-picture; bottom tab bar |
| Tablet | Scaled phone layout; no optimized tablet experience |
| Web (bereal.com) | Marketing and download page only; no feed viewing on web |
| Desktop | No desktop app or web app; mobile-only experience by design |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Registered User | Post daily BeReal, view friends' posts, send RealMojis, comment, add friends |
| Non-poster (today) | Cannot view friends' BeReals until they post their own (reciprocity gate) |
| Late Poster | Can still post after 2-min window; "Late" badge shown permanently on that post |
| Friend | View each other's BeReals, react with RealMojis, comment, see streaks |
| Non-friend | Cannot view private BeReals; can see public Discovery posts |
| Non-registered | View marketing site; must download app and sign up to participate |
| Blocked User | Cannot view or interact with blocking user's content; invisible to each other |
