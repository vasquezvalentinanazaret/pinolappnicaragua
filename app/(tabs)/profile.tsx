import { View, Text, TouchableOpacity } from 'react-native'
import { colors } from '@/theme/colors'
import Button from '@/components/ui/Button'

export default function Profile() {
  return (
    <View className="flex-1 bg-gray-50 p-6">
      <View className="items-center mb-8 mt-6">
        <View className="w-24 h-24 rounded-full bg-[${colors.primary}] items-center justify-center">
          <Text className="text-white text-3xl font-bold">Y</Text>
        </View>
        <Text className="text-xl font-bold mt-4">Yader</Text>
        <Text className="text-gray-600">+505 1234-5678</Text>
      </View>

      <View className="bg-white rounded-xl overflow-hidden mb-6">
        <TouchableOpacity className="p-4 border-b border-gray-100">
          <Text className="font-medium">Mis direcciones</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-4 border-b border-gray-100">
          <Text className="font-medium">Métodos de pago</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-4">
          <Text className="font-medium">Historial de pedidos</Text>
        </TouchableOpacity>
      </View>

      <Button variant="outline" className="mt-auto mb-10">
        Cerrar sesión
      </Button>
    </View>
  )
}
