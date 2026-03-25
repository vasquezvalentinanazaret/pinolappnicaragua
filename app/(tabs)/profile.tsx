import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const router = useRouter();

  const menuItems = [
    { icon: "person-outline", title: "Información personal", onPress: () => {} },
    { icon: "location-outline", title: "Direcciones", onPress: () => {} },
    { icon: "card-outline", title: "Métodos de pago", onPress: () => {} },
    { icon: "heart-outline", title: "Favoritos", onPress: () => {} },
    { icon: "help-circle-outline", title: "Ayuda", onPress: () => {} },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-primary pt-12 pb-6 px-4">
        <View className="items-center">
          <View className="w-24 h-24 bg-white rounded-full items-center justify-center mb-3">
            <Ionicons name="person" size={48} color="#00A651" />
          </View>
          <Text className="text-white text-xl font-bold">Carlos Pérez</Text>
          <Text className="text-white/80">carlos@email.com</Text>
        </View>
      </View>

      <View className="px-4 pt-6">
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="flex-row items-center bg-white p-4 rounded-lg mb-3 shadow-sm"
            onPress={item.onPress}
          >
            <Ionicons name={item.icon as any} size={24} color="#00A651" />
            <Text className="flex-1 ml-3 text-gray-800">{item.title}</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          className="bg-red-500 py-3 rounded-lg mt-4 mb-8"
          onPress={() => router.push("/login")}
        >
          <Text className="text-white text-center font-semibold">Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
