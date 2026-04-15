---
brand: Zoom
tagline: One platform to connect
category: Social & Communication
website: https://zoom.us
---

# Information Architecture — Zoom

## 1. Overview

Zoom is a unified communications platform anchored by video conferencing, expanded into team chat, phone, webinars, virtual events, and collaborative workspaces (Zoom Rooms). The IA is organized around communication modalities — Meet, Chat, Phone, Whiteboard — with a persistent left sidebar and calendar-driven meeting entry points. The platform serves individual users, teams, and enterprises with a scalable permission model.

## 2. Site Map

```
Zoom
├── Home (Dashboard)
│   ├── Upcoming Meetings
│   ├── New Meeting (instant)
│   ├── Join Meeting (by ID)
│   ├── Schedule Meeting
│   └── Recent Activity
├── Meetings
│   ├── Upcoming
│   ├── Previous (with recordings)
│   ├── Personal Meeting Room
│   └── Meeting Templates
├── In-Meeting
│   ├── Video Grid / Speaker View / Gallery
│   ├── Screen Share
│   ├── Chat (in-meeting)
│   ├── Breakout Rooms
│   ├── Reactions / Raise Hand
│   ├── Whiteboard
│   ├── Polls
│   ├── Closed Captions / Live Transcription
│   ├── Recording (local / cloud)
│   ├── Virtual Background
│   └── AI Companion (summary, notes)
├── Team Chat
│   ├── Channels (public / private)
│   ├── Direct Messages
│   ├── Group Chats
│   ├── Files
│   ├── Starred Messages
│   └── Apps / Integrations
├── Zoom Phone
│   ├── Calls (history)
│   ├── Voicemail
│   ├── Contacts
│   ├── Call Queue
│   ├── Auto Receptionist
│   └── SMS
├── Webinars
│   ├── Schedule Webinar
│   ├── Registration
│   ├── Practice Session
│   ├── Q&A
│   └── Analytics
├── Whiteboard
│   ├── My Whiteboards
│   ├── Shared Whiteboards
│   └── Templates
├── Contacts
│   ├── Company Directory
│   ├── External Contacts
│   ├── Channels
│   └── Starred
├── Zoom Rooms (conference room hardware)
├── Zoom Events (virtual event platform)
├── Zoom Apps (marketplace integrations)
├── Settings
│   ├── Profile
│   ├── Meeting Settings
│   ├── Recording
│   ├── Audio / Video
│   ├── Virtual Background
│   ├── Accessibility
│   └── Security
├── Admin Console (for admins)
│   ├── User Management
│   ├── Room Management
│   ├── Account Settings
│   ├── Usage Reports
│   └── Billing
└── Web Portal (zoom.us)
    ├── Pricing
    ├── Solutions
    ├── Resources
    ├── Support
    └── Developer (APIs / SDKs)
```

## 3. Navigation Model

- **Type**: Left sidebar (desktop app), top nav (web portal)
- **Desktop App Sidebar**: Home, Team Chat, Phone, Meetings, Contacts, Whiteboards, More (Notes, Apps)
- **Mobile App Bottom Tabs**: Meet, Team Chat, Phone, Contacts, More
- **Meeting Entry Points**: Calendar integration, "New Meeting" button, meeting URL, meeting ID, Outlook/Google plugin
- **In-Meeting Controls**: Bottom toolbar — Mute, Video, Security, Participants, Chat, Share Screen, Record, Reactions, More
- **Web Portal**: Top nav — Solutions, Pricing, Plans, Contact Sales, Resources; separate from desktop app

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Meeting | title, ID, passcode, host, participants, scheduled time, duration, recurring flag, waiting room, recording | → Host, → Participants, → Recording |
| Recording | video file, audio transcript, chat log, duration, cloud/local, share settings | → Meeting |
| Chat Message | text, sender, timestamp, reactions, files, threads, pins | → Channel/DM, → User |
| Channel | name, description, type (public/private), members, pinned messages | → Messages, → Team |
| Webinar | title, panelists, registrants, Q&A, polls, practice session | → Host, → Analytics |
| Whiteboard | canvas, title, collaborators, created date, share settings | → Users |
| Phone Call | caller, callee, duration, recording, voicemail | → User |
| Contact | name, email, phone, presence status, company | → Directory |
| AI Companion Summary | meeting summary, action items, next steps, smart chapters | → Meeting, → Recording |

## 5. User Flows

### Joining a Meeting
1. Receive meeting link via email/calendar/chat → Click link
2. Browser opens → Option to join via app or web client
3. Preview video/audio → Select camera, microphone, virtual background
4. Click "Join" → Enter waiting room (if enabled) → Host admits
5. In meeting: unmute, turn on video, share screen, chat, react

### Scheduling a Meeting
1. Home → "Schedule" → Set title, date/time, duration, recurring options
2. Configure: Waiting room, passcode, video on/off defaults, recording settings
3. Add alternative hosts, enable breakout rooms
4. Save → Calendar invite sent to participants → Meeting link generated

### Using AI Companion
1. During meeting, AI Companion generates real-time summary
2. After meeting ends, summary with action items delivered to host
3. Host reviews and shares summary with participants via chat or email
4. Smart chapters divide recording into navigable sections

## 6. URL / Route Structure

```
zoom.us/                                   # Marketing homepage
zoom.us/join                               # Join meeting by ID
zoom.us/j/{meetingId}                      # Meeting join link
zoom.us/my/{personalLinkName}              # Personal meeting room
zoom.us/meeting/schedule                   # Schedule a meeting
zoom.us/profile                            # User profile
zoom.us/meeting                            # Meeting list
zoom.us/recording                          # Cloud recordings
zoom.us/webinar                            # Webinar management
zoom.us/whiteboard                         # Whiteboards
zoom.us/phone                              # Zoom Phone dashboard
zoom.us/signin                             # Login
zoom.us/pricing                            # Plan comparison
zoom.us/docs/                              # Developer docs
marketplace.zoom.us/                       # Zoom Apps marketplace
```

## 7. Search & Filter

- **Contact Search**: Search by name, email across company directory and external contacts
- **Chat Search**: Full-text search across channels and DMs; filter by date, sender, channel
- **Meeting Search**: Find past meetings by title, date, or participant
- **Recording Search**: Search cloud recordings; AI-generated transcript search within recordings
- **Smart Chapters**: Jump to specific sections of recorded meetings
- **Marketplace Search**: Browse and search Zoom Apps by category
- **Admin Search**: User lookup, usage reports by date range, room search

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop App (primary) | Left sidebar + main content area; Gallery view up to 49 participants; multi-monitor support |
| Mobile App | Bottom tab bar; single-pane; portrait/landscape meeting view; simplified controls |
| Tablet | Split view for chat + meeting; gallery view scaled; landscape optimized |
| Web Client (browser) | Near-parity with desktop app; no breakout room hosting (limitation); top toolbar |
| Zoom Rooms (hardware) | Touch panel for controls; large display for gallery/speaker view; designed for conference rooms |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Free User | Host 40-min meetings (100 participants), Team Chat, Whiteboard (3 boards), basic Mail & Calendar |
| Pro User | 30-hour meetings, 100 participants, cloud recording (5 GB), AI Companion, custom branding |
| Business User | 300 participants, SSO, managed domains, company branding, admin dashboard |
| Enterprise User | 1000 participants, unlimited cloud storage, dedicated support, Zoom Phone, Webinar, Events |
| Meeting Host | Start/end meeting, admit from waiting room, mute participants, manage breakout rooms, record |
| Co-Host | Same as host except cannot end meeting or assign other co-hosts |
| Participant | Join, unmute self, share screen (if permitted), chat, raise hand, react |
| Webinar Panelist | Video/audio enabled, present, Q&A; attendees are view-only |
| Webinar Attendee | Watch, submit Q&A, participate in polls; no video/audio unless promoted |
| Admin | Manage users, configure settings, view reports, assign licenses, manage Zoom Rooms |
| Room Controller | Start/join meetings on Zoom Room hardware; manage room calendar |
