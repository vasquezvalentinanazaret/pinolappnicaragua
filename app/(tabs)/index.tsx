import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import RestaurantCard from "@/src/components/restaurant/RestaurantCard";
import { restaurants } from "@/src/lib/mockData";
import { colors } from "@/src/theme/colors";

export default function HomeScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  useEffect(() => {
    if (searchQuery) {
      setFilteredRestaurants(
        restaurants.filter((r) =>
          r.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredRestaurants(restaurants);
    }
  }, [searchQuery]);

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-6">
        <Text className="text-2xl font-bold text-text">¡Hola, Carlos! 👋</Text>
        <Text className="text-gray-500 mt-1">¿Qué te gustaría pedir hoy?</Text>

        <View className="mt-4 mb-6">
          <View className="flex-row items-center bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
            <TextInput
              className="flex-1 text-base"
              placeholder="Buscar en PinolApp"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        <Text className="text-lg font-semibold text-text mb-3">Restaurantes Cercanos</Text>

        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onPress={() => router.push(`/restaurant/${restaurant.id}`)}
          />
        ))}
      </View>
    </ScrollView>
  );
}
