import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from '@/theme/colors';
import { useRouter } from 'expo-router';

export default function Header({ title }: { title: string }) {
  const router = useRouter();
  return (
    <View className="flex-row items-center justify-between px-5 py-4 bg-white border-b border-gray-200">
      <TouchableOpacity onPress={() => router.back()}>
        <Text className="text-2xl">←</Text>
      </TouchableOpacity>
      <Text className="font-bold text-xl">{title}</Text>
      <View className="w-8" />
    </View>
  );
}
