import React from 'react';
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <Text style={styles.title}>Look At</Text>
        <Text style={styles.greeting}>Hola, "Usuario"</Text>
      </View>

 
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {Array(6).fill(0).map((_, index) => (
          <View key={index} style={styles.card}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100x100' }}
              style={styles.image}
            />
            <Text style={styles.courseTitle}>Java Script</Text>
            <Text style={styles.courseDescription}>Descripción del curso aquí</Text>
          </View>
        ))}
      </ScrollView>

  
      <View style={styles.footer}>
        <Text style={styles.footerItem}>Inicio</Text>
        <Text style={styles.footerItem}>Cursos</Text>
        <Text style={styles.footerItem}>Cuenta</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#333',
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  greeting: {
    color: '#fff',
    marginTop: 10,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  card: {
    width: 150,
    height: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  courseTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  courseDescription: {
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#333',
  },
  footerItem: {
    color: '#fff',
    fontSize: 16,
  },
});
