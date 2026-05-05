import { Dices, ShoppingBag, Radio, Brain, Globe2 } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type Feature = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  meta?: string;
};

const verticals: Feature[] = [
  {
    icon: Dices,
    title: "iGaming",
    description:
      "Always-on hosts for slot streams, sportsbook recaps, and live tables. Real-time chat with 3-layer compliance moderation built in.",
    meta: "Kick · Twitch · YouTube Live",
  },
  {
    icon: ShoppingBag,
    title: "Social commerce",
    description:
      "AI hosts that pitch products, answer questions, and run 24/7 across TikTok Shop, Instagram Live, and YouTube — without burning out creators.",
    meta: "TikTok Shop · IG Live · Whatnot",
  },
];

const platform: Feature[] = [
  {
    icon: Radio,
    title: "Multi-channel delivery",
    description:
      "One avatar streams to every major platform simultaneously. RTMP, WebRTC, and HLS supported out of the box.",
  },
  {
    icon: Brain,
    title: "Real-time intelligence",
    description:
      "Reads chat, scrapes the stream, reasons over it, and responds in under 800ms. Powered by Claude and a fine-tuned moderation stack.",
  },
  {
    icon: Globe2,
    title: "Any language, any voice",
    description:
      "30+ voices across 12 languages. Clone a real host or pick from our library of cleared TTS voices.",
  },
];

export function Features() {
  return (
    <section
      id="use-cases"
      className="relative border-b border-border/60 bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionLabel kicker="Built for live audiences" title="Two verticals. One platform." />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border/80 bg-border/80 md:grid-cols-2">
          {verticals.map((feat) => (
            <FeatureCard key={feat.title} {...feat} />
          ))}
        </div>

        <div className="mt-24">
          <SectionLabel
            kicker="Platform"
            title="The stack behind every stream."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platform.map((feat) => (
              <PlatformCard key={feat.title} {...feat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
  return (
    <div className="flex flex-col items-start gap-2 md:max-w-2xl">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-fg">
        {kicker}
      </span>
      <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-[-0.03em] md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description, meta }: Feature) {
  return (
    <div className="group flex flex-col gap-4 bg-background p-8 transition-colors hover:bg-card md:p-10">
      <Icon className="h-7 w-7 text-foreground" strokeWidth={1.5} />
      <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
      <p className="text-sm text-muted-fg leading-relaxed">{description}</p>
      {meta && (
        <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-fg/70">
          {meta}
        </p>
      )}
    </div>
  );
}

function PlatformCard({ icon: Icon, title, description }: Feature) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border/80 bg-card/40 p-6 transition-colors hover:bg-card">
      <Icon className="h-6 w-6 text-foreground" strokeWidth={1.5} />
      <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      <p className="text-sm text-muted-fg leading-relaxed">{description}</p>
    </div>
  );
}
