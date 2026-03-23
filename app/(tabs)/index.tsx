import { View, Text, ScrollView } from 'react-native'
import { Link } from 'expo-router'
import RestaurantCard from '@/components/restaurant/RestaurantCard'
import { MOCK_RESTAURANTS } from '@/lib/constants'

export default function Home() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-4">
        <Text className="text-2xl font-bold mb-4">Restaurantes cercanos</Text>

        {MOCK_RESTAURANTS.map((r) => (
          <Link href={`/restaurant/${r.id}`} key={r.id} asChild>
            <RestaurantCard restaurant={r} onPress={() => {}} />
          </Link>
        ))}
      </View>
    </ScrollView>
  )
}
