import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useCartStore } from "@/src/store/cartStore";
import Button from "@/src/components/ui/Button";
import CartSummary from "@/src/components/cart/CartSummary";
import { Ionicons } from "@expo/vector-icons";

export default function CartScreen() {
  const router = useRouter();
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();

  const handleCheckout = () => {
    if (items.length > 0) {
      router.push("/checkout");
    }
  };

  if (items.length === 0) {
    return (
      <View className="flex-1 justify-center items-center bg-background p-4">
        <Ionicons name="cart-outline" size={64} color="#9CA3AF" />
        <Text className="text-gray-500 text-lg mt-4">Tu carrito está vacío</Text>
        <Text className="text-gray-400 text-center mt-2">
          Agrega productos desde el menú de un restaurante
        </Text>
        <Button
          title="Explorar restaurantes"
          onPress={() => router.push("/")}
          className="mt-6"
        />
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-4">
        {items.map((item) => (
          <View key={item.id} className="bg-white rounded-lg p-4 mb-3 shadow-sm">
            <View className="flex-row justify-between">
              <View className="flex-1">
                <Text className="font-semibold text-text">{item.name}</Text>
                <Text className="text-gray-500 text-sm">{item.restaurant}</Text>
                <Text className="text-primary font-bold mt-1">C$ {item.price}</Text>
              </View>
              <View className="flex-row items-center">
                <TouchableOpacity
                  className="w-8 h-8 bg-gray-200 rounded-full items-center justify-center"
                  onPress={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  <Text className="text-lg font-bold">-</Text>
                </TouchableOpacity>
                <Text className="mx-3 text-lg font-semibold">{item.quantity}</Text>
                <TouchableOpacity
                  className="w-8 h-8 bg-gray-200 rounded-full items-center justify-center"
                  onPress={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  <Text className="text-lg font-bold">+</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  className="ml-3"
                  onPress={() => removeItem(item.id)}
                >
                  <Ionicons name="trash-outline" size={20} color="#E30613" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        <CartSummary subtotal={getTotalPrice()} delivery={30} total={getTotalPrice() + 30} />

        <Button
          title="Proceder al pago"
          onPress={handleCheckout}
          className="mt-4 mb-8"
        />
      </View>
    </ScrollView>
  );
}
