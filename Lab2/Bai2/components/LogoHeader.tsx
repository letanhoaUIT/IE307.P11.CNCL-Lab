

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface LogoHeaderProps {
  isDarkMode: boolean; // Nhận trạng thái Dark Mode từ SettingsScreen
}

const LogoHeader = ({ isDarkMode }: LogoHeaderProps) => (
  <View style={styles.container}>
    <Image
      source={{ uri: 'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png' }} // Thay thế bằng logo thật
      style={styles.logo}
    />
    <Text style={[styles.appName, isDarkMode ? styles.appNameDark : styles.appNameLight]}>
      My Application
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  appName: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  appNameLight: {
    color: 'black', // Màu đen cho chế độ sáng
  },
  appNameDark: {
    color: 'white', // Màu trắng cho chế độ tối
  },
});

export default LogoHeader;
