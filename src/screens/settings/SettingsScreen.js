import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal, FlatList, Alert, Pressable, ScrollView, } from 'react-native';
import { black, gray, greenVarientOne, hexWhite, lightGreen } from '../../enums/colors';
import { loggedInState } from '../../recoil/atoms';
import { useSetRecoilState } from 'recoil';
import { Switch } from 'react-native-elements';

const SettingsScreen = ({ navigation }) => {
  const [ownerName, setOwnerName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [address, setAddress] = useState('123 Main St, Springfield');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const [vetName, setVetName] = useState('');
  const [vetContact, setVetContact] = useState('');
  const [receiveEmailNotifications, setReceiveEmailNotifications] = useState(false);
  const [languagePreference, setLanguagePreference] = useState('English');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const setAuthState = useSetRecoilState(loggedInState);


  const languageOptions = ['English', 'Sinhala', 'Tamil'];

  const handleSaveOwnerDetails = () => {
    // Add validation logic here if necessary
    Alert.alert('Settings Saved', 'Your account settings have been saved.');
  };

  const handleAddNewPet = () => {
    navigation.navigate('add_pet_profile');
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleLanguageSelect = (language) => {
    setLanguagePreference(language);
    toggleModal(); // Close modal after selecting
  };

  const handleLogout = (value) => {
    setAuthState(false)
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Account Settings</Text>
        <TouchableOpacity style={styles.addPetButton} onPress={handleAddNewPet}>
          <Icon name="plus-circle" size={20} color="#FFFFFF" />
          <Text style={styles.addPetButtonText}>Add New Pet</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Owner Name"
          value={ownerName}
          onChangeText={setOwnerName} />

        {/* Email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address" />

        {/* Address */}
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress} />

        {/* Phone Number */}
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad" />

        {/* Emergency Contact */}
        <TextInput
          style={styles.input}
          placeholder="Emergency Contact (Phone Number)"
          value={emergencyContact}
          onChangeText={setEmergencyContact}
          keyboardType="phone-pad" />

        {/* Veterinarian Information */}
        <Text style={styles.sectionTitle}>Vet Information</Text>
        <TextInput
          style={styles.input}
          placeholder="Veterinarian Name"
          value={vetName}
          onChangeText={setVetName} />
        <TextInput
          style={styles.input}
          placeholder="Veterinarian Contact"
          value={vetContact}
          onChangeText={setVetContact}
          keyboardType="phone-pad" />

        {/* Notification Preferences */}
        <Text style={styles.sectionTitle}>Notification Preferences</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Email Notifications</Text>
          {/* <Switch
            value={receiveEmailNotifications}
            onValueChange={setReceiveEmailNotifications} /> */}

          <Switch
            value={receiveEmailNotifications}
            onValueChange={setReceiveEmailNotifications}
            trackColor={{ false: gray, true: greenVarientOne }}
            thumbColor={receiveEmailNotifications ? lightGreen : hexWhite}
          />
        </View>

        <Text style={styles.sectionTitle}>Language Preference</Text>
        <TouchableOpacity style={styles.dropdownButton} onPress={toggleModal}>
          <Text style={styles.dropdownButtonText}>{languagePreference}</Text>
          <Icon name="chevron-down" size={20} color="#000" />
        </TouchableOpacity>


        <TouchableOpacity style={styles.saveButton} onPress={handleSaveOwnerDetails}>
          <Text style={styles.saveButtonText}>Save Account Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Log out</Text>
        </TouchableOpacity>


        <TouchableOpacity style={{ marginBottom: 30, }}>
          <Text style={styles.termAndConditionText}>Terms & Conditions</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginBottom: 30, }}>
          <Text style={styles.termAndConditionText}>FAQs</Text>
        </TouchableOpacity>

        <View style={{ marginBottom: 50, }}>
          <Text style={styles.termAndConditionText}>Version 0.0.1</Text>
        </View>
      </ScrollView><Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={languageOptions}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Pressable
                  style={styles.modalItem}
                  onPress={() => handleLanguageSelect(item)}
                >
                  <Text style={styles.modalItemText}>{item}</Text>
                </Pressable>
              )} />
          </View>
        </View>
      </Modal></>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 50
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Fredoka-Bold',
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: 'Fredoka-Bold',
    color: '#191919',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Fredoka-Regular',
    color: '#191919'
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  switchLabel: {
    fontSize: 16,
    fontFamily: 'Fredoka-Regular',
    color: '#191919'
  },
  saveButton: {
    backgroundColor: '#5CB15A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  termAndCondition: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'flex-start',
    marginBottom: 30,
  },
  termAndConditionText: {
    color: black,
    fontSize: 16,
    fontFamily: 'Fredoka-Regular',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Fredoka-Bold',
  },
  logoutButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Fredoka-Bold',
  },
  logoutButton: {
    backgroundColor: '#E54D4D',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  addPetButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5CB15A',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
  },
  addPetButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Fredoka-Bold',
    marginLeft: 10,
  },

  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dropdownButtonText: {
    fontSize: 16,
    fontFamily: 'Fredoka-Regular',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
  },
  modalItem: {
    padding: 15,
    color: '#191919',
    fontFamily: 'Fredoka-Regular',
  },
  modalItemText: {
    fontSize: 16,
    fontFamily: 'Fredoka-Regular',
    color: '#191919'
  },
});

export default SettingsScreen;

