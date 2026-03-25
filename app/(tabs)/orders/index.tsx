import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const activeOrders = [
  {
    id: 3519,
    restaurant: "El Buen Sabor",
    items: [{ name: "Bajo", price: 180, quantity: 1 }],
    total: 180,
    status: "delivering",
    statusText: "En camino",
    statusColor: "#00A651",
    createdAt: "2024-03-24T19:30:00",
  },
];

const completedOrders = [
  {
    id: 3518,
    restaurant: "Pizza House",
    items: [{ name: "Pizza Margarita", price: 350, quantity: 1 }],
    total: 350,
    status: "delivered",
    statusText: "Entregado",
    statusColor: "#6B7280",
    createdAt: "2024-03-23T15:30:00",
  },
  {
    id: 3517,
    restaurant: "Súper Típico",
    items: [{ name: "Gallo Pinto", price: 150, quantity: 2 }],
    total: 300,
    status: "delivered",
    statusText: "Entregado",
    statusColor: "#6B7280",
    createdAt: "2024-03-22T12:00:00",
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
                className="bg-white rounded-xl p-4 mb-3 shadow-sm"
                onPress={() => router.push(`/orders/${order.id}`)}
              >
                <View className="flex-row justify-between mb-2">
                  <Text className="font-bold text-gray-800 text-lg">#{order.id}</Text>
                  <View className={`px-3 py-1 rounded-full bg-${order.statusColor}/10`}>
                    <Text className={`text-${order.statusColor} text-xs font-semibold`}>
                      {order.statusText}
                    </Text>
                  </View>
                </View>
                <Text className="text-gray-600 text-base mb-2">{order.restaurant}</Text>
                <Text className="text-gray-500 text-sm mb-2">
                  {order.items.length} {order.items.length === 1 ? "producto" : "productos"}
                </Text>
                <View className="flex-row justify-between items-center mt-2">
                  <Text className="text-primary font-bold text-lg">C$ {order.total}</Text>
                  <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
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
                className="bg-white rounded-xl p-4 mb-3 shadow-sm"
                onPress={() => router.push(`/orders/${order.id}`)}
              >
                <View className="flex-row justify-between mb-2">
                  <Text className="font-bold text-gray-800">#{order.id}</Text>
                  <Text className="text-gray-400 text-sm">{order.restaurant}</Text>
                </View>
                <Text className="text-gray-500 text-sm">
                  {new Date(order.createdAt).toLocaleDateString("es-NI", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Text>
                <Text className="text-primary font-bold mt-2">C$ {order.total}</Text>
              </TouchableOpacity>
            ))}
          </>
        )}

        {activeOrders.length === 0 && completedOrders.length === 0 && (
          <View className="items-center mt-20 py-12">
            <View className="w-24 h-24 bg-gray-200 rounded-full items-center justify-center mb-4">
              <Ionicons name="receipt-outline" size={48} color="#9CA3AF" />
            </View>
            <Text className="text-gray-500 text-lg font-medium">No tienes pedidos aún</Text>
            <Text className="text-gray-400 text-center mt-2 px-8">
              ¡Explora restaurantes y haz tu primer pedido!
            </Text>
            <TouchableOpacity
              className="bg-primary px-8 py-3 rounded-full mt-6"
              onPress={() => router.push("/")}
            >
              <Text className="text-white font-bold">Ver restaurantes</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
