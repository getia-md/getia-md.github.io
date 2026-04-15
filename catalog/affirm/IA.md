---
brand: Affirm
tagline: Buy now, pay over time. No hidden fees.
category: E-Commerce & Fintech
website: https://www.affirm.com
---

# Information Architecture — Affirm

## 1. Overview
Affirm provides transparent buy-now-pay-later financing with no late fees, no hidden charges, and no compounding interest. The IA is bifurcated between **consumers** (flexible payment plans, Affirm Card, savings) and **merchants** (checkout integration, analytics). Affirm's differentiator is radical transparency — every payment schedule is shown upfront with the total cost clearly stated.

## 2. Site Map

```
affirm.com
├── Home
├── How it works
│   ├── Pay in 4 (0% APR)
│   ├── Monthly payments (up to 60 months)
│   └── Affirm Card (physical + virtual)
├── Shop
│   ├── Shop directory
│   ├── Browse by category
│   ├── Featured deals
│   └── Store detail page
├── Affirm Card
│   ├── Overview
│   ├── Apply
│   └── Manage card
├── Affirm Money (Savings)
│   ├── High-yield savings
│   └── Account overview
├── Business
│   ├── Solutions
│   │   ├── Affirm checkout
│   │   ├── Adaptive checkout
│   │   └── Business analytics
│   ├── Pricing
│   ├── Integrations / Platforms
│   └── Developer docs
├── About
│   ├── Company
│   ├── Careers
│   ├── Press
│   └── Investor relations
├── Help Center
│   ├── Getting started
│   ├── Payments & billing
│   ├── Affirm Card FAQ
│   └── Contact support
├── Legal
│   ├── Terms of Service
│   ├── Privacy Policy
│   └── Licenses
└── Auth
    ├── Log in
    └── Sign up
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Persistent top bar | Logo, For Shopping, For Business, Affirm Card, Log in |
| Consumer | Dropdown menus | How it works, Shop directory, Affirm Card, Savings |
| Business | Dropdown menus | Solutions, Pricing, Integrations, Docs, Contact sales |
| Footer | Multi-column | Products, Company, Resources, Legal, Social |
| Mobile | Hamburger drawer | Collapsible sections for consumer/business |

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Payment Plan | type (Pay-in-4 / Monthly), APR, term length, total cost, eligibility |
| Merchant | name, logo, categories, Affirm options offered, URL |
| Deal | merchant, discount/offer, validity, featured flag |
| Help Article | title, body, category, tags, related articles |
| Affirm Card | status, credit limit, active loans, payment schedule |
| Savings Account | balance, APY, transactions |

## 5. User Flows

### 5a. Consumer — Pay in 4
1. Shop at partner store → select Affirm at checkout
2. Enter phone number → verify via SMS
3. View transparent payment schedule (4 biweekly, 0% APR)
4. Approve → purchase confirmed
5. Autopay or manual payments via Affirm app/website

### 5b. Consumer — Affirm Card
1. Apply for Affirm Card → credit check
2. Receive virtual card instantly, physical card by mail
3. Use card anywhere Visa is accepted
4. Choose payment plan per purchase in the app
5. Track all loans and payments in dashboard

### 5c. Merchant — Setup
1. Visit Business page → explore solutions
2. Select platform (Shopify, BigCommerce, custom API)
3. Sign agreement → receive API credentials
4. Integrate checkout widget → test in sandbox
5. Launch → access merchant dashboard for analytics

## 6. URL / Route Structure

```
/                           → Home
/how-it-works/              → Consumer overview
/pay-in-4/                  → Biweekly plan details
/monthly-payments/          → Monthly financing
/affirm-card/               → Card product page
/savings/                   → Affirm Money
/shop/                      → Store directory
/shop/{category}/           → Category browse
/business/                  → Merchant landing
/business/solutions/        → Product solutions
/business/pricing/          → Merchant pricing
/developers/                → API documentation
/help/                      → Help center
/help/{topic}/              → Help article
/about/                     → Company
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Shop search | Autocomplete merchant names, category chips |
| Category browse | Electronics, Fashion, Home, Auto, Travel, etc. |
| Deal sort | Newest, highest discount, most popular |
| Help search | Keyword → grouped results (consumer / merchant) |
| Loan lookup | Search by order or merchant within user dashboard |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full nav with dropdowns, side-by-side comparisons, multi-column directory |
| Tablet (768–1023px) | Collapsed nav, 2-column grid, sticky CTA bar |
| Mobile (<768px) | Hamburger menu, stacked cards, bottom-anchored "Get the app" |
| App (iOS/Android) | Tab bar (Home, Card, Shop, Payments, Profile), swipe for plan details |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Browse shops, learn about products, view help |
| Logged-in Consumer | Payment dashboard, loan history, Affirm Card management, savings |
| Affirm Card Holder | Card settings, per-purchase plan selection, virtual card numbers |
| Merchant Admin | Dashboard, settlements, refunds, integration settings |
| Merchant Developer | API keys, sandbox, webhooks, documentation |
| Internal | Risk assessment tools, compliance, user management |
