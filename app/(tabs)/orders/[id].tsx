import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import OrderStatusTimeline from "@/src/components/order/OrderStatusTimeline";
import DriverCard from "@/src/components/order/DriverCard";
import { getOrderById } from "@/src/lib/mockData";
import { Order } from "@/src/types";

export default function OrderDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      const orderData = getOrderById(Number(id));
      setOrder(orderData);
      setLoading(false);
    };
    fetchOrder();
  }, [id]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Cargando...</Text>
      </View>
    );
  }

  if (!order) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Pedido no encontrado</Text>
      </View>
    );
  }

  const estimatedMinutes = order.status === "preparing" ? 25 :
    order.status === "delivering" ? 10 : 5;

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-6">
        <Text className="text-2xl font-bold text-text mb-2">Pedido en camino</Text>
        <Text className="text-gray-500 mb-4">
          Tu pedido está en camino y llegará pronto a tu domicilio. #{order.id}
        </Text>

        <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
          <Text className="text-2xl font-bold text-primary text-center">
            ~{estimatedMinutes} min
          </Text>
        </View>

        {order.driver && (
          <DriverCard driver={order.driver} />
        )}

        <OrderStatusTimeline status={order.status} />

        <View className="bg-white rounded-lg p-4 mb-4 mt-4 shadow-sm">
          <Text className="font-semibold text-text text-lg mb-3">{order.restaurant}</Text>
          {order.items.map((item, index) => (
            <View key={index} className="flex-row justify-between mb-2">
              <Text className="text-gray-600">
                {item.quantity}x {item.name}
              </Text>
              <Text className="text-gray-600">C$ {item.price * item.quantity}</Text>
            </View>
          ))}
          <View className="border-t border-gray-200 mt-2 pt-2">
            <View className="flex-row justify-between">
              <Text className="font-semibold text-text">Total</Text>
              <Text className="font-bold text-primary">C$ {order.total}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          className="bg-primary py-3 rounded-lg mb-6"
          onPress={() => router.push("/")}
        >
          <Text className="text-white text-center font-semibold">Volver al inicio</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
