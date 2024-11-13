import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeDetailsScreen({ navigation }) {
  return (
    <View>
      <Text>Home Details Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
