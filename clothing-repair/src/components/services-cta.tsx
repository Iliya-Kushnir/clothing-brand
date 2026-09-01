import { ArrowRight, Phone } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'

export function ServicesCta() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-lg bg-primary px-6 py-16 text-center text-primary-foreground md:px-16 md:py-24">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
            Готові оновити гардероб?
          </span>
          <h2 className="mx-auto mt-6 max-w-2xl text-balance font-serif text-3xl font-medium leading-tight md:text-5xl">
            Запишіться на примірку — і ми підберемо ідеальне рішення
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-pretty leading-relaxed text-primary-foreground/70">
            Приходьте з вашою річчю або тканиною. Майстер зробить заміри,
            порадить та назве точну вартість ще до початку роботи.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/#contact">
              <Button
                size="lg"
                className="group rounded-full bg-background px-7 text-foreground hover:bg-background/90"
              >
                Записатися на примірку
                <ArrowRight
                  className="ml-1 size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
            </Link>

            {/* Заменяем Button на <a> с генератором стилей buttonVariants */}
            <a
              href="tel:+380507759812"
              className={buttonVariants({
                variant: 'outline',
                size: 'lg',
                className:
                  'rounded-full border-primary-foreground/30 bg-transparent px-7 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-xs sm:text-sm',
              })}
            >
              <Phone className="mr-2 size-3.5" aria-hidden="true" />
              +38 (050) 775-98-12
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}