import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.replace("/(tabs)");
    }, 1000);
  };

  return (
    <View className="flex-1 bg-white px-6 pt-20">
      <View className="items-center mb-12">
        <View className="w-28 h-28 bg-primary rounded-full items-center justify-center mb-4">
          <Text className="text-white text-5xl">🍽️</Text>
        </View>
        <Text className="text-3xl font-bold text-primary">PinolApp</Text>
        <Text className="text-gray-500 mt-2">¡Bienvenido de vuelta!</Text>
      </View>

      <Input
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity className="self-end mb-6">
        <Text className="text-primary">¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>

      <Button
        title={loading ? "Iniciando..." : "Iniciar sesión"}
        onPress={handleLogin}
        disabled={loading}
      />

      <View className="flex-row justify-center mt-6">
        <Text className="text-gray-500">¿No tienes cuenta? </Text>
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text className="text-primary font-semibold">Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
