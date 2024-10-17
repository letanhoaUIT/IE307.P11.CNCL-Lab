import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface PostHeaderProps {
  avatar: string;
  username: string;
}

const PostHeader = ({ avatar, username }: PostHeaderProps) => (
  <View style={styles.header}>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <Text style={styles.username}>{username}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  username: {
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

export default PostHeader;
