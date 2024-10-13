import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, ScrollView } from 'react-native';

const dailyCareData = {
  feeding: [
    { id: '1', time: '08:00 AM', description: 'Dry Food' },
    { id: '2', time: '12:00 PM', description: 'Wet Food' },
    { id: '3', time: '06:00 PM', description: 'Dry Food' },
  ],
  exercise: [
    { id: '1', time: '07:00 AM', activity: 'Morning Walk' },
    { id: '2', time: '04:00 PM', activity: 'Afternoon Play' },
  ],
  grooming: [
    { id: '1', date: '2024-09-10', activity: 'Bath' },
    { id: '2', date: '2024-09-24', activity: 'Nail Trim' },
  ],
};

// Daily Care Component
const DailyCare = () => {
  return (
    <View>
      <Text style={styles.sectionTitle}>Daily Care</Text>

      {/* Feeding Schedule */}
      <Text style={styles.subTitle}>Feeding Schedule</Text>
      {dailyCareData.feeding.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Text>{item.time}</Text>
          <Text>{item.description}</Text>
        </View>
      ))}

      {/* Exercise Routine */}
      <Text style={styles.subTitle}>Exercise Routine</Text>
      {dailyCareData.exercise.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Text>{item.time}</Text>
          <Text>{item.activity}</Text>
        </View>
      ))}

      {/* Grooming Logs */}
      <Text style={styles.subTitle}>Grooming Logs</Text>
      {dailyCareData.grooming.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Text>{item.date}</Text>
          <Text>{item.activity}</Text>
        </View>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#141415',
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});

export default DailyCare;
