import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"

// Mock product data
const products = [
  {
    id: "1",
    name: "Минималистичное кресло",
    price: 24990,
    image: "/modern-minimalist-chair.jpg",
    category: "Мебель",
  },
  {
    id: "2",
    name: "Керамическая ваза",
    price: 3490,
    image: "/elegant-ceramic-vase.png",
    category: "Декор",
  },
  {
    id: "3",
    name: "Дизайнерский светильник",
    price: 12990,
    image: "/designer-table-lamp.jpg",
    category: "Освещение",
  },
  {
    id: "4",
    name: "Шерстяной плед",
    price: 5990,
    image: "/wool-blanket-throw.jpg",
    category: "Текстиль",
  },
  {
    id: "5",
    name: "Журнальный столик",
    price: 18990,
    image: "/modern-coffee-table.png",
    category: "Мебель",
  },
  {
    id: "6",
    name: "Набор подушек",
    price: 4990,
    image: "/decorative-cushion-set.jpg",
    category: "Текстиль",
  },
  {
    id: "7",
    name: "Настенное зеркало",
    price: 8990,
    image: "/round-wall-mirror.jpg",
    category: "Декор",
  },
  {
    id: "8",
    name: "Книжная полка",
    price: 15990,
    image: "/modern-bookshelf.png",
    category: "Мебель",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary/30 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-balance md:text-6xl lg:text-7xl">
                Элегантность в каждой детали
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
                Откройте для себя коллекцию премиум товаров для дома, созданных с вниманием к деталям и любовью к
                дизайну
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline">
                  О коллекции
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">Наша коллекция</h2>
                <p className="mt-2 text-muted-foreground">Тщательно отобранные товары для вашего дома</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t border-border bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-semibold">Премиум качество</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Только лучшие материалы и проверенные производители
                </p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-semibold">Быстрая доставка</h3>
                <p className="mt-2 text-sm text-muted-foreground">Доставим ваш заказ в течение 2-3 рабочих дней</p>
              </div>

              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-semibold">Гарантия возврата</h3>
                <p className="mt-2 text-sm text-muted-foreground">30 дней на возврат товара без объяснения причин</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="h-6 w-1.5 bg-primary" />
                <div className="h-6 w-1.5 bg-accent" />
              </div>
              <span className="font-serif text-xl font-semibold">Элегант</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 Элегант. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
