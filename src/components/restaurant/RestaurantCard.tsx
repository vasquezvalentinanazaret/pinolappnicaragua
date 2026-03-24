import { View, Text, TouchableOpacity, Image } from "react-native";
import { Restaurant } from "@/src/types";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onPress: () => void;
}

export default function RestaurantCard({ restaurant, onPress }: RestaurantCardProps) {
  return (
    <TouchableOpacity
      className="bg-white rounded-lg mb-3 shadow-sm overflow-hidden"
      onPress={onPress}
    >
      <Image
        source={{ uri: restaurant.image || "https://via.placeholder.com/400x200" }}
        className="w-full h-32"
        resizeMode="cover"
      />
      <View className="p-3">
        <Text className="font-semibold text-text text-lg">{restaurant.name}</Text>
        <View className="flex-row items-center mt-1">
          <Text className="text-yellow-500">★</Text>
          <Text className="text-gray-500 ml-1">{restaurant.rating}</Text>
          <Text className="text-gray-400 mx-2">•</Text>
          <Text className="text-gray-500">{restaurant.deliveryTime} min</Text>
          <Text className="text-gray-400 mx-2">•</Text>
          <Text className="text-gray-500">Envío C$ {restaurant.deliveryFee}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
