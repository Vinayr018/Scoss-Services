import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
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

      <div className="container relative z-10 px-4 md:px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20"
          >
            <Navigation className="w-4 h-4" />
            SERVICE AREAS
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-foreground">
            Serving{" "}
            <span className="text-primary relative">
              Tumakuru District
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Providing on-site and remote IT support across the entire Tumakuru district
          </p>
        </motion.div>

        {/* Center pulsing dot */}
        <div className="flex justify-center mb-10">
          <motion.div
            className="relative"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-5 h-5 rounded-full bg-primary shadow-lg shadow-primary/40" />
            <div className="absolute inset-0 w-5 h-5 rounded-full bg-primary/30 animate-ping" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 md:gap-5"
        >
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4, type: "spring" }}
              whileHover={{ scale: 1.08, y: -6 }}
              className="relative flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06),0_6px_0_-3px_rgba(255,179,71,0.15)] hover:shadow-[0_12px_30px_-4px_rgba(0,0,0,0.12),0_6px_0_-3px_rgba(255,42,42,0.2)] transition-all duration-300 cursor-pointer group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                <MapPin className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <span className="relative z-10 font-bold text-foreground group-hover:text-primary transition-colors">{area}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
