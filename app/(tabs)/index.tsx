import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const restaurants = [
  {
    id: 1,
    name: "El Buen Sabor",
    rating: 4.5,
    stars: "★★★★☆",
    deliveryTime: 25,
    price: 550,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
    category: "Típico",
  },
  {
    id: 2,
    name: "Súper Típico",
    rating: 4.5,
    stars: "★★★★☆",
    deliveryTime: 25,
    price: 550,
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400",
    category: "Típico",
  },
  {
    id: 3,
    name: "Pizza House",
    rating: 4.5,
    stars: "★★★★☆",
    deliveryTime: 25,
    price: 550,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    category: "Pizza",
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-4 pt-12 pb-4 bg-white">
        <Text className="text-3xl font-bold text-primary">El Buen Sabor</Text>
        <Text className="text-gray-600 text-lg mt-1">Hola, Carlos 👋</Text>
        <Text className="text-gray-500 mt-1">¿Qué te gustaría pedir hoy?</Text>
      </View>

      <View className="px-4 mb-4">
        <View className="bg-gray-100 rounded-full px-4 py-3 flex-row items-center">
          <Ionicons name="search-outline" size={20} color="#9CA3AF" />
          <TextInput
            className="flex-1 ml-2 text-base"
            placeholder="Buscar en PinolApp"
            placeholderTextColor="#9CA3AF"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <View className="px-4">
        <Text className="text-xl font-bold text-gray-800 mb-3">Restaurantes Cercanos</Text>
        {restaurants.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.id}
            className="bg-white rounded-xl mb-4 shadow-sm border border-gray-100 overflow-hidden"
            onPress={() => router.push(`/restaurant/${restaurant.id}`)}
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
        ))}
      </View>

      <View className="px-4 mt-4 mb-8">
        <TouchableOpacity className="bg-primary py-4 rounded-full shadow-lg" onPress={() => router.push("/login")}>
          <Text className="text-white text-center font-bold text-lg">Comienza a pedir</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mt-3" onPress={() => router.push("/login")}>
          <Text className="text-primary text-center font-semibold">Iniciar sesión</Text>
        </TouchableOpacity>
      </View>

      <View className="bg-gray-50 px-4 py-6">
        <Text className="text-xl font-bold text-gray-800 mb-3">Comienza a pedir</Text>
        <View className="bg-white rounded-xl p-4 mb-3 shadow-sm">
          <Text className="text-lg font-bold text-gray-800">Bajo</Text>
          <Text className="text-gray-500 mt-1">Perfecto, susan y con platano</Text>
          <Text className="text-primary font-bold mt-2">C$ 180</Text>
        </View>
        <View className="bg-white rounded-xl p-4 mb-3 shadow-sm">
          <Text className="text-lg font-bold text-gray-800">Con Níceros</Text>
          <Text className="text-gray-500 mt-1">Pedido cigarrillo disabaste, con gallo pinto y ensilada.</Text>
          <Text className="text-primary font-bold mt-2">C$ 250</Text>
        </View>
      </View>
    </ScrollView>
  );
}
