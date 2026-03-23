// Opcional – por si quieres reemplazar el tab bar por defecto más adelante
import { View, Text } from 'react-native';

export default function TabBar() {
  return (
    <View className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex-row items-center justify-around">
      <Text>Inicio</Text>
      <Text>Pedidos</Text>
      <Text>Perfil</Text>
    </View>
  );
}
