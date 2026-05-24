import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "@/app/globals.css";
import LenisProvider from "@/components/LenisProvider";

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
  title: "Cibuyy — Personal Space on the Internet",
  description:
    "Hi, I'm Cibuyy. A tech learner from Indonesia exploring AI tools, games, creative ideas, and web development.",
  keywords: [
    "Cibuyy",
    "personal website",
    "tech learner",
    "AI tools",
    "web development",
    "Indonesia",
    "gaming",
  ],
  authors: [{ name: "Cibuyy" }],
  openGraph: {
    title: "Cibuyy — Personal Space on the Internet",
    description:
      "A tech learner from Indonesia exploring AI tools, games, creative ideas, and web development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Cibuyy — Personal Space on the Internet",
    description:
      "A tech learner from Indonesia exploring AI tools, games, creative ideas, and web development.",
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
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
