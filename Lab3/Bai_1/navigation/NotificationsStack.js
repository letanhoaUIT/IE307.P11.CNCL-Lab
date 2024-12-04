import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NotificationsScreen from '../screens/NotificationsScreen';
import NotificationDetailsScreen from '../screens/NotificationDetailsScreen';

const Stack = createStackNavigator();

export default function NotificationsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{ headerShown: true, title: 'Notifications' }}
      />
      <Stack.Screen
        name="NotificationDetails"
        component={NotificationDetailsScreen}
        options={{ headerShown: true, title: 'Notification Details',
        }}
      />
    </Stack.Navigator>
  );
}
