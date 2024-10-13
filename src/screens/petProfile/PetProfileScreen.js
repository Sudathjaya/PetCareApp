import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PetGallery from '../../components/block-components/petProfile/petGallery';
import { black } from '../../enums/colors';

const PetProfileScreen = ({ navigation }) => {

  const infoData = [
    { label: 'Age', value: '1y 4m' },
    { label: 'Weight', value: '7.5 kg' },
    { label: 'Height', value: '54 cm' },
    { label: 'Color', value: 'Black' },
    { label: 'Gender', value: 'Female' },
  ];

  const navigateTo = () => {
    const petData = { 
      name: 'Bella', 
     breed: 'Border Collie', 
     age: '1y 4m', 
     weight: '7.5 kg',
     height: '54 cm', 
     color: 'Black', 
     gender: 'Female' }
    navigation.navigate('edit_pet_profile', {petData})
  }

  const renderInfoBox = ({ item }) => (
    <View style={styles.infoBox}>
      <Text style={styles.infoLabel}>{item.label}</Text>
      <Text style={styles.infoText}>{item.value}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.scrollContainer}>
      <FastImage
        style={styles.petImage}
        resizeMode={FastImage.resizeMode.cover}
        source={require('../../assets/img/bella.png')}
      />

      <View style={styles.detailsContainer}>
        <View style={styles.petInfo}>
          <View>
            <Text style={styles.petName}>Bella</Text>
            <Text style={styles.petBreed}>Border Collie</Text>

          </View>
          <TouchableOpacity style={styles.updateButton} onPress={() => navigateTo()}>
            <Text style={styles.updateButtonText}>Update Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.aboutContainer}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>About Bella</Text>
          </View>


          <View style={styles.infoRow}>
            <FlatList
              data={infoData}
              renderItem={renderInfoBox}
              keyExtractor={(item) => item.label}
              numColumns={4}
              columnWrapperStyle={styles.infoRowWrapper}
            />
          </View>

          <Text style={styles.descriptionText}>
            My first dog, which was gifted by my mother for my 20th birthday.
          </Text>
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.sectionTitle}>Bella's Status</Text>

          <View style={styles.statusRow}>
            <View style={styles.statusInfo}>
              <Icon name="heart-pulse" size={20} color="#FF5252" />
              <View style={styles.statusDetails}>
                <Text style={styles.statusLabel}>Health</Text>
                <Text style={styles.statusText}>Abnormal</Text>
                <Text style={styles.statusSubtext}>Last Vaccinated: 2 months ago</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.statusButton}>
              <Text style={styles.statusButtonText}>Contact Vet</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.statusRow}>
            <View style={styles.statusInfo}>
              <Icon name="food" size={20} color="#4CAF50" />
              <View style={styles.statusDetails}>
                <Text style={styles.statusLabel}>Food</Text>
                <Text style={styles.statusText}>Hungry</Text>
                <Text style={styles.statusSubtext}>Last Fed: 1 hour ago</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.statusButton}>
              <Text style={styles.statusButtonText}>Check Food</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.statusRow}>
            <View style={styles.statusInfo}>
              <Icon name="emoticon-sad" size={20} color="#FF9800" />
              <View style={styles.statusDetails}>
                <Text style={styles.statusLabel}>Mood</Text>
                <Text style={styles.statusText}>Abnormal</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <PetGallery />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  petImage: {
    width: '100%',
    height: 250,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    paddingBottom: 10,
  },
  petInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  petName: {
    fontSize: 28,
    color: '#333',
    fontFamily: 'Fredoka-Bold',
  },
  petBreed: {
    fontSize: 16,
    color: '#064E57',
    fontFamily: 'Fredoka-Medium',
  },
  genderIcon: {
    marginLeft: 10,
  },
  aboutContainer: {
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 20,
    fontFamily: 'Fredoka-Regular',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoBox: {
    backgroundColor: '#E0F7FA',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '23%',
  },

  descriptionText: {
    fontSize: 16,
    color: '#777',
    marginTop: 10,
    fontFamily: 'Fredoka-Regular',
  },
  statusContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Fredoka-Bold',
    marginBottom: 10,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  statusInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Fredoka-Regular',
  },
  statusDetails: {
    marginLeft: 10,
    fontFamily: 'Fredoka-Regular',
  },
  statusLabel: {
    fontSize: 16,
    fontFamily: 'Fredoka-Regular',
  },
  statusText: {
    fontSize: 14,
    color: '#FF5252',
    fontFamily: 'Fredoka-Regular',
  },
  statusSubtext: {
    fontSize: 12,
    color: '#999',
    fontFamily: 'Fredoka-Regular',
  },
  statusButton: {
    backgroundColor: '#5CB15A',
    padding: 10,
    borderRadius: 10,
  },
  statusButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Fredoka-Medium',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Fredoka-Bold',
    marginBottom: 10,
  },
  updateButtonContainer: {
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  updateButton: {
    backgroundColor: '#5CB15A',
    padding: 10,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
  },
  updateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Fredoka-Medium',
  },


  infoRow: {
    flex: 1,
  },
  infoRowWrapper: {
    justifyContent: 'space-between',
  },
  infoBox: {
    backgroundColor: '#E0F7FA',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 5,
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: '#757575',
    fontFamily: 'Fredoka-Regular',
  },

  infoText: {
    fontSize: 16,
    fontFamily: 'Fredoka-Regular',
    color: black,
  },
});

export default PetProfileScreen;
