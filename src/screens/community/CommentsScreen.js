// components/Comments.js

import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { users } from './models';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

const CommentsScreen = ({ post, onClose, onUpdatePost }) => {
  const [comments, setComments] = useState(post.comments);
  const [commentText, setCommentText] = useState('');

  const addComment = () => {
    if (commentText.trim() === '') return;
    const newComment = {
      id: uuidv4(),
      userId: 'currentUserId', // Replace with actual current user ID
      text: commentText,
      timestamp: new Date().toISOString(),
    };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    onUpdatePost({ ...post, comments: updatedComments });
    setCommentText('');
  };

  const renderItem = ({ item }) => {
    const user = users.find((u) => u.id === item.userId);
    return (
      <View style={styles.commentContainer}>
        <Text style={styles.commentUser}>{user ? user.name : 'Unknown'}</Text>
        <Text style={styles.commentText}>{item.text}</Text>
        <Text style={styles.commentTime}>
          {moment(item.timestamp).fromNow()}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <Icon name="arrow-back" size={25} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Comments</Text>
      </View>

      {/* Comments List */}
      <FlatList
        data={comments}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.commentsList}
      />

      {/* Add Comment */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
          value={commentText}
          onChangeText={setCommentText}
        />
        <TouchableOpacity onPress={addComment} style={styles.sendButton}>
          <Icon name="send" size={20} color="#007AFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  commentsList: { padding: 15 },
  commentContainer: { marginBottom: 15 },
  commentUser: { fontWeight: 'bold', fontSize: 14 },
  commentText: { fontSize: 14, marginVertical: 5 },
  commentTime: { fontSize: 12, color: '#777' },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  sendButton: { justifyContent: 'center' },
});

export default CommentsScreen;
