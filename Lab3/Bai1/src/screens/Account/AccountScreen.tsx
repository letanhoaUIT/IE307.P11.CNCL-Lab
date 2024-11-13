// 21522081 - Lê Tấn Hòa
import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AuthContext } from '../AuthContext';

export default function AccountScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account Screen</Text>
      <Button title="LOG OUT" onPress={logout} />
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
    marginBottom: 20,
  },
});
