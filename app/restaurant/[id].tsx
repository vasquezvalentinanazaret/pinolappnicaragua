import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { formatPrice } from '@/lib/currency';
import { useCartStore } from '@/store/cartStore';
import Button from '@/components/ui/Button';
import { colors } from '@/theme/colors';

// Datos mock temporales (luego vendrán de Supabase o API)
const MOCK_MENU_ITEMS = [
  {
    id: '1',
    name: 'Baho tradicional',
    description: 'Con yuca, plátano maduro y carne de cerdo',
    price: 180,
    image: 'https://via.placeholder.com/300x200?text=Baho',
  },
  {
    id: '2',
    name: 'Gallo pinto con carne asada',
    description: 'Arroz con frijoles, carne asada y ensalada',
    price: 150,
    image: 'https://via.placeholder.com/300x200?text=Gallo+Pinto',
  },
  {
    id: '3',
    name: 'Combo típico',
    description: 'Gallo pinto, tajadas, queso frito y café',
    price: 220,
    image: 'https://via.placeholder.com/300x200?text=Combo+Tipico',
  },
  {
    id: '4',
    name: 'Nacatamal grande',
    description: 'Con pollo, cerdo, arroz y vegetales',
    price: 90,
    image: 'https://via.placeholder.com/300x200?text=Nacatamal',
  },
  {
    id: '5',
    name: 'Fresco de cacao',
    description: 'Bebida tradicional nicaragüense',
    price: 40,
    image: 'https://via.placeholder.com/300x200?text=Fresco',
  },
];

export default function RestaurantDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { addItem } = useCartStore();
  const router = useRouter();

  // En producción: fetch real del restaurante y su menú usando el id
  const restaurantName = `Restaurante #${id}`; // ← mock, reemplazar por nombre real

  const handleAddToCart = (item: (typeof MOCK_MENU_ITEMS)[0]) => {
    addItem(item);
    // Opcional: toast o alerta pequeña
    // alert(`Añadido: ${item.name}`);
  };

  return (
    <ScrollView className="flex-1 bg-gray-50">
      {/* Header / Banner del restaurante */}
      <View className="h-52 bg-gray-300 relative">
        <Image
          source={{ uri: 'https://via.placeholder.com/600x300?text=Restaurante+Pinolero' }}
          className="absolute inset-0 w-full h-full"
          resizeMode="cover"
        />
        <View className="absolute bottom-0 left-0 right-0 bg-black/40 p-4">
          <Text className="text-white text-2xl font-bold">{restaurantName}</Text>
          <Text className="text-white/90">⭐ 4.7 • 15-25 min • Típico</Text>
        </View>
      </View>

      {/* Contenido principal */}
      <View className="p-5">
        <Text className="text-2xl font-bold mb-2">Menú</Text>
        <Text className="text-gray-600 mb-6">
          Baho • Gallo pinto • Combo típico • Nacatamal • Bebidas y más
        </Text>

        {/* Lista de ítems del menú */}
        {MOCK_MENU_ITEMS.map((item) => (
          <View
            key={item.id}
            className="flex-row bg-white rounded-xl mb-4 shadow-sm overflow-hidden"
          >
            {/* Imagen del plato (izquierda) */}
            <Image
              source={{ uri: item.image }}
              className="w-28 h-28"
              resizeMode="cover"
            />

            {/* Info + botón */}
            <View className="flex-1 p-3 justify-between">
              <View>
                <Text className="font-semibold text-base">{item.name}</Text>
                <Text className="text-gray-500 text-sm mt-1">{item.description}</Text>
              </View>

              <View className="flex-row justify-between items-center mt-2">
                <Text className="font-bold text-lg text-[${colors.primary}]">
                  {formatPrice(item.price)}
                </Text>

                <TouchableOpacity
                  onPress={() => handleAddToCart(item)}
                  className="bg-[${colors.primary}] px-4 py-2 rounded-lg"
                >
                  <Text className="text-white font-medium">+ Añadir</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}

        {/* Botón para ir al carrito (flotante o fijo abajo) */}
        <View className="mt-8 mb-10 items-center">
          <Button
            onPress={() => router.push('/cart')}
            className="w-full max-w-xs"
          >
            Ver carrito
          </Button>
        </View>
      </View>
    </ScrollView>
  );
        }
