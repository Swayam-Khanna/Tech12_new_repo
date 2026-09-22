export interface DemoProject {
  title: string;
  image: string;
  tag: string;
}

export interface SubService {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
  description: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  heroImage: string;
  subServices: SubService[];
  demoProjects: DemoProject[];
  faqs: ServiceFAQ[];
}

export const servicesData: ServiceData[] = [
  {
    id: "branding",
    shortTitle: "Branding & Graphic Design",
    title: "Branding & Graphic Design That Makes Businesses Recognizable",
    tagline: "Build a consistent visual system across logos, brand guidelines, packaging and marketing.",
    metaTitle: "Branding & Graphic Design Agency | Logo, Identity & Packaging — AVBT",
    metaDescription: "Build a consistent brand with logo design, brand identity, packaging, social media creatives and marketing design from AVBT Technologies.",
    metaKeywords: "logo design, brand identity, packaging, graphic design, visual identity, social media design, AVBT technologies",
    description:
      "A strong brand is more than a logo. AVBT Technologies creates visual systems that help businesses communicate consistently across websites, social media, packaging, presentations, campaigns and customer touchpoints.\n\nFrom identity discovery and typography systems to production-ready packaging and digital assets, we combine strategic research with distinct design. Everything is documented in actionable brand guidelines so your team and external partners maintain visual cohesion across every medium.",
    color: "from-purple-500 to-indigo-500",
    gradientFrom: "rgba(139,92,246,0.15)",
    gradientTo: "rgba(99,102,241,0.05)",
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&q=90",
    subServices: [
      { id: "logo", title: "Logo Design", description: "Distinctive, versatile logo concepts tailored to your brand personality. Delivered in vector formats with color variants. Starting at ₹5,000+.", icon: "✦" },
      { id: "identity", title: "Brand Identity", description: "Comprehensive visual systems: color palettes, typography scales, icon systems and usage standards. Starting at ₹15,000+.", icon: "⬟" },
      { id: "guidelines", title: "Brand Guidelines", description: "Practical reference manuals that ensure every internal team and vendor applies your brand consistently.", icon: "◫" },
      { id: "packaging", title: "Packaging Design", description: "Print-ready packaging for boxes, pouches, bottles and sleeves built to regulatory specs. Starting at ₹5,000+ / SKU.", icon: "⬡" },
      { id: "social", title: "Social Media Design", description: "High-engagement templates, story systems and carousel layouts for Instagram, LinkedIn and X. Starting at ₹2,000+ / creative.", icon: "◈" },
      { id: "marketing", title: "Marketing Creatives", description: "High-converting ad banners, pitch decks, infographics and campaign visuals engineered to convert.", icon: "◆" },
    ],
    demoProjects: [
      { title: "Organic Honey Packaging", image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80", tag: "Packaging" },
      { title: "Luxury Coffee Branding", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80", tag: "Brand Identity" },
      { title: "Fitness Supplement Label", image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&q=80", tag: "Packaging" },
      { title: "Minimal Skincare Brand", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80", tag: "Brand Identity" },
    ],
    faqs: [
      {
        question: "What is brand identity design?",
        answer: "Brand identity design is the visual system that represents a business. It can include the logo, colors, typography, imagery, layout rules, supporting graphics and guidelines that keep communication consistent.",
      },
      {
        question: "How much does logo design cost?",
        answer: "Logo pricing varies by research, concepts, revisions, deliverables and usage requirements. AVBT provides verified starting packages from ₹5,000+ alongside custom enterprise quotes.",
      },
      {
        question: "What is included in branding?",
        answer: "A complete package can include logo variants, color palette, typography hierarchy, visual rules, collateral templates and a brand guide. Exact deliverables are itemized in your proposal.",
      },
      {
        question: "Do you design packaging?",
        answer: "Yes. Packaging design covers labels, pouches, boxes, sleeves and retail cartons when production and die-line specifications are provided.",
      },
    ],
  },
  {
    id: "web",
    shortTitle: "Web & App Development",
    title: "Websites & Digital Products Built for Real Business Goals",
    tagline: "Design and develop digital experiences that balance visual quality, usability, and speed.",
    metaTitle: "Web Development Agency | Websites, E-commerce & Web Apps — AVBT",
    metaDescription: "AVBT Technologies designs and develops responsive websites, e-commerce stores, dashboards and custom web applications.",
    metaKeywords: "website development, web design, e-commerce, web app, SaaS, UI/UX, frontend, backend",
    description:
      "We design and develop digital experiences that balance visual quality, usability, performance and maintainability. Projects can range from focused landing pages to e-commerce platforms and custom web applications.\n\nEvery project is built with clean architecture, modern component libraries, responsive design, and technical SEO foundations. Our technology stack includes React, Next.js, TypeScript, Tailwind CSS, Node.js, PostgreSQL, MongoDB, Prisma, Vercel, AWS and DigitalOcean.",
    color: "from-blue-500 to-cyan-500",
    gradientFrom: "rgba(59,130,246,0.15)",
    gradientTo: "rgba(34,211,238,0.05)",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=90",
    subServices: [
      { id: "business", title: "Business Websites", description: "Clean, professional multi-page websites built for credibility, fast loading and search discoverability. Starting at ₹15,000+.", icon: "◈" },
      { id: "landing", title: "Landing Pages", description: "Focused conversion pages built to test offers, capture leads and maximize campaign ROI. Starting at ₹8,000+.", icon: "▣" },
      { id: "ecommerce", title: "E-commerce Stores", description: "Full-featured online stores with product catalogs, shopping carts and secure payment gateways. Starting at ₹25,000+.", icon: "◉" },
      { id: "webapp", title: "Custom Web Apps", description: "Tailored dashboards, customer portals and full-stack software built on React and Node.js. Starting at ₹50,000+.", icon: "⬟" },
      { id: "uiux", title: "UI/UX Design", description: "Wireframing, interactive prototyping and design systems crafted in Figma for web and mobile.", icon: "◆" },
      { id: "maintenance", title: "Website Redesign", description: "Upgrade visual aesthetics, information architecture and core performance while protecting valuable URLs.", icon: "⬡" },
    ],
    demoProjects: [
      { title: "AI SaaS Dashboard", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", tag: "Web App" },
      { title: "Luxury Hotel Website", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", tag: "Business Website" },
      { title: "Creative Agency Portfolio", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80", tag: "Portfolio" },
      { title: "Startup Landing Page", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80", tag: "Landing Page" },
    ],
    faqs: [
      {
        question: "How much does a website cost?",
        answer: "A website's price depends on pages, UX, content, CMS, integrations, authentication, payments, dashboards, animation, SEO and support. Starting packages begin at ₹8,000+ for landing pages and ₹15,000+ for business websites.",
      },
      {
        question: "How long does a website take?",
        answer: "A landing page can take days, a business website can take one or more weeks, and complex e-commerce or custom applications can take substantially longer depending on scope.",
      },
      {
        question: "Will the website be mobile responsive?",
        answer: "Yes. Responsive design and testing across mobile phones, tablets, laptops, and desktop screens is part of our standard website delivery.",
      },
      {
        question: "Can you redesign an existing website?",
        answer: "Yes. A redesign can address visual design, UX, information architecture, content, performance and technical foundations while protecting valuable URLs and SEO signals.",
      },
    ],
  },
  {
    id: "video",
    shortTitle: "Video Production & Editing",
    title: "Video Content Built for Attention, Clarity & Action",
    tagline: "Turn raw footage and ideas into platform-ready video content for brands and creators.",
    metaTitle: "Video Editing & Production Services | Reels, YouTube & Brand Video — AVBT",
    metaDescription: "Professional video editing for Reels, YouTube, promotional campaigns, motion graphics and branded content.",
    metaKeywords: "video editing, Reels, YouTube, motion graphics, promotional video, color grading, AVBT technologies",
    description:
      "AVBT Technologies turns raw footage and ideas into platform-ready video content for brands, creators and businesses.\n\nFrom viral Reels and structured YouTube documentaries to promotional product films and animated kinetic typography, our editing team focuses on high viewer retention, sound design, rhythmic pacing, and seamless brand storytelling.",
    color: "from-pink-500 to-rose-500",
    gradientFrom: "rgba(236,72,153,0.15)",
    gradientTo: "rgba(244,63,94,0.05)",
    heroImage: "https://images.unsplash.com/photo-1535016120720-40c746a5024b?w=1600&q=90",
    subServices: [
      { id: "reels", title: "Instagram Reels", description: "Hook-optimized short-form videos with custom sound design and motion captions. Starting at ₹2,000+ / reel.", icon: "◈" },
      { id: "youtube", title: "YouTube Editing", description: "Narrative long-form editing with documentary cuts, B-roll selection and color grading. Starting at ₹5,000+.", icon: "⬡" },
      { id: "promo", title: "Promotional Videos", description: "Product launches, brand films and corporate campaign commercials. Starting at ₹20,000+.", icon: "▣" },
      { id: "motion", title: "Motion Graphics", description: "Animated typography, logo reveals, infographic overlays and 2D/3D motion assets.", icon: "◉" },
      { id: "color", title: "Color Grading", description: "DaVinci Resolve color correction, contrast balance and custom LUT styling for cinematic aesthetics.", icon: "◆" },
      { id: "retainer", title: "Monthly Video Retainer", description: "Dedicated production capacity for recurring weekly reels and YouTube schedules. Starting at ₹15,000+ / month.", icon: "◫" },
    ],
    demoProjects: [
      { title: "Real Estate Cinematic Reel", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80", tag: "Reels" },
      { title: "Fitness Brand Promo", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80", tag: "Promotional" },
      { title: "YouTube Documentary Edit", image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80", tag: "YouTube" },
      { title: "Product Launch Film", image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&q=80", tag: "Brand Film" },
    ],
    faqs: [
      {
        question: "How much does video editing cost?",
        answer: "Pricing depends on footage, duration, complexity, motion graphics, sound design, color grading and revisions. Reels start at ₹2,000+, YouTube edits at ₹5,000+, and promotional videos at ₹20,000+.",
      },
      {
        question: "Do you edit Instagram Reels?",
        answer: "Yes. Reels editing includes hook formulation, pacing, subtitles, sound design, visual callouts and delivery in 9:16 vertical format.",
      },
      {
        question: "Do you edit YouTube videos?",
        answer: "Yes, long-form editing can include rough cuts, pacing, graphics, captions, audio cleanup, B-roll integration and color work depending on project scope.",
      },
    ],
  },
  {
    id: "infrastructure",
    shortTitle: "Digital Infrastructure",
    title: "Digital Infrastructure That Keeps Your Website Running",
    tagline: "Domain, DNS, hosting, servers, SSL, backups and proactive website maintenance.",
    metaTitle: "Website Maintenance, Hosting & Digital Infrastructure — AVBT Technologies",
    metaDescription: "Website maintenance, domain and DNS setup, hosting, server management, SSL, backups and performance support.",
    metaKeywords: "hosting, domain, DNS, SSL, server management, website maintenance, AVBT technologies",
    description:
      "AVBT Technologies supports the technical foundation behind websites and digital products — from domain and DNS configuration to hosting, SSL, backups, maintenance and performance support.\n\nWe provide uptime monitoring, routine security patches, database backups, and CDN configurations so your online presence remains reliable and fast.",
    color: "from-amber-500 to-orange-500",
    gradientFrom: "rgba(245,158,11,0.15)",
    gradientTo: "rgba(249,115,22,0.05)",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=90",
    subServices: [
      { id: "domain", title: "Domain & DNS Setup", description: "Domain routing, DNS propagation, DMARC/SPF/DKIM email records and Nameserver configuration.", icon: "◈" },
      { id: "hosting", title: "Hosting Setup", description: "Deployment configuration across Vercel, AWS, Cloudflare and leading cloud hosting providers.", icon: "⬡" },
      { id: "server", title: "Server Management", description: "Linux server provisioning, Nginx reverse proxy configuration, process monitoring and firewall setup.", icon: "◉" },
      { id: "ssl", title: "SSL & Security", description: "Automated SSL certificates, HTTPS enforcement, vulnerability patches and DDoS protection.", icon: "▣" },
      { id: "backups", title: "Automated Backups", description: "Scheduled database dumps and file-system backups with reliable restore points.", icon: "◆" },
      { id: "maintenance", title: "Website Maintenance", description: "Ongoing package upgrades, Core Web Vitals optimizations and technical troubleshooting. Starting at ₹3,000+ / month.", icon: "◫" },
    ],
    demoProjects: [
      { title: "Enterprise Server Migration", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80", tag: "Server" },
      { title: "E-commerce Security Audit", image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80", tag: "Security" },
      { title: "SaaS Performance Overhaul", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", tag: "Performance" },
      { title: "Multi-domain Setup & DNS", image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&q=80", tag: "Domain" },
    ],
    faqs: [
      {
        question: "What is website maintenance and why do I need it?",
        answer: "Website maintenance includes regular software updates, security patches, automated backups, uptime monitoring, and performance checks to keep your website fast, secure, and available to customers.",
      },
      {
        question: "What does server management include?",
        answer: "Server management covers server provisioning, web server configuration (Nginx/Apache), SSL maintenance, regular security updates, backup scheduling and performance monitoring.",
      },
    ],
  },
  {
    id: "mentorship",
    shortTitle: "Mentorship & Career Guidance",
    title: "Build Practical Digital Skills for the Real World",
    tagline: "Practical mentorship, portfolio work, and eligible internship programs in digital skills.",
    metaTitle: "Digital Skills Mentorship & Internships | AVBT Technologies",
    metaDescription: "Practical mentorship, portfolio guidance and eligible internship programs in web development, design, video and digital marketing.",
    metaKeywords: "digital skills, internship, mentorship, portfolio, career guidance, AVBT technologies",
    description:
      "AVBT Technologies supports learners through practical digital skills, portfolio guidance, project-based learning and eligible internship opportunities. Program availability, compensation and eligibility must be stated for each active program.\n\nWhether preparing for modern frontend development, UI/UX design systems, or growth marketing, our mentorship focuses on verifiable portfolio projects and industry standards.",
    color: "from-green-500 to-teal-500",
    gradientFrom: "rgba(34,197,94,0.15)",
    gradientTo: "rgba(20,184,166,0.05)",
    heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=90",
    subServices: [
      { id: "webmentorship", title: "Web Development Mentorship", description: "Practical hands-on training in React, Next.js, Node.js, and modern full-stack workflows.", icon: "◈" },
      { id: "designmentorship", title: "Graphic Design Mentorship", description: "Typography, visual hierarchy, branding systems, and Figma design system mastery.", icon: "◆" },
      { id: "videomentorship", title: "Video Editing Mentorship", description: "Short-form retention editing, narrative pacing, audio design, and DaVinci color grading.", icon: "◉" },
      { id: "marketingmentorship", title: "Digital Marketing Mentorship", description: "Organic search foundations, copywriting, paid ads, and analytics-driven growth.", icon: "▣" },
      { id: "portfolioreview", title: "Portfolio Reviews", description: "In-depth design and code audits to build high-converting case studies for clients or employers.", icon: "⬡" },
      { id: "internships", title: "Eligible Internships", description: "Active internship programs for eligible candidates to work on real-world projects.", icon: "✦" },
    ],
    demoProjects: [
      { title: "Design Internship Batch", image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80", tag: "Internship" },
      { title: "Developer Career Cohort", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80", tag: "Career" },
      { title: "Portfolio Review Program", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80", tag: "Portfolio" },
      { title: "1-on-1 Mentorship Sessions", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80", tag: "Mentorship" },
    ],
    faqs: [
      {
        question: "What does digital skills mentorship include?",
        answer: "Mentorship includes 1-on-1 feedback, project-based assignments, code or design reviews, and portfolio guidance aligned with industry hiring expectations.",
      },
      {
        question: "Are internships open for application?",
        answer: "Internship openings depend on active agency projects and department capacity. Check our Careers page for current verified openings.",
      },
    ],
  },
  {
    id: "ai",
    shortTitle: "AI Automation Solutions",
    title: "AI Automation That Turns Repetitive Work Into Reliable Systems",
    tagline: "Build practical AI automations for lead handling, support, CRM and repetitive workflows.",
    metaTitle: "AI Automation Agency | AI Chatbots, Workflows & Business Automation — AVBT",
    metaDescription: "Build practical AI automations for lead handling, customer support, CRM workflows, internal assistants and repetitive business processes.",
    metaKeywords: "AI automation, AI chatbot, workflow automation, CRM automation, AI assistant, AVBT technologies",
    description:
      "AVBT Technologies designs AI-assisted workflows that help businesses handle repetitive tasks, route information, support customers and connect systems. The goal is practical automation: identify a workflow, define human-review points, connect the tools and measure the result.\n\nFrom 24/7 customer service chatbots and automatic lead capture pipelines to multi-step CRM synchronizations and custom AI assistants, our solutions reduce friction and give your team hours back every week.",
    color: "from-cyan-500 to-blue-500",
    gradientFrom: "rgba(34,211,238,0.15)",
    gradientTo: "rgba(59,130,246,0.05)",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=90",
    subServices: [
      { id: "chatbots", title: "AI Chatbots", description: "Autonomous lead capture and customer inquiry assistants with human escalation rules. Starting at ₹10,000+.", icon: "◈" },
      { id: "leadauto", title: "Lead Capture & Qualification", description: "Instant qualification, WhatsApp/Email routing, and automated calendar scheduling.", icon: "⬡" },
      { id: "crmauto", title: "CRM Automation", description: "Automated lead ingestion, contact enrichment, and pipeline updates across your CRM.", icon: "◉" },
      { id: "assistants", title: "Internal AI Assistants", description: "Knowledge base retrieval bots that help teams query documents and draft responses. Starting at ₹30,000+.", icon: "▣" },
      { id: "workflows", title: "Multi-Step Workflow Automation", description: "Cross-platform data synchronization via webhooks, APIs, and AI classification. Starting at ₹25,000+.", icon: "⬟" },
      { id: "customai", title: "Custom AI Integrations", description: "Custom LLM solutions, prompt engineering, and API pipelines tailored to your architecture. Starting at ₹1,00,000+.", icon: "◆" },
    ],
    demoProjects: [
      { title: "AI Lead Generation System", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80", tag: "Lead Automation" },
      { title: "AI Chatbot Dashboard", image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80", tag: "Chatbot" },
      { title: "CRM Automation Pipeline", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80", tag: "CRM" },
      { title: "Business Process Overhaul", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", tag: "Automation" },
    ],
    faqs: [
      {
        question: "What is AI automation?",
        answer: "AI automation combines AI models with software workflows to perform or assist with repetitive tasks such as classification, drafting, data extraction, routing, lead handling and customer responses.",
      },
      {
        question: "How much does AI automation cost?",
        answer: "Cost depends on workflow complexity, integrations, data, security, model usage and support. Simple chatbots start from ₹10,000+, multi-step workflows from ₹25,000+, and complex multi-system setups from ₹1,00,000+.",
      },
      {
        question: "Can AI connect to existing software?",
        answer: "Often yes when suitable APIs, webhooks or supported integrations exist. A technical discovery call is conducted to verify feasibility before building.",
      },
      {
        question: "Does AI remove human review?",
        answer: "Not necessarily. Many workflows should include human approval, exception handling, monitoring and clear responsibility for high-impact decisions.",
      },
    ],
  },
];
