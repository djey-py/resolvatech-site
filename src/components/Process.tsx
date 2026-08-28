import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./ui";
import { processSteps } from "../data";

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="processo" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="03"
          label="PROCESSO"
          title={
            <>
              Do primeiro insight{" "}
              <br className="hidden md:block" />
              ao software <span className="text-accent italic">funcionando.</span>
            </>
          }
        />

        <div ref={ref} className="relative">
          {/* Desktop: alternating timeline */}
          <div className="hidden md:block relative">
            {/* Central vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

            {/* Animated progress line */}
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 2.5, delay: 0.2, ease: "easeInOut" }}
              className="absolute left-1/2 top-0 w-px bg-accent/20 -translate-x-1/2 origin-top"
            />

            <div className="space-y-12 lg:space-y-16">
              {processSteps.map((step, i) => {
                const isLeft = i % 2 === 0;

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex items-center"
                  >
                    {/* Content on left or right */}
                    {isLeft ? (
                      <>
                        <div className="w-[calc(50%-24px)] pr-8 text-right">
                          <StepContent step={step} align="right" />
                        </div>
                        <TimelineDot />
                        <div className="w-[calc(50%-24px)]" />
                      </>
                    ) : (
                      <>
                        <div className="w-[calc(50%-24px)]" />
                        <TimelineDot />
                        <div className="w-[calc(50%-24px)] pl-8">
                          <StepContent step={step} align="left" />
                        </div>
                      </>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
              className="absolute left-4 top-0 w-px bg-accent/20 origin-top"
            />

            <div className="space-y-8">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex gap-5 group"
                >
                  <div className="relative z-10 flex-shrink-0 w-8 flex items-start justify-center pt-1">
                    <div className="w-3 h-3 bg-background border-2 border-accent rounded-full group-hover:bg-accent group-hover:scale-125 transition-all duration-500" />
                  </div>
                  <div className="flex-1 pb-2">
                    <StepContent step={step} align="left" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}

function StepContent({ step, align }: { step: { number: string; title: string; description: string }; align: "left" | "right" }) {
  return (
    <div className="group">
      <div className={`flex items-center gap-3 mb-2 ${align === "right" ? "justify-end" : ""}`}>
        <span className="font-mono text-xs text-accent tracking-wider">{step.number}</span>
        <span className={`w-6 h-px bg-accent/30 ${align === "right" ? "order-first" : ""}`} />
      </div>
      <h3 className={`font-heading text-xl lg:text-2xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-500 ${align === "right" ? "text-right" : ""}`}>
        {step.title}
      </h3>
      <p className={`text-text-secondary text-sm lg:text-base leading-relaxed max-w-md ${align === "right" ? "text-right ml-auto" : ""}`}>
        {step.description}
      </p>
    </div>
  );
}

function TimelineDot() {
  return (
    <div className="relative z-10 flex-shrink-0 w-12 flex items-center justify-center">
      <div className="w-4 h-4 bg-background border-2 border-accent rounded-full group-hover:bg-accent group-hover:scale-125 transition-all duration-500" />
    </div>
  );
}
