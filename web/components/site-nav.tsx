import Link from "next/link";
import { TwinToneMark } from "./twintone-mark";

const links = [
  { href: "#product", label: "Product" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          aria-label="TwinTone home"
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <TwinToneMark />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-fg transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="hidden text-sm text-muted-fg transition-colors hover:text-foreground sm:inline-flex"
          >
            Sign in
          </Link>
          <Link
            href="#book-demo"
            className="inline-flex h-9 items-center rounded-full bg-accent px-4 text-sm font-medium text-accent-fg transition-transform hover:-translate-y-px"
          >
            Book a demo
          </Link>
        </div>
      </div>
    </header>
  );
}
