import { Scissors } from 'lucide-react'
import { WorksGallery } from '@/components/works-gallery'

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
