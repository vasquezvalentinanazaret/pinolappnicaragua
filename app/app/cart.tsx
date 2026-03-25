import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function CartScreen() {
  const router = useRouter();

  // Datos de ejemplo
  const cartItems = [
    { id: 1, name: "Bajo", price: 180, quantity: 2, restaurant: "El Buen Sabor" },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = 30;
  const total = subtotal + delivery;

  if (cartItems.length === 0) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50 p-4">
        <Ionicons name="cart-outline" size={64} color="#9CA3AF" />
        <Text className="text-gray-500 text-lg mt-4">Tu carrito está vacío</Text>
        <Text className="text-gray-400 text-center mt-2">
          Agrega productos desde el menú de un restaurante
        </Text>
        <TouchableOpacity
          className="bg-primary px-6 py-3 rounded-lg mt-6"
          onPress={() => router.push("/")}
        >
          <Text className="text-white font-semibold">Explorar restaurantes</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-4 pt-4">
        {cartItems.map((item) => (
          <View key={item.id} className="bg-white rounded-lg p-4 mb-3 shadow-sm">
            <View className="flex-row justify-between">
              <View className="flex-1">
                <Text className="font-semibold text-gray-800">{item.name}</Text>
                <Text className="text-gray-500 text-sm">{item.restaurant}</Text>
                <Text className="text-primary font-bold mt-1">C$ {item.price}</Text>
              </View>
              <View className="flex-row items-center">
                <TouchableOpacity className="w-8 h-8 bg-gray-200 rounded-full items-center justify-center">
                  <Text className="text-lg font-bold">-</Text>
                </TouchableOpacity>
                <Text className="mx-3 text-lg font-semibold">{item.quantity}</Text>
                <TouchableOpacity className="w-8 h-8 bg-gray-200 rounded-full items-center justify-center">
                  <Text className="text-lg font-bold">+</Text>
                </TouchableOpacity>
                <TouchableOpacity className="ml-3">
                  <Ionicons name="trash-outline
