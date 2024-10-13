import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FastImage from 'react-native-fast-image';
import IntroBtn from '../../components/base-components/button/introBtn';

const { width } = Dimensions.get('window');

const GettingStartedPage2 = ({ navigation }) => {
    const onPress = () => {
        navigation.navigate('gettingStarted3')
    }

    return (
        <ImageBackground
            source={require('../../assets/img/gs2.png')}
            style={styles.background}
        >
            <View style={styles.overlayContainer}>
                <View style={styles.card}>
                    <FastImage
                        style={styles.cycleImage}
                        resizeMode={FastImage.resizeMode.contain}
                        source={require('../../assets/img/scroll-circles2.png')}
                    />
                    <Text style={styles.header}>Now !</Text>
                    <Text style={styles.body}>
                        One tap for foods, accessories, health care products & digital gadgets
                    </Text>
                    <Text style={styles.body}>
                        Grooming & boarding,
                    </Text>
                    <Text style={styles.body}>
                        Easy & best consultation bookings
                    </Text>
                    <IntroBtn onPress={onPress} title="Next" />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    card: {
        width: '100%',
        height: '45%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center'
    },
    cycleImage: {
        width: width * 0.4,
        height: 10,
        marginBottom: 20,
    },
    header: {
        fontSize: 24,
        color: '#1E3A8A',
        marginBottom: 30,
        marginTop: 20,
        fontFamily: 'Fredoka-Bold',
    },
    body: {
        fontSize: 16,
        color: '#4B5563',
        textAlign: 'center',
        width: '70%',
        marginBottom: 10,
        fontFamily: 'Fredoka-Medium'
    },
    buttonContainer: {
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#5CB15A',
        width: width * 0.8,
        height: 50,
        borderRadius: 8,
    },
    buttonContent: {
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonLabel: {
        marginRight: 30,
    },
});

export default GettingStartedPage2;
