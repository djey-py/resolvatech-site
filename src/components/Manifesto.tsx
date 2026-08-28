import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedNumber, SectionHeader } from "./ui";
import { stats } from "../data";

export function Manifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="manifesto" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="01"
          label="MANIFESTO"
          title={
            <>
              Não construímos software para preencher espaço.{" "}
              <br className="hidden md:block" />
              Construímos para{" "}
              <span className="text-accent">resolver problemas.</span>
            </>
          }
        />

        <div ref={ref} className="max-w-3xl mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-secondary text-base md:text-lg leading-relaxed mb-6"
          >
            Não vendemos horas de desenvolvimento. Construímos software que resolve problemas.
            Cada linha de código tem propósito. Cada decisão técnica tem justificativa.
            Cada interface tem intenção.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-primary text-base md:text-lg leading-relaxed mb-6 font-medium"
          >
            Tecnologia não é despesa.{" "}
            <span className="text-accent">É infraestrutura para fazer o negócio crescer.</span>{" "}
            Software bem construído escala. Automatiza. Diferencia. E devolve resultado.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-text-muted text-base md:text-lg leading-relaxed"
          >
            Sem templates. Sem soluções genéricas. Apenas código próprio, arquitetura sólida e design estratégico — do zero, sob medida, para o seu negócio.
          </motion.p>
        </div>

        {/* Stats counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -2 }}
              className="relative p-6 md:p-8 border border-border rounded-xl bg-surface/30 group hover:border-accent/25 transition-all duration-500"
            >
              <div className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2 glow-green-text leading-none">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-text-secondary text-sm">{stat.label}</div>

              {/* Decorative elements */}
              <div className="absolute top-3 right-3 w-1 h-1 bg-accent/0 group-hover:bg-accent/50 rounded-full transition-colors duration-500" />
              <div className="absolute bottom-0 left-6 right-6 h-px bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
