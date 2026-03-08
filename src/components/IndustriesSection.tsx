import { motion } from "framer-motion";
import { Factory, GraduationCap, HeartPulse, ShoppingBag, Briefcase, Building2 } from "lucide-react";
import { WarmBackground } from "./WarmBackground";

const industries = [
  { icon: Factory, name: "Manufacturing Units", color: "from-primary/20 to-primary/5" },
  { icon: GraduationCap, name: "Educational Institutions", color: "from-secondary/20 to-secondary/5" },
  { icon: HeartPulse, name: "Healthcare Facilities", color: "from-primary/20 to-primary/5" },
  { icon: ShoppingBag, name: "Retail Businesses", color: "from-secondary/20 to-secondary/5" },
  { icon: Briefcase, name: "Professional Services", color: "from-primary/20 to-primary/5" },
  { icon: Building2, name: "Small & Medium Enterprises", color: "from-secondary/20 to-secondary/5" },
];

export const IndustriesSection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <WarmBackground />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20"
          >
            INDUSTRIES WE SERVE
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-foreground">
            Serving Industries Across{" "}
            <span className="text-primary">Tumakuru</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering specialized IT solutions across diverse industry verticals
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -12, scale: 1.06 }}
              className="relative flex flex-col items-center pt-10 pb-8 px-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/70 cursor-pointer group overflow-hidden"
              style={{
                boxShadow: `
                  0 8px 32px -8px rgba(0,0,0,0.08),
                  0 4px 0 0 rgba(255,179,71,0.35),
                  0 6px 0 0 rgba(255,107,53,0.15)
                `,
              }}
            >
              {/* Hover gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Red icon container with enhanced styling */}
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="relative w-18 h-18 rounded-2xl bg-primary flex items-center justify-center mb-5 shadow-lg shadow-primary/25 group-hover:shadow-primary/50 transition-all duration-300 group-hover:scale-110"
                style={{ width: '4.5rem', height: '4.5rem' }}
              >
                <industry.icon className="w-9 h-9 text-primary-foreground" strokeWidth={1.5} />
                {/* Glow ring on hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 scale-125 transition-all duration-500" />
              </motion.div>
              
              <span className="relative z-10 text-sm font-bold text-center text-foreground group-hover:text-primary transition-colors leading-tight">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
