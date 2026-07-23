import { Award, Wrench, Timer, Receipt } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Feature = {
  icon: LucideIcon
  accent: string
  suffix?: string
  label: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Award,
    accent: "10",
    suffix: "+",
    label: "років досвіду",
    title: "Досвід понад 10 років",
    description:
      "За плечима тисячі виконаних замовлень і бездоганна репутація, якій довіряють постійні клієнти.",
  },
  {
    icon: Wrench,
    accent: "01",
    label: "стандарт якості",
    title: "Професійне обладнання",
    description:
      "Працюємо на промислових машинах  — акуратний шов на будь-якій тканині.",
  },
  {
    icon: Timer,
    accent: "3–7",
    label: "днів на замовлення",
    title: "Швидкість виконання",
    description:
      "Повертаємо улюблені речі до життя у стислі терміни, не жертвуючи увагою до кожної деталі.",
  },
  {
    icon: Receipt,
    accent: "0",
    suffix: "₴",
    label: "прихованих доплат",
    title: "Прозоре ціноутворення",
    description:
      "Озвучуємо вартість одразу та фіксуємо її — жодних несподіванок наприкінці роботи.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
            Чому обирають нас
          </p>
          <h1 className="mt-5 text-pretty font-serif text-4xl font-medium leading-tight text-foreground sm:text-5xl">
            Майстерність, якій довіряють
          </h1>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Чотири причини, що роблять кожне ваше звернення до нас спокійним і передбачуваним.
          </p>
        </header>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.title}
                className="group flex flex-col rounded-xl border border-border/60 bg-card p-7 shadow-[0_1px_2px_rgba(60,45,30,0.04),0_8px_24px_-12px_rgba(60,45,30,0.12)] transition-shadow duration-300 hover:shadow-[0_2px_4px_rgba(60,45,30,0.06),0_16px_40px_-14px_rgba(60,45,30,0.18)]"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
                </span>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-serif text-4xl font-medium leading-none tracking-tight text-foreground">
                    {feature.accent}
                  </span>
                  {feature.suffix ? (
                    <span className="font-serif text-2xl font-medium leading-none text-muted-foreground">
                      {feature.suffix}
                    </span>
                  ) : null}
                </div>
                <p className="mt-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {feature.label}
                </p>

                <h2 className="mt-5 font-serif text-2xl font-medium leading-snug text-foreground">
                  {feature.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
