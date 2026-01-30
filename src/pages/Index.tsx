import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { TechShowcase } from "@/components/TechShowcase";
import { ServicesSection } from "@/components/ServicesSection";
import { IndustriesSection } from "@/components/IndustriesSection";
import { AboutSection } from "@/components/AboutSection";
import { WhyPartnerSection } from "@/components/WhyPartnerSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ClientsSection } from "@/components/ClientsSection";
import { StatsSection } from "@/components/StatsSection";
import { ContactSection } from "@/components/ContactSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseUsSection />
        <TechShowcase />
        <ServicesSection />
        <IndustriesSection />
        <AboutSection />
        <WhyPartnerSection />
        <FeaturesSection />
        <ClientsSection />
        <StatsSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
