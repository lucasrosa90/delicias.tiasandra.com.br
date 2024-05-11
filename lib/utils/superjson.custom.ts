import { Decimal } from 'decimal.js'
import { SuperJSON } from 'superjson'

const CustomSuperJSON = SuperJSON
CustomSuperJSON.registerCustom<Decimal, string>(
  {
    isApplicable: (value: unknown): value is Decimal => Decimal.isDecimal(value),
    serialize: (value: Decimal) => value.toJSON(),
    deserialize: (value: Decimal.Value) => new Decimal(value),
  },
  'decimal.js',
)

export { CustomSuperJSON }
