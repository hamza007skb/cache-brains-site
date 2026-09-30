import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import ServiceIcon from "./ServiceIcon";
import type { Service } from "@/data/services";

export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index?: number;
}) {
  return (
    <Link
      to="/services"
      hash={service.slug}
      className="group relative flex h-full flex-col justify-between overflow-hidden border border-line bg-paper p-6 transition-all duration-300 hover:border-ink/35 hover:bg-paper-dark/40 hover:shadow-lift sm:p-7"
    >
      <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-copper transition-transform duration-300 group-hover:scale-x-100" />
      <div>
        <div className="flex items-start justify-between">
          <span className="flex h-11 w-11 items-center justify-center border border-line bg-paper-dark/60 transition-colors duration-300 group-hover:border-copper/40 group-hover:bg-copper/10">
            <ServiceIcon name={service.icon} className="h-5 w-5 text-copper" />
          </span>
          {typeof index === "number" && (
            <span className="font-mono text-xs text-stone/70">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>
        <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink">
          {service.title}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-stone">
          {service.shortDescription}
        </p>
      </div>
      <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
        Learn more
        <ArrowUpRight
          size={16}
          className="text-copper transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  );
}
