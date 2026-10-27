import { ThemeProvider } from "./components/theme-provider";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppNavbar from "./components/navbar/app-navbar";
import SmoothScroll from "./components/smooth-scroll";
import PageTransition from "./components/page-transition";
import FloatingShootToggleHost from "./components/floating-shoot-toggle-host";
import CollaborativeCursors from "./components/collaborative-cursors";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://waleedanjum.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Waleed Anjum | Senior Software Engineer & AI Integrations",
  description: "Waleed Anjum is a Senior Software Engineer specializing in React.js, full-stack systems, and applied AI integrations (LLMs, RAG, Speech-to-Text).",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "Waleed Anjum | Senior Software Engineer & AI Integrations",
    description: "Waleed Anjum is a Senior Software Engineer specializing in React.js, full-stack systems, and applied AI integrations.",
    images: "/icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waleed Anjum | Senior Software Engineer & AI Integrations",
    description: "Waleed Anjum is a Senior Software Engineer specializing in React.js, full-stack systems, and applied AI integrations.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <AppNavbar />
          <CollaborativeCursors />
          <FloatingShootToggleHost />
          <SmoothScroll>
            <PageTransition>{children}</PageTransition>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
