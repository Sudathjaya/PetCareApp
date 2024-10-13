// components/UserProfile.js

import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';
import { users } from './models';
import moment from 'moment';

const UserScreen = ({ route }) => {
  const { userId } = route.params;
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>User not found.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* User Info */}
      <View style={styles.userInfo}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userBio}>{user.bio}</Text>
      </View>

      {/* Additional profile details can be added here */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  userInfo: { alignItems: 'center', marginBottom: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  userName: { fontSize: 24, fontWeight: 'bold' },
  userBio: { fontSize: 16, color: '#666', textAlign: 'center', marginTop: 5 },
});

export default UserScreen;
