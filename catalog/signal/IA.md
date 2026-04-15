---
brand: Signal
tagline: Say hello to privacy
category: Social & Communication
website: https://signal.org
---

# Information Architecture — Signal

## 1. Overview

Signal is a privacy-first encrypted messaging platform built on the open-source Signal Protocol. The IA prioritizes simplicity, minimal data collection, and direct access to conversations. Unlike mainstream messengers, Signal deliberately omits engagement-driven features (stories algorithms, ads, suggested contacts) to keep the focus on secure, distraction-free communication.

## 2. Site Map

```
Signal
├── Home (Download CTA)
├── Features
│   ├── End-to-End Encryption
│   ├── Group Chats
│   ├── Disappearing Messages
│   ├── Sealed Sender
│   ├── Voice & Video Calls
│   ├── Stories
│   └── Username & Phone Number Privacy
├── Download
│   ├── iOS
│   ├── Android
│   └── Desktop (Windows / macOS / Linux)
├── Blog
│   └── [Article Detail]
├── Donate
├── Careers
├── Help / Support
│   ├── Getting Started
│   ├── Account & Settings
│   ├── Messaging
│   ├── Calling
│   ├── Troubleshooting
│   └── Security
├── Community (GitHub / Community Forum)
└── Legal
    ├── Terms of Service
    ├── Privacy Policy
    └── Open Source Licenses
```

## 3. Navigation Model

- **Type**: Minimal top bar with logo + text links
- **Primary Nav**: Features, Support, Blog, Donate, Download (CTA button)
- **Mobile**: Hamburger menu collapsing all primary links
- **In-App Nav (mobile)**: Bottom tab bar — Chats, Calls, Stories, Settings
- **In-App Nav (desktop)**: Left sidebar — conversation list, top toolbar for search and compose

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Conversation | participants, last message, timestamp, pinned, muted, archived | → Messages, → Contact(s) |
| Message | body (encrypted), sender, timestamp, delivery status, reactions, reply-to | → Conversation, → Attachments |
| Disappearing Message | inherits Message + expiration timer | → Conversation |
| Group | name, avatar, members, admin list, group link, disappearing timer | → Conversations, → Members |
| Story | media, caption, timestamp, viewers list, expiry (24h) | → Contact |
| Contact | name, phone number, username, verified safety number, blocked flag | → Conversations |
| Blog Post | title, date, author, body (markdown), cover image | standalone |

## 5. User Flows

### Registration
1. Download app → Enter phone number → Receive SMS verification
2. Create PIN (for Signal registration lock) → Set profile name / avatar
3. Optionally set a username → Grant contacts permission or skip
4. Land on empty conversation list

### Sending a Disappearing Message
1. Open conversation → Tap timer icon in header
2. Select duration (30s → 4 weeks) → Confirm
3. All subsequent messages in thread auto-delete after the set interval
4. Timer badge appears on conversation header

### Verifying Safety Numbers
1. Open conversation → Tap contact name → "View Safety Number"
2. Compare 60-digit number or scan QR code in person
3. Mark as "Verified" → Verified badge appears on conversation

## 6. URL / Route Structure

```
signal.org/                          # Landing / download CTA
signal.org/download/                 # Platform-specific download links
signal.org/features/                 # Feature overview
signal.org/blog/                     # Blog listing
signal.org/blog/{slug}/              # Blog post detail
signal.org/donate/                   # Donation page
signal.org/docs/                     # Technical documentation
support.signal.org/                  # Help center (subdomain)
support.signal.org/hc/en/articles/{id}  # Help article detail
```

## 7. Search & Filter

- **In-App Message Search**: Full-text search across all conversations (decrypted locally on device)
- **Conversation Filter**: All / Unread toggle in chat list
- **Help Center**: Keyword search across support articles
- **No server-side indexing**: All search is performed client-side due to end-to-end encryption; Signal servers cannot read message content

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (< 768px) | Single-pane: conversation list or message thread (back arrow to return) |
| Tablet (768–1024px) | Split view: narrow conversation list + message pane |
| Desktop App (> 1024px) | Persistent left sidebar (conversation list) + main message area + optional right panel (contact details) |
| Website | Simple single-column layout; download CTA hero scales down; hamburger nav on mobile |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Registered User | Send/receive messages, create groups, post stories, voice/video calls |
| Group Admin | Add/remove members, edit group info, manage join link, set disappearing timer |
| Group Member | Send messages, react, reply; cannot modify group settings unless permitted |
| Non-registered Visitor | View website, download app, read blog and support articles |
| Blocked Contact | Cannot send messages or call the blocking user; no notification sent |
| Linked Device | Access synced messages; can be revoked from primary device at any time |
