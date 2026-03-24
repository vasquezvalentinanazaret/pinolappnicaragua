import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/src/theme/colors";

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  showCart?: boolean;
}

export default function Header({ title, showBack = false, showCart = true }: HeaderProps) {
  const router = useRouter();

  return (
    <View className="bg-primary pt-12 pb-3 px-4 flex-row items-center">
      {showBack && (
        <TouchableOpacity onPress={() => router.back()} className="mr-3">
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      )}
      <Text className="flex-1 text-white text-lg font-bold">{title || "PinolApp"}</Text>
      {showCart && (
        <TouchableOpacity onPress={() => router.push("/cart")}>
          <Ionicons name="cart-outline" size={24} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
}
