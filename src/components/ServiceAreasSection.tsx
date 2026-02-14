import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { WarmBackground } from "./WarmBackground";

const serviceAreas = [
  "Tumkur City",
  "Sira",
  "Gubbi",
  "Tiptur",
  "Kunigal",
  "Industrial Areas",
];

export const ServiceAreasSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <WarmBackground />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="mono text-primary text-sm uppercase tracking-widest mb-3 block">
            // Service Areas
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Serving <span className="text-primary">Tumakuru District</span>
          </h2>
          {/* Center dot */}
          <motion.div
            className="w-3 h-3 rounded-full bg-primary mx-auto shadow-lg shadow-primary/40"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
              whileHover={{ scale: 1.06, y: -4 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-background/70 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
              style={{
                boxShadow: "0 4px 12px -2px hsla(40, 80%, 55%, 0.1)",
              }}
            >
              <MapPin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="font-medium group-hover:text-primary transition-colors">{area}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
