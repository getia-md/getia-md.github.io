---
brand: Lyft
tagline: A ride whenever you need one
category: Transportation
website: https://lyft.com
---

# Information Architecture — Lyft

## 1. Overview

Lyft is a ride-hailing and micromobility platform connecting riders with drivers, bikes, and scooters. The IA is trip-centric — the home screen is a map with a destination input field, and the entire experience flows toward getting from A to B as quickly as possible. Secondary features include ride scheduling, shared rides, Lyft Pink membership, and a driver-side app with earnings tracking. The platform also operates bikeshare and scooter programs in select cities.

## 2. Site Map

```
Lyft
├── Home (Map + Ride Request)
│   ├── Where to? (destination input)
│   ├── Map (current location, nearby drivers)
│   ├── Saved Places (Home, Work, favorites)
│   ├── Recent Destinations
│   └── Promos / Offers
├── Ride Options
│   ├── Lyft (standard)
│   ├── Lyft XL (larger vehicle)
│   ├── Lyft Lux / Lux Black (premium)
│   ├── Shared (pooled rides)
│   ├── Wait & Save (cheaper, flexible pickup)
│   ├── Scheduled Rides (future booking)
│   ├── Priority Pickup (faster)
│   └── Price Estimate + ETA
├── In-Ride
│   ├── Driver Info (name, photo, car, plate)
│   ├── Live Map (route tracking)
│   ├── ETA to Destination
│   ├── Share Ride (safety — share trip with contacts)
│   ├── Contact Driver (call/text)
│   ├── Emergency (911 button)
│   └── Music (Spotify integration)
├── Post-Ride
│   ├── Rate Driver (1-5 stars)
│   ├── Tip Driver
│   ├── Receipt
│   ├── Report Issue
│   └── Lost & Found
├── Bikes & Scooters
│   ├── Map (available vehicles nearby)
│   ├── Unlock (QR scan)
│   ├── Pricing
│   └── Parking zones
├── Ride History
│   ├── Past Rides
│   ├── Receipts
│   └── Re-request Ride
├── Lyft Pink (subscription)
│   ├── Ride Discounts (5-15% off)
│   ├── Priority Pickups
│   ├── Bike/Scooter Discounts
│   ├── Grubhub+ Included
│   └── Relaxed Cancellation
├── Rewards / Offers
│   ├── Available Promos
│   ├── Referral Program
│   └── Ride Challenges
├── Profile
│   ├── Account Info
│   ├── Payment Methods
│   ├── Business Profile
│   ├── Accessibility Preferences
│   └── Safety Preferences
├── Safety
│   ├── Emergency Contacts
│   ├── Trusted Contacts
│   ├── Share Ride
│   ├── Safety Toolkit (911, report)
│   └── Community Guidelines
├── Settings
│   ├── Account
│   ├── Payment
│   ├── Notifications
│   ├── Privacy
│   └── Accessibility
├── Driver App (separate)
│   ├── Go Online / Offline
│   ├── Ride Requests
│   ├── Navigation
│   ├── Earnings Dashboard
│   ├── Weekly Summary
│   ├── Bonuses / Streaks
│   ├── Express Drive (rental program)
│   └── Driver Profile / Ratings
└── Website (lyft.com)
    ├── Ride with Lyft
    ├── Drive with Lyft
    ├── Business (Lyft Business)
    ├── Bikes & Scooters
    └── Safety
```

## 3. Navigation Model

- **Type**: Map-centric home + bottom sheet + hamburger menu
- **Home Screen**: Full-screen map + "Where to?" input (bottom sheet)
- **Bottom Sheet**: Slides up to show ride options after destination entry
- **Hamburger Menu (top left)**: Ride History, Lyft Pink, Payment, Promos, Settings, Safety, Help
- **In-Ride**: Full-screen map with persistent driver info bar and safety actions
- **Driver App**: Bottom tab bar — Home (map), Earnings, Rewards, Account

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Ride Request | pickup, destination, ride type, price estimate, ETA, surge multiplier | → Rider, → Driver |
| Trip | route, distance, duration, fare, tip, driver, rider, rating, timestamp | → Receipt, → History |
| Driver | name, photo, vehicle (make, model, color, plate), rating, ride count | → Trip |
| Ride Type | name (Lyft, XL, Lux, Shared), capacity, price multiplier, description | → Ride Request |
| Scheduled Ride | pickup, destination, ride type, scheduled time, reminder | → Ride Request |
| Receipt | fare breakdown (base, distance, time, tolls, fees, tip), payment method | → Trip |
| Promo / Offer | code, discount (%, $ off), expiry, conditions | → Ride Request |
| Saved Place | name (Home, Work, custom), address, coordinates | → Profile |
| Bike/Scooter | type, ID, battery level (scooter), location (coordinates), pricing | → Map |
| Lyft Pink Plan | tier, discount rates, perks, billing cycle | → Profile |

## 5. User Flows

### Requesting a Ride
1. Open app → Map shows current location → Tap "Where to?"
2. Enter destination (search, saved, recent) → Bottom sheet slides up
3. View ride options: Lyft ($12, 5 min), XL ($18, 4 min), Shared ($8, 8 min)
4. Select ride type → Confirm pickup location → "Request Lyft"
5. Matched with driver → See driver name, photo, car, ETA
6. Driver arrives → Get in → Live trip tracking → Arrive at destination
7. Rate driver → Add tip → Receipt generated

### Scheduling a Ride
1. Tap "Where to?" → Enter destination → Select ride type
2. Tap clock icon → Choose date and time (up to 7 days ahead)
3. Confirm → Receive confirmation notification
4. 15 minutes before: reminder notification → Driver matched → Pickup at scheduled time

### Using Bikes/Scooters
1. Home map → Switch to Bikes/Scooters view
2. See available vehicles nearby on map
3. Walk to vehicle → Scan QR code to unlock
4. Ride → Park in designated zone → End ride in app
5. Charge calculated by time + distance → Receipt generated

## 6. URL / Route Structure

```
lyft.com/                                   # Marketing homepage
lyft.com/rider                              # Rider info
lyft.com/driver                             # Driver signup
lyft.com/ride-types                         # Ride options explained
lyft.com/lyft-pink                          # Lyft Pink membership
lyft.com/business                           # Lyft Business
lyft.com/bikes                              # Bike/scooter info
lyft.com/safety                             # Safety page
lyft.com/rider/receipt?ride={rideId}        # Receipt (web)
lyft.com/invite/{referralCode}              # Referral link
lyft.com/help                               # Help center
```

## 7. Search & Filter

- **Destination Search**: Address autocomplete (powered by Google Maps/Mapbox), recent destinations, saved places
- **Ride Type Filter**: After destination entry, filter by ride type (standard, XL, Lux, Shared, Wait & Save)
- **Price Comparison**: Side-by-side price and ETA for each ride type
- **Bike/Scooter Map**: Filter map to show bikes only, scooters only, or both
- **Ride History Search**: Browse past rides by date; no keyword search
- **Help Center Search**: Keyword search across FAQ and support articles
- **No Route Search**: Single origin-destination model; no multi-stop browsing

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile App (primary) | Full-screen map; bottom sheet for ride options; swipeable ride cards; in-ride full screen |
| Tablet | Larger map; expanded bottom sheet; wider ride option cards |
| Web (lyft.com) | Marketing site; price estimator tool; no ride requesting |
| Apple Watch | Ride ETA, driver arrival notification, trip status; cannot request rides |
| Desktop | No desktop ride app; web used for account management and Lyft Business admin |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Rider | Request rides, schedule rides, rate drivers, tip, save places, use promos, rent bikes/scooters |
| Lyft Pink Rider | All rider features + 5-15% ride discount, priority pickup, relaxed cancellation, Grubhub+ |
| Business Rider | Rides billed to company account; travel policies enforced; receipt auto-sent to employer |
| Driver | Accept ride requests, navigate, earn fares and tips, track earnings, maintain rating |
| Express Drive Driver | Uses Lyft rental vehicle; weekly rental fee deducted from earnings |
| Business Admin | Manage rider accounts, set ride policies, view spend reports, allocate budgets |
| Minor (under 18) | Cannot ride alone; must be accompanied by account holder (per ToS) |
| Banned Rider/Driver | Account deactivated; cannot request or accept rides |
