import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.twintone.ai"),
  title: {
    default: "TwinTone — Live streaming intelligence.",
    template: "%s · TwinTone",
  },
  description:
    "Always-on AI streamers for iGaming, social commerce, and hospitality. Photoreal hosts, real-time chat, multi-platform delivery.",
  openGraph: {
    title: "TwinTone — Live streaming intelligence.",
    description:
      "Always-on AI streamers for iGaming, social commerce, and hospitality.",
    url: "https://www.twintone.ai",
    siteName: "TwinTone",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TwinTone — Live streaming intelligence.",
    description:
      "Always-on AI streamers for iGaming, social commerce, and hospitality.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
