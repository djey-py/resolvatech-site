import { motion } from "framer-motion";
import { COMPANY_YEAR, getWhatsAppUrl } from "../data";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Gradient glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/3 rounded-full blur-[100px]" />

      {/* Decorative vertical lines */}
      <div className="absolute top-20 right-[10%] w-px h-32 bg-gradient-to-b from-transparent via-accent/15 to-transparent hidden lg:block" />
      <div className="absolute bottom-32 left-[8%] w-px h-20 bg-gradient-to-b from-transparent via-accent/15 to-transparent hidden lg:block" />
      <div className="absolute top-[60%] right-[30%] w-px h-16 bg-gradient-to-b from-transparent via-accent/10 to-transparent hidden xl:block" />

      {/* Decorative dots */}
      <div className="absolute top-1/3 left-[15%] w-1.5 h-1.5 bg-accent/20 rounded-full hidden lg:block" />
      <div className="absolute bottom-1/3 right-[20%] w-1.5 h-1.5 bg-accent/20 rounded-full hidden lg:block" />
      <div className="absolute top-[45%] left-[45%] w-1 h-1 bg-accent/15 rounded-full hidden xl:block" />

      {/* Decorative code-like element */}
      <div className="absolute top-32 right-8 lg:right-24 hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="font-mono text-[10px] text-text-muted/30 space-y-1.5"
        >
          <div>{'const solution = {'}</div>
          <div className="pl-4">{'built: "from scratch",'}</div>
          <div className="pl-4">{'quality: "premium",'}</div>
          <div className="pl-4">{'scalable: true'}</div>
          <div>{'};'}</div>
        </motion.div>
      </div>

      {/* Coordinate markers */}
      <div className="absolute bottom-20 right-8 lg:right-16 hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-mono text-[9px] text-text-muted/20 tracking-wider"
        >
          00°00′00″
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl">
          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-xs font-mono text-text-muted tracking-wider uppercase">
              Software Studio · Desde {COMPANY_YEAR}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            Seu próximo diferencial{" "}
            <br className="hidden sm:block" />
            pode ser{" "}
            <span className="text-accent italic glow-green-text">software.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed mb-10"
          >
            Desenvolvemos sites, sistemas, aplicativos e lojas virtuais sob medida — do zero, com tecnologia moderna e foco em resultado.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href={getWhatsAppUrl("Olá, ResolvaTech! Gostaria de falar sobre um projeto.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent text-background font-semibold rounded-lg hover:bg-accent-hover transition-all duration-300 glow-green text-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.8 14.28c-.24.68-1.38 1.3-1.9 1.36-.5.06-1.02.08-1.56-.02-.36-.07-.82-.19-1.38-.4-2.42-1.04-3.98-3.5-4.1-3.66-.12-.16-.98-1.3-.98-2.5 0-1.2.62-1.8.84-2.04.22-.24.48-.3.64-.3.0 0 .16 0 .28.02.16.02.36-.06.56.44.2.5.68 1.66.74 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.26.3-.36.4-.12.12-.24.26-.1.5.14.24.62 1.02 1.34 1.66.98.9 1.82 1.18 2.06 1.3.24.12.38.1.52-.06.14-.16.62-.72.78-.96.16-.24.32-.2.54-.12.22.08 1.38.64 1.62.76.24.12.38.18.44.28.06.1.06.58-.18 1.26z"/></svg>
              Falar no WhatsApp
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#trabalho"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border text-text-primary font-medium rounded-lg hover:border-border-hover hover:bg-surface transition-all duration-300 text-sm"
            >
              Ver nosso trabalho
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
            </a>
          </motion.div>

          {/* Available indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-text-muted"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span>Disponível para novos projetos</span>
            </div>
            <span className="hidden sm:inline w-px h-4 bg-border" />
            <span className="hidden sm:inline">Desde {COMPANY_YEAR}</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
