import { motion } from "framer-motion";

// Import client logos
import questAllianceLogo from "@/assets/clients/quest-alliance.png";
import agritechLogo from "@/assets/clients/agritech.jpg";
import anonLogo from "@/assets/clients/anon.jpg";
import codeeasyLogo from "@/assets/clients/codeeasy.png";
import goasLogo from "@/assets/clients/goas.webp";

const clients = [
  { name: "Quest Alliance", logo: questAllianceLogo },
  { name: "AgriTech", logo: agritechLogo },
  { name: "Anon", logo: anonLogo },
  { name: "CodeEasy", logo: codeeasyLogo },
  { name: "GOAS", logo: goasLogo },
];

// Double the array for seamless infinite scroll
const duplicatedClients = [...clients, ...clients];

export const ClientsSection = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-muted/20">
      <div className="container px-4 md:px-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our <span className="text-primary">Clients</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trusted by leading organizations across industries
          </p>
        </motion.div>
      </div>

      {/* Infinite scrolling marquee */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div
          className="flex gap-12 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 bg-background rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 md:h-20 w-auto object-contain max-w-[160px] md:max-w-[200px] grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
