import { View, Text } from "react-native";

interface CartSummaryProps {
  subtotal: number;
  delivery: number;
  total: number;
}

export default function CartSummary({ subtotal, delivery, total }: CartSummaryProps) {
  return (
    <View className="bg-white rounded-lg p-4 shadow-sm">
      <Text className="font-semibold text-text text-lg mb-3">Resumen</Text>
      <View className="flex-row justify-between mb-2">
        <Text className="text-gray-600">Subtotal</Text>
        <Text className="text-gray-600">C$ {subtotal}</Text>
      </View>
      <View className="flex-row justify-between mb-2">
        <Text className="text-gray-600">Envío</Text>
        <Text className="text-gray-600">C$ {delivery}</Text>
      </View>
      <View className="border-t border-gray-200 mt-2 pt-2">
        <View className="flex-row justify-between">
          <Text className="font-semibold text-text">Total</Text>
          <Text className="font-bold text-primary">C$ {total}</Text>
        </View>
      </View>
    </View>
  );
}
