export default function Logo({ light = false }: { light?: boolean }) {
  const stroke = light ? "#F2EEE3" : "#131E2E";
  return (
    <span className="group inline-flex items-center gap-2.5">
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:rotate-[-6deg]"
      >
        <rect x="1" y="1" width="16" height="16" rx="1" stroke={stroke} strokeWidth="1.5" />
        <rect
          x="9"
          y="9"
          width="16"
          height="16"
          rx="1"
          fill="#BD5B2C"
          stroke="#BD5B2C"
          strokeWidth="1.5"
        />
      </svg>
      <span
        className={`font-display text-lg font-semibold tracking-tight ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        CacheBrains
      </span>
    </span>
  );
}
