import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./ui";
import { testimonials } from "../data";

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="depoimentos" className="relative py-24 md:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="07"
          label="QUEM JÁ CONSTRUIU CONOSCO"
          title={
            <>
              Não somos nós que dizemos.{" "}
              <br className="hidden md:block" />
              São nossos <span className="text-accent italic">clientes.</span>
            </>
          }
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="group relative p-6 md:p-8 border border-border rounded-xl bg-surface/50 hover:border-accent/25 transition-all duration-500"
            >
              {/* Quote mark */}
              <div className="text-accent/15 text-6xl font-heading font-bold leading-none mb-4 group-hover:text-accent/30 transition-colors duration-500 select-none">
                "
              </div>

              {/* Quote text */}
              <p className="text-text-primary text-sm md:text-base leading-relaxed mb-8">
                {testimonial.quote}
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-border mb-6 group-hover:bg-accent/30 transition-colors duration-500" />

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-surface-2 border border-border flex items-center justify-center group-hover:border-accent/30 transition-colors duration-500">
                  <span className="text-accent text-xs font-heading font-bold">
                    {testimonial.name.charAt(0)}{testimonial.name.split(' ')[1]?.charAt(0) || ''}
                  </span>
                </div>
                <div>
                  <div className="text-text-primary text-sm font-medium group-hover:text-accent transition-colors duration-500">{testimonial.name}</div>
                  <div className="text-text-muted text-xs">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-1 h-1 bg-accent/0 group-hover:bg-accent/40 rounded-full transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent/0 group-hover:bg-accent/40 rounded-full transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
