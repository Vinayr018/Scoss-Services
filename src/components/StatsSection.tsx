import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface CounterProps {
  from: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter = ({ from, to, duration = 2, suffix = "", prefix = "" }: CounterProps) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration,
        onUpdate: (value) => setCount(Math.floor(value)),
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

const stats = [
  {
    value: 10000,
    suffix: "+",
    label: "Active Users",
    description: "Developers trust our platform",
  },
  {
    value: 99.99,
    suffix: "%",
    label: "Uptime SLA",
    description: "Enterprise-grade reliability",
  },
  {
    value: 500,
    suffix: "M+",
    label: "API Calls",
    description: "Processed every month",
  },
  {
    value: 150,
    suffix: "+",
    label: "Countries",
    description: "Global infrastructure",
  },
];

export const StatsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="mono text-primary text-sm uppercase tracking-widest mb-4 block">
            // By the Numbers
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Trusted by <span className="gradient-text">Thousands</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
              className="relative group"
            >
              <div className="glass-card p-8 text-center hover-lift">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 glow-primary" />
                
                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold text-primary glow-text mb-2">
                    <Counter 
                      from={0} 
                      to={stat.value} 
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-lg font-semibold mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
