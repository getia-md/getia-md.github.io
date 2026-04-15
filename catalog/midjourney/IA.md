---
brand: Midjourney
tagline: An independent research lab exploring new mediums of thought.
category: AI & ML
website: https://midjourney.com
---

# Midjourney — Information Architecture

## Overview

Midjourney is an AI image generation platform known for its distinctive aesthetic and artistic quality. Originally operating exclusively through Discord, the product has expanded to a dedicated web application at midjourney.com. The IA reflects this unique evolution: a **gallery-centric creation workspace** where the primary interaction loop is prompt → generation → variation → upscale → organize. The web app centers on a visual grid of generated images, with a persistent prompt bar at the bottom. Key features include the prompt editor, image editor (inpainting/outpainting), style references, character references, and organizational features like folders and image ratings. The Discord-native `/imagine` command remains a parallel interface.

## Site Map

```
midjourney.com
├── / (Home / image feed)
├── /explore (Community showcase)
├── /create (Generation workspace)
├── /imagine (Prompt editor with advanced params)
├── /archive
│   ├── / (All generated images)
│   ├── /likes (Liked images)
│   ├── /folders (Organized folders)
│   └── /folders/{folder_id}
├── /image/{image_id} (Individual image detail)
├── /editor/{task_id} (Image editor — inpaint/outpaint)
├── /profile/{username} (Public profile gallery)
├── /account
│   ├── /billing
│   └── /settings
├── /docs (Documentation)
└── /auth
```

## Navigation Model

- **Primary navigation**: Top bar with tabs — Home, Explore, Create, Archive
- **Persistent element**: Bottom prompt bar (always visible in Create mode)
- **Secondary navigation**: Archive sub-tabs — All, Likes, Folders, Smart Folders
- **Image navigation**: Click any image → full-screen lightbox with action buttons (Vary, Upscale, Remix, Edit)
- **Utility navigation**: Top-right profile avatar → Account, Billing, Settings, Log out
- **Filter navigation**: Explore page has style/tag filters; Archive has date/model/aspect ratio filters
- **Mobile**: Bottom tab bar replaces top nav; prompt bar adapts to keyboard

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Image Generation (Job) | 4-image grid from a single prompt, with model version, parameters, seed | User-owned |
| Individual Image | High-res image with metadata: prompt, params (--ar, --v, --s, --c), seed, model | Part of job |
| Variation | New generation derived from a parent image with modified prompt/params | User-owned, linked to parent |
| Upscale | Enhanced resolution version of a selected image | User-owned |
| Folder | Named container for organizing images | User-owned |
| Style Reference | Image used as visual style input for new generations | Linked to job |
| Prompt | Text description + parameters (aspect ratio, stylize, chaos, weird, model version) | Part of job |

## User Flows

### Basic Image Generation
1. User navigates to Create → focus on prompt bar at bottom
2. Types descriptive prompt (e.g., "a cyberpunk cat in neon rain, cinematic lighting")
3. Adjusts parameters: aspect ratio, model version (v6, niji), stylize, chaos
4. Submits → 4-image grid generates (30-60 seconds)
5. User selects favorite → Upscale (U1-U4) or Vary (V1-V4, Subtle/Strong)
6. Final image saved to Archive

### Image Editing (Inpaint/Outpaint)
1. User selects an image → clicks Edit
2. Editor opens with brush tools for masking regions
3. User masks area to change → types replacement prompt
4. Midjourney regenerates masked area while preserving the rest
5. Can also extend canvas (outpaint) in any direction

### Style/Character References
1. User attaches an image URL as `--sref` (style reference) or `--cref` (character reference)
2. Midjourney extracts visual style or character features
3. New generation applies the referenced style/character to the new prompt
4. Enables consistent character design across multiple images

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Home feed |
| `/explore` | Community gallery |
| `/create` | Generation workspace |
| `/archive` | User's image archive |
| `/archive/folders/{uuid}` | Specific folder |
| `/image/{uuid}` | Image detail page |
| `/editor/{uuid}` | Image editor |
| `/profile/{username}` | Public user profile |
| `/account/*` | Account management |
| `/docs/*` | Documentation |

Image IDs are UUIDs. Public profiles use usernames. No SEO slugs on images (visual content, not text).

## Search & Filter

- **Prompt search**: Search own Archive by prompt text
- **Explore search**: Search community images by keyword/prompt
- **Filters**: Model version (v5, v6, niji), aspect ratio, date range, favorites
- **Smart Folders**: Auto-organized by AI-detected content categories
- **Rating system**: Users can rate own images (1-5 stars) to train personal style preferences
- **No tag system**: Organization relies on prompt text matching and folders

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full grid view (4-6 columns), persistent prompt bar, side panels for image detail |
| Desktop (1024-1280px) | 3-4 column grid, prompt bar at bottom |
| Tablet (768-1024px) | 2-3 column grid, prompt bar at bottom, image detail as overlay |
| Mobile (<768px) | 1-2 column grid, prompt bar fixed at bottom above keyboard, image detail full-screen |

- Image grids use masonry layout adapting to viewport width
- Prompt bar is always fixed to bottom, expands on focus to show parameter controls
- Lightbox view is full-screen on mobile with swipe-to-navigate
- Touch: pinch-to-zoom on images, swipe between images in lightbox

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Browse Explore gallery only; no generation |
| Free Trial | ~25 free generations to try the service |
| Basic ($10/mo) | ~200 generations/mo, standard queue, community gallery |
| Standard ($30/mo) | ~900 generations/mo, fast hours, unlimited relaxed, stealth mode option |
| Pro ($60/mo) | ~1800 generations/mo, more fast hours, stealth mode, concurrent jobs |
| Mega ($120/mo) | ~3600 generations/mo, maximum fast hours, 12 concurrent jobs |

- Authentication: Discord OAuth (primary), email/password (web app)
- Image visibility: Public by default; Stealth mode (Pro+) makes images private
- Commercial usage: All paid plans include commercial license
- Content moderation: NSFW content blocked; prompts filtered by content policy
- Discord integration: All web generations also appear in Discord DMs (if linked)
