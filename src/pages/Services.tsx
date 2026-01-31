import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import service images
import webDevImg from "@/assets/services/web-dev.jpg";
import digitalMarketingImg from "@/assets/services/digital-marketing.jpg";
import softwareDevImg from "@/assets/services/software-dev.jpg";
import cloudImg from "@/assets/services/cloud.jpg";
import cybersecurityImg from "@/assets/services/cybersecurity.jpg";
import itConsultingImg from "@/assets/services/it-consulting.jpg";
import networkImg from "@/assets/services/network.jpg";
import supportImg from "@/assets/services/support.jpg";

const services = [
  {
    title: "Website Design and Development",
    description: "Modern, responsive websites crafted to elevate your digital presence and drive business growth.",
    features: ["Custom design", "Mobile optimization", "SEO-friendly development", "E-commerce solutions", "CMS integration"],
    image: webDevImg,
  },
  {
    title: "Digital Marketing Services",
    description: "Results-driven digital marketing strategies to boost your online presence and growth.",
    features: ["SEO optimization", "Social media marketing", "PPC campaigns", "Content marketing", "Email marketing"],
    image: digitalMarketingImg,
  },
  {
    title: "Custom Software Development",
    description: "Custom software solutions tailored to your specific business needs and workflows.",
    features: ["Web applications", "Mobile apps", "Desktop software", "API development", "System integration"],
    image: softwareDevImg,
  },
  {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure services for modern businesses.",
    features: ["Cloud migration", "Infrastructure optimization", "Managed services", "Backup solutions", "Cost optimization"],
    image: cloudImg,
  },
  {
    title: "Cybersecurity Services",
    description: "Comprehensive security solutions to protect your digital assets and data.",
    features: ["Security assessment", "Threat detection", "Incident response", "Compliance", "Security training"],
    image: cybersecurityImg,
  },
  {
    title: "IT Consulting",
    description: "Strategic technology consulting to drive digital transformation and business growth.",
    features: ["IT strategy", "Digital transformation", "Technology roadmap", "Process optimization", "Vendor management"],
    image: itConsultingImg,
  },
  {
    title: "Network Solutions",
    description: "Reliable network infrastructure design, implementation, and management.",
    features: ["Network design", "Implementation", "Monitoring", "Troubleshooting", "Performance optimization"],
    image: networkImg,
  },
  {
    title: "Technical Support",
    description: "24/7 technical support and maintenance services to keep your systems running smoothly.",
    features: ["Help desk", "Remote support", "On-site support", "System maintenance", "Hardware support"],
    image: supportImg,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container px-4 md:px-6">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm uppercase tracking-widest mb-4 block font-semibold">
              EXPLORE OUR EXPERTISE
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer reliable solutions to support your business growth and development. 
              From web development to cybersecurity, we've got you covered.
            </p>
          </motion.div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card overflow-hidden group"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 text-center glass-card p-10 md:p-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Don't see exactly what you need? We specialize in creating custom solutions 
              tailored to your unique business requirements.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contact Us Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
