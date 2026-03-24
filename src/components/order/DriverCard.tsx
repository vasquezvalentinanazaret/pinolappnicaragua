import { View, Text, Image, TouchableOpacity } from "react-native";
import { Driver } from "@/src/types";
import { Ionicons } from "@expo/vector-icons";

interface DriverCardProps {
  driver: Driver;
}

export default function DriverCard({ driver }: DriverCardProps) {
  return (
    <View className="bg-white rounded-lg p-4 mb-4 shadow-sm">
      <Text className="font-semibold text-text mb-3">Tu repartidor</Text>
      <View className="flex-row items-center">
        <View className="w-12 h-12 bg-gray-300 rounded-full items-center justify-center">
          <Ionicons name="person" size={24} color="#6B7280" />
        </View>
        <View className="flex-1 ml-3">
          <Text className="font-semibold text-text">{driver.name}</Text>
          <View className="flex-row items-center">
            <Ionicons name="star" size={14} color="#F59E0B" />
            <Text className="text-gray-500 text-sm ml-1">{driver.rating}</Text>
          </View>
        </View>
        <TouchableOpacity
          className="bg-primary px-3 py-2 rounded-lg"
          onPress={() => {}}
        >
          <Text className="text-white text-sm font-semibold">Contactar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
