// 21522081 - Lê Tấn Hòa 
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FaqListProps {
  feedbacks: string[];
  isDarkMode: boolean;
}

const FaqList = ({ feedbacks, isDarkMode }: FaqListProps) => (
  <View style={styles.container}>
    <Text style={[styles.title, isDarkMode && styles.darkText]}>FAQs</Text>
    {feedbacks.length === 0 ? (
      <Text style={isDarkMode ? styles.darkText : null}>No feedback available.</Text>
    ) : (
      feedbacks.map((feedback, index) => (
        <Text key={index} style={isDarkMode ? styles.darkText : null}>
          {feedback}
        </Text>
      ))
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  darkText: {
    color: 'white',
  },
});

export default FaqList;
