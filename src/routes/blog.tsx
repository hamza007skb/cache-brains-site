import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, PenLine } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import Button from "@/components/common/Button";
import CtaBanner from "@/components/common/CtaBanner";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Notes — Engineering Writing from CacheBrains" },
      {
        name: "description",
        content:
          "Writing from the CacheBrains team on production AI, retrieval systems, agentic architectures, and integrating modern tooling with legacy infrastructure. First articles coming soon.",
      },
      { property: "og:title", content: "Notes — CacheBrains" },
      {
        property: "og:description",
        content:
          "Engineering notes on production AI, RAG, agentic systems, and legacy integration. First articles coming soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

const topics = [
  {
    title: "Retrieval that actually retrieves",
    description:
      "Chunking, embeddings, ranking, and citations — why RAG quality is a retrieval problem before it is a model problem.",
  },
  {
    title: "Guardrails for agentic systems",
    description:
      "Bounded tool permissions, verification between steps, and knowing when an agent should hand off to a person.",
  },
  {
    title: "AI inside legacy infrastructure",
    description:
      "Adding modern capability to Oracle, COBOL, and enterprise systems without a risky full rewrite.",
  },
  {
    title: "From lab metrics to production",
    description:
      "What changes when a model leaves a controlled test set and meets real data, real hardware, and real users.",
  },
];

function BlogPage() {
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
              index="Notes"
              eyebrow="Writing"
              title="Engineering notes, published when they're worth reading"
              description="We're preparing the first set of articles on how we build and ship AI systems. Rather than fill this page with filler, we'd rather publish once there's something substantial to say."
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
            <Reveal>
              <div className="border border-line bg-paper p-7 shadow-card sm:p-9">
                <span className="inline-flex h-11 w-11 items-center justify-center border border-line bg-paper-dark/60 text-copper">
                  <PenLine size={20} />
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink">
                  First articles coming soon
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-stone sm:text-base">
                  In the meantime, the clearest picture of how we think is in the work
                  itself — each showcase entry walks through the problem, the
                  architecture we chose, and why.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button to="/showcase" variant="primary">
                    Read the case studies <ArrowRight size={16} />
                  </Button>
                  <Button to="/contact" variant="secondary">
                    Ask us directly
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h3 className="eyebrow text-stone">What we'll be writing about</h3>
              <ul className="mt-5 grid grid-cols-1 gap-px border border-line bg-line">
                {topics.map((topic) => (
                  <li
                    key={topic.title}
                    className="group bg-paper p-5 transition-colors duration-300 hover:bg-paper-dark/50 sm:p-6"
                  >
                    <h4 className="font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
                      {topic.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-stone">
                      {topic.description}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </div>
  );
}
