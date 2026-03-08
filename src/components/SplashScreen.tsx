import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import scossLogo from "@/assets/scoss-logo.png";

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"enter" | "reveal" | "exit">("enter");
  const hasCompletedRef = useRef(false);

  const completeSplash = useCallback(() => {
    if (hasCompletedRef.current) return;
    hasCompletedRef.current = true;
    setPhase("exit");
    window.setTimeout(onComplete, 800);
  }, [onComplete]);

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("reveal"), 1400);
    const t2 = window.setTimeout(completeSplash, 4200);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [completeSplash]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "exit" ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 40%, #16213e 100%)" }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => {
          const size = 2 + (i % 5);
          const left = (i * 3.3) % 100;
          const top = (i * 7.1) % 100;
          const delay = (i * 0.15) % 3;
          const dur = 3 + (i % 3);
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/30"
              style={{ width: size, height: size, left: `${left}%`, top: `${top}%` }}
              animate={{ y: [0, -80, 0], opacity: [0, 0.7, 0] }}
              transition={{ duration: dur, repeat: Infinity, delay, ease: "easeInOut" }}
            />
          );
        })}
      </div>

      {/* Glowing ring 1 */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.3, 1], opacity: [0, 0.5, 0.25] }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute h-64 w-64 rounded-full border-2 border-primary/30 md:h-80 md:w-80"
        style={{ boxShadow: "0 0 60px hsl(0 100% 58% / 0.2), inset 0 0 60px hsl(0 100% 58% / 0.1)" }}
      />

      {/* Glowing ring 2 */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: 0 }}
        animate={{ scale: [0, 1.6, 1.4], opacity: [0, 0.3, 0.12], rotate: 90 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.25 }}
        className="absolute h-72 w-72 rounded-full border border-secondary/20 md:h-96 md:w-96"
      />

      {/* Logo with 3D flip-in */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="relative z-10"
      >
        <motion.img
          src={scossLogo}
          alt="SCOSS Services"
          className="h-24 w-auto drop-shadow-2xl md:h-32"
          animate={{
            filter: [
              "drop-shadow(0 0 10px hsl(0 100% 58% / 0.3))",
              "drop-shadow(0 0 30px hsl(0 100% 58% / 0.5))",
              "drop-shadow(0 0 10px hsl(0 100% 58% / 0.3))",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Company name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: phase !== "enter" ? 1 : 0, y: phase !== "enter" ? 0 : 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mt-5 text-3xl font-extrabold tracking-wide text-white md:text-5xl"
        style={{ textShadow: "0 0 30px hsl(0 100% 58% / 0.3)" }}
      >
        SCOSS Services
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: phase !== "enter" ? 1 : 0, y: phase !== "enter" ? 0 : 14 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="relative z-10 mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-secondary md:text-base"
      >
        Elevating Business Through Technology
      </motion.p>

      {/* Loading bar */}
      <div className="absolute bottom-16 left-1/2 h-0.5 w-48 -translate-x-1/2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-primary"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3.8, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
};