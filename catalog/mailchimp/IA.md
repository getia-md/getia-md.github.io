---
brand: Mailchimp
tagline: Turn emails into revenue
category: Business SaaS
website: https://mailchimp.com
---

# Information Architecture — Mailchimp

## Overview

Mailchimp is an email marketing and automation platform that has expanded into a full marketing suite. The IA is organized around Audiences (contact lists), Campaigns (emails, ads, social posts, landing pages), and Automations (triggered email journeys). The drag-and-drop email builder and template gallery remain the core experience, while analytics track opens, clicks, and revenue attribution.

## Site Map

```
mailchimp.com
├── Home (Dashboard)
│   ├── Campaign Performance Summary
│   ├── Audience Growth
│   └── Revenue Attribution
├── Campaigns
│   ├── All Campaigns
│   ├── Email Campaigns
│   │   ├── Regular
│   │   ├── A/B Test
│   │   └── Multivariate
│   ├── Automations (Customer Journeys)
│   │   ├── Pre-built Journeys
│   │   └── Custom Journey Builder
│   ├── Landing Pages
│   ├── Signup Forms
│   ├── Social Posts
│   ├── Ads (Facebook, Instagram, Google)
│   └── Postcards
├── Audience
│   ├── All Contacts
│   ├── Segments
│   ├── Tags
│   ├── Groups
│   ├── Signup Forms
│   ├── Dashboard (audience stats)
│   └── Surveys
├── Content
│   ├── My Files (images, assets)
│   ├── Creative Assistant (AI design)
│   └── Content Studio
├── Analytics
│   ├── Email Performance
│   ├── Audience Analytics
│   ├── Revenue Reports
│   ├── Comparative Reports
│   └── Campaign Benchmarks
├── Integrations
│   ├── E-commerce (Shopify, WooCommerce)
│   ├── CRM
│   └── API
├── Website
│   ├── Website Builder
│   ├── Domains
│   └── Stores (e-commerce)
├── Settings
│   ├── Account
│   ├── Billing
│   ├── Users
│   ├── Verified Domains
│   └── API Keys
└── Marketing Site
    ├── Products
    ├── Pricing
    ├── Resources
    └── Templates
```

## Navigation Model

- **Left sidebar:** Home, Campaigns, Automations, Audience, Content, Analytics, Website, Integrations
- **Campaign builder:** Step flow — Select type → Audience → Design (drag-and-drop editor) → Preview & Test → Send/Schedule
- **Audience view:** Table with search/filter; segments and tags in sub-nav
- **Journey builder:** Visual flowchart — starting point → conditions → actions → branches
- **Top bar:** Account dropdown, search, create button (+), help

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| Audience | name, contacts count, signup forms | → Contacts, Segments, Tags, Groups |
| Contact | email, name, status (subscribed/unsubscribed/cleaned), merge fields | → Audience, Tags, Segments |
| Segment | name, filter conditions (AND/OR) | → Contacts (dynamic) |
| Tag | name | → Contacts (many-to-many) |
| Campaign (Email) | subject, from, content, audience/segment, status (draft/sent/scheduled) | → Audience, Report |
| Customer Journey | name, starting point, steps (conditions/actions), status | → Audience, Contacts |
| Template | name, HTML/drag-and-drop layout | → Campaigns |
| Landing Page | title, URL, form, template | → Audience |
| Report | opens, clicks, bounces, unsubscribes, revenue | → Campaign |
| Automation | trigger (signup/purchase/date/etc.), emails sequence | → Audience |

## User Flows

### 1. Send an Email Campaign
`Campaigns → + Create → Email → Select Audience/Segment → Design email (drag-and-drop) → Add subject & preview text → Test send → Schedule or Send Now`

### 2. Build a Customer Journey
`Automations → + Create Journey → Choose starting point (e.g., "Signed up") → Add delay → Add email → Add if/else condition → Add another email → Activate`

### 3. Grow Audience
`Audience → Signup Forms → Customize embedded form or pop-up → Copy embed code → Place on website → New signups flow into audience → Auto-tagged`

### 4. Analyze Campaign Performance
`Analytics → Select campaign → View opens, clicks, click map (heatmap on email), revenue → Compare against industry benchmarks → Export report`

## URL / Route Structure

```
us{dc}.admin.mailchimp.com/                              # Dashboard
us{dc}.admin.mailchimp.com/campaigns/                     # All campaigns
us{dc}.admin.mailchimp.com/campaigns/edit?id={id}         # Campaign editor
us{dc}.admin.mailchimp.com/customer-journey/              # Customer journeys
us{dc}.admin.mailchimp.com/lists/members/?id={audience_id} # Audience contacts
us{dc}.admin.mailchimp.com/lists/segments?id={audience_id} # Segments
us{dc}.admin.mailchimp.com/reports/                       # Reports
us{dc}.admin.mailchimp.com/landing-pages/                 # Landing pages
{audience_slug}.mailchimpsites.com/                       # Published landing page
```

## Search & Filter

- **Contact search:** Search by email, name; filter by tag, segment, signup date, campaign activity, e-commerce data
- **Campaign search:** Search by name, filter by type, status (sent/draft/scheduled), date range
- **Segment builder:** Multi-condition filter (contact info, campaign activity, e-commerce, tags) with AND/OR
- **Report filtering:** By date range, campaign, audience
- **Content search:** Search uploaded files and templates by name

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Full admin with sidebar navigation and drag-and-drop email editor |
| Tablet (768–1023px) | Responsive admin; email editor functional but optimized for larger screens |
| Mobile app (iOS/Android) | View reports, manage audience, send campaigns; limited email design |
| Email rendering | Email preview/testing across 40+ clients (desktop, mobile, web) |

## Access Control

| Role | Capabilities |
|------|-------------|
| Owner | Full account control, billing, all audiences and campaigns |
| Admin | Manage users, all audiences, all campaigns, reports |
| Manager | Create/send campaigns, manage audiences, view reports |
| Author | Create campaigns (cannot send), manage content |
| Viewer | Read-only access to reports and campaigns |
| API Key | Programmatic access with full or limited scope |
