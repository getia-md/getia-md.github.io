---
brand: Runway
tagline: Advancing creativity with artificial intelligence.
category: AI & ML
website: https://runwayml.com
---

# Runway — Information Architecture

## Overview

Runway is an AI-powered creative suite focused on video generation and editing. The IA is structured as a **creative tools dashboard** where each AI capability (Gen-3 Alpha video generation, motion brush, image-to-video, text-to-video, inpainting, style transfer, background removal, etc.) lives as a distinct tool within a unified workspace. The platform bridges the gap between professional video editing and generative AI, targeting filmmakers, content creators, and creative teams. The workspace model borrows from professional creative tools (think Adobe Creative Cloud) with project-based organization, asset libraries, and collaborative features.

## Site Map

```
runwayml.com
├── / (Marketing home)
├── /app (Dashboard — all tools)
├── /app/video (Gen-3 Alpha video generation)
├── /app/image (Image generation)
├── /app/tools
│   ├── /text-to-video
│   ├── /image-to-video
│   ├── /motion-brush
│   ├── /camera-motion
│   ├── /inpainting
│   ├── /expand-image
│   ├── /remove-background
│   ├── /frame-interpolation
│   ├── /color-grade
│   ├── /super-slow-motion
│   ├── /erase-replace
│   └── /3d-capture
├── /app/projects
│   └── /{project_id}
├── /app/assets (Asset library)
├── /app/team (Team management)
├── /app/settings
│   ├── /account
│   ├── /billing
│   └── /api
├── /research (Research papers)
├── /studios (Runway Studios — creative collaborations)
├── /pricing
└── /auth
```

## Navigation Model

- **Primary navigation**: Left sidebar — Home (dashboard), Generate (video/image), Tools (individual AI tools), Projects, Assets, Team
- **Tools grid**: Dashboard shows all available tools as icon cards — click to open individual tool
- **Project navigation**: Within a project — asset list, generation history, shared members
- **Utility navigation**: Bottom-left sidebar — Settings, Billing, Credits balance, Help
- **Contextual navigation**: Within a tool — input panel (left/top), preview/output (center/right), parameters (right panel)
- **Top bar**: Credits remaining indicator, upgrade CTA, account avatar
- **Mobile**: Not optimized for mobile — desktop/tablet-first creative tool

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Generation | Video/image output + input prompt/image + parameters + seed | User-owned |
| Project | Named folder containing generations, assets, and settings | User/Team-owned |
| Asset | Uploaded image, video, or audio file for use in tools | User-owned |
| Tool Preset | Saved parameter configuration for a specific tool | User-owned |
| Video Composition | Multi-clip timeline for combining generated clips | User-owned |
| Team Workspace | Shared environment with shared projects, assets, and credits | Team-owned |

## User Flows

### Gen-3 Alpha Video Generation
1. User navigates to Generate → Video
2. Chooses mode: Text-to-Video, Image-to-Video, or Video-to-Video
3. Enters text prompt and/or uploads reference image
4. Adjusts parameters: duration (5s/10s), aspect ratio, motion intensity, camera movement
5. Clicks Generate → video renders (1-5 minutes depending on duration)
6. Preview plays in-browser → download, extend, or iterate with variations

### Motion Brush Workflow
1. User uploads or selects a still image
2. Opens Motion Brush tool → paints brush strokes on areas to animate
3. Direction and intensity of strokes define the motion vector
4. Generates short video clip with localized motion
5. Can combine with camera motion controls for cinematic effect

### Project-Based Workflow
1. User creates a Project (e.g., "Music Video Concept")
2. Generates multiple video clips using various tools
3. All outputs automatically organized in the Project
4. Team members invited to collaborate — can view, generate, download
5. Assets (reference images, style guides) uploaded to Project asset library

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/app` | Main dashboard |
| `/app/video` | Video generation |
| `/app/image` | Image generation |
| `/app/tools/{tool_slug}` | Individual tool page |
| `/app/projects/{uuid}` | Project workspace |
| `/app/assets` | Asset library |
| `/app/generation/{uuid}` | Individual generation detail |
| `/app/team` | Team management |
| `/app/settings/*` | Account settings |

All app routes are behind `/app` prefix. UUIDs for projects and generations. Tool routes use slugified names.

## Search & Filter

- **Asset search**: Search uploaded assets by filename
- **Generation history**: Filter by tool used, date range, project
- **Tool discovery**: Tools displayed as categorized grid — no search needed (limited number of tools)
- **No public marketplace**: Unlike Midjourney, no community gallery or public model sharing
- **Project filtering**: List projects by name, date, team membership
- **No prompt search**: Generations are browseable but not searchable by prompt text

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full sidebar + tool workspace with input/output panels + parameter sidebar |
| Desktop (1024-1280px) | Collapsible sidebar + tool workspace, parameters in dropdown |
| Tablet (768-1024px) | Minimal sidebar (icons only) + simplified tool UI |
| Mobile (<768px) | Not officially supported — tool UIs require desktop-scale interaction |

- Video preview scales to available width while maintaining aspect ratio
- Tool input panels stack vertically on narrower viewports
- Motion Brush and painting tools require pointer precision (not touch-optimized)
- Dashboard tool grid reflows from 4-column to 2-column

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing pages only; no tool access |
| Free | 125 credits (one-time), watermarked outputs, limited tools |
| Standard ($15/mo) | 625 credits/mo, Gen-3, no watermark, 3 projects |
| Pro ($35/mo) | 2250 credits/mo, all tools, unlimited projects, higher resolution |
| Unlimited ($95/mo) | Unlimited generations (relaxed mode), priority GPU |
| Enterprise | Custom credits, team management, API access, SSO, dedicated support |
| Team roles | Admin (manage members, billing) → Editor (generate, manage projects) → Viewer (view only) |

- Authentication: Email/password, Google OAuth
- Credits system: Different tools consume different credit amounts (Gen-3 video costs more than image generation)
- API: Separate API access for programmatic generation (Enterprise/custom plans)
- Outputs: Users own generated content; commercial use allowed on paid plans
- Watermark: Free tier adds Runway watermark to all outputs
