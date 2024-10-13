import React from 'react';
import colors from '../../resources/colors';
import resources from '../../resources';
import strings from '../../resources/strings';
import constants from '../../config/constants';
import { profileImage } from '../../recoil/atoms'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { DrawerActions } from '@react-navigation/native';
import { CloseIcon, SettingsIcon } from '../../resources/SvgIcons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Text, View, SafeAreaView, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';

const { NavigationScreens, DrawerLabels } = constants.Navigation;

const MainMenu = props => {
  const { state, descriptors, navigation } = props;
  const setProfileImg = useSetRecoilState(profileImage);
  const profileImg = useRecoilValue(profileImage);

  const closeDrawer = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
  };

  const handleListItemPress = () => {
    // Handle the press of a list item in the drawer
  };

  const handleRoutes = (routeName) => {
    console.log('---routeName---', routeName);
    if (routeName === DrawerLabels.USER_PROFILE) {
      navigation.navigate(routeName);
    } else if (routeName === DrawerLabels.SETTINGS) {
      navigation.navigate(routeName);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.closeIconContainer}
      >
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <CloseIcon />
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center' }}
          onPress={() => { }}
        >
          {profileImg ? (
            <View style={{ width: 16, height: 16, marginBottom: 1 }}>
              <AvatarComponent
                cameraVisible={false}
                imageUri={profileImg}
                circleSize={62}
                fillSize={0}
                avatarStyle={
                  {
                    height: 12,
                    width: 12,
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    top: 3,
                  }
                }
              />
            </View>
          ) : (
            <Image source={resources.Images.icons.userIcon} />
          )}

          <View
            style={{ maxWidth: '80%', marginLeft: 5 }}
          >
            <Text style={{
              color: 'black', fontFamily: 'Montserrat-SemiBold', alignItems: 'baseline'
            }}>
              {global?.userName
                ? `${strings.TEXT_HELLO} ${global?.userName}`
                : `${strings.TEXT_HELLO} Jhon`}
            </Text>
            <TouchableOpacity
              onPress={() => {

              }}
            >
              <Text style={styles.viewProfile}>
                {strings.MAIN_MENU_VIEW_PROFILE}
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>

      <DrawerContentScrollView {...props}>
        <View style={styles.drawerView}>
          {state.routes.map((route, index) => {
            const { drawerLabel } = descriptors[route.key].options;
            return (
              <View key={index}>
                {route.name !== NavigationScreens.APP ? (
                  <DrawerItem
                    key={route.key}
                    label={({ color }) => (
                      <View style={{ paddingHorizontal: 0 }}>
                        {drawerLabel !== 'My Profile' ? (
                          <Text
                            style={{ color: 'black' }}>
                            {drawerLabel}
                          </Text>
                        ) : null}
                      </View>
                    )}
                    focused={
                      state.routes.findIndex(e => e.name === route.name) ===
                      state.index
                    }
                    activeTintColor={resources.Colors.gray}
                    icon={
                      route.name === DrawerLabels.USER_PROFILE
                        ? ({ focused, color, size }) => <SettingsIcon />
                        : route.name === DrawerLabels.SETTINGS
                          ? ({ focused, color, size }) => <SettingsIcon />
                          : null
                    }
                    onPress={() => handleRoutes(route.name)}
                  />
                ) : null}
              </View>
            );
          })}
        </View>
      </DrawerContentScrollView>
      <SafeAreaView style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
        <Text style={styles.version}>
          {strings.TEXT_VERSION + ' ' + '1.0.0.001'}
        </Text>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    paddingVertical: 20
  },
  closeIconContainer: {
    position: 'absolute',
    right: '5%',
    zIndex: 1,
    marginTop: 40,
  },
  profileContainer: {
    marginTop: 5,
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 16,
    height: 16,
    marginBottom: 1,
  },
  avatarStyle: {
    height: 12,
    width: 12,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 3,
  },
  userNameContainer: {
    maxWidth: '80%',
    marginLeft: 5,
  },
  userNameText: {
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
    alignItems: 'baseline',
  },
  viewProfile: {
    // Your view profile text styles here
    color: colors.Shiraz,
    fontFamily: 'Montserrat-SemiBold',
    alignItems: 'baseline',
  },
  drawerView: {
    paddingTop: 10,
  },
  version: {
    paddingHorizontal: 10
    // Your version text styles here
  },
});

export default MainMenu;

