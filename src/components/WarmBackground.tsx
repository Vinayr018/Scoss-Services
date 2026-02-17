import { motion } from "framer-motion";

/**
 * Premium corporate tech background with soft grey waves, orange gradients,
 * glowing highlights, light flares, and halftone dot patterns.
 */
export const WarmBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 1. Base Layer - light grey to white with radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,140,0,0.06) 0%, transparent 70%),
            linear-gradient(135deg, #f4f5f7 0%, #ffffff 40%, #f4f5f7 100%)
          `,
        }}
      />

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2. Top Left Wave Cluster with glow */}
      <svg
        className="absolute -top-20 -left-20 w-[750px] h-[550px]"
        viewBox="0 0 750 550"
        fill="none"
      >
        {/* Glow behind waves */}
        <ellipse cx="250" cy="200" rx="280" ry="180" fill="url(#topGlow)" opacity="0.4" />

        {/* Deep orange wave */}
        <path
          d="M-60 0C100 120 230 160 360 120S570 0 680 90S780 280 720 400"
          stroke="url(#wave1)"
          strokeWidth="5"
          fill="none"
          filter="url(#glowFilter)"
        />
        {/* Bright orange wave */}
        <path
          d="M-30 40C110 150 250 180 370 145S560 40 670 120S790 300 740 420"
          stroke="url(#wave2)"
          strokeWidth="3"
          fill="none"
          opacity="0.7"
          filter="url(#glowFilter)"
        />
        {/* Gold highlight wave */}
        <path
          d="M-80 -30C70 90 190 120 310 85S510 -20 630 60S740 240 690 370"
          stroke="url(#wave3)"
          strokeWidth="6"
          fill="none"
          opacity="0.3"
          filter="url(#glowFilter)"
        />
        {/* Light streak along curve */}
        <path
          d="M0 80C120 170 260 190 380 155S570 60 680 130"
          stroke="url(#streak1)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />

        <defs>
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="topGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,140,0,0.35)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4d2d" />
            <stop offset="50%" stopColor="#ff7a2f" />
            <stop offset="100%" stopColor="#ffd166" />
          </linearGradient>
          <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffd166" />
            <stop offset="100%" stopColor="#ff7a2f" />
          </linearGradient>
          <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff7a2f" />
            <stop offset="100%" stopColor="#ff4d2d" />
          </linearGradient>
          <linearGradient id="streak1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="rgba(255,209,102,0.6)" />
            <stop offset="70%" stopColor="rgba(255,122,47,0.4)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* 3. Bottom Right Wave Cluster with glow & spark particles */}
      <svg
        className="absolute -bottom-20 -right-20 w-[750px] h-[550px]"
        viewBox="0 0 750 550"
        fill="none"
      >
        {/* Glow behind waves */}
        <ellipse cx="500" cy="350" rx="280" ry="180" fill="url(#bottomGlow)" opacity="0.4" />

        {/* Deep orange wave */}
        <path
          d="M810 550C650 430 520 390 390 430S190 530 70 460S-40 270 10 140"
          stroke="url(#wave4)"
          strokeWidth="5"
          fill="none"
          filter="url(#glowFilter2)"
        />
        {/* Bright orange wave */}
        <path
          d="M830 520C670 400 540 370 410 410S210 500 90 440S-20 250 30 120"
          stroke="url(#wave5)"
          strokeWidth="3"
          fill="none"
          opacity="0.7"
          filter="url(#glowFilter2)"
        />
        {/* Gold wave */}
        <path
          d="M790 570C630 460 500 430 370 470S170 550 50 490S-60 290 -10 160"
          stroke="url(#wave6)"
          strokeWidth="6"
          fill="none"
          opacity="0.3"
          filter="url(#glowFilter2)"
        />
        {/* Light streak */}
        <path
          d="M750 470C600 380 470 360 350 400S170 480 70 420"
          stroke="url(#streak2)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />

        {/* Spark particles near curves */}
        {[
          { cx: 420, cy: 380, r: 2.5 },
          { cx: 350, cy: 440, r: 1.8 },
          { cx: 500, cy: 320, r: 2 },
          { cx: 280, cy: 400, r: 1.5 },
          { cx: 550, cy: 400, r: 2.2 },
        ].map((s, i) => (
          <circle
            key={i}
            cx={s.cx}
            cy={s.cy}
            r={s.r}
            fill="#ffd166"
            opacity="0.6"
            filter="url(#sparkGlow)"
          />
        ))}

        <defs>
          <filter id="glowFilter2" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="sparkGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <radialGradient id="bottomGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,140,0,0.35)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <linearGradient id="wave4" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ff4d2d" />
            <stop offset="50%" stopColor="#ff7a2f" />
            <stop offset="100%" stopColor="#ffd166" />
          </linearGradient>
          <linearGradient id="wave5" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ff4d2d" />
            <stop offset="100%" stopColor="#ffd166" />
          </linearGradient>
          <linearGradient id="wave6" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ff4d2d" />
            <stop offset="100%" stopColor="#ff7a2f" />
          </linearGradient>
          <linearGradient id="streak2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="rgba(255,209,102,0.6)" />
            <stop offset="70%" stopColor="rgba(255,122,47,0.4)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>

      {/* 4. Halftone dot pattern - top right with glow */}
      <div className="absolute top-0 right-0 w-80 h-80">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(circle, #ff7a2f 1.5px, transparent 1.5px)`,
            backgroundSize: "20px 20px",
          }}
        />
        <div
          className="absolute inset-0 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle at 70% 30%, rgba(255,140,0,0.2) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Halftone dot pattern - bottom left with glow */}
      <div className="absolute bottom-0 left-0 w-72 h-72">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle, #d4d4d4 1.5px, transparent 1.5px)`,
            backgroundSize: "18px 18px",
          }}
        />
        <div
          className="absolute inset-0 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle at 30% 70%, rgba(255,140,0,0.15) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* 5. Animated glow sparkle particles */}
      {[
        { x: "12%", y: "28%", delay: 0, size: 4 },
        { x: "82%", y: "22%", delay: 1.2, size: 3 },
        { x: "58%", y: "68%", delay: 0.5, size: 5 },
        { x: "22%", y: "72%", delay: 2, size: 3 },
        { x: "42%", y: "12%", delay: 1.5, size: 4 },
        { x: "72%", y: "48%", delay: 0.8, size: 3 },
        { x: "88%", y: "78%", delay: 2.5, size: 4 },
        { x: "35%", y: "45%", delay: 1.8, size: 2.5 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            background: "radial-gradient(circle, #ffd166, #ff7a2f)",
            boxShadow: "0 0 8px 2px rgba(255,140,0,0.35)",
          }}
          animate={{ opacity: [0.15, 0.7, 0.15], scale: [1, 1.6, 1] }}
          transition={{
            duration: 3.5 + p.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* Lens flare accent near top-left */}
      <div
        className="absolute top-[15%] left-[20%] w-32 h-32 rounded-full opacity-[0.12]"
        style={{
          background: "radial-gradient(circle, rgba(255,209,102,0.5) 0%, transparent 70%)",
        }}
      />

      {/* Lens flare accent near bottom-right */}
      <div
        className="absolute bottom-[18%] right-[22%] w-40 h-40 rounded-full opacity-[0.10]"
        style={{
          background: "radial-gradient(circle, rgba(255,122,47,0.4) 0%, transparent 70%)",
        }}
      />
    </div>
  );
};
