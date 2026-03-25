import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function OrderDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Datos de ejemplo
  const order = {
    id: 3519,
    restaurant: "El Buen Sabor",
    items: [{ name: "Bajo", price: 180, quantity: 1 }],
    total: 180,
    status: "delivering",
    createdAt: new Date().toISOString(),
    address: "De la Iglesia San Juan 2c al norte",
    driver: {
      name: "Joel M.",
      phone: "+505 8888-9999",
      rating: 4.8,
    },
  };

  const statusSteps = [
    { key: "pending", label: "Recibido", icon: "checkmark-circle", time: "7:30 PM" },
    { key: "confirmed", label: "Confirmado", icon: "checkmark-circle", time: "7:32 PM" },
    { key: "preparing", label: "Preparando", icon: "restaurant", time: "7:35 PM" },
    { key: "delivering", label: "En camino", icon: "bicycle", time: "7:45 PM" },
    { key: "delivered", label: "Entregado", icon: "home", time: "8:00 PM" },
  ];

  const currentStatusIndex = statusSteps.findIndex(s => s.key === order.status);

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-4 pt-6">
        <Text className="text-2xl font-bold text-gray-800 mb-2">Pedido en camino</Text>
        <Text className="text-gray-500 mb-4">
          Tu pedido está en camino y llegará pronto a tu domicilio. #{order.id}
        </Text>

        <View className="bg-white rounded-lg p-4 mb-4 shadow-sm items-center">
          <Text className="text-3xl font-bold text-primary">~10 min</Text>
          <Text className="text-gray-500 text-sm">Tiempo estimado de entrega</Text>
        </View>

        {/* Driver Info */}
        <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
          <Text className="font-semibold text-gray-800 mb-3">Tu repartidor</Text>
          <View className="flex-row items-center">
            <View className="w-12 h-12 bg-gray-300 rounded-full items-center justify-center">
              <Ionicons name="person" size={24} color="#6B7280" />
            </View>
            <View className="flex-1 ml-3">
              <Text className="font-semibold text-gray-800">{order.driver.name}</Text>
              <View className="flex-row items-center">
                <Ionicons name="star" size={14} color="#F59E0B" />
                <Text className="text-gray-500 text-sm ml-1">{order.driver.rating}</Text>
              </View>
            </View>
            <TouchableOpacity className="bg-primary px-3 py-2 rounded-lg">
              <Text className="text-white text-sm font-semibold">Contactar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Timeline */}
        <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
          <Text className="font-semibold text-gray-800 mb-4">Seguimiento del pedido</Text>
          {statusSteps.map((step, index) => (
            <View key={step.key} className="flex-row mb-4">
              <View className="items-center mr-3">
                <View
                  className={`w-8 h-8 rounded-full items-center justify-center ${
                    index <= currentStatusIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                >
                  <Ionicons
                    name={step.icon as any}
                    size={16}
                    color={index <= currentStatusIndex ? "white" : "#9CA3AF"}
                  />
                </View>
                {index < statusSteps.length - 1 && (
                  <View className="w-0.5 h-8 bg-gray-300 mt-1" />
                )}
              </View>
              <View className="flex-1">
                <Text
                  className={`font-semibold ${
                    index <= currentStatusIndex ? "text-primary" : "text-gray-500"
                  }`}
                >
                  {step.label}
                </Text>
                <Text className="text-gray-400 text-xs">{step.time}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Order Summary */}
        <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
          <Text className="font-semibold text-gray-800 text-lg mb-3">{order.restaurant}</Text>
          {order.items.map((item, idx) => (
            <View key={idx} className="flex-row justify-between mb-2">
              <Text className="text-gray-600">
                {item.quantity}x {item.name}
              </Text>
              <Text className="text-gray-600">C$ {item.price * item.quantity}</Text>
            </View>
          ))}
          <View className="border-t border-gray-200 mt-2 pt-2">
            <View className="flex-row justify-between">
              <Text className="font-semibold text-gray-800">Total</Text>
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
