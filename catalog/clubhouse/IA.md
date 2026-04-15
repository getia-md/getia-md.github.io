---
brand: Clubhouse
tagline: Drop in and talk about anything
category: Social & Communication
website: https://joinclubhouse.com
---

# Information Architecture — Clubhouse

## 1. Overview

Clubhouse is a drop-in audio conversation platform where users join live rooms to listen, speak, and network. The IA centers on real-time audio rooms organized by topics and clubs, with a hallway-style feed that surfaces active and upcoming conversations. The ephemeral nature of live rooms (now supplemented by replays) creates urgency, while clubs and following graphs provide persistent community structure.

## 2. Site Map

```
Clubhouse
├── Hallway (Home Feed)
│   ├── Live Rooms (happening now)
│   ├── Upcoming Rooms (scheduled)
│   └── Replays (recorded rooms)
├── Explore / Search
│   ├── People
│   ├── Clubs
│   ├── Topics
│   └── Suggested Rooms
├── Room (live audio)
│   ├── Stage (speakers)
│   ├── Audience
│   ├── Raise Hand
│   ├── Chat (text backchannel)
│   ├── Links / Pinned
│   └── Replay toggle
├── Clubs
│   ├── Club Profile
│   ├── Members
│   ├── Rooms (past/scheduled)
│   └── Rules / Description
├── Notifications
│   ├── Room Invites
│   ├── Followers
│   ├── Club Updates
│   └── Scheduled Reminders
├── Profile
│   ├── Bio
│   ├── Clubs
│   ├── Followers / Following
│   ├── Replays
│   └── Interests (topics)
├── Messages (DMs / Backchannel)
├── Create
│   ├── Start a Room (open / social / closed)
│   └── Schedule a Room
└── Settings
    ├── Account
    ├── Notifications
    ├── Privacy
    └── Linked Accounts
```

## 3. Navigation Model

- **Type**: Bottom tab bar (mobile-first)
- **Bottom Tabs**: Hallway (home), Search/Explore, Notifications, Messages, Profile
- **Room Entry**: Tap room card from Hallway → drops into live audio room
- **FAB (Floating Action Button)**: Green "Start a Room" button always visible at bottom
- **Room Navigation**: Minimize room to floating pill at top while browsing other screens
- **Topic Chips**: Tappable interest tags in Explore to filter rooms by topic

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Room | title, topic tags, room type (open/social/closed), speakers, listener count, start time, replay flag | → Club, → Speakers, → Replay |
| Replay | audio recording, room title, speakers, duration, timestamp, clip support | → Room, → Club |
| Club | name, avatar, description, rules, member count, admin list, topic | → Rooms, → Members |
| User Profile | name, username, bio, photo, follower count, interests/topics, clubs | → Rooms, → Clubs |
| Scheduled Event | title, date/time, description, club, hosts, reminder count | → Room (when live) |
| Topic | name, related topics | → Rooms, → Clubs, → Profiles |
| Message | text, sender, timestamp, room link | → User(s) |

## 5. User Flows

### Joining a Live Room
1. Open app → Hallway shows active rooms with speaker avatars and listener count
2. Tap room card → Immediately dropped into room as listener (audio plays)
3. Raise hand icon → Moderator can invite to stage → Unmute and speak
4. Leave quietly at any time by tapping "Leave" button

### Scheduling a Room
1. Tap "Start a Room" → Choose "Schedule for later"
2. Set title, topic, date/time, co-hosts, club (optional)
3. Share event link → Followers receive notification before start
4. At scheduled time, creator opens room → Attendees get ping to join

### Exploring Topics
1. Tap Explore → Browse topic categories (Tech, Music, Health, etc.)
2. Tap topic → See live rooms, upcoming events, and clubs under that topic
3. Follow topic → Hallway prioritizes rooms matching followed topics

## 6. URL / Route Structure

```
joinclubhouse.com/                          # Landing page / download
joinclubhouse.com/room/{roomId}             # Room deeplink (opens in app)
joinclubhouse.com/club/{clubSlug}           # Club profile
joinclubhouse.com/event/{eventId}           # Scheduled event
joinclubhouse.com/@{username}               # User profile
joinclubhouse.com/topic/{topicSlug}         # Topic page
```

## 7. Search & Filter

- **Universal Search**: People, clubs, topics, rooms
- **Hallway Filters**: "For You" (algorithmic) vs. following-based feed
- **Topic Browsing**: Explore tab organized by category with horizontal scroll
- **Club Discovery**: Search clubs by name or browse by topic
- **Language Filter**: Filter rooms by spoken language
- **No Full-Text Audio Search**: Audio content is not transcribed for search (replays are browse-only)

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (primary) | Single-pane; bottom tab bar; rooms are full-screen audio with speaker grid; floating minimized room pill |
| Tablet | Enlarged phone layout; larger speaker grid in rooms |
| Web (joinclubhouse.com) | Marketing site + limited room listening on web; profile and club pages viewable; deeplinks redirect to app |
| Desktop | Not a primary platform; web-based listening added for accessibility |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Listener | Join open rooms, listen, raise hand, react with emoji, view profiles |
| Speaker (on stage) | Speak, mute/unmute self, share links |
| Room Moderator | Move users to stage, mute speakers, remove users, end room, pin links, toggle replay |
| Club Admin | Create rooms under club, manage members, edit club info, schedule events |
| Club Member | Join club rooms, receive notifications, appear in member list |
| Registered User | Follow people/clubs, set interests, DM, start/schedule rooms |
| Non-registered Visitor | View landing page; must download app and sign up to access content |
