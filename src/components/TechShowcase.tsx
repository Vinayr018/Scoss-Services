import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { WarmBackground } from "./WarmBackground";

const techStack = [
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "TypeScript", color: "from-blue-400 to-blue-600" },
  { name: "Node.js", color: "from-green-400 to-green-600" },
  { name: "Python", color: "from-yellow-400 to-yellow-600" },
  { name: "AWS", color: "from-orange-400 to-orange-600" },
  { name: "Docker", color: "from-blue-400 to-cyan-500" },
  { name: "Kubernetes", color: "from-blue-500 to-purple-500" },
];

export const TechShowcase = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <WarmBackground />

      <div className="container relative z-10 px-4 md:px-6">
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
            Powered by <span className="text-primary">Modern Tech</span>
          </h2>
        </motion.div>

        {/* Static grid of tech cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 + 0.3, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="w-32 h-32 flex flex-col items-center justify-center rounded-2xl bg-background/60 backdrop-blur-sm border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className={cn(
                "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3 shadow-md",
                tech.color
              )}>
                <span className="text-white font-bold text-xs">
                  {tech.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <span className="text-sm font-medium text-center group-hover:text-primary transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
