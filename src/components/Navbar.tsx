import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, getWhatsAppUrl } from "../data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="font-heading font-bold text-lg md:text-xl tracking-tight text-text-primary relative z-10">
            RESOLVA<span className="text-accent">TECH</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] text-text-secondary hover:text-text-primary transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={getWhatsAppUrl("Olá, ResolvaTech! Gostaria de falar sobre um projeto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 bg-accent text-background text-sm font-medium rounded-lg hover:bg-accent-hover transition-all duration-300 glow-green"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.28c-.24.68-1.38 1.3-1.9 1.36-.5.06-1.02.08-1.56-.02-.36-.07-.82-.19-1.38-.4-2.42-1.04-3.98-3.5-4.1-3.66-.12-.16-.98-1.3-.98-2.5 0-1.2.62-1.8.84-2.04.22-.24.48-.3.64-.3.0 0 .16 0 .28.02.16.02.36-.06.56.44.2.5.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.26.3-.36.4-.12.12-.24.26-.1.5.14.24.62 1.02 1.34 1.66.98.9 1.82 1.18 2.06 1.3.24.12.38.1.52-.06.14-.16.62-.72.78-.96.16-.24.32-.2.54-.12.22.08 1.38.64 1.62.76.24.12.38.18.44.28.06.1.06.58-.18 1.26z"/></svg>
              Falar no WhatsApp
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center z-10"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          >
            <div className="flex flex-col gap-[5px]">
              <span className={`block w-5 h-[1.5px] bg-text-primary transition-all duration-300 origin-center ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block w-5 h-[1.5px] bg-text-primary transition-all duration-300 ${mobileOpen ? "opacity-0 scale-0" : ""}`} />
              <span className={`block w-5 h-[1.5px] bg-text-primary transition-all duration-300 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-7">
              {/* Decorative number */}
              <div className="text-[10px] font-mono text-accent/30 tracking-widest uppercase mb-2">Menu</div>

              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.04, duration: 0.4 }}
                  className="font-heading text-2xl font-semibold text-text-primary hover:text-accent transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="mt-6"
              >
                <a
                  href={getWhatsAppUrl("Olá, ResolvaTech! Gostaria de falar sobre um projeto.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-medium rounded-lg glow-green"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.28c-.24.68-1.38 1.3-1.9 1.36-.5.06-1.02.08-1.56-.02-.36-.07-.82-.19-1.38-.4-2.42-1.04-3.98-3.5-4.1-3.66-.12-.16-.98-1.3-.98-2.5 0-1.2.62-1.8.84-2.04.22-.24.48-.3.64-.3.0 0 .16 0 .28.02.16.02.36-.06.56.44.2.5.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.26.3-.36.4-.12.12-.24.26-.1.5.14.24.62 1.02 1.34 1.66.98.9 1.82 1.18 2.06 1.3.24.12.38.1.52-.06.14-.16.62-.72.78-.96.16-.24.32-.2.54-.12.22.08 1.38.64 1.62.76.24.12.38.18.44.28.06.1.06.58-.18 1.26z"/></svg>
                  Falar no WhatsApp
                  <span>→</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
