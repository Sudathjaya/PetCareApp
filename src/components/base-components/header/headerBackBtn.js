import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
const { width } = Dimensions.get('window');

export const BackButton = ({isHideBackBtn = false}) => {
  const navigation = useNavigation();



  return (
    <View  style={{
        marginLeft: width * 0.01,
      }}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
      <Text style={styles.buttonText}>
      <Icon name="arrow-back" size={25} color="#FFF" />
      </Text>
    </TouchableOpacity>
    </View>
  );
};


export const SkipButton = () => {
    const navigation = useNavigation();
    const skip = ()=>{
        console.log('login_skip');
        navigation.navigate('Login')
    }

    return(
<View  style={{
        marginRight: width * 0.01,
      }}>
  <TouchableOpacity onPress={()=>skip()} style={styles.button}>
    <Text style={styles.buttonText}>Skip</Text>
  </TouchableOpacity>
  </View>
)
}

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 10,
    padding: 10,
  },
  buttonText: {
    fontWeight:700,
    fontSize: 16,
    color: '#FFF', // Change this color as needed
  },

});
