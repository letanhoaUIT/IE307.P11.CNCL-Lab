//21522081-Le Tan Hoa
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // Hàm tải dữ liệu notes từ AsyncStorage
  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem('notes');
      if (storedNotes !== null) {
        setNotes(JSON.parse(storedNotes));
      }
    } catch (error) {
      console.error('Failed to load notes from AsyncStorage:', error);
    }
  };

  // Hàm lưu notes vào AsyncStorage
  const saveNotes = async (updatedNotes) => {
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(updatedNotes));
    } catch (error) {
      console.error('Failed to save notes to AsyncStorage:', error);
    }
  };

  // Thêm ghi chú mới
  const addNote = (title, content) => {
    const newNote = {
      id: Date.now().toString(),
      title,
      content,
    };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  // Cập nhật ghi chú
  const updateNote = (id, title, content) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, title, content } : note
    );
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  // Xóa ghi chú
  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    saveNotes(updatedNotes);
  };

  // Tải dữ liệu khi ứng dụng khởi động
  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <NoteContext.Provider value={{ notes, addNote, updateNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
