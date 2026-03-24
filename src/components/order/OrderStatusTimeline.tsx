import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface OrderStatusTimelineProps {
  status: "pending" | "confirmed" | "preparing" | "delivering" | "delivered";
  compact?: boolean;
}

const statuses = [
  { key: "pending", label: "Recibido", icon: "checkmark-circle" },
  { key: "confirmed", label: "Confirmado", icon: "checkmark-circle" },
  { key: "preparing", label: "Preparando", icon: "restaurant" },
  { key: "delivering", label: "En camino", icon: "bicycle" },
  { key: "delivered", label: "Entregado", icon: "home" },
];

const statusOrder = ["pending", "confirmed", "preparing", "delivering", "delivered"];

export default function OrderStatusTimeline({ status, compact = false }: OrderStatusTimelineProps) {
  const currentIndex = statusOrder.indexOf(status);

  if (compact) {
    const currentStatus = statuses.find((s) => s.key === status);
    return (
      <View className="flex-row items-center">
        <Ionicons name={currentStatus?.icon as any} size={16} color="#00A651" />
        <Text className="text-sm text-primary ml-1">{currentStatus?.label}</Text>
      </View>
    );
  }

  return (
    <View className="flex-row justify-between items-center py-4">
      {statuses.map((s, index) => (
        <View key={s.key} className="flex-1 items-center">
          <View
            className={`w-8 h-8 rounded-full items-center justify-center ${
              index <= currentIndex ? "bg-primary" : "bg-gray-300"
            }`}
          >
            <Ionicons
              name={s.icon as any}
              size={16}
              color={index <= currentIndex ? "white" : "#9CA3AF"}
            />
          </View>
          <Text
            className={`text-xs mt-1 text-center ${
              index <= currentIndex ? "text-primary font-semibold" : "text-gray-400"
            }`}
          >
            {s.label}
          </Text>
        </View>
      ))}
    </View>
  );
}
