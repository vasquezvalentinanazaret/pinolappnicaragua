import { View, Text, Image, TouchableOpacity } from 'react-native';
import { formatPrice } from '@/lib/currency';
import { colors } from '@/theme/colors';
import { MenuItem } from '@/types';
import { useCartStore } from '@/store/cartStore';

type Props = {
  item: MenuItem;
};

export default function MenuItemCard({ item }: Props) {
  const { addItem } = useCartStore();

  return (
    <View className="flex-row bg-white rounded-xl mb-4 shadow-sm overflow-hidden">
      <Image
        source={{ uri: item.image || 'https://via.placeholder.com/120?text=Plato' }}
        className="w-28 h-28"
        resizeMode="cover"
      />

      <View className="flex-1 p-3 justify-between">
        <View>
          <Text className="font-semibold text-base">{item.name}</Text>
          {item.description && (
            <Text className="text-gray-500 text-sm mt-1">{item.description}</Text>
          )}
        </View>

        <View className="flex-row justify-between items-center mt-2">
          <Text className="font-bold text-lg text-[${colors.primary}]">
            {formatPrice(item.price)}
          </Text>

          <TouchableOpacity
            onPress={() => {
              addItem(item);
              // Opcional: toast aquí
            }}
            className="bg-[${colors.primary}] px-5 py-2 rounded-lg"
          >
            <Text className="text-white font-medium">+ Añadir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
