import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

interface FeedbackInputProps {
  onSubmit: (feedback: string) => void;
}

const FeedbackInput = ({ onSubmit }: FeedbackInputProps) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (feedback.trim()) {
      onSubmit(feedback);
      Alert.alert('Thank you for your feedback!'); // Hiển thị thông báo
      setFeedback(''); // Reset trường nhập phản hồi
    }
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Enter your feedback"
        value={feedback}
        onChangeText={setFeedback}
        multiline
        numberOfLines={4}
      />
      <Button title="Send Feedback" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default FeedbackInput;
