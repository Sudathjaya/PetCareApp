import React, { useState } from 'react';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';
import { black } from '../../enums/colors';

const EditProfileScreen = ({ route, navigation }) => {
  const { petData } = route.params;

  const [name, setName] = useState(petData.name);
  const [breed, setBreed] = useState(petData.breed);
  const [age, setAge] = useState(petData.age);
  const [weight, setWeight] = useState(petData.weight);
  const [height, setHeight] = useState(petData.height);
  const [color, setColor] = useState(petData.color);
  const [gender, setGender] = useState(petData.gender);
  const [description, setDescription] = useState(petData.description);
  const [statusHealth, setStatusHealth] = useState(petData.status);
  const [statusMode, setStatusMood] = useState(petData.status);
  const [statusFood, setStatusFood] = useState(petData.status);
  const [images, setImages] = useState(petData.images);

  const handleAddImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        Alert.alert('Error', response.errorMessage);
      } else {
        const newImageUri = response.assets[0].uri;
        setImages([...images, newImageUri]);
      }
    });
  };

  // Handle image deletion
  const handleDeleteImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  const handleSaveProfile = () => {
    // Save the updated profile logic
    navigation.goBack(); // Go back to the profile screen after saving
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Edit Pet Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor={'#888'}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Breed"
        placeholderTextColor={'#888'}
        value={breed}
        onChangeText={setBreed}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor={'#888'}
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        placeholderTextColor={'#888'}
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        placeholderTextColor={'#888'}
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Color"
        placeholderTextColor={'#888'}
        value={color}
        onChangeText={setColor}
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        placeholderTextColor={'#888'}
        value={gender}
        onChangeText={setGender}
      />

      {/* Description Edit */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Describe Bella"
        placeholderTextColor={'#888'}
        value={description}
        onChangeText={setDescription}
        multiline={true}
      />

      {/* Status Edit */}
      <Text style={styles.label}>Bella's Status</Text>
      <TextInput
        style={styles.input}
        placeholder="Health"
        placeholderTextColor={'#888'}
        value={statusHealth}
        onChangeText={setStatusHealth}
      />
      <TextInput
        style={styles.input}
        placeholder="Food"
        placeholderTextColor={'#888'}
        value={statusFood}
        onChangeText={setStatusFood}
      />

     <TextInput
        style={styles.input}
        placeholder="Mode"
        placeholderTextColor={'#888'}
        value={statusMode}
        onChangeText={setStatusMood}
      />

      <Text style={styles.label}>Images</Text>
      <FlatList
        data={images}
        renderItem={({ item, index }) => (
          <View style={styles.imageItem}>
            <Image source={{ uri: item }} style={styles.image} />
            <TouchableOpacity onPress={() => handleDeleteImage(index)} style={styles.deleteImageButton}>
              <Icon name="close-circle" size={20} color="#FF5252" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
      />

      <TouchableOpacity style={styles.addImageButton} onPress={handleAddImage}>
        <Icon name="camera-plus" size={20} color="#FFFFFF" />
        <Text style={styles.addImageButtonText}>Add Image</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Fredoka-Bold',
    color: black,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Fredoka-Regular',
    color: black
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'Fredoka-Bold',
    color: black
  },
  imageItem: {
    position: 'relative',
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  deleteImageButton: {
    position: 'absolute',
    top: -5,
    right: -5,
  },
  addImageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5CB15A',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  addImageButtonText: {
    color: '#FFFFFF',
    marginLeft: 5,
    fontFamily: 'Fredoka-Bold',
  },
  saveButton: {
    backgroundColor: '#5CB15A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 50
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Fredoka-Bold',
  },
});

export default EditProfileScreen;

