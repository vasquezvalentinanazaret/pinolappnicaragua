import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

// Datos de ejemplo
const restaurants = [
  {
    id: 1,
    name: "El Buen Sabor",
    rating: 4.5,
    deliveryTime: 25,
    deliveryFee: 550,
    address: "De la Rotonda 2c al sur, Managua",
    category: "Típico",
  },
  {
    id: 2,
    name: "Súper Típico",
    rating: 4.3,
    deliveryTime: 25,
    deliveryFee: 550,
    address: "Frente al Parque Central, Masaya",
    category: "Típico",
  },
  {
    id: 3,
    name: "Pizza House",
    rating: 4.7,
    deliveryTime: 30,
    deliveryFee: 600,
    address: "Centro Comercial Metrocentro",
    category: "Pizza",
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    if (text) {
      setFilteredRestaurants(
        restaurants.filter(r => r.name.toLowerCase().includes(text.toLowerCase()))
      );
    } else {
      setFilteredRestaurants(restaurants);
    }
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-4 pt-6">
        <Text className="text-2xl font-bold text-gray-800">¡Hola, Carlos! 👋</Text>
        <Text className="text-gray-500 mt-1">¿Qué te gustaría pedir hoy?</Text>

        <View className="mt-4 mb-6">
          <View className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200">
            <TextInput
              className="text-base"
              placeholder="Buscar en PinolApp"
              value={searchQuery}
              onChangeText={handleSearch}
            />
          </View>
        </View>

        <Text className="text-lg font-semibold text-gray-800 mb-3">Restaurantes Cercanos</Text>

        {filteredRestaurants.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.id}
            className="bg-white rounded-lg mb-3 shadow-sm overflow-hidden"
            onPress={() => router.push(`/restaurant/${restaurant.id}`)}
          >
            <View className="h-32 bg-gray-300" />
            <View className="p-3">
              <Text className="font-semibold text-gray-800 text-lg">{restaurant.name}</Text>
              <View className="flex-row items-center mt-1">
                <Text className="text-yellow-500">★</Text>
                <Text className="text-gray-500 ml-1">{restaurant.rating}</Text>
                <Text className="text-gray-400 mx-2">•</Text>
                <Text className="text-gray-500">{restaurant.deliveryTime} min</Text>
                <Text className="text-gray-400 mx-2">•</Text>
                <Text className="text-gray-500">C$ {restaurant.deliveryFee}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
