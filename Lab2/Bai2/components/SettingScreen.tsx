import React, { useState } from 'react';
import { View, Text, Switch, Button, ScrollView, StyleSheet } from 'react-native';
import FeedbackInput from './FeedbackInput';
import FaqList from './FaqList';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [feedbackList, setFeedbackList] = useState<string[]>([]);

  const handleFeedbackSubmit = (feedback: string) => {
    if (feedback.trim()) {
      setFeedbackList((prevList) => [feedback, ...prevList]);
    }
  };

  return (
    <ScrollView style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>Settings & Feedback</Text>
      <View style={styles.switchContainer}>
        <Text>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
      </View>
      <View style={styles.switchContainer}>
        <Text>Enable Notifications</Text>
        <Switch value={isNotificationsEnabled} onValueChange={setIsNotificationsEnabled} />
      </View>

      <FeedbackInput onSubmit={handleFeedbackSubmit} />
      <FaqList feedbacks={feedbackList} />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F2F3',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  darkText: {
    color: 'white',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default SettingsScreen;
