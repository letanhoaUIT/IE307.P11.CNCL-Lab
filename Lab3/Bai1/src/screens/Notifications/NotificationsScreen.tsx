import React from 'react';
import { View, Text, Button } from 'react-native';

export default function NotificationsScreen({ navigation }) {
  return (
    <View>
      <Text>Notifications Screen</Text>
      <Button title="Go to Details" onPress={() => navigation.navigate('NotificationDetails')} />
    </View>
  );
}
