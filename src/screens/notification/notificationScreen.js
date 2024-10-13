import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Or your preferred icon set

const notifications = [
  {
    id: '1',
    title: 'Food Spenser',
    description: 'Food quantity is low, refill soon.',
    time: '2m ago',
    icon: require('../../assets/img/logo.png'),
    details: 'Refill the food container to ensure your pet has enough food for the day.',
  },
  {
    id: '2',
    title: 'Food Spenser',
    description: 'Furry’s mood is abnormal.',
    time: 'Just now',
    icon: require('../../assets/img/logo.png'),
    details: 'Monitor Furry’s behavior. It’s recommended to visit the vet if this persists.',
  },
  {
    id: '3',
    title: 'Food Spenser',
    description: 'Time to feed Blacky!',
    time: '10.48 a.m',
    icon: require('../../assets/img/logo.png'),
    details: 'Make sure to give Blacky the special diet food today.',
  },
];

const NotificationScreen = () => {
  const [expandedNotification, setExpandedNotification] = useState(null); // Keep track of which notification is expanded

  const toggleExpand = (id) => {
    if (expandedNotification === id) {
      setExpandedNotification(null); // Collapse if already expanded
    } else {
      setExpandedNotification(id); // Expand the clicked notification
    }
  };

  const renderItem = ({ item }) => {
    const isExpanded = expandedNotification === item.id;
    
    return (
      <TouchableOpacity onPress={() => toggleExpand(item.id)} style={styles.notificationContainer}>
        <Image source={item.icon} style={styles.icon} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.time}>{item.time}</Text>
          {isExpanded && (
            <View style={styles.expandedContent}>
              <Text style={styles.details}>{item.details}</Text>
            </View>
          )}
        </View>
        <Icon name={isExpanded ? 'expand-less' : 'expand-more'} size={24} color="gray" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#E57373',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#757575',
    marginVertical: 4,
  },
  time: {
    fontSize: 12,
    color: '#9E9E9E',
  },
  expandedContent: {
    marginTop: 8,
    backgroundColor: '#f9f9f9',
    padding: 8,
    borderRadius: 4,
  },
  details: {
    fontSize: 13,
    color: '#616161',
  },
});

export default NotificationScreen;
