---
brand: Headspace
tagline: Be kind to your mind
category: Health & Wellness
website: https://headspace.com
---

# Information Architecture — Headspace

## 1. Overview

Headspace is a mindfulness and mental health platform offering guided meditations, sleep content, focus music, and mindfulness courses. The IA is organized around daily habits — Today's meditation, sleep wind-down, focus sessions — with a content library structured by topic (stress, anxiety, sleep, self-esteem) and format (meditation, course, exercise). The design is warm, illustration-heavy, and intentionally calming, reducing cognitive load to match the product's purpose.

## 2. Site Map

```
Headspace
├── Home (Today)
│   ├── Daily Meditation
│   ├── Daily Move (exercise)
│   ├── Streak counter
│   ├── Suggested for You
│   └── Continue Learning (in-progress courses)
├── Meditate
│   ├── Featured
│   ├── Courses (multi-session)
│   │   ├── Basics (beginner)
│   │   ├── Managing Anxiety
│   │   ├── Self-Esteem
│   │   ├── Stress
│   │   ├── Focus
│   │   └── [30+ courses]
│   ├── Singles (one-off meditations)
│   │   ├── By Duration (3, 5, 10, 15, 20 min)
│   │   └── By Topic
│   └── Guided Exercises
│       ├── Breathing
│       ├── Body Scan
│       ├── Visualization
│       └── Walking Meditation
├── Sleep
│   ├── Sleepcasts (narrated stories)
│   ├── Sleep Music
│   ├── Soundscapes
│   ├── Wind Down (pre-sleep meditations)
│   └── Sleep Radio (continuous play)
├── Move
│   ├── Workout Videos
│   ├── Yoga
│   ├── Cardio
│   ├── Strength
│   └── Mindful Movement
├── Focus
│   ├── Focus Music
│   ├── Focus Modes (timed sessions)
│   └── Concentration exercises
├── Profile
│   ├── Stats (minutes, sessions, streak)
│   ├── Achievements / Milestones
│   ├── Buddy list
│   ├── Journey (completed courses)
│   └── Settings
├── Kids
│   ├── Age-appropriate meditations
│   ├── Sleep content for kids
│   └── Focus for kids
├── Settings
│   ├── Account
│   ├── Subscription
│   ├── Reminders
│   ├── Download (offline)
│   ├── Mindful Moments (notifications)
│   └── Bedtime Reminder
└── Website
    ├── Plans / Pricing
    ├── Headspace for Work (B2B)
    ├── Headspace Health (clinical)
    ├── Blog / Articles
    ├── Research
    └── Teachers / Students Program
```

## 3. Navigation Model

- **Type**: Bottom tab bar (mobile), sidebar (web)
- **Mobile Bottom Tabs**: Today, Meditate, Sleep, Move, Focus
- **Top Actions**: Profile (avatar), Search, Notifications
- **Content Drill-Down**: Tab → Category → Course/Single → Session player
- **Player**: Full-screen immersive player with progress, pause, skip; minimizable to floating player
- **Daily Entry Point**: Push notification → opens Today tab with daily recommendation

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Meditation | title, narrator, duration, topic, level (beginner/intermediate/advanced), audio, description | → Course, → Topic |
| Course | title, description, session count, total duration, topic, progress tracking, level | → Meditations (ordered sessions) |
| Sleepcast | title, narrator, duration, theme, ambient sounds | → Sleep category |
| Focus Music | title, genre/mood, duration, loopable flag | → Focus category |
| Workout | title, instructor, duration, type (yoga/cardio/strength), video, difficulty | → Move category |
| Soundscape | title, ambient audio, duration, visual animation | → Sleep / Focus |
| Article | title, body, topic, author, published date | → Blog |
| User Stats | total minutes, session count, current streak, longest streak, milestones | → Profile |

## 5. User Flows

### Daily Meditation Routine
1. Open app → Today tab shows daily meditation suggestion
2. Tap "Play" → Full-screen player with calming animation
3. Follow guided meditation (3-20 minutes) → Session ends with a bell
4. Streak counter increments → Stats updated
5. Suggestion for next session or course continuation

### Starting a Course
1. Meditate tab → Browse courses by topic (e.g., "Managing Anxiety")
2. Tap course → See description, session count, duration per session
3. Start Session 1 → Complete → Progress bar updates
4. Return daily → Continue from where you left off
5. Complete all sessions → Course badge earned

### Sleep Wind-Down
1. Evening push notification: "Time to wind down"
2. Sleep tab → Choose Sleepcast or Wind Down meditation
3. Set sleep timer (optional) → Play → Audio fades with sleep
4. Morning: view sleep stats if connected to health app

## 6. URL / Route Structure

```
headspace.com/                              # Marketing homepage
headspace.com/meditation                    # Meditation overview
headspace.com/sleep                         # Sleep content overview
headspace.com/exercise                      # Move content overview
headspace.com/focus                         # Focus content overview
headspace.com/meditation/{slug}             # Individual meditation/course page
headspace.com/subscriptions                 # Pricing / plans
headspace.com/work                          # Headspace for Work (enterprise)
headspace.com/studentplan                   # Student discount
headspace.com/articles/{slug}               # Blog article
headspace.com/headspace-clinical            # Clinical / therapy offering
my.headspace.com/                           # Web app (logged in)
```

## 7. Search & Filter

- **Content Search**: Search meditations, courses, sleepcasts by keyword or topic
- **Filter by Duration**: 3, 5, 10, 15, 20+ minutes
- **Filter by Topic**: Stress, Anxiety, Sleep, Focus, Self-Esteem, Relationships, etc.
- **Filter by Level**: Beginner, Intermediate, Advanced
- **Browse by Narrator**: Filter by specific teacher/narrator voice
- **Personalized Recommendations**: Algorithm suggests content based on usage patterns and interests
- **Offline Access**: Downloaded content accessible without search (subscription feature)

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile App (primary) | Bottom tab bar; full-screen player with animations; swipeable content cards; push notifications |
| Tablet | Larger content cards; side-by-side layout for browse + detail; enhanced player visuals |
| Web App (my.headspace.com) | Sidebar navigation; grid browse; embedded player; no push notifications |
| Wearable (Apple Watch) | Breathing exercise, quick meditation, mindful moment; no browse/search |
| Smart TV | Sleep content and focus music; simplified browse; ambient mode |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Free User | Limited meditations (Basics course), some sleep content, daily meditation |
| Premium Subscriber | Full library: all courses, meditations, sleepcasts, focus music, workouts, offline download |
| Family Plan Member | Full access shared across up to 6 accounts |
| Student (discounted) | Full premium access at reduced price with student verification |
| Enterprise User (Headspace for Work) | Full access provisioned by employer; admin dashboard for HR |
| Kids Profile | Age-appropriate content only; parental controls |
| Buddy | See friend's streak and milestones; send encouragement; no content sharing |
