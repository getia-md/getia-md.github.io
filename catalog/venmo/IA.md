---
brand: Venmo
tagline: Fast, safe, social payments.
category: E-Commerce & Fintech
website: https://www.venmo.com
---

# Information Architecture — Venmo

## 1. Overview
Venmo is a peer-to-peer (P2P) mobile payment service owned by PayPal, distinguished by its **social feed** that turns transactions into a social experience. The IA supports sending/receiving money, a social timeline, the Venmo Debit Card, business profiles, and crypto trading. The web presence serves primarily as marketing and account management; the core experience lives in the mobile app.

## 2. Site Map

```
venmo.com
├── Home
├── About Venmo
│   ├── How it works
│   ├── Send & receive money
│   ├── Venmo Debit Card
│   ├── Venmo Credit Card
│   ├── Direct Deposit
│   └── Crypto
├── Business
│   ├── Business profiles
│   ├── Accept Venmo payments
│   ├── QR code payments
│   └── Venmo for business FAQ
├── Send / Request (authenticated)
│   ├── Pay or request
│   ├── Social feed
│   ├── Friends list
│   └── Transaction history
├── Resources
│   ├── Blog
│   ├── Security
│   ├── Fees
│   └── Supported banks
├── Help Center
│   ├── Account setup
│   ├── Payments
│   ├── Card support
│   └── Contact
├── Legal
│   ├── User agreement
│   ├── Privacy
│   └── Licenses
└── Auth
    ├── Log in
    └── Sign up
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top nav | Logo, Products dropdown, Business, Help, Log in / Get Venmo CTA |
| Products | Dropdown | Send & Receive, Debit Card, Credit Card, Direct Deposit, Crypto |
| Footer | Multi-column | Products, Resources, About, Legal, App store badges |
| App | Bottom tab bar | Home (feed), Search, Pay/Request (center FAB), Wallet, Me |

**Key pattern**: The website is a funnel to the app. Every product page ends with "Download Venmo" CTA. The social feed is app-exclusive.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Transaction | sender, recipient, amount, note/emoji, privacy (public/friends/private), timestamp |
| User Profile | display name, handle, avatar, friends list, QR code |
| Business Profile | name, category, logo, description, ratings, QR code |
| Card (Debit/Credit) | status, last 4, rewards, transaction history |
| Crypto Holding | coin, amount, buy/sell history, current value |
| Social Feed Item | transaction note, likes, comments, privacy level |

## 5. User Flows

### 5a. Send money
1. Open app → tap Pay/Request (center button)
2. Search recipient by name, @username, phone, or email
3. Enter amount + note (emoji encouraged)
4. Select privacy (public / friends / private)
5. Choose funding source (balance, bank, card)
6. Tap Pay → confirmation → appears in social feed

### 5b. Request money
1. Tap Pay/Request → switch to "Request" tab
2. Select person → enter amount + note
3. Send request → recipient gets push notification
4. Recipient approves → funds transfer

### 5c. Business profile setup
1. Switch to business profile in settings
2. Add business details (name, category, description)
3. Share QR code for in-person payments
4. Receive payments → view in business dashboard

## 6. URL / Route Structure

```
/                           → Home
/about/                     → How Venmo works
/debit-card/                → Venmo Debit Card
/credit-card/               → Venmo Credit Card
/direct-deposit/            → Direct Deposit
/crypto/                    → Crypto trading
/business/                  → Business profiles
/business/accept-venmo/     → Merchant solutions
/resources/fees/            → Fee schedule
/resources/security/        → Security info
/help/                      → Help center
/help/{category}/{article}/ → Help article
/account/                   → User dashboard (auth)
/account/transactions/      → Transaction history (auth)
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| People search | By name, @username, phone, email; shows mutual friends |
| Transaction search | Filter by person, date range, payment/request |
| Social feed filter | Public / Friends only toggle |
| Business search | By name or category, location-based nearby |
| Help search | Keyword → categorized FAQ results |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Marketing-focused layout, feature showcases, app download CTAs |
| Tablet (768–1023px) | Simplified grid, same marketing focus |
| Mobile web (<768px) | Deep-link to app, minimal account management, prominent app download |
| App (iOS/Android) | Full experience — social feed, payments, wallet, crypto, card management |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Marketing pages, fee info, help center |
| Logged-in User | Send/receive, social feed, transaction history, balance |
| Verified User (ID) | Higher limits, direct deposit, crypto trading |
| Debit/Credit Card Holder | Card management, rewards, ATM access |
| Business Profile | Business dashboard, payment acceptance, QR code |
| Internal Admin | Fraud review, compliance, dispute resolution |
