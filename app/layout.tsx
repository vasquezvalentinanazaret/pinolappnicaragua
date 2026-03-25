import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LocationProvider } from "@/src/context/LocationContext";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <LocationProvider>
        <StatusBar style="auto" />
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="restaurant/[id]" options={{ headerTitle: "Restaurante" }} />
          <Stack.Screen name="cart" options={{ headerTitle: "Mi Carrito", presentation: "modal" }} />
          <Stack.Screen name="checkout" options={{ headerTitle: "Confirmar Pedido" }} />
        </Stack>
      </LocationProvider>
    </SafeAreaProvider>
  );
}
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="restaurant/[id]" options={{ headerTitle: "Restaurante" }} />
        <Stack.Screen name="cart" options={{ headerTitle: "Mi Carrito", presentation: "modal" }} />
        <Stack.Screen name="checkout" options={{ headerTitle: "Confirmar Pedido" }} />
      </Stack>
    </SafeAreaProvider>
  );
}
