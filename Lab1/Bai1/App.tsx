  //Lê Tấn Hòa - 21522081

import React from 'react';
import { ScrollView, StyleSheet, View, Text, Dimensions } from 'react-native';
import { posts } from './src/data';
import Post from './src/components/Post';
const { height } = Dimensions.get('window');  
const App = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.headerText}>Social Media Feed</Text>
      </View>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F3',
  },
  header: {
    backgroundColor: 'skyblue', 
    padding: 20,
    textAlign: 'center',
    marginTop: height * 0.07,
    position: 'relative',
    width: '100%',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
