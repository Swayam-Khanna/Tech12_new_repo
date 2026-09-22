import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";
import { FadeIn } from "./ui/fade-in";
import { servicesData } from "@/data/servicesData";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    subService: "",
    message: "",
  });

  // Automatically pre-select service or focus form when navigating with hash / query
  useEffect(() => {
    const handleHashAndParams = () => {
      if (window.location.hash === "#contact" || window.location.hash === "#contact-form") {
        const formEl = document.getElementById("contact-form");
        if (formEl) {
          formEl.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }

      // Check URL query parameters (e.g. ?service=Branding%20%26%20Graphic%20Design)
      const searchParams = new URLSearchParams(window.location.search);
      const serviceParam = searchParams.get("service");
      if (serviceParam) {
        const matched = servicesData.find(
          (s) =>
            s.shortTitle.toLowerCase() === serviceParam.toLowerCase() ||
            s.id.toLowerCase() === serviceParam.toLowerCase() ||
            s.title.toLowerCase().includes(serviceParam.toLowerCase())
        );
        if (matched) {
          setForm((prev) => ({ ...prev, service: matched.shortTitle }));
        }
      }
    };

    handleHashAndParams();
    window.addEventListener("hashchange", handleHashAndParams);
    return () => window.removeEventListener("hashchange", handleHashAndParams);
  }, []);

  const currentService = servicesData.find(
    (s) => s.shortTitle === form.service || s.title === form.service || s.id === form.service
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/contact`.replace(/\/+/g, "/").replace(/^\//, "/"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Something went wrong.");
      }

      setIsSuccess(true);
      setForm({ name: "", email: "", service: "", subService: "", message: "" });
      setTimeout(() => setIsSuccess(false), 6000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Info */}
          <div>
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-white">
                Let's Build Something <span className="text-gradient">That Matters</span>
              </h2>
              <p className="text-foreground-muted text-lg mb-6 max-w-lg leading-relaxed font-sans">
                Have a project, redesign, automation idea or digital problem? Send the essentials and we'll review the scope before recommending the next step.
              </p>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-foreground-muted max-w-lg">
                <strong>No-pressure consultation:</strong> Project information is used to understand your enquiry and respond appropriately.
              </div>
            </FadeIn>
          </div>

          {/* Right: Form */}
          <FadeIn delay={0.2} direction="left">
            <div className="glass-card rounded-3xl p-8 lg:p-10 relative">
              {isSuccess ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-surface/50 backdrop-blur-md rounded-3xl z-20">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-2">Message Received! We'll Be in Touch Within 24 Hours.</h3>
                  <p className="text-foreground-muted max-w-md">
                    A member of our team at AVBT Technologies will review your inquiry and respond promptly. While you wait, explore our portfolio to see recent work.
                  </p>
                </div>
              ) : null}

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6 scroll-mt-28">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">Name</label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80 ml-1">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 ml-1">Service Required</label>
                  <select
                    required
                    name="service"
                    value={form.service}
                    onChange={(e) => {
                      const selectedVal = e.target.value;
                      setForm((prev) => ({ ...prev, service: selectedVal, subService: "" }));
                    }}
                    className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.2em",
                    }}
                  >
                    <option value="" disabled className="bg-[#111827] text-white/50">Select a service...</option>
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.shortTitle} className="bg-[#111827] text-white">
                        {s.shortTitle}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sub-category dropdown (Appears dynamically based on selected service) */}
                {currentService && currentService.subServices.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-white/80 ml-1">Sub-Category</label>
                      <span className="text-xs text-primary font-medium">Specific Requirement</span>
                    </div>
                    <select
                      name="subService"
                      value={form.subService}
                      onChange={handleChange}
                      className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2338BDF8'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                        backgroundSize: "1.2em",
                      }}
                    >
                      <option value="" className="bg-[#111827] text-white/50">
                        Select a sub-category (e.g. {currentService.subServices[0]?.title})...
                      </option>
                      {currentService.subServices.map((sub) => (
                        <option key={sub.id} value={sub.title} className="bg-[#111827] text-white">
                          {sub.title}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80 ml-1">Message</label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full font-semibold"
                >
                  {isSubmitting ? "Sending..." : "Get a Free Consultation"}
                </Button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
