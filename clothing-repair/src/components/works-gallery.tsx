'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type Category = 'repair' | 'curtains' | 'restoration'

type Work = {
  id: number
  title: string
  category: Category
  src: string
  size: 'tall' | 'normal'
}

const categories: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'Усі роботи' },
  { id: 'repair', label: 'Ремонт одягу' },
  { id: 'curtains', label: 'Пошив штор' },
  { id: 'restoration', label: 'Реставрація' },
]

const categoryLabels: Record<Category, string> = {
  repair: 'Ремонт одягу',
  curtains: 'Пошив штор',
  restoration: 'Реставрація',
}

const works: Work[] = [
  { id: 1, title: 'Штори з натурального льону', category: 'curtains', src: '/images/curtains-1.png', size: 'tall' },
  { id: 2, title: 'Підшив рукавів пальта', category: 'repair', src: '/images/repair-1.png', size: 'normal' },
  { id: 3, title: 'Реставрація вишитої сукні', category: 'restoration', src: '/images/restore-1.png', size: 'normal' },
  { id: 4, title: 'Плісировані штори блекаут', category: 'curtains', src: '/images/curtains-2.png', size: 'normal' },
  { id: 5, title: 'Заміна блискавки на куртці', category: 'repair', src: '/images/repair-2.png', size: 'normal' },
  { id: 6, title: 'Оновлення шкіряної сумки', category: 'restoration', src: '/images/restore-2.png', size: 'tall' },
  { id: 7, title: 'Легкі штори з вуалі', category: 'curtains', src: '/images/curtains-3.png', size: 'normal' },
  { id: 8, title: 'Звуження брюк по фігурі', category: 'repair', src: '/images/repair-3.png', size: 'tall' },
  { id: 9, title: 'Реставрація вовняного пальта', category: 'restoration', src: '/images/restore-3.png', size: 'normal' },
]

export function WorksGallery() {
  const [active, setActive] = useState<Category | 'all'>('all')

  const filtered = active === 'all' ? works : works.filter((w) => w.category === active)

  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-24">
      {/* Filters */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
        {categories.map((cat) => {
          const isActive = active === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              aria-pressed={isActive}
              className={cn(
                'rounded-full border px-5 py-2 text-sm tracking-wide transition-colors duration-300',
                isActive
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground',
              )}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((work) => (
          <figure
            key={work.id}
            className={cn(
              'group relative overflow-hidden rounded-lg bg-muted',
              work.size === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/5]',
            )}
          >
            <Image
              src={work.src || '/placeholder.svg'}
              alt={work.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="mb-1 block text-xs uppercase tracking-widest text-white/70">
                {categoryLabels[work.category]}
              </span>
              <span className="font-serif text-xl leading-tight text-white">{work.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-muted-foreground">Роботи в цій категорії скоро з&apos;являться.</p>
      )}
    </section>
  )
}
