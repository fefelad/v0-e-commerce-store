"use client"

import Link from "next/link"
import { ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="h-6 w-1.5 bg-primary" />
            <div className="h-6 w-1.5 bg-accent" />
          </div>
          <span className="font-serif text-xl font-semibold tracking-tight">Элегант</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-accent">
            Каталог
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-accent">
            О нас
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-accent">
            Контакты
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-semibold text-accent-foreground">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <nav className="flex flex-col gap-4 pt-8">
                <Link href="/" className="text-lg font-medium transition-colors hover:text-accent">
                  Каталог
                </Link>
                <Link href="/about" className="text-lg font-medium transition-colors hover:text-accent">
                  О нас
                </Link>
                <Link href="/contact" className="text-lg font-medium transition-colors hover:text-accent">
                  Контакты
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
