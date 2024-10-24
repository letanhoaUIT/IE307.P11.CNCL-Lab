// screens/AccountScreen.js
import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../AuthContext';

export default function AccountScreen() {
  const { logout } = useContext(AuthContext);

  return (
    <View>
      <Text>Account Screen</Text>
      <Button title="LOG OUT" onPress={logout} />
    </View>
  );
}
