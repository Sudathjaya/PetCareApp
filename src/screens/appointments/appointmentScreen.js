import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import VetCarousel from '../../components/block-components/vetCard/vet';

const AppointmentScreen = ({ navigation }) => {
    const [isSelectedItm, setItem] = useState('Veterinary')

    const handleItem = (item) => {
        setItem(item)
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Hello, How may I help you?</Text>
                <View style={styles.serviceIconsContainer}>
                    <TouchableOpacity onPress={() => handleItem('Veterinary')}>
                        <View style={styles.serviceIcon}>
                            <FontAwesome name="stethoscope" size={30} color={isSelectedItm === 'Veterinary' ? '#3eb489' : '#a3a3a3'} />
                            <Text style={[styles.sectionHead, {color:isSelectedItm === 'Veterinary' ? '#3eb489' : '#a3a3a3'}]}>Veterinary</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleItem('Grooming')}>
                        <View style={styles.serviceIcon}>
                            <MaterialIcons name="pets" size={30} color={isSelectedItm === 'Grooming' ? '#3eb489' : '#a3a3a3'} />
                            <Text style={[styles.sectionHead, {color:isSelectedItm === 'Grooming' ? '#3eb489' : '#a3a3a3'}]}>Grooming</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleItem('Boarding')}>
                        <View style={styles.serviceIcon}>
                            <Feather name="home" size={30} color={isSelectedItm === 'Boarding' ? '#3eb489' : '#a3a3a3'} />
                            <Text style={[styles.sectionHead, {color:isSelectedItm === 'Boarding' ? '#3eb489' : '#a3a3a3'}]}>Boarding</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>


            {isSelectedItm === 'Veterinary' ?
                <>
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Nearby Veterinarian</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAllText}>See all</Text>
                        </TouchableOpacity>
                        <VetCarousel navigation={navigation} />
                    </View>

                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Recommended Veterinarian</Text>
                        <TouchableOpacity>
                            <Text style={styles.seeAllText}>See all</Text>
                        </TouchableOpacity>
                        <VetCarousel navigation={navigation} />
                    </View>
                </>
                : isSelectedItm === 'Grooming' ?
                    <>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Nearby Grooming</Text>
                            <TouchableOpacity>
                                <Text style={styles.seeAllText}>See all</Text>
                            </TouchableOpacity>
                            <VetCarousel navigation={navigation} />
                        </View>

                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Recommended Grooming</Text>
                            <TouchableOpacity>
                                <Text style={styles.seeAllText}>See all</Text>
                            </TouchableOpacity>
                            <VetCarousel navigation={navigation} />
                        </View>
                    </> : isSelectedItm === 'Boarding' ?
                        <>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Nearby Boarding</Text>
                                <TouchableOpacity>
                                    <Text style={styles.seeAllText}>See all</Text>
                                </TouchableOpacity>
                                <VetCarousel navigation={navigation} />
                            </View>

                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>Recommended Boarding</Text>
                                <TouchableOpacity>
                                    <Text style={styles.seeAllText}>See all</Text>
                                </TouchableOpacity>
                                <VetCarousel navigation={navigation} />
                            </View>
                        </> : null

            }
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',

    },
    headerContainer: {
        padding: 20,
        marginTop: 50
    },
    headerText: {
        fontSize: 18,
        fontFamily: 'Fredoka-Bold',
        marginBottom: 20,
        color: '#000000'
    },
    serviceIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    serviceIcon: {
        alignItems: 'center',
    },
    sectionContainer: {
        padding: 20,
        marginBottom: 20
    },
    sectionTitle: {
        fontSize: 18,
        fontFamily: 'Fredoka-Bold',
        color: '#000000'
    },
    sectionHead:{
        fontSize: 15,
        fontFamily: 'Fredoka-Regular',
    },
    seeAllText: {
        color: '#3eb489',
        alignSelf: 'flex-end',
    },
});

export default AppointmentScreen;
