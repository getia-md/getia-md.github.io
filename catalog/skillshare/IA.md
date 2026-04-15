---
brand: Skillshare
tagline: Explore your creativity
category: Education
website: https://skillshare.com
---

# Information Architecture — Skillshare

## 1. Overview

Skillshare is a creative learning platform offering short, project-based video classes taught by industry professionals. The IA is organized around class categories (illustration, design, photography, writing, business) with a strong emphasis on hands-on projects that students share in a class community. Unlike academic MOOCs, Skillshare focuses on practical creative skills, with classes typically 20-60 minutes broken into digestible lessons.

## 2. Site Map

```
Skillshare
├── Home
│   ├── Continue Watching
│   ├── Recommended for You
│   ├── Trending Classes
│   ├── New Classes
│   ├── Staff Picks
│   └── Seasonal Collections
├── Browse
│   ├── Creative Arts
│   │   ├── Illustration
│   │   ├── Drawing
│   │   ├── Painting
│   │   ├── Calligraphy & Lettering
│   │   └── Crafts
│   ├── Design
│   │   ├── Graphic Design
│   │   ├── UI/UX Design
│   │   ├── Web Design
│   │   ├── Logo Design
│   │   └── Motion Graphics
│   ├── Photography & Film
│   │   ├── Photography
│   │   ├── Film & Video
│   │   └── Mobile Photography
│   ├── Writing
│   │   ├── Creative Writing
│   │   ├── Copywriting
│   │   └── Journaling
│   ├── Business & Marketing
│   │   ├── Freelancing
│   │   ├── Social Media Marketing
│   │   ├── Entrepreneurship
│   │   └── Productivity
│   ├── Technology
│   │   ├── Data Science
│   │   ├── Web Development
│   │   └── App Development
│   └── Lifestyle
│       ├── Cooking
│       ├── Music
│       └── Wellness
├── Class Detail
│   ├── Intro Video (preview)
│   ├── Lessons (video list with durations)
│   ├── Class Project (assignment)
│   ├── Resources (downloadable)
│   ├── Reviews & Ratings
│   ├── Student Projects Gallery
│   ├── Discussion
│   ├── Teacher Profile
│   └── Related Classes
├── Workshops (live sessions)
│   ├── Upcoming
│   ├── Recorded
│   └── Interactive Q&A
├── My Classes
│   ├── In Progress
│   ├── Completed
│   ├── Saved / Wishlist
│   └── My Projects
├── Search
│   ├── Classes
│   ├── Teachers
│   └── Topics / Skills
├── Profile
│   ├── Projects Shared
│   ├── Classes Taken
│   ├── Following / Followers
│   ├── Skills
│   └── Portfolio
├── Teach on Skillshare
│   ├── Teacher Dashboard
│   ├── Class Creation Studio
│   ├── Analytics
│   ├── Earnings
│   └── Teaching Resources
└── Settings
    ├── Account
    ├── Subscription
    ├── Notifications
    ├── Payment / Billing
    └── Privacy
```

## 3. Navigation Model

- **Type**: Top nav bar (desktop), bottom tab bar (mobile)
- **Desktop Top Bar**: Logo (home), Browse (mega dropdown), Workshops | Search, My Classes, Teach, Profile
- **Mobile Bottom Tabs**: Home, Search, My Classes, Profile
- **Browse Mega Menu**: Categories with subcategories; popular topics highlighted
- **Class Viewing**: Sequential lesson playlist (sidebar on desktop, stacked on mobile)
- **Project Gallery**: Within each class; students upload project work for community feedback

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Class | title, teacher, description, category, subcategory, level (beginner/intermediate/advanced), lesson count, total duration, preview video, rating, student count, tags | → Lessons, → Project, → Teacher |
| Lesson | title, video, duration, position in class, notes | → Class |
| Class Project | description, guidelines, student submissions | → Class |
| Student Project | images/files, description, student, feedback/comments | → Class Project, → Student |
| Workshop | title, teacher, date/time, topic, interactive flag, recording | → Teacher |
| Teacher Profile | name, bio, avatar, expertise, class count, student count, social links | → Classes |
| Review | rating (1-5), text, student, date | → Class |
| Resource | file (PDF, template, brush set), title | → Class |
| Collection | name, description, classes list, curator | → Classes |
| List (user) | name, saved classes | → Classes |

## 5. User Flows

### Taking a Class
1. Browse or search → Select class → Watch preview video
2. Enroll → Class added to "My Classes" → Start Lesson 1
3. Watch video lessons sequentially → Download resources
4. Complete class project → Upload work to student project gallery
5. Receive feedback from classmates and teacher → Iterate

### Discovering Classes
1. Home → Browse trending or recommended classes
2. Filter by category (e.g., Illustration) → Subcategory (e.g., Digital Illustration)
3. Sort by popular, newest, trending
4. Read reviews, check student count, preview intro video
5. Save to list or start immediately

### Teaching a Class
1. Apply as teacher → Access Class Creation Studio
2. Plan lessons → Record and upload videos → Add resources
3. Write class project description and guidelines
4. Publish → Class appears in catalog → Earn revenue based on watch minutes
5. Monitor analytics: enrollments, watch time, completion rate, earnings

## 6. URL / Route Structure

```
skillshare.com/                             # Homepage
skillshare.com/browse                       # Browse all categories
skillshare.com/browse/{category}            # Category page
skillshare.com/browse/{category}/{subcategory}  # Subcategory page
skillshare.com/classes/{slug}/{classId}     # Class detail
skillshare.com/workshops                    # Live workshops
skillshare.com/search?query={query}         # Search results
skillshare.com/profile/{username}           # User profile
skillshare.com/teach                        # Teach on Skillshare
skillshare.com/membership                   # Subscription plans
skillshare.com/lists/{listId}               # Curated list
skillshare.com/teams                        # Skillshare for Teams
```

## 7. Search & Filter

- **Class Search**: Keyword search across titles, descriptions, tags, teachers
- **Category Filter**: Creative Arts, Design, Photography, Writing, Business, Technology, Lifestyle
- **Level Filter**: Beginner, Intermediate, Advanced, All Levels
- **Duration Filter**: Short (< 30 min), Medium (30-60 min), Long (> 60 min)
- **Sort**: Popular, Trending, Newest, Top Rated
- **Teacher Search**: Find classes by specific teachers
- **Topic Tags**: Clickable tags on class pages for related content
- **Staff Picks**: Curated collections highlighted on home and browse pages

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile App | Bottom tab bar; vertical class cards; full-screen video player; simplified project upload |
| Tablet | Larger class grid; side-by-side video + lesson list; enhanced project gallery |
| Desktop (primary) | Top nav with mega dropdown; class detail with video + lesson sidebar; project gallery grid |
| TV Apps | Lean-back class viewing; simplified browse; no project upload |
| Offline (mobile) | Download classes for offline viewing (Premium feature) |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Free User | Limited access: select free classes, browse catalog, save classes |
| Premium Member | Unlimited access to all classes, offline downloads, workshops, no ads |
| Teams Member | Premium features + admin dashboard, team learning paths, usage reporting |
| Teacher | Create and publish classes, view analytics, earn revenue from watch minutes, interact with students |
| Top Teacher | Featured placement, "Top Teacher" badge, higher visibility, exclusive teacher programs |
| Staff / Curator | Feature classes, create staff pick collections, moderate content |
| Student (project submitter) | Upload projects, receive/give feedback in class communities |
