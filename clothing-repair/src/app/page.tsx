import { SiteHeader } from '@/components/header'
import { Hero } from '@/components/hero'
import { ServicesSection } from '@/components/services'
import { AdvantagesSection } from '@/components/advantages'
import { PortfolioSection } from '@/components/portfolio'
import { ContactSection } from '@/components/contacts'
import { SiteFooter } from '@/components/footer'

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
