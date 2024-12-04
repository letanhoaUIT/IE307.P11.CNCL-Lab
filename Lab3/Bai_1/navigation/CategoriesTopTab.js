// 21522081 - Lê Tấn Hòa
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Category1Screen from '../screens/Category1Screen';
import Category2Screen from '../screens/Category2Screen';
import Category3Screen from '../screens/Category3Screen';

const Tab = createMaterialTopTabNavigator();

export default function CategoriesTopTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Category1" component={Category1Screen} />
      <Tab.Screen name="Category2" component={Category2Screen} />
      <Tab.Screen name="Category3" component={Category3Screen} />
    </Tab.Navigator>
  );
}
