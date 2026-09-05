import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";

const words = ["Digital", "Excellence"];

function CinematicCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = canvas.offsetWidth;
    let h = canvas.offsetHeight;
    canvas.width = w;
    canvas.height = h;

    const particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.2 + 0.3,
      pulse: Math.random() * Math.PI * 2,
      ps: Math.random() * 0.015 + 0.005,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    const orbs = [
      { x: w * 0.15, y: h * 0.3, r: 180, vx: 0.08, vy: 0.05, color: "59,130,246" },
      { x: w * 0.8, y: h * 0.6, r: 220, vx: -0.06, vy: 0.07, color: "34,211,238" },
      { x: w * 0.5, y: h * 0.8, r: 150, vx: 0.05, vy: -0.08, color: "139,92,246" },
    ];

    function tick() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, w, h);

      // Orbs
      orbs.forEach((o) => {
        o.x += o.vx;
        o.y += o.vy;
        if (o.x < -o.r) o.x = w + o.r;
        if (o.x > w + o.r) o.x = -o.r;
        if (o.y < -o.r) o.y = h + o.r;
        if (o.y > h + o.r) o.y = -o.r;
        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        g.addColorStop(0, `rgba(${o.color},0.07)`);
        g.addColorStop(1, `rgba(${o.color},0)`);
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      // Particles
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy; p.pulse += p.ps;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        const op = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));
        const pr = p.r * (0.85 + 0.15 * Math.sin(p.pulse * 1.2));
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, pr * 4);
        g.addColorStop(0, `rgba(147,197,253,${op})`);
        g.addColorStop(1, `rgba(59,130,246,0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, pr * 4, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59,130,246,${0.05 * (1 - d / 90)})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(tick);
    }

    tick();

    const onResize = () => {
      w = canvas.offsetWidth; h = canvas.offsetHeight;
      canvas.width = w; canvas.height = h;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [mounted, setMounted] = useState(false);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });
  const rotateX = useTransform(springY, [-300, 300], [5, -5]);
  const rotateY = useTransform(springX, [-300, 300], [-5, 5]);
  const glowX = useTransform(springX, [-500, 500], ["-20%", "120%"]);
  const glowY = useTransform(springY, [-500, 500], ["-20%", "120%"]);

  useEffect(() => { setMounted(true); }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as any } },
  };

  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Cinematic canvas background */}
      <CinematicCanvas />

      {/* Ambient grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Cursor-reactive glow */}
      {mounted && (
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            left: glowX,
            top: glowY,
            background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {/* Static blobs */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/15 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-accent/15 rounded-full blur-[120px] mix-blend-screen pointer-events-none" style={{ animation: "pulse 6s ease-in-out infinite reverse" }} />
      <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-violet-500/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Content */}
        <div className="flex flex-col gap-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card w-fit mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-foreground-muted">Available for new projects</span>
            </div>
          </motion.div>

          <div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1]">
                <motion.span variants={wordVariants} className="inline-block mr-4">We</motion.span>
                <motion.span variants={wordVariants} className="inline-block mr-4">Build</motion.span>
                <br />
                {words.map((word, i) => (
                  <motion.span
                    key={word}
                    variants={wordVariants}
                    className={`inline-block mr-3 ${i === 0 ? "text-gradient" : "text-gradient"}`}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg sm:text-xl text-foreground-muted max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Creative branding, web development, video production, AI automation, digital infrastructure & career mentorship — all under one roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <a href="/#contact" tabIndex={-1}>
              <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Button>
            </a>
            <a href="/portfolio" tabIndex={-1}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto glow-border group">
                <span className="group-hover:text-white transition-colors">View Portfolio</span>
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative lg:h-[620px] flex justify-center items-center"
        >
          <motion.div
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            animate={{ y: [0, -14, 0], rotate: [0, 0.8, -0.8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[500px]"
          >
            {/* Main Outer Glass Container Box */}
            <div className="relative rounded-[32px] p-6 sm:p-7 border border-white/10 bg-[#0B1120]/75 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden">
              {/* Subtle background gradient glow behind rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-blue-600/30 to-emerald-500/25 rounded-full blur-[80px] pointer-events-none" />

              {/* Top Left Tag: AI POWERED */}
              <div className="flex justify-between items-center mb-2 z-10 relative">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-semibold tracking-wide">
                  <span className="text-[13px]">⚡</span> AI POWERED
                </div>
              </div>

              {/* Central Tech Office Workplace Graphic */}
              <div className="relative z-10 my-3 rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                <motion.img
                  src="/images/hero-tech-office.jpg"
                  alt="ABVT Technology Modern Infrastructure & Development Workspace"
                  className="w-full h-[260px] sm:h-[300px] object-cover object-center transform transition-transform duration-700 hover:scale-105"
                  animate={{ scale: [1, 1.015, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Subtle vignette/gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Bottom Feature Pill Card */}
              <div className="relative z-10 mt-2 p-3 sm:p-3.5 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md grid grid-cols-3 gap-2 text-left">
                {/* Item 1 */}
                <div className="flex items-center gap-2.5 p-1">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <span className="text-sm">⚛</span>
                  </div>
                  <div>
                    <h5 className="text-[11px] sm:text-xs font-bold text-white leading-tight">AI Automation</h5>
                    <p className="text-[9px] sm:text-[10px] text-foreground-muted leading-tight">Smart Solutions</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-center gap-2.5 p-1 border-l border-white/5 pl-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <span className="text-sm">💻</span>
                  </div>
                  <div>
                    <h5 className="text-[11px] sm:text-xs font-bold text-white leading-tight">Web Development</h5>
                    <p className="text-[9px] sm:text-[10px] text-foreground-muted leading-tight">Scalable Platforms</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-center gap-2.5 p-1 border-l border-white/5 pl-2">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <span className="text-sm">🚀</span>
                  </div>
                  <div>
                    <h5 className="text-[11px] sm:text-xs font-bold text-white leading-tight">Digital Systems</h5>
                    <p className="text-[9px] sm:text-[10px] text-foreground-muted leading-tight">Powerful Infra</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Top-Right Conversion Rate Glass Badge */}
            <motion.div
              animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 sm:-right-6 rounded-2xl p-3.5 sm:p-4 bg-[#0F172A]/85 border border-white/15 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-20 min-w-[150px] sm:min-w-[170px]"
            >
              <div className="text-[11px] font-medium text-foreground-muted">Conversion Rate</div>
              <div className="text-xl sm:text-2xl font-display font-extrabold text-white my-0.5 tracking-tight">
                +248%
              </div>
              {/* Green trend line graph */}
              <div className="flex items-center my-1.5">
                <svg className="w-full h-5 stroke-emerald-400 fill-none" viewBox="0 0 100 20">
                  <path
                    d="M 2 16 L 18 13 L 32 15 L 48 9 L 64 12 L 80 5 L 98 2"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-[10px] text-foreground-muted/80">vs Last 30 Days</div>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
