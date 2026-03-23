import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import Button from '@/components/ui/Button'

export default function NotFound() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50 p-6">
      <Text className="text-6xl font-bold mb-4">404</Text>
      <Text className="text-xl text-gray-600 mb-8 text-center">
        La página que buscas no existe
      </Text>

      <Link href="/(tabs)" asChild>
        <Button>Volver al inicio</Button>
      </Link>
    </View>
  )
}
