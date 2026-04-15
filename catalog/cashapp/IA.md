---
brand: Cash App
tagline: Do more with your money.
category: E-Commerce & Fintech
website: https://cash.app
---

# Information Architecture — Cash App

## 1. Overview
Cash App by Block (formerly Square) is a mobile-first financial platform combining P2P payments, Bitcoin trading, stock investing, the Cash Card (customizable Visa debit), Boost instant rewards, and direct deposit. The IA is minimal and action-oriented, reflecting Cash App's design philosophy of reducing financial friction. The website primarily drives app downloads; the app itself is the product.

## 2. Site Map

```
cash.app
├── Home
├── Features
│   ├── Send & Receive
│   ├── Cash Card
│   │   ├── Customize design
│   │   └── Boosts (rewards)
│   ├── Direct Deposit
│   ├── Bitcoin
│   ├── Stocks
│   ├── Cash App Borrow
│   ├── Cash App Taxes
│   └── Cash App Pay (for merchants)
├── $Cashtag (public profiles)
│   └── /{$cashtag}
├── Help
│   ├── Getting started
│   ├── Sending & receiving
│   ├── Cash Card
│   ├── Bitcoin
│   ├── Stocks
│   ├── Account & settings
│   └── Contact support
├── Legal
│   ├── Terms
│   ├── Privacy
│   ├── Licenses
│   └── Law enforcement guide
├── Card (app-only)
│   ├── Active Boosts
│   ├── Card settings
│   └── Spending history
└── Auth
    ├── Log in (phone/email)
    └── Sign up
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Website global | Minimal top nav | Logo, features link, sign in, download CTA |
| Website footer | Compact | Legal, Support, Social links |
| App | Bottom tab bar | Home ($), Card, Investing, Banking |
| App home | Action buttons | Pay, Request, Scan QR |

**Key pattern**: The website is ultra-minimal — almost a single-page experience funneling to the app. Navigation in-app is icon-driven with the $ symbol as the central action hub.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Transaction | sender, recipient, amount, note, status, timestamp |
| $Cashtag Profile | display name, $cashtag, avatar, QR code |
| Cash Card | design, Boosts enabled, last 4, status |
| Boost | merchant/category, reward (% or $), duration, activation status |
| Bitcoin Holding | amount (BTC/sats), USD value, buy/sell history |
| Stock Holding | ticker, shares (fractional), value, buy/sell history |
| Direct Deposit | routing number, account number, pay schedule |

## 5. User Flows

### 5a. Send money
1. Open app → tap $ on home screen
2. Enter dollar amount
3. Tap "Pay" → search by $cashtag, phone, or email
4. Add note (optional) → confirm
5. Instant transfer from balance or linked bank

### 5b. Buy Bitcoin
1. Navigate to Investing tab → Bitcoin
2. Tap "Buy" → enter USD amount
3. Review exchange rate → confirm
4. BTC added to wallet → option to withdraw to external wallet

### 5c. Activate Boost
1. Go to Card tab → browse available Boosts
2. Tap a Boost (e.g., "10% off at Chipotle") → "Add Boost"
3. Use Cash Card at that merchant → discount applied instantly
4. One active Boost at a time → swap anytime

### 5d. Cash App Pay (merchant)
1. Merchant integrates Cash App Pay button
2. Customer taps Cash App Pay at checkout
3. Redirected to Cash App → approve payment
4. Confirmation → return to merchant

## 6. URL / Route Structure

```
/                           → Home (minimal landing)
/app/                       → App download redirect
/$cashtag/                  → Public cashtag profile
/card/                      → Cash Card info
/bitcoin/                   → Bitcoin feature
/stocks/                    → Stock investing
/direct-deposit/            → Direct deposit info
/taxes/                     → Cash App Taxes
/borrow/                    → Cash App Borrow
/help/                      → Help center
/help/{category}/           → Help category
/help/{category}/{article}/ → Help article
/legal/                     → Legal index
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Person search | By $cashtag, phone, email; recent contacts prioritized |
| QR scan | Camera-based instant lookup |
| Stock search | By ticker or company name |
| Boost browse | By category, nearby merchants |
| Help search | Keyword search across all support articles |
| Transaction filter | By type (sent/received), date, amount |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Marketing page with animated product showcases, download CTAs |
| Tablet (768–1023px) | Simplified marketing layout |
| Mobile web (<768px) | Deep-link to app, app-store redirect, minimal content |
| App (iOS/Android) | Full product experience — payments, card, investing, banking |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Website marketing, help center, $cashtag profiles |
| Basic User | Send/receive (low limits), Cash Card |
| Verified User (ID) | Higher limits, Bitcoin, stocks, direct deposit, Borrow |
| Cash Card Holder | Boosts, card customization, ATM withdrawals |
| Business Account | Cash App Pay acceptance, invoicing, analytics |
| Internal Admin | Fraud detection, compliance, account review |
