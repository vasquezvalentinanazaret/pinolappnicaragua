import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function OrderDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const order = {
    id: 3519,
    restaurant: "El Buen Sabor",
    items: [{ name: "Bajo", price: 180, quantity: 1 }],
    total: 180,
    status: "delivering",
    estimatedTime: "5 min",
    createdAt: "2024-03-24T19:30:00",
    address: "De la Iglesia San Juan 2c al norte, Managua",
    driver: {
      name: "Joel M.",
      phone: "+505 8888-9999",
      rating: 4.8,
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  };

  const statusSteps = [
    { key: "pending",
