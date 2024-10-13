import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import DailyCare from '../../components/block-components/dailyCare/dailyCare';
import HealthRecords from '../../components/block-components/healthRecords/healthRecords';
import PetList from '../../components/block-components/myPets/petList';
import PetProfile from '../../components/block-components/petProfile/petProfile';
import UpcomingAppointments from '../../components/block-components/upcomingAppointments/upcomingAppointments';
import VetCarousel from '../../components/block-components/vetCard/vet';




const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView>
    <View style={styles.container}>
    <PetList navigation={navigation}/>
    <PetProfile navigation={navigation}/>
    <HealthRecords navigation={navigation}/>
    <UpcomingAppointments navigation={navigation}/>
     <VetCarousel navigation={navigation}/>
    {/* <View style={styles.section}>
        <Text style={styles.sectionTitle}>Activity</Text>
        <Button
          title="View Activity"
          onPress={() => navigation.navigate('activity')}
        />
      </View> */}
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  petImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;

