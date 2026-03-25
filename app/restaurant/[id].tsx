import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";

// Datos de ejemplo
const restaurants = {
  1: {
    id: 1,
    name: "El Buen Sabor",
    rating: 4.5,
    deliveryTime: 25,
    deliveryFee: 550,
    address: "De la Rotonda 2c al sur, Managua",
  },
  2: {
    id: 2,
    name: "Súper Típico",
    rating: 4.3,
    deliveryTime: 25,
    deliveryFee: 550,
    address: "Frente al Parque Central, Masaya",
  },
  3: {
    id: 3,
    name: "Pizza House",
    rating: 4.7,
    deliveryTime: 30,
    deliveryFee: 600,
    address: "Centro Comercial Metrocentro",
  },
};

const menuItems = {
  1: [
    { id: 1, name: "Combo Típico", description: "Gallo pinto, queso frito, tajadas", price: 560 },
    { id: 2, name: "Bajo", description: "Carne asada, gallo pinto, plátano", price: 180 },
    { id: 3, name: "Nacatamal", description: "Nacatamal nica con pan y café", price: 120 },
  ],
  2: [
    { id: 4, name: "Gallo Pinto", description: "Con queso y tajadas", price: 150 },
    { id: 5, name: "Indio Viejo", description: "Comida típica nicaragüense", price: 200 },
  ],
  3: [
    { id: 6, name: "Pizza Margarita", description: "Salsa de tomate, mozzarella", price: 350 },
    { id: 7, name: "Pizza Pepperoni", description: "Pepperoni y queso", price: 450 },
  ],
};

export default function RestaurantScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const restaurant = restaurants[Number(id)];
  const menu = menuItems[Number(id)] || [];
  const [cartCount, setCartCount] = useState(0);

  if (!restaurant) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Restaurante no encontrado</Text>
      </View>
    );
  }

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="h-48 bg-gray-300" />

      <View className="px-4 pt-4">
        <Text className="text-2xl font-bold text-gray-800">{restaurant.name}</Text>
        <View className="flex-row items-center mt-1">
          <Text className="text-yellow-500">★</Text>
          <Text className="text-gray-600 ml-1">{restaurant.rating}</Text>
          <Text className="text-gray-400 mx-2">•</Text>
          <Text className="text-gray-600">{restaurant.deliveryTime} min</Text>
          <Text className="text-gray-400 mx-2">•</Text>
          <Text className="text-gray-600">Envío C$ {restaurant.deliveryFee}</Text>
        </View>
        <Text className="text-gray-500 mt-2">{restaurant.address}</Text>
      </View>

      <View className="px-4 mt-6">
        <Text className="text-lg font-semibold text-gray-800 mb-3">Menú</Text>
        {menu.map((item) => (
          <View key={item.id} className="bg-white rounded-lg mb-3 shadow-sm overflow-hidden">
            <View className="flex-row p-3">
              <View className="flex-1">
                <Text className="font-semibold text-gray-800 text-base">{item.name}</Text>
                <Text className="text-gray-500 text-sm mt-1">{item.description}</Text>
                <Text className="text-primary font-bold mt-2">C$ {item.price}</Text>
              </View>
              <TouchableOpacity
                className="bg-primary px-4 py-2 rounded-lg self-center"
                onPress={addToCart}
              >
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
            className="bg-primary py-3 rounded-lg flex-row justify-between px-4"
            onPress={() => router.push("/cart")}
          >
            <Text className="text-white font-semibold">Ver carrito</Text>
            <Text className="text-white font-bold">{cartCount} items</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
}
