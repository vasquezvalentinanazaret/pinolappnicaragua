import { View, Text } from 'react-native';
import { formatPrice } from '@/lib/currency';
import { useCart } from '@/hooks/useCart';

export default function CartSummary() {
  const { totalPrice, count } = useCart();

  return (
    <View className="bg-white p-5 border-t border-gray-200">
      <View className="flex-row justify-between">
        <Text className="font-medium">Total ({count} productos)</Text>
        <Text className="font-bold text-xl text-[${colors.primary}]">
          {formatPrice(totalPrice)}
        </Text>
      </View>
    </View>
  );
}
