import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { getRestaurantById, getMenuItemsByRestaurant } from "@/src/lib/mockData";
import MenuItemCard from "@/src/components/restaurant/MenuItemCard";
import { useCartStore } from "@/src/store/cartStore";
import { Restaurant, MenuItem } from "@/src/types";
import Button from "@/src/components/ui/Button";

export default function RestaurantScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { items, getTotalQuantity } = useCartStore();

  useEffect(() => {
    const fetchData = async () => {
      const restaurantData = getRestaurantById(Number(id));
      const menuData = getMenuItemsByRestaurant(Number(id));
      setRestaurant(restaurantData);
      setMenuItems(menuData);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Cargando...</Text>
      </View>
    );
  }

  if (!restaurant) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Restaurante no encontrado</Text>
      </View>
    );
  }

  const cartQuantity = getTotalQuantity();

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="h-48 bg-gray-300">
        <Image
          source={{ uri: restaurant.image || "https://via.placeholder.com/400x200" }}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>

      <View className="px-4 pt-4">
        <Text className="text-2xl font-bold text-text">{restaurant.name}</Text>
        <View className="flex-row items-center mt-1">
          <Text className="text-yellow-500">★</Text>
          <Text className="text-gray-600 ml-1">{restaurant.rating} · {restaurant.deliveryTime} min</Text>
        </View>
        <Text className="text-gray-500 mt-2">{restaurant.address}</Text>
      </View>

      <View className="px-4 mt-6">
        <Text className="text-lg font-semibold text-text mb-3">Menú</Text>
        {menuItems.map((item) => (
          <MenuItemCard key={item.id} item
