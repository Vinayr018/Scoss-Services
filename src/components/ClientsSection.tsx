import { motion } from "framer-motion";
import { WarmBackground } from "./WarmBackground";
import { Star } from "lucide-react";

// Import client logos
import questAllianceLogo from "@/assets/clients/quest-alliance.png";
import agritechLogo from "@/assets/clients/agritech.jpg";
import anonLogo from "@/assets/clients/anon.jpg";
import codeeasyLogo from "@/assets/clients/codeeasy.png";
import goasLogo from "@/assets/clients/goas.webp";
import findreamsLogo from "@/assets/clients/findreams.png";
import slvDieselLogo from "@/assets/clients/slv-diesel.jpg";

const clients = [
  { name: "Quest Alliance", logo: questAllianceLogo },
  { name: "AgriTech", logo: agritechLogo },
  { name: "Anon", logo: anonLogo },
  { name: "CodeEasy", logo: codeeasyLogo },
  { name: "GOAS", logo: goasLogo },
  { name: "Findreams", logo: findreamsLogo },
  { name: "SLV Diesel", logo: slvDieselLogo },
];

const duplicatedClients = [...clients, ...clients];

export const ClientsSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <WarmBackground />

      <div className="container relative z-10 px-4 md:px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 border border-primary/20"
          >
            <Star className="w-4 h-4" />
            TRUSTED PARTNERS
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-foreground">
            Our <span className="text-primary">Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Trusted by leading organizations across industries
          </p>
        </motion.div>
      </div>

      {/* Infinite scrolling marquee */}
      <div className="relative w-full overflow-hidden z-10">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div
          className="flex gap-8 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06),0_6px_0_-3px_rgba(255,179,71,0.12)] border border-white/60 hover:shadow-[0_12px_30px_-4px_rgba(0,0,0,0.12),0_6px_0_-3px_rgba(255,42,42,0.15)] transition-all duration-500 group hover:scale-105"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 md:h-20 w-auto object-contain max-w-[160px] md:max-w-[200px] grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
