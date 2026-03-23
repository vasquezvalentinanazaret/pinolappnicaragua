import { Stack } from 'expo-router'
import { useAuthStore } from '@/store/authStore'
import { Redirect } from 'expo-router'

export default function AuthLayout() {
  const { user } = useAuthStore()

  // Si ya está logueado → redirigir a tabs
  if (user) {
    return <Redirect href="/(tabs)" />
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  )
}
