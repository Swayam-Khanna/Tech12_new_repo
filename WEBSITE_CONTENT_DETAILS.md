# AVBT Technologies — Complete Website Content & Copy Audit Document
> **Document Purpose:** Complete catalog of all text, headings, descriptions, buttons, and policy content across all pages and sections of the AVBT Technologies website. Use this document to review, refine, and upgrade the brand messaging.
>
> **Last Updated:** September 2026  
> **Brand Name:** AVBT Technologies  
> **Contact Email:** contact@avbt.in / techavbt@gmail.com  
> **Phone Numbers:** +91 8979768681 | +91 7876799926  
> **Location:** Solan, Himachal Pradesh, India  

---

## Table of Contents
1. [Global Header / Navbar](#1-global-header--navbar)
2. [Global Footer](#2-global-footer)
3. [Floating AI Chat Helper Widget](#3-floating-ai-chat-helper-widget)
4. [Home Page (`/`)](#4-home-page-)
   - [Hero Section](#41-hero-section)
   - [Services Overview Section ("Six Pillars of Excellence")](#42-services-overview-section)
   - [Featured Portfolio Section ("Our Work")](#43-featured-portfolio-section)
   - [Contact Section ("Let's Work Together")](#44-contact-section)
5. [About Us Page (`/about`)](#5-about-us-page-about)
   - [Hero & Mission Statement](#51-hero--mission-statement)
   - [Statistics Counters](#52-statistics-counters)
   - [Our Story & Core Identity Cards](#53-our-story--core-identity-cards)
   - [Core Values Section](#54-core-values-section)
   - [Leadership & Team Section](#55-leadership--team-section)
   - [Call-to-Action Card](#56-call-to-action-card)
6. [Services Pillar Pages (`/services/:id`)](#6-services-pillar-pages-servicesid)
   - [Pillar 1: Creative Branding & Marketing (`branding`)](#61-pillar-1-creative-branding--marketing)
   - [Pillar 2: Web & App Development (`web`)](#62-pillar-2-web--app-development)
   - [Pillar 3: Video Production & Editing (`video`)](#63-pillar-3-video-production--editing)
   - [Pillar 4: Digital Infrastructure (`infrastructure`)](#64-pillar-4-digital-infrastructure)
   - [Pillar 5: Mentorship & Career Guidance (`mentorship`)](#65-pillar-5-mentorship--career-guidance)
   - [Pillar 6: AI Automation Solutions (`ai`)](#66-pillar-6-ai-automation-solutions)
7. [Sub-Service Dedicated Pages (`/services/:serviceId/:subServiceId`)](#7-sub-service-dedicated-pages)
8. [Portfolio Page (`/portfolio`)](#8-portfolio-page-portfolio)
9. [Case Study Detail Page (`/portfolio/:id`)](#9-case-study-detail-page-portfolioid)
10. [Careers Page (`/careers`)](#10-careers-page-careers)
    - [Hero & Introduction](#101-hero--introduction)
    - [Internship Position Cards (4 Roles)](#102-internship-position-cards)
    - [Application & Resume Upload Form](#103-application--resume-upload-form)
11. [Privacy Policy Page (`/privacy-policy`)](#11-privacy-policy-page-privacy-policy)
12. [Terms & Conditions Page (`/terms-conditions`)](#12-terms--conditions-page-terms-conditions)

---

## 1. Global Header / Navbar

*Component File:* `artifacts/techtitans-ai/src/components/Navbar.tsx`

| Element | Current Text / Copy | Target Action / Link |
| :--- | :--- | :--- |
| **Logo Alt** | `AVBT Technologies` | `#` (Top of page) |
| **Nav Link 1** | `Services` | `/#services` |
| **Nav Link 2** | `Portfolio` | `/portfolio` |
| **Nav Link 3** | `About` | `/about` |
| **Nav Link 4** | `Careers` | `/careers` |
| **Nav Link 5** | `Contact` | `/#contact` |
| **CTA Button** | `Start Project` | `/#contact` |

---

## 2. Global Footer

*Component File:* `artifacts/techtitans-ai/src/components/Footer.tsx`

### Brand Column
- **Logo Alt:** `AVBT Technologies`
- **Tagline:** `Empowering Digital Realities`
- **Social Links:**
  - LinkedIn: `https://www.linkedin.com/company/avbt-technology`
  - GitHub: `https://github.com/avbttechnologies`

### Quick Links Column
- **Title:** `Quick Links`
- `Services` → `/#services`
- `Portfolio` → `/portfolio`
- `Careers` [Badge: `Hiring`] → `/careers`
- `About Us` → `/about`
- `Contact` → `/#contact`

### Legal Column
- **Title:** `Legal`
- `Terms of Service` → `/terms-conditions`
- `Privacy Policy` → `/privacy-policy`
- `Security Policy` → `#`

### Contact Column
- **Title:** `Contact`
- Phone (Call Icon): `+91 8979768681` (`tel:8979768681`)
- WhatsApp (Chat Icon): `+91 7876799926` (`https://wa.me/917876799926`)
- Email: `contact@avbt.in` (`mailto:contact@avbt.in`)

### Bottom Bar
- **Copyright Notice:** `© 2026 AVBT Technologies. All rights reserved.`

---

## 3. Floating AI Chat Helper Widget

*Component File:* `artifacts/techtitans-ai/src/components/AIChatHelper.tsx`

- **Widget Title:** `AVBT Assistant`
- **Status Indicator:** `Online · Always here`
- **Initial Welcome Message:**  
  `"Hi! I'm your guide at AVBT Technologies. 🚀 What are we building today?"`
- **Quick Suggestion Buttons:**
  - `Web Development`
  - `Video & Design`
  - `General Inquiry`
- **Bot Response Options & Copy:**
  - *On Web Development:* `"Awesome! We build blazing-fast websites, e-commerce stores, and custom web applications. Tell me a bit about what you need!"`
  - *On Video & Design:* `"Great choice! We handle branding, logo design, high-converting social media creatives, and cinematic video editing. What is your vision?"`
  - *On General Inquiry:* `"Feel free to ask anything about our services, pricing, or past work. You can also scroll to the contact form to speak directly with our team."`
- **Input Placeholder:** `Type your message...`

---

## 4. Home Page (`/`)

### 4.1 Hero Section
*Component File:* `artifacts/techtitans-ai/src/components/Hero.tsx`

- **Availability Badge:** `Available for new projects` (pulsing indicator)
- **Main Heading:**
  ```
  We Build
  Digital Excellence
  ```
- **Sub-headline Paragraph:**  
  `"Creative branding, web development, video production, AI automation, digital infrastructure & career mentorship — all under one roof."`
- **Primary CTA Button:** `Get Started` (smooth scrolls to `/#contact`)
- **Secondary CTA Button:** `View Portfolio` (links to `/portfolio`)
- **Interactive Visual Card Details:**
  - Badge: `⚡ AI POWERED`
  - Floating Badge: `Conversion Rate +248% vs Last 30 Days`
  - Feature 1: **AI Automation** — `Smart Solutions`
  - Feature 2: **Web Development** — `Scalable Platforms`
  - Feature 3: **Digital Systems** — `Powerful Infra`

---

### 4.2 Services Overview Section ("Six Pillars of Excellence")
*Component File:* `artifacts/techtitans-ai/src/components/Services.tsx`

- **Kicker / Category Tag:** `WHAT WE DO`
- **Heading:** `Six Pillars of Excellence`
- **Description:** `"Six core service pillars — each built to elevate your brand, accelerate your growth, and deliver world-class results."`

#### The 6 Service Cards:
1. **Creative Branding & Marketing**
   - *Description:* `Build a brand that commands attention and drives growth.`
   - *Sub-tags:* Logo Design · Brand Identity · Social Media Design · Product Packaging · Banner & Editorial Design · Marketing Creatives
2. **Web & App Development**
   - *Description:* `Blazing-fast, stunning digital products built to convert.`
   - *Sub-tags:* Business Websites · Landing Pages · E-commerce Stores · Custom Web Apps · Portfolio Websites · Mobile UI Design
3. **Video Production & Editing**
   - *Description:* `Cinematic, high-retention content for every platform.`
   - *Sub-tags:* Reels Editing · Long-form Video Editing · Motion Graphics · Promotional Videos · Cinematic Editing
4. **Digital Infrastructure**
   - *Description:* `Reliable backend systems keeping your business always online.`
   - *Sub-tags:* Server Management · Domain Setup · Website Maintenance · Hosting Support · Security Monitoring · Performance Optimization
5. **Mentorship & Career Guidance**
   - *Description:* `Empowering the next generation of digital professionals.`
   - *Sub-tags:* Internship Programs · Placement Guidance · Personalized Learning · Portfolio Reviews · Career Mentorship
6. **AI Automation Solutions**
   - *Description:* `Intelligent workflows that eliminate manual work at scale.`
   - *Sub-tags:* Workflow Automation · AI Chatbots & Assistants · Lead Automation · CRM Automation · Business Process Automation

---

### 4.3 Featured Portfolio Section ("Our Work")
*Component File:* `artifacts/techtitans-ai/src/components/Portfolio.tsx`

- **Heading:** `Our Work`
- **Description:** `"A selection of our latest projects. We push the boundaries of design and technology to deliver outstanding results."`
- **Link:** `View All Projects →` (navigates to `/portfolio`)
- **Empty State Notice:** `No published projects yet.`

---

### 4.4 Contact Section ("Let's Work Together")
*Component File:* `artifacts/techtitans-ai/src/components/Contact.tsx`

- **Heading:** `Let's Work Together`
- **Description:** `"Ready to elevate your digital presence? Reach out to us to discuss your project, and let's create something extraordinary."`
- **Form Fields:**
  - `Name` (Required input, placeholder: *"Your name"*)
  - `Email` (Required email input, placeholder: *"you@company.com"*)
  - `Service Required` (Dropdown: *Creative Branding & Marketing, Web & App Development, Video Production & Editing, Digital Infrastructure, Mentorship & Career Guidance, AI Automation Solutions*)
  - `Specific Need / Sub-Service` (Conditional dropdown based on service)
  - `Project Details` (Textarea, placeholder: *"Tell us about your project, goals, and timeline..."*)
- **Submit Button:** `Send Message` / `Sending...`
- **Success State Message:**
  - Title: `Message Sent!`
  - Subtitle: `Thank you for reaching out. We'll get back to you within 24 hours.`

---

## 5. About Us Page (`/about`)

*Page File:* `artifacts/techtitans-ai/src/pages/AboutUs.tsx`

### 5.1 Hero & Mission Statement
- **Kicker:** `ABOUT US`
- **Main Heading:**  
  ```
  We Are the Innovators
  Behind Your Brand.
  ```
- **Introductory Paragraph:**  
  `"AVBT Technologies is a premium digital agency based in Solan, Himachal Pradesh. Founded with one mission — to help ambitious brands look world-class and grow faster through intelligent design, cutting-edge development, and powerful storytelling."`

### 5.2 Statistics Counters
| Number | Metric Label |
| :--- | :--- |
| **50+** | Projects Delivered |
| **30+** | Happy Clients |
| **4+** | Years of Experience |
| **100%** | Client Satisfaction |

### 5.3 Our Story & Core Identity Cards
- **Section Heading:** `Built from Passion, Driven by Purpose`
- **Story Paragraph 1:**  
  `"AVBT Technologies was born out of a simple frustration — too many great businesses were being held back by poor digital presence. We saw startups with amazing products losing to competitors simply because of weaker branding, slower websites, and no content strategy."`
- **Story Paragraph 2:**  
  `"So we built a team of specialists across branding, web development, graphic design, and video production — all under one roof. Today, we partner with startups, creators, and growing businesses to build digital identities that demand attention and drive real results."`
- **Story Paragraph 3:**  
  `"Based in Solan, H.P., we serve clients across India and beyond, combining the discipline of a big-city agency with the personal care of a boutique studio."`
- **4 Identity Pillars:**
  1. **Our Mission:** `To make world-class digital design accessible to every ambitious brand.`
  2. **Our Vision:** `To become the most trusted digital partner for the next generation of brands.`
  3. **Who We Serve:** `Startups, entrepreneurs, creators, and SMEs ready to invest in their brand.`
  4. **What We Love:** `Complex problems with elegant solutions and clients who care about quality.`

### 5.4 Core Values Section
- **Kicker:** `OUR VALUES`
- **Heading:** `What We Stand For`
- **Value 1: Results-Driven**  
  `"Every decision we make is rooted in achieving measurable outcomes for our clients — not just pretty deliverables."`
- **Value 2: Speed & Precision**  
  `"We move fast without cutting corners. Our streamlined workflows let us deliver premium work on tight timelines."`
- **Value 3: Client-First Always**  
  `"We treat every project as if it were our own business. Your success is our success, and we never forget that."`
- **Value 4: Uncompromising Quality**  
  `"We set the bar high and hold ourselves to it — every pixel, every line of code, every frame of video."`

### 5.5 Leadership & Team Section
- **Kicker:** `THE TEAM`
- **Heading:** `The Titans Behind the Work`
- **Team Member 1:**  
  - Name: `Aryan Sharma`  
  - Role: `Founder & Creative Director`  
  - Bio: `Visionary behind AVBT Technologies. Leads brand strategy and creative direction for all client projects.`
- **Team Member 2:**  
  - Name: `Rahul Verma`  
  - Role: `Lead Web Developer`  
  - Bio: `Full-stack engineer with expertise in React, Node.js, and scalable cloud architectures.`
- **Team Member 3:**  
  - Name: `Priya Singh`  
  - Role: `Head of Design`  
  - Bio: `Award-winning designer specializing in brand identity, UI/UX, and motion graphics.`
- **Team Member 4:**  
  - Name: `Karan Thakur`  
  - Role: `Video Production Lead`  
  - Bio: `Cinematic storyteller with 5+ years of experience in video editing, color grading, and motion design.`

### 5.6 Call-to-Action Card
- **Heading:** `Ready to Work With Titans?`
- **Description:** `"Let's build something extraordinary together. Reach out today and get a free consultation."`
- **CTA Button:** `Get in Touch` (links to `/#contact`)

---

## 6. Services Pillar Pages (`/services/:id`)

*Data Source:* `artifacts/techtitans-ai/src/data/servicesData.ts`  
*Page Template:* `artifacts/techtitans-ai/src/pages/ServicePage.tsx`

Every service pillar includes:
- Hero Banner with title, tagline, description.
- Sub-services grid with icons and descriptive summaries.
- Dynamic project showcase from CMS.
- Bottom CTA: `"Let's Build Something Exceptional Together."`

### 6.1 Pillar 1: Creative Branding & Marketing
- **ID:** `branding`
- **Short Title:** `Creative Branding & Marketing`
- **Page Title:** `Creative Branding That Makes Businesses Unforgettable.`
- **Tagline:** `Your brand is your biggest asset. We build it to last.`
- **Description:** `"We craft complete brand identities that command attention — from logo design and packaging to full marketing creative systems that drive growth across every channel."`
- **Sub-Services Included:**
  1. **Logo Design:** `Distinctive, timeless logos built to own their space in any market.`
  2. **Social Media Design:** `Scroll-stopping creatives designed for Instagram, LinkedIn, and beyond.`
  3. **Product Packaging Design:** `Packaging that sells before the product is even opened.`
  4. **Label Design:** `Premium label design for products that stand out on shelves.`
  5. **Banner Design:** `High-impact banners for digital ads, events, and storefronts.`
  6. **Editorial Design:** `E-books, digital magazines, and PDF presentations crafted with precision.`
  7. **Brand Identity:** `Complete visual systems — colors, typography, guidelines, and brand voice.`
  8. **Marketing Creatives:** `Ad creatives, campaign assets, and promotional materials that convert.`

---

### 6.2 Pillar 2: Web & App Development
- **ID:** `web`
- **Short Title:** `Web & App Development`
- **Page Title:** `Digital Products Built to Perform at the Highest Level.`
- **Tagline:** `From concept to launch — fast, beautiful, and scalable.`
- **Description:** `"We design and develop websites, web apps, and e-commerce stores that load fast, look stunning, and convert visitors into customers. Every pixel is intentional."`
- **Sub-Services Included:**
  1. **Business Websites:** `Professional, conversion-optimized websites for growing businesses.`
  2. **Portfolio Websites:** `Stunning personal or agency portfolios that win clients.`
  3. **Landing Pages:** `High-converting landing pages designed to capture leads and close sales.`
  4. **E-commerce Stores:** `Full-featured online stores built on Shopify, WooCommerce, or custom stacks.`
  5. **Custom Web Apps:** `Scalable SaaS platforms and web applications built with modern stacks.`
  6. **Mobile UI Design:** `Beautiful mobile-first UI/UX design for iOS and Android applications.`

---

### 6.3 Pillar 3: Video Production & Editing
- **ID:** `video`
- **Short Title:** `Video Production & Editing`
- **Page Title:** `Cinematic Video Content That Stops Scrolling.`
- **Tagline:** `Content that converts — at the speed of light.`
- **Description:** `"We create and edit video content that grabs attention, holds it, and drives action. From reels to long-form documentaries, every frame is crafted with purpose."`
- **Sub-Services Included:**
  1. **Reels Editing:** `Hook-optimized Instagram and YouTube Shorts reels that go viral.`
  2. **Long-form Video Editing:** `Documentary-quality editing for YouTube, courses, and brand films.`
  3. **Motion Graphics:** `Animated titles, transitions, and brand elements that elevate production value.`
  4. **Promotional Videos:** `Product and service promo videos that convert viewers into buyers.`
  5. **Cinematic Editing:** `High-end color grading and cinematic treatment for premium productions.`

---

### 6.4 Pillar 4: Digital Infrastructure
- **ID:** `infrastructure`
- **Short Title:** `Digital Infrastructure`
- **Page Title:** `Reliable Infrastructure That Keeps Your Business Always Online.`
- **Tagline:** `Your digital backbone — built secure, fast, and resilient.`
- **Description:** `"From server management and domain setup to security monitoring and performance optimization, we handle the technical foundation so you can focus on growing your business."`
- **Sub-Services Included:**
  1. **Server Management:** `Dedicated server setup, configuration, and ongoing management for peak performance.`
  2. **Domain Setup:** `Domain registration, DNS configuration, and email setup done right the first time.`
  3. **Website Maintenance:** `Regular updates, backups, and proactive monitoring to keep your site healthy.`
  4. **Hosting Support:** `Optimized hosting solutions with fast load times and 99.9% uptime.`
  5. **Security Monitoring:** `24/7 threat detection, SSL management, and security hardening for your digital assets.`
  6. **Performance Optimization:** `Speed audits, CDN setup, and code optimization to make your site lightning-fast.`

---

### 6.5 Pillar 5: Mentorship & Career Guidance
- **ID:** `mentorship`
- **Short Title:** `Mentorship & Career Guidance`
- **Page Title:** `Empowering the Next Generation of Digital Professionals.`
- **Tagline:** `Real skills. Real guidance. Real careers.`
- **Description:** `"We offer structured mentorship programs, internship opportunities, and personalized career guidance to help aspiring designers, developers, and creators break into the industry."`
- **Sub-Services Included:**
  1. **Internship Programs:** `Hands-on internship programs in design, development, video, and marketing.`
  2. **Placement Guidance:** `Resume reviews, interview prep, and direct placement support for top talent.`
  3. **Personalized Learning Sessions:** `1-on-1 and group learning sessions tailored to your skill level and goals.`
  4. **Portfolio Reviews:** `Expert critique and improvement of your creative or development portfolio.`
  5. **Career Mentorship:** `Long-term mentorship relationships with industry professionals who've been there.`

---

### 6.6 Pillar 6: AI Automation Solutions
- **ID:** `ai`
- **Short Title:** `AI Automation Solutions`
- **Page Title:** `Intelligent Automation That Works While You Sleep.`
- **Tagline:** `Turn 40-hour workweeks into automated pipelines.`
- **Description:** `"We build AI-powered workflows, chatbots, and automation systems that eliminate manual work, accelerate operations, and let your team focus on what actually matters."`
- **Sub-Services Included:**
  1. **Workflow Automation:** `End-to-end automation of repetitive business processes using no-code and AI tools.`
  2. **AI Chatbots:** `Intelligent chatbots that handle customer support, lead capture, and FAQs 24/7.`
  3. **AI Assistants:** `Custom GPT-powered assistants built for your team's specific workflows.`
  4. **Lead Automation:** `Automated lead capture, scoring, and nurturing pipelines that sell while you sleep.`
  5. **CRM Automation:** `Seamless CRM integrations that auto-update records, send follow-ups, and track deals.`
  6. **Business Process Automation:** `Full business process mapping and automation for maximum operational efficiency.`

---

## 7. Sub-Service Dedicated Pages

*Page Template:* `artifacts/techtitans-ai/src/pages/SubServicePage.tsx`

- **Breadcrumb Navigation:** `Home › [Parent Pillar] › [Sub-Service Title]`
- **Headings:**
  - Header: `[Sub-Service Title]`
  - Subtitle: `[Sub-Service Description]`
  - Project Section Title: `[Sub-Service Title] Projects`
- **Coming Soon Notice (if no projects tagged):**
  - Headline: `Projects coming soon`
  - Description: `"We're completing work in this area — add projects from the admin panel and they'll appear here instantly."`
- **Bottom Call-to-Action:**
  - Heading: `Need [Sub-Service Title] for Your Brand?`
  - Subtext: `Let's discuss your project goals, scope, and timeline. We'll give you clear guidance and an honest quote.`
  - Button 1: `Start a Project`
  - Button 2: `Explore All Services`

---

## 8. Portfolio Page (`/portfolio`)

*Page File:* `artifacts/techtitans-ai/src/pages/PortfolioPage.tsx`

- **Back Button:** `Back to Home`
- **Kicker:** `OUR WORK`
- **Heading:**  
  ```
  Every Project,
  A Story Told.
  ```
- **Description:** `"We don't just deliver files — we deliver results. Choose a service category to explore case studies from that domain."`
- **Filter Tabs:**
  - `All Work`
  - `Creative Branding & Marketing`
  - `Web & App Development`
  - `Video Production & Editing`
  - `Digital Infrastructure`
  - `Mentorship & Career Guidance`
  - `AI Automation Solutions`
- **Empty State Text:** `No published projects yet in this category.`

---

## 9. Case Study Detail Page (`/portfolio/:id`)

*Page File:* `artifacts/techtitans-ai/src/pages/CaseStudy.tsx`

- **Breadcrumb / Return:** `Back to Portfolio`
- **Dynamic Project Meta Labels:**
  - `Client`
  - `Industry`
  - `Year`
  - `Duration`
  - `Budget Range`
  - `Services Provided`
  - `Tools & Technologies Used`
- **Section Headers:**
  - `Project Overview`
  - `The Challenge`
  - `The Solution`
  - `Key Results & Impact`
  - `Visual Gallery & Media Assets`
- **Bottom Navigation:**
  - `Previous Project`
  - `Next Project`
  - CTA Button: `Start Your Project Today`

---

## 10. Careers Page (`/careers`)

*Page File:* `artifacts/techtitans-ai/src/pages/Careers.tsx`

### 10.1 Hero & Introduction
- **Hiring Badge:** `WE ARE HIRING`
- **Main Heading:**  
  ```
  Build the Future With
  AVBT Technologies
  ```
- **Sub-headline:** `"Accelerate your career with real-world impact. Join our ambitious team of engineers, creators, and strategists crafting cutting-edge AI and digital solutions."`
- **Section Header:** `Open Internship Positions` (Badge: `4 Positions Available`)

### 10.2 Internship Position Cards
1. **Backend Developer Internship**
   - *Category:* Engineering | *Location:* Remote / Hybrid | *Duration:* 3 - 6 Months | *Stipend:* Performance Based / Stipend Provided
   - *Description:* Build robust, scalable APIs and microservices powering enterprise AI and web applications.
   - *Key Responsibilities:*
     - Develop and maintain RESTful APIs and real-time backend services using Node.js/Express or Python.
     - Work with databases like PostgreSQL, MongoDB, Redis, and cloud infrastructure.
     - Integrate 3rd-party services, payment gateways, and AI model endpoints.
     - Optimize server response times, write unit/integration tests, and ensure data security.
   - *Requirements:*
     - Solid understanding of JavaScript/TypeScript, Node.js, Express, or Python.
     - Hands-on experience with SQL/NoSQL databases and ORM tools (Prisma, Drizzle, or Mongoose).
     - Familiarity with Git, RESTful API design, and asynchronous programming.
     - Curiosity to learn modern cloud deployment (Docker, Vercel, AWS).

2. **Graphic Designer Internship**
   - *Category:* Design | *Location:* Remote / Hybrid | *Duration:* 3 - 6 Months | *Stipend:* Stipend Provided
   - *Description:* Create striking visuals, brand identities, marketing assets, and modern digital design for top-tier tech products.
   - *Key Responsibilities:*
     - Design social media graphics, banners, promotional materials, and marketing collateral.
     - Collaborate with UI/UX designers and marketing teams to establish cohesive brand guidelines.
     - Produce clean vector illustrations, infographics, and pitch deck presentations.
     - Experiment with creative formats including carousels, thumbnails, and short-form video assets.
   - *Requirements:*
     - Proficiency in Figma, Adobe Photoshop, Illustrator, or Canva.
     - Strong portfolio demonstrating typography, layout aesthetics, and visual hierarchy.
     - Keen eye for detail, modern tech branding trends, and minimalist aesthetics.
     - Ability to meet design deadlines and iterate quickly based on feedback.

3. **Social Media Internship**
   - *Category:* Growth & Community | *Location:* Remote | *Duration:* 3 - 6 Months | *Stipend:* Stipend Provided
   - *Description:* Grow and engage our developer & client community across LinkedIn, X/Twitter, Instagram, and tech channels.
   - *Key Responsibilities:*
     - Plan, schedule, and execute engaging content calendars for LinkedIn, Twitter, and other platforms.
     - Draft engaging captions, tech threads, project showcase posts, and announcements.
     - Engage with followers, reply to comments, monitor mentions, and participate in tech discussions.
     - Track analytics, monitor reach/impressions, and propose growth experiments.
   - *Requirements:*
     - Passionate about social media storytelling, tech trends, and content creation.
     - Strong written English communication with an engaging and professional tone.
     - Familiarity with tools like Notion, Buffer, Canva, or native analytics dashboards.
     - Enthusiasm for startups, technology, and community building.

4. **Digital Marketing Internship**
   - *Category:* Marketing | *Location:* Remote / Hybrid | *Duration:* 3 - 6 Months | *Stipend:* Stipend Provided
   - *Description:* Drive digital growth campaigns, SEO, inbound lead generation, and performance marketing strategies.
   - *Key Responsibilities:*
     - Assist in running SEO optimization, keyword research, and on-page improvements.
     - Support Google Ads and Meta campaigns, monitoring CPC, CTR, and conversions.
     - Analyze website traffic using Google Analytics and suggest conversion rate optimizations (CRO).
     - Collaborate on email marketing sequences and client outreach campaigns.
   - *Requirements:*
     - Understanding of digital marketing fundamentals (SEO, SEM, social ads, email marketing).
     - Analytical mindset with familiarity in Google Analytics or Search Console.
     - Basic understanding of copywriting for landing pages and ad copy.
     - Proactive attitude, eager to test new channels and measure campaign ROI.

### 10.3 Application & Resume Upload Form
- **Section Kicker:** `JOIN AVBT TECHNOLOGIES`
- **Heading:** `Submit Your Application`
- **Subtext:** `"Fill out the details below and attach your latest resume. All applications are directly reviewed by our leadership team."`
- **Input Labels:**
  - `Full Name *`
  - `Email Address *`
  - `Phone Number *`
  - `Applying For Role *` (Dropdown: 4 Internship options)
  - `Portfolio / GitHub / LinkedIn URL (Optional)`
  - `Attach Resume (PDF, DOC, DOCX up to 10MB) *`
  - `Why do you want to join AVBT Technologies? (Optional)`
- **Submit Button:** `Submit Application` / `Submitting Application...`
- **Submission Success Modal:**
  - Heading: `Application Received!`
  - Description: `"Thank you for applying to AVBT Technologies. We have received your resume and details at techavbt@gmail.com. Our hiring team will get in touch with you shortly."`
  - Button: `Submit Another Application`

---

## 11. Privacy Policy Page (`/privacy-policy`)

*Page File:* `artifacts/techtitans-ai/src/pages/PrivacyPolicy.tsx`

- **Kicker:** `LEGAL`
- **Heading:** `Privacy Policy`
- **Last Revised Date:** `March 2025`
- **Introductory Text:** `"At AVBT Technologies, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard the data you share with us when you visit our website or engage our services."`

### Policy Clauses:
1. **1. Information We Collect**
   - Personal Information: Name, email address, and phone number when submitting inquiry forms.
   - Project Information: Voluntarily shared business details and goals.
   - Usage Data: Non-personally identifiable browser/device info and pages visited.
   - Communication Data: Records of correspondence via email or phone.
   - *Note:* We do not collect sensitive personal data such as financial details or government IDs.
2. **2. How We Use Your Information**
   - Responding to inquiries and providing requested services.
   - Communicating project milestones, deliverables, and invoices.
   - Improving website experience and offerings.
   - Complying with statutory and legal obligations.
   - *Commitment:* We will never sell, rent, or trade your personal information to third parties.
3. **3. Services We Provide**
   - Summary of branding, web development, graphic design, and video production services.
4. **4. Data Storage & Security**
   - TLS/HTTPS encryption on all contact form transmissions.
   - Encrypted enterprise email services.
   - Secure temporary storage of client project assets.
5. **5. Cookies**
   - Essential and performance analytics cookies.
6. **6. Third-Party Services**
   - Cloud hosting, email routing, and analytical providers bound by privacy standards.
7. **7. Your Rights**
   - Rights to access, rectify, delete, and opt-out of marketing communications.
8. **8. Children's Privacy**
   - Services intended for individuals aged 18 and above.
9. **9. Changes to This Policy**
   - Periodic revisions published with updated date.
10. **10. Contact Us**
    - AVBT Technologies, #134/19, Ground Floor, AVBT Building, ITI Road, Solan (H.P.) 173212
    - Email: `contact@avbt.in`
    - Phone: `8979768681 | 7876799926 | 86270 79550`

---

## 12. Terms & Conditions Page (`/terms-conditions`)

*Page File:* `artifacts/techtitans-ai/src/pages/TermsConditions.tsx`

- **Kicker:** `LEGAL`
- **Heading:** `Terms & Conditions`
- **Last Revised Date:** `March 2025`
- **Introductory Text:** `"Please read these Terms and Conditions carefully before using AVBT Technologies' website or engaging our services. These terms outline the rules and regulations for the use of our services and website."`

### Terms Clauses:
1. **1. Acceptance of Terms:** Binding agreement upon using the website or retaining agency services.
2. **2. Services Offered:** Overview of design, web development, and digital media production.
3. **3. Project Agreements & Payments:**
   - Formal proposals and contracts required prior to commencement.
   - 50% initial project deposit; balance upon completion before final asset delivery.
   - Late payment clause (2% per month on outstanding balances).
   - Deposit non-refundability policy.
4. **4. Client Responsibilities:** Timely asset delivery, designated liaison, 5-day review window.
5. **5. Intellectual Property:**
   - Full ownership transfer of deliverables to client upon 100% payment clearance.
   - Portfolio showcase rights retained by AVBT Technologies unless NDA requested.
   - Third-party font/asset licensing disclosures.
6. **6. Revisions & Scope Changes:** Pre-defined revision rounds; out-of-scope tasks billed separately.
7. **7. Confidentiality:** Strict mutual non-disclosure of business strategies and proprietary info.
8. **8. Limitation of Liability:** Capped to the total amount paid by the client for the specific project.
9. **9. Warranties & Disclaimers:** Professional workmanship warranty; no guarantee of specific sales/conversion targets.
10. **10. Termination:** 14 days' written notice by either party.
11. **11. Governing Law:** Subject to the exclusive jurisdiction of the courts of Solan, Himachal Pradesh, India.
12. **12. Contact Us:** Office address, `contact@avbt.in`, and phone lines.

---

### Suggested Action Items for Copy Upgrade:
- [ ] Review Founder/Team names and bios in About Us to reflect real leadership.
- [ ] Check if Security Policy needs a separate dedicated page or redirect.
- [ ] Review Hero taglines to test higher-converting value propositions.
- [ ] Update legal "Last Revised" dates to current month/year.
