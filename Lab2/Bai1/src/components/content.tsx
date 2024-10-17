import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface PostContentProps {
  content: string;
  image: string;
}

const PostContent = ({ content, image }: PostContentProps) => (
  <View>
    <Text style={styles.content}>{content}</Text>
    <Image source={{ uri: image }} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  content: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
});

export default PostContent;
