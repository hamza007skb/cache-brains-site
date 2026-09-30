import { useState } from "react";
import type { TeamMember } from "@/data/team";

export default function TeamCard({ member }: { member: TeamMember }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden border border-line bg-paper-dark">
        {imageFailed ? (
          <div className="dot-grid-light flex h-full w-full items-center justify-center">
            <span className="font-display text-5xl font-semibold text-ink/60">
              {member.initials}
            </span>
          </div>
        ) : (
          <img
            src={member.photo}
            alt={member.name}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:scale-[1.04] group-hover:grayscale-0"
            loading="lazy"
          />
        )}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/35 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute bottom-0 left-0 h-[3px] w-12 bg-copper transition-all duration-300 group-hover:w-full" />
      </div>

      <div className="mt-5">
        <h3 className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
          {member.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-copper">{member.role}</p>
        <p className="mt-3 border-t border-line pt-3 text-sm leading-relaxed text-stone">
          {member.specialty}
        </p>
      </div>
    </article>
  );
}
