import React from 'react';

import HomeScreen from '../../screens/home/HomeScreen';
import constants from '.././../config/constants';
import strings from '../../resources/strings';
import LoginScreen from '../../screens/login/LoginScreen';
import { BackButton, DrawerRightButtons, HamburgerMenu } from '../../components/Header';
import { Settings, StyleSheet } from 'react-native';
import resources from '../../resources';
import MainMenu from '../../components/MainMenu/MainMenu';
import TabNavigation from '../TabNavigation';
import DetailsScreen from '../../screens/details/DetailsScreen';
import SettingsScreen from '../../screens/settings/SettingsScreen';
import ProfileScreen from '../../screens/profile/ProfileScreen';
import GettingStartedPage1 from '../../screens/gettingStarted/GettingStartedPage1';
import GettingStartedPage2 from '../../screens/gettingStarted/GettingStartedPage2';
import GettingStartedPage3 from '../../screens/gettingStarted/GettingStartedPage3';
import { black, white } from '../../enums/colors';
import PetProfileScreen from '../../screens/petProfile/PetProfileScreen';
import ActivityScreen from '../../screens/community/CommunityScreen';
import EditProfileScreen from '../../screens/petProfile/editPetProfileScreen';
import AddPetProfileScreen from '../../screens/petProfile/addPetDetailsScreen';
import VetProfileScreen from '../../screens/appointments/vetProfileScreen';
import AppointmentScreen from '../../screens/appointments/appointmentScreen';
import AllServiceScreen from '../../screens/allServices/allServicesScreen';
import FoodDetailsScreen from '../../screens/foods/foodDetailsScreen';
import CommiunityScreen from '../../screens/community/CommunityScreen';
import { CommiunityStackScreen } from '../NavigationStack';
import CommunityScreen from '../../screens/community/CommunityScreen';
import NotificationScreen from '../../screens/notification/notificationScreen';
// import HealthRecordsScreen from '../../screens/healthRecordsScreen/HealthRecordsScreen';



const { NavigationScreens } = constants.Navigation;

const Back = props => <BackButton {...props} iconName="LeftArrow" />;

const getNavOptions = ({
  navigation,
  route,
  headerTitle,
  headerLeft: HeaderLeft,
  headerRight: HeaderRight,
  headerShown = false,
  headerTransparent = false,
  headerTitleAlign = 'left',
  key = '',
  lineHeight,
  headerBackgroundContainerStyle,
  drawerLabel = '',
  unmountOnBlur = false,
  headerLeftProps = {},
  headerRightProps = {},
  headerTitleStyle = {},
}) => ({
  headerShown,
  headerTitle,
  headerTitleStyle: {
    ...{
      fontFamily: 'Montserrat-SemiBold',
      fontSize: 16,
      lineHeight: lineHeight || 19.5,
      marginTop: Platform.OS === 'ios' ? 3.5 : null,
    },
    ...headerTitleStyle,
  },
  headerLeft: props =>
    HeaderLeft && (
      <HeaderLeft
        {...props}
        navigation={navigation}
        route={route}
        {...headerLeftProps}
      />
    ),
  headerRight: props =>
    HeaderRight && (
      <HeaderRight
        {...props}
        navigation={navigation}
        route={route}
        {...headerRightProps}
      />
    ),
  headerTransparent,
  headerTitleAlign,
  key,
  headerBackgroundContainerStyle,
  headerShadowVisible: false,
  drawerLabel,
  unmountOnBlur,
});
const DrawerData = props => <MainMenu {...props} />;
const DrawerStackGroup = [
  {
    groupID: 'drawer',
    screenOptions: {
      headerTitleAlign: 'left',
      drawerContent: DrawerData,
    },
    screens: [
      {
        name: NavigationScreens.APP,
        component: TabNavigation,
        options: ({ navigation }) =>
          getNavOptions({
            navigation,
            headerTitle: '',
            headerShown: global.mainMenuState,
            headerRight: DrawerRightButtons,
            headerLeft: HamburgerMenu,
            headerBackgroundContainerStyle: screenStyles.headerContainerStyle,
            key: NavigationScreens.APP,
          }),
      },
    ],
  },
];

const AppStackGroup = [
  {
    groupID: 'app',
    screens: [
      {
        name: NavigationScreens.HOME,
        component: HomeScreen,
        initialParams: { routeParams: null },
        options: ({ navigation, route }) =>
          getNavOptions({
            navigation,
            headerTitle: '',
            headerShown: true,
            lineHeight: 32.5,
            headerLeft: HamburgerMenu,
            headerRight: DrawerRightButtons,
            headerLeftProps: { title: route?.params?.region },
            key: NavigationScreens.HOME,
            headerTransparent: true,
            headerBackgroundContainerStyle: screenStyles.headerContainerStyle,
          }),
      },
      {
        name: NavigationScreens.DETAILS,
        component: DetailsScreen,
        options: ({ navigation }) =>
          getNavOptions({
            navigation,
            headerLeft: HamburgerMenu,
            headerTitle: '',
            headerShown: true,
            key: NavigationScreens.DETAILS,
          }),
      },
      {
        name: NavigationScreens.USER_PROFILE,
        component: ProfileScreen,
        options: ({ navigation }) =>
          getNavOptions({
            navigation,
            headerTitle: strings.MAIN_MENU_PROFILE,
            headerLeft: Back,
            headerShown: true,
            key: NavigationScreens.USER_PROFILE,
          }),
      },
      {
        name: NavigationScreens.PET_PROFILE,
        component: PetProfileScreen,
        options: ({ navigation }) =>
          getNavOptions({
            navigation,
            headerLeft: Back,
            headerTitle: 'Pet Profile',
            headerShown: true,
            key: NavigationScreens.PET_PROFILE,
          }),
      },
      {
        name: NavigationScreens.EDIT_PET_PROFILE,
        component: EditProfileScreen,
        options: ({ navigation }) =>
          getNavOptions({
            navigation,
            headerLeft: Back,
            headerTitle: 'Pet Profile',
            headerShown: true,
            key: NavigationScreens.EDIT_PET_PROFILE,
          }),
      },
      {
        name: NavigationScreens.ACTIVITY,
        component: ActivityScreen,
        options: ({ navigation }) =>
          getNavOptions({
            navigation,
            headerLeft: Back,
            headerTitle: '',
            headerShown: true,
            key: NavigationScreens.ACTIVITY,
          }),
      },
      {
        name: NavigationScreens.NOTIFICATIONS,
        component: NotificationScreen,
        options: ({ navigation }) =>
          getNavOptions({
            navigation,
            headerLeft: Back,
            headerTitle: 'Notification',
            headerShown: true,
            key: NavigationScreens.NOTIFICATIONS,
          }),
      },
    ]
  }
]

const AuthStackGroup = [
  {
    groupID: 'auth',
    headerTransparent: true,
    screens: [
      {
        name: NavigationScreens.GETTING_STARTED1,
        component: GettingStartedPage1,
        initialParams: { routeParams: null },
        options: {
          key: NavigationScreens.GETTING_STARTED1,
        },
      },
      {
        name: NavigationScreens.GETTING_STARTED2,
        component: GettingStartedPage2,
        options: ({ navigation }) =>
          getNavOptions({
            navigation,
            headerTitle: '',
            headerShown: true,
            headerTransparent: true,
            lineHeight: 22.5,
            headerLeft: Back,
            headerRight: DrawerRightButtons,
            headerBackgroundContainerStyle:
              screenStyles.headerIntroContainerStyle,
            unmountOnBlur: true,
            headerLeftProps: {
              iconColor: white,
            },
            headerRightProps:{
            textColor:white
            },
            key: NavigationScreens.GETTING_STARTED2,
          }),
      },
      {
        name: NavigationScreens.GETTING_STARTED3,
        component: GettingStartedPage3,
        options: ({ navigation }) =>
          getNavOptions({
            navigation,
            headerTitle: '',
            headerShown: true,
            headerTransparent: true,
            lineHeight: 22.5,
            headerLeft: Back,
            headerRight: DrawerRightButtons,
            headerBackgroundContainerStyle:
              screenStyles.headerIntroContainerStyle,
            unmountOnBlur: true,
            headerLeftProps: {
              iconColor: white,
            },
            key: NavigationScreens.GETTING_STARTED2,
          }),
      },
      {
        name: NavigationScreens.LOGIN,
        component: LoginScreen,
        options: ({ navigation }) =>
          getNavOptions({
            navigation,
            headerTitle: '',
            headerShown: true,
            headerTransparent: true,
            lineHeight: 22.5,
            headerLeft: Back,
            headerBackgroundContainerStyle:
              screenStyles.headerIntroContainerStyle,
            unmountOnBlur: true,
            headerLeftProps: {
              iconColor: black,
            },
            key: NavigationScreens.LOGIN,
          }),
      },
    ],
  },
];

const SettingsStackGroup = [
  {
    groupID: 'setting',
    headerTransparent: true,
    screens: [
      {
        name: NavigationScreens.SETTINGS,
        component: SettingsScreen,
        initialParams: { routeParams: null },
        options: ({ navigation, route }) =>
          getNavOptions({
            navigation,
            headerTitle: '',
            headerShown: true,
            lineHeight: 32.5,
            headerLeft: HamburgerMenu,
            headerRight: DrawerRightButtons,
            key: NavigationScreens.SETTINGS,
            headerTransparent: true,
            headerBackgroundContainerStyle: screenStyles.headerContainerStyle,
          }),
      },
      {
        name: NavigationScreens.ADD_PET_PROFILE,
        component: AddPetProfileScreen,
        options: ({ navigation }) =>
          getNavOptions({
            navigation,
            headerLeft: Back,
            headerTitle: '',
            headerShown: true,
            key: NavigationScreens.ADD_PET_PROFILE,
          }),
      },
      {
        name: NavigationScreens.NOTIFICATIONS,
        component: NotificationScreen,
        options: ({ navigation }) =>
          getNavOptions({
            navigation,
            headerLeft: Back,
            headerTitle: 'Notification',
            headerShown: true,
            key: NavigationScreens.NOTIFICATIONS,
          }),
      }
    ],
  },
]

const BookingStackGroup = [
  {
    groupID: 'booking',
    headerTransparent: true,
    screens: [
      {
        name: NavigationScreens.APPINTMENT,
        component: AppointmentScreen,
        initialParams: { routeParams: null },
        options: ({ navigation, route }) =>
          getNavOptions({
            navigation,
            headerTitle: '',
            headerShown: true,
            lineHeight: 32.5,
            headerLeft: HamburgerMenu,
            headerRight: DrawerRightButtons,
            key: NavigationScreens.APPINTMENT,
            headerTransparent: true,
            headerBackgroundContainerStyle: screenStyles.headerContainerStyle,
          }),
      },
      {
        name: NavigationScreens.VET_PROFILE,
        component: VetProfileScreen,
        options: ({ navigation }) =>
          getNavOptions({
            navigation,
            headerLeft: Back,
            headerTitle: 'Doctor',
            headerShown: true,
            key: NavigationScreens.VET_PROFILE,
          }),
      },
      {
        name: NavigationScreens.NOTIFICATIONS,
        component: NotificationScreen,
        options: ({ navigation }) =>
          getNavOptions({
            navigation,
            headerLeft: Back,
            headerTitle: 'Notification',
            headerShown: true,
            key: NavigationScreens.NOTIFICATIONS,
          }),
      }
    ],
  },
]

const ServiceStackGroup = [
  {
    groupID: 'service',
    headerTransparent: true,
    screens: [
      {
        name: NavigationScreens.SERVICES,
        component: AllServiceScreen,
        initialParams: { routeParams: null },
        options: ({ navigation, route }) =>
          getNavOptions({
            navigation,
            headerTitle: '',
            headerShown: true,
            lineHeight: 32.5,
            headerLeft: HamburgerMenu,
            headerRight: DrawerRightButtons,
            key: NavigationScreens.SERVICES,
            headerTransparent: true,
            headerBackgroundContainerStyle: screenStyles.headerContainerStyle,
          }),
      },
      {
        name: NavigationScreens.FOOD_DETAILS,
        component: FoodDetailsScreen,
        options: ({ navigation }) =>
          getNavOptions({
            navigation,
            headerLeft: Back,
            headerTitle: 'Foods',
            headerShown: true,
            key: NavigationScreens.FOOD_DETAILS,
          }),
      },
      {
        name: NavigationScreens.NOTIFICATIONS,
        component: NotificationScreen,
        options: ({ navigation }) =>
          getNavOptions({
            navigation,
            headerLeft: Back,
            headerTitle: 'Notification',
            headerShown: true,
            key: NavigationScreens.NOTIFICATIONS,
          }),
      }
    ],
  },
]

const CommiunityStackGroup = [
  {
    groupID: 'commiunity',
    headerTransparent: true,
    screens: [
      {
        name: NavigationScreens.COMMIUNITY,
        component: CommunityScreen,
        initialParams: { routeParams: null },
        options: ({ navigation, route }) =>
          getNavOptions({
            navigation,
            headerTitle: '',
            headerShown: true,
            lineHeight: 32.5,
            headerLeft: HamburgerMenu,
            headerRight: DrawerRightButtons,
            key: NavigationScreens.COMMIUNITY,
            headerTransparent: true,
            headerBackgroundContainerStyle: screenStyles.headerContainerStyle,
          }),
      },
      {
        name: NavigationScreens.NOTIFICATIONS,
        component: NotificationScreen,
        options: ({ navigation }) =>
          getNavOptions({
            navigation,
            headerLeft: Back,
            headerTitle: 'Notification',
            headerShown: true,
            key: NavigationScreens.NOTIFICATIONS,
          }),
      }
    ],
  },
]
const screenStyles = StyleSheet.create({
  headerContainerStyle: {
    backgroundColor: resources.Colors.white,//'#5CB15A'
    shadowColor: 'transparent',
  },
  headerIntroContainerStyle: {
    // backgroundColor: Res.Colors.yellowVarientOne,
    shadowColor: 'transparent',
  },
});

export {
  AppStackGroup,
  DrawerStackGroup,
  AuthStackGroup,
  SettingsStackGroup,
  BookingStackGroup,
  ServiceStackGroup,
  CommiunityStackGroup
};