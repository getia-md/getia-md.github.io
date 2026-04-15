---
brand: Yelp
tagline: Connecting people with great local businesses
category: Local Discovery
website: https://yelp.com
---

# Information Architecture — Yelp

## 1. Overview

Yelp is a local business discovery and review platform covering restaurants, home services, shopping, nightlife, and more. The IA is location-driven — the home screen centers on a search bar with location context, surfacing nearby businesses with user reviews as the primary trust signal. Yelp combines consumer-facing discovery with business-facing tools (advertising, reservations, waitlist, request-a-quote), creating a two-sided marketplace for local commerce.

## 2. Site Map

```
Yelp
├── Home
│   ├── Search (business name, category, or service)
│   ├── Location (auto-detected or entered)
│   ├── Category Quick Links
│   │   ├── Restaurants
│   │   ├── Home Services
│   │   ├── Auto Services
│   │   ├── Shopping
│   │   ├── Nightlife
│   │   ├── Beauty & Spa
│   │   ├── Health & Medical
│   │   └── Active Life
│   ├── Trending Near You
│   ├── Recently Viewed
│   └── Collections / Lists
├── Search Results
│   ├── Business List
│   ├── Map View
│   ├── Filters Panel
│   ├── Sponsored Results
│   └── Sort Options
├── Business Page
│   ├── Photos & Videos
│   ├── Business Info
│   │   ├── Address, Phone, Website
│   │   ├── Hours of Operation
│   │   ├── Price Range ($ to $$$$)
│   │   ├── Categories / Tags
│   │   ├── Amenities & Attributes
│   │   └── Health & Safety
│   ├── Reviews
│   │   ├── Overall Rating (1-5 stars)
│   │   ├── Review Highlights (AI-generated)
│   │   ├── Individual Reviews
│   │   ├── Sort (date, rating, Yelp Sort)
│   │   ├── Filter by rating
│   │   └── Owner Responses
│   ├── Actions
│   │   ├── Write a Review
│   │   ├── Add Photos
│   │   ├── Check In
│   │   ├── Bookmark
│   │   ├── Share
│   │   └── Report
│   ├── Reservation (OpenTable / Yelp Reservations)
│   ├── Waitlist (Yelp Waitlist)
│   ├── Order Food (delivery/pickup)
│   ├── Request a Quote (services)
│   ├── Menu (restaurants)
│   ├── Q&A
│   └── Nearby Businesses
├── Restaurants
│   ├── Browse by Cuisine
│   ├── Browse by Feature (outdoor seating, delivery, etc.)
│   ├── Best of Lists
│   └── Reservations
├── Home Services
│   ├── Request a Quote Flow
│   ├── Browse by Service (plumbing, electrician, etc.)
│   └── Cost Guides
├── Write a Review
│   ├── Star Rating (1-5)
│   ├── Review Text
│   ├── Photos / Videos
│   ├── Check-In
│   └── Useful / Funny / Cool votes
├── Profile
│   ├── Reviews
│   ├── Photos
│   ├── Bookmarks (saved businesses)
│   ├── Collections
│   ├── Check-Ins
│   ├── Friends
│   ├── Compliments
│   ├── Elite Status
│   └── Activity Feed
├── Collections
│   ├── Create Collection (curated business lists)
│   ├── Public / Private
│   └── Follow Collections
├── Events (Yelp Events / Elite Events)
├── Talk (forum, being sunset)
├── Yelp for Business
│   ├── Claim Business
│   ├── Business Dashboard
│   ├── Respond to Reviews
│   ├── Update Business Info / Photos
│   ├── Yelp Ads
│   ├── Yelp Deals / Gift Certificates
│   ├── Analytics & Insights
│   ├── Yelp Reservations
│   ├── Yelp Waitlist
│   ├── Yelp Connect (posts to followers)
│   └── Request a Quote Management
├── Yelp Fusion API (developers)
└── Settings
    ├── Account
    ├── Privacy
    ├── Notifications
    ├── Friend Invitations
    └── External Applications
```

## 3. Navigation Model

- **Type**: Top nav bar with search-first design (desktop), bottom tab bar (mobile)
- **Desktop Top Bar**: Logo, Search (two fields: "Find" + "Near"), Write a Review, Restaurants, Home Services, Auto Services, More | Notifications, Messages, Profile
- **Mobile Bottom Tabs**: Search, Collections/Bookmarks, Review, Notifications, Profile
- **Search Results**: List view + map toggle; sticky filter bar at top
- **Business Page**: Long-scroll single page with tabbed sections (Overview, Reviews, Photos, Menu)
- **Category Navigation**: Browse categories → subcategories → filtered results

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Business | name, address, phone, website, hours, categories, price range, rating (1-5), review count, photos, attributes, claimed/unclaimed | → Reviews, → Photos, → Owner |
| Review | rating (1-5), text, photos, author, date, useful/funny/cool votes, check-in, owner response | → Business, → User |
| Photo | image, caption, uploader, date, category (food, inside, outside, menu) | → Business, → Review |
| Check-In | user, business, timestamp, message (optional) | → Business, → User |
| Collection | name, description, businesses list, creator, public/private, followers | → Businesses, → User |
| Q&A | question, asker, answers, business | → Business |
| Event | name, date, location, description, business (if applicable) | → Business |
| Request a Quote | service type, description, contact info, responses from businesses | → Business(es) |
| Ad | business, placement, budget, targeting, impressions, clicks | → Business |
| Reservation | party size, date, time, restaurant, confirmation | → Business |
| Waitlist Entry | party size, estimated wait, position, notifications | → Business |
| Menu | sections, items (name, price, description, photo) | → Business (restaurant) |
| Business Post (Yelp Connect) | text, photos, CTA, date | → Business |

## 5. User Flows

### Finding a Restaurant
1. Home → Search "sushi" near "San Francisco"
2. Results: list of sushi restaurants with ratings, review count, price range, distance
3. Filter: 4+ stars, $$ price range, open now, outdoor seating
4. Sort: Best Match (default), Rating, Review Count, Distance
5. Click restaurant → View reviews, photos, menu
6. Make reservation (OpenTable/Yelp) or order delivery → Done

### Writing a Review
1. Visit business → Search for it on Yelp → "Write a Review"
2. Rate 1-5 stars → Write review describing experience
3. Add photos of food/ambiance → Submit
4. Community votes: Useful / Funny / Cool → Top reviews rise
5. Business owner may respond to review publicly

### Requesting a Quote (Home Services)
1. Home → "Home Services" → Select category (e.g., "Plumber")
2. "Request a Quote" flow → Describe project, location, timeline
3. Yelp matches request to qualified local businesses
4. Businesses respond with quotes, availability, pricing
5. User compares quotes → Contacts chosen business → Hires

### Check-In and Engagement
1. At a business → Open Yelp → "Check In"
2. Check-in appears on profile activity → Friends see it
3. Accumulate check-ins → Unlock badges / contribute to Elite eligibility
4. Leave tips for other visitors ("Try the spicy tuna roll")

## 6. URL / Route Structure

```
yelp.com/                                   # Homepage
yelp.com/search?find_desc={query}&find_loc={location}  # Search results
yelp.com/biz/{business-slug}                # Business page
yelp.com/biz/{business-slug}?sort_by=date_desc  # Business reviews sorted
yelp.com/biz_photos/{business-slug}         # Business photos
yelp.com/menu/{business-slug}               # Restaurant menu
yelp.com/writeareview/biz/{business-slug}   # Write a review
yelp.com/user_details?userid={userId}       # User profile
yelp.com/collection/{userId}/{collectionSlug}  # Collection
yelp.com/reservations/{business-slug}       # Reservation page
yelp.com/nearby?find_desc={category}        # Category browse
yelp.com/request_a_quote                    # Request a quote flow
biz.yelp.com/                               # Business owner dashboard
developers.yelp.com/                        # API / Yelp Fusion
```

## 7. Search & Filter

- **Dual Search**: "Find" (business name, category, service) + "Near" (location)
- **Category Filters**: Restaurants, Home Services, Auto, Shopping, Nightlife, Beauty, Health, Active Life
- **Restaurant Filters**: Cuisine, price range, open now, reservations, delivery, outdoor seating, good for groups, good for kids, hot and new
- **Service Filters**: License verified, response time, years in business, free estimates
- **Rating Filter**: 1-5 stars (show only 4+, etc.)
- **Distance Filter**: Driving, biking, walking radius; or map boundary
- **Sort**: Best Match (Yelp's algorithm), Rating, Review Count, Distance
- **Map Search**: Interactive map; move/zoom to search visible area
- **Review Search**: Search within a business's reviews by keyword
- **Review Highlights**: AI-generated summary of common themes in reviews

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile App (primary) | Bottom tab bar; location-aware home; full-screen business page; camera for photo upload; nearby discovery |
| Mobile Web | Responsive; search-first; prompts app download for reservations and check-in |
| Tablet | Expanded search results; side-by-side map + list; wider business page |
| Desktop (primary for research) | Two-column search results (list + map); business page with photo gallery, reviews, sidebar (hours, map, actions) |
| SEO Pages | Server-rendered business and category pages heavily optimized for local SEO |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Anonymous Visitor | Search, browse businesses, read reviews (limited), view photos; prompted to sign up for full access |
| Registered User | Write reviews, upload photos, check in, bookmark, create collections, message businesses, request quotes |
| Elite User | Annual designation; access to Elite events, "Elite" badge on reviews, higher review visibility |
| Business Owner (claimed) | Respond to reviews, update business info/photos/hours, view analytics, post updates (Yelp Connect) |
| Business Advertiser | All owner features + run Yelp Ads, set budget/targeting, track ROI |
| Yelp Reservations/Waitlist Business | Manage reservations and waitlist through Yelp; integration with POS |
| API Developer | Access business data, reviews, photos via Yelp Fusion API (rate-limited) |
| Community Manager (Yelp) | Organize Elite events, manage community, moderate content |
| Content Moderator | Review flagged content, enforce guidelines, manage recommendation algorithm appeals |
