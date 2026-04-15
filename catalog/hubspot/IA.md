---
brand: HubSpot
tagline: Grow better with HubSpot
category: Business SaaS
website: https://hubspot.com
---

# Information Architecture — HubSpot

## Overview

HubSpot is a CRM platform organized into five "Hubs" — Marketing, Sales, Service, CMS, and Operations — all sharing a unified contact database. The IA follows a hub-and-spoke model: the CRM is the center, and each Hub adds domain-specific tools (email campaigns, deal pipelines, ticket queues, website pages, data sync). This architecture lets teams use one Hub or all five, with data flowing seamlessly between them.

## Site Map

```
hubspot.com
├── CRM (Core)
│   ├── Contacts
│   ├── Companies
│   ├── Deals (pipeline)
│   ├── Tickets
│   ├── Custom Objects
│   ├── Activity Feed
│   └── Tasks
├── Marketing Hub
│   ├── Email
│   ├── Landing Pages
│   ├── Forms
│   ├── Social Media
│   ├── Ads
│   ├── SEO
│   ├── Blog
│   ├── Campaigns
│   ├── Workflows (automation)
│   └── Analytics
├── Sales Hub
│   ├── Deals Pipeline
│   ├── Forecasting
│   ├── Sequences (email drips)
│   ├── Meetings
│   ├── Playbooks
│   ├── Quotes
│   └── Sales Analytics
├── Service Hub
│   ├── Tickets
│   ├── Knowledge Base
│   ├── Customer Portal
│   ├── Feedback Surveys
│   ├── SLA Management
│   └── Service Analytics
├── CMS Hub
│   ├── Website Pages
│   ├── Blog
│   ├── Design Tools
│   ├── File Manager
│   └── HubDB (structured data)
├── Operations Hub
│   ├── Data Sync
│   ├── Data Quality
│   ├── Programmable Automation
│   └── Datasets
├── Reports & Dashboards
│   ├── Dashboard Builder
│   ├── Custom Reports
│   └── Attribution
├── Settings
│   ├── Account
│   ├── Users & Teams
│   ├── Properties (custom fields)
│   ├── Integrations (App Marketplace)
│   ├── Tracking Code
│   └── Domains
└── Marketing Site
    ├── Products
    ├── Pricing
    ├── Solutions
    └── Resources (Academy, Blog, Community)
```

## Navigation Model

- **Top nav bar:** CRM, Marketing, Sales, Service, CMS, Operations, Automation, Reporting — each opens a mega-menu
- **Left sidebar (context-dependent):** Changes per Hub section — e.g., Marketing shows Email, Ads, Social; Sales shows Deals, Sequences
- **CRM record page:** Contact/Company/Deal record with timeline (all interactions), properties sidebar, associated records
- **Global search:** ⌘K/Ctrl+K for universal search
- **Settings:** Separate global settings accessible from any Hub

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Contact | name, email, lifecycle stage, lead status, properties | → Companies, Deals, Tickets, Activities |
| Company | name, domain, industry, properties | → Contacts, Deals |
| Deal | name, stage, amount, close date, pipeline | → Contacts, Companies, Line Items |
| Ticket | subject, status, priority, pipeline, SLA | → Contacts, Companies |
| Custom Object | user-defined schema | → Any standard object |
| Email (Marketing) | subject, content, lists, send time, A/B variant | → Contacts, Campaign |
| Workflow | triggers, actions, enrollment criteria | → Contacts, Deals, Tickets |
| Landing Page | title, template, form, URL | → Campaign |
| Knowledge Base Article | title, body, category | → Service Hub |
| Dashboard | name, widgets (report cards) | → Reports |
| Report | type (contact/deal/custom), filters, visualization | → Dashboard |

## User Flows

### 1. Inbound Marketing Funnel
`Create Landing Page → Add Form → Set up Thank-You email (Workflow) → Nurture with email sequence → Score leads → Hand off to Sales pipeline`

### 2. Sales Deal Management
`CRM → Deals → Pipeline view → Drag deal to next stage → Log call/email → Create quote → Forecast revenue`

### 3. Customer Service Ticket
`Customer submits form/email → Ticket created → Auto-assigned (round-robin) → Agent works ticket → Resolution → Satisfaction survey triggered`

### 4. Build a Custom Report
`Reporting → + Create Report → Choose data source (Contacts, Deals, etc.) → Add filters → Select chart type → Save to Dashboard`

## URL / Route Structure

```
app.hubspot.com/contacts/{portal_id}/objects/contacts     # Contacts list
app.hubspot.com/contacts/{portal_id}/contact/{id}         # Contact record
app.hubspot.com/contacts/{portal_id}/objects/deals        # Deals pipeline
app.hubspot.com/email/{portal_id}/                        # Marketing email
app.hubspot.com/workflows/{portal_id}/                    # Workflows
app.hubspot.com/reports-dashboard/{portal_id}/{dash_id}   # Dashboard
app.hubspot.com/knowledge/{portal_id}/                    # Knowledge base
app.hubspot.com/settings/{portal_id}/                     # Settings
```

## Search & Filter

- **Global search (⌘K):** Search across contacts, companies, deals, tickets, emails, pages, and settings
- **List/filter builder:** Advanced property-based filtering with AND/OR logic; save as Smart Lists (dynamic) or Static Lists
- **Pipeline filters:** Filter deals/tickets by stage, owner, amount, date, custom properties
- **Report filters:** Cross-object filtering with date ranges, attribution models
- **CRM record search:** Search within timeline activity for a specific contact/company

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1280px+) | Full Hub navigation + CRM record with timeline + sidebar properties |
| Tablet (768–1279px) | Responsive layout; some tools require desktop for full functionality |
| Mobile app (iOS/Android) | CRM access (contacts, deals, tasks), call/email logging, notifications; limited Marketing/CMS features |

## Access Control

| Role | Capabilities |
|------|-------------|
| Super Admin | Full account access, billing, all Hubs, user management |
| Admin | Manage users, settings, content across Hubs |
| User (per-Hub) | Access to specific Hub features based on seat type (Marketing, Sales, Service) |
| View-only | Read access to reports and CRM data; cannot edit |
| Partner | Agency/partner access with scoped permissions |
| Teams | Hierarchical team structure for ownership and visibility rules |
| Field-level permissions | Restrict editing of specific CRM properties by role |
