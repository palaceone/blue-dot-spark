import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import Projekty from "./pages/Projekty";
import VirtualityProject from "./pages/VirtualityProject";
import EcommerceProject from "./pages/EcommerceProject";
import DihoProject from "./pages/DihoProject";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projekty" element={<Projekty />} />
          <Route path="/project/nexus-brand-identity" element={<ProjectDetail />} />
          <Route path="/project/virality-logo" element={<VirtualityProject />} />
          <Route path="/project/ecommerce-studio" element={<EcommerceProject />} />
          <Route path="/project/diho-tour" element={<DihoProject />} />
          <Route path="/project/waves-showreel" element={<ProjectDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
