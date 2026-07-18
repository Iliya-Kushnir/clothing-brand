import Image from 'next/image'

const works = [
  {
    src: '/images/portfolio-curtains.png',
    title: 'Гардини для вітальні',
    caption: 'Лляні гардини за індивідуальним дизайном',
    span: 'sm:col-span-2 sm:row-span-2',
  },
  {
    src: '/images/portfolio-repair.png',
    title: 'Реставрація пальта',
    caption: 'Відновлення вовняного пальта',
    span: '',
  },
  {
    src: '/images/portfolio-leather.png',
    title: 'Ремонт шкіри',
    caption: 'Реставрація шкіряної куртки',
    span: '',
  },
  {
    src: '/images/portfolio-drapery.png',
    title: 'Портьєри для спальні',
    caption: 'Теплі портьєри з пошивом та навішуванням',
    span: '',
  },
  {
    src: '/images/portfolio-fabrics.png',
    title: 'Підбір тканин',
    caption: 'Колекція преміальних тканин',
    span: '',
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="scroll-mt-20 bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Наші роботи
          </span>
          <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            Результат, що говорить сам за себе
          </h2>
        </div>

        <div className="mt-14 grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-4">
          {works.map((work) => (
            <figure
              key={work.title}
              className={`group relative overflow-hidden rounded-sm ${work.span}`}
            >
              <Image
                src={work.src || "/placeholder.svg"}
                alt={work.title}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/55" />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-serif text-lg font-medium text-primary-foreground">
                  {work.title}
                </p>
                <p className="mt-0.5 text-sm text-primary-foreground/80">
                  {work.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
