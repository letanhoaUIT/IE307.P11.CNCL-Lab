import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SectionList, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { fruits_vegetables, workouts } from './src/data';

export default function App() {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleSelect = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter(i => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const renderButton = (item: string) => {
    return selectedItems.includes(item) ? "DESELECT" : "SELECT";
  };

return (
    <View style={styles.container}>
      {/* Background cho phần Workouts */}
      <Text style={styles.header1}>FlatList - Workouts</Text>
      <ImageBackground
        source={require('./assets/workout_bg.png')} // Đường dẫn tới hình workout
        style={styles.backgroundImage}
      >
        
        <FlatList
          data={workouts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.itemButton}>
              <Text style={styles.item}>{item.type}</Text>
              <Text style={styles.selectButton} onPress={() => toggleSelect(item.type)}>
                {selectedItems.includes(item.type) ? 'DESELECT' : 'SELECT'}
              </Text>
            </TouchableOpacity>
          )}
        />
      </ImageBackground>

      {/* Background cho phần Fruits & Vegetables */}
      <Text style={styles.header2}>SectionList - Fruits & Vegetables</Text>
      <ImageBackground
        source={require('./assets/veg_fruits_bg.jpg')} // Đường dẫn tới hình fruits & vegetables
        style={styles.backgroundImage}
      >
        
        <SectionList
          sections={fruits_vegetables}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.itemButton}>
              <Text style={styles.item}>{item}</Text>
              <Text style={styles.selectButton} onPress={() => toggleSelect(item)}>
                {selectedItems.includes(item) ? 'DESELECT' : 'SELECT'}
              </Text>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </ImageBackground>
      <Text style={{color : 'red', fontWeight:'bold'}}>SELECTED EXERCISES: </Text>
      <Text style={styles.selectedText}>{selectedItems.join(', ')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
    color: '#0000FF',
    textAlign: 'center',
  },
  header2: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    color: '#0000FF',
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    marginBottom: 20,
    padding: 10,
  },
  itemButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Màu nền trong suốt
    borderRadius: 5,
  },
  item: {
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  selectButton: {
    fontSize: 16,
    color: 'white',
    backgroundColor: '#1e90ff',
    padding: 8,

  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f1f1f1',
    padding: 5,
  },
  selectedText: {
    fontSize: 16,
    // color: 'red',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',

  },
});