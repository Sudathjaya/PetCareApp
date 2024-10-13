import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const CustomTabButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity
      style={styles.tabButton}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomTabButton;