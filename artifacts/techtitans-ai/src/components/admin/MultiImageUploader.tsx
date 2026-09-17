import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Link2, X, Plus, Loader2, AlertCircle } from "lucide-react";

interface MultiImageUploaderProps {
  images: string[];
  onChange: (images: string[]) => void;
}

export function MultiImageUploader({ images, onChange }: MultiImageUploaderProps) {
  const [activeTab, setActiveTab] = useState<"upload" | "url">("upload");
  const [urlInput, setUrlInput] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<string>("");
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadSingleFile = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append("file", file);
    const token = localStorage.getItem("admin_token") || "";

    const res = await fetch("/api/admin/upload", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.error || "Upload failed");
    }
    return data.url;
  };

  const handleFiles = useCallback(
    async (files: FileList | null) => {
      if (!files || files.length === 0) return;
      setError("");
      setUploading(true);

      try {
        const uploadedUrls: string[] = [];
        for (let i = 0; i < files.length; i++) {
          setUploadProgress(`Uploading ${i + 1} of ${files.length}...`);
          const url = await uploadSingleFile(files[i]);
          if (url) uploadedUrls.push(url);
        }
        onChange([...images, ...uploadedUrls]);
      } catch (err: any) {
        setError(err.message || "Failed to upload one or more images.");
      } finally {
        setUploading(false);
        setUploadProgress("");
        if (fileInputRef.current) fileInputRef.current.value = "";
      }
    },
    [images, onChange]
  );

  const handleAddUrl = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!urlInput.trim()) return;
    onChange([...images, urlInput.trim()]);
    setUrlInput("");
  };

  const handleRemove = (index: number) => {
    onChange(images.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <label className="block text-xs font-semibold text-foreground-muted uppercase tracking-widest">
            Project Showcase Images ({images.length})
          </label>
          <p className="text-xs text-foreground-muted/70 mt-0.5">
            If left empty, thumbnail image will automatically show on the project details page.
          </p>
        </div>

        <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-0.5">
          <button
            type="button"
            onClick={() => setActiveTab("upload")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              activeTab === "upload" ? "bg-primary text-white" : "text-foreground-muted hover:text-white"
            }`}
          >
            <Upload className="w-3.5 h-3.5" /> Direct Upload
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("url")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
              activeTab === "url" ? "bg-primary text-white" : "text-foreground-muted hover:text-white"
            }`}
          >
            <Link2 className="w-3.5 h-3.5" /> Image URL
          </button>
        </div>
      </div>

      <div className="bg-white/3 border border-white/10 rounded-2xl p-4">
        {activeTab === "upload" ? (
          <div>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/jpeg,image/png,image/gif,image/webp,image/svg+xml"
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
            <div
              onClick={() => !uploading && fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                uploading
                  ? "border-primary/50 bg-primary/5 cursor-not-allowed"
                  : "border-white/15 hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              {uploading ? (
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="w-7 h-7 text-primary animate-spin" />
                  <p className="text-sm font-medium text-white">{uploadProgress || "Uploading images..."}</p>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Plus className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      Click to select multiple images or drag & drop
                    </p>
                    <p className="text-xs text-foreground-muted mt-0.5">JPG, PNG, WebP, SVG supported</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://images.unsplash.com/photo-..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-primary/60 text-sm"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddUrl();
                }
              }}
            />
            <button
              type="button"
              onClick={() => handleAddUrl()}
              className="px-4 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-xl text-sm font-medium transition-all flex items-center gap-1.5 flex-shrink-0"
            >
              <Plus className="w-4 h-4" /> Add
            </button>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-2 mt-3 text-red-400 text-xs bg-red-500/10 border border-red-500/20 px-3 py-2 rounded-lg">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </div>

      {images.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs text-foreground-muted font-medium">
            {images.length} Showcase Image{images.length !== 1 ? "s" : ""} Added
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            <AnimatePresence>
              {images.map((img, idx) => (
                <motion.div
                  key={`${img}-${idx}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="relative group rounded-xl overflow-hidden border border-white/10 bg-black/40 aspect-[4/3] flex items-center justify-center"
                >
                  <img
                    src={img}
                    alt={`Showcase ${idx + 1}`}
                    className="w-full h-full object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleRemove(idx)}
                      className="p-1.5 rounded-full bg-red-500/80 hover:bg-red-500 text-white transition-colors"
                      title="Remove image"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="absolute bottom-1 left-1 px-1.5 py-0.5 bg-black/70 rounded text-[10px] text-white/80 font-mono">
                    #{idx + 1}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}
