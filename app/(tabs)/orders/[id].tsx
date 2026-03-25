import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function OrderDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const order = {
    id: 3519,
    restaurant: "El Buen Sabor",
    items: [{ name: "Bajo", price: 180, quantity: 1 }],
    total: 180,
    status: "delivering",
    estimatedTime: "5 min",
    createdAt: "2024-03-24T19:30:00",
    address: "De la Iglesia San Juan 2c al norte, Managua",
    driver: {
      name: "Joel M.",
      phone: "+505 8888-9999",
      rating: 4.8,
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  };

  const statusSteps = [
    { key: "pending", label: "Recibido", icon: "checkmark-circle", time: "7:30 PM", completed: true },
    { key: "confirmed", label: "Confirmado", icon: "checkmark-circle", time: "7:32 PM", completed: true },
    { key: "preparing", label: "Preparando", icon: "restaurant", time: "7:35 PM", completed: true },
    { key: "delivering", label: "En camino", icon: "bicycle", time: "7:45 PM", completed: true },
    { key: "delivered", label: "Entregado", icon: "home", time: "8:00 PM", completed: false },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-4 pt-6">
        <Text className="text-2xl font-bold text-primary text-center">Pedido en camino</Text>
        <Text className="text-gray-500 text-center mt-2 mb-4">
          Tu pedido está en camino y llegará pronto a tu domicilio. #{order.id}
        </Text>

        <View className="bg-white rounded-2xl p-6 mb-4 shadow-sm items-center">
          <Text className="text-4xl font-bold text-primary">~{order.estimatedTime}</Text>
          <Text className="text-gray-500 text-sm mt-2">Tiempo estimado de entrega</Text>
        </View>

        <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <Text className="font-bold text-gray-800 text-lg mb-3">Tu repartidor</Text>
          <View className="flex-row items-center">
            <View className="w-14 h-14 bg-primary/10 rounded-full items-center justify-center">
              <Text className="text-primary text-2xl">👤</Text>
            </View>
            <View className="flex-1 ml-3">
              <Text className="font-bold text-gray-800 text-lg">{order.driver.name}</Text>
              <View className="flex-row items-center mt-1">
                <Ionicons name="star" size={16} color="#F59E0B" />
                <Text className="text-gray-500 ml-1">{order.driver.rating}</Text>
                <Text className="text-gray-400 mx-2">•</Text>
                <Text className="text-gray-500">{order.driver.phone}</Text>
              </View>
            </View>
            <TouchableOpacity className="bg-primary px-4 py-2 rounded-full">
              <Text className="text-white font-semibold">Contactar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <Text className="font-bold text-gray-800 text-lg mb-4">Seguimiento del pedido</Text>
          {statusSteps.map((step, index) => (
            <View key={step.key} className="flex-row mb-4">
              <View className="items-center mr-3">
                <View className={`w-8 h-8 rounded-full items-center justify-center ${step.completed ? "bg-primary" : "bg-gray-300"}`}>
                  <Ionicons name={step.icon as any} size={16} color={step.completed ? "white" : "#9CA3AF"} />
                </View>
                {index < statusSteps.length - 1 && <View className="w-0.5 h-8 bg-gray-300 mt-1" />}
              </View>
              <View className="flex-1">
                <Text className={`font-semibold ${step.completed ? "text-primary" : "text-gray-500"}`}>
                  {step.label}
                </Text>
                <Text className="text-gray-400 text-xs">{step.time}</Text>
              </View>
            </View>
          ))}
        </View>

        <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <Text className="font-bold text-gray-800 text-lg mb-3">{order.restaurant}</Text>
          {order.items.map((item, idx) => (
            <View key={idx} className="flex-row justify-between mb-2">
              <Text className="text-gray-600">{item.quantity}x {item.name}</Text>
              <Text className="text-gray-600">C$ {item.price * item.quantity}</Text>
            </View>
          ))}
          <View className="border-t border-gray-200 mt-3 pt-3">
            <View className="flex-row justify-between">
              <Text className="font-bold text-gray-800">Total</Text>
              <Text className="font-bold text-primary text-lg">C$ {order.total}</Text>
            </View>
          </View>
        </View>

        <View className="bg-white rounded-2xl p-4 mb-6 shadow-sm">
          <Text className="font-bold text-gray-800 mb-2">Dirección de entrega</Text>
          <Text className="text-gray-600">{order.address}</Text>
        </View>

        <TouchableOpacity
          className="bg-primary py-4 rounded-full mb-8"
          onPress={() => router.push("/")}
        >
          <Text className="text-white text-center font-bold text-lg">Volver al inicio</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
