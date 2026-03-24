import { View, Text, TouchableOpacity, Image } from "react-native";
import { MenuItem } from "@/src/types";
import { useCartStore } from "@/src/store/cartStore";

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const { addItem } = useCartStore();

  const handleAddToCart = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      restaurant: item.restaurant,
      restaurantId: item.restaurantId,
    });
  };

  return (
    <View className="bg-white rounded-lg mb-3 shadow-sm overflow-hidden">
      <View className="flex-row p-3">
        <View className="flex-1">
          <Text className="font-semibold text-text text-base">{item.name}</Text>
          <Text className="text-gray-500 text-sm mt-1">{item.description}</Text>
          <Text className="text-primary font-bold mt-2">C$ {item.price}</Text>
        </View>
        <TouchableOpacity
          className="bg-primary px-4 py-2 rounded-lg self-center"
          onPress={handleAddToCart}
        >
          <Text className="text-white font-semibold">Agregar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
