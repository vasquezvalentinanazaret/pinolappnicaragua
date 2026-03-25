import { View, Text, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Driver {
  id: number;
  name: string;
  phone: string;
  rating: number;
  photo?: string;
}

interface DriverCardProps {
  driver: Driver;
  onContact?: () => void;
}

export default function DriverCard({ driver, onContact }: DriverCardProps) {
  const handleCall = () => {
    Linking.openURL(`tel:${driver.phone}`);
  };

  return (
    <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
      <Text className="font-bold text-gray-800 text-lg mb-3">Tu repartidor</Text>
      <View className="flex-row items-center">
        <View className="w-14 h-14 bg-primary/10 rounded-full items-center justify-center">
          <Ionicons name="person" size={32} color="#00A651" />
        </View>
        <View className="flex-1 ml-3">
          <Text className="font-bold text-gray-800 text-lg">{driver.name}</Text>
          <View className="flex-row items-center mt-1">
            <Ionicons name="star" size={16} color="#F59E0B" />
            <Text className="text-gray-500 ml-1">{driver.rating}</Text>
            <Text className="text-gray-400 mx-2">•</Text>
            <Text className="text-gray-500">{driver.phone}</Text>
          </View>
        </View>
        <TouchableOpacity
          className="bg-primary px-4 py-2 rounded-full"
          onPress={handleCall}
        >
          <Text className="text-white font-semibold">Contactar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
