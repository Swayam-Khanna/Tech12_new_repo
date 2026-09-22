import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PriceItem {
  service: string;
  starting: string;
  category: string;
  deliverables: string[];
}

const pricingData: PriceItem[] = [
  {
    service: "Logo Design",
    starting: "₹5,000+",
    category: "Branding",
    deliverables: ["Vector files (AI, EPS, SVG, PNG)", "Multiple unique concepts", "Full commercial usage rights"],
  },
  {
    service: "Brand Identity",
    starting: "₹15,000+",
    category: "Branding",
    deliverables: ["Logo system & variants", "Typography & color hierarchy", "Comprehensive brand guidelines"],
  },
  {
    service: "Landing Page",
    starting: "₹8,000+",
    category: "Web & App",
    deliverables: ["High-conversion structure", "Mobile responsive design", "Fast performance (<2s load)"],
  },
  {
    service: "Business Website",
    starting: "₹15,000+",
    category: "Web & App",
    deliverables: ["Custom multi-page design", "SEO foundations & meta tags", "CMS / form integrations"],
  },
  {
    service: "E-commerce",
    starting: "₹25,000+",
    category: "Web & App",
    deliverables: ["Product catalogue & cart", "Secure payment gateway", "Order notification workflows"],
  },
  {
    service: "Custom Web App",
    starting: "₹50,000+",
    category: "Web & App",
    deliverables: ["React / Node.js architecture", "Authentication & database", "Scalable cloud deployment"],
  },
  {
    service: "Reel Editing",
    starting: "₹2,000+",
    category: "Video",
    deliverables: ["Dynamic pacing & cuts", "Subtitles & sound effects", "Platform-ready 9:16 format"],
  },
  {
    service: "YouTube Editing",
    starting: "₹5,000+",
    category: "Video",
    deliverables: ["Narrative pacing & B-roll", "Audio cleanup & color grade", "Custom graphics & callouts"],
  },
  {
    service: "AI Automation",
    starting: "₹10,000+",
    category: "AI & Tech",
    deliverables: ["AI chatbot / lead assistant", "CRM or webhook connection", "Testing & team handover"],
  },
  {
    service: "Website Maintenance",
    starting: "₹3,000+ / month",
    category: "Infrastructure",
    deliverables: ["Regular security updates", "Automated daily backups", "Uptime & speed monitoring"],
  },
];

const pricingFaqs = [
  {
    q: "How much does a website cost?",
    a: "Website pricing depends on pages, UX design depth, CMS requirements, custom integrations, content development, functionality, and ongoing support.",
  },
  {
    q: "Why can two websites have different prices?",
    a: "Features, design depth, third-party integrations, authentication, payment handling, admin dashboards, content quality, rigorous testing, and maintenance change the required engineering effort.",
  },
  {
    q: "Can I get a fixed quote?",
    a: "Yes. Once your project scope, requirements, and deliverables are sufficiently defined during our discovery consultation, we provide a fixed-price proposal.",
  },
  {
    q: "Do you offer monthly retainers?",
    a: "Yes. Retainers can be arranged for recurring design, video production, website maintenance, marketing creatives, or ongoing AI automation workflows when a defined ongoing scope exists.",
  },
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-white">
      <SEO
        title="AVBT Technologies Pricing | Branding, Websites, Video & AI Automation"
        description="Explore verified starting prices for AVBT Technologies services. Compare project types and request a scope-based quote."
        keywords="AVBT pricing, website cost, branding cost India, AI automation pricing, video editing rates"
      />
      <Navbar />

      <div className="flex-1 pt-24 sm:pt-28 pb-20 max-w-7xl mx-auto px-6 md:px-12 w-full">
        {/* Compact Header */}
        <FadeIn className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider uppercase mb-3">
            <span>⚡</span> TRANSPARENT PRICING
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-tight mb-3">
            Transparent Starting Prices, <span className="text-gradient">Custom Scope</span>
          </h1>
          <p className="text-foreground-muted text-sm sm:text-base max-w-xl mx-auto">
            Clear base estimates for every project. Final investment is tailored to your scope, timeline, and deliverables.
          </p>
        </FadeIn>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {pricingData.map((item, i) => (
            <FadeIn key={item.service} delay={i * 0.05}>
              <div className="glass-card rounded-3xl p-8 h-full flex flex-col justify-between border border-white/10 hover:border-primary/40 transition-all duration-300 group hover:shadow-xl hover:shadow-primary/5">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-primary-light font-medium">
                      {item.category}
                    </span>
                    <span className="text-xs text-foreground-muted">Starting</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {item.service}
                  </h3>
                  <div className="text-2xl sm:text-3xl font-bold text-gradient mb-6">
                    {item.starting}
                  </div>
                  <ul className="space-y-2.5 mb-8 border-t border-white/5 pt-6">
                    {item.deliverables.map((d, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-foreground-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href={`/#contact-form?service=${encodeURIComponent(item.category === "Branding" ? "Branding & Graphic Design" : item.category === "Video" ? "Video Editing & Production" : item.category === "AI & Tech" ? "AI & Automation" : "Web Development")}`} tabIndex={-1}>
                  <Button className="w-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 hover:border-primary text-white transition-all duration-200">
                    Get a Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Pricing FAQ */}
        <div className="max-w-4xl mx-auto mb-20">
          <FadeIn className="text-center mb-12">
            <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Pricing Questions Answered
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {pricingFaqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold text-base text-white">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-sm text-foreground-muted leading-relaxed border-t border-white/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-primary/20 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
            Have a project with custom requirements?
          </h3>
          <p className="text-foreground-muted text-sm sm:text-base max-w-xl mx-auto mb-6">
            Tell us what you are building. We'll evaluate technical feasibility, provide recommendations, and prepare an itemized scope.
          </p>
          <a href="/#contact-form">
            <Button size="lg" className="font-semibold">
              Discuss Your Project
            </Button>
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
