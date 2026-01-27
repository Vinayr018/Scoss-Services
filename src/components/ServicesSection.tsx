import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Shield, 
  Cloud,
  ArrowRight,
  Check
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "We build modern, responsive websites and web applications that drive business growth and provide exceptional user experiences.",
    features: [
      "Custom website design & development",
      "E-commerce solutions",
      "Progressive Web Apps (PWA)",
      "CMS integration & development",
      "API development & integration"
    ],
    color: "primary",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
    features: [
      "iOS & Android native apps",
      "Cross-platform development",
      "UI/UX design for mobile",
      "App maintenance & support",
      "App Store optimization"
    ],
    color: "secondary",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Protect your digital assets with enterprise-grade security solutions, penetration testing, and compliance management.",
    features: [
      "Security audits & assessments",
      "Penetration testing",
      "Network security",
      "Compliance management",
      "24/7 threat monitoring"
    ],
    color: "primary",
    gradient: "from-green-500 to-cyan-500",
  },
  {
    icon: Cloud,
    title: "Cloud Consulting",
    description: "Strategic cloud solutions to optimize your infrastructure, reduce costs, and enhance scalability with AWS, Azure, or GCP.",
    features: [
      "Cloud migration strategy",
      "Infrastructure optimization",
      "DevOps & CI/CD pipelines",
      "Cost optimization",
      "Multi-cloud architecture"
    ],
    color: "secondary",
    gradient: "from-orange-500 to-red-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const ServicesSection = () => {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container relative z-10 px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="mono text-primary text-sm uppercase tracking-widest mb-4 block">
            // Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            What <span className="gradient-text">We Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive IT solutions tailored to your business needs. 
            From web development to cybersecurity, we've got you covered.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-card p-8 md:p-10 h-full hover-lift relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                  `bg-gradient-to-br ${service.gradient}`
                )} style={{ opacity: 0 }} />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 bg-gradient-to-br from-white to-transparent" />

                <div className="relative">
                  {/* Icon */}
                  <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300",
                    service.color === "primary" 
                      ? "bg-primary/10 group-hover:bg-primary/20" 
                      : "bg-secondary/10 group-hover:bg-secondary/20"
                  )}>
                    <service.icon className={cn(
                      "w-8 h-8 transition-all duration-300",
                      service.color === "primary" ? "text-primary" : "text-secondary"
                    )} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className={cn(
                          "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
                          service.color === "primary" ? "bg-primary/20" : "bg-secondary/20"
                        )}>
                          <Check className={cn(
                            "w-3 h-3",
                            service.color === "primary" ? "text-primary" : "text-secondary"
                          )} />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto font-semibold hover:bg-transparent"
                  >
                    <span className="flex items-center gap-2 text-primary">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </Button>
                </div>

                {/* Bottom border glow */}
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  `bg-gradient-to-r ${service.gradient}`
                )} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
