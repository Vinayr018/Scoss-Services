import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { SEOHead } from "@/components/SEOHead";
import { ServicesSection } from "@/components/ServicesSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { WhyPartnerSection } from "@/components/WhyPartnerSection";
import { ClientsSection } from "@/components/ClientsSection";
import { ContactSection } from "@/components/ContactSection";
import { CTASection } from "@/components/CTASection";
import { ServiceAreasSection } from "@/components/ServiceAreasSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <SEOHead
        title="SCOSS Services - Leading IT Solutions & Software Company in Tumkur"
        description="SCOSS Services provides innovative IT solutions, web development, digital marketing, cloud solutions, and cybersecurity services in Tumkur, Karnataka."
        schemaType="WebPage"
      />
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUsSection />
        
        <ServicesSection />
        <IndustriesSection />
        <ServiceAreasSection />
        <WhyPartnerSection />
        <ClientsSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
