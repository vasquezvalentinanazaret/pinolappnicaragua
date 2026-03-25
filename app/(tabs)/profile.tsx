import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  const router = useRouter();

  const menuItems = [
    { icon: "person-outline", title: "Información personal", color: "#00A651" },
    { icon: "location-outline", title: "Direcciones", color: "#00A651" },
    { icon: "card-outline", title: "Métodos de pago", color: "#00A651" },
    { icon: "heart-outline", title: "Favoritos", color: "#E30613" },
    { icon: "help-circle-outline", title: "Ayuda", color: "#00A651" },
    { icon: "settings-outline", title: "Configuración", color: "#00A651" },
  ];

  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="bg-primary pt-12 pb-8 px-4">
        <View className="items-center">
          <View className="w-28 h-28 bg-white rounded-full items-center justify-center mb-3 shadow-lg">
            <Text className="text-primary text-5xl">👤</Text>
          </View>
          <Text className="text-white text-2xl font-bold">Carlos Pérez</Text>
          <Text className="text-white/80 mt-1">carlos@pinolapp.com</Text>
          <Text className="text-white/60 text-sm mt-1">Miembro desde marzo 2024</Text>
        </View>
      </View>

      <View className="px-4 pt-6">
        <Text className="text-gray-500 text-sm mb-3">CONFIGURACIÓN DE CUENTA</Text>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="flex-row items-center bg-white p-4 rounded-xl mb-3 shadow-sm"
            onPress={() => {}}
          >
            <View className="w-10 h-10 rounded-full bg-primary/10 items-center justify-center">
              <Ionicons name={item.icon as any} size={22} color={item.color} />
            </View>
            <Text className="flex-1 ml-3 text-gray-800 font-medium">{item.title}</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          className="bg-red-500 py-4 rounded-xl mt-6 mb-8 shadow-sm"
          onPress={() => router.push("/login")}
        >
          <Text className="text-white text-center font-bold text-lg">Cerrar sesión</Text>
        </TouchableOpacity>

        <Text className="text-center text-gray-400 text-sm mb-8">Versión 1.0.0</Text>
      </View>
    </ScrollView>
  );
}
