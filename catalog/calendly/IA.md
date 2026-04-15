---
brand: Calendly
tagline: Easy scheduling ahead
category: Productivity
website: https://calendly.com
---

# Information Architecture — Calendly

## Overview

Calendly eliminates the back-and-forth of scheduling by letting users share a booking link that shows their real-time availability. The IA revolves around Event Types (templates for meetings) and Scheduled Events (booked meetings). Routing forms, round-robin assignment, and workflow automations extend the platform from personal scheduling to team-wide booking infrastructure.

## Site Map

```
calendly.com
├── Home (Upcoming Events Dashboard)
├── Event Types
│   ├── One-on-One
│   ├── Group
│   ├── Collective (multiple hosts)
│   ├── Round Robin
│   └── [Each Event Type]
│       ├── Event Details (name, duration, location)
│       ├── Availability
│       ├── Invitee Questions
│       ├── Notifications & Workflows
│       └── Confirmation Page
├── Scheduled Events
│   ├── Upcoming
│   ├── Past
│   ├── Date Range Filter
│   └── Event Detail
│       ├── Invitee Info
│       ├── Reschedule / Cancel
│       └── No-show
├── Workflows (Automations)
│   ├── Email Reminders
│   ├── Follow-ups
│   ├── SMS Notifications
│   └── Custom Workflows
├── Routing Forms
│   ├── Questions
│   └── Routing Rules → Event Types
├── Analytics
│   ├── Popular Times
│   ├── Event Volume
│   └── Team Activity
├── Integrations
│   ├── Calendars (Google, Outlook, iCloud)
│   ├── Video (Zoom, Teams, Meet)
│   ├── CRM (Salesforce, HubSpot)
│   └── Embed / API
├── Admin
│   ├── Organization Settings
│   ├── Managed Events
│   ├── Teams
│   └── Billing
└── Booking Page (Public)
    ├── User/Team Profile
    ├── Event Type Selection
    ├── Date/Time Picker
    └── Invitee Form
```

## Navigation Model

- **Top bar:** Calendly logo, Home, Event Types, Scheduled Events, Workflows, Routing, Analytics, Admin
- **Home dashboard:** Today's upcoming events, quick actions, recent bookings
- **Event Type editor:** Step-by-step settings (Details → Availability → Questions → Notifications → Confirmation)
- **Booking page (public):** Clean single-column flow — select event type → pick date/time → fill form → confirm

## Content Model

| Entity | Key Attributes | Relationships |
|--------|---------------|---------------|
| User | name, email, timezone, calendar connections | → Event Types, Scheduled Events |
| Team | name, members, booking page | → Round Robin pools, Collective events |
| Event Type | name, slug, duration, color, location, questions | → Availability rules, Workflows |
| Scheduled Event | date/time, status (active/canceled/rescheduled), invitee | → Event Type, User |
| Invitee | name, email, responses to questions, timezone | → Scheduled Event |
| Workflow | trigger (before/after event), action (email/SMS/webhook) | → Event Types |
| Routing Form | questions, routing rules | → Event Types |
| Availability | schedule (weekly hours), date overrides, buffer, limits | → Event Type |

## User Flows

### 1. Set Up and Share
`Event Types → + New → Name, duration, location → Set availability → Add questions → Copy link → Share`

### 2. Invitee Books a Meeting
`Open booking link → Select event type → Choose date/time from available slots → Fill form → Confirm → Calendar invite sent`

### 3. Round Robin Scheduling
`Admin creates Round Robin event type → Add team members → Set distribution (optimize for availability or equal) → Invitee books → Auto-assigned`

### 4. Automate Follow-ups
`Workflows → + New → Trigger: After event ends → Action: Send follow-up email → Apply to event types → Activate`

## URL / Route Structure

```
calendly.com/event_types                          # Manage event types
calendly.com/event_types/{id}/edit                # Edit event type
calendly.com/scheduled_events                     # Upcoming/past events
calendly.com/{username}                           # Public booking page
calendly.com/{username}/{event-slug}              # Specific event type booking
calendly.com/{username}/{event-slug}/{date}       # Date-specific slots
calendly.com/d/{invitee-uuid}                     # Invitee confirmation/reschedule
calendly.com/routing/{form_id}                    # Routing form
```

## Search & Filter

- **Scheduled events:** Filter by date range, event type, status (active/canceled), invitee name/email
- **Event types:** Search by name, filter by active/inactive
- **Analytics filters:** Date range, event type, team member
- **Booking page:** Availability auto-filtered by invitee's timezone and host's connected calendars

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (1024px+) | Full admin dashboard with sidebar navigation; booking page as centered card |
| Tablet (768–1023px) | Responsive admin layout, booking page adapts naturally |
| Mobile | Fully responsive booking page (critical for invitees); admin app with simplified navigation |

## Access Control

| Role | Capabilities |
|------|-------------|
| Organization Owner | Billing, all settings, manage all teams and members |
| Organization Admin | Manage members, teams, managed events, security settings |
| Team Manager | Manage team event types, view team analytics |
| Team Member | Own event types, view personal scheduled events |
| Invitee (external) | Book, reschedule, cancel own appointments via link |
