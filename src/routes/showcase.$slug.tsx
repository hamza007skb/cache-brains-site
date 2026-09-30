import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import Container from "@/components/common/Container";
import ProjectCard from "@/components/common/ProjectCard";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";
import CtaBanner from "@/components/common/CtaBanner";
import { getProjectBySlug, projects } from "@/data/projects";

export const Route = createFileRoute("/showcase/$slug")({
  head: ({ params }) => {
    const project = getProjectBySlug(params.slug);
    const title = project
      ? `${project.title} — ${project.category} | CacheBrains`
      : "Project — CacheBrains";
    const description =
      project?.summary ??
      "A CacheBrains engagement. Browse the full showcase of AI platforms and software systems.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { slug } = Route.useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <Container className="flex flex-col items-start py-28">
        <span className="font-mono text-sm text-copper">Not found</span>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink">
          That project doesn't exist
        </h1>
        <p className="mt-3 max-w-md leading-relaxed text-stone">
          It may have been renamed. Browse the full showcase instead.
        </p>
        <Button to="/showcase" variant="primary" className="mt-8">
          Back to showcase
        </Button>
      </Container>
    );
  }

  const related = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 3);
  const relatedFallback =
    related.length > 0
      ? related
      : projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const sections = [
    { heading: "Overview", body: project.overview },
    { heading: "The challenge", body: project.challenge },
    { heading: "The solution", body: project.solution },
    { heading: "The result", body: project.result },
  ];

  return (
    <div>
      <section className="border-b border-line py-5">
        <Container>
          <Link
            to="/showcase"
            className="inline-flex items-center gap-2 text-sm font-medium text-stone transition-colors hover:text-ink"
          >
            <ArrowLeft size={16} /> Back to showcase
          </Link>
        </Container>
      </section>

      <section className="relative overflow-hidden border-b border-line py-14 sm:py-16">
        <div
          className="grid-lines pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          aria-hidden="true"
        />
        <Container className="relative">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className="border border-line bg-paper px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-ink">
                {project.tag}
              </span>
              <span className="font-mono text-xs text-stone">{project.category}</span>
            </div>
            <h1 className="mt-5 max-w-3xl text-[2.25rem] font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone sm:text-lg">
              {project.summary}
            </p>
          </Reveal>

          <Reveal
            delay={100}
            className="mt-10 overflow-hidden border border-line bg-paper-dark shadow-lift"
          >
            <img
              src={project.image}
              alt={`${project.title} interface`}
              width={1408}
              height={1008}
              className="aspect-[16/10] w-full object-cover"
            />
          </Reveal>

          <Reveal delay={140} className="mt-8 grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
            {project.highlights.map((item) => (
              <div key={item} className="flex items-start gap-2.5 bg-paper p-5">
                <Check size={17} className="mt-0.5 shrink-0 text-copper" />
                <span className="text-sm leading-relaxed text-ink">{item}</span>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_300px] lg:gap-16">
            <div className="space-y-10">
              {sections.map((section) => (
                <Reveal key={section.heading}>
                  <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                    {section.heading}
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-stone">
                    {section.body}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={100}>
              <aside className="border border-line bg-paper-dark/40 p-6 lg:sticky lg:top-28">
                <h3 className="eyebrow text-stone">Category</h3>
                <p className="mt-2 text-sm text-ink">{project.category}</p>

                <h3 className="mt-6 eyebrow text-stone">Stack</h3>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="border border-line bg-paper px-2 py-1 font-mono text-[0.7rem] text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 border-t border-line pt-6">
                  <p className="text-sm leading-relaxed text-stone">
                    Working on something similar? We'll tell you honestly whether this
                    architecture fits your case.
                  </p>
                  <Button to="/contact" variant="primary" className="mt-4 w-full">
                    Talk to us
                  </Button>
                </div>
              </aside>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16 sm:py-20">
        <Container>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            Related projects
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedFallback.map((p, index) => (
              <Reveal key={p.slug} delay={index * 70}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </div>
  );
}
