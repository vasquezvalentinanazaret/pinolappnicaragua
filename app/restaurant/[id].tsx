import { View, Text, ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
// import MenuItemCard from ... (crear después)

export default function RestaurantDetail() {
  const { id } = useLocalSearchParams()

  // Aquí iría fetch real después
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="h-52 bg-gray-200 items-center justify-center">
        <Text className="text-3xl font-bold">Restaurante #{id}</Text>
      </View>

      <View className="p-4">
        <Text className="text-2xl font-bold mb-2">Menú</Text>
        <Text className="text-gray-600">Baho • Gallo pinto • Combo típico • Bebidas</Text>

        {/* Aquí irían los MenuItemCard */}
        <View className="mt-6">
          <Text className="font-semibold">Baho</Text>
          <Text className="text-gray-500">C$180</Text>
        </View>
      </View>
    </ScrollView>
  )
}
