import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import { SectionHeader } from "./ui";

type Project = {
  id: string;
  name: string;
  type: string;
  description: string;
  stack: string[];
  image: string;
  url?: string;
  private?: boolean;
};

const portfolioProjects: Project[] = [
  {
    id: "facilcred",
    name: "FacilCred",
    type: "Instituição Financeira",
    description:
      "Website institucional desenvolvido para uma Instituição Financeira Não Bancária de direito angolano, apresentando os seus serviços, identidade e informações institucionais.",
    stack: ["PHP", "HTML", "CSS", "MySQL"],
    image: "/projects/facilcred.png",
    url: "https://facilcred.ao/",
  },

  {
    id: "webide",
    name: "WebIde",
    type: "Aplicação Desktop",
    description:
      "Aplicação desktop desenvolvida para desenvolvimento de software, oferecendo um ambiente próprio para criação e gestão de projetos.",
    stack: ["React", "Node.js"],
    image: "/projects/webide.jpeg",
    private: true,
  },

  {
    id: "todo",
    name: "ToDo",
    type: "Sistema de Gestão",
    description:
      "Sistema de gestão de tarefas desenvolvido para organizar demandas empresariais, permitindo melhor controlo de atividades e produtividade.",
    stack: ["PHP", "HTML", "CSS", "MySQL", "Bootstrap"],
    image: "/projects/todo.png",
    private: true,
  },

  {
    id: "deezign",
    name: "Dezign",
    type: "Website",
    description:
      "Website desenvolvido para uma marca de mobiliário de alto padrão, com foco em exclusividade, projetos personalizados e apresentação sofisticada.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    image: "/projects/dezign.png",
    url: "https://deezign.vercel.app/",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden border border-border rounded-xl bg-surface hover:border-accent/40 transition-all duration-500"
    >
      {/* Project image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-surface">
        <img
          src={project.image}
          alt={`Preview do projeto ${project.name}`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading={index === 0 ? "eager" : "lazy"}
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />

        {/* Hover glow */}
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.04] transition-colors duration-500" />

        {/* Project type */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-background/80 backdrop-blur-md border border-border text-[10px] font-mono uppercase tracking-wider text-text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            {project.type}
          </span>
        </div>

        {/* Private badge */}
        {project.private && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1.5 rounded-md bg-background/80 backdrop-blur-md border border-border text-[10px] font-mono uppercase tracking-wider text-text-muted">
              Privado
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-7">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5">
          <div className="flex-1">
            {/* Project name */}
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-primary group-hover:text-accent transition-colors duration-500">
              {project.name}
            </h3>

            {/* Description */}
            <p className="mt-3 text-sm md:text-[15px] text-text-secondary leading-relaxed max-w-2xl">
              {project.description}
            </p>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 mt-5">
              {project.stack.map((technology) => (
                <span
                  key={technology}
                  className="px-2.5 py-1 rounded-md border border-border bg-background/40 text-[11px] font-mono text-text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className="flex-shrink-0">
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/button inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent text-background text-sm font-semibold hover:bg-accent-hover transition-all duration-300"
              >
                Visitar site
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            ) : (
              <span className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-border text-text-muted text-sm font-medium cursor-default">
                Projeto privado
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/50 transition-all duration-700" />
    </motion.article>
  );
}

export function Portfolio() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

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
              colocamos para{" "}
              <span className="text-accent italic">funcionar.</span>
            </>
          }
        />

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6"
        >
          {portfolioProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={isInView ? index : 0}
            />
          ))}
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}