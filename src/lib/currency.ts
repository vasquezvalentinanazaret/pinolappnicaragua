import { CURRENCY } from './constants'

export function formatPrice(amount: number): string {
  return `\( {CURRENCY} \){amount.toLocaleString('es-NI', { minimumFractionDigits: 0 })}`
}
