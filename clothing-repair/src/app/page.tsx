import type { Metadata } from 'next'
import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services'
import { AdvantagesSection } from '@/components/advantages'
import { PortfolioSection } from '@/components/portfolio'
import { ContactSection } from '@/components/contacts'

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

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Hero />
        <ServicesSection />
        <AdvantagesSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  )
}