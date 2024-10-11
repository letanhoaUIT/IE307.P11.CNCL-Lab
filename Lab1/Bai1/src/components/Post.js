import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [shares, setShares] = useState(post.comments);

const handleLike = () => {
  setLikes(prevLikes => (prevLikes === post.likes ? prevLikes + 1 : post.likes));
};
const handleComment = () => {
  setComments(prevComments => prevComments + 1);
};
const handleShare = () => {
  setShares(prevShares => prevShares + 1);
};


  return (
    <View style={styles.postContainer}>
      <View style={styles.userInfo}>
        <Image source={{ uri: post.avatar }} style={styles.avatar} />
        <Text style={styles.username}>{post.username}</Text>
      </View>
      <Text style={styles.content}>{post.content}</Text>
      <Image source={{ uri: post.image }} style={styles.postImage} />
      <View style={styles.interactionButtons}>
        <TouchableOpacity onPress={handleLike}>
          <Text style={styles.buttonText}>Like ({likes})</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleComment}>
          <Text style={styles.buttonText}>Comment ({comments})</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShare}>
          <Text style={styles.buttonText}>Share ({shares})</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: { margin: 10, padding: 10, backgroundColor: '#fff', borderRadius: 5 },
  userInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  username: { marginLeft: 10, fontWeight: 'bold' },
  content: { marginBottom: 10 },
  postImage: { width: '100%', height: 200, borderRadius: 5 },
  interactionButtons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  buttonText: { fontWeight: 'bold', color: '#007BFF' },
});

export default Post;
