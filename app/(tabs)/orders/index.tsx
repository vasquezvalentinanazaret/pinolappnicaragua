import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import { formatPrice } from '@/lib/currency'

// Datos mock temporales (luego vendrán de Zustand / Supabase)
const MOCK_ORDERS = [
  {
    id: 'order-001',
    restaurant: { name: 'El Buen Sabor' },
    total: 380,
    status: 'on_way' as const,
    createdAt: 'Hoy 12:45',
  },
  {
    id: 'order-002',
    restaurant: { name: 'La Fritanga' },
    total: 250,
    status: 'delivered' as const,
    createdAt: 'Ayer 19:30',
  },
]

export default function Orders() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        <Text className="text-2xl font-bold mb-4">Mis Pedidos</Text>

        {MOCK_ORDERS.length === 0 ? (
          <Text className="text-center text-gray-600 mt-10">
            Aún no tienes pedidos
          </Text>
        ) : (
          MOCK_ORDERS.map((order) => (
            <Link href={`/orders/${order.id}`} key={order.id} asChild>
              <TouchableOpacity className="bg-white p-4 mb-3 rounded-xl shadow-sm">
                <View className="flex-row justify-between items-start">
                  <View>
                    <Text className="font-bold text-lg">{order.restaurant.name}</Text>
                    <Text className="text-gray-500 text-sm mt-1">{order.createdAt}</Text>
                  </View>
                  <Text className="font-bold text-lg">{formatPrice(order.total)}</Text>
                </View>

                <View className="mt-3">
                  <Text
                    className={`font-medium ${
                      order.status === 'delivered'
                        ? 'text-green-600'
                        : order.status === 'on_way'
                        ? 'text-[${colors.primary}]'
                        : 'text-amber-600'
                    }`}
                  >
                    {order.status === 'pending'
                      ? 'Pendiente'
                      : order.status === 'preparing'
                      ? 'Preparando'
                      : order.status === 'on_way'
                      ? 'En camino'
                      : 'Entregado'}
                  </Text>
                </View>
              </TouchableOpacity>
            </Link>
          ))
        )}
      </View>
    </ScrollView>
  )
}
