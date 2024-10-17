import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Post from './src/components/Post';
import { posts } from './src/data';

const App = () => (
  <View style={styles.container}>
    <Text style={styles.header}>Social Media Feed</Text>
    <FlatList
      data={posts}
      renderItem={({ item }) => <Post post={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F3',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'skyblue',
  },
});

export default App;
