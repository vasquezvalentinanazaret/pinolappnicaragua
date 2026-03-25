import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function CartScreen() {
  const router = useRouter();

  const cartItems = [
    { id: 1, name: "Bajo", price: 180, quantity: 2, restaurant: "El Buen Sabor" },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = 30;
  const total = subtotal + delivery;

  if (cartItems.length === 0) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50 p-4">
        <View className="w-28 h-28 bg-gray-200 rounded-full items-center justify-center mb-4">
          <Ionicons name="cart-outline" size={56} color="#9CA3AF" />
        </View>
        <Text className="text-gray-500 text-xl font-medium mt-4">Tu carrito está vacío</Text>
        <Text className="text-gray-400 text-center mt-2 px-8">
          Agrega productos desde el menú de un restaurante
        </Text>
        <TouchableOpacity
          className="bg-primary px-8 py-3 rounded-full mt-6"
          onPress={() => router.push("/")}
        >
          <Text className="text-white font-bold text-lg">Explorar restaurantes</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-4 pt-4">
        {cartItems.map((item) => (
          <View key={item.id} className="bg-white rounded-2xl p-4 mb-3 shadow-sm">
            <View className="flex-row justify-between">
              <View className="flex-1">
                <Text className="font-bold text-gray-800 text-lg">{item.name}</Text>
                <Text className="text-gray-500 text-sm mt-1">{item.restaurant}</Text>
                <Text className="text-primary font-bold text-xl mt-2">C$ {item.price}</Text>
              </View>
              <View className="flex-row items-center">
                <TouchableOpacity className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
                  <Text className="text-xl font-bold text-gray-600">-</Text>
                </TouchableOpacity>
                <Text className="mx-4 text-lg font-bold">{item.quantity}</Text>
                <TouchableOpacity className="w-10 h-10 bg-gray-100 rounded-full items-center justify-center">
                  <Text className="text-xl font-bold text-gray-600">+</Text>
                </TouchableOpacity>
                <TouchableOpacity className="ml-3">
                  <Ionicons name="trash-outline" size={24} color="#E30613" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        <View className="bg-white rounded-2xl p-4 mt-4 shadow-sm">
          <Text className="font-bold text-gray-800 text-lg mb-3">Resumen</Text>
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-600">Subtotal</Text>
            <Text className="text-gray-800">C$ {subtotal}</Text>
          </View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-600">Envío</Text>
            <Text className="text-gray-800">C$ {delivery}</Text>
          </View>
          <View className="border-t border-gray-200 mt-3 pt-3">
            <View className="flex-row justify-between">
              <Text className="font-bold text-gray-800 text-lg">Total</Text>
              <Text className="font-bold text-primary text-2xl">C$ {total}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          className="bg-primary py-4 rounded-full mt-6 mb-8"
          onPress={() => router.push("/checkout")}
        >
          <Text className="text-white text-center font-bold text-lg">Proceder al pago</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
