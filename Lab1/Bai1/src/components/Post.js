import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Post = ({ post }) => {
  // Khởi tạo state cho likes, comments, shares
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [shares, setShares] = useState(post.shares);

  // Xử lý khi nhấn Like
  const handleLike = () => {
    setLikes(prevLikes => (prevLikes === post.likes ? prevLikes + 1 : post.likes));
  };

  // Xử lý khi nhấn Comment
  const handleComment = () => {
    setComments(prevComments => prevComments + 1);
  };

  // Xử lý khi nhấn Share
  const handleShare = () => {
    setShares(prevShares => prevShares + 1);
  };

  return (
    <View>
      {/* Phần nội dung bài đăng */}
      <View style={styles.postContainer}>
        <View style={styles.userInfo}>
          <Image source={{ uri: post.avatar }} style={styles.avatar} />
          <Text style={styles.username}>{post.username}</Text>
        </View>
        <Text style={styles.content}>{post.content}</Text>
        <Image source={{ uri: post.image }} style={styles.postImage} />
        <View style={styles.interactionButtons}>
            <Text style={styles.showStatic}>{likes} Likes</Text>
            <Text style={styles.showStatic}>{comments} Comments</Text>
            <Text style={styles.showStatic}>{shares} Shares</Text>
        </View>
        {/* Đường phân cách giữa nội dung và các nút tương tác */}
        <View style={styles.separator} />

        <View style={styles.interactionButtons}>
          <TouchableOpacity onPress={handleLike} style={styles.button}>
            <Icon name="thumbs-up" size={20} color="black" style={{opacity: 0.5}}/>
            <Text style={styles.buttonText}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleComment} style={styles.button}>
            <Icon name="comment" size={20} color="black" style={{opacity: 0.5}}/>
            <Text style={styles.buttonText}>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleShare} style={styles.button}>
            <Icon name="share" size={20} color="black" style={{opacity: 0.5}}/>
            <Text style={styles.buttonText}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Định nghĩa style
const styles = StyleSheet.create({
  postContainer: {
    margin: 6,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    
  },
  userInfo: {
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
  content: {
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  showStatic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
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
  separator: {
    height: 1,
    marginVertical: 20,
    backgroundColor: '#cccccc'
  },
  button: {
    flexDirection: 'row',  
    alignItems: 'center', 
  }
});

export default Post;
