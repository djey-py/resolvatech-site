import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeader } from "./ui";
import { projects } from "../data";

const projectGradients: Record<string, string> = {
  alpha: "from-emerald-950/50 via-surface to-surface",
  beta: "from-green-950/40 via-surface to-surface",
  gamma: "from-teal-950/40 via-surface to-surface",
  delta: "from-cyan-950/40 via-surface to-surface",
};

function DashboardMockup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8 opacity-[0.08]">
      <div className="w-full max-w-lg border border-accent/40 rounded-lg overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-accent/20">
          <div className="w-2 h-2 rounded-full bg-accent/40" />
          <div className="w-2 h-2 rounded-full bg-accent/30" />
          <div className="w-2 h-2 rounded-full bg-accent/20" />
        </div>
        <div className="p-4 space-y-3">
          <div className="flex gap-3">
            <div className="flex-1 h-16 bg-accent/20 rounded" />
            <div className="flex-1 h-16 bg-accent/15 rounded" />
            <div className="flex-1 h-16 bg-accent/20 rounded" />
          </div>
          <div className="h-24 bg-accent/10 rounded" />
          <div className="flex gap-2">
            <div className="w-1/3 h-3 bg-accent/15 rounded" />
            <div className="w-1/4 h-3 bg-accent/10 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

function EcommerceMockup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8 opacity-[0.08]">
      <div className="w-full max-w-md border border-accent/40 rounded-lg overflow-hidden">
        <div className="px-4 py-3 border-b border-accent/20">
          <div className="w-1/3 h-3 bg-accent/25 rounded" />
        </div>
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="h-20 bg-accent/15 rounded" />
            <div className="h-20 bg-accent/10 rounded" />
          </div>
          <div className="h-8 bg-accent/25 rounded" />
          <div className="flex gap-2">
            <div className="flex-1 h-6 bg-accent/15 rounded" />
            <div className="w-16 h-6 bg-accent/30 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SystemMockup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8 opacity-[0.08]">
      <div className="w-full max-w-md border border-accent/40 rounded-lg overflow-hidden">
        <div className="flex">
          <div className="w-16 border-r border-accent/20 p-2 space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-2 bg-accent/15 rounded" />
            ))}
          </div>
          <div className="flex-1 p-3 space-y-2">
            <div className="w-1/2 h-3 bg-accent/20 rounded" />
            <div className="grid grid-cols-3 gap-1.5">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-8 bg-accent/12 rounded" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMockup() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8 opacity-[0.08]">
      <div className="w-24 h-44 border border-accent/40 rounded-xl relative">
        <div className="absolute top-1.5 left-0 right-0 flex justify-center">
          <div className="w-8 h-1 bg-accent/20 rounded" />
        </div>
        <div className="p-2 mt-4 space-y-1.5">
          <div className="w-full h-2.5 bg-accent/20 rounded" />
          <div className="w-2/3 h-2.5 bg-accent/15 rounded" />
          <div className="w-full h-10 bg-accent/10 rounded mt-2" />
          <div className="w-full h-5 bg-accent/25 rounded" />
        </div>
        <div className="absolute bottom-1.5 left-0 right-0 flex justify-center">
          <div className="w-6 h-6 border border-accent/15 rounded-full" />
        </div>
      </div>
    </div>
  );
}

const mockups: Record<string, React.ReactNode> = {
  alpha: <DashboardMockup />,
  beta: <EcommerceMockup />,
  gamma: <SystemMockup />,
  delta: <MobileMockup />,
};

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="trabalho" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          sectionNumber="04"
          label="TRABALHO"
          title={
            <>
              Alguns projetos que{" "}
              <br className="hidden md:block" />
              colocamos para <span className="text-accent italic">funcionar.</span>
            </>
          }
        />

        <div ref={ref} className="space-y-4 md:space-y-6">
          {projects.map((project, i) => {
            const isLarge = project.size === "large";
            const gradient = projectGradients[project.id];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden border border-border rounded-xl bg-gradient-to-br ${gradient} hover:border-accent/30 transition-all duration-500 cursor-pointer ${
                  isLarge ? "min-h-[220px] md:min-h-[280px]" : "min-h-[180px] md:min-h-[220px]"
                }`}
              >
                {/* Visual mockup */}
                {mockups[project.id]}

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-mono text-accent tracking-wider uppercase">{project.type}</span>
                      </div>
                      <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-text-primary group-hover:text-accent transition-colors duration-500">
                        {project.client}
                      </h3>
                      <p className="text-text-secondary text-sm mt-2 max-w-md hidden sm:block">
                        {project.description}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="font-heading text-lg md:text-xl lg:text-2xl font-bold text-accent glow-green-text whitespace-nowrap">
                        {project.metric}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.03] transition-all duration-500 pointer-events-none" />

                {/* Corner accent */}
                <div className="absolute top-3 right-3 w-1 h-1 bg-accent/0 group-hover:bg-accent/60 rounded-full transition-colors duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
