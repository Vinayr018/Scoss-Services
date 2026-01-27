import { motion } from "framer-motion";
import { 
  Cpu, 
  Shield, 
  Zap, 
  Globe, 
  Code2, 
  Layers,
  ArrowUpRight
} from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Cpu,
    title: "AI-Powered",
    description: "Leverage cutting-edge artificial intelligence to automate and optimize your workflows.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and security protocols to protect your most sensitive data.",
    color: "secondary",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with sub-millisecond response times across all operations.",
    color: "primary",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with our distributed infrastructure spanning 50+ regions.",
    color: "secondary",
  },
  {
    icon: Code2,
    title: "Developer First",
    description: "Comprehensive APIs, SDKs, and documentation for seamless integration.",
    color: "primary",
  },
  {
    icon: Layers,
    title: "Modular Design",
    description: "Flexible architecture that adapts to your unique business requirements.",
    color: "secondary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const FeaturesSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container relative z-10 px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="mono text-primary text-sm uppercase tracking-widest mb-4 block">
            // Features
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Built for the <span className="gradient-text">Future</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to give you the competitive edge in a rapidly evolving digital landscape.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group"
            >
              <div className="glass-card p-8 h-full hover-lift relative overflow-hidden">
                {/* Hover gradient */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  feature.color === "primary" 
                    ? "bg-gradient-to-br from-primary/10 via-transparent to-transparent"
                    : "bg-gradient-to-br from-secondary/10 via-transparent to-transparent"
                )} />
                
                {/* Icon */}
                <div className={cn(
                  "relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300",
                  feature.color === "primary" 
                    ? "bg-primary/10 group-hover:bg-primary/20" 
                    : "bg-secondary/10 group-hover:bg-secondary/20"
                )}>
                  <feature.icon className={cn(
                    "w-7 h-7 transition-all duration-300",
                    feature.color === "primary" 
                      ? "text-primary group-hover:text-glow" 
                      : "text-secondary"
                  )} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                  {feature.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom border glow */}
                <div className={cn(
                  "absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  feature.color === "primary" 
                    ? "bg-gradient-to-r from-transparent via-primary to-transparent"
                    : "bg-gradient-to-r from-transparent via-secondary to-transparent"
                )} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
