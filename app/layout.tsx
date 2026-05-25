import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "@/app/globals.css";
import LenisProvider from "@/components/LenisProvider";
import { LanguageProvider } from "@/lib/LanguageContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apa-amber.vercel.app/"),
  title: "Aril — Personal Space",
  description:
    "Personal website of Aril, a tech learner exploring AI tools, games, creative ideas, and web development.",
  keywords: [
    "Aril",
    "personal website",
    "tech learner",
    "AI tools",
    "web development",
    "Indonesia",
    "gaming",
  ],
  authors: [{ name: "Aril" }],
  openGraph: {
    title: "Aril — Personal Space",
    description:
      "Personal website of Aril, a tech learner exploring AI tools, games, creative ideas, and web development.",
    url: "https://apa-amber.vercel.app/",
    siteName: "Aril — Personal Space",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aril — Personal Space",
    description:
      "Personal website of Aril, a tech learner exploring AI tools, games, creative ideas, and web development.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body style={{ fontFamily: "var(--font-inter, Inter, system-ui, sans-serif)" }}>
        <LenisProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
