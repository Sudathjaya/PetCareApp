import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const ButtonComponent = ({title, onPress, color }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <View style={styles.buttonContent}>
                    <Text style={styles.buttonText}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        backgroundColor: '#5CB15A',
        width: width * 0.8,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonContent: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 10,
        fontFamily: 'Fredoka-Bold',
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        color: '#4B5563',
        textAlign: 'center',
    },
    boldText: {
        fontWeight: 'bold',
    },
});

export default ButtonComponent;
