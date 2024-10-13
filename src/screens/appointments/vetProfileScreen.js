// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import FastImage from 'react-native-fast-image';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// const VetProfileScreen = ({ navigation }) => {
//     return (
//         <ScrollView style={styles.container}>
//             <View style={styles.header}>

//                 <FastImage
//                     style={styles.profileImage}
//                     resizeMode={FastImage.resizeMode.cover}
//                     source={require('../../assets/img/vet2.png')}
//                 />
//             </View>

//             <View style={styles.profileInfoContainer}>
//                 <Text style={styles.name}>Dr. Nambuvan</Text>
//                 <Text style={styles.title}>Bachelor of Veterinary Science</Text>

//                 <View style={styles.ratingContainer}>
//                     <FontAwesome name="star" size={24} color="gold" />
//                     <Text style={styles.ratingText}>5.0 (100 reviews)</Text>
//                 </View>

//                 <View style={styles.infoRow}>
//                     <FontAwesome name="calendar" size={16} color="gray" />
//                     <Text style={styles.infoText}>Monday - Friday at 8.00 am - 5.00 pm</Text>
//                 </View>
//                 <View style={styles.infoRow}>
//                     <FontAwesome name="map-marker" size={16} color="gray" />
//                     <Text style={styles.infoText}>2.5 km</Text>
//                 </View>

//                 <Text style={styles.appointmentText}>1000 LKR for an Appointment</Text>

//                 <Text style={styles.description}>
//                     Dr. Shehan, one of the most skilled and experienced veterinarians and the owner of the most convenient animal clinic “Petz & Vetz”.
//                     We are ready to treat your beloved doggos & puppers with love and involvement.
//                     Book the appointment now!
//                 </Text>

//                 <Text style={styles.recommendationText}>Recommended For:</Text>
//                 <View style={styles.petRecommendation}>
//                     <Text style={styles.petName}>Bella</Text>
//                 </View>

//                 <TouchableOpacity style={styles.bookButton}>
//                     <Text style={styles.bookButtonText}>Book an Appointment</Text>
//                 </TouchableOpacity>
//             </View>
//         </ScrollView>
//     );
// };

// const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#FFF',
    // },
    // header: {
    //     alignItems: 'center',
    //     marginTop: 20,
    // },
    // profileImage: {
    //     // width: 120,
    //     // height: 120,
    //     // borderRadius: 60,
    //     // borderWidth: 3,
    //     borderColor: '#fff',

    //     width: '100%',
    //     height: 250,
    // },
    // profileInfoContainer: {
    //     padding: 20,
    //     backgroundColor: '#fff',
    //     borderTopLeftRadius: 20,
    //     borderTopRightRadius: 20,
    //     marginTop: -30,
    // },
    // name: {
    //     fontSize: 24,
    //     fontWeight: 'bold',
    //     textAlign: 'center',
    //     marginBottom: 5,
    // },
    // title: {
    //     fontSize: 16,
    //     color: '#5d5d5d',
    //     textAlign: 'center',
    //     marginBottom: 15,
    // },
    // ratingContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginBottom: 10,
    // },
    // ratingText: {
    //     marginLeft: 5,
    //     fontSize: 16,
    //     color: '#333',
    // },
    // infoRow: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     marginBottom: 5,
    // },
    // infoText: {
    //     marginLeft: 5,
    //     fontSize: 14,
    //     color: '#666',
    // },
    // appointmentText: {
    //     fontSize: 16,
    //     color: 'green',
    //     textAlign: 'center',
    //     marginVertical: 10,
    // },
    // description: {
    //     fontSize: 14,
    //     color: '#777',
    //     textAlign: 'center',
    //     marginBottom: 20,
    // },
    // recommendationText: {
    //     fontSize: 14,
    //     color: '#333',
    //     marginBottom: 5,
    // },
    // petRecommendation: {
    //     backgroundColor: '#e0e0e0',
    //     borderRadius: 20,
    //     paddingHorizontal: 10,
    //     paddingVertical: 5,
    //     alignSelf: 'center',
    // },
    // petName: {
    //     fontSize: 14,
    //     color: '#555',
    // },
    // bookButton: {
    //     backgroundColor: 'green',
    //     borderRadius: 10,
    //     paddingVertical: 15,
    //     paddingHorizontal: 30,
    //     alignItems: 'center',
    //     marginTop: 20,
    // },
    // bookButtonText: {
    //     color: '#fff',
    //     fontSize: 16,
    // },
// });

// export default VetProfileScreen;


import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import PetGallery from '../../components/block-components/petProfile/petGallery';

const VetProfileScreen = ({ navigation }) => {

  const infoData = [
    { label: 'Age', value: '1y 4m' },
    { label: 'Weight', value: '7.5 kg' },
    { label: 'Height', value: '54 cm' },
    { label: 'Color', value: 'Black' },
    { label: 'Gender', value: 'Female' },
  ];

  const navigateTo = () => {
    const petData = { 
      name: 'Bella', 
     breed: 'Border Collie', 
     age: '1y 4m', 
     weight: '7.5 kg',
     height: '54 cm', 
     color: 'Black', 
     gender: 'Female' }
    navigation.navigate('edit_pet_profile', {petData})
  }

  const renderInfoBox = ({ item }) => (
    <View style={styles.infoBox}>
      <Text style={styles.infoLabel}>{item.label}</Text>
      <Text style={styles.infoText}>{item.value}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.scrollContainer}>
      <FastImage
        style={styles.petImage}
        resizeMode={FastImage.resizeMode.cover}
        source={require('../../assets/img/vet2.png')}
      />

        <View style={styles.profileInfoContainer}>
                <Text style={styles.name}>Dr. Nambuvan</Text>
                <Text style={styles.title}>Bachelor of Veterinary Science</Text>

                <View style={styles.ratingContainer}>
                 <FontAwesome name="star" size={24} color="gold" />
                  <Text style={styles.ratingText}>5.0 (100 reviews)</Text>
                </View>

                 <View style={styles.infoRow}>
                    <FontAwesome name="calendar" size={16} color="gray" />
                  <Text style={styles.infoText}>Monday - Friday at 8.00 am - 5.00 pm</Text>
                 </View>
              <View style={styles.infoRow}>
                   <FontAwesome name="map-marker" size={16} color="gray" />
                    <Text style={styles.infoText}>2.5 km</Text>
                </View>

                 <Text style={styles.appointmentText}>1000 LKR for an Appointment</Text>

                 <Text style={styles.description}>
                     Dr. Shehan, one of the most skilled and experienced veterinarians and the owner of the most convenient animal clinic “Petz & Vetz”.
                     We are ready to treat your beloved doggos & puppers with love and involvement.
                     Book the appointment now!
                 </Text>

                 <Text style={styles.recommendationText}>Recommended For:</Text>
                 <View style={styles.petRecommendation}>
                     <Text style={styles.petName}>Bella</Text>
                 </View>

                 <TouchableOpacity style={styles.bookButton}>
                     <Text style={styles.bookButtonText}>Book an Appointment</Text>
                 </TouchableOpacity>
          </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  petImage: {
    width: '100%',
    height: 250,
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    paddingBottom: 10,
  },
  petInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  petName: {
    fontSize: 28,
    color: '#333',
    fontFamily: 'Fredoka-Bold',
  },
  petBreed: {
    fontSize: 16,
    color: '#064E57',
    fontFamily: 'Fredoka-Medium',
  },
  genderIcon: {
    marginLeft: 10,
  },
  aboutContainer: {
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 20,
    fontFamily: 'Fredoka-Regular',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoBox: {
    backgroundColor: '#E0F7FA',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '23%',
  },
  infoLabel: {
    fontSize: 12,
    color: '#757575',
    fontFamily: 'Fredoka-Regular',
  },
  infoText: {
    fontSize: 16,
    fontFamily: 'Fredoka-Regular',
  },
  descriptionText: {
    fontSize: 16,
    color: '#777',
    marginTop: 10,
    fontFamily: 'Fredoka-Regular',
  },
  statusContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Fredoka-Bold',
    marginBottom: 10,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  statusInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Fredoka-Regular',
  },
  statusDetails: {
    marginLeft: 10,
    fontFamily: 'Fredoka-Regular',
  },
  statusLabel: {
    fontSize: 16,
    fontFamily: 'Fredoka-Regular',
  },
  statusText: {
    fontSize: 14,
    color: '#FF5252',
    fontFamily: 'Fredoka-Regular',
  },
  statusSubtext: {
    fontSize: 12,
    color: '#999',
    fontFamily: 'Fredoka-Regular',
  },
  statusButton: {
    backgroundColor: '#5CB15A',
    padding: 10,
    borderRadius: 10,
  },
  statusButtonText: {
    color: '#FFFFFF',
    fontFamily: 'Fredoka-Medium',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Fredoka-Bold',
    marginBottom: 10,
  },
  updateButtonContainer: {
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  updateButton: {
    backgroundColor: '#5CB15A',
    padding: 10,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
  },
  updateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Fredoka-Bold',
  },


  infoRow: {
    flex: 1,
  },
  infoRowWrapper: {
    justifyContent: 'space-between',
  },
  infoBox: {
    backgroundColor: '#E0F7FA',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    margin: 5,
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: '#757575',
    fontFamily: 'Fredoka-Regular',
  },
  infoText: {
    fontSize: 16,
    fontFamily: 'Fredoka-Regular',
  },


//
  container: {
    flex: 1,
    backgroundColor: '#FFF',
},
header: {
    alignItems: 'center',
    marginTop: 20,
},
profileImage: {
    borderColor: '#fff',

    width: '100%',
    height: 250,
},
profileInfoContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -30,
},
name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
},
title: {
    fontSize: 16,
    color: '#5d5d5d',
    textAlign: 'center',
    marginBottom: 15,
},
ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
},
ratingText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#333',
},
infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
},
infoText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#666',
},
appointmentText: {
    fontSize: 16,
    color: '#5CB15A',
    textAlign: 'center',
    marginVertical: 10,
},
description: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
},
recommendationText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
},
petRecommendation: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center',
},
petName: {
    fontSize: 14,
    color: '#555',
},
bookButton: {
    backgroundColor: '#5CB15A',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignItems: 'center',
    marginTop: 20,
},
bookButtonText: {
    color: '#fff',
    fontSize: 16,
},
});

export default VetProfileScreen;
