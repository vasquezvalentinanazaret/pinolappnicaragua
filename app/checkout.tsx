import { View, Text } from 'react-native'
import { useCartStore } from '@/store/cartStore'
import { formatPrice } from '@/lib/currency'
import Button from '@/components/ui/Button'
import { DELIVERY_FEE } from '@/lib/constants'

export default function Checkout() {
  const { items, total, clearCart } = useCartStore()

  const subtotal = total()
  const totalWithDelivery = subtotal + DELIVERY_FEE

  const handleConfirm = () => {
    // Aquí iría llamada a Supabase / crear orden
    alert('¡Pedido confirmado! (mock)')
    clearCart()
  }

  return (
    <View className="flex-1 p-5 bg-gray-50">
      <Text className="text-2xl font-bold mb-6">Confirmar pedido</Text>

      <View className="bg-white p-5 rounded-xl mb-6">
        <Text className="font-bold mb-3">Resumen</Text>
        {items.map(({ item, quantity }) => (
          <View key={item.id} className="flex-row justify-between py-2">
            <Text>{quantity} × {item.name}</Text>
            <Text>{formatPrice(item.price * quantity)}</Text>
          </View>
        ))}
        <View className="border-t border-gray-200 mt-3 pt-3 flex-row justify-between">
          <Text>Subtotal</Text>
          <Text>{formatPrice(subtotal)}</Text>
        </View>
        <View className="flex-row justify-between mt-2">
          <Text>Envío</Text>
          <Text>{formatPrice(DELIVERY_FEE)}</Text>
        </View>
        <View className="flex-row justify-between font-bold text-lg mt-4 pt-3 border-t border-gray-300">
          <Text>Total</Text>
          <Text>{formatPrice(totalWithDelivery)}</Text>
        </View>
      </View>

      <View className="bg-white p-5 rounded-xl mb-6">
        <Text className="font-bold mb-3">Método de pago</Text>
        <Text className="text-gray-600">Efectivo al recibir</Text>
        {/* Aquí irían opciones de tarjeta después */}
      </View>

      <View className="mt-auto mb-8">
        <Button onPress={handleConfirm}>
          Confirmar pedido • {formatPrice(totalWithDelivery)}
        </Button>
      </View>
    </View>
  )
}
