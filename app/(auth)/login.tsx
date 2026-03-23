import { View, Text, ScrollView, Alert } from 'react-native'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import { useAuthStore } from '@/store/authStore'

export default function Login() {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuthStore()

  const handleLogin = async () => {
    if (!phone || !password) {
      Alert.alert('Error', 'Completa todos los campos')
      return
    }

    setLoading(true)
    try {
      await login(phone, password)
      router.replace('/(tabs)')
    } catch (err: any) {
      Alert.alert('Error', err.message || 'Credenciales inválidas')
    } finally {
      setLoading(false)
    }
  }

  return (
    <ScrollView className="flex-1 bg-gray-50" keyboardShouldPersistTaps="handled">
      <View className="flex-1 justify-center p-6 min-h-[80vh]">
        <Text className="text-3xl font-bold mb-2 text-center">Bienvenido</Text>
        <Text className="text-gray-600 mb-10 text-center">
          Inicia sesión para pedir comida típica nicaragüense
        </Text>

        <Input
          label="Teléfono"
          placeholder="+505 1234-5678"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <Input
          label="Contraseña"
          placeholder="••••••••"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button onPress={handleLogin} disabled={loading}>
          {loading ? 'Iniciando...' : 'Iniciar sesión'}
        </Button>

        <View className="mt-6 items-center">
          <Link href="/(auth)/register" asChild>
            <Text className="text-[${colors.primary}] font-medium">
              ¿No tienes cuenta? Regístrate
            </Text>
          </Link>
        </View>
      </View>
    </ScrollView>
  )
}
