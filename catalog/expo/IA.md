---
brand: Expo
tagline: Make any app. Run it everywhere.
category: Developer Tools
website: https://expo.dev
---

# Expo — Information Architecture

## Overview

Expo is the leading framework and platform for building React Native applications, providing a managed development environment that simplifies the complexity of native iOS and Android development. The IA spans two interconnected surfaces: the **local development toolkit** (Expo CLI, Expo Router, Expo SDK) and the **cloud platform** (EAS Build, EAS Submit, EAS Update). The local toolkit provides the development experience (file-based routing, native module access, hot reload), while the cloud platform handles the build-and-ship pipeline (compiling native binaries, submitting to App Store/Play Store, and pushing over-the-air updates). This hybrid architecture reflects Expo's mission: write in JavaScript/TypeScript, deploy as native apps without managing Xcode or Android Studio directly.

## Site Map

```
expo.dev (platform + marketing)
├── / (Home — marketing)
├── /pricing
├── /docs (Documentation — extensive)
│   ├── /get-started
│   ├── /tutorial
│   ├── /guides
│   ├── /versions/{sdk_version}
│   └── /router (Expo Router docs)
├── /accounts/{username} (User/org profile)
│   └── /projects/{project_slug}
│       ├── /overview
│       ├── /builds (EAS Build history)
│       │   └── /{build_id}
│       ├── /submissions (App Store/Play Store submissions)
│       │   └── /{submission_id}
│       ├── /updates (OTA updates)
│       │   └── /branches/{branch_name}
│       │       └── /updates/{update_id}
│       ├── /channels (Update channels — production, staging)
│       │   └── /{channel_name}
│       ├── /credentials (Signing certificates, provisioning profiles)
│       ├── /deployments
│       └── /settings
├── /accounts/{username}/settings
│   ├── /members
│   ├── /billing
│   └── /access-tokens
├── /snack (Online React Native playground)
│   └── /{snack_id}
├── /eas (EAS product pages)
├── /blog
└── /changelog

Local Development (CLI)
├── npx create-expo-app (Project scaffolding)
├── npx expo start (Development server — Metro bundler)
├── npx expo install (Install compatible SDK packages)
├── Expo Go (Development client app on iOS/Android)
├── eas build (Cloud native build)
├── eas submit (App store submission)
├── eas update (Over-the-air update push)
└── app.json / app.config.js (Project configuration)
```

## Navigation Model

- **Platform navigation**: Left sidebar — Projects (list), then within a project: Overview, Builds, Submissions, Updates, Channels, Credentials, Settings
- **Docs navigation**: Left sidebar with extensive TOC — Get Started, Develop, Deploy, Reference, API, SDK, Expo Router
- **Version selector**: SDK version dropdown in docs (SDK 50, 51, 52, etc.)
- **Build detail navigation**: Build page → tabs for Logs, Artifacts, Config
- **Update navigation**: Branches → Updates within branch → Update detail with runtime version and manifest
- **Channel navigation**: Channels → linked branches → which updates reach which audience
- **Utility navigation**: Top-right — org switcher, avatar → Account Settings, Billing
- **Mobile**: Platform dashboard is responsive; primary development via Expo Go app on device

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Project | Name, slug, platform (iOS/Android), SDK version, builds, updates, credentials | User/Org-owned |
| Build | Platform (iOS/Android), profile (development, preview, production), status, logs, artifact (IPA/APK/AAB), EAS config | Part of project |
| Submission | Platform, build artifact, status, App Store/Play Store link, review status | Part of project |
| Update | Branch, runtime version, platform, assets (JS bundle, images), message, rollout | Part of project |
| Channel | Name (production, staging), linked branch, points to specific updates | Part of project |
| Branch | Name, updates list, linked channel | Part of project |
| Credential | iOS: signing cert, provisioning profile. Android: keystore. Auto-managed or manual | Part of project |
| Snack | Online playground code, dependencies, live preview | User-owned (public) |
| Deployment | Combination of build + channel configuration for a release | Part of project |

## User Flows

### Starting a New Expo Project
1. Developer runs `npx create-expo-app my-app`
2. Selects template (blank, tabs, TypeScript)
3. `cd my-app && npx expo start` → Metro bundler starts
4. Scans QR code with Expo Go app on phone → live preview on device
5. Edits code → hot reload updates the app in real-time
6. Uses Expo Router for file-based navigation (`app/(tabs)/index.tsx`)

### Building for Production (EAS Build)
1. Developer runs `eas build:configure` → creates `eas.json` with build profiles
2. Runs `eas build --platform ios --profile production`
3. Build queued on EAS cloud → builds in managed macOS environment
4. Build log streams on expo.dev → artifacts (IPA) available for download
5. Credentials (signing cert, provisioning profile) managed automatically by EAS
6. Build can be downloaded or submitted directly to App Store

### App Store Submission (EAS Submit)
1. Developer runs `eas submit --platform ios` → selects the build to submit
2. Configures App Store credentials (API key or manual login)
3. EAS uploads the build to App Store Connect / Google Play Console
4. Monitors submission status on expo.dev dashboard
5. App reviewed by Apple/Google → published to store

### Over-the-Air Update (EAS Update)
1. Developer makes a JS-only change (no native code changes)
2. Runs `eas update --branch production --message "fix checkout bug"`
3. Update pushed to EAS → available to all users on the `production` channel
4. App checks for updates on launch → downloads and applies the JS bundle
5. No App Store review needed — instant rollout
6. Can configure rollout percentage for gradual release

### Snack (Online Playground)
1. User opens snack.expo.dev
2. Writes React Native code in the browser editor
3. Live preview runs on web, or scan QR code for device preview
4. Share Snack via URL — others can fork and modify
5. Embed in documentation or blog posts

## URL / Route Structure

| Pattern | Description |
|---|---|
| `expo.dev/` | Marketing home |
| `expo.dev/accounts/{username}` | User/org profile |
| `expo.dev/accounts/{username}/projects/{slug}` | Project overview |
| `expo.dev/accounts/{username}/projects/{slug}/builds` | Build list |
| `expo.dev/accounts/{username}/projects/{slug}/builds/{uuid}` | Build detail |
| `expo.dev/accounts/{username}/projects/{slug}/updates/branches/{name}` | Branch updates |
| `expo.dev/accounts/{username}/projects/{slug}/channels/{name}` | Channel config |
| `expo.dev/accounts/{username}/projects/{slug}/credentials` | Signing credentials |
| `expo.dev/snack/{id}` | Snack playground |
| `expo.dev/docs/{path}` | Documentation |

Account/project hierarchy in URLs. Build IDs are UUIDs. Branch and channel names are developer-defined strings.

## Search & Filter

- **Project search**: Search projects by name on account dashboard
- **Build filtering**: Filter by platform (iOS/Android), profile (development, preview, production), status (new, in-progress, finished, errored), SDK version
- **Update filtering**: Filter by branch, runtime version, platform
- **Docs search**: Full-text documentation search (critical — Expo docs are extensive and SDK is large)
- **Snack search**: No public Snack search — share via direct URL
- **Package search**: `npx expo install` suggests compatible SDK packages
- **Credential filtering**: Filter by platform, type (signing cert, provisioning profile, keystore)

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full sidebar + project dashboard with build cards, update lists |
| Desktop (1024-1280px) | Collapsible sidebar + full content |
| Tablet (768-1024px) | Sidebar as drawer + simplified layout |
| Mobile (<768px) | Hamburger nav + single-column; build logs scrollable; Snack editor limited |

- Platform dashboard adapts well to tablet widths
- Build logs are monospace with horizontal scroll
- Update/channel management tables adapt to narrower widths
- Docs site is fully responsive with collapsible sidebar TOC
- Snack playground: code editor + preview panes stack vertically on mobile
- Marketing site is fully responsive with mobile-first design

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site, docs, public Snacks, Expo Go app |
| Free | 1 project owner, EAS Build (limited per-month), EAS Update (limited), community support |
| Production ($99/account/mo) | Higher build limits, priority queue, more update bandwidth, collaboration features |
| Enterprise | Custom limits, SSO, audit logs, SLA, dedicated support, self-hosted build runners |
| Organization roles | Owner (billing, members, all projects) → Admin (manage projects, credentials) → Developer (build, submit, update) → Viewer (read-only) |

- Authentication: Expo account (email/password), GitHub OAuth, Google OAuth
- Project access: Private by default; organization members have access based on role
- Credentials security: Signing certs and keystores encrypted at rest; auto-managed by EAS or user-uploaded
- API tokens: Personal and robot tokens for CI/CD automation (EAS CLI in CI)
- Expo Go limitations: Development client only — production apps use standalone builds
- EAS Build: Builds run on Expo's cloud infrastructure (macOS for iOS, Linux for Android)
- OTA updates: Critical security — updates can include arbitrary JS code; channel/branch system controls distribution
