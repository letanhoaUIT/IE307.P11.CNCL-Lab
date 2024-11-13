import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen';
import HomeDetailsScreen from '../screens/Home/HomeDetailsScreen';
import NotificationsScreen from '../screens/Notifications/NotificationsScreen';
import NotificationDetailsScreen from '../screens/Notifications/NotificationDetailsScreen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HomeDetails" component={HomeDetailsScreen} />
    </Stack.Navigator>
  );
}

export function NotificationsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="NotificationDetails" component={NotificationDetailsScreen} />
    </Stack.Navigator>
  );
}
