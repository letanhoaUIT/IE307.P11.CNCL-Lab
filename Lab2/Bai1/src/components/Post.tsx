// 21522081-Lê Tấn Hòa

import React from 'react';
import { View, StyleSheet } from 'react-native';
import PostHeader from './header';
import PostContent from './content';
import PostFooter from './footer';

interface PostProps {
  post: {
    avatar: string;
    username: string;
    content: string;
    image: string;
    likes: number;
    comments: number;
    shares: number;
  };
}

const Post = ({ post }: PostProps) => (
  <View style={styles.postContainer}>
    <PostHeader avatar={post.avatar} username={post.username} />
    <PostContent content={post.content} image={post.image} />
    <PostFooter
      likes={post.likes}
      comments={post.comments}
      shares={post.shares}
    />
  </View>
);

const styles = StyleSheet.create({
  postContainer: {
    margin: 6,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});

export default Post;
