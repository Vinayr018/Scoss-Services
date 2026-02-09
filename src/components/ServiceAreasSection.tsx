import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

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
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/8 via-background to-secondary/5" />

      {/* Animated concentric circles */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[300, 500, 700].map((size, i) => (
          <motion.div
            key={size}
            className="absolute rounded-full border border-primary/10"
            style={{
              width: size, height: size,
              left: -size / 2, top: -size / 2,
            }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 4 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          />
        ))}
        {/* Center pin */}
        <motion.div
          className="absolute w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50"
          style={{ left: -8, top: -8 }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Floating navigation icons */}
      <motion.div
        className="absolute top-20 right-20 text-primary/15"
        animate={{ y: [-10, 10, -10], rotate: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <Navigation className="w-20 h-20" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 left-20 text-secondary/15"
        animate={{ y: [10, -10, 10], rotate: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <MapPin className="w-24 h-24" />
      </motion.div>

      <div className="container relative z-10 px-4 md:px-6">
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
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer group"
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
