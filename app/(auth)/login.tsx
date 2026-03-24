import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useAuthStore } from "@/src/store/authStore";
import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuthStore();

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signIn(email, password);
      router.replace("/(tabs)");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-6 pt-20">
      <View className="items-center mb-12">
        <Image
          source={require("@/src/assets/images/logo.png")}
          className="w-32 h-32"
          resizeMode="contain"
        />
        <Text className="text-2xl font-bold text-primary mt-4">¡Bienvenido!</Text>
        <Text className="text-gray-500 mt-2">Inicia sesión para continuar</Text>
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

      <Button
        title={loading ? "Iniciando..." : "Iniciar sesión"}
        onPress={handleLogin}
        disabled={loading}
        className="mt-6"
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
