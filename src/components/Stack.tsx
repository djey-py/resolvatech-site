import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./ui";
import { techStack } from "../data";

const techCategories = [
  { label: "Front-end", items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"], color: "text-accent" },
  { label: "Back-end", items: ["Node.js", "Python", "PHP", "Laravel"], color: "text-accent" },
  { label: "Mobile", items: ["React Native", "Flutter"], color: "text-accent" },
  { label: "Banco de dados", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"], color: "text-accent" },
  { label: "Infra & DevOps", items: ["Docker", "AWS", "Git", "GitHub"], color: "text-accent" },
  { label: "Design", items: ["Figma"], color: "text-accent" },
];

export function Stack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stack" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="06"
          label="STACK"
          title={
            <>
              As ferramentas mudam.{" "}
              <br className="hidden md:block" />
              A <span className="text-accent italic">engenharia</span> permanece.
            </>
          }
        />

        {/* Category grid */}
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20">
          {techCategories.map((category, i) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className="text-[10px] font-mono text-accent/60 tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent/30 rounded-full" />
                {category.label}
              </div>
              <div className="space-y-3">
                {category.items.map((item, j) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.08 + j * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors duration-300 cursor-default"
                  >
                    <span className="w-4 h-px bg-border group-hover:bg-accent/30 transition-colors duration-500" />
                    <span className="font-heading font-medium text-sm md:text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee banner */}
        <div className="relative overflow-hidden py-8 border-y border-border/60">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee">
            {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className={`mx-3 md:mx-5 font-heading font-bold text-text-muted/[0.06] hover:text-accent/20 transition-colors duration-300 whitespace-nowrap select-none ${
                  i % 5 === 0 ? "text-3xl" : i % 3 === 0 ? "text-2xl" : i % 2 === 0 ? "text-xl" : "text-lg"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
