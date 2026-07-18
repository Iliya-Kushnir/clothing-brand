import { Scissors, Home, Check } from 'lucide-react'

const pillars = [
  {
    icon: Scissors,
    title: 'Ремонт та реставрація одягу',
    description:
      'Даруємо друге життя улюбленим речам — від простої підгонки до складної реставрації.',
    items: [
      'Підгонка по фігурі',
      'Заміна блискавок',
      'Реставрація вінтажного одягу',
      'Вкорочення штанів',
    ],
  },
  {
    icon: Home,
    title: 'Пошив штор та гардин',
    description:
      'Створюємо текстильний декор, що підкреслює характер вашого інтер’єру.',
    items: [
      'Індивідуальний дизайн',
      'Підбір тканин',
      'Пошив гардин та портьєр',
      'Пошив чохлів для меблів',
      'Пошив постільної білизни',
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-20 bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Наші послуги
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            Дві майстерності — одна увага до деталей
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group flex flex-col rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:border-accent hover:-translate-y-1 md:p-10"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/40 text-accent-foreground transition-colors group-hover:bg-accent">
                <pillar.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-serif text-2xl font-medium tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
              <ul className="mt-7 flex flex-col gap-3.5 border-t border-border pt-7">
                {pillar.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground/90">
                    <Check className="h-4 w-4 flex-shrink-0 text-accent-foreground" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
