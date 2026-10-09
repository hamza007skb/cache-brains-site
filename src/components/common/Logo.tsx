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
        src={
          light
            ? "/cache-brains-logo/cache-brains-horizontal-dark.svg"
            : "/cache-brains-logo/cache-brains-horizontal.svg"
        }
        alt="Cache Brains"
        style={{
          display: "block",
          width: "auto",
          height: "38px",
        }}
        className="sm:!h-[46px] lg:!h-[54px]"
      />
    </span>
  );
}

