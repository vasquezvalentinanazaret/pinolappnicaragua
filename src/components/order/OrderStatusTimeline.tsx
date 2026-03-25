import { View, Text } from "react-native";

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface OrderSummaryProps {
  restaurant: string;
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
}

export default function OrderSummary({
  restaurant,
  items,
  subtotal,
  deliveryFee,
  total,
}: OrderSummaryProps) {
  return (
    <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
      <Text className="font-bold text-gray-800 text-lg mb-3">{restaurant}</Text>
      
      {items.map((item, idx) => (
        <View key={idx} className="flex-row justify-between mb-2">
          <Text className="text-gray-600">
            {item.quantity}x {item.name}
          </Text>
          <Text className="text-gray-600">C$ {item.price * item.quantity}</Text>
        </View>
      ))}
      
      <View className="border-t border-gray-200 mt-3 pt-3">
        <View className="flex-row justify-between mb-2">
          <Text className="text-gray-600">Subtotal</Text>
          <Text className="text-gray-800">C$ {subtotal}</Text>
        </View>
        <View className="flex-row justify-between mb-2">
          <Text className="text-gray-600">Envío</Text>
          <Text className="text-gray-800">C$ {deliveryFee}</Text>
        </View>
        <View className="border-t border-gray-200 mt-2 pt-2">
          <View className="flex-row justify-between">
            <Text className="font-bold text-gray-800 text-lg">Total</Text>
            <Text className="font-bold text-primary text-2xl">C$ {total}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
