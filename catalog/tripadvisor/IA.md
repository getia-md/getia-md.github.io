---
brand: Tripadvisor
tagline: The world's largest travel guidance platform
category: Travel
website: https://tripadvisor.com
---

# Information Architecture — Tripadvisor

## 1. Overview

Tripadvisor is a travel platform combining user-generated reviews, price comparison, and booking for hotels, restaurants, attractions, and experiences. The IA is destination-centric — users start with a location and drill into categories (hotels, things to do, restaurants) with reviews as the core content type. The platform's moat is its massive review database (1B+ reviews), which powers rankings, "Travelers' Choice" awards, and trust-based discovery.

## 2. Site Map

```
Tripadvisor
├── Home
│   ├── Search (hotel, restaurant, attraction, flight)
│   ├── Trending Destinations
│   ├── Travelers' Choice Awards
│   ├── Travel Guides
│   ├── Recently Viewed
│   └── Personalized Recommendations
├── Destination Page
│   ├── Overview
│   ├── Hotels
│   ├── Things to Do
│   │   ├── Tours & Activities
│   │   ├── Attractions
│   │   ├── Day Trips
│   │   ├── Outdoor Activities
│   │   └── Nightlife
│   ├── Restaurants
│   ├── Flights
│   ├── Vacation Rentals
│   ├── Travel Forum
│   ├── Travel Guide
│   └── Map View
├── Hotel Page
│   ├── Photos (user + professional)
│   ├── Overview & Amenities
│   ├── Location (map)
│   ├── Reviews (sorted by date, rating, traveler type)
│   ├── Q&A
│   ├── Price Comparison (across booking sites)
│   ├── Room Types & Availability
│   ├── Nearby Hotels
│   └── Traveler Rating Summary
├── Restaurant Page
│   ├── Photos
│   ├── Menu
│   ├── Reviews
│   ├── Cuisine & Price Range
│   ├── Location & Hours
│   ├── Reserve a Table
│   └── Ranking in City
├── Attraction / Thing to Do
│   ├── Photos
│   ├── Reviews
│   ├── Description
│   ├── Duration / Hours / Prices
│   ├── Book Tour / Experience
│   └── Nearby Things to Do
├── Tours & Experiences (Viator integration)
│   ├── Book Experience
│   ├── Availability Calendar
│   ├── Pricing & Group Size
│   └── Cancellation Policy
├── Travel Forum
│   ├── Destination Forums
│   ├── Topic Forums (cruises, air travel, etc.)
│   ├── Ask a Question
│   └── Top Contributors
├── Trips (trip planning)
│   ├── Create a Trip
│   ├── Add Saves (hotels, restaurants, attractions)
│   ├── Itinerary View
│   └── Share Trip
├── Profile
│   ├── Reviews Written
│   ├── Photos Contributed
│   ├── Trips
│   ├── Badges / Points
│   ├── Travel Map
│   ├── Followers / Following
│   └── Contributions Level
├── Write a Review
│   ├── Rating (1-5 bubbles)
│   ├── Review Text
│   ├── Photos
│   ├── Traveler Type
│   └── Date of Visit
├── Business Owners (Management Center)
│   ├── Claim Listing
│   ├── Respond to Reviews
│   ├── Update Info / Photos
│   ├── Analytics
│   ├── Advertising (Sponsored Placements)
│   └── Tripadvisor Plus (premium listing)
└── Settings
    ├── Account
    ├── Notifications
    ├── Privacy
    ├── Travel Preferences
    └── Linked Accounts
```

## 3. Navigation Model

- **Type**: Top nav bar with search-first design
- **Desktop Top Bar**: Logo, Search bar (prominent), Discover, Trips, Review, Notifications, Profile
- **Desktop Sub-Nav (destination page)**: Hotels, Things to Do, Restaurants, Flights, Vacation Rentals, Forums
- **Mobile Bottom Tabs**: Explore, Search, Trips, Review, Profile
- **Map View**: Toggle between list and map for hotels, restaurants, attractions
- **Review Navigation**: Within any listing, tabs for Overview, Reviews, Q&A, Location
- **Breadcrumb**: Destination > Category > Specific Listing (e.g., Tokyo > Hotels > Park Hyatt)

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Hotel | name, address, star rating, Tripadvisor rating, review count, amenities, price range, photos, rooms, booking links | → Destination, → Reviews, → Booking Partners |
| Restaurant | name, address, cuisine types, price range, rating, review count, menu, hours, reservation link | → Destination, → Reviews |
| Attraction | name, address, type (museum, park, etc.), rating, review count, hours, admission price, duration | → Destination, → Reviews |
| Experience/Tour | name, provider, price, duration, group size, cancellation policy, availability, rating | → Destination, → Reviews (via Viator) |
| Review | rating (1-5), title, text, photos, date of visit, traveler type (family, couple, solo, business), helpful votes, response (from owner) | → Listing |
| Forum Post | title, body, author, destination, replies, helpful votes | → Forum, → Destination |
| Trip | name, destinations, saved items (hotels, restaurants, attractions), notes, shared users | → Profile |
| Destination | name, country, description, top hotels/restaurants/attractions, forum, travel guide | → Hotels, Restaurants, Attractions |
| Photo | image, caption, uploader, listing, date, helpful votes | → Listing |
| Travelers' Choice Award | listing, year, category (top hotel, best restaurant, etc.) | → Listing |

## 5. User Flows

### Researching a Hotel
1. Search "Hotels in Paris" → Results page with map + list
2. Filter: 4-star+, pool, free cancellation, under $200/night
3. Sort by: Traveler Ranked (default), Price, Distance
4. Click hotel → Read reviews (filter by "Couples" / "Recent")
5. View photos → Compare prices across Booking.com, Expedia, Hotels.com
6. Click "View Deal" → Redirect to booking partner site to complete reservation

### Writing a Review
1. Visited a restaurant → Profile → "Write a Review" or search for the restaurant
2. Rate overall (1-5 bubbles) → Rate food, service, value, atmosphere
3. Write review text → Upload photos → Select date of visit and traveler type
4. Submit → Review appears on listing after brief moderation
5. Earn contribution points → Level up contributor badge

### Planning a Trip
1. Create Trip ("Tokyo Summer 2026") → Search and save hotels, restaurants, attractions
2. Saved items organized in trip → View as list or on map
3. Share trip with travel companions → They can add/view saves
4. On the trip: reference saves for directions, hours, reviews

## 6. URL / Route Structure

```
tripadvisor.com/                                # Homepage
tripadvisor.com/Tourism-g{geoId}-{destination}  # Destination page
tripadvisor.com/Hotels-g{geoId}-{destination}   # Hotel listing
tripadvisor.com/Hotel_Review-g{geoId}-d{id}-Reviews-{slug}  # Hotel detail
tripadvisor.com/Restaurants-g{geoId}-{destination}  # Restaurant listing
tripadvisor.com/Restaurant_Review-g{geoId}-d{id}-Reviews-{slug}  # Restaurant detail
tripadvisor.com/Attractions-g{geoId}-{destination}  # Things to do
tripadvisor.com/Attraction_Review-g{geoId}-d{id}-Reviews-{slug}  # Attraction detail
tripadvisor.com/AttractionProductReview-g{geoId}-d{id}-{slug}  # Tour/experience
tripadvisor.com/ShowForum-g{geoId}-{destination}  # Destination forum
tripadvisor.com/Profile/{username}             # User profile
tripadvisor.com/Trips                          # My Trips
tripadvisor.com/UserReview                     # Write a review
```

## 7. Search & Filter

- **Global Search**: Hotels, restaurants, things to do, flights, destinations, forums
- **Hotel Filters**: Star rating, price range, amenities (pool, WiFi, spa, breakfast), traveler rating, hotel class, distance from center, brand, free cancellation
- **Restaurant Filters**: Cuisine, price range ($ to $$$$), dietary (vegan, GF), meal type (breakfast, lunch, dinner), open now
- **Attraction Filters**: Category (museums, tours, nature), price, duration, rating
- **Review Filters**: Rating, traveler type (family, couple, solo, business), date, language
- **Sort**: Traveler Ranked (default), Price (low to high), Distance, Rating
- **Map View**: Geographic filtering; zoom to see results in visible area
- **Price Comparison**: Hotel prices compared across 200+ booking sites in real time

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile App | Bottom tab bar; card-based listing; swipeable photos; map toggle; streamlined review writing |
| Tablet | Grid listing; map + list side-by-side; expanded review reading |
| Desktop (primary) | Full top nav; list + map layout; price comparison sidebar; forum in full width |
| Mobile Web | Responsive; prompts app download; same functionality as app |
| SEO Pages | Server-rendered destination, hotel, restaurant pages optimized for search engine indexing |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Anonymous Visitor | Browse listings, read reviews, compare prices, view forums; prompted to sign up for saving |
| Registered User | Write reviews, upload photos, create trips, save listings, post in forums, follow users |
| Top Contributor | Badge (Level 3-6), priority review visibility, access to exclusive contributor events |
| Business Owner (claimed) | Respond to reviews, update listing info/photos, view analytics, purchase ads |
| Tripadvisor Plus Subscriber | Members-only hotel prices, perks at select properties |
| Forum Moderator | Manage forum posts, pin topics, enforce community guidelines |
| Advertising Partner | Sponsored placement in search results, display ads, premium listing features |
