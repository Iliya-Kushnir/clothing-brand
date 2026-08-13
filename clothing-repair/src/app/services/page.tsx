import type { Metadata } from 'next'
import { Scissors, Home } from 'lucide-react'
import { ServiceSection, type ServiceItem } from '@/components/services-section'
import { ServicesCta } from '@/components/services-cta'

export const metadata: Metadata = {
  title: 'Послуги ательє: ремонт одягу та пошив штор на замовлення',
  description: 'Ціни на ремонт одягу (заміна блискавки, підгонка) та пошив штор, гардин, портьєр. Професійне обладнання та майстри своєї справи.',
  alternates: {
    canonical: 'https://atelie.com.ua/services',
  },
  openGraph: {
    title: 'Послуги ательє: ремонт одягу та пошив штор на замовлення',
    description: 'Ціни на ремонт одягу та пошив штор, гардин, портьєр. Професійні майстри.',
    url: 'https://atelie.com.ua/services',
    siteName: 'Ательє',
    locale: 'uk_UA',
    type: 'website',
  },
}
const clothingRepair: ServiceItem[] = [
  {
    name: 'Заміна блискавки',
    description:
      'Куртки, джинси, сукні та сумки. Підбираємо блискавку в тон і за розміром.',
    price: 'від 150 ₴',
  },
  {
    name: 'Підгонка по фігурі',
    description:
      'Звуження, розширення та вкорочення так, щоб річ сиділа ідеально.',
    price: 'від 250 ₴',
  },
  {
    name: 'Вкорочення штанів та рукавів',
    description:
      'Акуратний потайний підгин зі збереженням фабричного вигляду краю.',
    price: 'від 120 ₴',
  },
  {
    name: 'Реставрація вінтажних речей',
    description:
      'Дбайливе повернення улюбленим речам первісного вигляду та форми.',
    price: 'за домовленістю',
  },
]

const curtainSewing: ServiceItem[] = [
  {
    name: 'Індивідуальний пошив штор',
    description:
      'Розробка та пошив штор під ваш інтерєр, розмір вікна та стиль кімнати.',
    price: 'від 400 ₴/м',
  },
  {
    name: 'Пошив гардин та тюлю',
    description:
      'Легкі гардини з рівною драпіровкою та акуратною обробкою низу.',
    price: 'від 250 ₴/м',
  },
  {
    name: 'Портьєри та ламбрекени',
    description:
      'Складні багатошарові композиції з підкладкою та декоративними елементами.',
    price: 'від 600 ₴/м',
  },
  {
    name: 'Підбір тканини та фурнітури',
    description:
      'Допоможемо обрати матеріал та стрічку під ваш бюджет.',
    price: 'безкоштовно',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      {/* Page intro */}
      <section className="px-6 pb-8 pt-16 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Наші послуги
          </span>
          <h1 className="mt-6 max-w-3xl text-balance font-serif text-4xl font-medium leading-[1.05] text-foreground md:text-6xl">
            Дбаємо про кожен шов — від дрібного ремонту до пошиву на замовлення
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Дві майстерності під одним дахом: реставрація улюбленого одягу та
            створення штор, що підкреслюють характер вашого дому.
          </p>
        </div>
      </section>

      {/* Первый блок с id и отступом для прокрутки */}
      <div id="clothing-repair" className="scroll-mt-24">
        <ServiceSection
          index="01 / Ремонт одягу"
          icon={Scissors}
          title="Ремонт одягу"
          intro="Повертаємо речам другу молодість — акуратно, швидко та з увагою до деталей."
          items={clothingRepair}
        />
      </div>

      {/* Второй блок с id и отступом для прокрутки */}
      <div id="curtain-sewing" className="scroll-mt-24">
        <ServiceSection
          index="02 / Пошив штор"
          icon={Home}
          title="Пошив штор"
          intro="Створюємо текстильний декор під ваш інтерєр — від легких гардин до складних портьєр."
          items={curtainSewing}
        />
      </div>

      <ServicesCta />
    </main>
  )
}