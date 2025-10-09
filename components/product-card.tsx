"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCart } from "@/components/cart-provider"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export function ProductCard({ id, name, price, image, category }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({ id, name, price, image })
  }

  return (
    <Link href={`/product/${id}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg">
        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden bg-muted">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-3 p-4">
          <div className="w-full">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{category}</p>
            <h3 className="mt-1 font-serif text-lg font-semibold leading-tight text-balance">{name}</h3>
          </div>
          <div className="flex w-full items-center justify-between">
            <p className="text-xl font-semibold">{price.toLocaleString("ru-RU")} ₽</p>
            <Button
              size="icon"
              variant="outline"
              onClick={handleAddToCart}
              className="transition-colors hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
