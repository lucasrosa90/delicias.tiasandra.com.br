import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { createSSRHelper } from '@/server/helpers'
import { RouterOutputs } from '@/utils/trpc'

import AllergensForm from './allergens.form'

type Props = {
  productId: string
  defaultValues: RouterOutputs['allergen']['get'][]
}

export default async function AllergensCard({ productId, defaultValues }: Props) {
  const allergens = await createSSRHelper().allergen.getAll.fetch()
  return (
    <Card>
      <div className="flex w-full items-end justify-end p-6">
        <CardHeader className="w-full p-0">
          <CardTitle className="text-xl">Alérgenos</CardTitle>
          {/* <CardDescription>Histórico dos lotes de produção</CardDescription> */}
        </CardHeader>
        {/* <Button size="sm">Adicionar Produção</Button> */}
      </div>

      <AllergensForm
        productId={productId}
        allergens={allergens}
        defaultValues={defaultValues}
      />
    </Card>
  )
}
