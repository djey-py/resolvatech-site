import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./ui";
import { services, getWhatsAppUrl } from "../data";

const serviceIcons: Record<string, React.ReactNode> = {
  sites: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  sistemas: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>
  ),
  aplicativos: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  lojas: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" />
    </svg>
  ),
};

const serviceGradients: Record<string, string> = {
  sites: "from-emerald-950/20 to-surface/30",
  sistemas: "from-teal-950/20 to-surface/30",
  aplicativos: "from-green-950/20 to-surface/30",
  lojas: "from-cyan-950/20 to-surface/30",
};

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="02"
          label="O QUE FAZEMOS"
          title={
            <>
              Software que trabalha{" "}
              <br className="hidden md:block" />
              pelo seu <span className="text-accent italic">negócio.</span>
            </>
          }
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className={`group relative p-7 md:p-8 border border-border rounded-xl bg-gradient-to-br ${serviceGradients[service.id]} hover:border-accent/30 transition-all duration-500 cursor-pointer overflow-hidden`}
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-text-muted/30 font-mono text-sm group-hover:text-accent/50 transition-colors duration-500">
                  0{i + 1}
                </span>
                <div className="text-text-muted/40 group-hover:text-accent/80 transition-all duration-500 group-hover:scale-110 transform">
                  {serviceIcons[service.id]}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-500">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[11px] font-mono text-text-muted bg-surface-2/80 rounded-md border border-border/60 group-hover:border-accent/15 transition-colors duration-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={getWhatsAppUrl(service.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-muted group-hover:text-accent transition-colors duration-500"
                onClick={(e) => e.stopPropagation()}
              >
                {service.cta}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

              {/* Hover glow background */}
              <div className="absolute -inset-1 bg-accent/0 group-hover:bg-accent/[0.015] rounded-xl transition-all duration-700 pointer-events-none" />

              {/* Decorative corner line */}
              <div className="absolute bottom-0 right-0 w-8 h-8">
                <div className="absolute bottom-3 right-3 w-4 h-px bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500" />
                <div className="absolute bottom-3 right-3 w-px h-4 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
