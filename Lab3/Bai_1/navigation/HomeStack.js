import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeDetailsScreen from '../screens/HomeDetailScreen';
import NotificationDetailsScreen from '../screens/NotificationDetailsScreen';
import MainBottomTabs from './MainBottomTabs';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Back" component={MainBottomTabs} options={{ headerShown: false }} />
      <Stack.Screen name="HomeDetails" component={HomeDetailsScreen} />
      <Stack.Screen name="NotificationDetails" component={NotificationDetailsScreen} />
      
    </Stack.Navigator>
  );
}
