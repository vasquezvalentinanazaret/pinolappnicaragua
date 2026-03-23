import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  // Datos simulados (mock) para restaurantes – después los traemos de Supabase
  const restaurants = [
    {
      id: '1',
      name: 'El Buen Sabor',
      rating: '4.8',
      time: '25 min',
      price: 'C$550',
      image: 'https://picsum.photos/id/1015/600/300', // placeholder
    },
    {
      id: '2',
      name: 'Súper Típico',
      rating: '4.7',
      time: '20 min',
      price: 'C$550',
      image: 'https://picsum.photos/id/292/600/300',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Header simple */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hola, Antonio 👋</Text>
        <Text style={styles.question}>¿Qué te gustaría pedir hoy?</Text>
      </View>

      {/* Buscador placeholder */}
      <View style={styles.searchBar}>
        <Text style={styles.searchText}>Buscar en PinolApp</Text>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Restaurantes Cercanos</Text>

        {restaurants.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.id}
            style={styles.card}
            onPress={() => router.push(`/restaurant/${restaurant.id}`)}
          >
            <Image source={{ uri: restaurant.image }} style={styles.cardImage} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardName}>{restaurant.name}</Text>
              <Text style={styles.cardDetails}>
                ⭐ {restaurant.rating} · {restaurant.time} · {restaurant.price}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { padding: 20, backgroundColor: '#00A651' },
  greeting: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  question: { color: '#fff', fontSize: 16, marginTop: 5 },
  searchBar: {
    margin: 15,
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
  },
  searchText: { color: '#888', fontSize: 16 },
  scrollView: { flex: 1 },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  card: {
    marginHorizontal: 15,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  cardImage: { width: '100%', height: 180 },
  cardInfo: { padding: 15 },
  cardName: { fontSize: 18, fontWeight: 'bold' },
  cardDetails: { marginTop: 5, color: '#666', fontSize: 14 },
});
