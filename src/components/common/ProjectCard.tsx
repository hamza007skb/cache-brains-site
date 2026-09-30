import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/showcase/$slug"
      params={{ slug: project.slug }}
      className="group flex h-full flex-col border border-line bg-paper transition-all duration-300 hover:border-ink/30 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-paper-dark">
        <img
          src={project.image}
          alt={`${project.title} interface preview`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 border border-ink/10 bg-paper/90 px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-ink backdrop-blur">
          {project.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone">
          {project.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((item) => (
            <span
              key={item}
              className="border border-line px-2 py-0.5 font-mono text-[0.7rem] text-stone"
            >
              {item}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="px-1 py-0.5 font-mono text-[0.7rem] text-stone/70">
              +{project.stack.length - 3}
            </span>
          )}
        </div>

        <span className="mt-5 inline-flex items-center gap-1.5 border-t border-line pt-4 text-sm font-medium text-ink">
          View project
          <ArrowUpRight
            size={16}
            className="text-copper transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
