//21522081-Le Tan Hoa
import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { NoteContext } from '../NodeContext';
import { SettingsContext } from '../SettingsContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function NoteList({ navigation }) {
  const { notes, deleteNote } = useContext(NoteContext);
  const { darkMode, fontSize } = useContext(SettingsContext);

  return (
    <View style={darkMode ? styles.containerDark : styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteCard}>
            <Text style={[styles.noteTitle, { fontSize, color: darkMode ? '#fff' : '#000' }]}>{item.title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('EditNote', item)}>
              <Icon name="edit" size={24} color={darkMode ? '#fff' : 'blue'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteNote(item.id)}>
              <Icon name="delete" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddNote')}>
        <Icon name="add" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  containerDark: { flex: 1, padding: 20, backgroundColor: '#333' },
  noteCard: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  noteTitle: { fontWeight: 'bold', flex: 1 },
  addButton: { position: 'absolute', bottom: 30, right: 30, backgroundColor: 'orange', borderRadius: 50, padding: 15 },
});
