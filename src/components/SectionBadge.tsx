"use client";

interface SectionBadgeProps {
  text: string;
  color?: "magenta" | "navy" | "cyan";
  className?: string;
}

const colorMap = {
  magenta: "bg-magenta text-magenta",
  navy: "bg-navy text-navy",
  cyan: "bg-cyan text-cyan",
};

export function SectionBadge({ text, color = "magenta", className = "" }: SectionBadgeProps) {
  const colorClass = colorMap[color];
  const [bgClass, textClass] = colorClass.split(" ");

  return (
    <div className={`flex items-center gap-2 w-fit ${className}`}>
      <span className={`h-[1.5px] w-6 rounded ${bgClass}`} />
      <span className={`text-[11px] font-bold uppercase tracking-[.12em] ${textClass}`}>
        {text}
      </span>
    </div>
  );
}
