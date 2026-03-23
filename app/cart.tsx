import { View, Text } from 'react-native'
import { useCartStore } from '@/store/cartStore'
import { formatPrice } from '@/lib/currency'
import Button from '@/components/ui/Button'
import { Link } from 'expo-router'

export default function Cart() {
  const { items, total } = useCartStore()

  if (items.length === 0) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl text-gray-600">Tu carrito está vacío</Text>
      </View>
    )
  }

  return (
    <View className="flex-1 p-4">
      <Text className="text-2xl font-bold mb-4">Carrito</Text>

      {items.map(({ item, quantity }) => (
        <View key={item.id} className="flex-row justify-between py-3 border-b">
          <Text>{item.name} × {quantity}</Text>
          <Text>{formatPrice(item.price * quantity)}</Text>
        </View>
      ))}

      <View className="mt-auto mb-6">
        <View className="flex-row justify-between py-3">
          <Text className="font-bold">Total</Text>
          <Text className="font-bold text-lg">{formatPrice(total())}</Text>
        </View>

        <Link href="/checkout" asChild>
          <Button>Ir a pagar</Button>
        </Link>
      </View>
    </View>
  )
}
