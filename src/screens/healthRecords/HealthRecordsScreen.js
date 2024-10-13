import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HealthRecordsScreen = () => {
  return (
    <View>
      <View style={styles.header}>
        <MaterialIcons name="health-and-safety" size={24} color="#000" />
        <Text style={styles.headerTitle}>Bella's Health Records</Text>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.infoRow}>
          <Icon name="cake-variant" size={20} color="#FFA726" />
          <Text style={styles.infoText}>Vaccination Date: 01/01/2024</Text>
        </View>

        <View style={styles.infoRow}>
          <Icon name="dog" size={20} color="#FF7043" />
          <Text style={styles.infoText}>Medications: None</Text>
        </View>

        <View style={styles.infoRow}>
          <Icon name="needle" size={20} color="#66BB6A" />
          <Text style={styles.infoText}>Allergies: None</Text>
        </View>

        <View style={styles.infoRow}>
          <Icon name="calendar" size={20} color="#42A5F5" />
          <Text style={styles.infoText}>Next Vet Visit: In 2 Weeks</Text>
        </View>
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
    fontFamily: 'Fredoka-Bold',
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

export default HealthRecordsScreen;

