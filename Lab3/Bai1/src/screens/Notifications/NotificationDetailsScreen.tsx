import React from 'react';
import { View, Text, Button } from 'react-native';

export default function NotificationDetailsScreen({ navigation }) {
  return (
    <View>
      <Text>Notification Details Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
