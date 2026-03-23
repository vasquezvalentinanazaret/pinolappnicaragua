import { View, Text, ScrollView, Alert } from 'react-native'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function Register() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = () => {
    if (!name || !phone || !password) {
      Alert.alert('Error', 'Completa todos los campos')
      return
    }
    // Aquí iría registro en Supabase auth
    Alert.alert('Éxito', 'Cuenta creada (mock). Ahora inicia sesión.')
    router.replace('/(auth)/login')
  }

  return (
    <ScrollView className="flex-1 bg-gray-50" keyboardShouldPersistTaps="handled">
      <View className="p-6 min-h-[80vh] justify-center">
        <Text className="text-3xl font-bold mb-2 text-center">Crear cuenta</Text>
        <Text className="text-gray-600 mb-10 text-center">
          Únete y pide delivery 100% pinolero
        </Text>

        <Input label="Nombre" value={name} onChangeText={setName} />
        <Input
          label="Teléfono"
          placeholder="+505 1234-5678"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <Input
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button onPress={handleRegister}>Registrarse</Button>

        <View className="mt-6 items-center">
          <Link href="/(auth)/login" asChild>
            <Text className="text-[${colors.primary}] font-medium">
              ¿Ya tienes cuenta? Inicia sesión
            </Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  )
}
