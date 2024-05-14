import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { createSSRHelper } from '@/server/helpers'
import { RouterOutputs } from '@/utils/trpc'

import TagsForm from './tags.form'

type Props = {
  productId: string
  defaultValues: RouterOutputs['tag']['get'][]
}

export default async function TagsCard({ productId, defaultValues }: Props) {
  const tags = await createSSRHelper().tag.getAll.fetch()
  return (
    <Card>
      <div className="flex w-full items-end justify-end p-6">
        <CardHeader className="w-full p-0">
          <CardTitle className="text-xl">Tags</CardTitle>
          {/* <CardDescription>Histórico dos lotes de produção</CardDescription> */}
        </CardHeader>
        {/* <Button size="sm">Adicionar Produção</Button> */}
      </div>

      <TagsForm
        productId={productId}
        tags={tags}
        defaultValues={defaultValues}
      />
    </Card>
  )
}
