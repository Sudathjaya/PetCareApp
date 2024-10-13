import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { Switch } from 'react-native-elements';
import { loggedInState } from '../../recoil/atoms';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FloatingLabelInput from '../../components/base-components/button/floatingLabelInput';
import { gray, grayVarientThirteen, greenVarientOne, hexWhite, lightGreen } from '../../enums/colors';
import { View, Text, StyleSheet, Dimensions, ImageBackground, Alert, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isDoctor, setIsDoctor] = useState(false);
    const setAuthState = useSetRecoilState(loggedInState);

    const handleSwitchToggle = (value) => {
        setIsDoctor(value);
    };

    const handleNavigation = () => {
        setAuthState(true);
    };

    return (
        <ImageBackground
            source={require('../../assets/img/loginBackground.png')}
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.card}>
                    <View style={styles.logoWrapper}>
                        <FastImage
                            style={styles.logo}
                            resizeMode={FastImage.resizeMode.contain}
                            source={require('../../assets/img/logo_new2.png')}
                        />
                    </View>
                    <FloatingLabelInput
                        placeholder="Username"
                        value={username}
                        onChangeText={setUsername}
                        iconName="person"
                    />
                    <FloatingLabelInput
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholder="Password"
                        iconName="lock"
                    />
                    <View style={styles.switchWrapper}>
                        <Text style={styles.switchLabel}>Are you a Doctor ?</Text>
                        <Switch
                            value={isDoctor}
                            onValueChange={handleSwitchToggle}
                            trackColor={{ false: gray, true: greenVarientOne }}
                            thumbColor={isDoctor ? lightGreen : hexWhite}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={handleNavigation}
                    >
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.connectWrapper}>
                        <TouchableOpacity>
                            <Text style={styles.forgotPassword}>Forgot Password ?</Text>
                        </TouchableOpacity>
                        <Text style={styles.connectText}>Or Connect with</Text>
                    </View>
                    <TouchableOpacity
                        style={[styles.socialButton, styles.googleButton]}
                        onPress={() => Alert.alert('Google Button Pressed!')}
                    >
                        <MaterialCommunityIcons
                            name="google"
                            size={20}
                            color="white"
                            style={styles.icon}
                        />
                        <Text style={styles.socialButtonText}>Login with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.socialButton, styles.facebookButton]}
                        onPress={() => Alert.alert('Facebook Button Pressed!')}
                    >
                        <Icon
                            name="facebook"
                            size={20}
                            color="white"
                            style={styles.icon}
                        />
                        <Text style={styles.socialButtonText}>Login with Facebook</Text>
                    </TouchableOpacity>
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
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 15,
        marginTop: 40

    },
    card: {
        borderWidth: 0,
        width: '80%',
    },
    logoWrapper: {
        marginBottom: 20,
        marginTop: 30,
    },
    logo: {
        width: width * 0.8,
        height: 150,
    },
    switchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginVertical: 12,

    },
    switchLabel: {
        marginRight: 10,
        fontSize: 16,
        fontFamily: 'Fredoka-Bold',
        color: '#5CB15A',
    },
    forgotPasswordWrapper: {
        alignItems: 'flex-end',
        marginVertical: 8,
    },
    loginButton: {
        backgroundColor: '#5CB15A',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Fredoka-Bold',
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginVertical: 8,
        justifyContent: 'center',
    },
    googleButton: {
        backgroundColor: '#34A853',
    },
    facebookButton: {
        backgroundColor: '#1877F2',
    },
    icon: {
        marginRight: 10,
    },
    socialButtonText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Fredoka-Bold',
    },
    divider: {
        height: 1,
        backgroundColor: '#ddd',
        marginVertical: 8,
    },


    connectWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
    },
    forgotPassword: {
        fontSize: 16,
        fontFamily: 'Fredoka-Bold',
        color: '#5CB15A',
        marginRight: 10,
    },
    connectText: {
        fontSize: 16,
        color: '#666',
        fontFamily: 'Fredoka-Regular',
    },
});

export default LoginScreen;
