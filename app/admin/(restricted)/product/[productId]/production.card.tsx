import React from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { createSSRHelper } from '@/server/helpers'

export default async function ProductionCard({ productId }: { productId: string }) {
  const productions = await createSSRHelper().production.getAll.fetch(productId)
  return (
    <Card>
      <div className="flex w-full items-end justify-end p-6">
        <CardHeader className="w-full p-0">
          <CardTitle className="text-xl">Produção</CardTitle>
          <CardDescription>Histórico dos lotes de produção</CardDescription>
        </CardHeader>
        <Button size="sm">Adicionar Produção</Button>
      </div>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Quantidade</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {productions.map(production => (
              <TableRow key={production.id}>
                <TableCell>{production.productionDate.toLocaleDateString()}</TableCell>
                <TableCell>{production.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
