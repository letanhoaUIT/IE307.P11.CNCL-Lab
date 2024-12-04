//21522081-Le Tan Hoa
import React, { useContext } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { SettingsContext } from '../SettingsContext';

export default function SettingsScreen() {
  const { darkMode, setDarkMode, fontSize, setFontSize } = useContext(SettingsContext);

  return (
    <View style={darkMode ? styles.containerDark : styles.container}>
      <View style={styles.setting}>
        <Text style={[styles.label, {fontSize, color: darkMode ? '#fff' : '#000' }]}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
      <View style={styles.setting}>
        <Text style={[styles.label, {fontSize, color: darkMode ? '#fff' : '#000' }]}>Font Size</Text>
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={12}
          maximumValue={36}
          step={2}
          value={fontSize}
          onValueChange={setFontSize}
          minimumTrackTintColor="tomato"
          maximumTrackTintColor="gray"
          thumbTintColor="tomato"
        />
        <Text style={[styles.fontSizePreview, { fontSize, color: darkMode ? '#fff' : '#000' }]}>
          {fontSize}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  containerDark: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333',
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 18,
  },
  fontSizePreview: {
    marginTop: 10,
  },
});
