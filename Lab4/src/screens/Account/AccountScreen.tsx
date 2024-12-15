import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Information</Text>
      <Button title="Edit Profile" onPress={() => console.log('Edit Profile')} />
      <Button title="Logout" onPress={() => console.log('Logout')} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default AccountScreen;
