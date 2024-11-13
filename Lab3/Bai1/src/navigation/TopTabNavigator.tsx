import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CategoryTab1 from '../screens/Category/CategoryTab1';
import CategoryTab2 from '../screens/Category/CategoryTab2';
import CategoryTab3 from '../screens/Category/CategoryTab3';

const TopTab = createMaterialTopTabNavigator();

export default function TopTabNavigator() {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Tab1" component={CategoryTab1} options={{ title: 'Category 1' }} />
      <TopTab.Screen name="Tab2" component={CategoryTab2} options={{ title: 'Category 2' }} />
      <TopTab.Screen name="Tab3" component={CategoryTab3} options={{ title: 'Category 3' }} />
    </TopTab.Navigator>
  );
}
