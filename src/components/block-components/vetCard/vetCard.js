import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { white } from '../../../enums/colors';
import { useNavigation } from '@react-navigation/native';

const VetCard = ({ vet }) => {

  const navigation = useNavigation();

  const navigationTo = ()=>{
    navigation.navigate('vet_profile')
  }
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <FastImage
          style={styles.petImage}
          resizeMode={FastImage.resizeMode.cover}
          source={vet.image} // Using local image from vet object
        />
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.vetName}>{vet.name}</Text>
        <Text style={styles.vetTitle}>{vet.degree}</Text>

        <View style={styles.ratingRow}>
          {[...Array(5)].map((_, index) => (
            <Icon key={index} name="star" size={20} color="#FFD700" />
          ))}
          <Text style={styles.ratingText}>{vet.rating} ({vet.reviews} reviews)</Text>
        </View>

        <View style={styles.tagRow}>
          <Text style={styles.tag}>{vet.tag}</Text>
          <View style={styles.infoRow}>
            <Icon name="location-on" size={16} color="#666" />
            <Text style={styles.infoText}>{vet.distance} km</Text>
            <Icon name="attach-money" size={16} color="#666" />
            <Text style={styles.infoText}>{vet.price}$</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.bookButton} onPress={()=> navigationTo()}>
            <Text style={styles.bookButtonText}>Book Appointment</Text>
            <Icon name="arrow-forward" size={20} color="#FFF" />
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 170,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginHorizontal: 8,
    padding: 10,
    marginTop: 5
  },
  infoSection: {
    flex: 1,
    marginLeft: 15,
  },
  vetName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  vetTitle: {
    fontSize: 14,
    color: '#999',
    marginVertical: 5,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  ratingText: {
    fontSize: 8,
    marginLeft: 5,
    color: '#333',
  },
  tagRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  tag: {
    backgroundColor: '#e0e0e0',
    borderRadius: 15,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginRight: 10,
    fontSize: 12,
    color: '#666',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    marginHorizontal: 5,
    fontSize: 12,
    color: '#666',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  petImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  lastVisit: {
    fontSize: 12,
    color: '#666',
  },
  bookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#5CB15A',
    borderRadius: 8,
  },
  bookButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 5,
    color: white
  },
});

export default VetCard;
