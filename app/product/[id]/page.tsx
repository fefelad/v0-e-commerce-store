"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/components/cart-provider"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Check } from "lucide-react"
import { useState } from "react"
import { ProductCard } from "@/components/product-card"

// Mock product data - в реальном приложении это будет из API/базы данных
const productsData: Record<
  string,
  {
    id: string
    name: string
    price: number
    image: string
    category: string
    description: string
    features: string[]
    materials: string
    dimensions: string
  }
> = {
  "1": {
    id: "1",
    name: "Минималистичное кресло",
    price: 24990,
    image: "/modern-minimalist-chair.jpg",
    category: "Мебель",
    description:
      "Элегантное кресло в минималистичном стиле, которое идеально впишется в современный интерьер. Сочетание комфорта и изысканного дизайна делает его незаменимым элементом вашего дома.",
    features: [
      "Эргономичная спинка для максимального комфорта",
      "Прочный каркас из массива дерева",
      "Легко чистящаяся обивка",
      "Устойчивые ножки с защитными накладками",
    ],
    materials: "Массив дуба, текстиль премиум-класса",
    dimensions: "75 x 80 x 85 см",
  },
  "2": {
    id: "2",
    name: "Керамическая ваза",
    price: 3490,
    image: "/elegant-ceramic-vase.png",
    category: "Декор",
    description:
      "Изысканная керамическая ваза ручной работы. Уникальная текстура и форма делают каждое изделие неповторимым произведением искусства.",
    features: [
      "Ручная работа мастеров",
      "Уникальная глазурь",
      "Подходит для свежих и сухих цветов",
      "Устойчивое основание",
    ],
    materials: "Керамика, глазурь",
    dimensions: "Высота 30 см, диаметр 15 см",
  },
  "3": {
    id: "3",
    name: "Дизайнерский светильник",
    price: 12990,
    image: "/designer-table-lamp.jpg",
    category: "Освещение",
    description:
      "Современный настольный светильник с регулируемой яркостью. Создает идеальную атмосферу для работы или отдыха.",
    features: [
      "Регулируемая яркость света",
      "Энергоэффективная LED-технология",
      "Гибкая ножка для направления света",
      "Сенсорное управление",
    ],
    materials: "Металл, пластик, LED",
    dimensions: "Высота 45 см",
  },
  "4": {
    id: "4",
    name: "Шерстяной плед",
    price: 5990,
    image: "/wool-blanket-throw.jpg",
    category: "Текстиль",
    description:
      "Мягкий и теплый плед из натуральной шерсти. Идеален для уютных вечеров и добавит тепла в любой интерьер.",
    features: ["100% натуральная шерсть", "Гипоаллергенный", "Легкий уход", "Не скатывается"],
    materials: "Натуральная шерсть мериноса",
    dimensions: "150 x 200 см",
  },
  "5": {
    id: "5",
    name: "Журнальный столик",
    price: 18990,
    image: "/modern-coffee-table.png",
    category: "Мебель",
    description: "Стильный журнальный столик с минималистичным дизайном. Прочная конструкция и элегантный внешний вид.",
    features: ["Прочная столешница", "Скрытое место для хранения", "Устойчивая конструкция", "Легко собирается"],
    materials: "МДФ, металл",
    dimensions: "100 x 60 x 45 см",
  },
  "6": {
    id: "6",
    name: "Набор подушек",
    price: 4990,
    image: "/decorative-cushion-set.jpg",
    category: "Текстиль",
    description: "Комплект декоративных подушек для создания уютной атмосферы. Мягкие и приятные на ощупь.",
    features: ["Набор из 3 подушек", "Съемные чехлы", "Гипоаллергенный наполнитель", "Легко стирать"],
    materials: "Хлопок, полиэстер",
    dimensions: "45 x 45 см каждая",
  },
  "7": {
    id: "7",
    name: "Настенное зеркало",
    price: 8990,
    image: "/round-wall-mirror.jpg",
    category: "Декор",
    description: "Круглое настенное зеркало в элегантной раме. Визуально расширяет пространство и добавляет света.",
    features: ["Качественное зеркальное покрытие", "Прочная рама", "Крепление в комплекте", "Не искажает отражение"],
    materials: "Зеркало, металл",
    dimensions: "Диаметр 80 см",
  },
  "8": {
    id: "8",
    name: "Книжная полка",
    price: 15990,
    image: "/modern-bookshelf.png",
    category: "Мебель",
    description: "Современная книжная полка с открытыми секциями. Идеальна для хранения книг и декоративных элементов.",
    features: ["5 вместительных полок", "Прочная конструкция", "Легко собирается", "Устойчивая к нагрузкам"],
    materials: "МДФ, металл",
    dimensions: "120 x 180 x 30 см",
  },
}

const relatedProducts = [
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
    id: "6",
    name: "Набор подушек",
    price: 4990,
    image: "/decorative-cushion-set.jpg",
    category: "Текстиль",
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const product = productsData[params.id]

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="font-serif text-3xl font-bold">Товар не найден</h1>
            <Link href="/" className="mt-8 inline-block">
              <Button>Вернуться в каталог</Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
          Вернуться в каталог
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">{product.category}</p>
              <h1 className="mt-2 font-serif text-3xl font-bold leading-tight md:text-4xl">{product.name}</h1>
              <p className="mt-4 text-3xl font-semibold">{product.price.toLocaleString("ru-RU")} ₽</p>
            </div>

            <div className="mt-6 space-y-4">
              <p className="leading-relaxed text-muted-foreground">{product.description}</p>

              <div className="space-y-2">
                <h3 className="font-semibold">Особенности:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Card>
                <CardContent className="p-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Материалы:</span>
                      <span className="font-medium">{product.materials}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Размеры:</span>
                      <span className="font-medium">{product.dimensions}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 space-y-3">
              <Button size="lg" className="w-full" onClick={handleAddToCart} disabled={added}>
                {added ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Добавлено в корзину
                  </>
                ) : (
                  <>
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Добавить в корзину
                  </>
                )}
              </Button>

              <div className="grid grid-cols-3 gap-3 border-t border-border pt-6">
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-xs text-muted-foreground">Гарантия качества</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-muted-foreground">Быстрая доставка</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <svg className="h-5 w-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-muted-foreground">Легкий возврат</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16 border-t border-border pt-16">
          <h2 className="font-serif text-2xl font-bold md:text-3xl">Вам также может понравиться</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} {...relatedProduct} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
