import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import NotificationsStack from './StackNavigator';
import HelpScreen from '../screens/Help/HelpScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="MainTabs">
      <Drawer.Screen name="MainTabs" component={BottomTabNavigator} options={{ title: 'Home' }} />
      <Drawer.Screen name="NotificationsStack" component={NotificationsStack} options={{ title: 'Notifications' }} />
      <Drawer.Screen name="Help" component={HelpScreen} />
    </Drawer.Navigator>
  );
}
