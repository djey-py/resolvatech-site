import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { getWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from "../data";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contato" className="relative py-24 md:py-40 overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      {/* Large background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-accent/4 rounded-full blur-[200px]" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/5 to-transparent hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-accent/5 to-transparent hidden lg:block" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section number */}
          <div className="inline-flex items-center gap-3 mb-10">
            <span className="w-12 h-px bg-accent/20" />
            <span className="text-accent text-xs font-mono tracking-wider">08 — CONTATO</span>
            <span className="w-12 h-px bg-accent/20" />
          </div>

          {/* Headline */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-text-primary leading-tight tracking-tight mb-8">
            Vamos transformar sua ideia{" "}
            <br className="hidden sm:block" />
            em algo que{" "}
            <span className="text-accent italic glow-green-text">funciona.</span>
          </h2>

          {/* Subtext */}
          <p className="text-text-secondary text-base md:text-lg max-w-lg mx-auto mb-12 leading-relaxed">
            Conte-nos o que você precisa. Nós pensamos na tecnologia.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={getWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-accent text-background font-semibold text-base md:text-lg rounded-xl hover:bg-accent-hover transition-all duration-300 glow-green mb-8"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.28c-.24.68-1.38 1.3-1.9 1.36-.5.06-1.02.08-1.56-.02-.36-.07-.82-.19-1.38-.4-2.42-1.04-3.98-3.5-4.1-3.66-.12-.16-.98-1.3-.98-2.5 0-1.2.62-1.8.84-2.04.22-.24.48-.3.64-.3.0 0 .16 0 .28.02.16.02.36-.06.56.44.2.5.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.26.3-.36.4-.12.12-.24.26-.1.5.14.24.62 1.02 1.34 1.66.98.9 1.82 1.18 2.06 1.3.24.12.38.1.52-.06.14-.16.62-.72.78-.96.16-.24.32-.2.54-.12.22.08 1.38.64 1.62.76.24.12.38.18.44.28.06.1.06.58-.18 1.26z"/></svg>
              Falar no WhatsApp
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </motion.div>

          {/* Contact details */}
          <div className="space-y-3">
            <div className="text-text-muted text-sm font-mono">
              +55 93843-5630
            </div>
            <div className="inline-flex items-center gap-2 text-xs text-text-muted">
              <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
              Resposta rápida pelo WhatsApp
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
