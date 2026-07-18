import { Zap, Award, Wrench, BadgeCheck } from 'lucide-react'

const advantages = [
  {
    icon: Zap,
    title: 'Швидко',
    description: 'Більшість замовлень виконуємо за 3–7 днів без втрати якості.',
  },
  {
    icon: Award,
    title: '10+ років досвіду',
    description: 'Тисячі вдячних клієнтів та бездоганна репутація майстерні.',
  },
  {
    icon: Wrench,
    title: 'Професійне обладнання',
    description: 'Промислові машини для роботи з будь-якими тканинами та шкірою.',
  },
  {
    icon: BadgeCheck,
    title: 'Прозорі ціни',
    description: 'Озвучуємо вартість одразу — без прихованих доплат у кінці.',
  },
]

export function AdvantagesSection() {
  return (
    <section id="advantages" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Чому обирають нас
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            Майстерність, якій довіряють
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((adv) => (
            <div key={adv.title} className="flex flex-col bg-card p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <adv.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-serif text-xl font-medium tracking-tight">
                {adv.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
