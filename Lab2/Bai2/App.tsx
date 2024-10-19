import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import SettingsScreen from './components/SettingScreen';

const App = () => (
  <SafeAreaView style={styles.container}>
    <SettingsScreen />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
