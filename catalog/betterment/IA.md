---
brand: Betterment
tagline: Investing made better.
category: E-Commerce & Fintech
website: https://www.betterment.com
---

# Information Architecture — Betterment

## 1. Overview
Betterment is a goal-based robo-advisor that helps users invest toward specific life goals (retirement, safety net, major purchase). The IA is organized around **goals as first-class objects** — each goal gets its own portfolio, allocation, and timeline. Betterment also offers a cash management account, 401(k) for businesses, and crypto portfolios. The platform emphasizes tax coordination across accounts and automated rebalancing.

## 2. Site Map

```
betterment.com
├── Home
├── Investing
│   ├── Goal-based investing
│   ├── Portfolio strategies
│   │   ├── Core (broad market)
│   │   ├── Socially responsible (SRI)
│   │   ├── Goldman Sachs Smart Beta
│   │   ├── BlackRock Target Income
│   │   └── Crypto portfolios
│   ├── Tax-loss harvesting
│   ├── Tax coordination
│   ├── Charitable giving
│   └── Retirement (IRA, Roth, Rollover)
├── Cash Management
│   ├── Cash Reserve (high-yield)
│   ├── Checking
│   └── Features & rates
├── Betterment at Work (401k)
│   ├── For employers
│   ├── For employees
│   ├── Pricing
│   └── Request demo
├── Advisor Solutions (B2B)
│   ├── Betterment for Advisors
│   ├── Features
│   └── Get started
├── Resources
│   ├── Blog / Perspectives
│   ├── Help center
│   ├── Calculators & tools
│   └── Retirement calculator
├── Pricing
├── About
│   ├── Company
│   ├── Careers
│   ├── Press
│   └── Security
├── Legal
│   ├── Terms
│   ├── Privacy
│   └── Disclosures
└── Auth
    ├── Log in
    └── Get started
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top nav | Logo, Investing, Cash, 401(k), Advisors, Resources, Pricing, Log in, Get started |
| Product | Sub-nav | Overview, Strategies, Tax features, Performance, FAQ |
| Footer | Multi-column | Products, Resources, Company, Legal |
| Dashboard | Left sidebar + goal cards | Overview, Goals (each as a card), Cash, Tax, Settings |

**Key pattern**: Goal cards are the primary UI metaphor in the dashboard — each goal is a visual card showing progress toward target with its own allocation.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Goal | name, type (retirement, safety net, custom), target amount, timeline, portfolio strategy, risk level |
| Portfolio | strategy name, ETF allocations, risk score, performance, rebalancing log |
| Tax-loss Harvest | primary security, replacement, harvest amount, wash-sale status |
| Cash Reserve | balance, APY, FDIC coverage, linked accounts |
| 401(k) Plan | employer, match formula, vesting schedule, participant count |
| Blog Post | title, author, date, category, body, CTA |

## 5. User Flows

### 5a. Create a goal
1. Sign up / log in → "Add a goal" from dashboard
2. Select goal type (Retirement, Safety Net, Major Purchase, General Investing, Education)
3. Set target amount + target date
4. Select portfolio strategy (Core, SRI, Smart Beta, etc.)
5. Adjust risk level slider → preview allocation
6. Fund initial deposit → enable auto-deposit → goal live

### 5b. Tax coordination
1. Connect external accounts (401k, IRA, taxable)
2. Betterment analyzes all holdings across accounts
3. Recommends asset location (which assets in which account type for tax efficiency)
4. User approves → rebalancing adjusts allocations across accounts

### 5c. 401(k) employer setup
1. HR visits Betterment at Work → "Request demo"
2. Sales consultation → plan design
3. Employer sets match rules, vesting schedule
4. Employees invited → individual goal-based 401(k) experience
5. Payroll integration → contributions automated

## 6. URL / Route Structure

```
/                               → Home
/investing/                     → Investing overview
/portfolio/core/                → Core portfolio strategy
/portfolio/sri/                 → SRI portfolio
/portfolio/crypto/              → Crypto portfolios
/tax-loss-harvesting/           → TLH feature
/tax-coordination/              → Tax coordination
/cash-reserve/                  → Cash management
/checking/                      → Betterment Checking
/401k/                          → Betterment at Work
/advisors/                      → Advisor Solutions
/pricing/                       → Fee schedule
/resources/                     → Blog & tools
/resources/{slug}/              → Blog post
/calculators/retirement/        → Retirement calculator
/help/                          → Help center
/help/{category}/{article}/     → Help article
/app/goals/                     → Dashboard (auth)
/app/goals/{goal-id}/           → Individual goal (auth)
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Help search | Keyword-based, categorized by product area |
| Blog search | By topic (Investing, Taxes, Retirement, Market Commentary) |
| Portfolio comparison | Side-by-side strategy comparison tool |
| Goal filtering | Dashboard filters by goal type, performance, funding status |
| Calculator inputs | Interactive sliders for age, savings, expected return |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full nav, goal card grid, side-by-side charts, interactive tools |
| Tablet (768–1023px) | 2-column goal cards, collapsible sidebar |
| Mobile (<768px) | Hamburger menu, stacked goal cards, simplified charts |
| App (iOS/Android) | Tab bar (Home, Goals, Cash, Transfers, More), swipeable goal cards |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Marketing, pricing, blog, calculators |
| Free User | Account overview, basic financial tools |
| Funded Investor | Goal management, portfolio, TLH, tax coordination, performance |
| Cash Reserve User | High-yield savings, checking, transfers |
| 401(k) Participant | Employer plan, goal-based investing, rollovers |
| 401(k) Admin (Employer) | Plan configuration, employee management, compliance |
| Financial Advisor (B2B) | Multi-client dashboard, model portfolios, billing |
| Internal | Compliance review, support, account management |
