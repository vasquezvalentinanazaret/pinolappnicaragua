import { View, TouchableOpacity } from "react-native";

interface CardProps {
  children: React.ReactNode;
  onPress?: () => void;
  className?: string;
}

export default function Card({ children, onPress, className = "" }: CardProps) {
  const Component = onPress ? TouchableOpacity : View;

  return (
    <Component
      className={`bg-white rounded-xl p-4 shadow-sm ${className}`}
      onPress={onPress}
    >
      {children}
    </Component>
  );
}
