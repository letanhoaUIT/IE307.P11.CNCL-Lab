import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface PostFooterProps {
  likes: number;
  comments: number;
  shares: number;
}

const PostFooter = ({ likes, comments, shares }: PostFooterProps) => {
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => setLikeCount(prev => prev + 1);

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={handleLike} style={styles.button}>
        <Icon name="thumbs-up" size={20} color="black" />
        <Text style={styles.text}>{likeCount} Likes</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{comments} Comments</Text>
      <Text style={styles.text}>{shares} Shares</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 6,
    fontWeight: 'bold',
  },
});

export default PostFooter;
