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

const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/10"
    style={{ left: x, top: y, width: size, height: size }}
    animate={{
      y: [-20, 20, -20],
      opacity: [0.3, 0.7, 0.3],
      scale: [1, 1.2, 1],
    }}
    transition={{ duration: 5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

export const TechShowcase = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      {/* Floating particles */}
      <FloatingParticle delay={0} x="10%" y="20%" size={8} />
      <FloatingParticle delay={1.5} x="85%" y="15%" size={12} />
      <FloatingParticle delay={0.8} x="70%" y="75%" size={6} />
      <FloatingParticle delay={2} x="20%" y="80%" size={10} />
      <FloatingParticle delay={1} x="50%" y="10%" size={8} />
      <FloatingParticle delay={2.5} x="90%" y="60%" size={14} />

      {/* Glowing orbs */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

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

        {/* Infinite scroll marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{ x: { duration: 30, repeat: Infinity, ease: "linear" } }}
              className="flex gap-8 pr-8"
            >
              {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  whileHover={{ scale: 1.08, y: -4 }}
                  className="flex-shrink-0 px-8 py-4 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-3 h-3 rounded-full bg-gradient-to-r shadow-lg",
                      tech.color
                    )} />
                    <span className="text-lg font-medium whitespace-nowrap group-hover:text-primary transition-colors">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
