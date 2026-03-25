import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const allRestaurants = [
  { id: 1, name: "El Buen Sabor", category: "Típico", rating: 4.5, price: 550 },
  { id: 2, name: "Súper Típico", category: "Típico", rating: 4.3, price: 550 },
  { id: 3, name: "Pizza House", category: "Pizza", rating: 4.7, price: 600 },
];

const allDishes = [
  { id: 1, name: "Combo Típico", price: 560, restaurant: "El Buen Sabor", description: "Gallo pinto, queso frito, tajadas" },
  { id: 2, name: "Bajo", price: 180, restaurant: "El Buen Sabor", description: "Carne asada, gallo pinto, plátano" },
  { id: 3, name: "Nacatamal", price: 120, restaurant: "El Buen Sabor", description: "Nacatamal nica con pan" },
  { id: 4, name: "Pizza Margarita", price: 350, restaurant: "Pizza House", description: "Salsa de tomate, mozzarella" },
];

export default function SearchScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"restaurants" | "dishes">("restaurants");

  const filteredRestaurants = allRestaurants.filter(r =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDishes = allDishes.filter(d =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-4 pt-6">
        <View className="bg-white rounded-full px-4 py-3 flex-row items-center shadow-sm border border-gray-200 mb-4">
          <Ionicons name="search-outline" size={20} color="#9CA3AF" />
          <TextInput
            className="flex-1 ml-2 text-base"
            placeholder="Buscar restaurantes o platillos..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <View className="flex-row mb-4">
          <TouchableOpacity
            className={`flex-1 py-3 rounded-full ${activeTab === "restaurants" ? "bg-primary" : "bg-gray-200"}`}
            onPress={() => setActiveTab("restaurants")}
          >
            <Text className={`text-center font-semibold ${activeTab === "restaurants" ? "text-white" : "text-gray-700"}`}>
              Restaurantes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-3 rounded-full ml-2 ${activeTab === "dishes" ? "bg-primary" : "bg-gray-200"}`}
            onPress={() => setActiveTab("dishes")}
          >
            <Text className={`text-center font-semibold ${activeTab === "dishes" ? "text-white" : "text-gray-700"}`}>
              Platillos
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === "restaurants" && (
          <>
            {filteredRestaurants.length > 0 ? (
              filteredRestaurants.map((restaurant) => (
                <TouchableOpacity
                  key={restaurant.id}
                  className="bg-white rounded-xl p-4 mb-3 shadow-sm"
                  onPress={() => router.push(`/restaurant/${restaurant.id}`)}
                >
                  <Text className="font-bold text-gray-800 text-lg">{restaurant.name}</Text>
                  <Text className="text-gray-500 text-sm">{restaurant.category}</Text>
                  <View className="flex-row items-center mt-2">
                    <Text className="text-yellow-500">★</Text>
                    <Text className="text-gray-500 ml-1">{restaurant.rating}</Text>
                    <Text className="text-primary font-bold ml-auto">C$ {restaurant.price}</Text>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <Text className="text-center text-gray-500 mt-10">No se encontraron restaurantes</Text>
            )}
          </>
        )}

        {activeTab === "dishes" && (
          <>
            {filteredDishes.length > 0 ? (
              filteredDishes.map((dish) => (
                <TouchableOpacity key={dish.id} className="bg-white rounded-xl p-4 mb-3 shadow-sm">
                  <Text className="font-bold text-gray-800 text-lg">{dish.name}</Text>
                  <Text className="text-gray-500 text-sm">{dish.restaurant}</Text>
                  <Text className="text-gray-400 text-sm mt-1">{dish.description}</Text>
                  <Text className="text-primary font-bold mt-2">C$ {dish.price}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text className="text-center text-gray-500 mt-10">No se encontraron platillos</Text>
            )}
          </>
        )}
      </View>
    </ScrollView>
  );
}
