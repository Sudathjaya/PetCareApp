// components/PostCreationForm.js

import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { v4 as uuidv4 } from 'uuid';
import * as ImagePicker from 'react-native-image-picker';

const PostCreationForm = ({ onSubmit, onCancel }) => {
  const [content, setContent] = useState('');
  const [imageUri, setImageUri] = useState(null);

  const pickImage = () => {
    ImagePicker.launchImageLibrary(
      { mediaType: 'photo', quality: 0.7 },
      (response) => {
        if (response.didCancel || response.errorCode) {
          // Handle cancel or error
          return;
        }
        const uri = response.assets[0].uri;
        setImageUri(uri);
      }
    );
  };

  const submitPost = () => {
    if (content.trim() === '' && !imageUri) return;
    const newPost = {
      id: uuidv4(),
      userId: 'currentUserId', // Replace with actual user ID
      content,
      image: imageUri,
      media: null,
      timestamp: new Date().toISOString(),
      likes: 0,
      comments: [],
    };
    onSubmit(newPost);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={onCancel}>
            <Icon name="close" size={30} color="#007AFF" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Create Post</Text>
          <TouchableOpacity onPress={submitPost}>
            <Text style={styles.postButton}>Post</Text>
          </TouchableOpacity>
        </View>

        {/* Post Content */}
        <View style={styles.form}>
          <TextInput
            style={styles.textInput}
            placeholder="What's on your mind?"
            multiline
            value={content}
            onChangeText={setContent}
          />

          {imageUri && (
            <Image source={{ uri: imageUri }} style={styles.selectedImage} />
          )}

          {/* Add media options as needed */}
        </View>
      </ScrollView>

      {/* Media Options */}
      <View style={styles.mediaOptions}>
        <TouchableOpacity onPress={pickImage} style={styles.mediaButton}>
          <Icon name="image-outline" size={25} color="#007AFF" />
          <Text style={styles.mediaText}>Photo</Text>
        </TouchableOpacity>
        {/* Add more media options like Video, GIF, etc. */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  postButton: { color: '#007AFF', fontSize: 16, fontWeight: 'bold' },
  form: { padding: 15 },
  textInput: { fontSize: 16, minHeight: 100 },
  selectedImage: { width: '100%', height: 200, marginTop: 10, borderRadius: 10 },
  mediaOptions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    justifyContent: 'space-around',
    backgroundColor: '#f9f9f9',
  },
  mediaButton: { alignItems: 'center' },
  mediaText: { marginTop: 5, color: '#007AFF' },
});

export default PostCreationForm;
