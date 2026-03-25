import { View, Text, TouchableOpacity } from "react-native";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: () => void;
}

export default function MenuItemCard({ item, onAddToCart }: MenuItemCardProps) {
  return (
    <View className="bg-white rounded-xl p-4 mb-3 shadow-sm border border-gray-100">
      <View className="flex-row justify-between items-start">
        <View className="flex-1">
          <Text className="text-lg font-bold text-gray-800">{item.name}</Text>
          <Text className="text-gray-500 mt-1">{item.description}</Text>
          <Text className="text-primary font-bold text-xl mt-2">C$ {item.price}</Text>
        </View>
        <TouchableOpacity className="bg-primary px-5 py-2 rounded-full" onPress={onAddToCart}>
          <Text className="text-white font-semibold">Agregar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
