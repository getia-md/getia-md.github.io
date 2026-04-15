---
brand: SendGrid
tagline: Deliver exceptional email experiences
category: Business SaaS
website: https://sendgrid.com
---

# Information Architecture — SendGrid (Twilio SendGrid)

## Overview

SendGrid is a transactional and marketing email platform (now part of Twilio). The IA splits into two major areas: Email API (for developers sending transactional emails programmatically) and Marketing Campaigns (for marketers building email campaigns with a visual editor). Shared infrastructure — sender authentication, suppression management, and analytics — spans both use cases.

## Site Map

```
sendgrid.com
├── Dashboard
│   ├── Email Activity (recent sends)
│   ├── Stats Overview (delivered, opens, clicks, bounces)
│   └── Account Health
├── Email API
│   ├── Integration Guide (setup wizard)
│   ├── SMTP Relay Settings
│   ├── API Keys
│   ├── Dynamic Templates
│   │   ├── Template Editor (drag-and-drop / code)
│   │   └── Versions
│   ├── Inbound Parse (receive email)
│   ├── Mail Settings
│   │   ├── BCC
│   │   ├── Footer
│   │   ├── Spam Check
│   │   └── Click/Open Tracking
│   └── Webhooks (Event & Inbound)
├── Marketing
│   ├── Contacts
│   │   ├── All Contacts
│   │   ├── Lists
│   │   ├── Segments (dynamic filters)
│   │   └── Custom Fields
│   ├── Single Sends (one-time campaigns)
│   │   ├── Design Editor
│   │   ├── Code Editor
│   │   ├── Audience Selection
│   │   ├── Schedule / Send
│   │   └── A/B Testing
│   ├── Automations
│   │   ├── Welcome Series
│   │   ├── Custom Automation Builder
│   │   └── Entry Criteria
│   └── Signup Forms
├── Stats (Analytics)
│   ├── Overview (delivered, bounced, opens, clicks, unsubscribes)
│   ├── Category Stats
│   ├── Mailbox Provider Stats
│   ├── Geography Stats
│   ├── Device Stats
│   └── Subuser Stats
├── Activity (Email Event Feed)
│   ├── Delivered / Bounced / Blocked / Deferred
│   └── Search by recipient
├── Suppressions
│   ├── Bounces
│   ├── Blocks
│   ├── Spam Reports
│   ├── Invalid Emails
│   ├── Global Unsubscribes
│   └── Unsubscribe Groups
├── Sender Authentication
│   ├── Domain Authentication (DKIM/SPF)
│   ├── Link Branding (CNAME)
│   └── Reverse DNS
├── Settings
│   ├── Account Details
│   ├── API Keys
│   ├── Teammates
│   ├── Two-Factor Auth
│   ├── Alerts
│   ├── Subusers
│   ├── IP Management (dedicated IPs)
│   └── Billing
└── Docs
    ├── API Reference (v3)
    ├── Libraries (SDKs)
    └── Guides
```

## Navigation Model

- **Left sidebar:** Dashboard, Email API, Marketing, Stats, Activity, Suppressions, Settings
- **Email API sub-nav:** Integration Guide, Dynamic Templates, Mail Settings, Webhooks
- **Marketing sub-nav:** Contacts, Single Sends, Automations, Signup Forms
- **Template editor:** Full-screen drag-and-drop or code editor with preview and test send
- **Top bar:** Search, account dropdown, support, documentation link

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| API Key | name, permissions (full/restricted), scopes | → Account |
| Dynamic Template | name, versions (subject, HTML, test data) | → Transactional sends |
| Single Send (Campaign) | name, subject, from, content, list/segment, send time | → Contacts, Stats |
| Automation | name, entry criteria, email sequence, status | → Contacts |
| Contact | email, first/last name, custom fields, lists, segments | → Lists, Segments, Campaigns |
| List | name, contact count | → Contacts |
| Segment | name, conditions (AND/OR on contact fields + engagement) | → Contacts (dynamic) |
| Unsubscribe Group | name, description | → Contacts (suppressed), Campaigns |
| Email Event | type (delivered/open/click/bounce/spam/unsubscribe), email, timestamp, metadata | → Activity feed |
| Sender Authentication | domain, status (verified/pending), DNS records | → Account |
| Dedicated IP | address, warmup status, subuser assignment | → Account |
| Subuser | username, email quota, IPs | → Parent Account |

## User Flows

### 1. Set Up Transactional Email
`Email API → Integration Guide → Choose method (Web API / SMTP) → Generate API key → Install SDK → Authenticate domain (DNS records) → Send test email → Go live`

### 2. Build and Send a Campaign
`Marketing → Single Sends → + Create → Select contacts list/segment → Design email (drag-and-drop) → Preview → Schedule or Send Now → Monitor stats`

### 3. Create a Dynamic Template
`Email API → Dynamic Templates → + Create → Code or design editor → Add Handlebars variables ({{name}}) → Set test data → Save version → Use template_id in API calls`

### 4. Investigate Delivery Issues
`Activity → Search by recipient email → View event timeline (processed → delivered or bounced) → Check bounce reason → Suppressions → Remove from bounce list if resolved`

## URL / Route Structure

```
app.sendgrid.com/                                    # Dashboard
app.sendgrid.com/email_activity                      # Email Activity
app.sendgrid.com/statistics/overview                 # Stats
app.sendgrid.com/dynamic_templates                   # Dynamic Templates
app.sendgrid.com/dynamic_templates/{id}/version/{v}  # Template editor
app.sendgrid.com/marketing/contacts                  # Contacts
app.sendgrid.com/marketing/singleSends               # Single Sends
app.sendgrid.com/marketing/automations               # Automations
app.sendgrid.com/suppressions/bounces                # Bounces
app.sendgrid.com/settings/sender_auth                # Domain authentication
app.sendgrid.com/settings/api_keys                   # API Keys
```

## Search & Filter

- **Email Activity search:** By recipient email, subject, date range, event type (delivered/bounced/opened), message ID
- **Contact search:** By email, name, list membership, segment, custom field values
- **Stats filters:** By date range, category, mailbox provider, device type, geography
- **Suppression search:** By email address within each suppression type
- **Template search:** By template name

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1280px+) | Full sidebar + analytics dashboards + template editor |
| Tablet | Dashboard and stats viewable; template editor requires larger screen |
| Mobile | Not optimized — SendGrid is a desktop/developer-focused dashboard |
| Email rendering | Email design editor includes inbox preview across 40+ email clients and devices |

## Access Control

| Role | Capabilities |
|------|-------------|
| Account Owner | Full access, billing, IP management, subusers |
| Teammate (Admin) | All features except billing and account deletion |
| Teammate (Read-only) | View stats, activity, settings; cannot send or modify |
| Teammate (Custom) | Granular per-feature permissions (e.g., Marketing only) |
| Subuser | Isolated sending environment with own stats, IPs, reputation |
| API Key (restricted) | Scoped to specific API endpoints (e.g., Mail Send only) |
