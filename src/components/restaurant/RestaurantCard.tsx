import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Restaurant } from '@/types'
import { formatPrice } from '@/lib/currency'

type Props = {
  restaurant: Restaurant
  onPress: () => void
}

export default function RestaurantCard({ restaurant, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} className="mb-4 rounded-xl overflow-hidden bg-white shadow-sm">
      <Image
        source={{ uri: restaurant.image || 'https://via.placeholder.com/400x180?text=Comida+T%C3%ADpica' }}
        className="w-full h-44"
        resizeMode="cover"
      />
      <View className="p-3">
        <Text className="font-bold text-lg">{restaurant.name}</Text>
        <View className="flex-row items-center mt-1">
          <Text>⭐ {restaurant.rating}</Text>
          <Text className="mx-2">•</Text>
          <Text>{restaurant.time}</Text>
        </View>
        <Text className="text-gray-500 mt-1">{restaurant.category}</Text>
      </View>
    </TouchableOpacity>
  )
}
