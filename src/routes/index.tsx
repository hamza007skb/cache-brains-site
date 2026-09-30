import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "@/components/common/ServiceCard";
import ProjectCard from "@/components/common/ProjectCard";
import ClientLogoCard from "@/components/common/ClientLogoCard";
import CtaBanner from "@/components/common/CtaBanner";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { clients } from "@/data/clients";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CacheBrains — AI & Software Engineering Studio" },
      {
        name: "description",
        content:
          "CacheBrains builds AI systems, automations, and software that hold up in production — from greenfield products to legacy infrastructure most vendors avoid.",
      },
      { property: "og:title", content: "CacheBrains — AI & Software Engineering Studio" },
      {
        property: "og:description",
        content:
          "AI systems, automations, and software built to survive contact with production. One senior team, end to end.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "11", label: "Engineering disciplines in-house" },
  { value: "35+", label: "Years of legacy systems experience" },
  { value: "4", label: "Flagship AI platforms delivered" },
  { value: "1", label: "Accountable team per engagement" },
];

const valueProps = [
  {
    title: "Engineering-first, not demo-first",
    description:
      "Every system we build is designed to survive contact with production — monitored, versioned, and built to be maintained by a team other than ours.",
  },
  {
    title: "Comfortable with legacy",
    description:
      "Decades of combined experience in mainframe, COBOL, and enterprise systems means we integrate with what you already have instead of asking you to replace it.",
  },
  {
    title: "Right-sized solutions",
    description:
      "Not every problem needs a foundation model. We choose the simplest architecture that reliably solves the problem in front of us.",
  },
  {
    title: "One accountable team",
    description:
      "From data pipeline to deployed interface, a single team carries the work end to end — no handoffs, no diffusion of ownership.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & scoping",
    description:
      "We start with the business question and the systems you already run — mapping constraints, data, and integration points before proposing anything.",
  },
  {
    step: "02",
    title: "Architecture & feasibility",
    description:
      "A written technical plan: the simplest architecture that solves the problem, what it costs to run, and where the risks actually sit.",
  },
  {
    step: "03",
    title: "Build & evaluate",
    description:
      "Short iterations with evaluation harnesses in place from the start, so quality is measured rather than assumed.",
  },
  {
    step: "04",
    title: "Deploy & maintain",
    description:
      "Monitored deployment, drift detection, and documentation handed to your team — built to be maintained by someone other than us.",
  },
];

const technologies = [
  "Python",
  "FastAPI",
  "LangChain",
  "LangGraph",
  "PyTorch",
  "React",
  ".NET",
  "Spring Boot",
  "Node.js",
  "PostgreSQL",
  "MongoDB",
  "Neo4j",
  "Docker",
  "GitHub Actions",
  "Oracle",
  "COBOL",
];

const featuredServices = services.slice(0, 6);
const spotlight = projects[0]!;
const featuredProjects = projects.slice(1, 4);

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div
          className="grid-lines pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-copper/10 blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative py-20 sm:py-24 lg:py-32">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 border border-line bg-paper/70 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-stone backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-copper" />
                AI &amp; software engineering studio
              </span>
              <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.85rem]">
                AI and software engineering, built to hold up in production.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
                We design and build AI systems, automations, and software for teams who
                need more than a proof of concept — from greenfield products to the
                legacy infrastructure most vendors won't touch.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button to="/contact" variant="primary" size="lg">
                  Start a project <ArrowRight size={16} />
                </Button>
                <Button to="/services" variant="secondary" size="lg">
                  Explore services
                </Button>
              </div>
              <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2.5">
                {[
                  "Production-grade delivery",
                  "Legacy-friendly integration",
                  "Senior team, no handoffs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-stone">
                    <Check size={15} className="shrink-0 text-copper" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="relative border border-line bg-paper shadow-lift">
                <div className="flex items-center justify-between border-b border-line px-4 py-3">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-copper" />
                    <span className="h-2 w-2 rounded-full bg-line" />
                    <span className="h-2 w-2 rounded-full bg-line" />
                  </div>
                  <span className="font-mono text-[0.7rem] text-stone">
                    cachebrains / delivery
                  </span>
                </div>
                <img
                  src={spotlight.image}
                  alt={`${spotlight.title} platform interface`}
                  width={1408}
                  height={1008}
                  className="aspect-[7/5] w-full object-cover"
                />
                <div className="border-t border-line p-5">
                  <p className="font-mono text-[0.7rem] uppercase tracking-wider text-copper">
                    Featured build
                  </p>
                  <h2 className="mt-2 font-display text-lg font-semibold tracking-tight text-ink">
                    {spotlight.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-stone">
                    {spotlight.summary}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Stats */}
          <Reveal
            delay={180}
            className="mt-16 grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="bg-paper p-5 sm:p-6">
                <p className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-stone">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <Reveal>
              <SectionHeading
                index="01"
                eyebrow="What we build"
                title="Eleven disciplines, one senior team"
                description="Each engagement draws on whichever of these are actually needed — nothing more. We tell you which ones your problem doesn't require."
              />
            </Reveal>
            <Reveal delay={100}>
              <Button to="/services" variant="secondary" className="shrink-0">
                View all services <ArrowUpRight size={16} />
              </Button>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <Reveal key={service.slug} delay={index * 70}>
                <ServiceCard service={service} index={index} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Why CacheBrains */}
      <section className="border-y border-line bg-paper-dark/70 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              index="02"
              eyebrow="Why CacheBrains"
              title="Built by people who have to maintain what they ship"
              description="We've spent enough time on the operations side of AI to know which shortcuts come back around."
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px bg-line md:grid-cols-2">
            {valueProps.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 80}
                className="group bg-paper-dark/40 p-6 transition-colors duration-300 hover:bg-paper sm:p-8"
              >
                <span className="font-mono text-xs text-copper">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2.5 max-w-md text-sm leading-relaxed text-stone">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Recent work */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <Reveal>
              <SectionHeading
                index="03"
                eyebrow="Recent work"
                title="Platforms we've designed and shipped"
                description="Engagements spanning RAG, computer vision, agentic systems, and distributed platform architecture."
              />
            </Reveal>
            <Reveal delay={100}>
              <Button to="/showcase" variant="secondary" className="shrink-0">
                View showcase <ArrowUpRight size={16} />
              </Button>
            </Reveal>
          </div>

          {/* Spotlight */}
          <Reveal className="mt-12 grid grid-cols-1 gap-px border border-line bg-line lg:grid-cols-[1.25fr_1fr]">
            <div className="overflow-hidden bg-paper">
              <img
                src={spotlight.image}
                alt={`${spotlight.title} interface preview`}
                width={1408}
                height={1008}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-col justify-center bg-paper p-6 sm:p-8">
              <span className="font-mono text-[0.7rem] uppercase tracking-wider text-copper">
                {spotlight.category}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {spotlight.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone sm:text-base">
                {spotlight.summary}
              </p>
              <ul className="mt-5 space-y-2.5">
                {spotlight.highlights.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink">
                    <Check size={16} className="mt-0.5 shrink-0 text-copper" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/showcase/$slug"
                params={{ slug: spotlight.slug }}
                className="group mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-ink"
              >
                View project
                <ArrowUpRight
                  size={16}
                  className="text-copper transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden border-y border-line bg-ink py-20 sm:py-24">
        <div className="dot-grid absolute inset-0 opacity-60" aria-hidden="true" />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              index="04"
              eyebrow="How we work"
              title="A process built around reducing risk, not selling scope"
              description="Four stages, each with a written output you can review before the next one starts."
              light
            />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-px bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <Reveal
                key={item.step}
                delay={index * 80}
                className="group bg-ink p-6 transition-colors duration-300 hover:bg-ink-soft"
              >
                <span className="font-mono text-sm text-copper-light">{item.step}</span>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-paper">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-paper/60">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              index="05"
              eyebrow="Technologies"
              title="The stack we build and integrate with"
              description="Modern AI tooling alongside the enterprise systems that still run the business."
            />
          </Reveal>
          <Reveal delay={100} className="mt-10 flex flex-wrap gap-2.5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="border border-line bg-paper px-3.5 py-2 font-mono text-xs text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-copper/50 hover:text-copper"
              >
                {tech}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* Clients */}
      <section className="border-y border-line bg-paper-dark/70 py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              index="06"
              eyebrow="Trust"
              title="Clients we've worked with"
              description="Teams across e-commerce, insurance, food, and sport who brought us in to build or integrate something specific."
            />
          </Reveal>
          <Reveal
            delay={100}
            className="mt-12 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-4"
          >
            {clients.map((client) => (
              <ClientLogoCard key={client.slug} client={client} />
            ))}
            <Link
              to="/contact"
              className="group flex aspect-[3/2] flex-col items-center justify-center gap-2 bg-paper px-4 text-center transition-colors duration-300 hover:bg-ink"
            >
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-copper">
                Next
              </span>
              <span className="inline-flex items-center gap-1.5 font-display text-sm font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-paper sm:text-base">
                Your team here
                <ArrowUpRight
                  size={15}
                  className="text-copper transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </div>
  );
}
