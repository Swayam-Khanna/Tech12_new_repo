import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CinematicBackground } from "@/components/CinematicBackground";
import { AdminAuthProvider } from "@/contexts/AdminAuthContext";
import { AdminGuard } from "@/pages/admin/AdminGuard";
import Home from "@/pages/Home";

// Lazy load non-homepage routes to achieve instant, flash-fast initial bundle
const PortfolioPage = lazy(() => import("@/pages/PortfolioPage"));
const CaseStudy = lazy(() => import("@/pages/CaseStudy"));
const AboutUs = lazy(() => import("@/pages/AboutUs"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("@/pages/TermsConditions"));
const ServicePage = lazy(() => import("@/pages/ServicePage"));
const SubServicePage = lazy(() => import("@/pages/SubServicePage"));
const Careers = lazy(() => import("@/pages/Careers"));
const PricingPage = lazy(() => import("@/pages/PricingPage"));
const NotFound = lazy(() => import("@/pages/not-found"));
const AdminLogin = lazy(() => import("@/pages/admin/AdminLogin"));
const AdminDashboard = lazy(() => import("@/pages/admin/AdminDashboard"));
const ProjectForm = lazy(() => import("@/pages/admin/ProjectForm"));

// Lazy load chat helper so it never blocks initial render
const AIChatHelper = lazy(() => import("@/components/AIChatHelper").then(m => ({ default: m.AIChatHelper })));

const queryClient = new QueryClient();

function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
    </div>
  );
}

function AppRoutes() {
  const [location] = useLocation();
  const isAdmin = location.startsWith("/admin");

  return (
    <>
      {!isAdmin && <CinematicBackground />}
      <Suspense fallback={<PageLoader />}>
        <Switch>
          {/* ── Admin routes (no background, private) ── */}
          <Route path="/admin" component={AdminLogin} />
          <Route path="/admin/dashboard">
            {() => (
              <AdminGuard>
                <AdminDashboard />
              </AdminGuard>
            )}
          </Route>
          <Route path="/admin/projects/new">
            {() => (
              <AdminGuard>
                <ProjectForm />
              </AdminGuard>
            )}
          </Route>
          <Route path="/admin/projects/:id/edit">
            {() => (
              <AdminGuard>
                <ProjectForm />
              </AdminGuard>
            )}
          </Route>

          {/* ── Public routes ── */}
          <Route path="/" component={Home} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/portfolio/:id" component={CaseStudy} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/about" component={AboutUs} />
          <Route path="/careers" component={Careers} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-conditions" component={TermsConditions} />
          <Route path="/services/:id" component={ServicePage} />
          <Route path="/services/:serviceId/:subServiceId" component={SubServicePage} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      {!isAdmin && (
        <Suspense fallback={null}>
          <AIChatHelper />
        </Suspense>
      )}
    </>
  );
}

function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AdminAuthProvider>
          <WouterRouter base={base}>
            <AppRoutes />
          </WouterRouter>
        </AdminAuthProvider>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
