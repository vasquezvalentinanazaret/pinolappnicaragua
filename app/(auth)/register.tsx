import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useAuthStore } from "@/src/store/authStore";
import Button from "@/src/components/ui/Button";
import Input from "@/src/components/ui/Input";

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuthStore();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    setLoading(true);
    try {
      await signUp(email, password, name);
      router.replace("/(tabs)");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-6 pt-20">
      <View className="items-center mb-8">
        <Image
          source={require("@/src/assets/images/logo.png")}
          className="w-24 h-24"
          resizeMode="contain"
        />
        <Text className="text-2xl font-bold text-primary mt-4">Crear cuenta</Text>
        <Text className="text-gray-500 mt-2">Regístrate para empezar a pedir</Text>
      </View>

      <Input
        placeholder="Nombre completo"
        value={name}
        onChangeText={setName}
      />
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
      <Input
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <Button
        title={loading ? "Creando cuenta..." : "Registrarse"}
        onPress={handleRegister}
        disabled={loading}
        className="mt-6"
      />

      <View className="flex-row justify-center mt-6">
        <Text className="text-gray-500">¿Ya tienes cuenta? </Text>
        <TouchableOpacity onPress={() => router.push("/login")}>
          <Text className="text-primary font-semibold">Inicia sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
