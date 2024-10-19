import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface ToggleSwitchProps {
  label: string;
  value: boolean;
  onToggle: () => void;
}

const ToggleSwitch = ({ label, value, onToggle }: ToggleSwitchProps) => (
  <View style={styles.switchContainer}>
    <Text>{label}</Text>
    <Switch value={value} onValueChange={onToggle} />
  </View>
);

const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default ToggleSwitch;
