import type { Metadata } from 'next'
import { WorksGallery } from '@/components/works-gallery'

export const metadata: Metadata = {
  title: 'Наші роботи та портфоліо — фото виконаних замовлень',
  description: 'Подивіться приклади наших робіт: оновлений одяг, відреставровані речі та індивідуальний пошив штор для інтер’єру. 5000+ задоволених клієнтів.',
  alternates: {
    canonical: 'https://atelie.com.ua/our-works',
  },
  openGraph: {
    title: 'Наші роботи та портфоліо — фото виконаних замовлень',
    description: 'Приклади наших робіт: оновлений одяг, реставрація та пошив штор.',
    url: 'https://atelie.com.ua/our-works',
    siteName: 'Ательє',
    locale: 'uk_UA',
    type: 'website',
  },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Page intro */}
      <section className="mx-auto w-full max-w-6xl px-6 pb-14 pt-10 text-center">
        <span className="mb-6 inline-block rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Портфоліо · 5000+ робіт
        </span>
        <h1 className="mx-auto max-w-3xl text-balance font-serif text-5xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
          Наші роботи
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Кожен виріб — це результат уваги до деталей. Погляньте на готові штори, оновлений одяг та
          відреставровані улюблені речі наших клієнтів.
        </p>
      </section>

      <WorksGallery />
    </main>
  )
}
