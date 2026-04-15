---
brand: Freshdesk
tagline: Delight your customers with effortless customer service
category: Business SaaS
website: https://freshdesk.com
---

# Information Architecture — Freshdesk

## Overview

Freshdesk is a cloud-based helpdesk platform by Freshworks that organizes customer support around tickets, canned automations, and a self-service portal. The IA focuses on simplicity: tickets flow through a shared inbox with SLA-driven prioritization, Freddy AI handles initial triage, and the knowledge base deflects common queries. Dispatch'r (auto-routing), Supervisor (time-based rules), and Observer (event-based triggers) form the automation triad.

## Site Map

```
freshdesk.com
├── Dashboard
│   ├── Ticket Summary (unresolved, overdue, due today)
│   ├── Agent Performance
│   └── Customer Satisfaction Score
├── Tickets
│   ├── All Tickets
│   ├── My Open Tickets
│   ├── Unresolved
│   ├── Overdue
│   ├── Custom Views
│   └── Ticket Detail
│       ├── Conversation (replies, notes, forwards)
│       ├── Properties (status, priority, agent, group, type)
│       ├── Contact/Company Info
│       ├── SLA Status
│       ├── Time Tracking
│       ├── Related Tickets
│       └── Child Tickets (split)
├── Contacts
│   ├── Contacts List
│   ├── Companies
│   └── Contact Detail (tickets history)
├── Solutions (Knowledge Base)
│   ├── Categories
│   │   └── Folders
│   │       └── Articles
│   ├── Article Editor
│   └── Self-service Portal
├── Forums (Community)
│   ├── Categories → Topics → Posts
│   └── Idea Boards
├── Reports
│   ├── Helpdesk Analytics
│   ├── Agent Performance
│   ├── Group Performance
│   ├── Customer Satisfaction
│   ├── Timesheet Summary
│   └── Custom Reports
├── Admin
│   ├── Agents & Groups
│   ├── Channels (Email, Phone, Chat, Social, WhatsApp)
│   ├── Automations
│   │   ├── Dispatch'r (ticket creation rules)
│   │   ├── Supervisor (time-based rules)
│   │   └── Observer (event-based triggers)
│   ├── SLA Policies
│   ├── Business Hours
│   ├── Canned Responses
│   ├── Ticket Fields
│   ├── Customer Portal Settings
│   ├── Freddy AI
│   └── Marketplace (Apps)
└── Customer Portal (Public)
    ├── Knowledge Base
    ├── Submit Ticket
    ├── Track My Tickets
    └── Community Forums
```

## Navigation Model

- **Left sidebar:** Dashboard, Tickets, Contacts, Solutions, Forums, Reports, Admin
- **Ticket list:** Table with sortable columns; filter bar at top; bulk actions
- **Ticket detail:** Split view — conversation thread (left), properties + contact info (right)
- **Admin:** Categorized settings with search within admin
- **Customer Portal:** Public-facing site with KB search, ticket submission, and community

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Ticket | subject, description, status, priority, source (email/phone/chat/portal/social), agent, group, type, tags, SLA | → Contact, Company, Conversations, Child Tickets |
| Conversation | type (reply/note/forward), body, attachments, author | → Ticket |
| Contact | name, email, phone, custom fields | → Company, Tickets |
| Company | name, domain, custom fields | → Contacts, Tickets |
| Agent | name, email, role, group(s), skills | → Tickets |
| Group | name, agents, auto-assignment | → Tickets |
| Article (Solution) | title, body, folder, status (draft/published), tags | → Folder, Category |
| Canned Response | title, content, folder | → Tickets (applied by agents) |
| SLA Policy | response time, resolution time per priority | → Tickets |
| Automation Rule | type (dispatch/supervisor/observer), conditions, actions | → Tickets |
| Freddy AI | suggested responses, ticket classification, contact scoring | → Tickets |

## User Flows

### 1. Ticket Lifecycle
`Customer submits via email/portal → Dispatch'r assigns group/agent → Agent opens ticket → Responds with reply or canned response → Escalation if SLA breached → Resolve → CSAT survey`

### 2. Set Up Dispatch'r Automation
`Admin → Automations → Dispatch'r → + New Rule → IF (ticket source = Email AND subject contains "billing") → THEN (assign to Billing group, set priority High) → Save`

### 3. Build Knowledge Base
`Solutions → + New Category → + New Folder → + New Article → Write content (rich text, images, video) → Publish → Article appears in Customer Portal and Agent KB search`

### 4. Monitor Performance
`Reports → Agent Performance → Select date range → View first response time, resolution time, tickets resolved, CSAT scores → Drill down by agent/group`

## URL / Route Structure

```
{domain}.freshdesk.com/a/dashboard/default         # Dashboard
{domain}.freshdesk.com/a/tickets/filters/{view}     # Ticket view
{domain}.freshdesk.com/a/tickets/{ticket_id}        # Ticket detail
{domain}.freshdesk.com/a/contacts/{id}              # Contact detail
{domain}.freshdesk.com/a/solutions/categories       # Knowledge base admin
{domain}.freshdesk.com/a/admin/automations           # Automations
{domain}.freshdesk.com/a/analytics/                  # Reports
{domain}.freshdesk.com/support/home                  # Customer Portal home
{domain}.freshdesk.com/support/solutions/articles/{id} # Public article
{domain}.freshdesk.com/support/tickets/new           # Submit ticket
```

## Search & Filter

- **Ticket search:** Full-text across subject, description, notes; filter by status, priority, agent, group, tags, created date, SLA status
- **Custom Views:** Saved filter + sort configurations; shared across team or personal
- **Contact/Company search:** By name, email, domain, custom fields
- **Knowledge Base search:** Full-text article search in admin and customer portal; auto-suggest
- **Freddy AI suggestions:** AI-powered article suggestions based on ticket content

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Full sidebar + ticket list + detail panel |
| Tablet (768–1023px) | Responsive layout; ticket detail as full page |
| Mobile (Freshdesk app) | View/respond to tickets, manage views, notifications; limited admin |
| Customer Portal | Fully responsive; search articles, submit tickets, track status on any device |

## Access Control

| Role | Capabilities |
|------|-------------|
| Account Admin | Full access — billing, settings, all tickets, all agents |
| Admin | Manage agents, groups, automations, all tickets |
| Supervisor | View/manage all tickets, run reports, cannot change settings |
| Agent | Work assigned tickets, use canned responses, access KB |
| Occasional Agent (Day Pass) | Temporary agent access on specific days |
| Contact (Customer) | Submit/track own tickets, access portal, browse KB |
| Custom Role | Configurable permissions per module (Enterprise) |
