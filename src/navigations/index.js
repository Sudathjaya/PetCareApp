import React, { useEffect, useRef } from 'react';
import 'react-native-reanimated';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { InitialStackScreen } from './NavigationStack';
import { currentScreenValue, drawerHeaderState, isBottomTabNavigatorQuickHide, isBottomTabNavigatorShow, isEnableHighlight, isLoadingEnable, loggedInState } from '../recoil/atoms';
import constants from '../config/constants';
import Spinner from 'react-native-loading-spinner-overlay';
const { NavigationScreens } = constants.Navigation;

const bottomBarHideScreens = [
  NavigationScreens.LANDING,
];

const enableHighlightScreens = [
  NavigationScreens.HOME,
  NavigationScreens.CLASS_SCHEDULE,
  NavigationScreens.REVIEW,
  NavigationScreens.NOTIFICATIONS,
  NavigationScreens.CAMPUS,
];

const AppNavigator = () => {
  const isLoadingState = useRecoilValue(isLoadingEnable);
  const isLoggedIn = useRecoilValue(loggedInState);
  const setEnableHighlight = useSetRecoilState(isEnableHighlight);

  const setLoggedInState = useSetRecoilState(loggedInState);
  const routeNameRef = useRef();
  const setDrawerHeaderState = useSetRecoilState(drawerHeaderState);
  const setShowBottomBar = useSetRecoilState(isBottomTabNavigatorShow);
  const setCurrentScreen = useSetRecoilState(currentScreenValue);
  const setQuickHideBottomBar = useSetRecoilState(
    isBottomTabNavigatorQuickHide,
  );
  const navigationRef = useNavigationContainerRef();


  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const currentRouteName = navigationRef.getCurrentRoute().name;
        console.log('current screen--->', currentRouteName);
        setCurrentScreen(currentRouteName)
        if (x.includes(currentRouteName)) {
          setEnableHighlight(true);
        } else {
          setEnableHighlight(false);
        }

        if (bottomBarHideScreens.includes(currentRouteName)) {
          console.log('------currentRouteName----', currentRouteName);
          setShowBottomBar(false);
        }
        if (currentRouteName === NavigationScreens.HOME) {
          console.log('------currentRouteName2----', currentRouteName);
          setDrawerHeaderState(true);
          setQuickHideBottomBar(false);
          setShowBottomBar(true);
        }
        else {
          setDrawerHeaderState(false);
        }

        routeNameRef.current = currentRouteName;
      }}
    >
      <Spinner
        visible={isLoadingState}
        // textContent={'Loading...'}
        textStyle={{ color: '#FF7D54' }}
      />
      <InitialStackScreen />
    </NavigationContainer>
  );
};

export default AppNavigator;
