import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Category1Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Category1Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
