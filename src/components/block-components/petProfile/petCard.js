import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import constants from '../../../config/constants';

const { NavigationScreens } = constants.Navigation;

const PetCard = ({navigation}) => {

    const naviagateTo = (item) => {
        navigation.navigate(NavigationScreens.PET_PROFILE);
      };

  return (
    <View>
      <View style={styles.header}>
        <AntDesign name="profile" size={20} color="#000" />
        <Text style={styles.headerTitle}>Bella's Profile</Text>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.infoRow}>
          <Icon name="cake-variant" size={20} color="#FFA726" />
          <Text style={styles.infoText}>Age: 3 Years</Text>
        </View>

        <View style={styles.infoRow}>
          <Icon name="dog" size={20} color="#FF7043" />
          <Text style={styles.infoText}>Breed: Persian Cat</Text>
        </View>
          <TouchableOpacity onPress={()=>naviagateTo()}>
          <View style={styles.infoRow}>
          <Icon name="more" size={20} color="#42A5F5" />
          <Text style={styles.infoText}>View more..</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    marginLeft: 10,
    color: '#141415',
    fontFamily: 'Fredoka-Bold'
  },
  petImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginBottom: 30,
    borderWidth: 4,
    borderColor: '#FFEB3B',
  },
  profileCard: {
    paddingLeft: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#424242',
    fontFamily: 'Fredoka-Regular'
  },
});

export default PetCard;

