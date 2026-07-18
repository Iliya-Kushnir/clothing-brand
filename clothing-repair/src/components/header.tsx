'use client'

import { useState } from 'react'
import { Phone, Menu, X, Scissors } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { label: 'Послуги', href: '/services' },
  { label: 'Переваги', href: '/why-us' },
  { label: 'Роботи', href: '/our-works' },
  { label: 'Контакти', href: '#contact' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Scissors className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-serif text-xl font-semibold leading-none tracking-tight">
            Ательє у Наталі
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Головна навігація">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-light tracking-wide text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+380671234567"
          className="hidden items-center gap-2 text-sm font-medium tracking-wide text-foreground transition-colors hover:text-accent-foreground md:flex"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          +38 (067) 123-45-67
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4" aria-label="Мобільна навігація">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-light text-foreground/85"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+380671234567"
              className="mt-2 flex items-center gap-2 py-3 text-base font-medium text-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              +38 (067) 123-45-67
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
