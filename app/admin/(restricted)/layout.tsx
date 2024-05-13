import Link from 'next/link'

import { Home, LifeBuoy, Package, ShoppingCart, SquareUser, Triangle, Users2 } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <div className="grid h-screen w-full pl-[56px]">
        <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
          <div className="border-b p-2">
            <Button
              variant="outline"
              size="icon"
              aria-label="Home">
              <Triangle className="size-5 fill-foreground" />
            </Button>
          </div>
          <nav className="grid gap-1 p-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/admin/dashboard">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg bg-muted"
                    aria-label="Dashboard">
                    <Home className="size-5" />
                  </Button>
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                sideOffset={5}>
                Dashboard
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/admin/orders">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg"
                    aria-label="Models">
                    <ShoppingCart className="size-5" />
                    <span className="sr-only">Pedidos</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Pedidos</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/admin/clients">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg"
                    aria-label="Models">
                    <Users2 className="size-5" />
                    <span className="sr-only">Clientes</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Clientes</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/admin/products">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg"
                    aria-label="Models">
                    <Package className="size-5" />
                    <span className="sr-only">Produtos</span>
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Produtos</TooltipContent>
            </Tooltip>
          </nav>
          <nav className="mt-auto grid gap-1 p-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Help">
                  <LifeBuoy className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                sideOffset={5}>
                Help
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="mt-auto rounded-lg"
                  aria-label="Account">
                  <SquareUser className="size-5" />
                </Button>
              </TooltipTrigger>
              <TooltipContent
                side="right"
                sideOffset={5}>
                Account
              </TooltipContent>
            </Tooltip>
          </nav>
        </aside>
        <div className="flex flex-col">{children}</div>
      </div>
    </TooltipProvider>
  )
}
