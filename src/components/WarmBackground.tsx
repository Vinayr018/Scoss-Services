import { motion } from "framer-motion";

/**
 * Shared warm background with orange/gold flowing waves, dot pattern, and sparkles.
 * Used across multiple homepage sections to create a cohesive visual theme.
 */
export const WarmBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(20,60%,97%)] via-background to-[hsl(30,50%,96%)]" />

      {/* Top-left flowing wave */}
      <svg
        className="absolute -top-20 -left-20 w-[600px] h-[400px] opacity-70"
        viewBox="0 0 600 400"
        fill="none"
      >
        <path
          d="M-50 0C50 80 150 120 250 100S450 20 550 80S650 200 600 300"
          stroke="url(#waveGrad1)"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M-30 30C70 110 170 140 270 120S470 40 570 100S670 220 620 320"
          stroke="url(#waveGrad2)"
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M-60 -10C40 70 140 100 240 80S440 0 540 60S640 180 590 280"
          stroke="url(#waveGrad3)"
          strokeWidth="4"
          fill="none"
          opacity="0.3"
        />
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(25, 95%, 55%)" />
            <stop offset="50%" stopColor="hsl(35, 90%, 60%)" />
            <stop offset="100%" stopColor="hsl(0, 85%, 55%)" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(40, 90%, 70%)" />
            <stop offset="100%" stopColor="hsl(20, 85%, 60%)" />
          </linearGradient>
          <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(30, 80%, 65%)" />
            <stop offset="100%" stopColor="hsl(0, 80%, 60%)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom-right flowing wave */}
      <svg
        className="absolute -bottom-20 -right-20 w-[600px] h-[400px] opacity-70"
        viewBox="0 0 600 400"
        fill="none"
      >
        <path
          d="M650 400C550 320 450 280 350 300S150 380 50 320S-50 200 0 100"
          stroke="url(#waveGrad4)"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M670 380C570 300 470 270 370 290S170 360 70 300S-30 180 20 80"
          stroke="url(#waveGrad5)"
          strokeWidth="2.5"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M630 420C530 340 430 310 330 330S130 400 30 340S-70 220 -20 120"
          stroke="url(#waveGrad6)"
          strokeWidth="3"
          fill="none"
          opacity="0.3"
        />
        <defs>
          <linearGradient id="waveGrad4" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="hsl(0, 85%, 55%)" />
            <stop offset="50%" stopColor="hsl(25, 90%, 55%)" />
            <stop offset="100%" stopColor="hsl(40, 85%, 60%)" />
          </linearGradient>
          <linearGradient id="waveGrad5" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="hsl(15, 90%, 55%)" />
            <stop offset="100%" stopColor="hsl(35, 80%, 65%)" />
          </linearGradient>
          <linearGradient id="waveGrad6" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="hsl(0, 75%, 60%)" />
            <stop offset="100%" stopColor="hsl(30, 85%, 60%)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Dot pattern top-right */}
      <div
        className="absolute top-0 right-0 w-64 h-64 opacity-[0.15]"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(35, 80%, 55%) 1.5px, transparent 1.5px)`,
          backgroundSize: "16px 16px",
        }}
      />

      {/* Sparkle particles */}
      {[
        { x: "15%", y: "30%", delay: 0, size: 3 },
        { x: "80%", y: "25%", delay: 1.2, size: 2 },
        { x: "60%", y: "70%", delay: 0.5, size: 4 },
        { x: "25%", y: "75%", delay: 2, size: 2.5 },
        { x: "45%", y: "15%", delay: 1.5, size: 3 },
        { x: "70%", y: "50%", delay: 0.8, size: 2 },
        { x: "90%", y: "80%", delay: 2.5, size: 3 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-secondary"
          style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
          animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
          transition={{
            duration: 3 + p.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </div>
  );
};
