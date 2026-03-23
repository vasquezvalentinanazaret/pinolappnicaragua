import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Pedidos</Text>
      
      <ScrollView style={styles.scrollView}>
        {/* Pedido en curso (ejemplo) */}
        <View style={styles.orderCard}>
          <Text style={styles.orderStatus}>En camino</Text>
          <Text style={styles.orderInfo}>Pedido #3519 - El Buen Sabor</Text>
          <Text style={styles.orderDetails}>Baho x1 - Total: C$180</Text>
          <Text style={styles.orderETA}>Llega en \~5 min</Text>
        </View>

        {/* Placeholder para historial */}
        <Text style={styles.sectionTitle}>Historial de pedidos</Text>
        <Text style={styles.placeholder}>Aquí aparecerán tus pedidos anteriores</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#00A651', marginBottom: 20 },
  scrollView: { flex: 1 },
  orderCard: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#00A651',
  },
  orderStatus: { fontSize: 18, fontWeight: 'bold', color: '#00A651' },
  orderInfo: { fontSize: 16, marginTop: 5 },
  orderDetails: { fontSize: 14, color: '#555', marginTop: 5 },
  orderETA: { fontSize: 14, color: '#888', marginTop: 5 },
  sectionTitle: { fontSize: 20, fontWeight: '600', marginTop: 20, marginBottom: 10 },
  placeholder: { color: '#888', fontSize: 16, textAlign: 'center' },
});
