import type { LucideIcon } from 'lucide-react'

export type ServiceItem = {
  name: string
  description: string
  price: string
}

type ServiceSectionProps = {
  index: string
  icon: LucideIcon
  title: string
  intro: string
  items: ServiceItem[]
}

export function ServiceSection({
  index,
  icon: Icon,
  title,
  intro,
  items,
}: ServiceSectionProps) {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:gap-16">
          {/* Section heading */}
          <div className="md:sticky md:top-16 md:self-start">
            <div className="mb-6 flex items-center gap-4">
              <span className="flex size-12 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                <Icon className="size-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {index}
              </span>
            </div>
            <h2 className="text-balance font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-sm text-pretty leading-relaxed text-muted-foreground">
              {intro}
            </p>
          </div>

          {/* Price list */}
          <ul className="flex flex-col">
            {items.map((item, i) => (
              <li
                key={item.name}
                className={`flex items-baseline justify-between gap-6 py-8 ${
                  i !== 0 ? 'border-t border-border/70' : ''
                }`}
              >
                <div className="max-w-md">
                  <h3 className="font-serif text-xl font-medium text-foreground">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="whitespace-nowrap font-serif text-lg font-medium text-foreground">
                    {item.price}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
