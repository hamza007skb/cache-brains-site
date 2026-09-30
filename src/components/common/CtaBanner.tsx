import { Mail, Phone } from "lucide-react";
import Container from "./Container";
import Button from "./Button";
import Reveal from "./Reveal";
import { site } from "@/data/site";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="dot-grid absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="absolute -right-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-copper/20 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative py-20 md:py-24">
        <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow text-copper-light">Next step</span>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-[1.12] text-paper sm:text-4xl md:text-[2.75rem]">
              Have a system worth building well?
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-paper/70">
              Tell us what you're working on. We'll follow up within one business day
              with a clear read on scope, approach, and what the first milestone
              should be.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/contact" variant="ghostSolid" size="lg">
                Start a conversation
              </Button>
              <Button to="/showcase" variant="ghost" size="lg">
                See our work
              </Button>
            </div>
          </div>

          <div className="border border-paper/15 bg-paper/[0.04] p-6 backdrop-blur-sm sm:p-7">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-paper/80">
              Talk to the team
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-paper/70">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-copper-light" />
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-copper-light"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-copper-light" />
                <a
                  href={`tel:${site.phoneHref}`}
                  className="transition-colors hover:text-copper-light"
                >
                  {site.phoneDisplay}
                </a>
              </li>
            </ul>
            <p className="mt-6 border-t border-paper/10 pt-5 text-sm leading-relaxed text-paper/55">
              A senior engineer reviews every inquiry — no sales funnel, no
              discovery-call gatekeeping.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
