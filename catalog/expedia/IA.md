---
brand: Expedia
tagline: Made to travel
category: Travel
website: https://expedia.com
---

# Information Architecture — Expedia

## 1. Overview

Expedia is a full-service online travel agency (OTA) enabling booking of flights, hotels, vacation rentals, car rentals, cruises, and bundled packages. The IA is transaction-driven — every surface is designed to move users from search to booking. The platform differentiates through its One Key rewards program (unifying Expedia, Hotels.com, and Vrbo), bundle discounts ("Save when you book together"), and price tracking with alerts. The experience is optimized for comparison shopping across hundreds of providers.

## 2. Site Map

```
Expedia
├── Home
│   ├── Search Module
│   │   ├── Stays
│   │   ├── Flights
│   │   ├── Cars
│   │   ├── Packages (flight + hotel)
│   │   ├── Things to Do
│   │   ├── Cruises
│   │   └── Groups & Meetings
│   ├── Deals & Promotions
│   ├── Trending Destinations
│   ├── Recently Searched
│   ├── One Key Benefits
│   └── App Download CTA
├── Search Results
│   ├── Hotel Results
│   │   ├── List + Map Toggle
│   │   ├── Filters Panel
│   │   ├── Sort Options
│   │   ├── Price Comparison
│   │   ├── VIP Access Properties
│   │   └── Bundle Savings Callout
│   ├── Flight Results
│   │   ├── Filter (airline, stops, times, duration)
│   │   ├── Price Calendar
│   │   ├── Fare Comparison
│   │   └── Flexible Dates
│   ├── Car Rental Results
│   ├── Vacation Rental Results
│   └── Package Results
├── Property Detail (Hotel)
│   ├── Photos Gallery
│   ├── Overview (rating, location, description)
│   ├── Room Types & Rates
│   │   ├── Room photos
│   │   ├── Amenities
│   │   ├── Cancellation Policy
│   │   ├── Price per night
│   │   └── Reserve Button
│   ├── Location & Map
│   ├── Amenities List
│   ├── Reviews (verified travelers)
│   ├── Nearby Properties
│   └── Add to Trip
├── Flight Detail
│   ├── Flight Segments (outbound + return)
│   ├── Fare Classes (basic, main, flex)
│   ├── Baggage Policy
│   ├── Seat Selection
│   └── Price Breakdown
├── Booking Flow
│   ├── Traveler Information
│   ├── Payment
│   │   ├── Credit/Debit Card
│   │   ├── One Key Cash (rewards)
│   │   ├── PayPal
│   │   └── Pay Later (Affirm)
│   ├── Travel Protection (insurance)
│   ├── Price Summary
│   ├── Promo Code
│   └── Confirmation
├── Trips (My Trips)
│   ├── Upcoming Trips
│   ├── Past Trips
│   ├── Cancelled
│   ├── Trip Detail
│   │   ├── Itinerary
│   │   ├── Booking Confirmations
│   │   ├── Check-in Links
│   │   └── Add Activities
│   └── Share Trip
├── One Key Rewards
│   ├── Membership Tiers (Blue, Silver, Gold, Platinum)
│   ├── OneKeyCash Balance
│   ├── Earn Rules
│   ├── VIP Access Properties
│   └── Cross-brand Usage (Expedia, Hotels.com, Vrbo)
├── Price Tracking
│   ├── Watched Trips
│   ├── Price Alerts
│   └── Price Drop Refunds (for tracked items)
├── Things to Do
│   ├── Attractions
│   ├── Tours
│   ├── Day Trips
│   └── Transfers
├── Account
│   ├── Profile
│   ├── Payment Methods
│   ├── Traveler Profiles (saved info)
│   ├── Communication Preferences
│   ├── One Key Status
│   └── Credits & Coupons
├── Customer Service
│   ├── Help Center
│   ├── Virtual Agent (chatbot)
│   ├── Call Support
│   └── Manage Booking (change/cancel)
└── Cruises
    ├── Cruise Search
    ├── Cruise Lines
    ├── Destinations
    └── Cabin Selection
```

## 3. Navigation Model

- **Type**: Top nav bar with tabbed search module
- **Desktop Top Bar**: Logo, "Español" toggle, Support, Trips, Sign In | One Key callout
- **Search Module Tabs**: Stays, Flights, Cars, Packages, Things to Do, Cruises — each with form fields
- **Mobile Bottom Tabs**: Search, Trips, Rewards, Account
- **Results Page**: Sticky filter bar + scrollable list; map toggle (hotels); sort dropdown
- **Booking Flow**: Linear stepper — Select → Details → Payment → Confirmation
- **Cross-sell**: After hotel booking, suggest flights/cars/activities ("Complete your trip")

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Hotel | name, star rating, guest rating, review count, address, amenities, photos, VIP Access flag, property type | → Rooms, → Reviews, → Destination |
| Room | name, bed type, max occupancy, rate (per night), cancellation policy, meal plan, amenities | → Hotel |
| Flight | airline, flight number, departure/arrival, duration, stops, aircraft, fare classes, baggage | → Airline, → Route |
| Car Rental | vendor, car type/class, pickup/dropoff location, price per day, features (GPS, insurance) | → Vendor |
| Vacation Rental | inherits Hotel + kitchen, bedrooms, host info | → Vrbo integration |
| Package | hotel + flight (+ car optional), bundle discount, total price, savings amount | → Hotel, → Flight |
| Activity/Experience | name, provider, duration, price, availability, cancellation policy, description, meeting point | → Destination |
| Review | rating (1-10), text, traveler name, date, trip type, verified flag | → Hotel/Experience |
| One Key Cash | balance, earning rate by tier, redemption rate ($1 = 1 OneKeyCash) | → Account |
| Price Alert | property/flight, target price, current price, status (active/triggered) | → Account |
| Trip | name, dates, destination, bookings (hotel, flight, car, activities), shared users | → Bookings |

## 5. User Flows

### Booking a Hotel
1. Home → "Stays" tab → Enter destination, dates, guests
2. Search → Results page with map and list
3. Filter: Star rating, price range, guest rating, amenities, neighborhood, cancellation
4. Sort: Recommended, Price (low-high), Guest Rating, Distance
5. Click hotel → View photos, amenities, room types
6. Select room → Choose rate (refundable vs. non-refundable)
7. Checkout → Enter traveler info → Payment → Apply One Key Cash → Confirm
8. Receive confirmation email → Booking appears in Trips

### Booking a Package (Flight + Hotel)
1. Home → "Packages" tab → Enter origin, destination, dates, guests
2. Select flight (outbound) → Select flight (return) → View package hotels
3. Each hotel shows "Member Price" and "Bundle Savings: $X"
4. Select hotel + room → View total package price
5. Checkout → Potential savings of 10-30% vs. separate bookings

### Using Price Tracking
1. Search for a flight or hotel → Don't book yet
2. Click "Track Price" or bell icon on result
3. Receive email/push notification when price drops
4. If price drops after booking (within policy), receive automatic credit/refund

## 6. URL / Route Structure

```
expedia.com/                                # Homepage
expedia.com/Hotels                          # Hotel search
expedia.com/Hotel-Search?destination={dest}&checkIn={date}&checkOut={date}  # Hotel results
expedia.com/h{hotelId}.Hotel-Information    # Hotel detail
expedia.com/Flights                         # Flight search
expedia.com/Flights-Search?leg1={params}    # Flight results
expedia.com/Cars                            # Car rental search
expedia.com/Vacation-Packages              # Package search
expedia.com/things-to-do/{destination}      # Activities
expedia.com/Cruises                         # Cruise search
expedia.com/trips                           # My Trips
expedia.com/rewards                         # One Key Rewards
expedia.com/deals                           # Deals & promotions
expedia.com/service/                        # Help center
expedia.com/account                         # Account settings
```

## 7. Search & Filter

- **Multi-Product Search**: Separate search forms for stays, flights, cars, packages, activities, cruises
- **Hotel Filters**: Price range, star rating, guest rating, amenities (pool, WiFi, parking, breakfast), property type (hotel, resort, B&B), neighborhood, cancellation policy, payment (pay later), VIP Access
- **Flight Filters**: Airline, stops (nonstop, 1 stop, 2+), departure time, duration, price, cabin class
- **Price Calendar**: Visual calendar showing cheapest dates for flexible travelers
- **Flexible Dates**: "+/- 3 days" option to find lowest fares
- **Sort**: Recommended, Price, Guest Rating, Distance, Stars, Duration (flights)
- **Map Search**: Interactive map for hotels; zoom/pan to search area
- **Bundle Suggestions**: Cross-sell cards suggesting related products to add to trip

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile App (primary for booking management) | Bottom tab bar; vertical search results; full-screen booking flow; push notifications for price alerts |
| Mobile Web | Responsive; same search/book flow; prompts app download |
| Tablet | Side-by-side map + list for hotels; expanded property cards |
| Desktop (primary for research/booking) | Tabbed search module; results with filter sidebar + map; wide property detail with photo gallery |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Anonymous Visitor | Search, compare prices, view properties; must sign in to book |
| Registered User (One Key Blue) | Book, track prices, earn 1x OneKeyCash, access member prices |
| One Key Silver | 2x OneKeyCash, VIP Access at select properties (room upgrades, late checkout) |
| One Key Gold | 3x OneKeyCash, enhanced VIP Access, priority support |
| One Key Platinum | 4x OneKeyCash, best VIP Access perks, top-tier support |
| Business Travel User | Managed booking with corporate rates, expense reporting, policy enforcement |
| Travel Agent | Access to agent portal, commission tracking, group booking tools |
| Property Partner | Manage listing, set rates/availability, respond to reviews, access performance analytics |
| Airline / Car Partner | Inventory and rate management via partner extranet |
