type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  index?: string;
  eyebrow?: string;
  className?: string;
};

export default function SectionHeading({
  title,
  description,
  align = "left",
  light = false,
  index,
  eyebrow,
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""} ${className}`}>
      {(index || eyebrow) && (
        <div
          className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
        >
          {index && (
            <span
              className={`font-mono text-xs tracking-[0.16em] ${
                light ? "text-copper-light" : "text-copper"
              }`}
            >
              {index}
            </span>
          )}
          <span
            className={`h-px w-8 ${light ? "bg-paper/25" : "bg-line"}`}
            aria-hidden="true"
          />
          {eyebrow && (
            <span
              className={`eyebrow ${light ? "text-paper/60" : "text-stone"}`}
            >
              {eyebrow}
            </span>
          )}
        </div>
      )}
      <h2
        className={`mt-4 text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.75rem] ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-[1.0625rem] ${
            light ? "text-paper/70" : "text-stone"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
