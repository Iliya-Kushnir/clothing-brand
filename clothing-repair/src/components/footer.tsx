import { Scissors } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <a href="#" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Scissors className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight">
          Ательє Швейний Ремонт
          </span>
        </a>
        <nav className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-muted-foreground" aria-label="Навігація у футері">
          <a href="/services" className="transition-colors hover:text-foreground">Послуги</a>
          <a href="/why-us" className="transition-colors hover:text-foreground">Переваги</a>
          <a href="/our-works" className="transition-colors hover:text-foreground">Роботи</a>
          <a href="/#contact" className="transition-colors hover:text-foreground">Контакти</a>
        </nav>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ательє Швейний Ремонт
        </p>
      </div>
    </footer>
  )
}
