---
brand: Replicate
tagline: Run and fine-tune open-source models. Deploy custom models at scale.
category: AI & ML
website: https://replicate.com
---

# Replicate — Information Architecture

## Overview

Replicate is a platform for running machine learning models via a simple API, eliminating the need for infrastructure management. The IA is organized as a **model marketplace and API console** — users discover models, test them via a web playground, and integrate them via REST API or client libraries. Each model page is both a demo and documentation hub, showing inputs, outputs, example runs, and API usage. Replicate supports community-contributed models (via Cog packaging), fine-tuning (training), and deployment scaling. The platform emphasizes developer experience: minimal friction from discovery to production API call.

## Site Map

```
replicate.com
├── / (Home — featured models, trending)
├── /explore (Browse models by category)
├── /models (Model search)
│   └── /{owner}/{model_name} (Model page — playground + API docs)
│       ├── /versions (Model version history)
│       ├── /api (API reference)
│       └── /examples (Community examples)
├── /collections (Curated model collections)
│   └── /{slug}
├── /deployments (User's scaled deployments)
│   └── /{deployment_name}
├── /trainings (Fine-tuning jobs)
│   └── /{training_id}
├── /predictions (Prediction history / logs)
│   └── /{prediction_id}
├── /dashboard (Usage, billing overview)
├── /account
│   ├── /api-tokens
│   ├── /billing
│   └── /settings
├── /docs (Documentation)
│   ├── /get-started
│   ├── /topics
│   └── /reference
└── /signin
```

## Navigation Model

- **Primary navigation**: Top bar — Explore, Docs, Pricing, Blog, Dashboard (signed in)
- **Model page tabs**: Playground (demo), API, Versions, Examples
- **User dashboard navigation**: Predictions, Trainings, Deployments, Models (my published models), Billing
- **Search**: Global search bar in top nav — searches models by name, description, tags
- **Utility navigation**: Top-right avatar → Dashboard, API Tokens, Settings, Sign out
- **Breadcrumbs**: Category → Owner → Model → Version
- **Mobile**: Hamburger menu; model playground adapts to vertical layout

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Model | Name, description, owner, cover image, input/output schema, playground, versions, run count | Owner (user/org) |
| Model Version | Cog container image, input schema, output schema, changelog | Part of model |
| Prediction | Input params, output (URL/JSON), status, duration, logs, cost | User-owned |
| Training | Base model, training data, output model version, hyperparameters, logs | User-owned |
| Deployment | Dedicated model instance with scaling config (min/max replicas, hardware) | User-owned |
| Collection | Curated group of models around a theme (e.g., "Image Upscalers") | Replicate-curated or user-created |
| Example | Community-shared input/output combinations | Community |

## User Flows

### Discovering & Running a Model
1. User browses Explore or searches for a capability (e.g., "background removal")
2. Clicks model → lands on playground with pre-filled example inputs
3. Adjusts inputs (upload image, set parameters) → clicks "Run"
4. Output renders (image, text, audio, video) in ~seconds to minutes
5. "API" tab shows exact curl/Python/JS code to replicate the call programmatically

### Deploying a Model to Production
1. User identifies a model they want to use at scale
2. Creates a Deployment with hardware selection (CPU, GPU type) and scaling config
3. Deployment gets a dedicated endpoint URL with guaranteed capacity
4. Autoscales between min and max replicas based on traffic
5. Monitors via Dashboard — latency, throughput, cost

### Publishing a Custom Model
1. User packages model using Cog (Docker-based ML packaging tool)
2. Defines input/output schema in `predict.py`
3. Pushes to Replicate: `cog push r8.im/{username}/{model_name}`
4. Model appears on their profile with auto-generated playground
5. Can be public (discoverable) or private

### Fine-Tuning
1. User selects a base model that supports training (e.g., SDXL, Llama)
2. Uploads training data (images for SDXL, text for LLMs)
3. Configures hyperparameters → starts training job
4. Training creates a new model version → testable in playground immediately
5. Deploy the fine-tuned version via API or Deployment

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Home |
| `/explore` | Browse models |
| `/{owner}/{model_name}` | Model page (playground) |
| `/{owner}/{model_name}/versions/{id}` | Specific version |
| `/{owner}/{model_name}/api` | API reference |
| `/collections/{slug}` | Curated collection |
| `/deployments/{name}` | Deployment management |
| `/predictions/{id}` | Prediction detail |
| `/trainings/{id}` | Training job detail |
| `/dashboard` | User dashboard |
| `/docs/{path}` | Documentation |

Owner/model URL pattern similar to GitHub. Predictions and trainings use unique IDs.

## Search & Filter

- **Model search**: Full-text search across model names, descriptions, tags
- **Category filters**: Text-to-Image, Image-to-Image, Text Generation, Audio, Video, etc.
- **Sort**: Most Popular (runs), Trending, Newest
- **Tags**: Language model, diffusion, upscaler, etc.
- **Hardware filter**: Filter by required hardware (CPU-only vs GPU)
- **Prediction search**: Filter own predictions by model, status, date range
- **No community ratings**: Popularity measured by run count, not user reviews

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1024px) | Full nav + model playground with input panel left, output right |
| Tablet (768-1024px) | Playground stacks vertically (inputs above, output below) |
| Mobile (<768px) | Hamburger nav, full-width playground (stacked), simplified API examples |

- Model playground inputs (file upload, sliders, text areas) adapt to full-width on mobile
- Output media (images, video) scale to viewport width
- API code examples have horizontal scroll with copy button
- Dashboard charts resize responsively

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Browse models, view playgrounds (no running) |
| Free (signed in) | Run models (pay-per-use), create predictions, publish models |
| Paid (usage-based) | All features, billed per compute-second by hardware type |
| Team | Shared billing, team API tokens, shared models and deployments |
| Enterprise | SSO, audit logs, VPC, dedicated support, SLA |

- Authentication: GitHub OAuth, Google OAuth, email/password
- Billing: Usage-based — charged per second of compute (CPU: ~$0.0001/s, GPU: $0.0005-0.003/s)
- API tokens: Bearer token authentication; tokens scoped to user/org
- Model visibility: Public (free to run, anyone can see) or Private (only owner can access)
- Rate limits: Concurrent prediction limits based on plan
