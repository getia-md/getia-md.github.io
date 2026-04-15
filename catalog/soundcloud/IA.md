---
brand: SoundCloud
tagline: Hear the world's sounds. Upload, share, discover.
category: Content & Media
website: https://www.soundcloud.com
---

# Information Architecture — SoundCloud

## 1. Overview
SoundCloud is an audio platform for independent musicians, podcasters, and listeners. Its IA is built around the **waveform player** — a distinctive visual representation of audio that enables timed comments, making listening social. The platform uniquely supports emerging artists through direct upload, fan-powered royalties, and discovery tools. SoundCloud blends social networking (reposts, likes, following) with streaming and distribution.

## 2. Site Map

```
soundcloud.com
├── Home (Stream / Feed)
├── Discover
│   ├── Trending
│   ├── Charts (Top 50, New & Hot)
│   ├── Genres
│   │   ├── Hip-hop & Rap
│   │   ├── Electronic
│   │   ├── Pop
│   │   ├── R&B & Soul
│   │   ├── Rock
│   │   ├── Podcasts
│   │   └── ... (20+ genres)
│   └── Playlists (curated)
├── Search
│   ├── Tracks
│   ├── People
│   ├── Albums
│   ├── Playlists
│   └── Stations
├── Upload
│   ├── Upload tracks
│   ├── Track details
│   └── Distribution (SoundCloud for Artists)
├── Track Page
│   ├── Waveform player
│   ├── Timed comments
│   ├── Track info (description, genre, tags)
│   ├── Related tracks
│   ├── Reposts & likes count
│   ├── Buy / download link
│   └── Artist profile link
├── Artist Profile
│   ├── Bio & avatar
│   ├── Tracks
│   ├── Albums / Playlists
│   ├── Reposts
│   ├── Followers / Following
│   ├── Spotlight (pinned tracks)
│   └── Stats (for creator)
├── Library (Auth)
│   ├── Likes
│   ├── Playlists
│   ├── Albums
│   ├── Following
│   ├── Stations
│   └── Listening history
├── SoundCloud Go+ (Premium)
│   ├── Ad-free listening
│   ├── Offline access
│   └── Full catalog access
├── For Artists
│   ├── SoundCloud for Artists (dashboard)
│   ├── Monetization (fan-powered royalties)
│   ├── Distribution (to Spotify, Apple, etc.)
│   ├── Promote
│   └── Analytics
├── Help Center
│   ├── Listening
│   ├── Uploading
│   ├── Account
│   ├── Subscriptions
│   └── Contact
├── Legal
│   ├── Terms
│   ├── Privacy
│   ├── Copyright
│   └── Community guidelines
└── Auth
    ├── Log in
    └── Create account
```

## 3. Navigation Model

| Level | Type | Details |
|-------|------|---------|
| Global | Top bar | Logo, Home (Stream), Search bar, Upload, Library, Profile, Go+ CTA |
| Discover | Horizontal tabs | Charts, Trending, Genres, Playlists |
| Track page | Inline actions | Play, Like, Repost, Share, Add to playlist, More (report, embed) |
| Persistent player | Bottom bar | Waveform mini-player, play/pause, skip, queue, volume |
| Footer | Compact | Legal, Help, Developers, For Artists |
| App | Bottom tabs | Home, Search, Library, Profile + floating mini-player |

**Key pattern**: The persistent bottom player follows the user everywhere. Waveform visualization and timed comments are SoundCloud's signature — audio is always visual.

## 4. Content Model

| Entity | Attributes |
|--------|-----------|
| Track | title, artist, waveform, duration, genre, tags, description, plays, likes, reposts, comments (timed), buy link, downloadable flag, license |
| Playlist | name, creator, tracks, public/private, likes, reposts |
| Album | title, artist, tracks, release date, genre |
| Artist Profile | display name, avatar, header, bio, location, followers, following, tracks, reposts, links |
| Comment | user, text, timestamp (timed to waveform position), track |
| Repost | user, track/playlist, timestamp (appears in follower feeds) |
| Station | seed track/artist, auto-generated playlist |

## 5. User Flows

### 5a. Listen & discover
1. Open Home → scroll Stream (new tracks from followed artists)
2. Or visit Discover → browse charts/genres/playlists
3. Play track → waveform player loads → see timed comments scroll by
4. Like, repost, or add to playlist
5. Artist radio/station auto-plays related tracks

### 5b. Upload a track
1. Click Upload → drag & drop audio file(s)
2. Edit metadata (title, genre, tags, description, artwork)
3. Set privacy (public, private, scheduled)
4. Set permissions (download, embed, comments)
5. Publish → track appears on profile and in followers' streams

### 5c. Monetization & distribution
1. Enable SoundCloud for Artists → verify artist profile
2. Opt into fan-powered royalties → earn from Go+ subscriber plays
3. Distribute to external platforms (Spotify, Apple Music, etc.) via SoundCloud
4. View analytics (plays, listeners, geography, sources)
5. Receive payouts

### 5d. Social interaction
1. Browse a track → click on waveform at a specific timestamp
2. Type a timed comment → appears at that point for future listeners
3. Repost track → appears in your followers' streams
4. Follow artist → their new uploads appear in your Home stream

## 6. URL / Route Structure

```
/                           → Home (Stream)
/discover/                  → Discover
/charts/{genre}/            → Genre chart
/search?q={query}           → Search results
/upload/                    → Upload (auth)
/{username}/                → Artist profile
/{username}/{track-slug}    → Track page
/{username}/sets/{slug}     → Playlist / Album
/{username}/likes           → User's liked tracks
/{username}/reposts         → User's reposts
/you/library/               → My Library (auth)
/you/likes/                 → My Likes (auth)
/go/                        → SoundCloud Go+ info
/for-artists/               → Artist tools
/help/                      → Help center
```

## 7. Search & Filter

| Feature | Behavior |
|---------|----------|
| Global search | Autocomplete, search tracks / people / playlists / albums |
| Genre filter | Browse by genre on Discover and Charts |
| Charts | Top 50, New & Hot — filtered by genre and country |
| Sort | Relevance, date, plays, likes |
| Track filter | Duration, license type (Creative Commons), to listen |
| Station seed | Start radio from any track or artist |

## 8. Responsive Behavior

| Breakpoint | Adaptation |
|-----------|------------|
| Desktop (≥1024px) | Full waveform, timed comments visible, sidebar recommendations, full profile |
| Tablet (768–1023px) | Waveform responsive, condensed layout, floating player |
| Mobile (<768px) | Simplified waveform, swipeable track cards, bottom mini-player, comment drawer |
| App (iOS/Android) | Bottom tabs, offline downloads (Go+), push for new releases, mini-player |
| Embed | Compact waveform player widget, customizable colors |

## 9. Access Control

| Role | Access |
|------|--------|
| Visitor | Listen to public tracks (ad-supported), browse, search |
| Free User | Upload (limited hours), like, repost, comment, playlists, follow |
| SoundCloud Go | Ad-free listening, offline downloads |
| SoundCloud Go+ | Full catalog, lossless audio, ad-free, offline |
| Creator (Free) | Upload (limited), basic stats |
| Creator (Next Pro) | Unlimited uploads, advanced stats, distribution, monetization, Spotlight, scheduled releases |
| Artist (Verified) | Verified badge, fan-powered royalties, priority support |
| Internal | Content moderation, copyright enforcement, royalty management |
