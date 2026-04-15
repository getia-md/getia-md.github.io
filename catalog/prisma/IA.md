---
brand: Prisma
tagline: Next-generation Node.js and TypeScript ORM.
category: Developer Tools
website: https://prisma.io
---

# Prisma — Information Architecture

## Overview

Prisma is a next-generation ORM (Object-Relational Mapping) for Node.js and TypeScript that replaces traditional ORMs with a **schema-first, type-safe database toolkit**. The IA spans two distinct surfaces: the open-source toolkit (Prisma Client, Prisma Migrate, Prisma Studio) used locally in a developer's project, and the Prisma Data Platform (cloud service for data management, optimization, and team collaboration). The core architectural innovation is the Prisma Schema (`schema.prisma`): a single declarative file that defines the data model, database connection, and generator configuration. From this schema, Prisma generates a fully type-safe client API. Prisma Studio provides a visual database browser, and the platform adds Prisma Accelerate (connection pooling + caching) and Prisma Pulse (real-time database events).

## Site Map

```
prisma.io (marketing + docs)
├── / (Home)
├── /orm (Prisma ORM product page)
├── /data-platform (Prisma Data Platform)
├── /pricing
├── /docs (Documentation — extensive)
│   ├── /orm
│   │   ├── /overview
│   │   ├── /prisma-schema
│   │   ├── /prisma-client
│   │   ├── /prisma-migrate
│   │   └── /reference (API reference)
│   ├── /accelerate
│   ├── /pulse
│   └── /platform
├── /blog
├── /showcase (Companies using Prisma)
└── /community

console.prisma.io (Prisma Data Platform)
├── / (Projects list)
├── /{workspace}/{project}
│   ├── /environments (Environment list — production, staging, etc.)
│   │   └── /{environment}
│   │       ├── /accelerate (Connection pooling + caching config)
│   │       ├── /pulse (Real-time event streams config)
│   │       └── /connection-string
│   ├── /schema (Schema viewer — read from connected database)
│   ├── /insights (Query performance analytics)
│   └── /settings
├── /settings
│   ├── /account
│   ├── /billing
│   └── /members
└── /auth

Local Development (CLI/Studio)
├── prisma/schema.prisma (Schema file)
├── npx prisma studio (Visual DB browser at localhost:5555)
├── npx prisma migrate (Schema migration management)
├── npx prisma generate (Client code generation)
└── npx prisma db push (Quick schema push — no migration files)
```

## Navigation Model

- **Documentation navigation**: Left sidebar with nested sections — ORM (Schema, Client, Migrate, Reference), Accelerate, Pulse, Platform
- **Console navigation**: Left sidebar — Projects, then within project: Environments, Schema, Insights, Settings
- **Local development**: CLI commands are the navigation interface — no persistent UI besides Prisma Studio
- **Prisma Studio navigation**: Left sidebar lists database tables → click table → data browser with column headers, filtering, sorting
- **Docs version selector**: Version dropdown for different Prisma versions
- **Marketing site navigation**: Top bar — Product (ORM, Accelerate, Pulse), Docs, Blog, Pricing, Community
- **Mobile**: Docs are responsive; Studio is desktop-only (localhost tool)

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Prisma Schema | `datasource`, `generator`, `model` blocks, relations, enums, in `.prisma` DSL | Project file |
| Model | Table definition with fields, types, attributes (@id, @unique, @relation, @default) | Part of schema |
| Migration | SQL migration file, timestamp, name, applied status | Part of project |
| Prisma Client | Auto-generated TypeScript/JS client with type-safe query methods | Generated artifact |
| Studio Session | Visual database browser — table views, row editing, filtering | Local session |
| Platform Project | Workspace, environments, Accelerate/Pulse config, connection strings | Team-owned |
| Environment | Named database connection with Accelerate/Pulse settings | Part of project |
| Query Insight | Query pattern, execution count, latency, cache hit rate (Accelerate) | Analytics |

## User Flows

### Setting Up Prisma in a Project
1. Developer runs `npm install prisma --save-dev` and `npx prisma init`
2. Prisma creates `prisma/schema.prisma` with default config
3. Developer configures database connection in schema (`datasource db`)
4. Defines data models (e.g., `model User { id Int @id, name String, email String @unique }`)
5. Runs `npx prisma migrate dev --name init` → creates SQL migration and applies it
6. Runs `npx prisma generate` → generates Prisma Client
7. Imports and uses type-safe client in application code

### Schema Evolution (Migration)
1. Developer modifies schema (adds field, new model, changes relation)
2. Runs `npx prisma migrate dev --name add-posts`
3. Prisma generates SQL migration file (viewable, editable)
4. Migration applied to development database
5. In production: `npx prisma migrate deploy` applies pending migrations
6. Prisma Client regenerated with updated types

### Prisma Studio (Visual Database Browser)
1. Developer runs `npx prisma studio` → opens browser at `localhost:5555`
2. Left sidebar shows all models/tables from the schema
3. Click a model → see data in a spreadsheet-like grid
4. Add, edit, delete records visually
5. Navigate relations — click related records to follow foreign keys
6. Filter and sort data by column values

### Prisma Accelerate Setup
1. Developer creates project on console.prisma.io
2. Adds database connection string → creates environment
3. Enables Accelerate → gets a Prisma Accelerate connection URL
4. Replaces direct database URL with Accelerate URL in application
5. Queries now go through Accelerate: connection pooling + global caching
6. Monitors cache hit rates and query performance in Insights

## URL / Route Structure

| Pattern | Description |
|---|---|
| `prisma.io/` | Marketing home |
| `prisma.io/docs/{section}/{page}` | Documentation |
| `prisma.io/docs/orm/prisma-schema` | Schema reference |
| `prisma.io/docs/orm/prisma-client/{topic}` | Client API docs |
| `console.prisma.io/` | Platform project list |
| `console.prisma.io/{workspace}/{project}` | Project dashboard |
| `console.prisma.io/{workspace}/{project}/environments/{env}` | Environment detail |
| `console.prisma.io/{workspace}/{project}/insights` | Query insights |
| `localhost:5555` | Prisma Studio (local) |

Documentation uses hierarchical path structure. Console uses workspace/project/environment hierarchy.

## Search & Filter

- **Documentation search**: Full-text search across all docs (Algolia-powered) — critical given documentation depth
- **Prisma Studio filters**: Filter table data by column values, sort by any column
- **Platform Insights**: Filter queries by time range, cache status (hit/miss), latency threshold
- **Schema search**: No built-in schema search — developers use IDE search in `.prisma` files
- **No model marketplace**: Prisma doesn't have a schema/model sharing platform
- **Community search**: Community forum (GitHub Discussions) has search

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Docs: sidebar TOC + content + right sidebar (on-page navigation). Studio: sidebar + data grid |
| Desktop (1024-1280px) | Docs: collapsible sidebar + content. Studio: full layout |
| Tablet (768-1024px) | Docs: hamburger sidebar + full content. Console: simplified layout |
| Mobile (<768px) | Docs: hamburger sidebar + single-column content. Studio: N/A (localhost tool) |

- Documentation is the most important responsive surface — code examples use horizontal scroll
- Schema syntax highlighting adapts to available width
- Console data tables (Insights) scroll horizontally on narrow screens
- Prisma Studio is a desktop tool — no responsive constraints needed
- Marketing site is fully responsive

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site, documentation, community |
| Open-source user | Full Prisma ORM (Client, Migrate, Studio) — no account needed |
| Platform Free | 1 project, limited Accelerate queries, limited Pulse events |
| Platform Pro ($49/mo) | Multiple projects, higher Accelerate/Pulse limits, Insights |
| Platform Business | Pro + team management, SSO, priority support |
| Platform Enterprise | Custom limits, SLA, dedicated support, audit logs |
| Workspace roles | Admin (billing, members, all projects) → Developer (manage projects, environments) → Viewer (read-only) |

- Authentication: GitHub OAuth, Google OAuth, email/password (Platform)
- No auth for local tools: Prisma CLI/Studio run locally without authentication
- Database access: Prisma connects using standard database credentials (connection string)
- Accelerate: Uses API key for connection pooling/caching proxy
- Prisma Studio: Only accessible on localhost — not exposed publicly
- Schema security: Schema file should not be committed with production credentials (use env vars)
