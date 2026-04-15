// ============================================
// getIA.md — Catalog Data & Interactive Logic
// ============================================

// Helper: get favicon URL from website domain
function favicon(domain) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

// Brand catalog with icons (using Google Favicon API for reliable real icons)
const brands = [
  // SaaS & Productivity
  { name: "Notion", slug: "notion", tagline: "All-in-one workspace. Block editor, databases, wikis.", category: "Productivity", icon: favicon("notion.so"), website: "https://notion.so" },
  { name: "Obsidian", slug: "obsidian", tagline: "Knowledge base with local-first markdown and graph view.", category: "Productivity", icon: favicon("obsidian.md"), website: "https://obsidian.md" },
  { name: "Linear", slug: "linear", tagline: "Streamlined issue tracking. Keyboard-first, real-time sync.", category: "Productivity", icon: favicon("linear.app"), website: "https://linear.app" },
  { name: "Jira", slug: "jira", tagline: "Enterprise project management. Scrum, Kanban, roadmaps.", category: "Productivity", icon: favicon("jira.atlassian.com"), website: "https://atlassian.com/jira" },
  { name: "Slack", slug: "slack", tagline: "Team messaging with channels, threads, and integrations.", category: "Productivity", icon: favicon("slack.com"), website: "https://slack.com" },
  { name: "Discord", slug: "discord", tagline: "Community platform with voice, video, and text channels.", category: "Productivity", icon: favicon("discord.com"), website: "https://discord.com" },
  { name: "Gmail", slug: "gmail", tagline: "Google email. Inbox categories, search operators, labels.", category: "Productivity", icon: favicon("gmail.com"), website: "https://gmail.com" },
  { name: "Superhuman", slug: "superhuman", tagline: "Fastest email. Keyboard-driven, AI triage, split inbox.", category: "Productivity", icon: favicon("superhuman.com"), website: "https://superhuman.com" },
  { name: "Google Calendar", slug: "google-calendar", tagline: "Scheduling with day/week/month views and smart suggestions.", category: "Productivity", icon: favicon("calendar.google.com"), website: "https://calendar.google.com" },
  { name: "Cal.com", slug: "cal-com", tagline: "Open-source scheduling. Booking pages, team availability.", category: "Productivity", icon: favicon("cal.com"), website: "https://cal.com" },
  { name: "Figma", slug: "figma", tagline: "Collaborative design. Multiplayer canvas, components, prototyping.", category: "Design", icon: favicon("figma.com"), website: "https://figma.com" },
  { name: "Canva", slug: "canva", tagline: "Template-first design for everyone. Drag-and-drop editor.", category: "Design", icon: favicon("canva.com"), website: "https://canva.com" },
  { name: "Airtable", slug: "airtable", tagline: "Spreadsheet-database hybrid. Multi-view, automations.", category: "Productivity", icon: favicon("airtable.com"), website: "https://airtable.com" },
  { name: "Dropbox", slug: "dropbox", tagline: "Cloud file storage with sync, sharing, and Paper docs.", category: "Productivity", icon: favicon("dropbox.com"), website: "https://dropbox.com" },
  { name: "Google Drive", slug: "google-drive", tagline: "Cloud storage integrated with Google Workspace.", category: "Productivity", icon: favicon("drive.google.com"), website: "https://drive.google.com" },
  { name: "1Password", slug: "1password", tagline: "Password manager. Vaults, secure sharing, Watchtower.", category: "Security", icon: favicon("1password.com"), website: "https://1password.com" },

  // Developer Tools
  { name: "GitHub", slug: "github", tagline: "Code hosting. Pull requests, Actions CI/CD, Copilot.", category: "Developer Tools", icon: favicon("github.com"), website: "https://github.com" },
  { name: "GitLab", slug: "gitlab", tagline: "DevSecOps platform. CI/CD, code review, security scanning.", category: "Developer Tools", icon: favicon("gitlab.com"), website: "https://gitlab.com" },
  { name: "Vercel", slug: "vercel", tagline: "Frontend cloud. Deploy, preview, ship web apps.", category: "Developer Tools", icon: favicon("vercel.com"), website: "https://vercel.com" },
  { name: "Stripe Dashboard", slug: "stripe-dashboard", tagline: "Payment developer console. API keys, logs, test mode.", category: "Developer Tools", icon: favicon("stripe.com"), website: "https://dashboard.stripe.com" },
  { name: "Supabase", slug: "supabase", tagline: "Open-source Firebase. Postgres, Auth, Storage, Realtime.", category: "Developer Tools", icon: favicon("supabase.com"), website: "https://supabase.com" },
  { name: "Postman", slug: "postman", tagline: "API development platform. Collections, testing, documentation.", category: "Developer Tools", icon: favicon("postman.com"), website: "https://postman.com" },
  { name: "Sentry", slug: "sentry", tagline: "Error monitoring. Stack traces, performance, release tracking.", category: "Developer Tools", icon: favicon("sentry.io"), website: "https://sentry.io" },
  { name: "Datadog", slug: "datadog", tagline: "Infrastructure monitoring. Metrics, traces, logs unified.", category: "Developer Tools", icon: favicon("datadoghq.com"), website: "https://datadoghq.com" },
  { name: "Terraform Cloud", slug: "terraform-cloud", tagline: "Infrastructure as code. Workspaces, runs, state management.", category: "Developer Tools", icon: favicon("hashicorp.com"), website: "https://app.terraform.io" },
  { name: "Raycast", slug: "raycast", tagline: "Productivity launcher. Extensions, AI, clipboard history.", category: "Developer Tools", icon: favicon("raycast.com"), website: "https://raycast.com" },

  // E-Commerce & Marketplace
  { name: "Shopify", slug: "shopify", tagline: "E-commerce platform. Online store, POS, payments.", category: "E-Commerce", icon: favicon("shopify.com"), website: "https://shopify.com" },
  { name: "Amazon", slug: "amazon", tagline: "Everything store. Search-driven, Prime, recommendations.", category: "E-Commerce", icon: favicon("amazon.com"), website: "https://amazon.com" },
  { name: "Airbnb", slug: "airbnb", tagline: "Travel marketplace. Homes, experiences, map + list search.", category: "Marketplace", icon: favicon("airbnb.com"), website: "https://airbnb.com" },
  { name: "Etsy", slug: "etsy", tagline: "Handmade & vintage marketplace. Shop small, unique goods.", category: "Marketplace", icon: favicon("etsy.com"), website: "https://etsy.com" },
  { name: "DoorDash", slug: "doordash", tagline: "Food delivery. Restaurant browse, real-time tracking.", category: "E-Commerce", icon: favicon("doordash.com"), website: "https://doordash.com" },
  { name: "Uber Eats", slug: "uber-eats", tagline: "Food ordering. Quick commerce, restaurant discovery.", category: "E-Commerce", icon: favicon("ubereats.com"), website: "https://ubereats.com" },
  { name: "eBay", slug: "ebay", tagline: "Auction & fixed-price marketplace. Bidding, seller ratings.", category: "Marketplace", icon: favicon("ebay.com"), website: "https://ebay.com" },
  { name: "Kickstarter", slug: "kickstarter", tagline: "Crowdfunding. Campaign pages, reward tiers, stretch goals.", category: "Marketplace", icon: favicon("kickstarter.com"), website: "https://kickstarter.com" },
  { name: "StockX", slug: "stockx", tagline: "Sneaker & streetwear marketplace. Bid/ask, authentication.", category: "Marketplace", icon: favicon("stockx.com"), website: "https://stockx.com" },
  { name: "Instacart", slug: "instacart", tagline: "Grocery delivery. Store browse, real-time substitutions.", category: "E-Commerce", icon: favicon("instacart.com"), website: "https://instacart.com" },

  // Content & Media
  { name: "YouTube", slug: "youtube", tagline: "Video platform. Creator studio, Shorts, recommendations.", category: "Media", icon: favicon("youtube.com"), website: "https://youtube.com" },
  { name: "Netflix", slug: "netflix", tagline: "Streaming. Profiles, continue watching, personalized rows.", category: "Media", icon: favicon("netflix.com"), website: "https://netflix.com" },
  { name: "Spotify", slug: "spotify", tagline: "Music streaming. Playlists, Discover Weekly, Connect.", category: "Media", icon: favicon("spotify.com"), website: "https://spotify.com" },
  { name: "Medium", slug: "medium", tagline: "Writing platform. Clean reading, publications, claps.", category: "Media", icon: favicon("medium.com"), website: "https://medium.com" },
  { name: "Substack", slug: "substack", tagline: "Newsletter platform. Subscriber-first, paid subscriptions.", category: "Media", icon: favicon("substack.com"), website: "https://substack.com" },
  { name: "Wikipedia", slug: "wikipedia", tagline: "Free encyclopedia. Collaborative editing, citations, infoboxes.", category: "Media", icon: favicon("wikipedia.org"), website: "https://wikipedia.org" },
  { name: "Kindle", slug: "kindle", tagline: "E-reading. Library, highlights, synced progress.", category: "Media", icon: favicon("amazon.com"), website: "https://read.amazon.com" },
  { name: "Apple Podcasts", slug: "apple-podcasts", tagline: "Podcast directory. Subscribe, chapters, transcripts.", category: "Media", icon: favicon("apple.com"), website: "https://podcasts.apple.com" },
  { name: "Twitch", slug: "twitch", tagline: "Live streaming. Chat, subscriptions, raids, clips.", category: "Media", icon: favicon("twitch.tv"), website: "https://twitch.tv" },
  { name: "TikTok", slug: "tiktok", tagline: "Short video. For You feed, duets, sounds, effects.", category: "Media", icon: favicon("tiktok.com"), website: "https://tiktok.com" },

  // Social & Community
  { name: "Twitter / X", slug: "twitter", tagline: "Microblogging. Timeline, threads, Spaces, Communities.", category: "Social", icon: favicon("x.com"), website: "https://x.com" },
  { name: "Reddit", slug: "reddit", tagline: "Community forums. Subreddits, voting, nested comments.", category: "Social", icon: favicon("reddit.com"), website: "https://reddit.com" },
  { name: "Instagram", slug: "instagram", tagline: "Photo & video sharing. Feed, Stories, Reels, DMs.", category: "Social", icon: favicon("instagram.com"), website: "https://instagram.com" },
  { name: "WhatsApp", slug: "whatsapp", tagline: "End-to-end encrypted messaging. Groups, calls, Status.", category: "Social", icon: favicon("whatsapp.com"), website: "https://whatsapp.com" },
  { name: "Telegram", slug: "telegram", tagline: "Cloud messaging. Channels, bots, file sharing, stickers.", category: "Social", icon: favicon("telegram.org"), website: "https://telegram.org" },
  { name: "Threads", slug: "threads", tagline: "Text-based social by Meta. Conversations, reposts.", category: "Social", icon: favicon("threads.net"), website: "https://threads.net" },
  { name: "Stack Overflow", slug: "stack-overflow", tagline: "Developer Q&A. Voting, accepted answers, reputation.", category: "Social", icon: favicon("stackoverflow.com"), website: "https://stackoverflow.com" },
  { name: "Mastodon", slug: "mastodon", tagline: "Decentralized social. Federated servers, toots, boosts.", category: "Social", icon: favicon("joinmastodon.org"), website: "https://joinmastodon.org" },

  // Finance & Fintech
  { name: "Robinhood", slug: "robinhood", tagline: "Commission-free trading. Simplicity-first, fractional shares.", category: "Fintech", icon: favicon("robinhood.com"), website: "https://robinhood.com" },
  { name: "Coinbase", slug: "coinbase", tagline: "Crypto exchange. Buy, sell, stake, wallet, NFTs.", category: "Fintech", icon: favicon("coinbase.com"), website: "https://coinbase.com" },
  { name: "Revolut", slug: "revolut", tagline: "Digital banking. Multi-currency, crypto, budgeting.", category: "Fintech", icon: favicon("revolut.com"), website: "https://revolut.com" },
  { name: "Wise", slug: "wise", tagline: "International money transfer. Real exchange rate, multi-currency.", category: "Fintech", icon: favicon("wise.com"), website: "https://wise.com" },
  { name: "Stripe", slug: "stripe", tagline: "Payment infrastructure. APIs, checkout, billing, Connect.", category: "Fintech", icon: favicon("stripe.com"), website: "https://stripe.com" },
  { name: "Square", slug: "square", tagline: "POS & payments. In-person, online, invoices, banking.", category: "Fintech", icon: favicon("squareup.com"), website: "https://squareup.com" },
  { name: "Lemonade", slug: "lemonade", tagline: "AI-powered insurance. Instant quotes, claims via chat.", category: "Fintech", icon: favicon("lemonade.com"), website: "https://lemonade.com" },
  { name: "Plaid", slug: "plaid", tagline: "Financial data API. Bank linking, transactions, identity.", category: "Fintech", icon: favicon("plaid.com"), website: "https://plaid.com" },

  // Health & Education
  { name: "Strava", slug: "strava", tagline: "Fitness tracking. GPS activities, segments, social.", category: "Health", icon: favicon("strava.com"), website: "https://strava.com" },
  { name: "MyFitnessPal", slug: "myfitnesspal", tagline: "Nutrition tracker. Food diary, barcode scan, macros.", category: "Health", icon: favicon("myfitnesspal.com"), website: "https://myfitnesspal.com" },
  { name: "Teladoc", slug: "teladoc", tagline: "Virtual healthcare. Video visits, prescriptions, mental health.", category: "Health", icon: favicon("teladoc.com"), website: "https://teladoc.com" },
  { name: "Coursera", slug: "coursera", tagline: "Online learning. University courses, certificates, degrees.", category: "Education", icon: favicon("coursera.org"), website: "https://coursera.org" },
  { name: "Duolingo", slug: "duolingo", tagline: "Language learning. Gamified lessons, streaks, leaderboards.", category: "Education", icon: favicon("duolingo.com"), website: "https://duolingo.com" },
  { name: "BambooHR", slug: "bamboohr", tagline: "HR platform. Employee directory, time-off, onboarding.", category: "Business", icon: favicon("bamboohr.com"), website: "https://bamboohr.com" },
  { name: "Gusto", slug: "gusto", tagline: "Payroll & HR. Payroll runs, benefits, hiring.", category: "Business", icon: favicon("gusto.com"), website: "https://gusto.com" },
  { name: "ClassDojo", slug: "classdojo", tagline: "School communication. Points, portfolios, parent-teacher.", category: "Education", icon: favicon("classdojo.com"), website: "https://classdojo.com" },

  // Lifestyle & Services
  { name: "Uber", slug: "uber", tagline: "Ride-hailing. Real-time map, driver matching, surge pricing.", category: "Lifestyle", icon: favicon("uber.com"), website: "https://uber.com" },
  { name: "Booking.com", slug: "booking-com", tagline: "Travel booking. Hotels, flights, map search, reviews.", category: "Lifestyle", icon: favicon("booking.com"), website: "https://booking.com" },
  { name: "Google Maps", slug: "google-maps", tagline: "Maps & navigation. Places, reviews, Street View, transit.", category: "Lifestyle", icon: favicon("maps.google.com"), website: "https://maps.google.com" },
  { name: "Zillow", slug: "zillow", tagline: "Real estate. Listings, Zestimate, map search, agent finder.", category: "Lifestyle", icon: favicon("zillow.com"), website: "https://zillow.com" },
  { name: "OpenTable", slug: "opentable", tagline: "Restaurant reservations. Table booking, reviews, rewards.", category: "Lifestyle", icon: favicon("opentable.com"), website: "https://opentable.com" },
  { name: "Eventbrite", slug: "eventbrite", tagline: "Event ticketing. Discovery, registration, check-in.", category: "Lifestyle", icon: favicon("eventbrite.com"), website: "https://eventbrite.com" },
  { name: "LinkedIn", slug: "linkedin", tagline: "Professional network. Jobs, feed, messaging, recruiter.", category: "Lifestyle", icon: favicon("linkedin.com"), website: "https://linkedin.com" },
  { name: "Tinder", slug: "tinder", tagline: "Dating app. Swipe, match, chat, passport.", category: "Lifestyle", icon: favicon("tinder.com"), website: "https://tinder.com" },
  { name: "Grab", slug: "grab", tagline: "Super app. Rides, food, payments, deliveries.", category: "Lifestyle", icon: favicon("grab.com"), website: "https://grab.com" },
  { name: "Home Assistant", slug: "home-assistant", tagline: "Smart home. Device control, automations, dashboards.", category: "IoT", icon: favicon("home-assistant.io"), website: "https://home-assistant.io" },

  // AI & ML
  { name: "ChatGPT", slug: "chatgpt", tagline: "AI chatbot. GPTs, Canvas, memory, plugins.", category: "AI", icon: favicon("chat.openai.com"), website: "https://chat.openai.com" },
  { name: "Claude", slug: "claude", tagline: "Anthropic AI. Projects, Artifacts, long context.", category: "AI", icon: favicon("claude.ai"), website: "https://claude.ai" },
  { name: "Perplexity", slug: "perplexity", tagline: "AI search engine. Citations, Focus modes, Pro Search.", category: "AI", icon: favicon("perplexity.ai"), website: "https://perplexity.ai" },
  { name: "Midjourney", slug: "midjourney", tagline: "AI image generation. /imagine, variations, upscale.", category: "AI", icon: favicon("midjourney.com"), website: "https://midjourney.com" },
  { name: "Hugging Face", slug: "hugging-face", tagline: "ML model hub. Spaces, datasets, inference API.", category: "AI", icon: favicon("huggingface.co"), website: "https://huggingface.co" },
  { name: "Replicate", slug: "replicate", tagline: "Run ML models via API. Model marketplace, predictions.", category: "AI", icon: favicon("replicate.com"), website: "https://replicate.com" },
  { name: "Runway", slug: "runway", tagline: "AI video generation. Gen-2, motion brush, green screen.", category: "AI", icon: favicon("runwayml.com"), website: "https://runwayml.com" },
  { name: "Jasper", slug: "jasper", tagline: "AI marketing content. Brand voice, campaigns, templates.", category: "AI", icon: favicon("jasper.ai"), website: "https://jasper.ai" },
  { name: "Cursor", slug: "cursor", tagline: "AI code editor. Cmd+K, Composer, Tab completion.", category: "AI", icon: favicon("cursor.com"), website: "https://cursor.com" },
  { name: "v0", slug: "v0", tagline: "AI UI generator by Vercel. Prompt to React components.", category: "AI", icon: favicon("v0.dev"), website: "https://v0.dev" },
  { name: "Anthropic Console", slug: "anthropic-console", tagline: "API playground, Workbench, usage, billing.", category: "AI", icon: favicon("console.anthropic.com"), website: "https://console.anthropic.com" },
  { name: "Google AI Studio", slug: "google-ai-studio", tagline: "Gemini API playground, prompts, tuning.", category: "AI", icon: favicon("aistudio.google.com"), website: "https://aistudio.google.com" },
  { name: "Stability AI", slug: "stability-ai", tagline: "Stable Diffusion, DreamStudio, image generation.", category: "AI", icon: favicon("stability.ai"), website: "https://stability.ai" },
  { name: "ElevenLabs", slug: "elevenlabs", tagline: "AI voice synthesis, voice cloning, dubbing.", category: "AI", icon: favicon("elevenlabs.io"), website: "https://elevenlabs.io" },
  { name: "Descript", slug: "descript", tagline: "AI video/audio editor. Transcript-based editing.", category: "AI", icon: favicon("descript.com"), website: "https://descript.com" },

  // Developer Tools 2
  { name: "Netlify", slug: "netlify", tagline: "JAMstack hosting. Deploy previews, forms, functions.", category: "Developer Tools", icon: favicon("netlify.com"), website: "https://netlify.com" },
  { name: "Cloudflare", slug: "cloudflare", tagline: "CDN, Workers, Pages, R2, D1, Zero Trust.", category: "Developer Tools", icon: favicon("cloudflare.com"), website: "https://cloudflare.com" },
  { name: "Docker Hub", slug: "docker-hub", tagline: "Container registry. Official images, automated builds.", category: "Developer Tools", icon: favicon("hub.docker.com"), website: "https://hub.docker.com" },
  { name: "npm", slug: "npm", tagline: "Node package registry. Package pages, search, stats.", category: "Developer Tools", icon: favicon("npmjs.com"), website: "https://npmjs.com" },
  { name: "PlanetScale", slug: "planetscale", tagline: "Serverless MySQL. Branching, deploy requests.", category: "Developer Tools", icon: favicon("planetscale.com"), website: "https://planetscale.com" },
  { name: "Neon", slug: "neon", tagline: "Serverless Postgres. Branching, autoscaling.", category: "Developer Tools", icon: favicon("neon.tech"), website: "https://neon.tech" },
  { name: "Railway", slug: "railway", tagline: "Deploy anything. Project canvas, logs, metrics.", category: "Developer Tools", icon: favicon("railway.app"), website: "https://railway.app" },
  { name: "Render", slug: "render", tagline: "Cloud hosting. Blueprints, auto-deploy, managed DB.", category: "Developer Tools", icon: favicon("render.com"), website: "https://render.com" },
  { name: "Fly.io", slug: "fly-io", tagline: "Edge compute. Machines API, global deployment.", category: "Developer Tools", icon: favicon("fly.io"), website: "https://fly.io" },
  { name: "CircleCI", slug: "circleci", tagline: "CI/CD pipelines. Orbs, insights, parallelism.", category: "Developer Tools", icon: favicon("circleci.com"), website: "https://circleci.com" },
  { name: "Grafana", slug: "grafana", tagline: "Dashboards. Prometheus, Loki, alerting, plugins.", category: "Developer Tools", icon: favicon("grafana.com"), website: "https://grafana.com" },
  { name: "LaunchDarkly", slug: "launchdarkly", tagline: "Feature flags. Targeting, experiments, rollouts.", category: "Developer Tools", icon: favicon("launchdarkly.com"), website: "https://launchdarkly.com" },
  { name: "Prisma", slug: "prisma", tagline: "ORM. Schema, migrations, Prisma Studio.", category: "Developer Tools", icon: favicon("prisma.io"), website: "https://prisma.io" },
  { name: "Retool", slug: "retool", tagline: "Internal tools builder. Drag-and-drop, queries.", category: "Developer Tools", icon: favicon("retool.com"), website: "https://retool.com" },
  { name: "Expo", slug: "expo", tagline: "React Native framework. EAS Build, OTA updates.", category: "Developer Tools", icon: favicon("expo.dev"), website: "https://expo.dev" },

  // Productivity 2
  { name: "Asana", slug: "asana", tagline: "Work management. My Tasks, Timeline, Portfolios, Goals.", category: "Productivity", icon: favicon("asana.com"), website: "https://asana.com" },
  { name: "Monday.com", slug: "monday", tagline: "Work OS. Colorful boards, automations, dashboards.", category: "Productivity", icon: favicon("monday.com"), website: "https://monday.com" },
  { name: "ClickUp", slug: "clickup", tagline: "All-in-one productivity. Spaces/Folders/Lists hierarchy.", category: "Productivity", icon: favicon("clickup.com"), website: "https://clickup.com" },
  { name: "Trello", slug: "trello", tagline: "Kanban boards. Power-Ups, Butler automation.", category: "Productivity", icon: favicon("trello.com"), website: "https://trello.com" },
  { name: "Todoist", slug: "todoist", tagline: "Task manager. Natural language input, Karma, filters.", category: "Productivity", icon: favicon("todoist.com"), website: "https://todoist.com" },
  { name: "Miro", slug: "miro", tagline: "Online whiteboard. Templates, sticky notes, real-time.", category: "Productivity", icon: favicon("miro.com"), website: "https://miro.com" },
  { name: "Loom", slug: "loom", tagline: "Async video messaging. Screen recording, viewer insights.", category: "Productivity", icon: favicon("loom.com"), website: "https://loom.com" },
  { name: "Calendly", slug: "calendly", tagline: "Scheduling. Event types, round-robin, workflows.", category: "Productivity", icon: favicon("calendly.com"), website: "https://calendly.com" },
  { name: "Zapier", slug: "zapier", tagline: "Automation. Zaps, 6000+ app integrations.", category: "Productivity", icon: favicon("zapier.com"), website: "https://zapier.com" },
  { name: "Make", slug: "make", tagline: "Visual automation. Scenarios, modules, data mapping.", category: "Productivity", icon: favicon("make.com"), website: "https://make.com" },
  { name: "Coda", slug: "coda", tagline: "Doc-powered apps. Formulas, Packs, publishing.", category: "Productivity", icon: favicon("coda.io"), website: "https://coda.io" },
  { name: "Bear", slug: "bear", tagline: "Markdown notes. Tags, nested tags, focus mode.", category: "Productivity", icon: favicon("bear.app"), website: "https://bear.app" },
  { name: "Things 3", slug: "things", tagline: "GTD task manager. Areas, Projects, Today view.", category: "Productivity", icon: favicon("culturedcode.com"), website: "https://culturedcode.com/things" },
  { name: "Craft", slug: "craft", tagline: "Beautiful docs. Blocks, cards, AI assistant.", category: "Productivity", icon: favicon("craft.do"), website: "https://craft.do" },
  { name: "Basecamp", slug: "basecamp", tagline: "Project management. Hill Charts, Campfire, Lineup.", category: "Productivity", icon: favicon("basecamp.com"), website: "https://basecamp.com" },

  // Business SaaS
  { name: "Intercom", slug: "intercom", tagline: "Customer messaging. Fin AI, inbox, product tours.", category: "Business", icon: favicon("intercom.com"), website: "https://intercom.com" },
  { name: "HubSpot", slug: "hubspot", tagline: "CRM platform. Marketing, Sales, Service, CMS Hubs.", category: "Business", icon: favicon("hubspot.com"), website: "https://hubspot.com" },
  { name: "Salesforce", slug: "salesforce", tagline: "Enterprise CRM. Lightning, AppExchange, Einstein AI.", category: "Business", icon: favicon("salesforce.com"), website: "https://salesforce.com" },
  { name: "Mailchimp", slug: "mailchimp", tagline: "Email marketing. Audiences, automations, landing pages.", category: "Business", icon: favicon("mailchimp.com"), website: "https://mailchimp.com" },
  { name: "Zendesk", slug: "zendesk", tagline: "Customer service. Ticketing, Guide, Chat, Talk.", category: "Business", icon: favicon("zendesk.com"), website: "https://zendesk.com" },
  { name: "Freshdesk", slug: "freshdesk", tagline: "Helpdesk. Freddy AI, ticket dispatch, SLA.", category: "Business", icon: favicon("freshdesk.com"), website: "https://freshdesk.com" },
  { name: "Segment", slug: "segment", tagline: "Customer data platform. Sources, destinations, protocols.", category: "Business", icon: favicon("segment.com"), website: "https://segment.com" },
  { name: "Amplitude", slug: "amplitude", tagline: "Product analytics. Behavioral cohorts, experiments.", category: "Business", icon: favicon("amplitude.com"), website: "https://amplitude.com" },
  { name: "Mixpanel", slug: "mixpanel", tagline: "Event analytics. Funnels, flows, retention charts.", category: "Business", icon: favicon("mixpanel.com"), website: "https://mixpanel.com" },
  { name: "Hotjar", slug: "hotjar", tagline: "Heatmaps, session recordings, surveys, feedback.", category: "Business", icon: favicon("hotjar.com"), website: "https://hotjar.com" },
  { name: "Twilio", slug: "twilio", tagline: "Communications API. SMS, Voice, Video, Flex.", category: "Business", icon: favicon("twilio.com"), website: "https://twilio.com" },
  { name: "SendGrid", slug: "sendgrid", tagline: "Transactional email API. Templates, analytics.", category: "Business", icon: favicon("sendgrid.com"), website: "https://sendgrid.com" },
  { name: "Braze", slug: "braze", tagline: "Customer engagement. Canvas flows, push/email/in-app.", category: "Business", icon: favicon("braze.com"), website: "https://braze.com" },
  { name: "Looker", slug: "looker", tagline: "BI platform. LookML, Explores, embedded analytics.", category: "Business", icon: favicon("looker.com"), website: "https://looker.com" },
  { name: "Tableau", slug: "tableau", tagline: "Data visualization. Worksheets, stories, Tableau Public.", category: "Business", icon: favicon("tableau.com"), website: "https://tableau.com" },

  // E-Commerce & Fintech 2
  { name: "Klarna", slug: "klarna", tagline: "Buy now pay later. 4 installments, Klarna app.", category: "Fintech", icon: favicon("klarna.com"), website: "https://klarna.com" },
  { name: "Affirm", slug: "affirm", tagline: "BNPL. Transparent pricing, no late fees.", category: "Fintech", icon: favicon("affirm.com"), website: "https://affirm.com" },
  { name: "Venmo", slug: "venmo", tagline: "P2P payments. Social feed, Venmo card, business.", category: "Fintech", icon: favicon("venmo.com"), website: "https://venmo.com" },
  { name: "Cash App", slug: "cashapp", tagline: "P2P, Bitcoin, Cash Card, Boost rewards.", category: "Fintech", icon: favicon("cash.app"), website: "https://cash.app" },
  { name: "Wealthfront", slug: "wealthfront", tagline: "Robo-advisor. Automated investing, tax-loss harvesting.", category: "Fintech", icon: favicon("wealthfront.com"), website: "https://wealthfront.com" },
  { name: "Betterment", slug: "betterment", tagline: "Goal-based investing. Robo-advisor, tax coordination.", category: "Fintech", icon: favicon("betterment.com"), website: "https://betterment.com" },
  { name: "Mercari", slug: "mercari", tagline: "C2C marketplace. Shipping labels, authentication.", category: "Marketplace", icon: favicon("mercari.com"), website: "https://mercari.com" },
  { name: "Depop", slug: "depop", tagline: "Gen-Z fashion resale. Social shopping, explore.", category: "Marketplace", icon: favicon("depop.com"), website: "https://depop.com" },
  { name: "Poshmark", slug: "poshmark", tagline: "Social commerce. Posh Parties, offers, bundles.", category: "Marketplace", icon: favicon("poshmark.com"), website: "https://poshmark.com" },
  { name: "Fiverr", slug: "fiverr", tagline: "Freelance marketplace. Gigs, packages, Fiverr Pro.", category: "Marketplace", icon: favicon("fiverr.com"), website: "https://fiverr.com" },
  { name: "Upwork", slug: "upwork", tagline: "Freelance platform. Proposals, contracts, Connects.", category: "Marketplace", icon: favicon("upwork.com"), website: "https://upwork.com" },
  { name: "Gumroad", slug: "gumroad", tagline: "Sell digital products. Simple checkout, subscriptions.", category: "E-Commerce", icon: favicon("gumroad.com"), website: "https://gumroad.com" },
  { name: "Lemon Squeezy", slug: "lemonsqueezy", tagline: "Digital commerce. Managed tax, subscriptions.", category: "E-Commerce", icon: favicon("lemonsqueezy.com"), website: "https://lemonsqueezy.com" },
  { name: "WooCommerce", slug: "woocommerce", tagline: "WordPress e-commerce. Extensions, self-hosted.", category: "E-Commerce", icon: favicon("woocommerce.com"), website: "https://woocommerce.com" },
  { name: "BigCommerce", slug: "bigcommerce", tagline: "Enterprise e-commerce. Headless, multi-storefront.", category: "E-Commerce", icon: favicon("bigcommerce.com"), website: "https://bigcommerce.com" },

  // Content & Media 2
  { name: "Vimeo", slug: "vimeo", tagline: "Professional video hosting. OTT, live streaming.", category: "Media", icon: favicon("vimeo.com"), website: "https://vimeo.com" },
  { name: "SoundCloud", slug: "soundcloud", tagline: "Independent music. Waveform player, reposts.", category: "Media", icon: favicon("soundcloud.com"), website: "https://soundcloud.com" },
  { name: "Audible", slug: "audible", tagline: "Audiobooks. Credits, Whispersync, Plus catalog.", category: "Media", icon: favicon("audible.com"), website: "https://audible.com" },
  { name: "Pocket", slug: "pocket", tagline: "Read-it-later. Tags, highlights, recommendations.", category: "Media", icon: favicon("getpocket.com"), website: "https://getpocket.com" },
  { name: "Feedly", slug: "feedly", tagline: "RSS reader. AI feeds, boards, Leo AI assistant.", category: "Media", icon: favicon("feedly.com"), website: "https://feedly.com" },
  { name: "Flipboard", slug: "flipboard", tagline: "Magazine-style news. Flip animation, Storyboards.", category: "Media", icon: favicon("flipboard.com"), website: "https://flipboard.com" },
  { name: "Dev.to", slug: "devto", tagline: "Developer community. Articles, listings, Forem.", category: "Media", icon: favicon("dev.to"), website: "https://dev.to" },
  { name: "Hashnode", slug: "hashnode", tagline: "Developer blogging. Custom domain, series, newsletter.", category: "Media", icon: favicon("hashnode.com"), website: "https://hashnode.com" },
  { name: "Ghost", slug: "ghost", tagline: "Publishing platform. Memberships, newsletters, open-source.", category: "Media", icon: favicon("ghost.org"), website: "https://ghost.org" },
  { name: "WordPress", slug: "wordpress", tagline: "CMS. Themes, plugins, Gutenberg editor.", category: "Media", icon: favicon("wordpress.com"), website: "https://wordpress.com" },
  { name: "Webflow", slug: "webflow", tagline: "Visual web builder. CMS, interactions, hosting.", category: "Design", icon: favicon("webflow.com"), website: "https://webflow.com" },
  { name: "Framer", slug: "framer", tagline: "Website builder. Components, CMS, animations.", category: "Design", icon: favicon("framer.com"), website: "https://framer.com" },
  { name: "Sketch", slug: "sketch", tagline: "Mac design tool. Symbols, Libraries, Cloud.", category: "Design", icon: favicon("sketch.com"), website: "https://sketch.com" },
  { name: "InVision", slug: "invision", tagline: "Design prototyping. Freehand, DSM, collaboration.", category: "Design", icon: favicon("invisionapp.com"), website: "https://invisionapp.com" },
  { name: "Adobe Creative Cloud", slug: "adobe-cc", tagline: "Photoshop, Illustrator, Premiere, Creative Cloud.", category: "Design", icon: favicon("adobe.com"), website: "https://adobe.com" },

  // Social & Communication 2
  { name: "Signal", slug: "signal", tagline: "Encrypted messaging. Disappearing messages, sealed sender.", category: "Social", icon: favicon("signal.org"), website: "https://signal.org" },
  { name: "Snapchat", slug: "snapchat", tagline: "Ephemeral stories. Snap Map, Spotlight, AR lenses.", category: "Social", icon: favicon("snapchat.com"), website: "https://snapchat.com" },
  { name: "Pinterest", slug: "pinterest", tagline: "Visual discovery. Pins, boards, shopping, Lens.", category: "Social", icon: favicon("pinterest.com"), website: "https://pinterest.com" },
  { name: "Clubhouse", slug: "clubhouse", tagline: "Drop-in audio. Rooms, clubs, replays.", category: "Social", icon: favicon("joinclubhouse.com"), website: "https://joinclubhouse.com" },
  { name: "BeReal", slug: "bereal", tagline: "Daily photo. Dual camera, 2-min window, RealMojis.", category: "Social", icon: favicon("bereal.com"), website: "https://bereal.com" },
  { name: "Bluesky", slug: "bluesky", tagline: "Decentralized social. AT Protocol, custom feeds.", category: "Social", icon: favicon("bsky.app"), website: "https://bsky.app" },
  { name: "Quora", slug: "quora", tagline: "Q&A platform. Spaces, Poe AI, monetization.", category: "Social", icon: favicon("quora.com"), website: "https://quora.com" },
  { name: "Hacker News", slug: "hacker-news", tagline: "Tech news. Minimal UI, karma, Show HN.", category: "Social", icon: favicon("news.ycombinator.com"), website: "https://news.ycombinator.com" },
  { name: "Product Hunt", slug: "producthunt", tagline: "Product launches. Upvotes, daily leaderboard.", category: "Social", icon: favicon("producthunt.com"), website: "https://producthunt.com" },
  { name: "Dribbble", slug: "dribbble", tagline: "Design showcase. Shots, rebounds, hiring.", category: "Social", icon: favicon("dribbble.com"), website: "https://dribbble.com" },
  { name: "Behance", slug: "behance", tagline: "Creative portfolio. Projects, moodboards, Adobe.", category: "Social", icon: favicon("behance.net"), website: "https://behance.net" },
  { name: "Zoom", slug: "zoom", tagline: "Video meetings. Rooms, Webinars, Phone, Team Chat.", category: "Productivity", icon: favicon("zoom.us"), website: "https://zoom.us" },
  { name: "Microsoft Teams", slug: "ms-teams", tagline: "Chat, channels, meetings, apps, M365 integration.", category: "Productivity", icon: favicon("teams.microsoft.com"), website: "https://teams.microsoft.com" },
  { name: "Google Meet", slug: "google-meet", tagline: "Video calls. Companion mode, hand raise, captions.", category: "Productivity", icon: favicon("meet.google.com"), website: "https://meet.google.com" },
  { name: "Gather", slug: "gather", tagline: "Virtual office. Spatial video, customizable maps.", category: "Productivity", icon: favicon("gather.town"), website: "https://gather.town" },

  // Health, Education, Lifestyle 2
  { name: "Headspace", slug: "headspace", tagline: "Meditation, sleep, focus, mindfulness courses.", category: "Health", icon: favicon("headspace.com"), website: "https://headspace.com" },
  { name: "Calm", slug: "calm", tagline: "Meditation, Sleep Stories, music, Daily Calm.", category: "Health", icon: favicon("calm.com"), website: "https://calm.com" },
  { name: "Peloton", slug: "peloton", tagline: "Connected fitness. Live classes, leaderboard, metrics.", category: "Health", icon: favicon("onepeloton.com"), website: "https://onepeloton.com" },
  { name: "Noom", slug: "noom", tagline: "Weight management. Psychology-based, food logging.", category: "Health", icon: favicon("noom.com"), website: "https://noom.com" },
  { name: "Oura", slug: "oura", tagline: "Health tracking ring. Sleep score, readiness, activity.", category: "Health", icon: favicon("ouraring.com"), website: "https://ouraring.com" },
  { name: "Khan Academy", slug: "khan-academy", tagline: "Free education. Mastery learning, Khanmigo AI.", category: "Education", icon: favicon("khanacademy.org"), website: "https://khanacademy.org" },
  { name: "Skillshare", slug: "skillshare", tagline: "Creative classes. Projects, workshops.", category: "Education", icon: favicon("skillshare.com"), website: "https://skillshare.com" },
  { name: "Udemy", slug: "udemy", tagline: "Course marketplace. Instructor-created, ratings.", category: "Education", icon: favicon("udemy.com"), website: "https://udemy.com" },
  { name: "edX", slug: "edx", tagline: "University MOOCs. MicroMasters, professional certificates.", category: "Education", icon: favicon("edx.org"), website: "https://edx.org" },
  { name: "Notion Calendar", slug: "notion-calendar", tagline: "Calendar + Notion integration, scheduling links.", category: "Productivity", icon: favicon("calendar.notion.so"), website: "https://calendar.notion.so" },
  { name: "Lyft", slug: "lyft", tagline: "Ride-hailing. Shared rides, bikes/scooters, Lyft Pink.", category: "Lifestyle", icon: favicon("lyft.com"), website: "https://lyft.com" },
  { name: "Deliveroo", slug: "deliveroo", tagline: "Food delivery. Editions dark kitchens, Plus.", category: "Lifestyle", icon: favicon("deliveroo.com"), website: "https://deliveroo.com" },
  { name: "Tripadvisor", slug: "tripadvisor", tagline: "Travel reviews. Things to do, restaurants, forums.", category: "Lifestyle", icon: favicon("tripadvisor.com"), website: "https://tripadvisor.com" },
  { name: "Expedia", slug: "expedia", tagline: "Travel booking. Bundles, One Key rewards.", category: "Lifestyle", icon: favicon("expedia.com"), website: "https://expedia.com" },
  { name: "Yelp", slug: "yelp", tagline: "Local business reviews. Photos, check-in, reservations.", category: "Lifestyle", icon: favicon("yelp.com"), website: "https://yelp.com" },
];

// ============================================
// Categories (computed from data)
// ============================================
const categories = {};
brands.forEach(b => {
  categories[b.category] = (categories[b.category] || 0) + 1;
});

const sortedCategories = Object.entries(categories).sort((a, b) => b[1] - a[1]);

// ============================================
// Render Sidebar
// ============================================
const categoryNav = document.getElementById('category-nav');
let activeCategory = 'All';

function renderSidebar() {
  let html = `<div class="sidebar-item active" data-category="All">
    <span>All</span>
    <span class="sidebar-count">${brands.length}</span>
  </div>`;

  sortedCategories.forEach(([cat, count]) => {
    html += `<div class="sidebar-item" data-category="${cat}">
      <span>${cat}</span>
      <span class="sidebar-count">${count}</span>
    </div>`;
  });

  categoryNav.innerHTML = html;

  categoryNav.querySelectorAll('.sidebar-item').forEach(item => {
    item.addEventListener('click', () => {
      activeCategory = item.dataset.category;
      categoryNav.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      renderList();
    });
  });
}

// ============================================
// Render Brand List
// ============================================
const catalogList = document.getElementById('catalog-list');
const searchInput = document.getElementById('search-input');

function renderList() {
  const query = searchInput.value.toLowerCase().trim();

  let filtered = brands.filter(b => {
    const matchCategory = activeCategory === 'All' || b.category === activeCategory;
    const matchSearch = !query ||
      b.name.toLowerCase().includes(query) ||
      b.tagline.toLowerCase().includes(query) ||
      b.category.toLowerCase().includes(query) ||
      b.slug.includes(query);
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    catalogList.innerHTML = `<div class="no-results">No architectures found for "${query || activeCategory}"</div>`;
    return;
  }

  let html = '';
  filtered.forEach((b, i) => {
    html += `<a href="${b.slug}.html" class="catalog-row" title="View ${b.name} IA.md">
      <span class="row-index">${i + 1}</span>
      <div class="row-brand">
        <div class="brand-icon">
          <img src="${b.icon}" alt="${b.name}" loading="lazy" onerror="this.parentElement.textContent='${b.name[0]}'">
        </div>
        <div class="brand-info">
          <div class="brand-name">${b.name}</div>
          <div class="brand-tagline">${b.tagline}</div>
        </div>
      </div>
      <span class="row-category"><span class="category-badge">${b.category}</span></span>
    </a>`;
  });

  catalogList.innerHTML = html;
}

// ============================================
// Marquee
// ============================================
function renderMarquee() {
  const track = document.querySelector('.marquee-track');
  const featured = brands.slice(0, 20);
  let items = '';

  // Duplicate for seamless loop
  [...featured, ...featured].forEach(b => {
    items += `<div class="marquee-item">
      <img src="${b.icon}" alt="${b.name}" loading="lazy" onerror="this.style.display='none'">
      <span>${b.name}</span>
    </div>`;
  });

  track.innerHTML = items;
}

// ============================================
// Search
// ============================================
searchInput.addEventListener('input', () => {
  renderList();
});

// ============================================
// Update brand count
// ============================================
const brandCountEl = document.getElementById('brand-count');
if (brandCountEl) brandCountEl.textContent = brands.length;

// ============================================
// Init
// ============================================
renderSidebar();
renderList();
renderMarquee();
