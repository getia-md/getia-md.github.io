---
brand: Docker Hub
tagline: The world's largest container registry.
category: Developer Tools
website: https://hub.docker.com
---

# Docker Hub — Information Architecture

## Overview

Docker Hub is the default public container image registry for the Docker ecosystem, hosting millions of container images including official images (maintained by Docker), verified publisher images, and community-contributed images. The IA is structured as a **registry-centric discovery and distribution platform** — the primary objects are Repositories (containing tagged images), and the user experience revolves around searching, pulling, and pushing container images. The platform serves two distinct user types: consumers (who search and pull images) and publishers (who build, push, and manage images). Docker Hub also provides automated builds, webhooks, and organization management.

## Site Map

```
hub.docker.com
├── / (Home — explore, search, featured images)
├── /search (Search results)
├── /_/{image_name} (Official image page)
│   ├── /tags (Image tags list)
│   └── /builds (Automated builds — legacy)
├── /r/{namespace}/{image_name} (Community/publisher image)
│   └── /tags
├── /u/{username} (User profile — repositories list)
├── /orgs/{org_name} (Organization page)
│   ├── /members
│   ├── /teams
│   ├── /repositories
│   └── /settings
├── /repositories (My repositories)
├── /settings
│   ├── /general
│   ├── /security (Password, 2FA)
│   ├── /notifications
│   └── /billing
├── /billing (Subscription management)
├── /explore (Curated collections)
│   └── /{category_slug}
└── /auth
```

## Navigation Model

- **Primary navigation**: Top bar — Explore, Repositories (my repos), Organizations, search bar (prominent)
- **Search**: Global search bar is the dominant navigation element — most users arrive via search
- **Image page navigation**: Tabs on image page — Overview (README), Tags, Builds (if configured)
- **Organization navigation**: Sub-tabs — Repositories, Members, Teams, Activity, Settings, Billing
- **User profile navigation**: Repository list with sort/filter
- **Utility navigation**: Top-right — avatar → Account Settings, Billing, Sign out
- **Tag navigation**: Tag list with platform/architecture filter (linux/amd64, linux/arm64, etc.)
- **Mobile**: Responsive; search and image pages work well on mobile

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Repository | Name, description, README, tags (image versions), pull count, star count, visibility | User/Org-owned |
| Image Tag | Tag name (latest, 1.0, alpine), digest, OS/architecture, compressed size, pushed date | Part of repository |
| Official Image | Docker-maintained, security-scanned, documented, follows best practices | Docker-maintained |
| Verified Publisher | Organization-verified images with publisher badge | Publisher-owned |
| Organization | Name, members, teams, repositories, billing plan | Org-owned |
| Team | Group within org, with repository access permissions | Part of org |
| Automated Build | Git repo link, build rules, build history, triggers | Part of repository (legacy) |
| Webhook | URL endpoint, events (push), target repositories | Part of repository |

## User Flows

### Finding and Pulling an Image
1. User searches for an image (e.g., "nginx" or "postgres")
2. Results show Official Images first, then Verified Publishers, then community images
3. Clicks image → reads Overview (README with usage instructions)
4. Checks Tags tab → finds desired version and architecture
5. Copies pull command: `docker pull nginx:1.25-alpine`
6. Runs in terminal → image downloaded from Docker Hub

### Publishing an Image
1. User creates repository on Docker Hub (name, description, visibility)
2. Builds image locally: `docker build -t username/myapp:1.0 .`
3. Logs in: `docker login`
4. Pushes: `docker push username/myapp:1.0`
5. Image appears in repository → writes README with usage instructions
6. Community can search, discover, and pull the image

### Organization Management
1. Admin creates organization → invites members
2. Creates teams with specific repository access (read, write, admin)
3. Assigns repositories to teams
4. Sets up automated scanning and vulnerability alerts
5. Manages billing and seat count

### Image Vulnerability Scanning
1. Docker Scout scans images on push (or on-demand)
2. Vulnerability report shows CVEs by severity (Critical, High, Medium, Low)
3. Recommendations for base image updates to fix vulnerabilities
4. Policy compliance tracking (no critical CVEs, etc.)

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Home |
| `/search?q={query}` | Search results |
| `/_/{image_name}` | Official image (underscore prefix) |
| `/_/{image_name}/tags` | Official image tags |
| `/r/{namespace}/{image_name}` | Community/publisher image |
| `/r/{namespace}/{image_name}/tags` | Image tags |
| `/u/{username}` | User profile |
| `/orgs/{org_name}` | Organization |
| `/orgs/{org_name}/members` | Org members |
| `/repositories` | My repositories |
| `/settings/*` | Account settings |
| `/explore/{category}` | Curated category |

Notable: Official images use `/_/` prefix (no namespace). Community images use `/r/{namespace}/`. User profiles use `/u/`.

## Search & Filter

- **Image search**: Full-text search across image names, descriptions, README content
- **Search filters**: Type (Official, Verified Publisher, Sponsored OSS, Community), Categories, Operating Systems, Architectures
- **Sort**: Best Match, Most Popular (pulls), Recently Updated, Most Stars
- **Tag filtering**: Within a repository — filter tags by OS/architecture (linux/amd64, windows/amd64, arm/v7, etc.)
- **Explore categories**: Databases, Web Servers, Languages, DevOps, Security, etc.
- **Organization repo search**: Search repositories within an organization by name

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1024px) | Full nav + search + content area with image cards or tag table |
| Tablet (768-1024px) | Nav adapts, search remains prominent, content single-column |
| Mobile (<768px) | Hamburger menu, full-width search, cards stack vertically, tag table scrolls horizontally |

- Search bar remains prominent and accessible at all breakpoints
- Image cards (name, description, pull count, stars) stack vertically on mobile
- Tag table (multi-column with OS/arch, size, digest) has horizontal scroll on mobile
- README content uses responsive markdown rendering (images scale, code blocks scroll)
- Pull command copy button remains accessible

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Search, view public repos, pull public images (rate-limited: 100 pulls/6hrs per IP) |
| Free (signed in) | 200 pulls/6hrs, unlimited public repos, 1 private repo, 1 parallel build |
| Pro ($5/mo) | 5000 pulls/6hrs, unlimited private repos, 5 parallel builds, Docker Scout |
| Team ($9/user/mo) | Pro features + organizations, team management, audit logs, RBAC |
| Business ($24/user/mo) | Team + SSO/SAML, SCIM, hardened security, image access management |

- Authentication: Docker ID (email/password), SSO/SAML (Business)
- Pull rate limits: Key differentiator between tiers; anonymous users are most restricted
- Repository visibility: Public (anyone can pull) or Private (only authorized users)
- Organization roles: Owner, Member, with team-based repository permissions (Read, Write, Admin)
- Image signing: Docker Content Trust for verified image provenance
- Access tokens: Personal access tokens replace password for CLI authentication
