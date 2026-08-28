import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Sequence:
 *  1. "Re" appears
 *  2. "ch" appears on the right edge
 *  3. "solva" slides in from the left, landing between "Re" and the gap
 *  4. "Te" slides in, landing between "solva" and "ch"  →  ResolvaTech
 */
export function Splash() {
  return createPortal(
    <motion.div
      className="fixed inset-0 z-[10000] flex items-center justify-center overflow-hidden bg-background"
      style={{ position: "fixed", top: 0, right: 0, bottom: 0, left: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
    >

      {/* ambient glow */}
      <motion.div
        className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-accent/10 blur-3xl"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      <div className="relative flex flex-col items-center gap-4 px-4">
        <div
          className="flex items-center justify-center whitespace-nowrap font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary glow-green-text"
          aria-label="ResolvaTech"
        >

        {/* Re */}
        <motion.span
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          Re
        </motion.span>

        {/* solva */}
        <motion.span
          className="text-accent"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          solva
        </motion.span>

        {/* Te */}
        <motion.span
          className="text-accent"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          Te
        </motion.span>

        {/* ch */}
        <motion.span
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
        >
          ch
        </motion.span>
        </div>

        {/* underline sweep — relative to the word, so it stays aligned on any screen size */}
        <motion.div
          className="h-px bg-accent/60"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "min(70vw, 420px)", opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </motion.div>,
    document.body
  );
}

/** App-level splash controller: renders Splash, then fades it out. */
export function useSplash(durationMs = 2800) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setShowSplash(false);
      document.body.style.overflow = "";
    }, durationMs);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [durationMs]);

  return <AnimatePresence>{showSplash && <Splash key="splash" />}</AnimatePresence>;
}
