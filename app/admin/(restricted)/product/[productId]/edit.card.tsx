import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { createSSRHelper } from '@/server/helpers'

export default async function EditProduct({ className, productId }: { className?: string; productId: string }) {
  const helper = createSSRHelper()
  const product = await helper.product.get.fetch(productId)
  const categories = await helper.category.getAll.fetch()
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl">{product.name}</CardTitle>
        <CardDescription>Atualize as informações do produto</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              type="text"
              className="w-full"
              defaultValue={product.name}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="name">Descrição</Label>
            <Input
              id="name"
              type="text"
              className="w-full"
              defaultValue={product.description}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="name">Ingredientes</Label>
            <Textarea
              id="name"
              rows={3}
              className="w-full"
              defaultValue={product.ingredients}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="name">Preço</Label>
            <Input
              type="number"
              className="w-full"
              defaultValue={product.price}
            />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="name">Categoria</Label>
            <Select
              // onValueChange={() => {}}
              defaultValue={product.categoryId}
              // className="w-full"
            >
              {/* <FormControl> */}
              <SelectTrigger>
                <SelectValue placeholder="Select a verified email to display" />
              </SelectTrigger>
              {/* </FormControl> */}

              <SelectContent>
                {categories.map(category => (
                  <SelectItem
                    key={category.id}
                    value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button size="sm">Salvar</Button>
      </CardFooter>
    </Card>
  )
}
