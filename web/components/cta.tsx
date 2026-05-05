import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CallToAction() {
  return (
    <section
      id="book-demo"
      className="relative border-b border-border/60 bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/40 p-12 md:p-20">
          <div
            className="absolute inset-0 grid-bg opacity-40"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-start gap-8">
            <h2 className="max-w-3xl text-balance text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] md:text-6xl">
              See your avatar
              <br />
              streaming in 72 hours.
            </h2>

            <p className="max-w-xl text-base text-muted-fg md:text-lg">
              Book a 20-minute demo. We&apos;ll show you a live AI host running
              on your channel, your brand, your script.
            </p>

            <div className="flex flex-col items-start gap-3 sm:flex-row">
              <Link
                href="https://calendly.com/twintone-ai/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 items-center gap-1.5 rounded-full bg-accent px-6 text-sm font-medium text-accent-fg transition-transform hover:-translate-y-px"
              >
                Book a demo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="mailto:james@twintone.ai"
                className="inline-flex h-11 items-center gap-1.5 rounded-full border border-border/80 bg-background/40 px-6 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card"
              >
                Email james@twintone.ai
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
