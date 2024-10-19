import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

interface FeedbackInputProps {
  onSubmit: (feedback: string) => void;
  isDarkMode: boolean;
}

const FeedbackInput = ({ onSubmit, isDarkMode }: FeedbackInputProps) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (feedback.trim()) {
      onSubmit(feedback);
      setFeedback('');  // Reset trường nhập phản hồi
    } else {
      Alert.alert('Error', 'Feedback cannot be empty!');
    }
  };

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          isDarkMode && styles.inputDark,
        ]}
        placeholder="Enter your feedback"
        placeholderTextColor={isDarkMode ? '#bbb' : '#666'}
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
    color: 'black',
  },
  inputDark: {
    borderColor: '#555',
    backgroundColor: '#222',
    color: 'white',
  },
});

export default FeedbackInput;
