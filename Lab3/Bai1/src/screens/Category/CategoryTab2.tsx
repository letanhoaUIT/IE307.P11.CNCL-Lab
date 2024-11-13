// 21522081 - Lê Tấn Hòa
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CategoryTab2Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Categories 2</Text>
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
    fontSize: 20, 
  },
});
