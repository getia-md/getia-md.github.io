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
