import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useCartStore } from "@/src/store/cartStore";
import { useOrderStore } from "@/src/store/orderStore";
import Button from "@/src/components/ui/Button";
import CartSummary from "@/src/components/cart/CartSummary";
import Input from "@/src/components/ui/Input";

export default function CheckoutScreen() {
  const router = useRouter();
  const { items, getTotalPrice, clearCart } = useCartStore();
  const { createOrder } = useOrderStore();
  const [address, setAddress] = useState("");
  const [instructions, setInstructions] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = async () => {
    if (!address.trim()) {
      alert("Por favor ingresa una dirección de entrega");
      return;
    }

    setLoading(true);
    try {
      const order = await createOrder({
        items,
        total: getTotalPrice() + 30,
        address,
        instructions,
        restaurantId: items[0]?.restaurantId,
        restaurant: items[0]?.restaurant,
      });
      clearCart();
      router.push(`/orders/${order.id}`);
    } catch (error) {
      console.error(error);
      alert("Error al crear el pedido");
    } finally {
      setLoading(false);
    }
  };

  const deliveryFee = 30;
  const subtotal = getTotalPrice();
  const total = subtotal + deliveryFee;

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="px-4 pt-4">
        <Text className="text-lg font-semibold text-text mb-3">Dirección de entrega</Text>
        <Input
          placeholder="Ej: De la Iglesia San Juan 2c al norte"
          value={address}
          onChangeText={setAddress}
          multiline
        />

        <Text className="text-lg font-semibold text-text mt-4 mb-3">Instrucciones (opcional)</Text>
        <Input
          placeholder="Ej: Portón verde, timbre no funciona"
          value={instructions}
          onChangeText={setInstructions}
          multiline
        />

        <Text className="text-lg font-semibold text-text mt-4 mb-3">Resumen del pedido</Text>
        <CartSummary subtotal={subtotal} delivery={deliveryFee} total={total} />

        <Button
          title={loading ? "Procesando..." : "Confirmar pedido"}
          onPress={handlePlaceOrder}
          disabled={loading}
          className="mt-4 mb-8"
        />
      </View>
    </ScrollView>
  );
}
