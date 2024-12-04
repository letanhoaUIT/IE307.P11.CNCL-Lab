import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notifications Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('NotificationDetails')}
      >
        <Text style={styles.buttonText}>Go to Details</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF', 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 5, 
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
