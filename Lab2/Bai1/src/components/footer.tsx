// 21522081-Lê Tấn Hòa

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface PostFooterProps {
  likes: number;
  comments: number;
  shares: number;
}

const PostFooter = ({ likes, comments, shares }: PostFooterProps) => {
  // Khởi tạo state cho likes, comments, shares
  const [likeCount, setLikeCount] = useState(likes);
  const [commentCount, setCommentCount] = useState(comments);
  const [shareCount, setShareCount] = useState(shares);

  // Xử lý khi nhấn Like
  const handleLike = () => {
    setLikeCount((prevLikes) => (prevLikes === likes ? prevLikes + 1 : likes));
  };

  // Xử lý khi nhấn Comment
  const handleComment = () => {
    setCommentCount((prevComments) => prevComments + 1);
  };

  // Xử lý khi nhấn Share
  const handleShare = () => {
    setShareCount((prevShares) => prevShares + 1);
  };

  return (
    <View>
      <View style={styles.showStatic}>
        <Text style={styles.staticText}>{likeCount} Likes</Text>
        <Text style={styles.staticText}>{commentCount} Comments</Text>
        <Text style={styles.staticText}>{shareCount} Shares</Text>
      </View>

      <View style={styles.separator} />

      {/* Các nút tương tác */}
      <View style={styles.interactionButtons}>
        <TouchableOpacity onPress={handleLike} style={styles.button}>
          <FontAwesome name="thumbs-up" size={20} color="black" style={{ opacity: 0.5 }} />
          <Text style={styles.buttonText}>Like</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleComment} style={styles.button}>
          <FontAwesome name="comment" size={20} color="black" style={{ opacity: 0.5 }} />
          <Text style={styles.buttonText}>Comment</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleShare} style={styles.button}>
          <FontAwesome name="share" size={20} color="black" style={{ opacity: 0.5 }} />
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    showStatic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  staticText: {
    color: 'grey',
  },
  interactionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 1,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 6,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
    separator: {
    height: 1,
    marginVertical: 20,
    backgroundColor: '#cccccc'
  },
});

export default PostFooter;
