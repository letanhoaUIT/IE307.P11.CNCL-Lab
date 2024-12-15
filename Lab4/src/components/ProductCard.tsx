import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
  onPress: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(product.id)}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.addButton} onPress={() => onAddToCart(product.id)}>
        <Text style={styles.addButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { margin: 10, padding: 10, backgroundColor: '#fff', borderRadius: 8, alignItems: 'center' },
  image: { width: 100, height: 100, borderRadius: 8 },
  name: { fontSize: 16, fontWeight: 'bold', marginVertical: 5 },
  price: { fontSize: 14, color: '#666' },
  addButton: { marginTop: 10, paddingVertical: 5, paddingHorizontal: 10, backgroundColor: '#2d88ff', borderRadius: 5 },
  addButtonText: { color: '#fff', fontSize: 14 },
});

export default ProductCard;
