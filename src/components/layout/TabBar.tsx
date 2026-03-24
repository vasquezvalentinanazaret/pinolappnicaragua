import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/src/theme/colors";

interface TabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

export default function TabBar({ state, descriptors, navigation }: TabBarProps) {
  const icons: Record<string, string> = {
    index: "home",
    search: "search",
    "orders/index": "receipt",
    profile: "person",
  };

  return (
    <View className="flex-row bg-white border-t border-gray-200 py-2">
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.title || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const iconName = icons[route.name] || "ellipse";

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            className="flex-1 items-center py-2"
          >
            <Ionicons
              name={isFocused ? (iconName as any) : (`${iconName}-outline` as any)}
              size={24}
              color={isFocused ? colors.primary : colors.gray[400]}
            />
            <Text
              className={`text-xs mt-1 ${isFocused ? "text-primary font-semibold" : "text-gray-400"}`}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
    }
