import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const techStack = [
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "TypeScript", color: "from-blue-400 to-blue-600" },
  { name: "Node.js", color: "from-green-400 to-green-600" },
  { name: "Python", color: "from-yellow-400 to-yellow-600" },
  { name: "AWS", color: "from-orange-400 to-orange-600" },
  { name: "Docker", color: "from-blue-400 to-cyan-500" },
  { name: "Kubernetes", color: "from-blue-500 to-purple-500" },
  { name: "GraphQL", color: "from-pink-400 to-pink-600" },
];

export const TechShowcase = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="mono text-primary text-sm uppercase tracking-widest mb-4 block">
            // Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Powered by <span className="gradient-text">Modern Tech</span>
          </h2>
        </motion.div>

        {/* Infinite scroll marquee */}
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Scrolling container */}
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="flex gap-8 pr-8"
            >
              {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex-shrink-0 glass-card px-8 py-4 group hover-lift cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-3 h-3 rounded-full bg-gradient-to-r",
                      tech.color
                    )} />
                    <span className="text-lg font-medium whitespace-nowrap group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
