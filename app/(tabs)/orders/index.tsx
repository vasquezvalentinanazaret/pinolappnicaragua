import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

// Datos de ejemplo
const activeOrders = [
  {
    id: 3519,
    restaurant: "El Buen Sabor",
    items: [{ name: "Bajo", price: 180, quantity: 1 }],
    total: 180,
    status: "delivering",
    createdAt: new Date().toISOString(),
  },
];

const completedOrders = [
  {
    id: 3518,
    restaurant: "Pizza House",
    items: [{ name: "Pizza Margarita", price: 350, quantity: 1 }],
    total: 350,
    status: "delivered",
    createdAt: "2024-03-23T15:30:00",
  },
];

export default function OrdersScreen() {
  const router = useRouter();

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-4 pt-6">
        <Text className="text-2xl font-bold text-gray-800 mb-4">Mis Pedidos</Text>

        {activeOrders.length > 0 && (
          <>
            <Text className="text-lg font-semibold text-gray-800 mb-3">En curso</Text>
            {activeOrders.map((order) => (
              <TouchableOpacity
                key={order.id}
                className="bg-white rounded-lg p-4 mb-3 shadow-sm"
                onPress={() => router.push(`/orders/${order.id}`)}
              >
                <View className="flex-row justify-between mb-2">
                  <Text className="font-semibold text-gray-800">#{order.id}</Text>
                  <Text className="text-gray-500">{order.restaurant}</Text>
                </View>
                <Text className="text-gray-500 mb-2">
                  {order.items.length} {order.items.length === 1 ? "producto" : "productos"}
                </Text>
                <View className="flex-row justify-between items-center">
                  <Text className="text-primary font-bold">C$ {order.total}</Text>
                  <View className="bg-primary/10 px-2 py-1 rounded">
                    <Text className="text-primary text-xs">En camino</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </>
        )}

        {completedOrders.length > 0 && (
          <>
            <Text className="text-lg font-semibold text-gray-800 mb-3 mt-4">Historial</Text>
            {completedOrders.map((order) => (
              <TouchableOpacity
                key={order.id}
                className="bg-white rounded-lg p-4 mb-3 shadow-sm"
                onPress={() => router.push(`/orders/${order.id}`)}
              >
                <View className="flex-row justify-between mb-2">
                  <Text className="font-semibold text-gray-800">#{order.id}</Text>
                  <Text className="text-gray-500">{order.restaurant}</Text>
                </View>
                <Text className="text-gray-500 text-sm">
                  {new Date(order.createdAt).toLocaleDateString()}
                </Text>
                <Text className="text-primary font-bold mt-2">C$ {order.total}</Text>
              </TouchableOpacity>
            ))}
          </>
        )}

        {activeOrders.length === 0 && completedOrders.length === 0 && (
          <View className="items-center mt-20">
            <Text className="text-gray-500 text-lg">No tienes pedidos aún</Text>
            <Text className="text-gray-400 text-center mt-2">
              ¡Explora restaurantes y haz tu primer pedido!
            </Text>
            <TouchableOpacity
              className="bg-primary px-6 py-3 rounded-lg mt-4"
              onPress={() => router.push("/")}
            >
              <Text className="text-white font-semibold">Ver restaurantes</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
