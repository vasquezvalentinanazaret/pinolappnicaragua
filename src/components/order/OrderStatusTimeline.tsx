import { View, Text } from 'react-native'
import { OrderStatus } from '@/types'
import { colors } from '@/theme/colors'

const steps = [
  { key: 'pending', label: 'Recibido' },
  { key: 'preparing', label: 'Preparando' },
  { key: 'on_way', label: 'En camino' },
  { key: 'delivered', label: 'Entregado' },
] as const

type Props = {
  status: OrderStatus
}

export default function OrderStatusTimeline({ status }: Props) {
  const currentIndex = steps.findIndex(s => s.key === status)

  return (
    <View className="my-6">
      <View className="flex-row justify-between mb-2">
        {steps.map((step, index) => (
          <View key={step.key} className="items-center flex-1">
            <View
              className={`w-8 h-8 rounded-full items-center justify-center border-2 ${
                index <= currentIndex
                  ? `bg-[\( {colors.primary}] border-[ \){colors.primary}]`
                  : 'bg-gray-200 border-gray-300'
              }`}
            >
              <Text
                className={`text-xs font-bold ${
                  index <= currentIndex ? 'text-white' : 'text-gray-500'
                }`}
              >
                {index + 1}
              </Text>
            </View>
            <Text
              className={`text-xs mt-1 font-medium ${
                index <= currentIndex ? `text-[${colors.primary}]` : 'text-gray-500'
              }`}
            >
              {step.label}
            </Text>
          </View>
        ))}
      </View>

      {/* Línea de progreso */}
      <View className="h-1 bg-gray-200 mt-1 relative">
        <View
          className="absolute h-full bg-[${colors.primary}]"
          style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}
        />
      </View>
    </View>
  )
}
