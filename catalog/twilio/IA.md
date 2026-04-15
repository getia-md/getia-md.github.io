---
brand: Twilio
tagline: Build the future of communications
category: Business SaaS
website: https://twilio.com
---

# Information Architecture — Twilio

## Overview

Twilio is a cloud communications platform that provides APIs for SMS, voice, video, email, and more. The IA is developer-centric, organized around communication channels (Messaging, Voice, Video) and higher-level products (Flex contact center, Verify, SendGrid). The Console serves as the management dashboard, while the real "product" is the API — developers build communication workflows programmatically, and the Console provides monitoring, configuration, and debugging.

## Site Map

```
twilio.com
├── Console (Dashboard)
│   ├── Home (Account Overview)
│   │   ├── Usage Summary
│   │   ├── Active Numbers
│   │   └── Recent Alerts
│   ├── Messaging
│   │   ├── Services (Messaging Service config)
│   │   ├── Try SMS
│   │   ├── Logs (sent/received messages)
│   │   ├── Phone Numbers
│   │   ├── Toll-Free Verification
│   │   └── A2P 10DLC Registration
│   ├── Voice
│   │   ├── TwiML Bins
│   │   ├── TwiML Apps
│   │   ├── Logs (call records)
│   │   ├── Phone Numbers
│   │   ├── SIP Domains
│   │   └── Conference
│   ├── Video
│   │   ├── Rooms
│   │   ├── Compositions
│   │   ├── Recordings
│   │   └── Settings
│   ├── Flex (Contact Center)
│   │   ├── Agent Desktop
│   │   ├── TaskRouter (routing)
│   │   ├── Studio (IVR flow builder)
│   │   ├── Channels
│   │   └── Insights (analytics)
│   ├── Verify (2FA / OTP)
│   │   ├── Services
│   │   ├── Logs
│   │   └── Templates
│   ├── Studio (Visual Flow Builder)
│   │   ├── Flows
│   │   └── Flow Editor (drag-and-drop)
│   ├── Phone Numbers
│   │   ├── Manage → Active Numbers
│   │   ├── Buy a Number
│   │   └── Port a Number
│   ├── Monitor
│   │   ├── Logs (all channels)
│   │   ├── Alerts
│   │   ├── Debugger
│   │   └── Usage Records
│   ├── API Keys & Tokens
│   ├── Sub-Accounts
│   └── Settings
│       ├── General (Account SID, Auth Token)
│       ├── Billing
│       ├── Usage Triggers
│       └── Security
├── Docs (Developer Documentation)
│   ├── Quickstarts (by language/channel)
│   ├── API Reference
│   ├── SDKs
│   ├── Tutorials
│   └── Sample Apps
└── Marketing Site
    ├── Products
    ├── Solutions
    ├── Pricing
    └── Customer Engagement Platform
```

## Navigation Model

- **Left sidebar (Console):** Home, Messaging, Voice, Video, Flex, Verify, Studio, Phone Numbers, Monitor, Settings — expandable sub-menus
- **Console top bar:** Account switcher (sub-accounts), search, API credentials quick-access, notification bell
- **Studio editor:** Full-screen visual flow canvas — drag widgets (Send SMS, Gather, HTTP Request, Split, etc.) and connect with transitions
- **Docs:** Three-column layout — left nav (product/guide tree), content, right-side ToC

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Account | SID, auth token, friendly name, type (main/sub) | → Sub-accounts, Phone Numbers, Services |
| Phone Number | number, capabilities (SMS/Voice/MMS), country, SID | → Account, Messaging Service |
| Messaging Service | name, SID, senders pool, settings (sticky sender, MMS converter) | → Phone Numbers |
| Message (Log) | SID, from, to, body, status, direction, price, date | → Messaging Service |
| Call (Log) | SID, from, to, status, duration, price, recording URL | → Account |
| Studio Flow | name, definition (widgets + transitions), status (published/draft) | → Account |
| TwiML Bin | name, TwiML markup, URL | → Phone Numbers (webhook) |
| Verify Service | name, code length, channel (SMS/email/call/push) | → Account |
| Flex Workspace | name, TaskRouter config, channels, agents | → Account |
| TaskRouter | workflows, task queues, workers, activities | → Flex |
| API Key | SID, secret, type (main/standard/restricted) | → Account |
| Sub-Account | SID, friendly name, status | → Parent Account |

## User Flows

### 1. Send First SMS (Developer)
`Console → Messaging → Try SMS → Enter "To" number → Type message → Send → View delivery status → Copy code snippet → Integrate into app`

### 2. Build an IVR with Studio
`Console → Studio → + New Flow → Start widget → Add "Gather" (keypress input) → Add "Split" (branch on input) → Add "Say" or "Connect Call" → Publish → Assign to phone number`

### 3. Set Up Phone Number
`Console → Phone Numbers → Buy a Number → Search by country/area code/capabilities → Purchase → Configure webhooks (incoming SMS → URL, incoming call → Studio Flow)`

### 4. Monitor & Debug
`Console → Monitor → Logs → Filter by channel/date/status → Click failed message → View error code → Debugger for detailed error context → Fix webhook/code`

## URL / Route Structure

```
console.twilio.com/                                    # Dashboard
console.twilio.com/us1/develop/sms/services            # Messaging Services
console.twilio.com/us1/develop/sms/logs                # Message logs
console.twilio.com/us1/develop/voice/twiml-bins        # TwiML Bins
console.twilio.com/us1/develop/phone-numbers/manage    # Phone numbers
console.twilio.com/us1/develop/studio/flows            # Studio Flows
console.twilio.com/us1/develop/studio/flows/{id}       # Flow editor
console.twilio.com/us1/develop/verify/services         # Verify Services
console.twilio.com/us1/monitor/logs                    # Logs
console.twilio.com/us1/monitor/alerts                  # Alerts
```

## Search & Filter

- **Console search:** Find products, settings, and documentation from top bar
- **Message/Call logs:** Filter by date, status (delivered/failed/queued), from/to number, SID
- **Phone number search (buy):** By country, area code, capabilities (SMS/MMS/Voice), number pattern
- **Debugger:** Filter alerts by severity, error code, date
- **Docs search:** Full-text across all documentation, quickstarts, and API reference

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1280px+) | Full Console with sidebar navigation; Studio visual editor; Docs three-column |
| Tablet | Console functional with collapsible sidebar; Studio editor usable |
| Mobile | Console basic navigation and monitoring; Studio/complex features require desktop |
| Flex Agent Desktop | Responsive agent UI for handling calls/messages on various screen sizes |

## Access Control

| Role | Capabilities |
|------|-------------|
| Account Owner | Full access, billing, sub-accounts, API keys |
| Administrator | Manage all resources, users, settings; no billing |
| Developer | Access APIs, logs, Studio, phone numbers; no user management |
| Restricted API Key | Scoped to specific products (e.g., Messaging only) |
| Sub-Account | Isolated environment with own resources, SID, billing |
| Flex Agent | Access Flex agent desktop only; no Console access |
| SSO / SAML | Enterprise identity federation |
