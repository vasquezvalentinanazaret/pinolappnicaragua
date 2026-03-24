import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useOrders } from "@/src/hooks/useOrders";
import OrderStatusTimeline from "@/src/components/order/OrderStatusTimeline";

export default function OrdersScreen() {
  const router = useRouter();
  const { activeOrders, completedOrders, loading } = useOrders();

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-6">
        <Text className="text-2xl font-bold text-text mb-4">Mis Pedidos</Text>

        {activeOrders.length > 0 && (
          <>
            <Text className="text-lg font-semibold text-text mb-3">En curso</Text>
            {activeOrders.map((order) => (
              <TouchableOpacity
                key={order.id}
                className="bg-white rounded-lg p-4 mb-3 shadow-sm"
                onPress={() => router.push(`/orders/${order.id}`)}
              >
                <View className="flex-row justify-between mb-2">
                  <Text className="font-semibold text-text">#{order.id}</Text>
                  <Text className="text-gray-500">{order.restaurant}</Text>
                </View>
                <Text className="text-gray-500 mb-2">
                  {order.items.length} {order.items.length === 1 ? "producto" : "productos"}
                </Text>
                <OrderStatusTimeline status={order.status} compact />
                <Text className="text-primary font-bold mt-2">C$ {order.total}</Text>
              </TouchableOpacity>
            ))}
          </>
        )}

        {completedOrders.length > 0 && (
          <>
            <Text className="text-lg font-semibold text-text mb-3 mt-4">Historial</Text>
            {completedOrders.map((order) => (
              <TouchableOpacity
                key={order.id}
                className="bg-white rounded-lg p-4 mb-3 shadow-sm"
                onPress={() => router.push(`/orders/${order.id}`)}
              >
                <View className="flex-row justify-between mb-2">
                  <Text className="font-semibold text-text">#{order.id}</Text>
                  <Text className="text-gray-500">{order.restaurant}</Text>
                </View>
                <Text className="text-gray-500">
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
          </View>
        )}
      </View>
    </ScrollView>
  );
}
