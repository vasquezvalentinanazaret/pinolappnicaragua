import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function CheckoutScreen() {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [instructions, setInstructions] = useState("");
  const [loading, setLoading] = useState(false);

  const subtotal = 360;
  const delivery = 30;
  const total = subtotal + delivery;

  const handlePlaceOrder = () => {
    if (!address.trim()) {
      alert("Por favor ingresa una dirección de entrega");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/orders/3519");
    }, 1500);
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-4 pt-6">
        <Text className="text-2xl font-bold text-gray-800 mb-4">Confirmar Pedido</Text>

        <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <Text className="font-bold text-gray-800 text-lg mb-3">Dirección de entrega</Text>
          <View className="bg-gray-50 rounded-xl px-4 py-3 flex-row items-center border border-gray-200">
            <Ionicons name="location-outline" size={20} color="#00A651" />
            <TextInput
              className="flex-1 ml-2 text-base"
              placeholder="Ej: De la Iglesia San Juan 2c al norte"
              value={address}
              onChangeText={setAddress}
              multiline
            />
          </View>
        </View>

        <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <Text className="font-bold text-gray-800 text-lg mb-3">Instrucciones (opcional)</Text>
          <View className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
            <TextInput
              className="text-base min-h-[80px]"
              placeholder="Ej: Portón verde, timbre no funciona"
              value={instructions}
              onChangeText={setInstructions}
              multiline
              textAlignVertical="top"
            />
          </View>
        </View>

        <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <Text className="font-bold text-gray-800 text-lg mb-3">Método de pago</Text>
          <TouchableOpacity className="flex-row items-center justify-between p-3 bg-gray-50 rounded-xl mb-2">
            <View className="flex-row items-center">
              <Ionicons name="cash-outline" size={24} color="#00A651" />
              <Text className="ml-3 text-gray-800 font-medium">Efectivo</Text>
            </View>
            <Ionicons name="checkmark-circle" size={24} color="#00A651" />
          </TouchableOpacity>
        </View>

        <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
          <Text className="font-bold text-gray-800 text-lg mb-3">Resumen del pedido</Text>
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
          className={`py-4 rounded-full mb-8 ${loading ? "bg-gray-400" : "bg-primary"}`}
          onPress={handlePlaceOrder}
          disabled={loading}
        >
          <Text className="text-white text-center font-bold text-lg">
            {loading ? "Procesando..." : "Confirmar pedido"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
