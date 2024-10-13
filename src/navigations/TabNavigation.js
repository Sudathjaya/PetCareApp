import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
import React, { useCallback, useRef } from 'react';
import { useRecoilValue } from 'recoil';
import Res from '../resources';
import { AppStackScreen, BookingStackScreen, CommiunityStackScreen, MessageStackScreen, ServiceStackScreen, SettingsStackScreen, SettingStackScreen, } from './NavigationStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Animated, { EasingNode } from 'react-native-reanimated';
import colors from '../resources/colors';
import strings from '../resources/strings';

import { isBottomTabNavigatorQuickHide, isBottomTabNavigatorShow, isEnableHighlight } from '../recoil/atoms';
import Constants from '../config/constants';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { IconAccount, IconWallet } from '../resources/SvgIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AppointmentScreen from '../screens/appointments/appointmentScreen';
const { NavigationScreens } = Constants.Navigation;
const Tab = createBottomTabNavigator();


export default function TabNavigation() {
  const showBottomBar = true;

  return (
    <Tab.Navigator
      initialRouteName={strings.BOTTOMBAR_HOME}
      screenOptions={{
        tabBarActiveTintColor: colors.Shiraz,
        headerShown: false,
        tabBarStyle: [
          {
            display: showBottomBar ? 'flex' : 'none',
          },
          null,
        ],
      }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name={strings.BOTTOMBAR_HOME}
        component={AppStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={Res.Strings.BOOK}
        component={BookingStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) =>
            <FontAwesome name="calendar-check-o" size={size} color={color} />,
        }}
      />

      <Tab.Screen
        name={Res.Strings.COMMIUNITY}
        component={CommiunityStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <AntDesign name="message1" size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name={Res.Strings.SERVICE}
        component={ServiceStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <MaterialIcons name='medical-services' size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name={Res.Strings.SETTINGS}
        component={SettingsStackScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="account-circle-outline" size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

function CustomTabBar({ state, descriptors, navigation }) {
  const bottomTabHeight = useRef(
    new Animated.Value(Platform.OS === 'ios' ? 70 : 60)
  ).current;
  const showBottomBar = useRecoilValue(isBottomTabNavigatorShow);
  const quickHideBottomBar = useRecoilValue(isBottomTabNavigatorQuickHide);
  const isHighlightIcon = useRecoilValue(isEnableHighlight);


  React.useEffect(() => {
    showBottomTabs();
    if (showBottomBar) {
      showBottomTabs();
    } else {
      hideBottomTabs();
    }
  }, [hideBottomTabs, showBottomBar, showBottomTabs]);

  const showBottomTabs = useCallback(() => {
    Animated.timing(bottomTabHeight, {
      toValue: Platform.OS === 'ios' ? 70 : 60,
      duration: 200,
      easing: EasingNode.linear,
      useNativeDriver: false,
    }).start();
  }, [bottomTabHeight]);

  const hideBottomTabs = useCallback(() => {
    Animated.timing(bottomTabHeight, {
      toValue: 0,
      duration: 200,
      easing: EasingNode.linear,
      useNativeDriver: false,
    }).start();
  }, [bottomTabHeight]);

  return (
    <View
      style={[
        styles.mainContainer,
        {
          display: quickHideBottomBar ? 'none' : 'flex',
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        console.log('---label---', label);
        const TabBarIcon = options.tabBarIcon;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });


          if (label === Res.Strings.BOTTOMBAR_HOME) {
            navigation.navigate(NavigationScreens.HOME);
          } else {
            navigation.navigate(route.name);
          }

          // if (label === Res.Strings.BOTTOMBAR_ACCOUNT) {
          //   // navigation.toggleDrawer();
          //   navigation.navigate(route.name);
          // }

        };

        return (
          <Animated.View
            key={index}
            style={[
              styles.mainItemContainer,
              {
                height: bottomTabHeight,
                // paddingBottom: Platform.OS === 'ios' && showBottomBar ? 5 : 0,
              },
            ]}
          >
            <View>
              <Pressable onPress={onPress}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    // marginTop: showBottomBar ? 0 : 20,
                    paddingBottom: Platform.OS === 'ios' ? 5 : 0,
                  }}
                >
                  <TabBarIcon
                    color={
                      isHighlightIcon
                        ? isFocused
                          ? colors.iconSelected
                          : colors.chineseSilver
                        : colors.chineseSilver
                    }
                    size={25}
                  />
                  <Text
                    style={[
                      {
                        fontSize: 11,
                        color: isHighlightIcon
                          ? isFocused
                            ? colors.Shiraz
                            : colors.darkGray
                          : colors.darkGray,
                      },
                    ]}
                  >
                    {label}
                  </Text>
                </View>
              </Pressable>
            </View>
          </Animated.View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    bottom: 0,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 10,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
    borderColor: colors.darkGrayVarientTwo,
    display: 'flex',
  },
});
