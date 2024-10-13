// // CustomHeader.js

// import React, { Component } from 'react';
// import { ReviewTitleIcon, SearchIcon } from '../../resources/SvgIcons';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
// import { useRecoilValue } from 'recoil';
// import { currentScreenValue } from '../../recoil/atoms';
// import FastImage from 'react-native-fast-image';
// import resources from '../../resources';
// import { getPixelValue } from '../../utils/getPixelValue';
// import { BackButton } from '../Header';

// const Back = props => <BackButton {...props} iconName="LeftArrow" />;

// const CustomHeader = ({ title, onSearchPress }) => {
//   const currentScreen = useRecoilValue(currentScreenValue);
//   return (
//     <View style={styles.header}>
//       <View style={styles.leftSide}>
//         <FastImage
//           style={styles.logo}
//           resizeMode={FastImage.resizeMode.contain}
//           source={require('../../assets/img/lara_logo.png')}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     alignItems: 'flex-start',
//     // paddingHorizontal: 20,
//     height: 55,
//   },
//   leftSide:{

//   },
//   logo: {
//     width: Dimensions.get('window').width * 0.8,
//     height: 50,
//     // marginTop: 10,
//     // position: 'absolute',
//     // left: 0
//   }
// });

// export default CustomHeader;


import React from 'react';
import { Text,View, StyleSheet, Dimensions } from 'react-native';
import { useRecoilValue } from 'recoil';
import FastImage from 'react-native-fast-image';
import { currentScreenValue } from '../../recoil/atoms';

const CustomHeader = () => {
  const currentScreen = useRecoilValue(currentScreenValue);
  return (
    <View style={styles.header}>
      <View style={styles.leftSide}>
        <FastImage
          style={styles.logo}
          resizeMode={FastImage.resizeMode.contain}
          source={require('../../assets/img/logo_new2.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 55,
  },
  leftSide: {
    flex: 1,
    alignItems: 'flex-start',
  },
  logo: {
    marginHorizontal: 20,
    width: 55,
    height: 55,
  },
  logoText: {
    width: Dimensions.get('window').width * 0.8,
    height: 50,
  },
});

export default CustomHeader;
