import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CartScreen = () => {
  const cartItems = [
    { id: '1', name: 'Coffee 1', price: 5, quantity: 2 },
    { id: '2', name: 'Coffee 2', price: 7, quantity: 1 },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Text>{item.quantity} x ${item.price}</Text>
          </View>
        )}
      />
      <Text style={styles.total}>Total: $17</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  item: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  total: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
});

export default CartScreen;
