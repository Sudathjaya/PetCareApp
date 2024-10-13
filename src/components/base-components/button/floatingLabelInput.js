import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icon from vector icons
import { black } from '../../../enums/colors'; // Assuming black is defined in your color enums

const FloatingLabelInput = ({ placeholder, value, onChangeText, secureTextEntry, iconName, placeholderTextColor = '#888', ...props }) => {
    return (
        <View style={styles.inputContainer}>
            <Icon name={iconName} size={20} color="#888" style={styles.icon} />
            <TextInput
                {...props}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                placeholderTextColor={'#888'}
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginBottom: 20,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Fredoka-Regular',
        color: black, // Text color
    },
});

export default FloatingLabelInput;
