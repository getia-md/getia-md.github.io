---
brand: Salesforce
tagline: The #1 AI CRM
category: Business SaaS
website: https://salesforce.com
---

# Information Architecture — Salesforce

## Overview

Salesforce is the dominant enterprise CRM, built on a metadata-driven platform where nearly every aspect — objects, fields, pages, workflows — is customizable. The IA is organized around "Clouds" (Sales, Service, Marketing, Commerce, etc.) that share a common data model. Lightning Experience provides the modern UI layer, AppExchange extends it with third-party apps, and Einstein AI adds predictive intelligence throughout.

## Site Map

```
salesforce.com
├── Home
│   ├── Key Deals
│   ├── Assistant (Einstein)
│   ├── Dashboard Snapshot
│   └── Recent Records
├── Sales Cloud
│   ├── Leads
│   ├── Contacts
│   ├── Accounts
│   ├── Opportunities (pipeline)
│   ├── Forecasting
│   ├── Products & Price Books
│   ├── Quotes / CPQ
│   ├── Activities (Tasks & Events)
│   ├── Campaigns
│   └── Reports & Dashboards
├── Service Cloud
│   ├── Cases
│   ├── Service Console
│   ├── Knowledge Base
│   ├── Omni-Channel (routing)
│   ├── Entitlements & SLAs
│   └── Field Service
├── Marketing Cloud
│   ├── Journey Builder
│   ├── Email Studio
│   ├── Social Studio
│   ├── Advertising Studio
│   └── Data Extensions
├── Platform
│   ├── App Builder (Lightning)
│   ├── Objects & Fields
│   ├── Flows (Process Automation)
│   ├── Apex (Custom Code)
│   ├── API
│   └── AppExchange
├── Einstein AI
│   ├── Lead Scoring
│   ├── Opportunity Insights
│   ├── Next Best Action
│   ├── Einstein Copilot
│   └── Prediction Builder
├── Setup (Admin)
│   ├── Company Settings
│   ├── Users & Permissions
│   ├── Security
│   ├── Objects & Fields
│   ├── Automation (Flows, Process Builder)
│   ├── Environments (Sandbox)
│   └── Data Management
└── AppExchange (Marketplace)
```

## Navigation Model

- **Navigation bar (top):** App Launcher (waffle), App-specific tabs (Leads, Contacts, Opportunities, etc.), Global Search, Setup gear, Notifications bell
- **App Launcher:** Switch between Lightning Apps (Sales, Service, custom apps); each app shows its own tab set
- **Record page:** Lightning page layout — header (key fields), tabs (Details, Activity, Related Lists, Chatter)
- **Utility bar (bottom):** Persistent quick-access tools (Notes, History, Einstein, Macros)
- **Setup (admin):** Separate navigation tree for all configuration; searchable

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Account | name, industry, type, billing address, owner | → Contacts, Opportunities, Cases |
| Contact | name, email, phone, title, account | → Opportunities (Roles), Cases, Activities |
| Lead | name, email, company, status, source, score | → Converted Account/Contact/Opportunity |
| Opportunity | name, stage, amount, close date, probability | → Account, Contact Roles, Products, Quotes |
| Case | subject, status, priority, origin, owner | → Account, Contact, Knowledge Articles |
| Campaign | name, type, status, members | → Leads, Contacts, Opportunities |
| Custom Object | user-defined schema, relationships | → Standard or Custom Objects |
| Report | type (tabular/summary/matrix/joined), filters | → Dashboard |
| Dashboard | components (charts, metrics, tables) | → Reports |
| Flow | type (screen/auto/scheduled), elements, variables | → Objects, Actions |

## User Flows

### 1. Lead-to-Opportunity Conversion
`Leads → Open Lead → Qualify → Convert → Creates Account + Contact + Opportunity → Opportunity enters pipeline → Manage through stages`

### 2. Pipeline Review
`Opportunities → Kanban (by stage) → Drag to next stage → Open opportunity → Log activity → Update close date/amount → Forecasting updates`

### 3. Case Resolution
`Service Console → Open case from queue → Review customer history (related account/contact) → Search Knowledge Base → Reply → Resolve → Customer survey`

### 4. Admin: Build a Custom Object
`Setup → Object Manager → + New Custom Object → Define fields → Create page layout → Add to Lightning App → Set permissions → Deploy`

## URL / Route Structure

```
{instance}.lightning.force.com/lightning/page/home           # Home
{instance}.lightning.force.com/lightning/o/Lead/list          # Leads list
{instance}.lightning.force.com/lightning/r/Lead/{id}/view     # Lead record
{instance}.lightning.force.com/lightning/o/Opportunity/list   # Opportunities
{instance}.lightning.force.com/lightning/r/Opportunity/{id}/view  # Opportunity record
{instance}.lightning.force.com/lightning/o/Case/list          # Cases
{instance}.lightning.force.com/lightning/setup/SetupOneHome/home  # Setup
{instance}.lightning.force.com/lightning/r/Dashboard/{id}/view   # Dashboard
```

## Search & Filter

- **Global search (top bar):** Full-text across all objects; search scope configurable; recent items shown as type-ahead
- **List view filters:** Save filtered views of any object (e.g., "My Open Opportunities This Quarter")
- **Report builder:** Advanced filter logic (up to 20 filters with AND/OR), cross-object joins, bucketing
- **SOQL (developer):** Structured query language for programmatic data access
- **Einstein Search:** AI-enhanced search with natural language understanding and personalized ranking

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1280px+) | Full Lightning Experience — record pages, related lists, utility bar |
| Tablet | Lightning adapts with responsive record pages; console layout stacks |
| Mobile (Salesforce Mobile) | Optimized native app — record access, activity logging, dashboards, notifications, offline capability |
| Lightning Embedded | Lightning components can be embedded in external apps and portals |

## Access Control

| Role | Capabilities |
|------|-------------|
| System Administrator | Full access — Setup, all data, all features |
| Custom Profile | Object-level CRUD, field-level security, app access per profile |
| Permission Set | Additive permissions layered on top of profile |
| Role Hierarchy | Vertical data visibility (manager sees reports' records) |
| Sharing Rules | Horizontal data sharing between roles/groups |
| OWD (Org-Wide Defaults) | Default record visibility (Private, Public Read, Public Read/Write) |
| Record-Level Sharing | Manual sharing of individual records |
| Experience Cloud (Portal) | External users with limited, scoped access to specific objects |
