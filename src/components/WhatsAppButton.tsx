import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_URL } from "../data";

export function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 4000);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-full right-0 mb-3 px-4 py-2.5 bg-surface-2 border border-border rounded-lg shadow-xl whitespace-nowrap"
          >
            <p className="text-xs text-text-primary font-medium">Precisa de ajuda?</p>
            <p className="text-[10px] text-text-muted mt-0.5">Fale conosco no WhatsApp</p>
            <div className="absolute bottom-0 right-5 translate-y-1/2 w-2 h-2 bg-surface-2 border-r border-b border-border rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg shadow-accent/20 hover:bg-accent-hover transition-colors duration-300"
        aria-label="Falar no WhatsApp"
      >
        {/* Subtle ring animation */}
        <span className="absolute inset-0 rounded-full border-2 border-accent/30 animate-ping opacity-75" style={{ animationDuration: '3s' }} />

        {/* WhatsApp icon */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#08070A" className="relative z-10">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.28c-.24.68-1.38 1.3-1.9 1.36-.5.06-1.02.08-1.56-.02-.36-.07-.82-.19-1.38-.4-2.42-1.04-3.98-3.5-4.1-3.66-.12-.16-.98-1.3-.98-2.5 0-1.2.62-1.8.84-2.04.22-.24.48-.3.64-.3.0 0 .16 0 .28.02.16.02.36-.06.56.44.2.5.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.26.3-.36.4-.12.12-.24.26-.1.5.14.24.62 1.02 1.34 1.66.98.9 1.82 1.18 2.06 1.3.24.12.38.1.52-.06.14-.16.62-.72.78-.96.16-.24.32-.2.54-.12.22.08 1.38.64 1.62.76.24.12.38.18.44.28.06.1.06.58-.18 1.26z"/>
        </svg>
      </motion.a>
    </div>
  );
}
