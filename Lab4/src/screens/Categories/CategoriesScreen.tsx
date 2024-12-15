import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CategoryCard from '../../components/CategoryCard';

const CategoriesScreen = () => {
  const categories = [
    { id: '1', name: 'Hot Deals', image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'New Arrivals', image: 'https://via.placeholder.com/150' },
  ];

  const handlePressCategory = (id: string) => {
    console.log(`Selected category ${id}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CategoryCard category={item} onPress={handlePressCategory} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});

export default CategoriesScreen;
