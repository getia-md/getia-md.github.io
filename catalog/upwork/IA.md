---
brand: Upwork
tagline: How work should work. Find quality talent or jobs.
category: E-Commerce & Fintech
website: https://www.upwork.com
---

# Information Architecture — Upwork

## 1. Overview
Upwork is the world's largest freelance platform connecting businesses with independent professionals across development, design, writing, marketing, and more. Unlike Fiverr's gig model, Upwork uses a **proposal-based system** — clients post jobs, freelancers submit proposals, and work is tracked via contracts (hourly with time tracking or fixed-price with milestones). Key features include Connects (credits for proposals), the Work Diary (automated screenshots for hourly work), and Upwork's Payment Protection.

## 2. Site Map

```
upwork.com
├── Home
├── Find Talent (Client)
│   ├── Browse by category
│   │   ├── Development & IT
│   │   ├── Design & Creative
│   │   ├── Sales & Marketing
│   │   ├── Writing & Translation
│   │   ├── Admin & Customer Support
│   │   ├── Finance & Accounting
│   │   ├── Engineering & Architecture
│   │   └── Legal
│   ├── Search freelancers
│   ├── Project Catalog (pre-defined projects)
│   ├── Talent Marketplace
│   └── Upwork Enterprise
├── Find Work (Freelancer)
│   ├── Browse jobs
│   ├── Saved jobs
│   ├── Submit proposals
│   ├── My Stats
│   └── Connects (proposal credits)
├── Job Post
│   ├── Title, description, skills
│   ├── Budget (hourly rate / fixed price)
│   ├── Experience level
│   ├── Proposals received
│   └── Invite freelancers
├── Freelancer Profile
│   ├── Title, overview, skills
│   ├── Portfolio
│   ├── Work history & feedback
│   ├── Certifications / Tests
│   ├── Availability & hourly rate
│   ├── Employment history / Education
│   └── Top Rated / Expert-Vetted badge
├── Contract (Active Work)
│   ├── Terms (hourly or fixed)
│   ├── Work Diary (hourly)
│   ├── Milestones (fixed-price)
│   ├── Messages
│   ├── Files
│   └── Feedback
├── Enterprise
│   ├── Solutions
│   ├── Compliance
│   ├── Talent sourcing
│   └── Contact sales
├── Resources
│   ├── Blog
│   ├── Community forums
│   ├── Academy (courses)
│   ├── Research & reports
│   └── Help center
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Fee schedule
└── Auth
    ├── Log in
    └── Sign up (Client / Freelancer)
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top bar | Logo, Find Talent, Find Work, Why Upwork, Enterprise, Log in, Sign up |
| Client dashboard | Top nav + sidebar | My Jobs, All Contracts, Reports, Messages, Search Talent |
| Freelancer dashboard | Top nav + sidebar | Find Work, My Jobs, Proposals, Profile, Reports, Messages |
| Category | Sub-nav | Category → Subcategory → Skill tags |
| Footer | Multi-column | For Clients, For Freelancers, Resources, Company, Legal |

**Key pattern**: Dual-sided navigation — the experience is fundamentally different for clients (hiring) vs. freelancers (finding work). Dashboard and nav items change based on the active role.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Job Post | title, description, skills, category, budget type (hourly/fixed), budget range, experience level (entry/intermediate/expert), duration, proposals count, client history |
| Proposal | freelancer, cover letter, bid (rate or fixed price), estimated duration, attachments, Connects spent, boosted flag |
| Freelancer Profile | title, overview, skills, hourly rate, availability, portfolio, work history, JSS (Job Success Score), Top Rated badge, earnings |
| Contract | job, freelancer, client, type (hourly/fixed), rate/budget, milestones, Work Diary, messages, status |
| Work Diary | date, hours logged, screenshots (10-min intervals), activity level %, memo |
| Milestone | name, amount, status (funded/in-progress/submitted/approved), due date |

## 5. User Flows

### 5a. Client — Post job & hire
1. Post a job → title, description, required skills, budget type
2. Set experience level, project length, screening questions
3. Job posted → freelancers submit proposals
4. Review proposals → shortlist → interview via Upwork Messages
5. Send offer (rate, weekly limit or milestones) → freelancer accepts → contract begins

### 5b. Freelancer — Find work & propose
1. Browse job feed or use search → apply filters (category, budget, experience, client history)
2. Submit proposal → cover letter + bid (costs Connects)
3. Optional: Boost proposal for higher visibility (extra Connects)
4. Client responds → interview/messaging → receive offer
5. Accept contract → begin work (hourly: log via Work Diary; fixed: deliver milestones)

### 5c. Hourly contract workflow
1. Contract active → freelancer logs hours via desktop app (Work Diary)
2. Screenshots + activity level captured every 10 minutes
3. Client reviews diary weekly → auto-payment on Monday
4. Dispute window for logged hours → Payment Protection covers tracked time

### 5d. Fixed-price contract workflow
1. Client funds milestone escrow
2. Freelancer delivers work → submits milestone
3. Client reviews → approves → funds released
4. Repeat for remaining milestones → contract ends

## 6. URL / Route Structure

```
/                               → Home
/hire/                          → Find talent landing
/hire/{category}/               → Category talent browse
/freelancers/{username}/        → Freelancer profile
/ab/jobs/search/                → Job search (freelancer)
/jobs/{job-slug}_{job-id}/      → Job detail
/nx/search/talent/              → Talent search (client)
/ab/proposals/                  → My proposals (freelancer auth)
/ab/contracts/                  → Active contracts (auth)
/messages/                      → Messages (auth)
/ab/reports/                    → Time & earnings reports (auth)
/services/                      → Project Catalog
/enterprise/                    → Enterprise solutions
/blog/                          → Blog
/community/                     → Forums
/help/                          → Help center
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Talent search | By skill, category, location, rate range, availability, English level, Job Success Score, Top Rated/Expert-Vetted badge |
| Job search | By keyword, category, experience level, budget range, hourly/fixed, client spend history, proposals count |
| Sort | Relevance, Newest, Client Rating, Budget |
| Saved searches | Alerts for new matching jobs/freelancers |
| Project Catalog | Browse pre-scoped projects by category and budget |
| Profile search | Clients can search for specific freelancers by name or skill |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full dashboard, sidebar nav, side-by-side proposals, Work Diary grid |
| Tablet (768–1023px) | Collapsed sidebar, stacked proposal cards |
| Mobile (<768px) | Hamburger menu, single-column job/proposal list, simplified Work Diary |
| App (iOS/Android) | Tab bar (Jobs/Talent, Contracts, Messages, Profile), push for proposals/messages |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Browse categories, view freelancer profiles (limited), read blog |
| Freelancer (Basic) | Submit proposals (Connects required), create profile, take skill tests |
| Freelancer (Rising Talent) | Badge, higher search ranking |
| Freelancer (Top Rated) | Top Rated badge, premium support, job invitation priority |
| Freelancer (Expert-Vetted) | Highest tier, curated by Upwork, enterprise job access |
| Client (Basic) | Post jobs, review proposals, hire, manage contracts |
| Client (Enterprise) | Dedicated talent sourcing, compliance tools, consolidated billing, success manager |
| Agency | Multi-freelancer management, agency profile, team contracts |
| Internal Admin | Dispute resolution, quality review, compliance, fee management |
