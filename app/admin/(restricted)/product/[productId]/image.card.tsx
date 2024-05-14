import React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RouterOutputs } from '@/utils/trpc'

export default function ImageCard({
  className,
  product,
}: {
  className?: string
  product: RouterOutputs['product']['get']
}) {
  return (
    <Card className={className}>
      <CardContent className="p-4">
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Imagem</Label>
            <Input
              type="text"
              className="w-full"
              defaultValue={product.image!}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
