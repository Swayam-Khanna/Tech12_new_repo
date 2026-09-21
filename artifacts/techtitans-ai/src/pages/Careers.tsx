import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Server, 
  Palette, 
  Share2, 
  TrendingUp, 
  Briefcase, 
  Clock, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Upload,
  ArrowRight
} from "lucide-react";

interface InternshipRole {
  id: string;
  title: string;
  category: string;
  icon: any;
  type: string;
  location: string;
  duration: string;
  stipend: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const INTERNSHIPS: InternshipRole[] = [
  {
    id: "backend-developer",
    title: "Backend Developer Internship",
    category: "Engineering",
    icon: Server,
    type: "Internship / Full-time opportunity",
    location: "Remote / Hybrid",
    duration: "3 - 6 Months",
    stipend: "Performance Based / Stipend Provided",
    description: "Build robust, scalable APIs and microservices powering enterprise AI and web applications.",
    responsibilities: [
      "Develop and maintain RESTful APIs and real-time backend services using Node.js/Express or Python.",
      "Work with databases like PostgreSQL, MongoDB, Redis, and cloud infrastructure.",
      "Integrate 3rd-party services, payment gateways, and AI model endpoints.",
      "Optimize server response times, write unit/integration tests, and ensure data security."
    ],
    requirements: [
      "Solid understanding of JavaScript/TypeScript, Node.js, Express, or Python.",
      "Hands-on experience with SQL/NoSQL databases and ORM tools (Prisma, Drizzle, or Mongoose).",
      "Familiarity with Git, RESTful API design, and asynchronous programming.",
      "Curiosity to learn modern cloud deployment (Docker, Vercel, AWS)."
    ]
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer Internship",
    category: "Design",
    icon: Palette,
    type: "Internship",
    location: "Remote / Hybrid",
    duration: "3 - 6 Months",
    stipend: "Stipend Provided",
    description: "Create striking visuals, brand identities, marketing assets, and modern digital design for top-tier tech products.",
    responsibilities: [
      "Design social media graphics, banners, promotional materials, and marketing collateral.",
      "Collaborate with UI/UX designers and marketing teams to establish cohesive brand guidelines.",
      "Produce clean vector illustrations, infographics, and pitch deck presentations.",
      "Experiment with creative formats including carousels, thumbnails, and short-form video assets."
    ],
    requirements: [
      "Proficiency in Figma, Adobe Photoshop, Illustrator, or Canva.",
      "Strong portfolio demonstrating typography, layout aesthetics, and visual hierarchy.",
      "Keen eye for detail, modern tech branding trends, and minimalist aesthetics.",
      "Ability to meet design deadlines and iterate quickly based on feedback."
    ]
  },
  {
    id: "social-media",
    title: "Social Media Internship",
    category: "Growth & Community",
    icon: Share2,
    type: "Internship",
    location: "Remote",
    duration: "3 - 6 Months",
    stipend: "Stipend Provided",
    description: "Grow and engage our developer & client community across LinkedIn, X/Twitter, Instagram, and tech channels.",
    responsibilities: [
      "Plan, schedule, and execute engaging content calendars for LinkedIn, Twitter, and other platforms.",
      "Draft engaging captions, tech threads, project showcase posts, and announcements.",
      "Engage with followers, reply to comments, monitor mentions, and participate in tech discussions.",
      "Track analytics, monitor reach/impressions, and propose growth experiments."
    ],
    requirements: [
      "Passionate about social media storytelling, tech trends, and content creation.",
      "Strong written English communication with an engaging and professional tone.",
      "Familiarity with tools like Notion, Buffer, Canva, or native analytics dashboards.",
      "Enthusiasm for startups, technology, and community building."
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Internship",
    category: "Marketing",
    icon: TrendingUp,
    type: "Internship",
    location: "Remote / Hybrid",
    duration: "3 - 6 Months",
    stipend: "Stipend Provided",
    description: "Drive digital growth campaigns, SEO, inbound lead generation, and performance marketing strategies.",
    responsibilities: [
      "Assist in running SEO optimization, keyword research, and on-page improvements.",
      "Support Google Ads and Meta campaigns, monitoring CPC, CTR, and conversions.",
      "Analyze website traffic using Google Analytics and suggest conversion rate optimizations (CRO).",
      "Collaborate on email marketing sequences and client outreach campaigns."
    ],
    requirements: [
      "Understanding of digital marketing fundamentals (SEO, SEM, social ads, email marketing).",
      "Analytical mindset with familiarity in Google Analytics or Search Console.",
      "Basic understanding of copywriting for landing pages and ad copy.",
      "Proactive attitude, eager to test new channels and measure campaign ROI."
    ]
  }
];

export default function Careers() {
  const { toast } = useToast();
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSelectRoleToApply = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    const formElement = document.getElementById("apply-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a resume under 10MB.",
          variant: "destructive",
        });
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole) {
      toast({
        title: "Please select a role",
        description: "Choose an internship position from the list.",
        variant: "destructive",
      });
      return;
    }
    if (!resumeFile) {
      toast({
        title: "Resume Required",
        description: "Please attach your resume file (PDF, DOC, DOCX).",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("role", selectedRole);
      formData.append("portfolio", portfolio);
      formData.append("coverNote", coverNote);
      formData.append("resume", resumeFile);

      const response = await fetch("/api/careers/apply", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        toast({
          title: "Application Submitted Successfully!",
          description: "We have received your application and resume. Our recruitment team will review it soon.",
        });
      } else {
        throw new Error(data.message || "Failed to submit application");
      }
    } catch (err: any) {
      toast({
        title: "Submission Failed",
        description: err.message || "Something went wrong while sending your application. Please try again or email us directly at techavbt@gmail.com.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary selection:text-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        {/* Hero Section */}
        <section className="relative px-6 md:px-12 max-w-7xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <Briefcase className="w-3.5 h-3.5" />
            We Are Hiring
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Build the Future With <span className="text-gradient">AVBT Technologies</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground-muted max-w-3xl mx-auto leading-relaxed">
            Accelerate your career with real-world impact. Join our ambitious team of engineers, creators, and strategists crafting cutting-edge AI and digital solutions.
          </p>
        </section>

        {/* Roles Grid */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-28">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Open Internship Positions</h2>
              <p className="text-sm text-foreground-muted mt-1">Explore current openings and find your fit.</p>
            </div>
            <span className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full text-foreground-muted">
              4 Positions Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INTERNSHIPS.map((role) => {
              const Icon = role.icon;
              return (
                <Card
                  key={role.id}
                  className="bg-surface/60 border-white/10 hover:border-primary/40 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-primary/5"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-primary-light font-medium">
                        {role.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                      {role.title}
                    </CardTitle>
                    <CardDescription className="text-foreground-muted text-sm line-clamp-2 mt-1">
                      {role.description}
                    </CardDescription>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-foreground-muted/80 pt-3">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        {role.duration}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-2 flex-1 flex flex-col justify-between">
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-white/90 mb-2">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-1.5 text-xs text-foreground-muted">
                          {role.responsibilities.slice(0, 3).map((resp, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-white/90 mb-2">
                          Requirements
                        </h4>
                        <ul className="space-y-1.5 text-xs text-foreground-muted">
                          {role.requirements.slice(0, 3).map((req, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Button
                      onClick={() => handleSelectRoleToApply(role.title)}
                      className="w-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 hover:border-primary text-white transition-all duration-200 group-hover:shadow-md"
                    >
                      Apply for this Position
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Application Form Section */}
        <section id="apply-form" className="px-6 md:px-12 max-w-4xl mx-auto scroll-mt-28">
          <div className="bg-surface/80 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div className="mb-8">
              <span className="text-xs uppercase tracking-wider font-semibold text-primary">Join AVBT Technologies</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-1">Submit Your Application</h2>
              <p className="text-sm text-foreground-muted mt-2">
                Fill out the details below and attach your latest resume. All applications are directly reviewed by our leadership team.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Application Received!</h3>
                <p className="text-sm text-foreground-muted max-w-md mx-auto">
                  Thank you for applying to AVBT Technologies. We have received your resume and details at <span className="text-white font-mono">techavbt@gmail.com</span>. Our hiring team will get in touch with you shortly.
                </p>
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setPhone("");
                    setPortfolio("");
                    setCoverNote("");
                    setResumeFile(null);
                  }}
                  variant="outline"
                  className="mt-4"
                >
                  Submit Another Application
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm text-white">Full Name <span className="text-rose-400">*</span></Label>
                    <Input
                      id="name"
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-background/60 border-white/10 focus:border-primary text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm text-white">Email Address <span className="text-rose-400">*</span></Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-background/60 border-white/10 focus:border-primary text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm text-white">Phone Number <span className="text-rose-400">*</span></Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="bg-background/60 border-white/10 focus:border-primary text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-sm text-white">Applying For Role <span className="text-rose-400">*</span></Label>
                    <Select value={selectedRole} onValueChange={setSelectedRole}>
                      <SelectTrigger className="bg-background/60 border-white/10 text-white">
                        <SelectValue placeholder="Select an internship role" />
                      </SelectTrigger>
                      <SelectContent className="bg-surface border-white/10 text-white">
                        {INTERNSHIPS.map((role) => (
                          <SelectItem key={role.id} value={role.title}>
                            {role.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="portfolio" className="text-sm text-white">
                    Portfolio / GitHub / LinkedIn URL <span className="text-foreground-muted text-xs">(Optional)</span>
                  </Label>
                  <Input
                    id="portfolio"
                    type="url"
                    placeholder="https://github.com/username or https://linkedin.com/in/username"
                    value={portfolio}
                    onChange={(e) => setPortfolio(e.target.value)}
                    className="bg-background/60 border-white/10 focus:border-primary text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume" className="text-sm text-white">
                    Attach Resume (PDF, DOC, DOCX up to 10MB) <span className="text-rose-400">*</span>
                  </Label>
                  <div className="relative border-2 border-dashed border-white/15 rounded-xl p-6 hover:border-primary/50 transition-colors bg-background/40 text-center">
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div className="flex flex-col items-center justify-center gap-2 pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Upload className="w-5 h-5" />
                      </div>
                      {resumeFile ? (
                        <p className="text-sm font-medium text-emerald-400">
                          Selected: {resumeFile.name} ({(resumeFile.size / (1024 * 1024)).toFixed(2)} MB)
                        </p>
                      ) : (
                        <>
                          <p className="text-sm font-medium text-white">Click or drag & drop your resume file</p>
                          <p className="text-xs text-foreground-muted">Supported formats: PDF, DOC, DOCX (Max 10MB)</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverNote" className="text-sm text-white">
                    Why do you want to join AVBT Technologies? <span className="text-foreground-muted text-xs">(Optional)</span>
                  </Label>
                  <Textarea
                    id="coverNote"
                    rows={3}
                    placeholder="Briefly tell us about your skills, interests, and what you'd like to achieve during your internship..."
                    value={coverNote}
                    onChange={(e) => setCoverNote(e.target.value)}
                    className="bg-background/60 border-white/10 focus:border-primary text-white resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-primary hover:bg-primary-hover text-white font-semibold text-base transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting Application...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Submit Application
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
