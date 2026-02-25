import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atlas Lab AI | We Build Systems That Scale",
  description: "We build systems that scale. Autonomous AI-powered revenue organization - scouting, solving, proving, publishing, and selling automation solutions 24/7.",
  metadataBase: new URL('https://atlaslabsai.co'),
  openGraph: {
    url: 'https://atlaslabsai.co',
    siteName: 'Atlas Lab AI',
    title: 'Atlas Lab AI | We Build Systems That Scale',
    description: 'We build systems that scale. Autonomous AI-powered revenue organization.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Lab AI | We Build Systems That Scale',
    description: 'We build systems that scale. Autonomous AI-powered revenue organization.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans bg-neutral-950 text-neutral-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}