import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { restaurants, menuItems } from "@/src/lib/mockData";
import RestaurantCard from "@/src/components/restaurant/RestaurantCard";
import MenuItemCard from "@/src/components/restaurant/MenuItemCard";
import { useRouter } from "expo-router";

export default function SearchScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"restaurants" | "dishes">("restaurants");

  const filteredRestaurants = restaurants.filter((r) =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredDishes = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView className="flex-1 bg-background">
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
                <RestaurantCard
                  key={restaurant.id}
                  restaurant={restaurant}
                  onPress={() => router.push(`/restaurant/${restaurant.id}`)}
                />
              ))
            ) : (
              <Text className="text-center text-gray-500 mt-10">No se encontraron restaurantes</Text>
            )}
          </>
        )}

        {activeTab === "dishes" && (
          <>
            {filteredDishes.length > 0 ? (
              filteredDishes.map((item) => (
                <MenuItemCard key={item.id} item={item} />
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
