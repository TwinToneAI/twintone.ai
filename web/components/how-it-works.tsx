const steps = [
  {
    n: "01",
    title: "Build the avatar",
    body: "Clone a real host or pick from the library. Voice, face, persona, and brand guardrails locked in 24 hours.",
  },
  {
    n: "02",
    title: "Connect the channels",
    body: "Plug into Kick, Twitch, TikTok Live, YouTube, your own player. One stream, every platform.",
  },
  {
    n: "03",
    title: "Stream forever",
    body: "Always-on broadcasts, real-time chat reactions, multi-language, and full audit trail. We handle the infrastructure — you watch the metrics.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="product"
      className="relative border-b border-border/60 bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-14 flex flex-col items-start gap-2 md:max-w-2xl">
          <span className="text-xs uppercase tracking-[0.2em] text-muted-fg">
            How it works
          </span>
          <h2 className="text-balance text-3xl font-black uppercase leading-tight tracking-[-0.03em] md:text-5xl">
            From zero to always-on in 72 hours.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/80 bg-border/80 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.n}
              className="flex flex-col gap-6 bg-background p-10 transition-colors hover:bg-card"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-fg">
                {step.n}
              </span>
              <h3 className="text-2xl font-bold tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-fg">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
