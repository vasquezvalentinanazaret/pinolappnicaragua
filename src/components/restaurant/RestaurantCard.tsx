import { View, Text, TouchableOpacity, Image } from "react-native";

interface Restaurant {
  id: number;
  name: string;
  rating: number;
  stars: string;
  deliveryTime: number;
  price: number;
  image: string;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
  onPress: () => void;
}

export default function RestaurantCard({ restaurant, onPress }: RestaurantCardProps) {
  return (
    <TouchableOpacity
      className="bg-white rounded-xl mb-4 shadow-sm border border-gray-100 overflow-hidden"
      onPress={onPress}
    >
      <Image source={{ uri: restaurant.image }} className="w-full h-40" resizeMode="cover" />
      <View className="p-4">
        <Text className="text-lg font-bold text-gray-800">{restaurant.name}</Text>
        <View className="flex-row items-center mt-1">
          <Text className="text-yellow-500 text-base">{restaurant.stars}</Text>
          <Text className="text-gray-500 ml-2">{restaurant.deliveryTime} min</Text>
        </View>
        <Text className="text-primary font-bold text-lg mt-2">C$ {restaurant.price}</Text>
      </View>
    </TouchableOpacity>
  );
}
