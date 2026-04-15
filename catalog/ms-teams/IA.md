---
brand: Microsoft Teams
tagline: The hub for teamwork
category: Social & Communication
website: https://teams.microsoft.com
---

# Information Architecture — Microsoft Teams

## 1. Overview

Microsoft Teams is a collaboration platform integrating persistent chat, video meetings, file sharing, and third-party app integration within the Microsoft 365 ecosystem. The IA is organized around Teams (groups) and Channels (topic-based threads within teams), with a left rail providing access to chat, calendar, calls, and apps. Teams serves as the central nervous system for enterprise communication, deeply integrated with SharePoint, OneDrive, Outlook, and the broader M365 suite.

## 2. Site Map

```
Microsoft Teams
├── Activity (notification feed)
│   ├── @Mentions
│   ├── Replies
│   ├── Reactions
│   ├── Assignments
│   └── App notifications
├── Chat
│   ├── Recent Chats
│   ├── 1:1 Conversations
│   ├── Group Chats
│   ├── Message Threads
│   ├── Files shared in chat
│   └── Chat Apps (tabs, bots)
├── Teams & Channels
│   ├── [Team]
│   │   ├── General Channel (default)
│   │   ├── [Custom Channel]
│   │   │   ├── Posts (threaded conversations)
│   │   │   ├── Files (SharePoint-backed)
│   │   │   ├── Wiki / OneNote
│   │   │   ├── Tabs (Planner, Lists, custom apps)
│   │   │   └── Channel Calendar
│   │   ├── Private Channels
│   │   ├── Shared Channels (cross-org)
│   │   └── Team Settings / Members
│   └── Join/Create Team
├── Calendar
│   ├── Day / Week / Work Week view
│   ├── Schedule Meeting
│   ├── Meet Now
│   ├── Webinar
│   └── Town Hall
├── In-Meeting
│   ├── Video Gallery (up to 49)
│   ├── Together Mode / Large Gallery
│   ├── Screen Share / PowerPoint Live
│   ├── Breakout Rooms
│   ├── Meeting Chat
│   ├── Copilot (AI assistant)
│   ├── Whiteboard
│   ├── Polls (Forms)
│   ├── Live Captions / Transcription
│   ├── Recording
│   ├── Q&A
│   └── Reactions / Raise Hand
├── Calls
│   ├── Call History
│   ├── Speed Dial
│   ├── Voicemail
│   ├── Contacts
│   ├── Call Queue
│   └── PSTN / Teams Phone
├── Files
│   ├── Recent
│   ├── OneDrive
│   ├── Shared with Me
│   └── Downloads
├── Apps
│   ├── Pinned Apps (sidebar)
│   ├── App Catalog
│   ├── Custom Apps (LOB)
│   └── Bots / Connectors
├── Search / Command Bar
├── Copilot (AI)
│   ├── Chat with Copilot
│   ├── Meeting Recap
│   └── Summarize Thread
├── Settings
│   ├── General
│   ├── Privacy
│   ├── Notifications
│   ├── Devices (audio/video)
│   ├── Appearance
│   └── Language
└── Admin Center (IT admins)
    ├── User Management
    ├── Teams & Channels Policies
    ├── Meeting Policies
    ├── Voice / Phone
    ├── App Permissions
    ├── Compliance
    └── Analytics & Reports
```

## 3. Navigation Model

- **Type**: Left rail (persistent vertical sidebar)
- **Left Rail**: Activity, Chat, Teams, Calendar, Calls, Files, Apps (pinned), ... (more apps)
- **Top Bar**: Search / command bar (Ctrl+E), presence indicator, settings
- **Channel Navigation**: Team → Channel → Tabs (Posts, Files, custom tabs)
- **Command Bar**: "/" commands for quick actions (status, calls, app shortcuts)
- **Mobile**: Bottom tab bar — Activity, Chat, Teams, Calendar, Calls
- **Floating Action**: "New" button for new chat, meeting, channel post

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Team | name, description, privacy (public/private/org-wide), members, channels, settings | → Channels, → Members, → SharePoint site |
| Channel | name, description, type (standard/private/shared), posts, tabs, files | → Team, → SharePoint folder |
| Message (Post) | body (rich text), sender, timestamp, reactions, replies (threaded), mentions, attachments, priority | → Channel / Chat |
| Chat | participants, last message, pinned, muted | → Messages, → Files |
| Meeting | title, organizer, attendees, time, recurring, recording, transcript, chat, notes | → Calendar, → Recording |
| File | name, type, size, modified date, location (SharePoint/OneDrive), sharing permissions | → Channel / Chat |
| App/Tab | app name, configuration, position in channel | → Channel, → App Catalog |
| Recording | video, transcript, chapters, Copilot recap, sharing settings | → Meeting, → Stream |
| Wiki / Loop Component | collaborative content, editors, version history | → Channel / Chat |

## 5. User Flows

### Starting a Team Conversation
1. Left rail → Teams → Select Team → Select Channel
2. Click "New conversation" in Posts tab
3. Compose message → @mention people, attach files, add formatting
4. Post → Thread appears; members receive notification based on mention/follow settings
5. Others reply within thread (keeping conversations organized)

### Joining a Meeting
1. Calendar → See scheduled meetings → Click "Join"
2. Pre-join screen: camera, mic, background, audio device selection
3. Join → Gallery view with participants
4. Use toolbar: Share screen, raise hand, reactions, chat, Copilot
5. Post-meeting: Recording + transcript available; Copilot generates recap

### Using Copilot in Teams
1. During meeting: Copilot captures notes, action items, key decisions
2. Ask Copilot questions: "What did I miss?" / "Summarize the discussion"
3. In Chat: Copilot can summarize long threads, draft replies
4. Meeting Recap: AI-generated summary with chapters and follow-ups

## 6. URL / Route Structure

```
teams.microsoft.com/                        # Teams web app
teams.microsoft.com/l/channel/{channelId}   # Channel deeplink
teams.microsoft.com/l/chat/{chatId}         # Chat deeplink
teams.microsoft.com/l/meetup-join/{meetingId}  # Meeting join
teams.microsoft.com/l/entity/{appId}        # App tab deeplink
teams.microsoft.com/l/message/{messageId}   # Message deeplink
admin.teams.microsoft.com/                  # Teams Admin Center
apps.teams.microsoft.com/                   # App catalog
learn.microsoft.com/en-us/microsoftteams/   # Documentation
```

## 7. Search & Filter

- **Universal Search Bar**: Messages, people, files, channels, teams, apps — all from one search box
- **Message Search**: Full-text with filters by sender, date range, channel, team, file type, keyword
- **KQL Support**: Keyword Query Language for advanced search (from:, in:, subject:, hasattachment:)
- **Command Bar**: "/" slash commands for quick navigation and actions
- **File Search**: Integrated with SharePoint/OneDrive search; filter by type, date, person
- **People Search**: Find by name, email, department, title across org directory (Azure AD)
- **Chat Filter**: Unread, muted, meetings, recent
- **Copilot Search**: Ask Copilot natural language questions about past conversations and meetings

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop App (primary) | Left rail + content area + right panel (details); pop-out windows for chat/meetings; multi-window support |
| Web App | Near-parity with desktop; same left rail layout; some features limited (background effects, etc.) |
| Tablet | Collapsible left rail; touch-optimized; split view for chat |
| Mobile (< 768px) | Bottom tab bar; single-pane with drill-down navigation; compact meeting view; push notifications |
| Meeting View | Responsive gallery: 2x2 on mobile → 7x7 (49 tiles) on desktop; Together Mode; Dynamic View auto-adjusts |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Guest | Access specific teams/channels, chat, join meetings; limited app access; no admin controls |
| Member | Full access to joined teams/channels, chat, schedule meetings, share files, use apps |
| Team Owner | Create/delete channels, manage members, configure team settings, manage tabs/connectors |
| Channel Moderator | Moderate posts (approve, pin, delete), manage channel settings |
| Meeting Organizer | Set meeting options (lobby, recording, roles), manage breakout rooms, assign presenter |
| Presenter | Share screen, manage slides, use whiteboard; cannot manage meeting settings |
| Attendee | View content, raise hand, react, chat; cannot share screen unless promoted |
| IT Admin | Full admin center access; manage policies, compliance, apps, users across tenant |
| Compliance Admin | eDiscovery, DLP policies, retention, audit logs, communication compliance |
| External User (Federation) | Chat and call across tenants; limited to 1:1 or group chat |
| Copilot Licensed User | AI-powered meeting recaps, chat summaries, thread summaries, content generation |
