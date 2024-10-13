import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UpcomingAppointmentsScreen = () => {

    const upcomingAppointments = [
        { id: '1', date: '2024-09-12', type: 'Vet Check-up', location: 'Pet Clinic' },
        { id: '2', date: '2024-09-19', type: 'Grooming Session', location: 'Pet Groomer' },
    ];

    return (
        <View>
            <View style={styles.header}>
                <Icon name="calendar-check" size={24} color="#000" />
                <Text style={styles.headerTitle}>Upcomming Appointments</Text>
            </View>

            <View style={styles.profileCard}>
                    {upcomingAppointments.map(item => (
                        <View style={styles.infoRow}>
                        <Icon name="calendar" size={20} color="#42A5F5" />
                        <Text style={styles.infoText}>{item.type}: {item.date} at {item.location}</Text>
                    </View>
                    ))}
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
        fontSize: 14,
        marginLeft: 10,
        color: '#424242',
        fontFamily: 'Fredoka-Regular'
    },
      itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});

export default UpcomingAppointmentsScreen;

