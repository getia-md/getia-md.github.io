---
brand: Segment
tagline: The leading Customer Data Platform
category: Business SaaS
website: https://segment.com
---

# Information Architecture — Segment

## Overview

Segment is a Customer Data Platform (CDP) that acts as a data router: it collects customer events from websites, apps, and servers (Sources), standardizes the data via a tracking plan (Protocols), and fans it out to hundreds of downstream tools (Destinations). The IA mirrors this pipeline architecture — Sources → Tracking Plan → Destinations — with Personas (now Unify) adding identity resolution and audience building on top.

## Site Map

```
segment.com
├── Home (Workspace Overview)
│   ├── Source Health
│   ├── Event Volume
│   └── Destination Status
├── Connections
│   ├── Sources
│   │   ├── [Source] (Website, Mobile, Server, Cloud)
│   │   │   ├── Overview (event volume, errors)
│   │   │   ├── Schema (events, properties)
│   │   │   ├── Debugger (live event stream)
│   │   │   └── Settings
│   │   └── + Add Source
│   ├── Destinations
│   │   ├── [Destination] (Google Analytics, Mixpanel, etc.)
│   │   │   ├── Settings (API keys, mappings)
│   │   │   ├── Event Delivery (status, errors)
│   │   │   └── Mappings
│   │   └── + Add Destination (Catalog)
│   ├── Functions (Custom Code)
│   └── Storage Destinations (Warehouses)
│       ├── [Warehouse] (BigQuery, Snowflake, Redshift)
│       ├── Sync History
│       └── Schema
├── Unify (Identity Resolution)
│   ├── Profiles Explorer
│   │   └── User Profile (identity, traits, events timeline)
│   ├── Identity Resolution Rules
│   ├── Traits (computed & SQL)
│   └── Audiences
│       ├── Audience Builder (conditions → segments)
│       └── Synced Destinations
├── Protocols (Data Governance)
│   ├── Tracking Plans
│   │   ├── Events (name, properties, rules)
│   │   └── Violations
│   ├── Data Quality (blocked events, schema violations)
│   └── Transformations
├── Privacy
│   ├── User Deletion / Suppression
│   └── Consent Management
├── Settings
│   ├── Workspace
│   ├── Team Members
│   ├── Access Management
│   ├── Billing
│   └── API Tokens
└── Catalog
    ├── Sources Catalog
    ├── Destinations Catalog
    └── Functions
```

## Navigation Model

- **Left sidebar:** Home, Connections (Sources, Destinations, Functions, Storage), Unify, Protocols, Privacy, Settings
- **Source/Destination detail:** Tab-based — Overview, Schema/Settings, Debugger, Event Delivery
- **Catalog:** Searchable card grid of all available sources and destinations; category filters
- **Unify Profiles:** Search → Profile detail with unified event timeline, traits, identities
- **Protocols Tracking Plan:** Spreadsheet-like view of event names, properties, and validation rules

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Workspace | name, slug, plan | → Sources, Destinations, Tracking Plans, Members |
| Source | name, type (JavaScript/iOS/Android/Server/Cloud), write key | → Events, Schema, Destinations |
| Destination | name, type, connection mode (cloud/device), settings | → Source (receives events from) |
| Event | name, properties, context, timestamp, user ID/anonymous ID | → Source, Tracking Plan |
| Tracking Plan | name, events (expected schema) | → Sources, Violations |
| Violation | event, type (unplanned event/missing property/wrong type), source | → Tracking Plan |
| Profile (Unify) | identities (email, user_id, anonymous_id), traits, event history | → Audiences |
| Audience | name, conditions (trait/event-based), synced destinations | → Profiles, Destinations |
| Computed Trait | name, computation (count/sum/most frequent/etc.), conditions | → Profiles |
| Function | name, code (JavaScript), type (source/destination) | → Connections pipeline |
| Warehouse | type (BigQuery/Snowflake/Redshift), sync schedule | → Sources (receives data) |

## User Flows

### 1. Instrument a New Source
`Connections → Sources → + Add Source → Choose (e.g., JavaScript) → Get write key → Install SDK → Implement track()/identify() calls → Verify in Debugger`

### 2. Connect a Destination
`Connections → Destinations → + Add Destination → Search catalog → Select (e.g., Google Analytics) → Choose source → Enter API key → Map events → Enable`

### 3. Build an Audience
`Unify → Audiences → + New Audience → Define conditions (e.g., "performed Purchase in last 30 days AND trait plan = 'pro'") → Preview count → Sync to destination (e.g., Facebook Ads)`

### 4. Enforce Data Quality
`Protocols → Tracking Plans → + New Plan → Define events and property schemas → Connect to source → Review violations → Block/allow unplanned events`

## URL / Route Structure

```
app.segment.com/{workspace}/overview                     # Home
app.segment.com/{workspace}/sources/{source_slug}         # Source detail
app.segment.com/{workspace}/sources/{slug}/debugger       # Live debugger
app.segment.com/{workspace}/destinations/{dest_slug}      # Destination detail
app.segment.com/{workspace}/destinations/catalog          # Destination catalog
app.segment.com/{workspace}/unify/users/{id}              # User profile
app.segment.com/{workspace}/unify/audiences/{id}          # Audience
app.segment.com/{workspace}/protocols/tracking-plans/{id} # Tracking plan
app.segment.com/{workspace}/settings                      # Workspace settings
```

## Search & Filter

- **Catalog search:** Search 400+ sources/destinations by name or category
- **Source/Destination filter:** By type, status (enabled/disabled), connection mode
- **Profile search (Unify):** Lookup by email, user_id, or anonymous_id
- **Event search (Debugger):** Live stream with filter by event name, property value
- **Violation filter (Protocols):** By event name, violation type, source, date range
- **Audience conditions:** Multi-condition builder with event occurrences, trait values, date ranges

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1280px+) | Full sidebar + detail panels; Debugger with live event stream |
| Tablet | Functional but not optimized; most workflows require desktop |
| Mobile | Not supported — Segment is a developer/admin tool designed for desktop use |

## Access Control

| Role | Capabilities |
|------|-------------|
| Workspace Owner | Full control, billing, member management |
| Workspace Admin | Manage sources, destinations, protocols, members |
| Source Admin | Configure specific sources and their destinations |
| Read-only | View all configurations, schemas, profiles; cannot modify |
| Function Author | Create and edit custom Functions |
| Unify User | Access Profiles and Audiences; manage identity |
| API Token | Programmatic access scoped to specific resources |
| SSO / SCIM | Enterprise identity management integration |
