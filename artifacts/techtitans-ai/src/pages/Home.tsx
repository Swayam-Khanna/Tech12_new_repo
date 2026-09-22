import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { FadeIn } from "@/components/ui/fade-in";
import { ChevronDown, CheckCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const whyPoints = [
  "One partner across creative, technology and automation.",
  "Strategy and execution connected in the same workflow.",
  "Clear deliverables, scope and communication.",
  "Modern web and product development practices.",
  "Creative systems designed for consistent brand use.",
  "Automation built around real workflows and defined objectives.",
  "Remote collaboration where the service and project requirements allow.",
  "Evidence and real case studies prioritized over unsupported claims.",
];

const processSteps = [
  { num: "01", name: "Discover", desc: "Understand the business, audience, problem and objective." },
  { num: "02", name: "Define", desc: "Convert the brief into scope, deliverables and success criteria." },
  { num: "03", name: "Design", desc: "Create visual direction, UX and content structure." },
  { num: "04", name: "Build", desc: "Develop, edit, automate or implement the approved solution." },
  { num: "05", name: "Validate", desc: "Test functionality, responsiveness, content and performance." },
  { num: "06", name: "Launch", desc: "Deploy and hand over agreed assets and access." },
  { num: "07", name: "Improve", desc: "Iterate using feedback and real performance data." },
];

const homeFaqs = [
  {
    q: "What does AVBT Technologies do?",
    a: "AVBT Technologies provides branding, web and app development, video production and editing, digital infrastructure, AI automation and digital-skills mentorship.",
  },
  {
    q: "Can AVBT work with clients outside India?",
    a: "Yes. Many digital services can be delivered remotely across countries. Availability depends on the service, communication requirements, time zones, payment arrangements and applicable project requirements.",
  },
  {
    q: "How much does a website cost?",
    a: "Website cost depends on scope. Landing pages, business websites, e-commerce stores and custom web applications require different levels of design, development, testing and integration. See the Pricing page for verified starting ranges.",
  },
  {
    q: "How do I hire AVBT Technologies?",
    a: "Start with a free consultation or project enquiry. Share your objective, required service, approximate timeline and references so AVBT can recommend the appropriate scope.",
  },
  {
    q: "Does AVBT provide AI automation?",
    a: "Yes. AI automation can include chatbots, lead workflows, CRM automation, internal assistants and business-process workflows, subject to technical feasibility and agreed scope.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="AVBT Technologies | Digital Agency for Branding, Web, AI & Creative"
        description="AVBT Technologies helps businesses build brands, websites, digital products, content and AI-powered workflows through design, development, creative production and automation."
        keywords="digital agency, digital partner, creative agency, technology partner, website development, brand identity, AI automation, video editing"
      />
      <Navbar />
      <Hero />

      {/* AEO Answer Block */}
      <section className="py-8 sm:py-12 border-y border-white/5 bg-surface/20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold text-xl">
              ✦
            </div>
            <div>
              <p className="text-xs font-semibold tracking-wider uppercase text-primary mb-1">Answer Engine Optimization (AEO)</p>
              <h2 className="text-lg md:text-xl font-display font-bold text-white mb-2">What does AVBT Technologies do?</h2>
              <p className="text-sm md:text-base text-foreground-muted leading-relaxed font-sans">
                AVBT Technologies is a digital agency providing branding and graphic design, web and app development, video production and editing, digital infrastructure support, AI automation and digital-skills mentorship. The company works with businesses and professionals through remote and location-based delivery where available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* Why AVBT Section */}
      <section className="py-12 sm:py-20 relative bg-surface/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-10 sm:mb-16">
            <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">OUR PRINCIPLES &amp; COMMITMENT</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-5 text-white">
              Why <span className="text-gradient">AVBT Technologies</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto text-base sm:text-lg">
              We connect design, technology, and automation into a unified, high-standard workflow.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPoints.map((point, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="glass-card rounded-2xl p-6 h-full flex flex-col justify-start border border-white/5 hover:border-primary/30 transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 flex-shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed font-sans">{point}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-10 sm:mb-16">
            <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">HOW WE WORK</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-5 text-white">
              Our 7-Step <span className="text-gradient">Process</span>
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto text-base sm:text-lg">
              A structured, transparent delivery framework from initial concept to launch and ongoing iteration.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.num} className="glass-card rounded-2xl p-6 border border-white/5 relative group hover:border-primary/40 transition-colors">
                <span className="text-3xl font-display font-black text-primary/40 group-hover:text-primary transition-colors block mb-2">{step.num}</span>
                <h3 className="text-lg font-display font-bold text-white mb-2">{step.name}</h3>
                <p className="text-xs sm:text-sm text-foreground-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
            <div className="glass-card rounded-2xl p-6 border border-primary/30 bg-primary/5 flex flex-col justify-center items-start">
              <span className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">Ready to Start?</span>
              <h3 className="text-base font-bold text-white mb-3">Discuss your project scope today</h3>
              <a href="/#contact-form" className="inline-flex items-center gap-2 text-xs font-semibold text-primary hover:text-white transition-colors">
                Book a consultation <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />

      {/* Homepage FAQ Section */}
      <section className="py-12 sm:py-20 relative bg-surface/20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-10 sm:mb-16">
            <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">QUESTIONS &amp; ANSWERS</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-5 text-white">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-foreground-muted text-base">
              Clear answers to common questions about working with AVBT Technologies.
            </p>
          </FadeIn>

          <div className="space-y-4">
            {homeFaqs.map((faq, i) => {
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
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
