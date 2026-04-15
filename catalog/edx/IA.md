---
brand: edX
tagline: Learn from the best. Anywhere. Anytime.
category: Education
website: https://edx.org
---

# Information Architecture — edX

## 1. Overview

edX is a university-level online learning platform offering MOOCs (Massive Open Online Courses), MicroMasters, Professional Certificates, and full online degrees from top universities (MIT, Harvard, Berkeley) and organizations. The IA is structured around academic rigor — courses follow semester-like schedules with deadlines, graded assignments, and verified certificates. Now owned by 2U, edX blends free audit access with paid verified tracks and degree programs.

## 2. Site Map

```
edX
├── Home
│   ├── Featured Courses
│   ├── Trending Subjects
│   ├── Partner Universities Spotlight
│   ├── Programs (MicroMasters, Certificates)
│   └── Personalized Recommendations
├── Course Catalog
│   ├── By Subject
│   │   ├── Computer Science
│   │   ├── Data Science
│   │   ├── Business & Management
│   │   ├── Engineering
│   │   ├── Humanities
│   │   ├── Science
│   │   ├── Social Sciences
│   │   ├── Health & Medicine
│   │   ├── Math
│   │   ├── Language
│   │   ├── Art & Culture
│   │   └── Architecture
│   ├── By Institution
│   │   ├── Harvard
│   │   ├── MIT
│   │   ├── Berkeley
│   │   ├── Stanford
│   │   └── [160+ partners]
│   ├── By Program Type
│   │   ├── Courses (individual)
│   │   ├── MicroMasters
│   │   ├── Professional Certificate
│   │   ├── MicroBachelors
│   │   ├── XSeries
│   │   ├── Executive Education
│   │   └── Online Degrees
│   └── Boot Camps
│       ├── Coding
│       ├── Data Analytics
│       ├── Cybersecurity
│       └── UX/UI Design
├── Course Detail
│   ├── About (description, syllabus)
│   ├── Institution & Instructors
│   ├── Schedule (start date, duration, hours/week)
│   ├── Prerequisites
│   ├── What You'll Learn
│   ├── Enrollment Options
│   │   ├── Audit (free, no certificate)
│   │   └── Verified (paid, certificate)
│   ├── Learner Reviews
│   └── Related Courses / Programs
├── Course Player (enrolled)
│   ├── Course Outline (weeks/modules)
│   ├── Video Lectures
│   ├── Readings
│   ├── Discussion Forums
│   ├── Graded Assignments
│   ├── Quizzes / Exams
│   ├── Lab Environments (coding)
│   ├── Progress Tracker
│   └── Grades
├── Programs
│   ├── MicroMasters (4-7 courses → university credit pathway)
│   ├── Professional Certificate (3-5 courses)
│   ├── XSeries (course sequence)
│   └── Online Degrees (full degree programs)
├── Dashboard (My Learning)
│   ├── Current Courses
│   ├── Completed Courses
│   ├── Programs in Progress
│   ├── Certificates
│   └── Upcoming Deadlines
├── Profile
│   ├── Account Settings
│   ├── Certificates Earned
│   ├── Order History
│   └── Linked Social Accounts
├── For Enterprise
│   ├── edX for Business
│   ├── Custom Learning Paths
│   ├── Admin Dashboard
│   └── Reporting
└── About edX
    ├── Mission
    ├── Partners
    ├── Research
    ├── Careers
    └── Blog
```

## 3. Navigation Model

- **Type**: Top nav bar with search-centric design
- **Desktop Top Bar**: edX logo, Search bar (prominent), Courses (dropdown), Programs, edX for Business | Dashboard, Profile, Cart
- **Mobile**: Hamburger menu + bottom tab bar (Discover, My Courses, Profile)
- **Course Browse**: Subject cards → Course listing with filters → Course detail
- **Course Player**: Left sidebar with week/module outline; sequential lesson flow; progress checkmarks
- **Breadcrumb**: Institution > Subject > Course for orientation
- **Program Navigation**: Program overview → Individual courses within program

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Course | title, institution, instructor(s), subject, description, syllabus, start date, duration, effort (hours/week), level, language, price (verified track), enrollment count | → Institution, → Program, → Modules |
| Module/Week | title, position, components (videos, readings, assignments) | → Course |
| Video Lecture | title, duration, transcript, subtitles, downloadable | → Module |
| Reading | title, text (rich content), external links | → Module |
| Assignment | title, type (graded/practice), questions, submission format, deadline, weight | → Module |
| Discussion Thread | title, body, author, replies, votes, pinned flag | → Course, → Module |
| Program | name, type (MicroMasters/Certificate/Degree), institution, courses (ordered), total duration, price | → Courses |
| Certificate | type (verified/professional/MicroMasters), student, course/program, issue date, credential URL | → Course/Program |
| Institution | name, logo, description, course count, location | → Courses, → Programs |
| Instructor | name, title, bio, photo, institution affiliation | → Courses |

## 5. User Flows

### Enrolling in a Course
1. Browse catalog or search → Select course → View course detail
2. Review syllabus, schedule, prerequisites, instructor bios
3. Choose enrollment track:
   - **Audit** (free): Access all content, no certificate, no graded assignments
   - **Verified** ($50-300): Full access + verified certificate + graded assignments
4. Enroll → Course appears on Dashboard → Access opens on start date (or immediately if self-paced)

### Completing a MicroMasters
1. Browse Programs → Select MicroMasters (e.g., "Supply Chain Management" by MIT)
2. Enroll in first course of sequence → Complete with verified certificate
3. Progress through 4-7 courses in program order
4. Complete all courses → Earn MicroMasters credential
5. Apply credential toward accelerated Master's degree at partner university

### Learning in a Course
1. Dashboard → Select course → Course player opens
2. Follow weekly structure: Watch lectures → Complete readings → Do practice exercises
3. Submit graded assignments before deadlines → View grades
4. Participate in discussion forums → Peer learning
5. Take final exam → Pass → Certificate issued (if verified track)

## 6. URL / Route Structure

```
edx.org/                                    # Homepage
edx.org/search?q={query}                    # Search results
edx.org/learn/{subject}                     # Subject page
edx.org/school/{institution}                # Institution page
edx.org/learn/{subject}/{course-slug}       # Course detail
edx.org/course/{course-key}                 # Course detail (legacy)
edx.org/micromasters/{program-slug}         # MicroMasters program
edx.org/certificates/professional-certificate/{slug}  # Professional Certificate
edx.org/masters/{degree-slug}              # Online degree program
edx.org/xseries/{program-slug}            # XSeries program
edx.org/boot-camps/{slug}                  # Boot camp
edx.org/dashboard                           # My Learning dashboard
courses.edx.org/courses/{course-key}/       # Course player
edx.org/certificates/{uuid}                 # Certificate verification
edx.org/business                            # edX for Business
```

## 7. Search & Filter

- **Global Search**: Courses, programs, subjects, institutions by keyword
- **Subject Filter**: 12+ subject categories with subcategories
- **Level Filter**: Introductory, Intermediate, Advanced
- **Availability Filter**: Current (enrollable now), Upcoming, Archived (self-paced)
- **Institution Filter**: Select from 160+ partner universities and organizations
- **Program Type Filter**: Courses, MicroMasters, Professional Certificate, XSeries, Degrees, Boot Camps
- **Language Filter**: English, Spanish, French, Chinese, and 20+ languages
- **Price Filter**: Free (audit), Paid (verified), Subscription
- **Sort**: Relevance, Newest, Popularity

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile App | Bottom tab bar; vertical course cards; full-screen video; offline video downloads; simplified assignments |
| Tablet | Grid course catalog; course player with collapsible outline; landscape video |
| Desktop (primary) | Top nav + search; course grid with filters sidebar; player with left outline + main content |
| Offline (mobile) | Download videos and readings for offline study; progress syncs when reconnected |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Anonymous Visitor | Browse catalog, view course details, read about programs; cannot enroll |
| Audit Learner (free) | Access course content (videos, readings), participate in forums; no graded assignments or certificate |
| Verified Learner (paid) | Full access including graded assignments, proctored exams, verified certificate upon completion |
| Program Enrollee | Access all courses in program sequence; earn program credential |
| Degree Student | Full online degree experience; university-level support, cohort-based, financial aid eligible |
| Instructor | Create and manage course content, set grading policies, moderate forums, view analytics |
| Teaching Assistant | Grade assignments, moderate forums, answer student questions |
| Enterprise Admin | Manage team licenses, assign courses, create learning paths, view completion reports |
| Institution Admin | Manage course catalog, instructor access, branding, enrollment policies |
