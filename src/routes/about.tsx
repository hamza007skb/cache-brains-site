import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";
import TeamCard from "@/components/common/TeamCard";
import CtaBanner from "@/components/common/CtaBanner";
import { team } from "@/data/team";
import { services } from "@/data/services";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Team Behind CacheBrains" },
      {
        name: "description",
        content:
          "CacheBrains is a senior AI and software engineering team spanning applied machine learning, computer vision, NLP, full-stack development, and decades of legacy systems experience.",
      },
      { property: "og:title", content: "About — CacheBrains" },
      {
        property: "og:description",
        content:
          "One accountable engineering team: AI, computer vision, NLP, full-stack, and legacy systems, working end to end.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    title: "Start with the problem",
    description:
      "We ask what the business actually needs before deciding whether a model, a script, or a better process is the right answer.",
  },
  {
    title: "Build for maintenance",
    description:
      "Documentation, tests, and monitoring are part of delivery — not an optional extra at the end of an engagement.",
  },
  {
    title: "Respect existing systems",
    description:
      "Most organisations run on infrastructure that can't be switched off. We integrate with it rather than demand a rewrite.",
  },
  {
    title: "Stay accountable",
    description:
      "The people who scope the work are the people who build it. No handoffs to a second team you've never met.",
  },
];

function AboutPage() {
  return (
    <div>
      {/* Intro */}
      <section className="relative overflow-hidden border-b border-line py-16 sm:py-20">
        <div
          className="grid-lines pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          aria-hidden="true"
        />
        <Container className="relative">
          <Reveal>
            <SectionHeading
              index="About"
              eyebrow="Who we are"
              title="A small senior team, deliberately kept that way"
              description="CacheBrains is an AI and software engineering studio. We work as one team across data, models, and the application layer, so the system that ships is the system that was designed."
            />
          </Reveal>
          <Reveal delay={120} className="mt-9 flex flex-wrap gap-3">
            <Button to="/contact" variant="primary">
              Work with us <ArrowRight size={16} />
            </Button>
            <Button to="/showcase" variant="secondary">
              See our work
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Story + capability summary */}
      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Engineering-first, not demo-first
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-stone">
                <p>
                  A working demo and a working system are very different things. Most
                  of the effort in an AI project sits in the parts nobody shows in a
                  pitch: data contracts, evaluation, deployment, monitoring, and the
                  unglamorous integration work that connects a model to the systems a
                  business already depends on.
                </p>
                <p>
                  That's the work we take on. Our team combines applied machine
                  learning, computer vision, NLP and LLM engineering with full-stack
                  development and more than three decades of experience in Oracle,
                  COBOL and enterprise database environments.
                </p>
                <p>
                  It means we can take a project from the first scoping conversation
                  through to a monitored deployment — and hand it to your team with
                  documentation they can actually use.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="border border-line bg-paper p-6 shadow-card sm:p-7">
                <h3 className="eyebrow text-stone">What we cover</h3>
                <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-1">
                  {services.map((service) => (
                    <li
                      key={service.slug}
                      className="flex items-start gap-2.5 text-sm leading-snug text-stone"
                    >
                      <span
                        className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 bg-copper"
                        aria-hidden="true"
                      />
                      {service.title}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-line pt-5">
                  <Button to="/services" variant="secondary" className="w-full">
                    Full service breakdown
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="How we work"
              title="Four principles we don't trade away"
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
            {principles.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 70}>
                <div className="group h-full bg-paper p-6 transition-colors duration-300 hover:bg-paper-dark/50 sm:p-8">
                  <span className="font-mono text-xs tracking-[0.16em] text-copper">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              index="02"
              eyebrow="The team"
              title="The people who do the work"
              description="Every engagement is staffed from this team — the same engineers from scoping through to handover."
            />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 60}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </div>
  );
}
