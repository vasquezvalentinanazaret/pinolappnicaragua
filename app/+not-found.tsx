import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function NotFoundScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-white p-4">
      <View className="w-32 h-32 bg-gray-100 rounded-full items-center justify-center mb-6">
        <Ionicons name="sad-outline" size={64} color="#9CA3AF" />
      </View>
      <Text className="text-2xl font-bold text-gray-800 mb-2">Página no encontrada</Text>
      <Text className="text-gray-500 text-center mb-8">
        Lo sentimos, la página que estás buscando no existe.
      </Text>
      <TouchableOpacity
        className="bg-primary py-3 px-8 rounded-full"
        onPress={() => router.push("/")}
      >
        <Text className="text-white font-bold text-lg">Ir al inicio</Text>
      </TouchableOpacity>
    </View>
  );
}
