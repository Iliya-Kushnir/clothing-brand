'use client'

import { useState } from 'react'
import { MapPin, Clock, Phone, Send, MessageCircle, CheckCircle2 } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'
import { createOrder } from '@/server/CreateOrder'

const services = [
  'Ремонт та реставрація одягу',
  'Підгонка по фігурі',
  'Заміна блискавок',
  'Ремонт шкіри та хутра',
  'Пошив штор та гардин',
  'Інше',
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: services[0] })

  const { mutate, isPending } = useMutation({
    mutationFn: createOrder,
    onSuccess: () => {
      setSubmitted(true)
    },
    onError: (error: any) => {
      alert(`Помилка: ${error.message}`)
    }
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    const formData = new FormData()
    formData.append("client_name", form.name)
    formData.append("phone", form.phone)
    formData.append("watch_model", form.service) 
    formData.append("description", "Заявка через контактну форму")

    mutate(formData as any)
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Контакти
            </span>
            <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              Залиште заявку — ми зателефонуємо
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Опишіть, що потрібно зробити, і наш майстер зв&apos;яжеться з вами,
              щоб уточнити деталі та вартість.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium">Адреса</p>
                  <p className="text-sm text-muted-foreground">
                    м. Харків, Центральний ринок, Старі шкіряні ряди.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium">Графік роботи</p>
                  <p className="text-sm text-muted-foreground">
                    Вівторок–Неділя: 9:00–15:00 · Пн: вихідний
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium">Телефон</p>
                  <a href="tel:+380507759812" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    +38 (050) 775-98-12
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {/* Viber с рабочим веб-редиректом */}
              <a
                href="viber://chat?number=380507759812"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary/60"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Viber
              </a>
              {/* Telegram с правильными атрибутами */}
              <a
                href="https://t.me/+380507759812"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary/60"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Telegram
              </a>
            </div>
          </div>

          <div className="rounded-sm border border-border bg-card p-7 md:p-9">
            {submitted ? (
              <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/40 text-accent-foreground">
                  <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-medium">Дякуємо!</h3>
                <p className="mt-2 max-w-xs text-muted-foreground">
                  Вашу заявку прийнято. Ми зателефонуємо вам найближчим часом.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Ваше ім&apos;я
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Наприклад, Олена"
                    className="rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Номер телефону
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+38 (0__) ___-__-__"
                    className="rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-sm font-medium">
                    Оберіть послугу
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="rounded-sm border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
                  >
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium tracking-wide text-primary-foreground transition-all hover:opacity-90 disabled:opacity-50"
                >
                  {isPending ? "Відправляємо..." : "Надіслати заявку"}
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Натискаючи кнопку, ви погоджуєтесь на обробку даних
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}