import Image from 'next/image'
import { ArrowRight, Clock } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:gap-10 md:px-8 md:py-24 lg:py-28">
        <div className="flex flex-col">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-secondary-foreground">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Майстерня з 2013 року
          </span>

          <h1 className="text-balance font-serif text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Професійний ремонт одягу та пошив штор будь-якої складності
          </h1>

          <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Повертаємо улюблені речі до життя та створюємо затишок у вашому домі
            за 3–7 днів.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all hover:opacity-90"
            >
              Зв&apos;язатися в один клік
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-medium tracking-wide text-foreground transition-colors hover:bg-secondary/60"
            >
              Наші послуги
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="sr-only">Років досвіду</dt>
              <dd className="font-serif text-3xl font-medium">10+</dd>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">років досвіду</p>
            </div>
            <div>
              <dt className="sr-only">Виконаних робіт</dt>
              <dd className="font-serif text-3xl font-medium">5000+</dd>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">робіт виконано</p>
            </div>
            <div>
              <dt className="sr-only">Термін виконання</dt>
              <dd className="font-serif text-3xl font-medium">3–7</dd>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">днів на замовлення</p>
            </div>
          </dl>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/hero-atelier.png"
              alt="Майстерня ательє з пошиву та ремонту одягу"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden rounded-sm border border-border bg-card px-6 py-5 sm:block">
            <p className="font-serif text-2xl font-medium leading-none">Якість</p>
            <p className="mt-1 text-sm text-muted-foreground">у кожному стібку</p>
          </div>
        </div>
      </div>
    </section>
  )
}
