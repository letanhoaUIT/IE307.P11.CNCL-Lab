//21522081-Le Tan Hoa
import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NoteList from './screens/NoteList';
import AddNote from './screens/AddNote';
import EditNote from './screens/EditNote';
import SettingsScreen from './screens/SettingScreen';
import NoteProvider from './NodeContext';
import SettingsProvider, { SettingsContext } from './SettingsContext';
import { Text } from 'react-native';
import * as FileSystem from 'expo-file-system';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const loadDatabase = async () => {
  const dbPath = `${FileSystem.documentDirectory}SQLite/notes.db`;
  const dbAsset = require('./assets/notes.db');

  const { exists } = await FileSystem.getInfoAsync(dbPath);
  if (!exists) {
    await FileSystem.makeDirectoryAsync(`${FileSystem.documentDirectory}SQLite`, { intermediates: true });
    await FileSystem.downloadAsync(dbAsset.uri, dbPath);
  }
};

function NotesStack() {
  const { darkMode } = useContext(SettingsContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: darkMode ? '#333' : '#fff',
        },
        headerTitleStyle: {
          color: darkMode ? '#fff' : '#000',
        },
        headerTintColor: darkMode ? '#fff' : '#000',
      }}
    >
      <Stack.Screen name="NoteList" component={NoteList} options={{ title: 'Notes' }} />
      <Stack.Screen name="AddNote" component={AddNote} options={{ title: 'Add Note' }} />
      <Stack.Screen name="EditNote" component={EditNote} options={{ title: 'Edit Note' }} />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  const { darkMode } = useContext(SettingsContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Notes') {
            iconName = 'note';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: darkMode ? '#333' : '#fff',
        },
      })}
    >
      <Tab.Screen
        name="Notes"
        component={NotesStack}
        options={{ headerShown: false }} // Tắt header của Tab "Notes"
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerStyle: {
            backgroundColor: darkMode ? '#333' : '#fff',
          },
          headerTitleStyle: {
            color: darkMode ? '#fff' : '#000',
          },
          headerTintColor: darkMode ? '#fff' : '#000',
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadDatabase()
      .then(() => setIsLoaded(true))
      .catch((error) => console.error('Error loading database:', error));
  }, []);

  if (!isLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <SettingsProvider>
      <NoteProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </NoteProvider>
    </SettingsProvider>
  );
}
