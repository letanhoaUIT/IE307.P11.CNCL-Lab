import React from 'react';
import { ScrollView } from 'react-native';
import { posts } from './src/data';
import Post from './src/components/Post';

const App = () => {
  return (
    <ScrollView>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </ScrollView>
  );
};

export default App;
