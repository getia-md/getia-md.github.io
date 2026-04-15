---
brand: Quora
tagline: A place to share knowledge and better understand the world
category: Social & Communication
website: https://quora.com
---

# Information Architecture — Quora

## 1. Overview

Quora is a knowledge-sharing Q&A platform where questions are answered by a community of experts, enthusiasts, and everyday users. The IA is organized around Questions, Answers, Topics, and Spaces (community groups). Content is evergreen — answers accumulate upvotes over years — making Quora both a real-time discussion forum and a durable knowledge base. Quora also hosts Poe, its AI chatbot aggregator platform.

## 2. Site Map

```
Quora
├── Home Feed (personalized)
│   ├── Answers from followed topics/people
│   ├── Suggested questions
│   └── Space posts
├── Search
│   ├── Questions
│   ├── Answers
│   ├── People
│   ├── Spaces
│   └── Topics
├── Answer (write)
│   ├── Answer Requests
│   ├── Questions for You
│   └── Drafts
├── Spaces
│   ├── Space Feed
│   ├── Members
│   ├── About / Rules
│   ├── Submissions
│   └── Space Settings (admins)
├── Notifications
│   ├── Upvotes
│   ├── Answers to your questions
│   ├── Comments
│   ├── Follow activity
│   └── Space updates
├── Profile
│   ├── Answers
│   ├── Questions
│   ├── Posts
│   ├── Followers / Following
│   ├── Topics / Spaces
│   ├── Credentials
│   └── Stats (views, upvotes)
├── Quora+ (subscription)
│   └── Paywalled answers / premium content
├── Monetization
│   ├── Quora Partner Program
│   └── Space subscriptions
├── Poe (AI platform)
│   ├── Chat with AI bots
│   ├── Bot creation
│   └── API access
├── Topic Pages
│   ├── Related Questions
│   ├── Top Answers
│   ├── Topic FAQ
│   └── Related Topics
└── Settings
    ├── Account
    ├── Privacy
    ├── Email & Notifications
    ├── Languages
    └── Content Preferences
```

## 3. Navigation Model

- **Type**: Top nav bar with left sidebar (desktop), bottom tab bar (mobile)
- **Desktop Top Bar**: Quora logo (home), Search bar, Add Question, Notifications, Profile avatar
- **Desktop Left Sidebar**: Home, Following, Answer, Spaces, Notifications, Poe
- **Mobile Bottom Tabs**: Home, Search, Add (+), Notifications, Profile
- **Question Page**: Answer list sorted by upvotes; "Related Questions" sidebar
- **Topic Navigation**: Topic page → related topics tree → questions within topic

## 4. Content Model

| Content Type | Attributes | Relationships |
|---|---|---|
| Question | title, details, topics, asker (can be anonymous), answer count, followers, merged questions | → Answers, → Topics |
| Answer | body (rich text), author, upvotes, downvotes, comments, views, timestamp, Quora+ flag | → Question, → Author |
| Post | body, author, Space (if applicable), upvotes, comments | → Space, → Profile |
| Space | name, description, icon, rules, member count, admin list, subscription price (optional) | → Posts, → Members |
| Topic | name, description, related topics, follower count, image | → Questions, → Answers |
| Comment | text, author, timestamp, upvotes | → Answer, → Post |
| Credential | text (e.g., "PhD in Physics"), user-added, displayed on relevant answers | → User, → Topic |
| User Profile | name, bio, credentials, follower count, answer views, spaces | → Answers, → Questions, → Spaces |

## 5. User Flows

### Asking a Question
1. Click "Add Question" → Type question → Autocomplete suggests existing similar questions
2. If duplicate found → Redirect to existing question
3. If new → Add topic tags → Submit
4. Optionally request answers from specific users or topic experts
5. Question appears in topic feeds and followers' home feeds

### Answering a Question
1. Home feed shows "Questions for You" based on expertise/interests
2. Or browse "Answer" tab → Curated answer requests
3. Click question → Write answer with rich text editor (formatting, images, links)
4. Submit → Answer ranked by upvotes among other answers

### Exploring Spaces
1. Discover Spaces via home feed, search, or sidebar
2. Join Space → See posts from Space members
3. Contribute posts → Admins may moderate submissions
4. Paid Spaces require subscription to view premium content

## 6. URL / Route Structure

```
quora.com/                                  # Home feed
quora.com/search?q={query}                  # Search results
quora.com/{question-slug}                   # Question page
quora.com/{question-slug}/answer/{answerId} # Specific answer
quora.com/profile/{username}                # User profile
quora.com/profile/{username}/answers        # User's answers
quora.com/topic/{topic-slug}                # Topic page
quora.com/spaces/{spaceSlug}                # Space page
quora.com/q/{spaceSlug}/{postId}            # Space post
quora.com/about                             # About Quora
poe.com/                                    # Poe AI platform (separate domain)
```

## 7. Search & Filter

- **Global Search**: Full-text search across questions, answers, people, topics, Spaces
- **Autocomplete**: Question deduplication — suggests existing questions matching typed query
- **Answer Sorting**: By upvotes (default), recency, or "Related answers"
- **Topic Browse**: Hierarchical topic tree; related topics sidebar
- **Language Filter**: Content available in 20+ languages; filter by language preference
- **Feed Tuning**: Upvote/downvote and "Not interested" signals to tune home feed
- **Space Content**: Searchable within specific Spaces

## 8. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Mobile (< 768px) | Single-column feed; bottom tab bar; full-screen question/answer view; simplified editor |
| Tablet (768–1024px) | Single-column with wider margins; sidebar collapses |
| Desktop (> 1024px) | Left sidebar (nav) + center feed + right sidebar (related questions, trending, ads) |
| SEO Pages | Questions and top answers rendered server-side for search engine indexing |

## 9. Access Control

| Role | Capabilities |
|---|---|
| Anonymous Visitor | View questions and answers (with signup prompt after scroll); search; SEO landing pages |
| Registered User | Ask questions, answer, upvote/downvote, comment, follow topics/people/Spaces, create Spaces |
| Quora+ Subscriber | Access paywalled answers, ad-free experience |
| Space Admin | Create/manage Space, set rules, moderate submissions, set subscription pricing |
| Space Member | Post in Space, comment, view member-only content |
| Quora Partner | Earn revenue from questions that generate ad views |
| Top Writer | Badge recognition, invited to Quora events, content prioritized |
| Moderator (platform) | Edit questions, merge duplicates, enforce BNBR (Be Nice Be Respectful) policy |
| Blocked / Banned | Cannot interact with blocking user; banned users lose write access platform-wide |
