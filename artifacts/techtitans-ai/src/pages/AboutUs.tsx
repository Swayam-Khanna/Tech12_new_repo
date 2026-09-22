import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Target, Eye, Users, Zap, Award, BarChart3, Handshake } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

const team = [
  {
    name: "Aryan Sharma",
    role: "Founder & Creative Director",
    bio: "Aryan is the strategic and creative force behind AVBT Technologies. With 4+ years in digital branding and agency management, he leads brand strategy, client relationships, and creative direction for all major projects.",
    initials: "AS",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Rahul Verma",
    role: "Lead Web Developer",
    bio: "Full-stack engineer with deep expertise in React, Next.js, Node.js, and cloud architectures. Rahul leads all web and app development projects at AVBT Technologies, ensuring every digital product is fast, scalable, and built to last.",
    initials: "RV",
    color: "from-violet-500 to-purple-500",
  },
  {
    name: "Priya Singh",
    role: "Head of Design",
    bio: "Award-winning visual designer specializing in brand identity systems, UI/UX design, and motion graphics. Priya oversees the design quality across all AVBT client projects and is the creative backbone of the branding team.",
    initials: "PS",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Karan Thakur",
    role: "Video Production Lead",
    bio: "Cinematic storyteller with 5+ years of professional video editing, DaVinci Resolve color grading, and motion design. Karan produces the video content that helps AVBT clients grow their audiences and sell their products.",
    initials: "KT",
    color: "from-green-500 to-teal-500",
  },
];

const values = [
  {
    icon: BarChart3,
    title: "Understand Before Choosing",
    desc: "Understand the business before choosing the technology. We ensure every tech stack or design system serves your strategic objectives.",
  },
  {
    icon: Eye,
    title: "Design for the Audience",
    desc: "Design for the audience, not only the visual trend. A visually stunning asset must convert and resonate with your end users.",
  },
  {
    icon: Handshake,
    title: "Maintainable Foundations",
    desc: "Build maintainable foundations instead of quick patches. Quality code, scalable architecture, and modular design guidelines.",
  },
  {
    icon: Zap,
    title: "Practical AI Value",
    desc: "Use AI where it creates practical value. Automate repetitive friction, route information accurately, and retain human oversight.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered Across India" },
  { value: "30+", label: "Satisfied Clients — Startups to SMEs" },
  { value: "4+", label: "Years Building Digital Products" },
  { value: "100%", label: "Client Satisfaction & Delivery" },
];

export default function AboutUs() {
  const [, navigate] = useLocation();

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="About AVBT Technologies | Digital Design, Development & AI"
        description="Learn about AVBT Technologies, a digital agency combining branding, technology, creative production and AI automation for businesses."
        keywords="about AVBT Technologies, digital agency, creative production, AI automation, branding, web development"
      />
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-24">
        {/* Back */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">ABOUT AVBT TECHNOLOGIES</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-tight max-w-4xl text-white">
            Building Digital <span className="text-gradient">Brands, Products &amp; Systems</span>
          </h1>
          
          {/* Main Copy & Entity Definition Block */}
          <div className="p-6 md:p-8 rounded-2xl bg-surface/80 border border-primary/20 backdrop-blur-md mb-8 max-w-4xl shadow-lg space-y-4">
            <p className="text-white/95 text-base md:text-lg leading-relaxed font-sans">
              AVBT Technologies is a digital agency and technology partner focused on the intersection of design, development, creative production and AI automation. We help businesses move from idea to execution through connected digital services rather than disconnected deliverables.
            </p>
            <p className="text-foreground-muted text-sm md:text-base leading-relaxed font-sans">
              The company is based in Solan, Himachal Pradesh, India, while digital delivery can support clients beyond its home market where the service and project requirements allow.
            </p>
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-foreground-muted">
              <div><strong className="text-white">Business:</strong> AVBT Technologies</div>
              <div><strong className="text-white">Domain:</strong> avbt.in</div>
              <div><strong className="text-white">Base:</strong> Solan, Himachal Pradesh, India</div>
              <div><strong className="text-white">Services:</strong> Branding • Web &amp; App • Video • Infrastructure • Mentorship • AI</div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-foreground-muted text-xs sm:text-sm font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center"
        >
          <div>
            <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-5">OUR STORY</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white">
              From Solan to Scaling Brands Across India — Our Story
            </h2>
            <div className="space-y-5 text-foreground-muted leading-relaxed">
              <p>
                AVBT Technologies was founded in Solan, Himachal Pradesh, out of a clear-eyed frustration: too many genuinely great Indian businesses were invisible online. Startups with world-class products were losing customers to competitors with stronger branding, faster websites, and sharper content strategies — not better products.
              </p>
              <p>
                We assembled a specialist team — brand designers, full-stack developers, video producers, and AI engineers — and put them under one roof. Today, AVBT Technologies is Himachal Pradesh's leading digital agency, serving startups, creators, and growing businesses with the creative quality of a top-tier city studio and the personal care of a boutique partner.
              </p>
              <p>
                Based in Solan (H.P.), we work with clients across India and internationally — combining deep technical expertise, creative excellence, and an obsession with results that our clients can measure.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-card rounded-2xl p-6 flex flex-col items-start gap-3">
              <Target className="w-8 h-8 text-primary" />
              <h4 className="font-display font-bold text-white">Our Mission</h4>
              <p className="text-foreground-muted text-sm">To make world-class digital design, development, and automation accessible to every ambitious Indian brand — regardless of size or stage.</p>
            </div>
            <div className="glass-card rounded-2xl p-6 flex flex-col items-start gap-3 sm:mt-8">
              <Eye className="w-8 h-8 text-accent" />
              <h4 className="font-display font-bold text-white">Our Vision</h4>
              <p className="text-foreground-muted text-sm">To be the most trusted full-service digital agency for the next generation of Indian startups and growth-stage companies.</p>
            </div>
            <div className="glass-card rounded-2xl p-6 flex flex-col items-start gap-3">
              <Users className="w-8 h-8 text-accent" />
              <h4 className="font-display font-bold text-white">Who We Serve</h4>
              <p className="text-foreground-muted text-sm">Startups launching their first brand, entrepreneurs ready to go digital, SMEs scaling their online presence, and creators building audience-driven businesses across India.</p>
            </div>
            <div className="glass-card rounded-2xl p-6 flex flex-col items-start gap-3 sm:mt-8">
              <Zap className="w-8 h-8 text-primary" />
              <h4 className="font-display font-bold text-white">What We Specialize In</h4>
              <p className="text-foreground-muted text-sm">Complex digital challenges — brand identity systems, high-performance web applications, AI automation pipelines, and cinematic video content — delivered with precision and creative excellence.</p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24"
        >
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">OUR APPROACH</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-white">Principles That Drive Every Project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <val.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display font-bold text-white mb-3">{val.title}</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-24"
        >
          <p className="text-primary font-semibold tracking-widest text-sm uppercase mb-4">THE TEAM</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-white">Meet the AVBT Technologies Team — Designers, Developers & Strategists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center flex flex-col justify-between"
              >
                <div>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                    <span className="text-white font-display font-bold text-xl">{member.initials}</span>
                  </div>
                  <h3 className="font-display font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-primary text-xs font-semibold mb-3">{member.role}</p>
                  <p className="text-foreground-muted text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card rounded-3xl p-10 md:p-14 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
            Ready to Work with <span className="text-gradient">Himachal's Best Digital Team?</span>
          </h2>
          <p className="text-foreground-muted mb-8 max-w-xl mx-auto text-base sm:text-lg">
            Connect with AVBT Technologies. We'll audit your current digital presence, identify growth opportunities, and propose a clear action plan — no pitch, just value.
          </p>
          <a
            href="/#contact-form"
            className="inline-block py-4 px-10 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-95 shadow-lg shadow-primary/20 transition-all hover:scale-105"
          >
            Get Free Strategy Guide →
          </a>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
