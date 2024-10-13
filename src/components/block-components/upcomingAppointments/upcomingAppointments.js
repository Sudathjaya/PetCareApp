import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Pet1Image from '../../../assets/img/p1.png';
import Pet2Image from '../../../assets/img/p2.png';
import Pet3Image from '../../../assets/img/p3.png';
import UpcomingAppointmentsScreen from '../../../screens/appointments/upcomingAppointmentsScreen';



const pets = [
  { id: '1', name: 'Bella', image: Pet1Image, backgroundColor: '#FFDB6D' },
  { id: '2', name: 'Roudy', image: Pet2Image, backgroundColor: '#6B7DAA' },
  { id: '3', name: 'Furry', image: Pet3Image, backgroundColor: '#F5A282' },
];

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 3 - 20;

const UpcomingAppointments = ({ navigation }) => {
  const [selectedPet, setSelectedPet] = useState('1');

  const naviagateTo = (item) => {
    setSelectedPet(item.id);
    // navigation.navigate('pet_profile');
  };

  return (
    <Card containerStyle={styles.cardContainer}>
        <UpcomingAppointmentsScreen />
    </Card>
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
    marginTop: 15,
    height: 'auto',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#141415',
  },
  listContainer: {
    paddingLeft: 10,
  },
  petCard: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderRadius: 15,
    height: 130,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  petImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  petName: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default UpcomingAppointments;

