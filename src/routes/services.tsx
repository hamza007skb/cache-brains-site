import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import ServiceIcon from "@/components/common/ServiceIcon";
import Button from "@/components/common/Button";
import CtaBanner from "@/components/common/CtaBanner";
import { services } from "@/data/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AI Engineering, RAG & Legacy Integration | CacheBrains" },
      {
        name: "description",
        content:
          "Eleven engineering disciplines: AI engineering, machine learning, computer vision, NLP, RAG, agentic systems, voice agents, automations, and legacy integration.",
      },
      { property: "og:title", content: "Services — CacheBrains" },
      {
        property: "og:description",
        content:
          "AI engineering, RAG, agentic systems, computer vision, automations, and AI integration into legacy infrastructure.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
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
              index="Services"
              eyebrow="Capabilities"
              title="From a raw idea to a system your team relies on daily"
              description="Engagements typically combine two or three of these disciplines rather than standing alone. We'll tell you which ones your problem doesn't need."
            />
          </Reveal>
          <Reveal delay={120} className="mt-9 flex flex-wrap gap-3">
            <Button to="/contact" variant="primary">
              Discuss your project
            </Button>
            <Button to="/showcase" variant="secondary">
              See the work
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Quick index */}
      <section className="border-b border-line bg-paper-dark/60 py-8">
        <Container>
          <div className="flex flex-wrap gap-2">
            {services.map((service, index) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="border border-line bg-paper px-3 py-1.5 font-mono text-xs text-stone transition-colors hover:border-copper/50 hover:text-copper"
              >
                {String(index + 1).padStart(2, "0")} {service.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-4">
        <Container>
          <div className="divide-y divide-line">
            {services.map((service, index) => (
              <Reveal
                key={service.slug}
                as="div"
                className="grid scroll-mt-28 grid-cols-1 gap-8 py-14 md:grid-cols-[240px_1fr] md:gap-14"
              >
                <div id={service.slug} className="scroll-mt-28">
                  <span className="font-mono text-sm text-stone">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-4 flex h-12 w-12 items-center justify-center border border-line bg-paper-dark/50">
                    <ServiceIcon name={service.icon} className="h-6 w-6 text-copper" />
                  </span>
                  <h2 className="mt-4 font-display text-xl font-semibold leading-snug tracking-tight text-ink sm:text-2xl">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-copper">
                    {service.shortDescription}
                  </p>
                </div>
                <div className="max-w-2xl">
                  <p className="text-base leading-relaxed text-stone">
                    {service.description}
                  </p>
                  <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 border-t border-line pt-3 text-sm leading-relaxed text-ink"
                      >
                        <Check size={16} className="mt-0.5 shrink-0 text-copper" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </div>
  );
}
