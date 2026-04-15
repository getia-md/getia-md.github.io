---
brand: Peloton
tagline: Motivation that moves you
category: Health & Fitness
website: https://onepeloton.com
---

# Information Architecture — Peloton

## 1. Overview

Peloton is a connected fitness platform combining hardware (bikes, treads, rowers, Guide) with a vast library of live and on-demand classes. The IA centers on class discovery and workout tracking, with a real-time leaderboard creating competitive motivation. The experience spans hardware screens, mobile app, and web — all unified by a profile that tracks lifetime metrics, achievements, and social connections.

## 2. Site Map

```
Peloton
├── Home
│   ├── Continue (in-progress programs)
│   ├── Upcoming Live Classes
│   ├── Recommended for You
│   ├── Featured Collections
│   ├── Challenges
│   └── Streak & Weekly Goal
├── Classes
│   ├── Cycling
│   ├── Running / Walking
│   ├── Strength
│   ├── Yoga
│   ├── Meditation
│   ├── Stretching
│   ├── Cardio
│   ├── Boxing / Shadowboxing
│   ├── Rowing
│   ├── Outdoor (audio)
│   ├── Pilates
│   └── Barre
├── Class Detail
│   ├── Instructor
│   ├── Duration / Difficulty
│   ├── Music Playlist
│   ├── Class Plan / Targets
│   ├── Ratings
│   ├── Taken by (friend activity)
│   └── Schedule (live) or Play (on-demand)
├── In-Class
│   ├── Video Stream (instructor)
│   ├── Metrics Panel (output, cadence, resistance, heart rate)
│   ├── Leaderboard (real-time ranking)
│   ├── High Five (tap to encourage)
│   ├── Milestones (badge popups)
│   └── Music / Closed Captions
├── Schedule
│   ├── Live Class Calendar
│   ├── Encore (replayed live classes)
│   └── My Schedule (booked classes)
├── Programs
│   ├── Multi-week structured programs
│   │   ├── Beginner (Mastering the Basics)
│   │   ├── Power Zone Training
│   │   ├── Strength Programs
│   │   └── Yoga Programs
│   └── Progress tracking
├── Challenges
│   ├── Monthly Challenges
│   ├── Annual Challenge
│   └── Community Challenges
├── Profile
│   ├── Workout History
│   ├── Personal Records (PRs)
│   ├── Achievements / Badges
│   ├── Stats (total rides, minutes, output)
│   ├── Followers / Following
│   ├── Tags (community groups)
│   └── Heart Rate Zones
├── Social
│   ├── Feed (friends' workouts)
│   ├── High Fives
│   ├── Tags (interest groups)
│   └── Session (ride together)
├── Settings
│   ├── Account
│   ├── Subscription
│   ├── Device Pairing (HRM, weights)
│   ├── Privacy
│   └── Notifications
└── Website (onepeloton.com)
    ├── Shop (hardware, accessories, apparel)
    ├── Membership Plans
    ├── Financing
    ├── Instructors
    ├── Blog / Community
    └── Corporate Wellness
```

## 3. Navigation Model

- **Type**: Bottom tab bar (mobile), sidebar (bike/tread screen)
- **Bike/Tread Screen**: Bottom tab — Home, Classes, Schedule, Profile; top bar with search and settings
- **Mobile App Bottom Tabs**: Home, Classes, Challenges, Profile
- **Class Discovery**: Browse by category → Filter by duration, instructor, difficulty, music genre
- **In-Class**: Full-screen with overlay metrics; swipe for leaderboard/music; tap for high five
- **Live Schedule**: Calendar view with time-based class grid; tap to book/join
- **Stack**: Queue multiple classes to play back-to-back

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Class | title, instructor, category, duration, difficulty, music playlist, live/on-demand, language, equipment, ratings, total rides | → Instructor, → Category, → Program |
| Workout (completed) | class reference, date, duration, output (kJ), avg cadence, avg resistance, heart rate data, personal record flag, leaderboard rank | → User, → Class |
| Program | name, description, weeks, classes per week, difficulty, progress | → Classes (ordered) |
| Instructor | name, bio, photo, specialties, class count, quote | → Classes |
| Challenge | name, description, goal (minutes/classes), duration, participants, progress | → Workouts |
| Achievement / Badge | name, icon, criteria, date earned | → Profile |
| Personal Record (PR) | metric (output, distance, speed), value, class, date | → Workout |
| Tag | name (community group), member count | → Users |
| Collection | name, description, curated classes | → Classes |

## 5. User Flows

### Taking an On-Demand Class
1. Browse Classes → Filter by type (Cycling), duration (30 min), instructor
2. Tap class → View playlist, difficulty, ratings, friends who took it
3. Clip in / Start → Full-screen instructor video + real-time metrics
4. During class: monitor output vs. leaderboard; receive high fives; hit targets
5. Post-class: view workout summary, PR badges, share to feed

### Joining a Live Class
1. Schedule tab → Browse upcoming live classes by time
2. Tap class → "Book" → Added to My Schedule with reminder
3. At class time: Join → Live leaderboard with thousands of riders
4. Instructor shouts out milestones (100th ride, birthday) → Community energy
5. Post-class: replay available as on-demand within hours

### Stacking Classes
1. Browse Classes → Tap "Add to Stack" on multiple classes
2. View Stack queue → Reorder if needed
3. Start Stack → Classes play consecutively with brief transition
4. Total metrics tracked across the entire stack

## 6. URL / Route Structure

```
onepeloton.com/                             # Marketing homepage
onepeloton.com/classes                      # Class library (web)
onepeloton.com/classes/{classId}            # Class detail
onepeloton.com/schedule                     # Live schedule
onepeloton.com/programs                     # Programs
onepeloton.com/instructors                  # Instructor directory
onepeloton.com/instructors/{slug}           # Instructor profile
onepeloton.com/shop                         # Hardware & accessories
onepeloton.com/membership                   # Membership plans
members.onepeloton.com/                     # Member web app
members.onepeloton.com/profile/{username}   # Member profile
members.onepeloton.com/classes              # Class browse (logged in)
api.onepeloton.com/                         # API
```

## 7. Search & Filter

- **Class Search**: Keyword search across titles, instructors, playlists
- **Category Filter**: Cycling, Strength, Yoga, Running, Meditation, etc.
- **Duration Filter**: 5, 10, 15, 20, 30, 45, 60, 75, 90 minutes
- **Difficulty Filter**: Beginner, Intermediate, Advanced (based on community ratings)
- **Instructor Filter**: Select one or multiple instructors
- **Music Genre Filter**: Pop, Rock, Hip Hop, EDM, Country, Latin, etc.
- **Sort**: Popular, Top Rated, Newest, Trending
- **Bookmark/Stack**: Save classes for later or queue for back-to-back
- **Friends Filter**: "Taken by friends" to see what your network is doing

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Bike/Tread Screen (21.5"/23.8") | Full-screen instructor video; persistent metrics bar; swipeable leaderboard; touch controls |
| Mobile App | Bottom tab bar; portrait class browse; landscape in-class view; compact metrics |
| Tablet | Enhanced browse grid; landscape in-class with split metrics panel |
| Web (members.onepeloton.com) | Sidebar navigation; class grid with filters; video player for app-free users |
| Apple Watch | Workout metrics (heart rate, calories); class controls; stand-alone outdoor workouts |
| TV Apps (Fire TV, Roku, Apple TV, Android TV) | Lean-back class browse; full-screen video; remote control navigation |

## 9. Access Control

| Role | Capabilities |
|---|---|
| App Membership (no hardware) | Full class library on phone/tablet/TV/web; no live metrics or leaderboard |
| All-Access Membership (with hardware) | Full class library + live metrics, leaderboard, stacking, programs, challenges |
| Free Tier | Limited class selection (3 classes/month); no leaderboard |
| Family Member (additional profile) | Separate profile on same hardware; personal stats, schedule, preferences |
| Guest Mode | Try a class on someone's bike; no profile or tracking |
| Instructor | Teach live/recorded classes; interact with leaderboard; milestone shoutouts |
| Corporate Wellness Member | Access via employer program; usage reported to employer (aggregated) |
