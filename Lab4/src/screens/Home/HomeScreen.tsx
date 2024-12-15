import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProductCard from '../../components/ProductCard';

const HomeScreen = () => {
  const products = [
    { id: '1', name: 'Coffee 1', price: 5, image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Coffee 2', price: 7, image: 'https://via.placeholder.com/150' },
  ];

  const handleAddToCart = (id: string) => {
    console.log(`Added product ${id} to cart.`);
  };

  const handlePressProduct = (id: string) => {
    console.log(`Navigating to product ${id}.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Coffee Shop</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} onAddToCart={handleAddToCart} onPress={handlePressProduct} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});

export default HomeScreen;
