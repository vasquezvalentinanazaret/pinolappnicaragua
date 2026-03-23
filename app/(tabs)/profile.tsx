import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      
      <View style={styles.infoCard}>
        <Text style={styles.name}>Antonio</Text>
        <Text style={styles.email}>antonio@example.com</Text>
        <Text style={styles.phone}>+505 8888-9999</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Editar perfil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Métodos de pago</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Direcciones guardadas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#00A651', marginBottom: 20 },
  infoCard: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
  },
  name: { fontSize: 22, fontWeight: 'bold' },
  email: { fontSize: 16, color: '#555', marginTop: 5 },
  phone: { fontSize: 16, color: '#555', marginTop: 5 },
  button: {
    backgroundColor: '#00A651',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  logoutButton: {
    backgroundColor: '#E30613',
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: 'center',
  },
  logoutText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
