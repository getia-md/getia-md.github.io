---
brand: Calm
tagline: A healthier, happier you
category: Health & Wellness
website: https://calm.com
---

# Information Architecture — Calm

## 1. Overview

Calm is a wellness app focused on meditation, sleep, relaxation, and mental fitness. The IA is anchored by the "Daily Calm" — a daily 10-minute guided meditation — and a rich content library organized by goal (sleep, stress, focus, anxiety) and format (Sleep Stories narrated by celebrities, meditation courses, music, masterclasses). The interface uses nature-inspired scenes and ambient sounds to create an immediately calming experience from the moment of app launch.

## 2. Site Map

```
Calm
├── Home
│   ├── Daily Calm (10-min daily meditation)
│   ├── Continue (in-progress content)
│   ├── Recommended for You
│   ├── Streak & Mindful Minutes
│   └── Quick Start (mood-based selection)
├── Sleep
│   ├── Sleep Stories (celebrity-narrated)
│   │   ├── By Narrator (Matthew McConaughey, Idris Elba, etc.)
│   │   ├── By Theme (fantasy, nature, travel, history)
│   │   └── For Kids
│   ├── Sleep Music
│   ├── Soundscapes
│   ├── Sleep Meditations
│   └── Sleep Mixes (layered sounds)
├── Meditate
│   ├── Programs (multi-day)
│   │   ├── 7 Days of Calm (beginner)
│   │   ├── 21 Days of Calm
│   │   ├── Anxiety
│   │   ├── Self-Care
│   │   ├── Inner Peace
│   │   └── [many more]
│   ├── Single Sessions
│   │   ├── By Duration (2-30 min)
│   │   └── By Topic
│   ├── Breathing Exercises
│   ├── Body Scans
│   └── Walking Meditations
├── Music
│   ├── Focus
│   ├── Relax
│   ├── Sleep
│   ├── Classical
│   └── Exclusive Albums
├── Masterclasses
│   ├── Mindful Living
│   ├── Relationships
│   ├── Creativity
│   ├── Performance
│   └── Well-being (by expert instructors)
├── Check-In (mood tracking)
│   ├── Mood selection
│   ├── Journal prompt
│   └── Suggested content based on mood
├── Profile
│   ├── Stats (sessions, minutes, streak)
│   ├── Goals
│   ├── Badges / Milestones
│   ├── Downloads (offline)
│   └── Subscription
├── Kids (Calm Kids)
│   ├── Sleep Stories for Kids
│   ├── Meditations for Kids
│   └── Calming Music
├── Settings
│   ├── Account
│   ├── Reminders
│   ├── Scene Selection (background nature scene)
│   ├── Download Quality
│   └── Health App Integration
└── Website
    ├── Pricing
    ├── Calm Business (B2B)
    ├── Calm Health (clinical)
    ├── Blog (The Daily Calm blog)
    └── Science / Research
```

## 3. Navigation Model

- **Type**: Bottom tab bar (mobile), sidebar (web)
- **Mobile Bottom Tabs**: Home, Sleep, Meditate, Music, Profile
- **Scene Selector**: App background is a selectable nature scene (rain on leaves, ocean, mountain lake) with ambient audio
- **Quick Start**: Mood-based entry — "How are you feeling?" → tailored suggestions
- **Player**: Full-screen with progress bar, sleep timer, background scene; minimizable
- **Daily Calm**: Prominently featured at top of Home every day

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Daily Calm | title, theme, narrator (Tamara Levitt), duration (~10 min), date, audio | standalone daily |
| Sleep Story | title, narrator (celebrity/professional), duration (25-45 min), theme, cover art, audio | → Sleep, → Narrator |
| Meditation | title, instructor, duration, topic, level, audio, program sequence | → Program, → Topic |
| Program | name, description, session count, duration, topic, progress tracking | → Meditations (ordered) |
| Masterclass | title, instructor (expert), chapters, total duration, video/audio, topic | → Topic |
| Music Track | title, artist, duration, mood/purpose, album | → Music category |
| Soundscape | name, layered sounds, visual scene, duration (loopable) | → Scene |
| Scene | name, visual (animated nature), ambient sound, unlockable | → App background |
| Mood Check-In | mood selection, timestamp, journal text, suggested content | → Profile |
| Breathing Exercise | name, pattern (e.g., 4-7-8), duration, animation | → Meditate |

## 5. User Flows

### Daily Calm Routine
1. Open app → Home shows "Daily Calm" prominently with today's theme
2. Tap play → 10-minute guided meditation with calming background
3. Session ends → Streak counter updates → "How do you feel?" check-in
4. View stats: consecutive days, total minutes, milestones

### Sleep Story Selection
1. Tap Sleep tab → Sleep Stories section
2. Browse by narrator (celebrity voices draw users) or theme
3. Select story → Set sleep timer (optional, auto-plays to end by default)
4. Lie down → Listen → Audio designed to lull you to sleep
5. Story fades to ambient sound at the end

### Mood-Based Quick Start
1. Open app → "How are you feeling?" prompt
2. Select mood (anxious, stressed, happy, tired, etc.)
3. App suggests tailored content (meditation for anxiety, sleep story for tired)
4. Tap suggestion → Player opens immediately

## 6. URL / Route Structure

```
calm.com/                                   # Marketing homepage
calm.com/sleep                              # Sleep content overview
calm.com/meditate                           # Meditation overview
calm.com/music                              # Music overview
calm.com/sleep-stories                      # Sleep Stories catalog
calm.com/masterclass                        # Masterclasses
calm.com/blog                               # The Daily Calm blog
calm.com/blog/{slug}                        # Blog article
calm.com/pricing                            # Subscription plans
calm.com/business                           # Calm Business (enterprise)
calm.com/health                             # Calm Health (clinical)
calm.com/schools                            # Calm for schools
app.calm.com/                               # Web app (logged in)
```

## 7. Search & Filter

- **Content Search**: Search by keyword across meditations, Sleep Stories, music, masterclasses
- **Mood Filter**: Quick-start mood selection narrows content suggestions
- **Duration Filter**: Filter meditations by 2, 5, 10, 15, 20, 30+ minutes
- **Topic Filter**: Anxiety, Stress, Sleep, Focus, Self-Esteem, Gratitude, Relationships
- **Narrator Filter**: Browse Sleep Stories by narrator (celebrity talent is a key differentiator)
- **For Kids Filter**: Toggle to show only kids-appropriate content
- **Personalized**: Algorithmic suggestions based on listening history, mood check-ins, and goals
- **Scene Selection**: Choose app background scene (not a search, but a personalization surface)

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile App (primary) | Bottom tab bar; full-screen player with scene animation; ambient background persists across app |
| Tablet | Expanded content grid; larger player; richer scene animations |
| Web App (app.calm.com) | Sidebar navigation; grid browse; embedded player; nature scene background |
| Apple Watch | Breathing exercises, Daily Calm, mindful reminders; no full library browse |
| Smart TV / Chromecast | Sleep Stories and music; ambient scenes; simplified browse |
| Alexa / Google Home | Voice-activated: "Play Sleep Story" / "Start Daily Calm"; no visual interface |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Free User | Limited content: select meditations, some music, 1 Sleep Story, breathing exercises |
| Premium Subscriber | Full library: all Sleep Stories, meditations, programs, masterclasses, music, offline downloads |
| Family Plan (up to 6) | Individual profiles with personal stats; shared subscription |
| Student (discounted) | Full premium at reduced price via SheerID verification |
| Calm Business User | Access via employer; admin dashboard for usage metrics; team challenges |
| Calm Health User | Clinical programs (anxiety, depression); provider-prescribed; outcomes tracking |
| Kids Profile | Age-gated content; no mood check-in; simplified interface |
| Lifetime Subscriber | One-time purchase; permanent premium access |
