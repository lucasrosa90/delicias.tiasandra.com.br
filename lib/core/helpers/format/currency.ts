import configs from '@/core/configs'

export default function formatCurrency(amount: number, currencyCode: string = configs.settings.currency): string {
  return new Intl.NumberFormat(configs.settings.locale, { style: 'currency', currency: currencyCode }).format(amount)
}
