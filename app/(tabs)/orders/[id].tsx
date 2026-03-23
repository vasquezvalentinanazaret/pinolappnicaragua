import { View, Text, ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import OrderStatusTimeline from '@/components/order/OrderStatusTimeline'
import { formatPrice } from '@/lib/currency'

export default function OrderDetail() {
  const { id } = useLocalSearchParams()

  // Mock – luego real desde store o supabase
  const order = {
    id,
    restaurant: { name: 'El Buen Sabor' },
    total: 380,
    status: 'on_way' as const,
    items: [
      { name: 'Baho', quantity: 1, price: 180 },
      { name: 'Gallo pinto + carne', quantity: 1, price: 150 },
      { name: 'Coca Cola 1.5L', quantity: 1, price: 50 },
    ],
    estimated: 'Llega aprox. en 18 min',
  }

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        <Text className="text-2xl font-bold mb-2">Pedido #{id}</Text>
        <Text className="text-gray-600 mb-6">{order.restaurant.name}</Text>

        <OrderStatusTimeline status={order.status} />

        <View className="bg-white p-4 rounded-xl mt-6">
          <Text className="font-bold mb-3">Detalles del pedido</Text>
          {order.items.map((it, i) => (
            <View key={i} className="flex-row justify-between py-2 border-b border-gray-100">
              <Text>{it.quantity} × {it.name}</Text>
              <Text>{formatPrice(it.price * it.quantity)}</Text>
            </View>
          ))}
          <View className="flex-row justify-between pt-3 font-bold">
            <Text>Total</Text>
            <Text>{formatPrice(order.total)}</Text>
          </View>
        </View>

        <View className="mt-6 bg-white p-4 rounded-xl">
          <Text className="font-bold mb-2">Repartidor</Text>
          <Text className="text-gray-600">En camino • {order.estimated}</Text>
          {/* Aquí iría DriverCard + mapa más adelante */}
        </View>
      </View>
    </ScrollView>
  )
}
