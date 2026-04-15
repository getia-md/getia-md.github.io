---
brand: CircleCI
tagline: The world's best CI/CD platform for speed, reliability, and scale.
category: Developer Tools
website: https://circleci.com
---

# CircleCI — Information Architecture

## Overview

CircleCI is a continuous integration and delivery platform that automates software build, test, and deployment pipelines. The IA is organized around a **pipeline-centric workflow model** — code commits trigger Pipelines, which contain Workflows, which orchestrate Jobs, which run Steps on executors (Docker, Linux VM, macOS, Windows, ARM). The architecture emphasizes configurability via `.circleci/config.yml` and reusability via Orbs (shareable, versioned config packages). CircleCI's dashboard provides visibility into pipeline status, test results, build artifacts, and Insights (analytics). The platform supports both cloud-hosted and self-hosted (server) deployments.

## Site Map

```
app.circleci.com
├── / (Dashboard — recent pipelines)
├── /pipelines/{vcs}/{org}/{project} (Project pipelines list)
│   └── /{pipeline_number}
│       └── /workflows/{workflow_id}
│           └── /jobs/{job_number} (Job detail — steps, output, artifacts, tests)
├── /projects (All projects list)
├── /insights/{vcs}/{org}/{project} (Project analytics)
│   ├── /workflows (Workflow metrics)
│   └── /tests (Test metrics — flaky test detection)
├── /organization/{org_id}
│   ├── /settings
│   ├── /contexts (Shared secret contexts)
│   ├── /orbs (Organization orbs)
│   ├── /runners (Self-hosted runners)
│   └── /usage (Usage & billing)
├── /project/{vcs}/{org}/{project}/settings
│   ├── /environment-variables
│   ├── /ssh-keys
│   ├── /api-permissions
│   ├── /advanced
│   └── /triggers (Scheduled pipelines)
├── /orb-registry (Public orb marketplace)
│   └── /{namespace}/{orb_name} (Orb detail page)
├── /account
│   ├── /personal
│   ├── /tokens
│   └── /notifications
└── /auth
```

## Navigation Model

- **Primary navigation**: Left sidebar — Pipelines (dashboard), Projects, Insights, Organization settings
- **Pipeline drill-down**: Dashboard → Pipeline → Workflow (graph view) → Job → Steps (hierarchical drill-down)
- **Workflow graph**: Visual DAG (directed acyclic graph) showing job dependencies and status
- **Project navigation**: Within a project — Pipelines, Insights, Settings (tabs or sidebar)
- **Organization navigation**: Sidebar sections — Contexts, Self-Hosted Runners, Usage, Orbs, Settings
- **Orb registry**: Browse/search public orbs — separate discovery experience
- **Utility navigation**: Top-right — avatar → Account, Notifications, Tokens
- **Branch/PR filter**: Pipeline list filterable by branch (critical for monorepo and multi-branch workflows)

## Content Model

| Content Type | Structure | Ownership |
|---|---|---|
| Pipeline | Trigger (push, PR, schedule, API), pipeline number, commit, branch, workflows | Auto-triggered |
| Workflow | Name, jobs (DAG), status, duration, retries | Part of pipeline |
| Job | Name, executor (docker/vm), steps, output, artifacts, test results, resource class | Part of workflow |
| Step | Name, command, output log, duration, status | Part of job |
| Orb | Namespace, name, version, commands, jobs, executors, documentation | Public or org-private |
| Context | Named set of secrets, shared across projects within an org | Org-level |
| Environment Variable | Key-value, project-scoped, masked in output | Project-level |
| Artifact | File(s) produced by a job, downloadable, retained for configurable period | Part of job |
| Test Result | JUnit XML parsed results — pass/fail, duration, flaky detection | Part of job |
| Insight | Aggregated metrics — success rate, duration (p50/p95), throughput, credit usage | Analytics |

## User Flows

### Pipeline Triggered by Code Push
1. Developer pushes code to GitHub/GitLab/Bitbucket
2. CircleCI triggers Pipeline → reads `.circleci/config.yml`
3. Workflow(s) start → jobs execute in defined order/parallelism
4. Dashboard updates in real-time — job status badges (running, success, failed)
5. Workflow graph shows DAG with colored nodes
6. Click a job → see step-by-step output, test results, artifacts

### Investigating a Failed Build
1. Developer sees red pipeline on dashboard
2. Clicks Pipeline → Workflow graph shows which job(s) failed
3. Clicks failed job → scrolls to the failing step
4. Reads error output → identifies issue (test failure, build error, timeout)
5. Can SSH into the executor for interactive debugging (if enabled)
6. Fixes code → pushes → new pipeline runs

### Insights & Optimization
1. Team lead navigates to Insights → selects project
2. Views workflow metrics: success rate trend, duration trend (p50, p95), throughput
3. Identifies slowest workflows and most common failure points
4. Drills into test metrics → sees flaky tests (tests that intermittently fail)
5. Optimizes config: adds caching, parallelism, or resource class upgrades
6. Measures improvement in next sprint's metrics

### Using an Orb
1. Developer browses Orb Registry → finds relevant orb (e.g., `circleci/slack`)
2. Reads orb documentation: available commands, jobs, and parameters
3. Adds orb reference to config: `orbs: slack: circleci/slack@4.12.0`
4. Uses orb commands in workflow: `slack/notify` job after deployment
5. Orb auto-updates with version pinning

## URL / Route Structure

| Pattern | Description |
|---|---|
| `app.circleci.com/` | Dashboard |
| `app.circleci.com/pipelines/{vcs}/{org}/{project}` | Project pipelines |
| `app.circleci.com/pipelines/{vcs}/{org}/{project}/{number}` | Pipeline detail |
| `app.circleci.com/pipelines/{vcs}/{org}/{project}/{number}/workflows/{id}` | Workflow graph |
| `app.circleci.com/pipelines/{vcs}/{org}/{project}/{number}/workflows/{id}/jobs/{number}` | Job detail |
| `app.circleci.com/insights/{vcs}/{org}/{project}/workflows` | Workflow insights |
| `app.circleci.com/orb-registry/{namespace}/{name}` | Orb detail |
| `app.circleci.com/organization/{id}/contexts` | Contexts |
| `app.circleci.com/project/{vcs}/{org}/{project}/settings/*` | Project settings |

Deep hierarchical URLs reflecting Pipeline → Workflow → Job hierarchy. VCS type (github, bitbucket) in path.

## Search & Filter

- **Pipeline filtering**: Filter by branch (critical), status (success, failed, running), trigger type
- **Project search**: Search projects by name
- **Orb Registry search**: Full-text search across orb names, descriptions, categories
- **Job output search**: Search within step output logs (in-job)
- **Insights filtering**: Time range (7d, 30d, 90d), workflow name, branch
- **Test search**: Search test results by test name, filter by status (failed, flaky)
- **No cross-project pipeline search**: Each project's pipelines are independent

## Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| Desktop (>1280px) | Full sidebar + pipeline list/workflow graph + job detail panel |
| Desktop (1024-1280px) | Collapsible sidebar + full content |
| Tablet (768-1024px) | Sidebar as drawer + simplified workflow graph |
| Mobile (<768px) | Hamburger nav + pipeline list (simplified), workflow graph scrollable, job output full-width |

- Workflow DAG graph is the most challenging responsive element — zooms/pans on mobile, simplified layout
- Pipeline list shows key info (commit, branch, status, duration) at all sizes
- Job output logs are monospace with horizontal scroll
- Insights charts resize and may reduce data density on mobile
- Orb registry cards reflow from grid to single-column

## Access Control

| Role | Permissions |
|---|---|
| Anonymous | Marketing site, orb registry (public), docs |
| Free | 6,000 build minutes/mo (Linux), 30 concurrent jobs, limited macOS |
| Performance ($15/seat/mo) | Unlimited builds, all resource classes, Docker layer caching, test splitting, priority support |
| Scale | Performance + custom concurrency, self-hosted runners, audit logs, SSO |
| Server (self-hosted) | Full CircleCI on customer infrastructure |
| Org roles | Admin (settings, contexts, members) → All Members (view/trigger pipelines) |
| Context security | Restrict context access to specific security groups/teams |

- Authentication: GitHub OAuth, GitLab OAuth, Bitbucket OAuth (VCS-based)
- API tokens: Personal API tokens for CLI and API access; project tokens for read-only status badges
- Contexts: Org-level secret groups — restrict which projects/branches can access them
- SSH keys: Deploy keys and user keys for checkout and deployment
- IP ranges: Dedicated IP ranges for allowlisting (Performance+ plans)
- Secrets masking: Environment variables and context values are masked in build output
