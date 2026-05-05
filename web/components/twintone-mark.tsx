import { cn } from "@/lib/utils";

type TwinToneMarkProps = {
  className?: string;
  variant?: "wordmark" | "lockup" | "mark";
};

// Geometric TT shield mark — placeholder version of the brand mark.
// TODO: replace with the official SVG export from the brand team.
export function TwinToneMark({
  className,
  variant = "lockup",
}: TwinToneMarkProps) {
  const Mark = (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={cn("h-7 w-7", variant === "mark" && "h-9 w-9")}
    >
      <path
        d="M8 8h48l-8 10H32v38L20 50V18H8V8z"
        fill="currentColor"
      />
      <path
        d="M32 28l16 22h-8L32 40v18h-4V28h4z"
        fill="currentColor"
      />
    </svg>
  );

  if (variant === "mark") {
    return <span className={cn("inline-flex", className)}>{Mark}</span>;
  }

  if (variant === "wordmark") {
    return (
      <span
        className={cn(
          "font-sans text-[1.15rem] font-black uppercase leading-none tracking-[-0.04em]",
          className,
        )}
      >
        TwinTone
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-sans text-[1.05rem] font-black uppercase leading-none tracking-[-0.04em]",
        className,
      )}
    >
      {Mark}
      <span>TwinTone</span>
    </span>
  );
}
