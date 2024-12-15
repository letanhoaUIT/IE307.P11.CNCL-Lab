import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface Category {
  id: string;
  name: string;
  image: string;
}

interface CategoryCardProps {
  category: Category;
  onPress: (categoryId: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(category.id)}>
      <Image source={{ uri: category.image }} style={styles.image} />
      <Text style={styles.name}>{category.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { margin: 10, alignItems: 'center' },
  image: { width: 80, height: 80, borderRadius: 8 },
  name: { fontSize: 14, marginTop: 5 },
});

export default CategoryCard;
