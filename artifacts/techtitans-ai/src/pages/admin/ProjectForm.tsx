import { useState, useEffect } from "react";
import { useLocation, useParams } from "wouter";
import { useQueryClient } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, Save, Eye, Zap,
  Link as LinkIcon, Users, Briefcase, FileText, Star, Image as ImageIcon
} from "lucide-react";
import { api } from "@/lib/api";
import { servicesData } from "@/data/servicesData";
import { MediaUploader } from "@/components/admin/MediaUploader";
import { MultiImageUploader } from "@/components/admin/MultiImageUploader";

const INPUT = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60 focus:bg-white/8 transition-all text-sm";
const TEXTAREA = INPUT + " resize-none";
const LABEL = "block text-xs font-semibold text-foreground-muted uppercase tracking-widest mb-2";
const SECTION = "glass-card rounded-2xl p-6 sm:p-7 space-y-5";

interface FormState {
  title: string;
  tagline: string;
  overview: string;
  serviceId: string;
  subServiceId: string;
  category: string;
  subCategory: string;
  image: string;
  gallery: string[];
  status: "draft" | "published" | "archived";
  featured: boolean;
  featuredOrder: number;
  clientName: string;
  industry: string;
  liveLink: string;
  videoLink: string;
}

const EMPTY: FormState = {
  title: "",
  tagline: "",
  overview: "",
  serviceId: "branding",
  subServiceId: "",
  category: "Creative Branding & Marketing",
  subCategory: "",
  image: "",
  gallery: [],
  status: "draft",
  featured: false,
  featuredOrder: 1,
  clientName: "",
  industry: "",
  liveLink: "",
  videoLink: "",
};

export default function ProjectForm() {
  const params = useParams<{ id?: string }>();
  const [, navigate] = useLocation();
  const queryClient = useQueryClient();
  const isEdit = !!params.id && params.id !== "new";

  const [form, setForm] = useState<FormState>(EMPTY);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: "error" | "success" } | null>(null);

  const showToast = (msg: string, type: "error" | "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const currentService = servicesData.find((s) => s.id === form.serviceId);
  const isInteractiveMedia = form.serviceId === "web" || form.serviceId === "video";
  const isReel =
    form.serviceId === "video" &&
    (form.subServiceId === "reels" ||
      form.subCategory.toLowerCase().includes("reel") ||
      form.title.toLowerCase().includes("reel"));

  useEffect(() => {
    if (!isEdit) return;
    setLoading(true);
    api.admin.projects.get(params.id!).then((p) => {
      setForm({
        title: p.title || "",
        tagline: p.tagline || "",
        overview: p.overview || "",
        serviceId: p.serviceId || "branding",
        subServiceId: p.subServiceId || "",
        category: p.category || "",
        subCategory: p.subCategory || "",
        image: p.image || "",
        gallery: Array.isArray(p.gallery) ? p.gallery : [],
        status: p.status || "draft",
        featured: p.featured ?? false,
        featuredOrder: p.featuredOrder ?? 1,
        clientName: p.clientName || "",
        industry: p.industry || "",
        liveLink: p.liveLink || "",
        videoLink: p.liveLink || "",
      });
    }).catch(() => navigate("/admin/dashboard")).finally(() => setLoading(false));
  }, [params.id, isEdit, navigate]);

  const set = <K extends keyof FormState>(key: K, val: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: val }));

  const handleServiceChange = (serviceId: string) => {
    const svc = servicesData.find((s) => s.id === serviceId);
    setForm((f) => ({
      ...f,
      serviceId,
      category: svc?.shortTitle || svc?.title || "",
      subServiceId: "",
      subCategory: "",
    }));
  };

  const handleSubServiceChange = (subServiceId: string) => {
    const svc = servicesData.find((s) => s.id === form.serviceId);
    const sub = svc?.subServices.find((ss) => ss.id === subServiceId);
    setForm((f) => ({ ...f, subServiceId, subCategory: sub?.title || "" }));
  };

  const handleSubmit = async (publishOverride?: boolean) => {
    if (!form.title.trim()) {
      showToast("Project title is required.", "error");
      return;
    }
    if (!form.image.trim()) {
      showToast("Please provide a thumbnail image.", "error");
      return;
    }

    setSaving(true);
    try {
      const activeLink = form.serviceId === "video" ? form.videoLink : form.liveLink;

      const payload = {
        title: form.title,
        tagline: form.tagline,
        overview: form.overview,
        challenge: "",
        solution: "",
        serviceId: form.serviceId,
        subServiceId: form.subServiceId,
        category: form.category,
        subCategory: form.subCategory,
        tags: [form.category, form.subCategory].filter(Boolean),
        image: form.image,
        coverImage: form.image,
        gallery: form.gallery,
        clientName: form.clientName,
        industry: form.industry,
        liveLink: activeLink,
        status: publishOverride === true ? "published" : publishOverride === false ? "draft" : form.status,
        featured: form.featured,
        results: [],
        services: [form.category, form.subCategory].filter(Boolean),
        year: new Date().getFullYear().toString(),
        duration: "",
      };

      if (isEdit) {
        await api.admin.projects.update(params.id!, payload);
        queryClient.invalidateQueries({ queryKey: ["projects"] });
        queryClient.refetchQueries({ queryKey: ["projects"] });
        queryClient.invalidateQueries({ queryKey: ["project", params.id!] });
        if (publishOverride === true) {
          showToast("Project Published Live!", "success");
          setTimeout(() => navigate("/admin/dashboard"), 600);
        } else {
          showToast("Changes saved successfully!", "success");
        }
      } else {
        const created = await api.admin.projects.create(payload);
        queryClient.invalidateQueries({ queryKey: ["projects"] });
        queryClient.refetchQueries({ queryKey: ["projects"] });
        if (publishOverride === true) {
          showToast(`"${created.title}" is now live!`, "success");
          setTimeout(() => navigate("/admin/dashboard"), 600);
        } else {
          showToast("Draft saved! Redirecting…", "success");
          setTimeout(() => navigate("/admin/dashboard"), 800);
        }
      }
    } catch (err: any) {
      showToast(err.message || "Failed to save project. Check your login session.", "error");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center text-foreground-muted">
        Loading project details...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className={`fixed top-5 right-5 z-[100] flex items-center gap-3 px-5 py-3.5 rounded-2xl border shadow-2xl backdrop-blur-xl text-sm font-medium max-w-sm ${
              toast.type === "error"
                ? "bg-red-500/20 border-red-500/40 text-red-300"
                : "bg-green-500/20 border-green-500/40 text-green-300"
            }`}
          >
            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${toast.type === "error" ? "bg-red-400" : "bg-green-400"}`} />
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky top bar */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="p-2 rounded-lg text-foreground-muted hover:text-white hover:bg-white/5 transition-all"
            title="Back to Dashboard"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-sm font-display font-bold text-white">
                {isEdit ? "Edit Project" : "Add New Project"}
              </h1>
              <p className="text-foreground-muted text-xs">AVBT Technology</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => handleSubmit(false)}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-all disabled:opacity-50"
          >
            {saving ? <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Save className="w-4 h-4" />}
            {saving ? "Saving…" : "Save Draft"}
          </button>
          <button
            type="button"
            onClick={() => handleSubmit(true)}
            disabled={saving}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold hover:opacity-90 transition-all disabled:opacity-50 shadow-lg shadow-primary/20"
          >
            {saving ? <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> : <Eye className="w-4 h-4" />}
            {saving ? "Publishing…" : "Publish Live"}
          </button>
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 md:px-10 py-8 space-y-6 pb-20">

        {/* ── 1. Basic Information ── */}
        <div className={SECTION}>
          <h2 className="text-white font-display font-bold text-base flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-primary" /> Basic Information
          </h2>

          <div>
            <label className={LABEL}>Project Title *</label>
            <input
              className={INPUT}
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
              placeholder="e.g. Modern E-commerce Platform or Brand Identity"
              required
            />
          </div>

          <div>
            <label className={LABEL}>Short Description *</label>
            <textarea
              className={TEXTAREA}
              rows={2}
              value={form.tagline}
              onChange={(e) => set("tagline", e.target.value)}
              placeholder="A punchy overview or tagline summarizing the project outcome"
            />
          </div>

          {/* Featured Product Toggle & Order right after Short Description */}
          <div className="p-4 sm:p-5 rounded-2xl border border-white/10 bg-white/3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                onClick={() => set("featured", !form.featured)}
                className={`w-12 h-7 rounded-full transition-all relative cursor-pointer flex-shrink-0 ${
                  form.featured ? "bg-primary" : "bg-white/15"
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 rounded-full bg-white shadow transition-all ${
                    form.featured ? "left-6" : "left-1"
                  }`}
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-white flex items-center gap-1.5">
                  <Star className={`w-4 h-4 ${form.featured ? "text-amber-400 fill-amber-400" : "text-foreground-muted"}`} />
                  Featured Product (Homepage Top 6)
                </p>
                <p className="text-xs text-foreground-muted">
                  Showcase this project in the top 6 premium section on the homepage.
                </p>
              </div>
            </div>

            {form.featured && (
              <div className="flex items-center gap-2 sm:ml-auto w-full sm:w-auto">
                <label className="text-xs font-semibold text-foreground-muted whitespace-nowrap">
                  Display Order (1 - 6):
                </label>
                <input
                  type="number"
                  min="1"
                  max="6"
                  value={form.featuredOrder}
                  onChange={(e) => set("featuredOrder", parseInt(e.target.value) || 1)}
                  className="w-20 bg-white/10 border border-white/20 rounded-xl px-3 py-1.5 text-white text-center font-bold focus:outline-none focus:border-primary"
                />
              </div>
            )}
          </div>

          {/* Client Name and Industry */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={LABEL}>Client Name</label>
              <input
                className={INPUT}
                value={form.clientName}
                onChange={(e) => set("clientName", e.target.value)}
                placeholder="e.g. Apex Global Solutions"
              />
            </div>
            <div>
              <label className={LABEL}>Industry</label>
              <input
                className={INPUT}
                value={form.industry}
                onChange={(e) => set("industry", e.target.value)}
                placeholder="e.g. Healthcare, Fintech, FMCG"
              />
            </div>
          </div>

          {/* Service & Sub-Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className={LABEL}>Main Service *</label>
              <select
                value={form.serviceId}
                onChange={(e) => handleServiceChange(e.target.value)}
                className={INPUT + " cursor-pointer"}
              >
                {servicesData.map((s) => (
                  <option key={s.id} value={s.id} className="bg-gray-900">
                    {s.shortTitle}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={LABEL}>Sub-Service</label>
              <select
                value={form.subServiceId}
                onChange={(e) => handleSubServiceChange(e.target.value)}
                className={INPUT + " cursor-pointer"}
              >
                <option value="" className="bg-gray-900">
                  Select a sub-service...
                </option>
                {currentService?.subServices.map((ss) => (
                  <option key={ss.id} value={ss.id} className="bg-gray-900">
                    {ss.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* ── 2. Case Study (Single unified input box) ── */}
        <div className={SECTION}>
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-primary" />
            <h2 className="text-white font-display font-bold text-base">Case Study</h2>
          </div>
          <p className="text-xs text-foreground-muted -mt-2">
            Single comprehensive case study content describing the project scope, background, execution, and outcomes.
          </p>
          <div>
            <label className={LABEL}>Case Study Details</label>
            <textarea
              className={TEXTAREA}
              rows={6}
              value={form.overview}
              onChange={(e) => set("overview", e.target.value)}
              placeholder="Provide the complete case study details here..."
            />
          </div>
        </div>

        {/* ── 3. Media & Showcase ── */}
        {isInteractiveMedia ? (
          /* Web Dev & Video Editing: Single Thumbnail + Paired Action Link (Website URL / Reel / Video) */
          <div className={SECTION}>
            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-primary" />
              <h2 className="text-white font-display font-bold text-base">
                {form.serviceId === "video" ? "Thumbnail & Video / Reel Link *" : "Thumbnail & Website Link *"}
              </h2>
            </div>
            <p className="text-xs text-foreground-muted -mt-2">
              {form.serviceId === "video"
                ? "Upload the cover thumbnail image for this video/reel. On the project page, clicking this image or the action button will open your video/reel link directly in a new tab."
                : "Upload the main preview screenshot for this website project. On the project page, clicking this image or the action button will open the live website in a new tab."}
            </p>

            {/* Thumbnail Upload */}
            <MediaUploader
              label={form.serviceId === "video" ? "Video/Reel Cover Thumbnail" : "Website Preview Thumbnail"}
              value={form.image}
              onChange={(url) => set("image", url)}
              accept="image"
              hint="Supports JPG, PNG, WebP, SVG. Auto-sizes cleanly without stretching."
            />

            {/* Paired URL Link */}
            <div className="pt-2 border-t border-white/5">
              <label className={LABEL}>
                {form.serviceId === "video"
                  ? isReel
                    ? "Instagram / Social Reel Link *"
                    : "Video Link (Instagram Reel / YouTube / Vimeo) *"
                  : "Live Website URL *"}
              </label>
              <div className="relative">
                <input
                  className={INPUT + " pl-10"}
                  value={form.serviceId === "video" ? form.videoLink : form.liveLink}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (form.serviceId === "video") {
                      set("videoLink", val);
                      set("liveLink", val);
                    } else {
                      set("liveLink", val);
                    }
                  }}
                  placeholder={
                    form.serviceId === "video"
                      ? isReel
                        ? "https://www.instagram.com/reel/... or https://tiktok.com/@..."
                        : "https://www.instagram.com/reel/... or https://youtube.com/watch?v=..."
                      : "https://client-project-website.com"
                  }
                />
                <LinkIcon className="w-4 h-4 text-primary absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <p className="text-[11px] text-foreground-muted mt-1.5">
                {form.serviceId === "video"
                  ? "When users view this project, clicking the image card or button will open this reel/video in a new tab."
                  : "When users view this project, clicking the image card or button will navigate straight to this website in a new tab."}
              </p>
            </div>
          </div>
        ) : (
          /* Creative Branding / Other Services: Thumbnail + Multiple Showcase Gallery */
          <>
            <div className={SECTION}>
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-primary" />
                <h2 className="text-white font-display font-bold text-base">Thumbnail Image *</h2>
              </div>
              <p className="text-xs text-foreground-muted -mt-2">
                This image is displayed on the portfolio card. Responsive auto-sizing guarantees it will fit without distortion or stretching.
              </p>
              <MediaUploader
                label="Upload Thumbnail (Direct File or URL)"
                value={form.image}
                onChange={(url) => set("image", url)}
                accept="image"
                hint="Supports JPG, PNG, WebP, SVG."
              />
            </div>

            {/* Multiple Showcase Images */}
            <div className={SECTION}>
              <MultiImageUploader
                images={form.gallery}
                onChange={(imgs) => set("gallery", imgs)}
              />
            </div>

            {/* Project Dynamic Links */}
            <div className={SECTION}>
              <div className="flex items-center gap-2">
                <LinkIcon className="w-4 h-4 text-primary" />
                <h2 className="text-white font-display font-bold text-base">Project Links (Optional)</h2>
              </div>
              <div>
                <label className={LABEL}>Live Website URL / Behance Link</label>
                <input
                  className={INPUT}
                  value={form.liveLink}
                  onChange={(e) => set("liveLink", e.target.value)}
                  placeholder="https://client-project-website.com or Behance link"
                />
              </div>
            </div>
          </>
        )}

        {/* ── 6. Publish Settings ── */}
        <div className={SECTION}>
          <h2 className="text-white font-display font-bold text-base mb-2">Publish Status</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {(["draft", "published", "archived"] as const).map((s) => (
              <div
                key={s}
                onClick={() => set("status", s)}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center gap-3 ${
                  form.status === s
                    ? "border-primary bg-primary/10 text-white"
                    : "border-white/10 bg-white/3 text-foreground-muted hover:text-white"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    form.status === s ? "border-primary bg-primary" : "border-white/30"
                  }`}
                >
                  {form.status === s && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
                <span className="text-sm font-semibold capitalize">{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            type="button"
            onClick={() => handleSubmit()}
            disabled={saving || !form.title}
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-sm shadow-xl shadow-primary/20"
          >
            <Save className="w-4 h-4" />
            {saving ? "Saving..." : isEdit ? "Update Project" : "Create Project"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/admin/dashboard")}
            className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all text-sm text-center"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
