import React, { useEffect, useState } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
} from 'react-native';
import * as icons from '../../resources/SvgIcons';

import { useRecoilValue, useSetRecoilState } from 'recoil';

import colors from '../../resources/colors';
import constants from '../../config/constants';
import MainMenu from '../MainMenu/MainMenu';
import resources from '../../resources';
import { SearchIcon, UserIcon, MsgFillIcon, Uploadicon2 } from '../../resources/SvgIcons';
import { currentScreenValue } from '../../recoil/atoms';
import { DrawerActions } from '@react-navigation/native';
import CustomHeader from '../CustomHeader';
import { black, white } from '../../enums/colors';
import Bellicon from 'react-native-vector-icons/FontAwesome5';


const { NavigationScreens } = constants.Navigation;

const { width } = Dimensions.get('window');

const BackButton = ({
  navigation,
  iconName,
  isHideBackBtn = false,
  isDisablebtn = false,
  customeBackIcon,
  iconStyles = {},
  iconColor,
  navigateFrom = null,
}) => {

  const goBack = () => {
    if (navigateFrom === NavigationScreens.DASHBOARD) {
      navigation.navigate(NavigationScreens.DASHBOARD);
    } else {
      navigation.goBack();
    }
  };

  const Icon = customeBackIcon ? icons[customeBackIcon] : icons[iconName];
  return (
    <View>
      <TouchableOpacity
        disabled={isDisablebtn}
        onPress={goBack}
        style={[
          styles.goBackStyle,
          {
            marginLeft: isHideBackBtn
              ? 10
              : 16,
          },
          iconStyles,
        ]}
        testID="back-button"
      >
        {isHideBackBtn ? null : <Icon fill={iconColor} />}
      </TouchableOpacity>
    </View>
  );
};


const DrawerRightButtons = ({ navigation, props }) => {
  const currentScreen = useRecoilValue(currentScreenValue);
  const [searchIcon, setSearchIcon] = useState(true)
  console.log('---currentScreen--', currentScreen);

  const onSearchPress = () => {
    navigation.navigate('login')
  }

  const navigateTo = (route) => {
    navigation.navigate(route)
    // navigation.dispatch(DrawerActions.openDrawer());
  };
  useEffect(() => {
    if (currentScreen === 'PostDetails') {
      setSearchIcon(false)
    }

  }, [])

  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      marginRight: 8
    }}>
      {currentScreen === 'gettingStarted2' || currentScreen === 'gettingStarted3' ?
        <TouchableOpacity onPress={onSearchPress} style={styles.searchIconBtn}>
          <View><Text style={{ color: white, fontFamily: 'Fredoka-Bold', fontWeight: '700' }}>Skip</Text></View>
        </TouchableOpacity>
        : null
      }

      {currentScreen === 'Home' || currentScreen === 'Appointment' || currentScreen === 'Commiunity' || currentScreen === 'Services' || currentScreen === 'Settings'?
        <TouchableOpacity onPress={()=>navigateTo('notifications')} style={styles.searchIconBtn}>
          <Bellicon name="bell" size={20} color={black} />
        </TouchableOpacity>
        : null
      }

    </View>
  );
};

const DrawerData = props => <MainMenu {...props} />;
const HamburgerMenu = ({ navigation, title = '' }) => {
  return (<CustomHeader title={title}  />)
}

const styles = StyleSheet.create({
  goBackStyle: {
    width: 20,
    height: 20,
    marginLeft: 16,
  },
  helpCenterIcon: {
    width: 18.18,
    height: 22.72,
  },

  totalPendingCountStyles: {
    backgroundColor: colors.brickRed,
    borderColor: colors.brickRed,
    borderRadius: 60,
    borderWidth: 2,
  },
  totalRemaningVoucherStyles: {
    backgroundColor: colors.yellowVarientOne,
    borderColor: colors.brickRed,
    borderRadius: 60,
    borderWidth: 2,
  },
  mainVoucherViewStyles: {
    justifyContent: 'center',
    position: 'absolute',
    right: -8,
    top: -8,
    alignItems: 'center',
  },
  totalRemaningTextStyles: {
    color: colors.white,
    fontFamily: 'MontserratBold',
    height: 12,
    width: 12,
    textAlign: 'center',
    fontSize: 12,
  },
  hamburgerMenuViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hitSlopStyles: {
    top: 20,
    bottom: 20,
    left: 20,
    right: 20,
  },
  userIconBtn: {
    padding: 10,

  },
  searchIconBtn: {
    paddingLeft: 8,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  userIconBtn: {
    padding: 10,
  },
  searchIconContainer: {
    position: 'absolute',
    left: 0
  },
});
export {
  BackButton,
  DrawerRightButtons,
  HamburgerMenu,
  DrawerData,
};
