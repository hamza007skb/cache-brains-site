import { createFileRoute } from "@tanstack/react-router";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import ProjectCard from "@/components/common/ProjectCard";
import Reveal from "@/components/common/Reveal";
import CtaBanner from "@/components/common/CtaBanner";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/showcase/")({
  head: () => ({
    meta: [
      { title: "Showcase — AI Platforms & Software We've Built | CacheBrains" },
      {
        name: "description",
        content:
          "Selected CacheBrains engagements: an ed-tech microservices platform, a legal RAG assistant, an AI interior design pipeline, and an autonomous pentesting platform.",
      },
      { property: "og:title", content: "Showcase — CacheBrains" },
      {
        property: "og:description",
        content:
          "AI platforms and software systems built by CacheBrains across ed-tech, legal tech, generative AI, and cybersecurity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ShowcasePage,
});

const categories = Array.from(new Set(projects.map((p) => p.category)));

function ShowcasePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-line py-16 sm:py-20">
        <div
          className="grid-lines pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          aria-hidden="true"
        />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              index="Showcase"
              eyebrow="Selected work"
              title="Systems built to run, not to demo"
              description="Each project below shows the problem, the architecture we chose, and what the finished system does. Names and figures for client engagements are kept general by agreement."
            />
          </Reveal>
          <Reveal delay={120} className="mt-8 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category}
                className="border border-line bg-paper px-3 py-1.5 font-mono text-xs text-stone"
              >
                {category}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 70}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </div>
  );
}
