import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import WebDevelopment from "./pages/WebDevelopment";
import DigitalMarketing from "./pages/DigitalMarketing";
import ITInfrastructure from "./pages/ITInfrastructure";
import CustomSoftware from "./pages/CustomSoftware";
import CloudSolutions from "./pages/CloudSolutions";
import Cybersecurity from "./pages/Cybersecurity";
import ITConsulting from "./pages/ITConsulting";
import NetworkSolutions from "./pages/NetworkSolutions";
import TechnicalSupport from "./pages/TechnicalSupport";
import Internship from "./pages/Internship";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/website-design-services-tumkur" element={<WebDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
          <Route path="/services/custom-software-development" element={<CustomSoftware />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/it-consulting" element={<ITConsulting />} />
          <Route path="/services/network-solutions" element={<NetworkSolutions />} />
          <Route path="/services/technical-support" element={<TechnicalSupport />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/internship" element={<Internship />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
