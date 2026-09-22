import type { Metadata } from "next";
import { Outfit, Oxanium } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const headingFont = Oxanium({
  subsets: ["latin"],
  variable: "--font-heading",
});

const sansFont = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Portfolio — Photography",
  description:
    "A portfolio of photography work across portraiture, landscape, and documentary.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        sansFont.variable,
        headingFont.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col bg-white text-stone-900">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}