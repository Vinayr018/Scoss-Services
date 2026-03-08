import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import scossLogo from "@/assets/scoss-logo.png";

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"logo" | "tagline" | "exit">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("tagline"), 1200);
    const t2 = setTimeout(() => setPhase("exit"), 2800);
    const t3 = setTimeout(onComplete, 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? null : null}
      <motion.div
        key="splash"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "exit" ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1a1a2e] overflow-hidden"
      >
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/20"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Glowing ring */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1.2, 1], opacity: [0, 0.5, 0.3] }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-primary/30"
          style={{ boxShadow: "0 0 60px rgba(234,56,45,0.2), inset 0 0 60px rgba(234,56,45,0.1)" }}
        />

        {/* Second ring */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotate: 0 }}
          animate={{ scale: [0, 1.5, 1.3], opacity: [0, 0.3, 0.15], rotate: 90 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
          className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border border-secondary/20"
        />

        {/* Logo */}
        <motion.div
          initial={{ scale: 0, opacity: 0, rotateY: -90 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative z-10"
        >
          <motion.img
            src={scossLogo}
            alt="SCOSS Services"
            className="h-24 md:h-32 w-auto drop-shadow-2xl"
            animate={{ 
              filter: [
                "drop-shadow(0 0 10px rgba(234,56,45,0.3))",
                "drop-shadow(0 0 30px rgba(234,56,45,0.5))",
                "drop-shadow(0 0 10px rgba(234,56,45,0.3))",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: phase === "tagline" || phase === "exit" ? 1 : 0, 
            y: phase === "tagline" || phase === "exit" ? 0 : 20 
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 mt-6 text-center"
        >
          <p className="text-secondary font-semibold text-sm md:text-base tracking-[0.3em] uppercase">
            Elevating Business through Technology
          </p>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          className="absolute bottom-16 w-48 h-0.5 bg-white/10 rounded-full overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
