// 21522081 - Lê Tấn Hòa 

import React, { useState } from 'react';
import { View, Text, Switch, ScrollView, StyleSheet, Alert } from 'react-native';
import LogoHeader from './LogoHeader';
import FeedbackInput from './FeedbackInput';
import FaqList from './FaqList';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [feedbackList, setFeedbackList] = useState<string[]>([]);

  const handleFeedbackSubmit = (feedback: string) => {
    setFeedbackList((prevList) => [feedback, ...prevList]);

    // Hiển thị thông báo nếu công tắc thông báo bật
    if (isNotificationsEnabled) {
      Alert.alert('Notification', 'Thank you for your feedback!');
    }
  };

  return (
    <ScrollView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <LogoHeader isDarkMode={isDarkMode}/>

      <View style={styles.switchContainer}>
        <Text style={isDarkMode ? styles.darkText : null}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
      </View>

      <View style={styles.switchContainer}>
        <Text style={isDarkMode ? styles.darkText : null}>Notifications</Text>
        <Switch value={isNotificationsEnabled} onValueChange={setIsNotificationsEnabled} />
      </View>

      <FeedbackInput onSubmit={handleFeedbackSubmit} isDarkMode={isDarkMode} />

      <FaqList feedbacks={feedbackList} isDarkMode={isDarkMode} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F2F3',
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  darkText: {
    color: 'white',
  },
});

export default SettingsScreen;
