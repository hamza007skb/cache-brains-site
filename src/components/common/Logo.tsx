export default function Logo({
  light = false,
  className = "",
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <span className={`flex items-center ${className}`}>
      <img
        src="/cache-brains-logo-transparent.svg"
        alt="Cache Brains"
        style={{
          display: "block",
          width: "auto",
          height: "42px",
          ...(light ? { filter: "brightness(0) invert(1)" } : {}),
        }}
        className="sm:!h-[52px] lg:!h-[64px]"
      />
    </span>
  );
}

