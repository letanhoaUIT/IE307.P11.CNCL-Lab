//21522081-Le Tan Hoa
import React, { useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NoteContext } from '../NodeContext';
import { SettingsContext } from '../SettingsContext';

export default function AddNote({ navigation }) {
  const { addNote } = useContext(NoteContext);
  const { darkMode, fontSize } = useContext(SettingsContext);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    if (!title.trim()) {
      alert('Title cannot be empty');
      return;
    }
    addNote(title, content);
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={darkMode ? styles.containerDark : styles.container}>
      <TextInput
        placeholder="Enter your title"
        placeholderTextColor={darkMode ? '#aaa' : '#666'}
        value={title}
        onChangeText={setTitle}
        style={[
          styles.input,
          {
            fontSize,
            color: darkMode ? '#fff' : '#000',
            backgroundColor: darkMode ? '#555' : '#f9f9f9',
          },
        ]}
      />
      <TextInput
        placeholder="Enter your note"
        placeholderTextColor={darkMode ? '#aaa' : '#666'}
        value={content}
        onChangeText={setContent}
        style={[
          styles.input,
          {
            fontSize,
            color: darkMode ? '#fff' : '#000',
            backgroundColor: darkMode ? '#555' : '#f9f9f9',
          },
        ]}
        multiline
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Icon name="times-circle" size={fontSize + 10} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Icon name="check-circle" size={fontSize + 10} color="green" />
        </TouchableOpacity>
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  cancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
