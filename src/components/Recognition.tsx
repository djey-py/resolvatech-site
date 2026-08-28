import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedNumber, SectionHeader } from "./ui";
import { recognitionStats } from "../data";

export function Recognition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="reconhecimento" className="relative py-24 md:py-40 bg-surface/30">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/3 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="05"
          label="RECONHECIMENTO"
          title={
            <>
              Números que{" "}
              <span className="text-accent italic">falam.</span>
            </>
          }
          align="center"
        />

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mb-12 md:mb-16">
          {recognitionStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative text-center group"
            >
              {/* Decorative line */}
              <div className="w-8 h-px bg-accent/20 mx-auto mb-6 group-hover:w-16 transition-all duration-500" />

              <div className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-text-primary mb-3 leading-none">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} className="text-accent glow-green-text" />
              </div>
              <div className="font-mono text-[10px] sm:text-xs text-text-muted tracking-[0.2em] uppercase">
                {stat.label}
              </div>

              {/* Decorative dot */}
              <div className="mt-6 flex justify-center">
                <div className="w-1 h-1 bg-accent/20 rounded-full group-hover:bg-accent/60 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-text-muted text-sm md:text-base italic max-w-lg mx-auto"
        >
          Números importam. Mas o que realmente importa é o que eles representam.
        </motion.p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
