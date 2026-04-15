---
brand: Udemy
tagline: Learn on your schedule
category: Education
website: https://udemy.com
---

# Information Architecture — Udemy

## 1. Overview

Udemy is the world's largest online course marketplace, with 200,000+ instructor-created courses spanning technology, business, design, personal development, and more. The IA is marketplace-driven — courses are products with pricing, ratings, reviews, and sales promotions. Unlike curated platforms, any qualified instructor can publish a course, creating a vast and diverse catalog. The platform emphasizes discoverability through categories, search, and frequent promotional pricing.

## 2. Site Map

```
Udemy
├── Home
│   ├── Personalized Recommendations
│   ├── Top Courses
│   ├── Trending
│   ├── Sale Banner (frequent promotions)
│   ├── Learners Are Viewing
│   └── Categories Spotlight
├── Categories
│   ├── Development
│   │   ├── Web Development
│   │   ├── Mobile Development
│   │   ├── Programming Languages
│   │   ├── Game Development
│   │   ├── Database Design
│   │   └── Software Testing
│   ├── Business
│   │   ├── Entrepreneurship
│   │   ├── Communication
│   │   ├── Management
│   │   ├── Sales
│   │   └── Business Strategy
│   ├── Finance & Accounting
│   ├── IT & Software
│   ├── Office Productivity
│   ├── Personal Development
│   ├── Design
│   ├── Marketing
│   ├── Lifestyle
│   ├── Photography & Video
│   ├── Health & Fitness
│   ├── Music
│   └── Teaching & Academics
├── Course Detail Page
│   ├── Preview Video
│   ├── Course Description
│   ├── What You'll Learn (objectives)
│   ├── Requirements / Prerequisites
│   ├── Curriculum (section → lecture list)
│   ├── Instructor Profile
│   ├── Rating & Reviews
│   ├── Student Count
│   ├── Last Updated Date
│   ├── Price / Discount
│   ├── Certificate of Completion
│   ├── 30-Day Money-Back Guarantee
│   └── Related Courses
├── Course Player
│   ├── Video Player
│   ├── Curriculum Sidebar (sections + lectures)
│   ├── Notes (timestamped)
│   ├── Q&A (per lecture)
│   ├── Reviews
│   ├── Resources (downloadable)
│   ├── Announcements
│   ├── Transcript
│   └── Progress Tracker
├── My Learning
│   ├── All Courses (purchased)
│   ├── In Progress
│   ├── Wishlist
│   ├── Archived
│   ├── Learning Paths
│   └── Certificates
├── Cart / Checkout
│   ├── Cart Items
│   ├── Coupon Code
│   ├── Payment
│   └── Gift Course
├── Teach on Udemy
│   ├── Instructor Dashboard
│   ├── Course Creation
│   │   ├── Plan Curriculum
│   │   ├── Record / Upload Videos
│   │   ├── Set Pricing
│   │   ├── Landing Page Builder
│   │   └── Review & Publish
│   ├── Performance Analytics
│   ├── Revenue / Payouts
│   ├── Student Communications
│   └── Instructor Community
├── Udemy Business (B2B)
│   ├── Curated Course Collection
│   ├── Learning Paths
│   ├── Admin Dashboard
│   ├── Analytics & Reporting
│   └── SSO / Integration
├── Profile
│   ├── Purchase History
│   ├── Certificates
│   ├── Payment Methods
│   └── Notification Settings
└── Settings
    ├── Account
    ├── Privacy
    ├── Notifications
    ├── Payment Methods
    └── Language / Currency
```

## 3. Navigation Model

- **Type**: Top nav bar with category mega menu
- **Desktop Top Bar**: Categories (mega dropdown), Search bar (prominent), Teach, My Learning, Cart, Wishlist, Notifications, Profile
- **Mobile**: Hamburger menu + bottom tab bar (Featured, Search, My Learning, Wishlist, Account)
- **Category Mega Menu**: 13 top-level categories → subcategories → topics
- **Course Player**: Sidebar curriculum (desktop); top sheet curriculum (mobile); sticky progress bar
- **Breadcrumb**: Category > Subcategory > Topic on browse pages

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Course | title, subtitle, description, objectives, requirements, instructor, price, sale price, rating, review count, student count, language, last updated, level, duration, certificate | → Sections, → Instructor, → Category |
| Section | title, position, lecture count, duration | → Course, → Lectures |
| Lecture | title, video, duration, resources, preview flag, article (text-only option) | → Section |
| Quiz | title, questions, position within section | → Section |
| Assignment | title, description, student submission | → Section |
| Review | rating (1-5), text, student, date, helpful votes | → Course |
| Q&A Post | question/answer, author, lecture reference, upvotes, instructor response | → Lecture |
| Instructor | name, bio, photo, rating, student count, course count, social links | → Courses |
| Certificate | student name, course title, completion date, Udemy credential ID | → Course, → Student |
| Coupon | code, discount, expiry, instructor-created | → Course |
| Learning Path | name, description, courses (ordered), creator | → Courses |

## 5. User Flows

### Purchasing a Course
1. Search or browse → Find course → View course detail page
2. Watch preview video → Read description, objectives, reviews
3. Check price (or wait for sale — Udemy runs frequent 80-90% off promotions)
4. Add to cart → Checkout → Pay → Course added to "My Learning"
5. Begin watching immediately

### Learning a Course
1. My Learning → Select course → Course player opens
2. Watch lecture → Auto-advance to next → Progress bar updates
3. Take notes (timestamped to video) → Download resources
4. Ask question in Q&A → Instructor or community answers
5. Complete all lectures → Certificate of Completion generated

### Publishing a Course (Instructor)
1. Sign up as instructor → Access course creation tools
2. Plan curriculum: outline sections and lectures
3. Record videos → Upload → Add resources, quizzes, assignments
4. Build landing page: title, description, preview video, pricing
5. Submit for review → Udemy quality team reviews → Approved → Published to marketplace
6. Monitor analytics: enrollments, revenue, ratings, Q&A

## 6. URL / Route Structure

```
udemy.com/                                  # Homepage
udemy.com/courses/{category}/               # Category page
udemy.com/courses/{category}/{subcategory}/ # Subcategory page
udemy.com/topic/{topic}/                    # Topic page (e.g., python)
udemy.com/course/{slug}/                    # Course detail / landing page
udemy.com/course/{slug}/learn/              # Course player (enrolled)
udemy.com/course/{slug}/learn/lecture/{id}  # Specific lecture
udemy.com/user/{username}/                  # Instructor profile
udemy.com/my-courses/learning/              # My Learning
udemy.com/cart/                             # Shopping cart
udemy.com/teaching/                         # Instructor dashboard
udemy.com/teaching/courses/                 # Instructor's courses
udemy.com/certificate/{credentialId}/       # Certificate verification
business.udemy.com/                         # Udemy Business
```

## 7. Search & Filter

- **Search Bar**: Autocomplete with courses, instructors, and topics; keyword search across titles, descriptions
- **Category Browse**: 13 categories → subcategories → topics with course count
- **Filters**: Rating (4.5+, 4.0+, 3.5+), Duration (0-1h, 1-3h, 3-6h, 6-17h, 17+h), Level (Beginner, Intermediate, Advanced, All), Language, Price (Free, Paid), Features (Subtitles, Quizzes, Practice Tests)
- **Sort**: Most Popular, Highest Rated, Newest
- **Topic Pages**: Aggregated pages for popular skills (e.g., "Python", "Excel")
- **Instructor Search**: Find all courses by a specific instructor
- **Smart Recommendations**: Based on purchase history, browsing, and similar learners

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile App | Bottom tab bar; vertical course cards; full-screen video player; offline downloads; picture-in-picture |
| Tablet | Grid course cards; course player with collapsible sidebar; landscape video |
| Desktop (primary) | Top nav with mega menu; course grid with hover preview; player with persistent sidebar curriculum |
| TV (Udemy app) | Lean-back viewing; simplified browse; large video player; no note-taking |
| Offline (mobile) | Download lectures for offline viewing; progress syncs when back online |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Anonymous Visitor | Browse catalog, view course pages, read reviews, search; cannot enroll |
| Free User | Enroll in free courses, purchase paid courses, take notes, Q&A, earn certificates |
| Paid Course Owner | Lifetime access to purchased course, including future updates; 30-day refund window |
| Udemy Business User | Access curated course collection via employer; learning paths; admin reporting |
| Instructor | Create and publish courses, set pricing, view analytics, earn revenue (37-97% split depending on channel), respond to Q&A and reviews |
| Premium Instructor | Higher visibility, promotional tools, instructor community access |
| Udemy Staff | Content quality review, feature courses, manage marketplace, moderate reviews |
| Admin (Udemy Business) | Manage licenses, assign learning paths, view team analytics, SSO configuration |
