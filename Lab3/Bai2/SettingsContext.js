//21522081-Le Tan Hoa
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  // Hàm tải cài đặt từ AsyncStorage
  const loadSettings = async () => {
    try {
      const storedDarkMode = await AsyncStorage.getItem('darkMode');
      const storedFontSize = await AsyncStorage.getItem('fontSize');

      if (storedDarkMode !== null) setDarkMode(JSON.parse(storedDarkMode));
      if (storedFontSize !== null) setFontSize(parseInt(storedFontSize, 10));
    } catch (error) {
      console.error('Failed to load settings from AsyncStorage', error);
    }
  };

  // Hàm lưu Dark Mode
  const updateDarkMode = async (value) => {
    try {
      await AsyncStorage.setItem('darkMode', JSON.stringify(value));
      setDarkMode(value);
    } catch (error) {
      console.error('Failed to save darkMode to AsyncStorage', error);
    }
  };

  // Hàm lưu Font Size
  const updateFontSize = async (value) => {
    try {
      await AsyncStorage.setItem('fontSize', JSON.stringify(value));
      setFontSize(value);
    } catch (error) {
      console.error('Failed to save fontSize to AsyncStorage', error);
    }
  };

  // Load cài đặt khi ứng dụng khởi động
  useEffect(() => {
    loadSettings();
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        darkMode,
        setDarkMode: updateDarkMode,
        fontSize,
        setFontSize: updateFontSize,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
