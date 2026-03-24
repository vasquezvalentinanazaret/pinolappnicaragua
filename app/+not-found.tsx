import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-background p-4">
      <Text className="text-6xl mb-4">😕</Text>
      <Text className="text-2xl font-bold text-text mb-2">Página no encontrada</Text>
      <Text className="text-gray-500 text-center mb-6">
        Lo sentimos, la página que estás buscando no existe.
      </Text>
      <TouchableOpacity
        className="bg-primary py-3 px-6 rounded-lg"
        onPress={() => router.push("/")}
      >
        <Text className="text-white font-semibold">Ir al inicio</Text>
      </TouchableOpacity>
    </View>
  );
}
