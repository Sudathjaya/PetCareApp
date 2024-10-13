// import React, { useRef, useState } from 'react';
// import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';
// import FastImage from 'react-native-fast-image';
// import { Button } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Ensure you have vector icons installed
// import { useNavigation } from '@react-navigation/native';

// const { width } = Dimensions.get('window');

// const BottomDrawer = ({ }) => {
//   const navigation = useNavigation();
//   const bottomSheetRef = useRef(null);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClose = () => {
//     setIsOpen(false);
//     bottomSheetRef.current?.close();
//   };

//   const handleOpen = () => {
//     setIsOpen(true);
//     bottomSheetRef.current?.expand();
//   };

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity onPress={handleOpen} style={styles.openButton}>
//         <Text style={styles.openButtonText}>Open Drawer</Text>
//       </TouchableOpacity>

//       <BottomSheet
//         ref={bottomSheetRef}
//         index={-1} // -1 means the drawer is closed by default
//         snapPoints={[450, '50%']} // Adjust the height of the drawer as needed
//         onClose={() => setIsOpen(false)}
//       >
//         <View style={styles.bottomSheet}>
//           {/* <FastImage
//             style={styles.cycleImage}
//             resizeMode={FastImage.resizeMode.contain}
//             source={imagePath}
//           /> */}
//           <Text style={styles.header}>Now !</Text>
//           <Text style={styles.body}>
//             One tap for foods, accessories, health care products & digital gadgets
//           </Text>
//           <Text style={styles.body}>
//             Grooming & boarding
//           </Text>
//           <Text style={styles.body}>
//             Easy & best consultation bookings
//           </Text>
//           <View style={styles.buttonContainer}>
//             <Button
//               icon={() => <Icon name="chevron-right" size={20} color="#fff" />}
//               mode="contained"
//               onPress={() => navigation.navigate('GettingStartedPage3')}
//               contentStyle={styles.buttonContent}
//               style={styles.button}
//               labelStyle={styles.buttonLabel}
//             >
//               Next
//             </Button>
//           </View>
//         </View>
//       </BottomSheet>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-end', // Aligns the drawer to the bottom
//     backgroundColor: '#f0f0f0', // Background color of the screen
//   },
//   openButton: {
//     padding: 16,
//     backgroundColor: '#007BFF', // Background color of the open button
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   openButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   bottomSheet: {
//     flex: 1,
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   cycleImage: {
//     width: width * 0.8, // Adjust the width of the image
//     height: 200, // Adjust the height of the image
//     borderRadius: 10,
//     marginBottom: 16,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#007BFF',
//     marginBottom: 8,
//   },
//   body: {
//     fontSize: 16,
//     color: '#4B5563',
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//   buttonContainer: {
//     marginTop: 16,
//   },
//   button: {
//     backgroundColor: '#007BFF', // Button background color
//   },
//   buttonContent: {
//     paddingVertical: 8,
//   },
//   buttonLabel: {
//     fontSize: 16,
//     color: '#fff',
//   },
// });

// export default BottomDrawer;
