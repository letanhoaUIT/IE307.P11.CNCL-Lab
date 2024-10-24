// screens/RegisterScreen.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function RegisterScreen({ navigation }) {
  return (
    <View>
      <Text>Register</Text>
      <TextInput placeholder="Email" />
      <TextInput placeholder="Password" secureTextEntry />
      <Button title="Register" onPress={() => alert('Account created')} />
      <Button title="Login now!" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
