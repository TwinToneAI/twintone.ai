import Link from "next/link";
import { TwinToneMark } from "./twintone-mark";

const groups = [
  {
    label: "Product",
    links: [
      { href: "#use-cases", label: "Use cases" },
      { href: "#product", label: "How it works" },
      { href: "#pricing", label: "Pricing" },
    ],
  },
  {
    label: "Company",
    links: [
      { href: "#about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "mailto:james@twintone.ai", label: "Contact" },
    ],
  },
  {
    label: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 md:flex-row md:justify-between">
        <div className="flex flex-col gap-4 md:max-w-sm">
          <TwinToneMark />
          <p className="text-sm text-muted-fg">
            Live streaming intelligence. Always-on AI streamers for iGaming
            and social commerce.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {groups.map((g) => (
            <div key={g.label} className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.2em] text-muted-fg">
                {g.label}
              </span>
              <ul className="flex flex-col gap-2">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-fg sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} TwinTone AI</p>
          <p className="font-mono uppercase tracking-wider">
            San Francisco · Streaming worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
