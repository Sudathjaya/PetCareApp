import React from 'react';
import { useRecoilValue } from 'recoil';
import { createStackNavigator } from '@react-navigation/stack';
import { AppStackGroup, AuthStackGroup, BookingStackGroup, CampusGroup, ClassScheduleGroup, CommiunityStackGroup, DrawerStackGroup, NotificationGroup, ReviewsGroup, ServiceStackGroup, SettingsStackGroup } from './screens/Screens';
import { MenuIcon } from '../resources/SvgIcons';
import { Dimensions, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainMenu from '../components/MainMenu/MainMenu';
import TabNavigation from './TabNavigation';
import constants from '../config/constants';
import { loggedInState } from '../recoil/atoms';
const { width } = Dimensions.get('window');
const { NavigationScreens } = constants.Navigation;

const InitialStack = createStackNavigator();
const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const BookingStack = createStackNavigator();
const ServiceStack = createStackNavigator();
const CommiunityStack = createStackNavigator();
const Drawer = createDrawerNavigator();

let drawerProps;

export const AppStackScreen = () => {

    return (
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {AppStackGroup?.map(({ groupID, screenOptions, screens }) => (
          <AppStack.Group key={groupID} {...screenOptions}>
            {screens?.map(screen => (
              <AppStack.Screen key={screen.name} {...screen} />
            ))}
          </AppStack.Group>
        ))}
      </AppStack.Navigator>
    );
  };

const InitialStackScreen = () => {
  const isLoggedIn = useRecoilValue(loggedInState);
console.log('---isLoggedIn123---', isLoggedIn);
  return (
    <InitialStack.Navigator>
      {isLoggedIn ? (
        <InitialStack.Screen
          options={{
            headerShown: false,
          }}
          name={'DrawerNavigation'}
          component={DrawerNavigation}
        />
      ) : (
        <InitialStack.Screen
          options={{
            headerShown: false,
          }}
          name={'RootStackScreen'}
          component={RootStackScreen}
        />
      )}
    </InitialStack.Navigator>
  );
};

export const SettingsStackScreen = () => (
  <SettingsStack.Navigator
    screenOptions={{
      headerShown: false,
      swipeEnabled: false,
    }}
    initialParams={{ routeParams: null }}
  >
    {SettingsStackGroup?.map(({ groupID, screenOptions, screens }) => (
      <SettingsStack.Group key={groupID} {...screenOptions}>
        {screens?.map(screen => (
          <SettingsStack.Screen key={screen.name} {...screen} />
        ))}
      </SettingsStack.Group>
    ))}
  </SettingsStack.Navigator>
);

export const BookingStackScreen = () => (
  <BookingStack.Navigator
    screenOptions={{
      headerShown: false,
      swipeEnabled: false,
    }}
    initialParams={{ routeParams: null }}
  >
    {BookingStackGroup?.map(({ groupID, screenOptions, screens }) => (
      <BookingStack.Group key={groupID} {...screenOptions}>
        {screens?.map(screen => (
          <BookingStack.Screen key={screen.name} {...screen} />
        ))}
      </BookingStack.Group>
    ))}
  </BookingStack.Navigator>
);

export const CommiunityStackScreen = () => (
  <CommiunityStack.Navigator
    screenOptions={{
      headerShown: false,
      swipeEnabled: false,
    }}
    initialParams={{ routeParams: null }}
  >
    {CommiunityStackGroup?.map(({ groupID, screenOptions, screens }) => (
      <CommiunityStack.Group key={groupID} {...screenOptions}>
        {screens?.map(screen => (
          <CommiunityStack.Screen key={screen.name} {...screen} />
        ))}
      </CommiunityStack.Group>
    ))}
  </CommiunityStack.Navigator>
);

export const ServiceStackScreen = () => (
  <ServiceStack.Navigator
    screenOptions={{
      headerShown: false,
      swipeEnabled: false,
    }}
    initialParams={{ routeParams: null }}
  >
    {ServiceStackGroup?.map(({ groupID, screenOptions, screens }) => (
      <ServiceStack.Group key={groupID} {...screenOptions}>
        {screens?.map(screen => (
          <BookingStack.Screen key={screen.name} {...screen} />
        ))}
      </ServiceStack.Group>
    ))}
  </ServiceStack.Navigator>
);

const AuthStackScreen = () => {
  const isUserLogout = true
  const intialScreen = isUserLogout
    ? NavigationScreens.GETTING_STARTED1
    : NavigationScreens.HOME;

  return (
    <AuthStack.Navigator
      initialRouteName={intialScreen}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      {AuthStackGroup?.map(({ groupID, screenOptions, screens }) => (
        <AuthStack.Group key={groupID} {...screenOptions}>
          {screens?.map(screen => (
            <AppStack.Screen key={screen.name} {...screen} />
          ))}
        </AuthStack.Group>
      ))}
    </AuthStack.Navigator>
  );
};

const DrawerNavigation = () => {
  // const isDrawerHeaderShow = useRecoilValue(drawerHeaderState);
  global.mainMenuState = false;
  // const selectedLg = useRecoilValue(localizeLanguage);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { width: width },
        drawerPosition:"left",
        headerTitleAlign: 'left',
        unmountOnBlur: true,
        swipeEnabled: false,
        headerLeft: () => (
          <View style={{}}>
            <TouchableOpacity
              onPress={() => {
                drawerProps.navigation.toggleDrawer();
              }}
              style={    {width: 5, height: 5, marginLeft: 6}}
            >
              <MenuIcon />
            </TouchableOpacity>
          </View>
        ),
      }}

      drawerContent={props => {
        drawerProps = { ...props };
        return <MainMenu {...props} />;
      }}
    >
      {DrawerStackGroup?.map(({ groupID, screenOptions, screens }) => (
        <Drawer.Group key={groupID} {...screenOptions}>
          {screens?.map(screen => (
            <Drawer.Screen key={screen.name} {...screen} />
          ))}
        </Drawer.Group>
      ))}
    </Drawer.Navigator>
  );
};

const RootStackScreen = () => (
  <RootStack.Navigator name="root">
    <RootStack.Screen
      options={{
        headerShown: false,
      }}
      name={NavigationScreens.AUTH}
      component={AuthStackScreen}
    />
  </RootStack.Navigator>
);

export { InitialStackScreen, DrawerNavigation, RootStackScreen };
