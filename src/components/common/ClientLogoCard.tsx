import type { Client } from "@/data/clients";

export default function ClientLogoCard({ client }: { client: Client }) {
  return (
    <div className="group relative flex aspect-[3/2] min-w-0 flex-col items-center justify-center gap-3 overflow-hidden bg-paper px-3 py-4 text-center transition-colors duration-300 hover:bg-paper-dark/60 sm:px-5">
      <img
        src={client.logo}
        alt={`${client.name} logo`}
        className="h-16 w-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105 sm:h-20"
        loading="lazy"
      />
      <div className="min-w-0">
        <p className="text-balance font-display text-xs font-semibold leading-snug text-ink sm:text-sm">
          {client.name}
        </p>
        {client.work ? (
          <p className="mt-1 text-balance font-mono text-[0.55rem] uppercase leading-relaxed text-stone sm:text-[0.6rem]">
            {client.work}
          </p>
        ) : null}
      </div>
      <span className="absolute inset-x-5 bottom-0 h-px scale-x-0 bg-copper transition-transform duration-300 group-hover:scale-x-100" />
    </div>
  );
}
