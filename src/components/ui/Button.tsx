import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { colors } from "@/src/theme/colors";

interface ButtonProps {
  title: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function Button({
  title,
  onPress,
  loading = false,
  disabled = false,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const getButtonStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-primary";
      case "secondary":
        return "bg-secondary";
      case "outline":
        return "bg-transparent border border-primary";
      default:
        return "bg-primary";
    }
  };

  const getTextStyles = () => {
    switch (variant) {
      case "outline":
        return "text-primary";
      default:
        return "text-white";
    }
  };

  return (
    <TouchableOpacity
      className={`py-3 rounded-lg items-center ${getButtonStyles()} ${disabled ? "opacity-50" : ""} ${className}`}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={variant === "outline" ? colors.primary : "white"} />
      ) : (
        <Text className={`font-semibold ${getTextStyles()}`}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
