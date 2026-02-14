import { motion } from "framer-motion";

/**
 * Shared warm background with red/orange/gold flowing waves, dot pattern, and sparkles.
 * Clean white base with soft curved gradient accents in corners.
 */
export const WarmBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Clean white base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,100%)] via-background to-[hsl(30,30%,98%)]" />

      {/* Top-left flowing wave - red/orange/gold */}
      <svg
        className="absolute -top-32 -left-32 w-[700px] h-[500px] opacity-80"
        viewBox="0 0 700 500"
        fill="none"
      >
        <path
          d="M-50 0C80 100 200 140 320 110S520 10 640 80S750 250 700 380"
          stroke="url(#waveGrad1)"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M-30 30C90 130 220 160 340 130S540 30 660 100S770 270 720 400"
          stroke="url(#waveGrad2)"
          strokeWidth="2.5"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M-70 -20C60 80 180 110 300 80S500 -10 620 50S730 220 680 350"
          stroke="url(#waveGrad3)"
          strokeWidth="5"
          fill="none"
          opacity="0.35"
        />
        <defs>
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff2a2a" />
            <stop offset="40%" stopColor="#ff6b35" />
            <stop offset="100%" stopColor="#ffb347" />
          </linearGradient>
          <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffb347" />
            <stop offset="100%" stopColor="#ff6b35" />
          </linearGradient>
          <linearGradient id="waveGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff8c42" />
            <stop offset="100%" stopColor="#ff2a2a" />
          </linearGradient>
        </defs>
      </svg>

      {/* Bottom-right flowing wave */}
      <svg
        className="absolute -bottom-32 -right-32 w-[700px] h-[500px] opacity-80"
        viewBox="0 0 700 500"
        fill="none"
      >
        <path
          d="M750 500C620 400 500 360 380 390S180 480 60 420S-50 250 0 120"
          stroke="url(#waveGrad4)"
          strokeWidth="5"
          fill="none"
        />
        <path
          d="M770 480C640 380 520 350 400 380S200 460 80 400S-30 230 20 100"
          stroke="url(#waveGrad5)"
          strokeWidth="3"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M730 520C600 420 480 390 360 420S160 500 40 440S-70 270 -20 140"
          stroke="url(#waveGrad6)"
          strokeWidth="4"
          fill="none"
          opacity="0.3"
        />
        <defs>
          <linearGradient id="waveGrad4" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ff2a2a" />
            <stop offset="40%" stopColor="#ff6b35" />
            <stop offset="100%" stopColor="#ffb347" />
          </linearGradient>
          <linearGradient id="waveGrad5" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ff4444" />
            <stop offset="100%" stopColor="#ffb347" />
          </linearGradient>
          <linearGradient id="waveGrad6" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ff2a2a" />
            <stop offset="100%" stopColor="#ff8c42" />
          </linearGradient>
        </defs>
      </svg>

      {/* Dot pattern top-right */}
      <div
        className="absolute top-0 right-0 w-72 h-72 opacity-[0.12]"
        style={{
          backgroundImage: `radial-gradient(circle, #ffb347 1.5px, transparent 1.5px)`,
          backgroundSize: "18px 18px",
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
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            background: "linear-gradient(135deg, #ffb347, #ff6b35)",
          }}
          animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.5, 1] }}
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
