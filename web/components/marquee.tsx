import { cn } from "@/lib/utils";

const items = [
  "LiveKit",
  "Tavus",
  "ElevenLabs",
  "Anthropic",
  "Cloudflare R2",
  "Kick",
  "Twitch",
  "TikTok Live",
  "YouTube Live",
  "WebRTC",
  "RTMP",
  "HLS",
];

export function IntegrationMarquee() {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.2em] text-muted-fg">
          Built on the protocols that power the internet&apos;s live layer
        </p>

        <div
          className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
          style={{ "--gap": "2.5rem" } as React.CSSProperties}
        >
          <Track />
          <Track aria-hidden />
        </div>
      </div>
    </section>
  );
}

function Track({ "aria-hidden": ariaHidden }: { "aria-hidden"?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
      className={cn(
        "flex shrink-0 items-center gap-10 pr-10 animate-marquee",
      )}
      style={{ "--duration": "45s" } as React.CSSProperties}
    >
      {items.map((item, i) => (
        <span
          key={`${item}-${i}`}
          className="font-mono text-sm uppercase tracking-wider text-muted-fg"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
