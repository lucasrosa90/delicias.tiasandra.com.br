'use client'

import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Switch } from '@/components/ui/switch'
import { toast } from '@/components/ui/use-toast'
import { RouterOutputs } from '@/utils/trpc'

type Props = {
  productId: string
  tags: RouterOutputs['tag']['getAll']
  defaultValues: RouterOutputs['tag']['get'][]
}
export default function TagsForm({ tags, defaultValues }: Props) {
  const form = useForm({
    defaultValues: {
      allergens: defaultValues.reduce(
        (acc, allergen) => ({
          ...acc,
          [allergen.id]: true,
        }),
        {} as Record<string, boolean>,
      ),
    },
  })

  // eslint-disable-next-line
  function onSubmit(data: any) {
    console.log(data)
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          {tags.map(tag => (
            <FormField
              key={tag.id}
              control={form.control}
              name={`allergens.${tag.id}` as `allergens.${string}`}
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <FormLabel className="text-base">{tag.name}</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          ))}
        </CardContent>

        <CardFooter>
          <Button size="sm">Salvar</Button>
        </CardFooter>
      </form>
    </Form>
  )
}
