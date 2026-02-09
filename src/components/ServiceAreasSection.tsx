import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

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
    <section className="min-h-screen flex items-center bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="mono text-primary text-sm uppercase tracking-widest mb-3 block">
            // Service Areas
          </span>
          <h2 className="text-2xl md:text-3xl font-bold">
            Serving <span className="text-primary">Tumakuru District</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border hover:border-primary/30 transition-colors"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-medium">{area}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
