import { useLocation } from "wouter";
import { FadeIn } from "./ui/fade-in";
import { ArrowUpRight, Loader2 } from "lucide-react";
import { useProjects } from "@/hooks/useProjects";

export function Portfolio() {
  const [, navigate] = useLocation();
  const { data: allProjects = [], isLoading } = useProjects();

  // Show up to 6 published projects — featured ones first
  const projects = [...allProjects]
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    .slice(0, 6);

  return (
    <section id="portfolio" className="py-24 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Our <span className="text-gradient">Work</span>
            </h2>
            <p className="text-foreground-muted max-w-xl">
              A selection of our latest projects. We push the boundaries of design and technology to deliver outstanding results.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} direction="left">
            <button
              onClick={() => navigate("/portfolio")}
              className="text-white font-medium inline-flex items-center gap-2 hover:text-primary transition-colors group"
            >
              View All Projects
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </FadeIn>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20 text-foreground-muted">
            <Loader2 className="w-5 h-5 animate-spin mr-2" /> Loading projects...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <FadeIn key={project.id} delay={0.1 * (index + 1)}>
                <div
                  onClick={() => navigate(`/portfolio/${project.id}`)}
                  className="group relative rounded-3xl overflow-hidden glass-card cursor-pointer border border-white/10 hover:border-primary/40 transition-all duration-300 flex flex-col bg-[#0b0f19]"
                >
                  {/* Image container with fixed aspect ratio and auto-contain fit */}
                  <div className="relative w-full aspect-[16/11] sm:aspect-[4/3] overflow-hidden bg-black/40 flex items-center justify-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent opacity-80" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md border border-white/20 text-white">
                        {project.subCategory || project.category}
                      </span>
                    </div>
                  </div>

                  {/* Info footer */}
                  <div className="p-5 sm:p-6 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-xs text-primary font-semibold tracking-wider uppercase mb-1">
                        {project.category}
                      </p>
                      <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-primary transition-colors truncate">
                        {project.title}
                      </h3>
                    </div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 group-hover:bg-primary border border-white/20 group-hover:border-primary flex items-center justify-center text-white transition-all flex-shrink-0 group-hover:scale-110">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {!isLoading && projects.length === 0 && (
          <div className="text-center py-20 text-foreground-muted">
            <p>No published projects yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
