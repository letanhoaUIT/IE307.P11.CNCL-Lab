import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SettingsScreen from './components/SettingScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SettingsScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F3',
  },
});

export default App;
