import Link from 'next/link'

import { PlusCircle } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { createSSRHelper } from '@/server/helpers'

export default async function Dashboard() {
  const products = await createSSRHelper().product.getAll.fetch()
  return (
    <>
      <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
        <h1 className="text-xl font-semibold">Produtos</h1>

        <Button
          size="sm"
          className="ml-auto gap-1.5 text-sm">
          <PlusCircle className="size-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Adicionar Produto</span>
        </Button>
      </header>

      <main className="h-full p-4">
        <Card>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead className="hidden md:table-cell">Preço</TableHead>
                <TableHead className="hidden md:table-cell">Estoque</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map(product => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">
                    <Link href={`/admin/product/${product.id}`}>{product.name}</Link>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{product.category.name}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    R$ {new Intl.NumberFormat('pt-BR').format(+product.price)}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {product.quantityInStock}

                    {product.quantityInStock < 10 && (
                      <Badge
                        variant="outline"
                        className="ml-2 border-destructive text-destructive">
                        Baixo
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </main>
    </>
  )
}
