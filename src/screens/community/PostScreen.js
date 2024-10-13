// components/Post.js

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CommentsScreen from './CommunityScreen';
import { users } from './models';
import moment from 'moment';

const PostScreen = ({ post, user, navigation, onUpdatePost }) => {
  const [isCommentsVisible, setCommentsVisible] = useState(false);

  const handleLike = () => {
    const updatedPost = { ...post, likes: post.likes + 1 };
    onUpdatePost(updatedPost);
  };

  const openUserProfile = () => {
    navigation.navigate('UserProfile', { userId: user.id });
  };

  return (
    <View style={styles.postContainer}>
      {/* User Info */}
      <TouchableOpacity style={styles.userInfo} onPress={openUserProfile}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.timestamp}>
            {moment(post.timestamp).fromNow()}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Post Content */}
      <View style={styles.content}>
        <Text style={styles.postText}>{post.content}</Text>
        {post.image && (
          <Image source={{ uri: post.image }} style={styles.postImage} />
        )}
        {/* Add media handling as needed */}
      </View>

      {/* Interaction Buttons */}
      <View style={styles.interactions}>
        <TouchableOpacity style={styles.interactionButton} onPress={handleLike}>
          <Icon name="heart-outline" size={20} color="#333" />
          <Text style={styles.interactionText}>{post.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.interactionButton}
          onPress={() => setCommentsVisible(true)}
        >
          <Icon name="chatbubble-outline" size={20} color="#333" />
          <Text style={styles.interactionText}>
            {post.comments.length}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.interactionButton}>
          <Icon name="share-social-outline" size={20} color="#333" />
          <Text style={styles.interactionText}>Share</Text>
        </TouchableOpacity>
      </View>

      {/* Comments Modal */}
      <Modal
        visible={isCommentsVisible}
        animationType="slide"
        onRequestClose={() => setCommentsVisible(false)}
      >
        <CommentsScreen
          post={post}
          onClose={() => setCommentsVisible(false)}
          onUpdatePost={onUpdatePost}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    elevation: 2,
  },
  userInfo: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
  userName: { fontWeight: 'bold', fontSize: 16 },
  timestamp: { fontSize: 12, color: '#777' },
  content: { marginBottom: 10 },
  postText: { fontSize: 14, marginBottom: 5 },
  postImage: { width: '100%', height: 200, borderRadius: 10 },
  interactions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#eee',
    paddingTop: 10,
  },
  interactionButton: { flexDirection: 'row', alignItems: 'center' },
  interactionText: { marginLeft: 5, color: '#333' },
});

export default PostScreen;
