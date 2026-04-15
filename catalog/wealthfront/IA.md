---
brand: Wealthfront
tagline: Build long-term wealth on autopilot.
category: E-Commerce & Fintech
website: https://www.wealthfront.com
---

# Information Architecture — Wealthfront

## 1. Overview
Wealthfront is a robo-advisor platform offering automated investing, tax-loss harvesting, financial planning, high-yield cash accounts, and portfolio lending. The IA is structured around a **planning-first** philosophy: users start with financial goals and Wealthfront builds the portfolio to match. The site balances educational content (to build trust) with product pages and a clean dashboard experience.

## 2. Site Map

```
wealthfront.com
├── Home
├── Invest
│   ├── Automated investing
│   ├── Tax-loss harvesting
│   ├── Risk Parity
│   ├── US Direct Indexing
│   ├── Smart Beta
│   ├── Crypto trusts
│   ├── Stock investing
│   └── Socially responsible investing
├── Cash
│   ├── Cash Account (high-yield)
│   ├── Direct deposit
│   ├── Bill pay
│   └── Wire transfers
├── Borrow
│   ├── Portfolio line of credit
│   └── Terms & rates
├── Plan (Financial Planning)
│   ├── Free financial plan
│   ├── Path (planning tool)
│   ├── Retirement planning
│   ├── College planning
│   └── Home purchase planning
├── Learn (Blog / Education)
│   ├── Investing basics
│   ├── Tax strategies
│   ├── Market insights
│   └── Product updates
├── Pricing
├── About
│   ├── Company
│   ├── Careers
│   ├── Press
│   └── Security
├── Support
│   ├── FAQ
│   ├── Account help
│   └── Contact
├── Legal
│   ├── Disclosures
│   ├── Privacy
│   ├── Terms
│   └── ADV brochure
└── Auth
    ├── Log in
    └── Get started
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top nav | Logo, Invest, Cash, Borrow, Plan, Learn, Pricing, Log in, Get started CTA |
| Product pages | Sub-nav tabs | Features, How it works, Performance, FAQ |
| Footer | Multi-column | Products, Resources, Company, Legal, Social |
| Dashboard | Left sidebar | Overview, Invest, Cash, Borrow, Plan, Tax, Settings |

**Key pattern**: The public site emphasizes education and trust (performance data, methodology white papers). The dashboard is a clean, data-driven interface with portfolio visualizations.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Investment Account | type (individual, joint, IRA, 529), balance, allocation, risk score, performance |
| Portfolio | asset classes, ETFs/stocks, allocation %, rebalancing history |
| Tax-loss Harvest | harvested amount, replacement securities, 30-day wash-sale tracking |
| Cash Account | balance, APY, transactions, direct deposit info |
| Financial Plan | goals, timeline, savings rate, projected outcomes (Path) |
| Blog Post | title, author, date, category, body, related posts |

## 5. User Flows

### 5a. New investor onboarding
1. Land on home → "Get started" CTA
2. Risk questionnaire (10 questions on goals, timeline, risk tolerance)
3. View recommended portfolio allocation (pie chart + ETF breakdown)
4. Link bank account → set initial deposit + recurring schedule
5. Portfolio created → automated investing + tax-loss harvesting begins

### 5b. Financial planning (Path)
1. Navigate to Plan → enter income, savings, goals
2. Path simulates thousands of scenarios (Monte Carlo)
3. View projected outcomes → adjust variables (retirement age, savings rate)
4. Receive personalized recommendations
5. Optionally connect external accounts for full picture

### 5c. Cash account
1. Open Cash Account → link bank
2. Transfer funds → earn high APY (FDIC insured via partner banks)
3. Set up direct deposit → get paycheck 2 days early
4. Use for bill pay, transfers, or sweep into investment account

## 6. URL / Route Structure

```
/                               → Home
/investing/                     → Automated investing
/tax-loss-harvesting/           → TLH feature
/us-direct-indexing/            → Direct indexing
/socially-responsible-investing/→ SRI options
/cash/                          → Cash Account
/borrow/                        → Portfolio credit line
/financial-planning/            → Path planning tool
/pricing/                       → Fee schedule
/blog/                          → Learn / Blog
/blog/{slug}/                   → Blog post
/about/                         → Company info
/support/                       → Help center
/support/{topic}/               → Support article
/dashboard/                     → Account overview (auth)
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Blog search | Keyword search, category filter (Investing, Taxes, Planning) |
| Help search | FAQ keyword lookup, categorized results |
| Portfolio search | Search ETFs/stocks in portfolio by ticker or name |
| Account filter | Filter transactions by date, type, account |
| Path scenarios | Slider-based parameter adjustment with real-time recalculation |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full nav, side-by-side comparisons, interactive charts, Path simulator |
| Tablet (768–1023px) | Condensed nav, stacked charts, scrollable portfolio view |
| Mobile (<768px) | Hamburger menu, single-column, simplified charts, touch-friendly sliders |
| App (iOS/Android) | Tab bar (Home, Invest, Cash, Plan, More), swipeable account cards |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Marketing pages, blog, pricing, risk questionnaire preview |
| Free User | Path financial planning tool, account aggregation |
| Funded Investor | Full portfolio management, TLH, rebalancing, performance reports |
| Cash Account Holder | High-yield savings, direct deposit, bill pay |
| Borrower | Portfolio line of credit, draw/repay |
| Internal Advisor | Account review, compliance monitoring, support tools |
