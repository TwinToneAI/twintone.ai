import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center md:pt-36 md:pb-32">
        {/* TODO(james): swap to a real proof point once first pilot is live (Q2 2026 launch). */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/40 px-3 py-1 text-xs text-muted-fg backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
          </span>
          AI streamer pilots launching now
        </div>

        <h1 className="max-w-4xl text-balance text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-foreground sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          Live streaming
          <br className="hidden sm:block" />
          <span className="italic font-light normal-case tracking-tight text-muted-fg">
            intelligence.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-balance text-lg text-muted-fg md:text-xl">
          Always-on AI streamers that host live broadcasts, react to chat in
          real time, and ship 24/7 across iGaming, social commerce, and
          hospitality. One avatar. Every channel. Zero downtime.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="#book-demo"
            className="group inline-flex h-11 items-center gap-1.5 rounded-full bg-accent px-6 text-sm font-medium text-accent-fg transition-transform hover:-translate-y-px"
          >
            Book a demo
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="#product"
            className="inline-flex h-11 items-center gap-1.5 rounded-full border border-border/80 bg-card/40 px-6 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card"
          >
            See it live
          </Link>
        </div>

        {/* TODO(james): replace with real customer logos once first pilot ships. Avoid investors-as-customers. */}
        <p className="mt-6 text-xs text-muted-fg">
          Backed by Ember Fund · Built on LiveKit + Tavus
        </p>
      </div>
    </section>
  );
}
