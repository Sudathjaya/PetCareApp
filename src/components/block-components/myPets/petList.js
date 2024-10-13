import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Pet1Image from '../../../assets/img/p1.png';
import Pet2Image from '../../../assets/img/p2.png';
import Pet3Image from '../../../assets/img/p3.png';

const pets = [
  { id: '1', name: 'Bella', image: Pet1Image, backgroundColor: '#FFDB6D' },
  { id: '2', name: 'Roudy', image: Pet2Image, backgroundColor: '#6B7DAA' },
  { id: '3', name: 'Furry', image: Pet3Image, backgroundColor: '#F5A282' },
  { id: '4', name: 'Sizer', image: Pet2Image, backgroundColor: '#6B7DAA' },
];

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 3 - 20;

const PetList = ({ navigation }) => {
  const [selectedPet, setSelectedPet] = useState('1');

  const naviagateTo = (item) => {
    setSelectedPet(item.id);
    // navigation.navigate('pet_profile');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => naviagateTo(item)}
      style={styles.container}
    >
      <FastImage
        style={[
          styles.avatar,
          { backgroundColor: item.backgroundColor },
          selectedPet === item.id && styles.selectedAvatar,
        ]}
        resizeMode={FastImage.resizeMode.cover}
        source={item.image}
      />
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View containerStyle={styles.cardContainer}>
      <View style={styles.header}>
        <Icon name="paw" size={24} color="#000" />
        <Text style={styles.headerTitle}>My Pets</Text>
      </View>
      <FlatList
        data={pets}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    margin: 0,
    marginTop: 0,
    height: 'auto',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 50,
  },
  headerTitle: {
    fontSize: 18,
    marginLeft: 10,
    color: '#141415',
    fontFamily: 'Fredoka-Bold',
  },
  listContainer: {
    paddingLeft: 10,
  },
  container: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  selectedAvatar: {
    borderColor: '#c40d42',
    borderWidth: 2,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontFamily: 'Fredoka-Regular',
    color: '#5F5F63'
  },
});

export default PetList;
