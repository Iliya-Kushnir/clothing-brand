import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/footer";
import ReactQueryProvider from "@/providers/ReactQuerryProvider";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Ательє одягу та пошив штор | Професійний ремонт одягу',
  description: 'Якісний ремонт одягу будь-якої складності та індивідуальний пошив штор. Дбайливе ставлення до кожної речі, доступні ціни. Звертайтесь!',
  alternates: {
    canonical: 'https://atelie.com.ua',
  },
  openGraph: {
    title: 'Ательє одягу та пошив штор | Професійний ремонт одягу',
    description: 'Якісний ремонт одягу будь-якої складності та індивідуальний пошив штор. Дбайливе ставлення до кожної речі.',
    url: 'https://atelie.com.ua',
    siteName: 'Ательє',
    locale: 'uk_UA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", figtree.variable)}
    >
      <body className="min-h-full flex flex-col">
        <ReactQueryProvider>
        <SiteHeader />
        {children}
        </ReactQueryProvider>
        </body>
      <SiteFooter />
    </html>
  );
}
