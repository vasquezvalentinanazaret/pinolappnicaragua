import { TextInput, TextInputProps, View, Text } from 'react-native'
import { colors } from '@/theme/colors'

interface InputProps extends TextInputProps {
  label?: string
  error?: string
}

export default function Input({ label, error, className, ...props }: InputProps) {
  return (
    <View className="mb-4">
      {label && <Text className="text-gray-700 mb-1 font-medium">{label}</Text>}
      <TextInput
        className={`border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3 bg-white ${className}`}
        placeholderTextColor="#9ca3af"
        {...props}
      />
      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  )
}
