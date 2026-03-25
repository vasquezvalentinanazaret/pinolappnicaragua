import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const restaurants = {
  1: {
    id: 1,
    name: "El Buen Sabor",
    rating: 5,
    stars: "⭐⭐⭐⭐⭐",
    deliveryTime: 25,
    deliveryFee: 550,
    address: "De la Rotonda 2c al sur, Managua",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400",
    offers: [
      { id: 1, name: "Combo Típico", originalPrice: 560, price: 300, description: "Típico ótato" },
    ],
    menu: [
      { id: 1, name: "Bajo", price: 180, description: "Perfecto, susadita, con platano" },
      { id: 2, name: "Bajo", price: 100, description: "Perfecto, susadita, con platano" },
      { id: 3, name: "Bajo", price: 100, description: "Perfecto, susadita, con platano" },
      { id: 4, name: "Nacatamal", price: 120, description: "Nacatamal nica con pan y café" },
    ],
  },
  2: {
    id: 2,
    name: "Súper Típico",
    rating: 4,
    stars: "⭐⭐⭐⭐☆",
    deliveryTime: 25,
    deliveryFee: 550,
    address: "Frente al Parque Central, Masaya",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400",
    offers: [],
    menu: [
      { id: 1, name: "Gallo Pinto", price: 150, description: "Con queso y tajadas" },
      { id: 2, name: "Indio Viejo", price: 200, description: "Comida típica nicaragüense" },
    ],
  },
  3: {
    id: 3,
    name: "Pizza House",
    rating: 4,
    stars: "⭐⭐⭐⭐☆",
    deliveryTime: 30,
    deliveryFee: 600,
    address: "Centro Comercial Metrocentro",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    offers: [],
    menu: [
      { id: 1, name: "Pizza Margarita", price: 350, description: "Salsa de tomate, mozzarella" },
      { id: 2, name: "Pizza Pepperoni", price: 450, description: "Pepperoni y queso" },
    ],
  },
};

export default function RestaurantScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const restaurant = restaurants[Number(id)] || restaurants[1];
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <Image source={{ uri: restaurant.image }} className="w-full h-56" resizeMode="cover" />

      <View className="px-4 pt-4">
        <Text className="text-3xl font-bold text-gray-800">{restaurant.name}</Text>
        <View className="flex-row items-center mt-1">
          <Text className="text-yellow-500 text-xl">{restaurant.stars}</Text>
          <Text className="text-gray-500 ml-2">{restaurant.deliveryTime} min</Text>
          <Text className="text-gray-400 mx-2">•</Text>
          <Text className="text-gray-500">Envío C$ {restaurant.deliveryFee}</Text>
        </View>
        <Text className="text-gray-500 mt-2">{restaurant.address}</Text>
      </View>

      <View className="px-4 mt-6">
        {restaurant.offers.length > 0 && (
          <View className="mb-6">
            <Text className="text-2xl font-bold text-gray-800 mb-3">Ofertas del Día</Text>
            {restaurant.offers.map((offer) => (
              <View key={offer.id} className="bg-orange-50 rounded-2xl p-4 border border-orange-200">
                <Text className="text-xl font-bold text-gray-800">{offer.name}</Text>
                <Text className="text-gray-500 italic mt-1">{offer.description}</Text>
                <View className="flex-row items-center mt-2">
                  <Text className="text-gray-400 line-through text-lg">C$ {offer.originalPrice}</Text>
                  <Text className="text-primary font-bold text-3xl ml-3">C$ {offer.price}</Text>
                </View>
                <TouchableOpacity className="bg-primary py-2 px-6 rounded-full mt-3 self-start" onPress={addToCart}>
                  <Text className="text-white font-semibold">Agregar</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

        <Text className="text-2xl font-bold text-gray-800 mb-3">Menú</Text>
        {restaurant.menu.map((item, index) => (
          <View key={index} className="bg-white rounded-2xl p-4 mb-3 shadow-sm border border-gray-100">
            <View className="flex-row justify-between items-start">
              <View className="flex-1">
                <Text className="text-lg font-bold text-gray-800">{item.name}</Text>
                <Text className="text-gray-500 mt-1">{item.description}</Text>
                <Text className="text-primary font-bold text-xl mt-2">C$ {item.price}</Text>
              </View>
              <TouchableOpacity className="bg-primary px-5 py-2 rounded-full" onPress={addToCart}>
                <Text className="text-white font-semibold">Agregar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <View className="h-24" />

      {cartCount > 0 && (
        <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
          <TouchableOpacity
            className="bg-primary py-4 rounded-full flex-row justify-between px-6"
            onPress={() => router.push("/cart")}
          >
            <Text className="text-white font-bold text-lg">Ver carrito</Text>
            <Text className="text-white font-bold text-lg">{cartCount} items</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}
