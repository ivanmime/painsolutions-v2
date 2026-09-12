export function GridOverlay({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const line =
    tone === "light" ? "rgb(255 255 255 / 0.4)" : "rgb(7 49 109 / 0.4)";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, ${line} 1px, transparent 1px), linear-gradient(to bottom, ${line} 1px, transparent 1px)`,
        backgroundSize: "32px 32px",
      }}
    />
  );
}
