---
brand: Intercom
tagline: The complete AI-first customer service solution
category: Business SaaS
website: https://intercom.com
---

# Information Architecture — Intercom

## Overview

Intercom is a customer messaging platform that unifies live chat, bots, help center, and product tours into a single system. The IA centers on the Messenger (the widget customers see) and the Inbox (where support agents work). With Fin AI as the front-line bot, Intercom routes conversations through a triage → AI → human escalation funnel. The platform also includes outbound messaging for marketing and onboarding.

## Site Map

```
intercom.com
├── Inbox
│   ├── Open Conversations
│   ├── Your Inbox (assigned to you)
│   ├── Mentions
│   ├── Unassigned
│   ├── Team Inboxes
│   └── Views (custom filters)
├── Fin AI Agent
│   ├── AI Answers (content sources)
│   ├── Custom Answers
│   ├── AI Settings
│   └── Performance Reports
├── Help Center (Articles)
│   ├── Collections
│   │   └── Sections → Articles
│   ├── Article Editor
│   └── Multi-language
├── Outbound Messages
│   ├── Email Campaigns
│   ├── In-app Messages
│   ├── Push Notifications
│   ├── Product Tours
│   ├── Banners
│   ├── Tooltips
│   └── Checklists
├── Contacts / Users
│   ├── People (users & leads)
│   ├── Companies
│   ├── Segments
│   └── Tags
├── Reports
│   ├── Conversations
│   ├── Effectiveness
│   ├── Team Performance
│   ├── Customer Satisfaction (CSAT)
│   └── Fin AI Reports
├── Settings
│   ├── Workspace
│   ├── Messenger (appearance, behavior)
│   ├── Channels (email, SMS, WhatsApp)
│   ├── Integrations
│   ├── Teammates
│   └── Billing
└── Marketing Site
    ├── Platform
    ├── Solutions
    ├── Pricing
    └── Resources
```

## Navigation Model

- **Left sidebar (persistent):** Inbox, Fin AI, Help Center, Outbound, Contacts, Reports, Settings
- **Inbox view:** Three-column — conversation list → conversation thread → customer profile sidebar
- **Help Center:** Collection/section tree → article editor
- **Outbound builder:** Step-by-step — content → audience (segment) → schedule → review
- **Messenger (customer-facing):** Home screen → Search articles / Start conversation → Bot flow → Human handoff

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Conversation | channel, status, assignee, priority, SLA, tags | → Messages, Contact, Company |
| Message (in conversation) | type (user/admin/bot/note), content, timestamp | → Conversation |
| Contact (User/Lead) | name, email, user_id, custom attributes, last seen | → Conversations, Company, Segments |
| Company | name, domain, plan, custom attributes | → Contacts |
| Segment | name, filter rules (attribute-based) | → Contacts |
| Article | title, body, collection, status (published/draft), language | → Collection, Section |
| Collection | name, icon, description | → Sections, Articles |
| Outbound Message | type, content, audience segment, schedule, status | → Contacts (recipients) |
| Product Tour | steps (tooltips, modals), audience, trigger | → Contacts |
| Fin AI Answer | content source (articles, custom), confidence | → Conversations |

## User Flows

### 1. Handle a Support Conversation
`Inbox → Open conversation → Read context (customer profile sidebar) → Reply with text/macro/article → Use AI Assist to draft → Resolve or snooze`

### 2. Set Up Fin AI
`Fin AI → Content Sources → Connect Help Center + external URLs → Train → Set handoff rules → Enable for Messenger → Monitor performance`

### 3. Send a Product Announcement
`Outbound → + New → In-App Message → Design content → Set audience (segment) → Set trigger (page visit/event) → Preview → Go Live`

### 4. Create a Help Article
`Help Center → + New Article → Write content (rich text, video, code) → Assign to Collection/Section → Translate → Publish`

## URL / Route Structure

```
app.intercom.com/a/inbox/{workspace_id}/inbox/         # Inbox
app.intercom.com/a/inbox/{workspace_id}/inbox/{conv_id} # Conversation
app.intercom.com/a/apps/{workspace_id}/articles         # Help Center
app.intercom.com/a/apps/{workspace_id}/outbound         # Outbound messages
app.intercom.com/a/apps/{workspace_id}/users            # Contacts
app.intercom.com/a/apps/{workspace_id}/reports          # Reports
{company}.intercom-help.com/                            # Published Help Center
```

## Search & Filter

- **Inbox search:** Search conversations by keyword, contact name/email, tags, assignee
- **Inbox Views:** Saved filter combinations (e.g., "VIP unassigned conversations")
- **Contact search:** Search/filter by name, email, custom attributes, segment membership, last seen
- **Help Center search:** Full-text article search (also powers the Messenger's self-serve)
- **Reports filters:** Date range, team, channel, tag

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1280px+) | Three-column inbox (list → conversation → profile); full admin panels |
| Tablet | Two-column inbox; profile panel as overlay |
| Mobile (admin) | Mobile app for responding to conversations; limited admin features |
| Messenger (customer) | Responsive widget — adapts to mobile browsers; native SDKs for iOS/Android |

## Access Control

| Role | Capabilities |
|------|-------------|
| Owner | Full workspace control, billing, security |
| Admin | Manage teammates, settings, all features |
| Agent | Inbox access, respond to conversations, view contacts |
| Agent (limited) | Restricted to assigned conversations only |
| Custom Role | Granular per-feature permissions (Enterprise) |
| Fin AI | Automated responses; escalates to human based on confidence and rules |
