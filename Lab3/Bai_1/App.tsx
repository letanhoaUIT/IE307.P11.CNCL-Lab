
// 21522081 - Lê Tấn Hòa
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext, AuthProvider } from './AuthContext';
import AuthStack from './navigation/AuthStack';
import HomeStack from './navigation/HomeStack';


const Stack = createStackNavigator();

function AppNavigator() {
  const context = useContext(AuthContext);
  if (!context) {
    return null; 
  }

  const { isAuthenticated } = context;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="HomeStack" component={HomeStack} />
        ) : (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
