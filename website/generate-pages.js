#!/usr/bin/env node
// ============================================
// generate-pages.js — Static detail page generator for getIA.md
// Usage: node generate-pages.js
// ============================================

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

// Configure marked for nice rendering
marked.setOptions({
  gfm: true,
  breaks: false,
});

// ============================================
// Brand data (mirrored from app.js)
// ============================================
function favicon(domain) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

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
];

// ============================================
// HTML Template
// ============================================
function generateHTML(brand, markdownHTML) {
  const curlCmd = `curl -o IA.md https://raw.githubusercontent.com/getia-md/getia-md.github.io/main/catalog/${brand.slug}/IA.md`;
  const githubUrl = `https://github.com/getia-md/getia-md.github.io/blob/main/catalog/${brand.slug}/IA.md`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${brand.name} — IA.md | getIA.md</title>
  <meta name="description" content="${brand.tagline} Information Architecture pattern for AI coding agents.">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏗️</text></svg>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body class="detail-page">
  <!-- Header -->
  <header class="header">
    <div class="header-inner">
      <a href="/" class="logo">
        <span class="logo-icon">🏗️</span>
        <span class="logo-text">getIA.md</span>
      </a>
      <nav class="nav">
        <a href="index.html#catalog" class="nav-link">Catalog</a>
        <a href="index.html#what-is" class="nav-link">What is IA.md?</a>
        <a href="https://github.com/getia-md/getia-md.github.io" class="nav-link github-link" target="_blank" rel="noopener">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          <span>Star on GitHub</span>
        </a>
      </nav>
      <button class="mobile-menu-btn" onclick="document.body.classList.toggle('menu-open')" aria-label="Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  </header>

  <!-- Mobile Nav -->
  <div class="mobile-nav">
    <a href="index.html#catalog" class="nav-link" onclick="document.body.classList.remove('menu-open')">Catalog</a>
    <a href="index.html#what-is" class="nav-link" onclick="document.body.classList.remove('menu-open')">What is IA.md?</a>
    <a href="https://github.com/getia-md/getia-md.github.io" class="nav-link" target="_blank" rel="noopener">GitHub</a>
  </div>

  <!-- Back Link -->
  <div class="detail-back">
    <div class="detail-back-inner">
      <a href="index.html#catalog" class="detail-back-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        Back to catalog
      </a>
    </div>
  </div>

  <!-- Detail Header -->
  <section class="detail-header">
    <div class="detail-header-inner">
      <div class="detail-brand-icon">
        <img src="${brand.icon}" alt="${brand.name}" onerror="this.parentElement.textContent='${brand.name[0]}'">
      </div>
      <h1 class="detail-brand-name">${brand.name}</h1>
      <p class="detail-brand-tagline">${brand.tagline}</p>
      <span class="detail-category-badge">${brand.category}</span>
    </div>
  </section>

  <!-- Usage Section -->
  <section class="detail-usage">
    <div class="detail-usage-inner">
      <div class="detail-usage-left">
        <div class="detail-usage-label">Quick start</div>
        <div class="detail-curl-block">
          <code class="detail-curl-code" id="curl-command">${curlCmd}</code>
          <button class="detail-copy-btn" onclick="copyCommand()" title="Copy to clipboard" id="copy-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <span>Copy</span>
          </button>
        </div>
      </div>
      <div class="detail-usage-right">
        <a href="${brand.website}" target="_blank" rel="noopener" class="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Visit Website
        </a>
        <a href="${githubUrl}" target="_blank" rel="noopener" class="btn btn-secondary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          View on GitHub
        </a>
      </div>
    </div>
  </section>

  <!-- Markdown Content -->
  <article class="detail-content">
    <div class="detail-content-inner">
      ${markdownHTML}
    </div>
  </article>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-logo">
        <span class="logo-icon">🏗️</span>
        <span class="logo-text">getIA.md</span>
      </div>
      <p class="footer-tagline">Drop an IA.md. Ship with structure.</p>
      <div class="footer-links">
        <a href="https://github.com/getia-md/getia-md.github.io" target="_blank" rel="noopener">GitHub</a>
        <a href="index.html#catalog">Catalog</a>
        <a href="index.html#what-is">About</a>
      </div>
      <p class="footer-copy">&copy; 2026 getIA.md — MIT License</p>
    </div>
  </footer>

  <script>
    function copyCommand() {
      const code = document.getElementById('curl-command').textContent;
      navigator.clipboard.writeText(code).then(() => {
        const btn = document.getElementById('copy-btn');
        btn.querySelector('span').textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.querySelector('span').textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      });
    }
  </script>
</body>
</html>`;
}

// ============================================
// Main: Generate all pages
// ============================================
const catalogDir = path.join(__dirname, '..', 'catalog');
const outputDir = __dirname;

let generated = 0;
let skipped = 0;
let errors = [];

console.log(`\nGenerating detail pages for ${brands.length} brands...\n`);

brands.forEach(brand => {
  const mdPath = path.join(catalogDir, brand.slug, 'IA.md');

  if (!fs.existsSync(mdPath)) {
    console.log(`  SKIP  ${brand.slug} — IA.md not found at ${mdPath}`);
    skipped++;
    return;
  }

  try {
    let mdContent = fs.readFileSync(mdPath, 'utf-8');

    // Strip YAML frontmatter (--- ... ---)
    mdContent = mdContent.replace(/^---[\s\S]*?---\n*/m, '');

    // Convert markdown to HTML
    const htmlContent = marked.parse(mdContent);

    // Generate the full page
    const pageHTML = generateHTML(brand, htmlContent);

    // Write to output
    const outputPath = path.join(outputDir, `${brand.slug}.html`);
    fs.writeFileSync(outputPath, pageHTML, 'utf-8');

    console.log(`  OK    ${brand.slug}.html`);
    generated++;
  } catch (err) {
    console.error(`  ERR   ${brand.slug} — ${err.message}`);
    errors.push(brand.slug);
  }
});

console.log(`\n--- Summary ---`);
console.log(`Generated: ${generated}`);
console.log(`Skipped:   ${skipped}`);
console.log(`Errors:    ${errors.length}`);
if (errors.length > 0) {
  console.log(`Failed:    ${errors.join(', ')}`);
}
console.log('');
