---
brand: Noom
tagline: Stop dieting. Get life-long results.
category: Health & Wellness
website: https://noom.com
---

# Information Architecture — Noom

## 1. Overview

Noom is a psychology-based weight management and health platform that combines food logging, daily educational articles, coaching, and behavioral change techniques to build sustainable habits. The IA is structured around a daily curriculum — articles, quizzes, food/weight logging — delivered in a conversational, chat-like interface. Unlike calorie-counting apps, Noom emphasizes the psychological "why" behind eating behaviors through its traffic-light food classification system and cognitive behavioral therapy (CBT) principles.

## 2. Site Map

```
Noom
├── Home (Today's Dashboard)
│   ├── Daily Lessons (articles + quizzes)
│   ├── Weight Log
│   ├── Calorie Budget (remaining)
│   ├── Step Count
│   ├── Water Intake
│   └── Streak / Progress
├── Food Logging
│   ├── Meals (Breakfast, Lunch, Dinner, Snacks)
│   ├── Food Database (search)
│   ├── Barcode Scanner
│   ├── Recipe Logger
│   ├── Traffic Light System
│   │   ├── Green (low calorie-density)
│   │   ├── Yellow (moderate)
│   │   └── Orange/Red (high calorie-density)
│   └── Calorie Budget breakdown
├── Lessons (Curriculum)
│   ├── Daily Articles (conversational format)
│   ├── Quizzes
│   ├── Thought Exercises
│   ├── Goal Setting
│   ├── Progress Milestones
│   └── Themed Modules
│       ├── Psychology of Eating
│       ├── Portion Control
│       ├── Emotional Eating
│       ├── Stress Management
│       └── Exercise Habits
├── Weight Tracking
│   ├── Daily Weigh-In
│   ├── Weight Graph (trend line)
│   ├── Goal Weight
│   └── Projected Timeline
├── Coach
│   ├── 1:1 Chat with Coach
│   ├── Goal Review
│   └── Accountability Check-ins
├── Group (Support Group)
│   ├── Group Chat
│   ├── Group Coach
│   ├── Shared Challenges
│   └── Member Introductions
├── Exercise Tracking
│   ├── Log Exercise
│   ├── Step Counter (integrated)
│   ├── Exercise Database
│   └── Calorie Adjustment
├── Recipes (Noom-friendly)
│   ├── By Meal Type
│   ├── By Calorie Range
│   ├── By Dietary Restriction
│   └── Favorited Recipes
├── Profile
│   ├── Progress Photos
│   ├── Stats Summary
│   ├── Goals
│   └── Settings
├── Settings
│   ├── Account
│   ├── Subscription
│   ├── Calorie Budget Preferences
│   ├── Integrations (Apple Health, Fitbit, etc.)
│   ├── Notifications
│   └── Privacy
└── Website
    ├── Quiz / Onboarding
    ├── Pricing
    ├── Success Stories
    ├── Blog
    └── Science / Research
```

## 3. Navigation Model

- **Type**: Bottom tab bar (mobile-first)
- **Bottom Tabs**: Home, Logging, Lessons, Coach/Group, Profile
- **Home Dashboard**: Scrollable daily cards — weight, food, water, steps, lesson
- **Lesson Flow**: Chat-like conversational interface — tap to advance through article → quiz → summary
- **Food Logging**: Tab within logging → Meal selector → Search/scan → Add food → See traffic light color
- **Coach Chat**: Persistent chat thread; responds within business hours (async)

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Lesson (Article) | title, body (conversational), quiz questions, topic module, day number, reading time | → Curriculum Module |
| Food Entry | food item, serving size, calories, traffic light color (green/yellow/orange), meal | → Daily Log |
| Weight Entry | weight, date, trend line position | → Weight History |
| Exercise Entry | activity type, duration, calories burned | → Daily Log |
| Recipe | title, ingredients, instructions, calories per serving, traffic light breakdown, dietary tags | → Recipes Collection |
| Coach Message | text, sender (user/coach), timestamp, attachments | → Coach Thread |
| Group Post | text, author, timestamp, reactions | → Support Group |
| Quiz | question, options, correct answer, explanation | → Lesson |
| Goal | type (weight, behavior), target, deadline, progress | → Profile |
| Progress Photo | image, date, weight at time | → Profile |

## 5. User Flows

### Daily Routine
1. Morning: Open app → Log weight → View calorie budget for the day
2. Log breakfast → Each food shows traffic light color → Budget adjusts
3. Read daily lesson (5-10 min) → Complete quiz → Reflect
4. Throughout day: Log meals and water → Step count auto-tracked
5. Evening: Check remaining budget → Log dinner → Review daily summary

### Onboarding Quiz
1. Visit noom.com → Start quiz → Answer questions about goals, habits, lifestyle
2. Quiz covers: current weight, goal weight, eating habits, exercise frequency, motivation
3. Personalized plan generated: calorie budget, daily lessons pace, coaching level
4. Select subscription plan → Create account → Begin Day 1 curriculum

### Coach Interaction
1. Navigate to Coach tab → Type message about a struggle or question
2. Coach responds (async, typically same day) with personalized guidance
3. Coach reviews food logs, weight trends, lesson progress
4. Weekly check-in: Coach asks about goals, adjusts plan if needed

## 6. URL / Route Structure

```
noom.com/                                   # Marketing homepage
noom.com/quiz                               # Onboarding quiz
noom.com/plans                              # Pricing / subscription plans
noom.com/blog                               # Blog
noom.com/blog/{slug}                        # Blog article
noom.com/recipes                            # Noom recipes
noom.com/success-stories                    # Testimonials
noom.com/science                            # Research / science page
app.noom.com/                               # Web app (logged in)
```

## 7. Search & Filter

- **Food Search**: Extensive food database with keyword search; barcode scanner for packaged foods
- **Food Filter**: By traffic light color (green/yellow/orange), by meal type
- **Recipe Search**: By keyword, meal type, calorie range, dietary restriction (vegetarian, gluten-free)
- **Lesson Browse**: Sequential curriculum (not browseable out of order by design — learning is paced)
- **Exercise Search**: Activity type database (running, cycling, yoga, etc.) with calorie estimates
- **No Social Discovery**: Noom is a personal health tool; no browsing other users' content

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile App (primary) | Bottom tab bar; chat-like lesson interface; food logging with barcode camera; full-screen weight graph |
| Tablet | Larger lesson cards; expanded food log view; side-by-side dashboard |
| Web App | Dashboard layout; food logging via search (no barcode); lesson reading on wider screen |
| Apple Watch | Step counting, exercise logging; no food logging or lessons |
| Integrations | Syncs with Apple Health, Google Fit, Fitbit, Garmin for activity/weight data |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Trial User | Full access for trial period (typically 7-14 days); all features available |
| Paid Subscriber | Full access: lessons, food logging, coaching, group support, recipes |
| Free (expired) | Limited: weight logging, basic food logging; no lessons or coaching |
| Coach | View assigned users' logs, weight trends, lesson progress; send messages; set goals |
| Group Coach | Facilitate group discussions, post prompts, moderate group chat |
| Group Member | Participate in group chat, share wins, support peers |
| Family (Noom for families) | Shared household plan; individual profiles and progress |
