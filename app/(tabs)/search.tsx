import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

const restaurants = [
  { id: 1, name: "El Buen Sabor", category: "Típico" },
  { id: 2, name: "Súper Típico", category: "Típico" },
  { id: 3, name: "Pizza House", category: "Pizza" },
];

const dishes = [
  { id: 1, name: "Combo Típico", price: 560, restaurant: "El Buen Sabor" },
  { id: 2, name: "Bajo", price: 180, restaurant: "El Buen Sabor" },
  { id: 3, name: "Nacatamal", price: 120, restaurant: "El Buen Sabor" },
  { id: 4, name: "Pizza Margarita", price: 350, restaurant: "Pizza House" },
];

export default function SearchScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"restaurants" | "dishes">("restaurants");

  const filteredRestaurants = restaurants.filter(r =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDishes = dishes.filter(d =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="px-4 pt-6">
        <View className="bg-white rounded-lg px-4 py-2 shadow-sm border border-gray-200 mb-4">
          <TextInput
            className="text-base"
            placeholder="Buscar restaurantes o platillos..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <View className="flex-row mb-4">
          <TouchableOpacity
            className={`flex-1 py-2 rounded-lg ${activeTab === "restaurants" ? "bg-primary" : "bg-gray-200"}`}
            onPress={() => setActiveTab("restaurants")}
          >
            <Text className={`text-center font-semibold ${activeTab === "restaurants" ? "text-white" : "text-gray-700"}`}>
              Restaurantes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 py-2 rounded-lg ml-2 ${activeTab === "dishes" ? "bg-primary" : "bg-gray-200"}`}
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
                  className="bg-white rounded-lg p-4 mb-3 shadow-sm"
                  onPress={() => router.push(`/restaurant/${restaurant.id}`)}
                >
                  <Text className="font-semibold text-gray-800">{restaurant.name}</Text>
                  <Text className="text-gray-500 text-sm">{restaurant.category}</Text>
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
                <View key={dish.id} className="bg-white rounded-lg p-4 mb-3 shadow-sm">
                  <Text className="font-semibold text-gray-800">{dish.name}</Text>
                  <Text className="text-gray-500 text-sm">{dish.restaurant}</Text>
                  <Text className="text-primary font-bold mt-1">C$ {dish.price}</Text>
                </View>
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
