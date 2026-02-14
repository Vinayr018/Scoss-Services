import { motion } from "framer-motion";
import { Factory, GraduationCap, HeartPulse, ShoppingBag, Briefcase, Building2 } from "lucide-react";
import { WarmBackground } from "./WarmBackground";

const industries = [
  { icon: Factory, name: "Manufacturing Units" },
  { icon: GraduationCap, name: "Educational Institutions" },
  { icon: HeartPulse, name: "Healthcare Facilities" },
  { icon: ShoppingBag, name: "Retail Businesses" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: Building2, name: "Small & Medium Enterprises" },
];

export const IndustriesSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <WarmBackground />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <span className="mono text-primary text-sm uppercase tracking-widest mb-4 block font-semibold">
            // Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            Serving Industries Across <span className="text-primary">Tumakuru</span>
          </h2>
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="flex flex-col items-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06),0_8px_0_-4px_rgba(255,179,71,0.15)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1),0_8px_0_-4px_rgba(255,179,71,0.25)] transition-all duration-300 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-4 shadow-md">
                <industry.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-center text-foreground group-hover:text-primary transition-colors">
                {industry.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
