import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import scossLogo from "@/assets/scoss-logo.png";
import introSplashVideo from "@/assets/intro-splash-reference.mp4";

export const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);
  const hasCompletedRef = useRef(false);

  const completeSplash = useCallback(() => {
    if (hasCompletedRef.current) return;
    hasCompletedRef.current = true;
    setIsExiting(true);
    window.setTimeout(onComplete, 700);
  }, [onComplete]);

  useEffect(() => {
    const fallbackTimeout = window.setTimeout(completeSplash, 7000);
    return () => window.clearTimeout(fallbackTimeout);
  }, [completeSplash]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] overflow-hidden"
      aria-label="SCOSS intro splash"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={introSplashVideo}
        autoPlay
        muted
        playsInline
        onEnded={completeSplash}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/80 to-foreground/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-foreground/40" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.img
          src={scossLogo}
          alt="SCOSS Services logo"
          className="h-24 w-auto md:h-32"
          initial={{ opacity: 0, scale: 0.82, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-6 text-3xl font-extrabold tracking-wide text-primary-foreground md:text-5xl"
        >
          SCOSS Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-3 max-w-xl text-sm font-medium uppercase tracking-[0.24em] text-secondary md:text-base"
        >
          Elevating Business Through Technology
        </motion.p>

        <div className="absolute bottom-14 left-1/2 h-1 w-56 -translate-x-1/2 overflow-hidden rounded-full bg-primary-foreground/20 md:w-72">
          <motion.div
            className="h-full rounded-full bg-secondary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5.8, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};
