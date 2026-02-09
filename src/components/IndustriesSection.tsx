import { motion } from "framer-motion";
import { Factory, GraduationCap, HeartPulse, ShoppingBag, Briefcase, Building2 } from "lucide-react";

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
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="mono text-primary text-sm uppercase tracking-widest mb-4 block">
            // Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Serving Industries Across <span className="text-primary">Tumakuru</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col items-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="text-sm font-medium text-center">{industry.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
