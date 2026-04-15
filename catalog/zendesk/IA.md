---
brand: Zendesk
tagline: Champions of customer service
category: Business SaaS
website: https://zendesk.com
---

# Information Architecture — Zendesk

## Overview

Zendesk is a customer service platform built around a ticketing system. The IA is structured around Support (ticketing), Guide (knowledge base), Chat (live messaging), Talk (phone), and Explore (analytics). The Agent Workspace unifies all channels into a single interface. Triggers, automations, and macros form the backbone of workflow automation, while Views provide customizable ticket queues.

## Site Map

```
zendesk.com
├── Agent Workspace (Unified)
│   ├── Views (ticket queues)
│   │   ├── Your Unsolved Tickets
│   │   ├── Unassigned Tickets
│   │   ├── All Unsolved Tickets
│   │   ├── Recently Solved
│   │   └── Custom Views
│   ├── Ticket Detail
│   │   ├── Requester Info
│   │   ├── Conversation Thread (email, chat, social, internal notes)
│   │   ├── Ticket Fields (status, priority, assignee, type, tags)
│   │   ├── SLA Policy
│   │   ├── Side Conversations
│   │   └── Apps Panel
│   ├── Customer Context Panel
│   └── Knowledge Base Search (in-context)
├── Guide (Knowledge Base)
│   ├── Help Center
│   │   ├── Categories
│   │   │   └── Sections
│   │   │       └── Articles
│   │   ├── Community (forums)
│   │   └── Ticket Submission Form
│   ├── Article Editor
│   └── Theming
├── Chat
│   ├── Chat Dashboard
│   ├── Visitor List
│   ├── Shortcuts (canned responses)
│   └── Chat Triggers
├── Talk (Phone)
│   ├── Call Dashboard
│   ├── Call Recording
│   └── IVR
├── Explore (Analytics)
│   ├── Pre-built Dashboards
│   ├── Custom Reports
│   └── Datasets
├── Admin Center
│   ├── People (agents, groups, organizations)
│   ├── Channels (email, chat, social, phone)
│   ├── Business Rules (triggers, automations, macros, SLAs)
│   ├── Objects (ticket fields, custom objects)
│   ├── Apps & Integrations (Marketplace)
│   ├── Workspaces (agent workspace config)
│   └── Account (billing, security, branding)
└── Marketing Site
    ├── Products
    ├── Pricing
    ├── Solutions
    └── Marketplace
```

## Navigation Model

- **Top bar:** Zendesk logo, product switcher (Support, Guide, Chat, Talk, Explore, Admin), Search, + New, Views, Notifications
- **Agent Workspace:** Views list (left) → Ticket list → Ticket detail with context panel (right)
- **Guide:** Category/section tree → Article editor; Help Center has its own public-facing navigation
- **Admin Center:** Categorized navigation tree (People, Channels, Business Rules, etc.)
- **Product switcher:** Dropdown to jump between Support, Guide, Chat, Talk, Explore, Admin

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Ticket | subject, status (new/open/pending/solved/closed), priority, type, assignee, group, tags, SLA | → Requester, Organization, Comments |
| Comment | body, author, type (public/internal), channel, attachments | → Ticket |
| Requester (User) | name, email, phone, organization, custom fields | → Tickets, Organization |
| Organization | name, domain, tags, custom fields | → Users, Tickets |
| Agent | name, role, group(s), skills | → Tickets (assigned) |
| Group | name, agents | → Tickets (routing) |
| View | name, conditions (filter), columns, sort | → Tickets (filtered) |
| Macro | name, actions (set field, add comment) | → Tickets (applied) |
| Trigger | conditions, actions (on ticket create/update) | → Tickets |
| Automation | time-based conditions, actions | → Tickets |
| Article | title, body, section, status, labels | → Category, Section |
| SLA Policy | target times per priority per metric | → Tickets |

## User Flows

### 1. Resolve a Ticket
`Views → Select "Your Unsolved Tickets" → Open ticket → Read conversation → Check customer context → Search/link Knowledge Base article → Apply macro or type reply → Set status to Solved`

### 2. Set Up a Trigger
`Admin Center → Business Rules → Triggers → + Add → Conditions (e.g., "Ticket is Created" AND "Priority is Urgent") → Actions (e.g., "Notify group via Slack") → Save`

### 3. Publish Help Article
`Guide → + New Article → Select category/section → Write content (rich text, video, code) → Set visibility (agents/signed-in/everyone) → Publish`

### 4. Build a Custom Report
`Explore → + New Report → Select dataset (Tickets, Chat, Talk) → Add metrics/attributes → Apply filters → Choose visualization → Save to Dashboard`

## URL / Route Structure

```
{subdomain}.zendesk.com/agent/dashboard            # Agent home
{subdomain}.zendesk.com/agent/tickets/{ticket_id}   # Ticket detail
{subdomain}.zendesk.com/agent/filters/{view_id}     # View
{subdomain}.zendesk.com/knowledge/articles           # Guide articles
{subdomain}.zendesk.com/explore/                     # Explore analytics
{subdomain}.zendesk.com/admin/                       # Admin Center
{subdomain}.zendesk.com/hc/{locale}/                 # Public Help Center
{subdomain}.zendesk.com/hc/{locale}/articles/{id}    # Public article
```

## Search & Filter

- **Global search:** Search tickets by subject, description, comments, requester, tags; supports search operators
- **Views:** Saved filter + sort + column configurations for ticket queues; shared or personal
- **Ticket search operators:** `status:open`, `assignee:me`, `priority:urgent`, `created>2024-01-01`, tags
- **Guide search:** Full-text article search (powers public Help Center and agent-side suggestions)
- **Explore filters:** Attribute-based filtering in reports with drill-down
- **Customer context search:** Search users/organizations by name, email, domain

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1280px+) | Full Agent Workspace — ticket list + detail + context panel; Guide editor |
| Tablet | Responsive Agent Workspace; context panel as overlay |
| Mobile (Zendesk app) | View/respond to tickets, manage views, receive notifications; limited admin |
| Help Center (public) | Fully responsive; article reading, search, and ticket submission on any device |

## Access Control

| Role | Capabilities |
|------|-------------|
| Owner | Full account control, billing |
| Admin | All settings, all tickets, manage agents, business rules |
| Agent | Work tickets in assigned groups, use macros, access Guide |
| Light Agent | View tickets, add internal notes only, cannot reply to customers |
| Contributor (Guide) | Create/edit articles, manage knowledge base |
| End User | Submit tickets, view own tickets, access Help Center |
| Custom Role | Granular permission per feature area (Enterprise) |
