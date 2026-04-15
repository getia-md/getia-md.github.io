---
brand: Google AI Studio
tagline: Build with Gemini. Prototype, test, and deploy generative AI.
category: AI & ML
website: https://aistudio.google.com
---

# Google AI Studio — Information Architecture

## Overview

Google AI Studio (formerly MakerSuite) is Google's free, web-based developer tool for prototyping and building with Gemini models. The IA is organized as a **prompt development environment** with three core modes: Freeform (single-turn), Chat (multi-turn), and Structured (few-shot). Unlike the Anthropic Console which focuses on API management, AI Studio emphasizes prompt prototyping and fine-tuning workflows, serving as the on-ramp to the Gemini API and Vertex AI. Key features include multi-modal inputs (text, images, video, audio, code), model tuning, prompt gallery, and one-click export to Google Colab or Vertex AI.

## Site Map

```
aistudio.google.com
├── / (Home — recent prompts, quick start)
├── /prompts
│   ├── /new (New prompt editor)
│   └── /{prompt_id} (Saved prompt)
├── /library (Prompt gallery — templates and examples)
├── /tuning (Model tuning / fine-tuning)
│   ├── / (Tuned models list)
│   └── /{tuning_job_id} (Tuning job detail)
├── /apikey (API key management)
├── /plan (Usage & billing)
├── /settings
└── /auth
```

## Navigation Model

- **Primary navigation**: Left sidebar — Home (New Prompt), My Library, Prompt Gallery, Tuned Models, API Keys, Settings
- **Prompt editor navigation**: Top bar with model selector (Gemini 2.5 Pro, Gemini 2.5 Flash, etc.), prompt type tabs (Freeform, Structured, Chat)
- **Parameter panel**: Right sidebar in prompt editor — temperature, top-p, top-k, max output tokens, safety settings, stop sequences
- **Utility navigation**: Top-right — Google account avatar, Help, Feedback
- **Gallery navigation**: Browse prompt templates by category (Code, Creative, Data, Extract, Summarize, Transform)
- **Breadcrumbs**: Home → My Library → Prompt Name

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Freeform Prompt | Single text/multimodal input → single response, with model config | User-owned |
| Structured Prompt | Input/output column definitions + few-shot examples + test input | User-owned |
| Chat Prompt | System instruction + multi-turn conversation, with model config | User-owned |
| Prompt Template | Pre-built prompt with description, use case, example inputs | Google-curated |
| Tuned Model | Base model + training data + hyperparameters + tuning metrics | User-owned |
| API Key | Key string tied to Google Cloud project | User-owned |
| Safety Settings | Per-category thresholds (harassment, hate, sexual, dangerous) | Part of prompt config |

## User Flows

### Freeform Prompt Prototyping
1. User clicks "New Prompt" → Freeform mode opens
2. Selects model (Gemini 2.5 Pro, Flash, etc.)
3. Types prompt — can include text, paste images, upload files, record audio
4. Adjusts parameters in right panel (temperature, max tokens)
5. Clicks "Run" → response appears below
6. Clicks "Get Code" → generates Python, JavaScript, Kotlin, Swift, or curl code
7. Saves prompt to Library for later iteration

### Structured Prompt (Few-Shot)
1. User selects "Structured" mode
2. Defines input and output columns (e.g., "Product Description" → "Marketing Copy")
3. Adds few-shot examples in table format
4. Enters test input → model generates based on pattern
5. Can add system instructions for additional guidance
6. Export as API code or save to Library

### Model Tuning
1. User navigates to Tuned Models → "Create Tuned Model"
2. Selects base model (Gemini Flash)
3. Uploads training data (JSONL format with input/output pairs)
4. Configures hyperparameters (epochs, learning rate, batch size)
5. Starts tuning job → monitors progress (loss curves, metrics)
6. Tuned model available for use in prompts and via API

### Multi-Modal Input
1. User opens Freeform prompt
2. Clicks attachment → uploads image, video, or audio file
3. Types prompt referencing the uploaded media
4. Gemini analyzes the media and responds (e.g., "describe this image", "transcribe this audio")
5. Can combine multiple modalities in a single prompt

## URL / Route Structure

| Pattern | Description |
|---|---|
| `/` | Home dashboard |
| `/prompts/new` | New prompt editor |
| `/prompts/{uuid}` | Saved prompt |
| `/library` | User's saved prompts |
| `/gallery` | Prompt template gallery |
| `/tuning` | Tuned models list |
| `/tuning/{uuid}` | Tuning job detail |
| `/apikey` | API key management |
| `/plan` | Usage and billing |
| `/settings` | Account settings |

Simple flat route structure. UUIDs for user content. SPA with Google account integration.

## Search & Filter

- **Prompt Gallery search**: Search templates by keyword, filter by category (Code, Creative, Data, etc.)
- **My Library search**: Search saved prompts by name
- **No full-text prompt search**: Cannot search by prompt content
- **Tuned model filtering**: Filter by base model, creation date, status
- **Model selector**: Not a search, but a dropdown filtering available models by capability

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Sidebar + prompt editor (main) + parameter panel (right) — 3-column |
| Desktop (1024-1280px) | Sidebar collapsible + editor + parameter panel as overlay |
| Tablet (768-1024px) | Sidebar as drawer + full-width editor + parameters as bottom sheet |
| Mobile (<768px) | Functional but cramped — designed for desktop use |

- Prompt editor takes maximum available width for text editing
- Structured prompt table scrolls horizontally on narrow screens
- Parameter panel collapses to a floating button on small screens
- Gallery cards reflow from grid to single column
- File upload/media preview adapts to available width

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | No access (Google account required) |
| Free (Google account) | Full access to AI Studio — prompts, gallery, API keys, limited tuning |
| Pay-as-you-go | Higher rate limits, more tuning capacity, Vertex AI integration |

- Authentication: Google account (required)
- API keys: Tied to Google Cloud project; one-click creation from AI Studio
- Free tier: Generous free API usage (rate-limited, not usage-capped for most models)
- Safety settings: Configurable per-prompt; 4 harm categories with adjustable thresholds
- Data usage: API data not used for training by default (Google Cloud ToS)
- Geographic restrictions: Some features not available in all regions (EU data residency considerations)
- Tuning: Free tier includes limited tuning; advanced tuning on Vertex AI
