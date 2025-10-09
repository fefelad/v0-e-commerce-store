import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-md text-center">
          <div className="mb-6 flex justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle className="h-12 w-12 text-accent" />
            </div>
          </div>

          <h1 className="font-serif text-3xl font-bold md:text-4xl">Заказ оформлен!</h1>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Спасибо за ваш заказ. Мы отправили подтверждение на указанный email. Наш менеджер свяжется с вами в
            ближайшее время для уточнения деталей доставки.
          </p>

          <div className="mt-8 space-y-3">
            <Link href="/" className="block">
              <Button size="lg" className="w-full">
                Вернуться в каталог
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">Номер заказа: #{Math.floor(Math.random() * 100000)}</p>
          </div>

          <div className="mt-12 space-y-4 rounded-lg border border-border bg-muted/30 p-6 text-left">
            <h2 className="font-serif text-lg font-semibold">Что дальше?</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  1
                </span>
                <span>Мы проверим наличие товаров на складе</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  2
                </span>
                <span>Менеджер свяжется с вами для подтверждения</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                  3
                </span>
                <span>Доставим заказ в течение 2-3 рабочих дней</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
