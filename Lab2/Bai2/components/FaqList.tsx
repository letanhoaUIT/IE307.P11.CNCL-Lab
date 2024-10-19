import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FaqListProps {
  feedbacks: string[];
}

const FaqList = ({ feedbacks }: FaqListProps) => (
  <View>
    <Text style={styles.faqTitle}>FAQs</Text>
    {feedbacks.map((item, index) => (
      <Text key={index} style={styles.faqItem}>{item}</Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  faqTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  faqItem: {
    marginVertical: 5,
    color: 'grey',
  },
});

export default FaqList;
