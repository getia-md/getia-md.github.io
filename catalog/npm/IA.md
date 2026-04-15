---
brand: npm
tagline: Build amazing things.
category: Developer Tools
website: https://npmjs.com
---

# npm — Information Architecture

## Overview

npm (Node Package Manager) is the world's largest software registry, hosting over 2 million JavaScript/TypeScript packages. The IA is a **package registry with a search-first architecture** — the dominant user flow is searching for a package, reading its documentation, and installing it via the CLI. The website serves as both a discovery platform and a package management interface. Each package page is a dense information hub: README, version history, dependencies, dependents, download stats, and metadata. The platform supports scoped packages (@org/pkg), organizations, and access control for private packages. npm is owned by GitHub/Microsoft, creating integration points with GitHub repositories.

## Site Map

```
npmjs.com
├── / (Home — search bar, featured packages)
├── /search?q={query} (Search results)
├── /package/{package_name} (Package page)
│   ├── /v/{version} (Specific version)
│   ├── /access (Access management)
│   └── ?activeTab=readme|explore|dependencies|dependents|versions
├── /~{username} (User profile — packages list)
├── /org/{org_name} (Organization page)
│   ├── /members
│   ├── /teams
│   └── /packages
├── /settings/{username}
│   ├── /profile
│   ├── /billing
│   ├── /tokens
│   ├── /packages (Manage packages)
│   └── /tfa (Two-factor auth)
├── /advisories (Security advisories database)
│   └── /{advisory_id}
├── /products (Pricing — Pro, Teams, Enterprise)
├── /docs (Documentation)
├── /policies (Terms, privacy, conduct)
└── /signup | /login
```

## Navigation Model

- **Primary navigation**: Top bar — minimal — logo, global search bar (dominates), Sign Up, Sign In
- **Signed-in nav**: Top bar adds avatar dropdown → Profile, Packages, Organizations, Access Tokens, Sign out
- **Package page navigation**: Tab bar — Readme (default), Explore (file browser), N Dependencies, N Dependents, N Versions
- **Sidebar (package page)**: Right sidebar — Install command, Weekly Downloads chart, Version, License, Repository link, Homepage, npm stats
- **Organization navigation**: Members, Teams, Packages tabs
- **Footer navigation**: Products, Docs, Policies, Company links
- **Mobile**: Search bar stays prominent; package page tabs scroll horizontally

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Package | Name, description, README, keywords, version history, dependencies, maintainers, license | Maintainer-owned |
| Version | Semver string, tarball, dist-tag (latest, next, beta), publish date, npm signature | Part of package |
| README | Markdown rendered from package.json readme field or README.md file | Part of version |
| Organization | Name, description, members, teams, packages | Org members |
| Team | Named group within org with package access permissions | Part of org |
| User Profile | Username, avatar, email, packages maintained, organizations | User-owned |
| Security Advisory | CVE ID, affected versions, severity, patched version, description | npm-curated |
| Access Token | Token string, type (automation, publish, CIDR-restricted), permissions | User-owned |

## User Flows

### Finding and Installing a Package
1. User arrives at npmjs.com → types in search bar (e.g., "date formatting")
2. Results sorted by relevance (popularity, quality, maintenance metrics)
3. Clicks package → reads README for API docs and usage examples
4. Checks right sidebar: weekly downloads (popularity indicator), license, last publish date
5. Copies install command: `npm install date-fns`
6. Optionally checks Dependencies tab for supply chain review

### Publishing a Package
1. Developer creates `package.json` with name, version, description
2. Writes README.md with usage documentation
3. Logs in via CLI: `npm login`
4. Publishes: `npm publish`
5. Package appears on npmjs.com within minutes
6. Subsequent versions published with `npm version patch && npm publish`

### Organization Package Management
1. Admin creates organization on npmjs.com
2. Creates teams (e.g., "frontend", "backend", "devops")
3. Adds members to teams
4. Assigns package access to teams (read-only or read-write)
5. Scoped packages (@org/pkg-name) automatically associated with org
6. Private packages only accessible to authorized team members

### Security Advisory Review
1. Developer runs `npm audit` locally → sees vulnerable dependencies
2. Clicks advisory link → goes to npmjs.com/advisories/{id}
3. Reads severity, affected versions, vulnerability description
4. Sees recommended fix: upgrade to patched version
5. Runs `npm audit fix` to auto-update compatible versions

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Home |
| `/search?q={query}` | Search results |
| `/package/{name}` | Package page (unscoped) |
| `/package/@{scope}/{name}` | Package page (scoped) |
| `/package/{name}/v/{version}` | Specific version |
| `/~{username}` | User profile |
| `/org/{org_name}` | Organization |
| `/advisories/{id}` | Security advisory |
| `/settings/{username}/tokens` | Access tokens |
| `/products` | Pricing |

Package names in URLs include the `@scope/` prefix for scoped packages. User profiles use `~` prefix. Query-string for search.

## Search & Filter

- **Package search**: Full-text search across package names, descriptions, keywords, README
- **Search ranking**: Combines popularity (downloads), quality (tests, docs, linting), maintenance (recent updates, open issues) into a composite score
- **Search filters**: None in the web UI — text search only (no category, license, or framework filters)
- **Sort**: Optimal (relevance), Popularity, Quality, Maintenance
- **Exact match**: Exact package name match shown prominently above results
- **Advisory search**: Search advisories by package name, CVE ID, severity
- **CLI search**: `npm search {query}` mirrors web search
- **No tag/category browsing**: Unlike PyPI or RubyGems, npm lacks curated category pages

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1024px) | Search bar + package content (left) + metadata sidebar (right) |
| Tablet (768-1024px) | Sidebar moves below main content; tab bar remains |
| Mobile (<768px) | Full-width search, single-column package page, sidebar below readme, tabs as horizontal scroll |

- Search bar remains large and centered at all breakpoints (critical UX element)
- Package README renders with responsive markdown (images scale, tables scroll)
- Download charts resize with viewport
- Version history table scrolls horizontally on mobile
- Install command copy button remains prominently accessible
- Dependency tree uses nested indentation (can be deep — horizontal scroll on mobile)

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Search, view public packages, read READMEs, view advisories |
| Free (signed in) | Publish public packages, manage own packages, npm audit |
| Pro ($7/mo) | Free + unlimited private packages (personal) |
| Teams ($7/user/mo) | Pro + organizations, team-based access control, private org packages |
| Enterprise | Teams + SSO/SAML, audit logs, IP allowlisting, custom registry |
| Package roles | Owner (full control) → Maintainer (publish, unpublish) → Read-only (private package access) |

- Authentication: Username/password + 2FA (TOTP or security key), GitHub OAuth login
- Access tokens: Granular tokens — publish, automation (no 2FA required for CI), read-only, CIDR-restricted
- Package visibility: Public (default) or Private (Pro/Teams/Enterprise)
- npm provenance: Signed build attestation linking package to source commit and CI job
- 2FA: Mandatory for publishing on high-value packages; optional but recommended for all
- Unpublish policy: Can unpublish within 72 hours; after that, requires npm support
