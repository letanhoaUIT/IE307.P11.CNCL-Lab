// 21522081 - Lê Tấn Hòa
import React, { useState } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import AccountScreen from '../screens/AccountScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import CategoriesTopTabs from './CategoriesTopTab'; 
import NotificationsScreen from '../screens/NotificationsScreen';
import HelpScreen from '../screens/HelpScreen';
import HomeScreen from '../screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen 
      name="HomeScreen" 
      component={HomeScreen} 
      options={{
        drawerIcon: ({ color }) => (
          <Ionicons name="home-outline" size={24} color={color} />
        )
      }}
    />
    <Drawer.Screen 
      name="Notifications" 
      component={NotificationsScreen} 
      options={{
        drawerIcon: ({ color }) => (
          <Ionicons name="notifications-outline" size={24} color={color} />
        )
      }}
    />
    <Drawer.Screen 
      name="Help" 
      component={HelpScreen} 
      options={{
        drawerIcon: ({ color }) => (
          <Ionicons name="help-circle-outline" size={24} color={color} />
        )
      }}
    />
  </Drawer.Navigator>
);


export default function MainBottomTabs() {
  const [favoritesCount, setFavoritesCount] = useState(3);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Categories') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={MainDrawer}  options={{ headerShown: false }}  />

      <Tab.Screen name="Categories" 
      component={CategoriesTopTabs} 
      options={{headerShown: true}} />
      <Tab.Screen 
        name="Favorites" 
        component={FavoritesScreen} 
        options={{
          tabBarBadge: favoritesCount > 0 ? favoritesCount : null, headerShown: true
        }}
      />
      <Tab.Screen name="Account" component={AccountScreen} 
      options={{headerShown: true}}
      />
    </Tab.Navigator>
  );
}
