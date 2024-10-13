import { atom } from 'recoil';

export const loggedInState = atom({
  key: 'isLoggedIn',
  default: false,
});

export const localizeLanguage = atom({
  key: 'localizeLanguage',
  default: 'en',
});

export const appLogout = atom({
  key: 'appLogout',
  default: false,
});

export const forceLogout = atom({
  key: 'forceLogout',
  default: false,
});

export const userDetails = atom({
  key: 'userDetails',
  default: {
    UserName: '',
    Phone: '',
  },
});

export const drawerHeaderState = atom({
  key: 'isDrawerHeaderShow',
  default: true,
});

export const mainMenu = atom({
  key: 'mainMenu',
  default: false,
});


export const profile = atom({
  key: 'profile',
  default: false,
});

export const currentScreenValue = atom({
  key: 'currentScreen',
  default: '',
});

export const mainScreen = atom({
  key: 'mainScreen',
  default: 'dashBoard',
});

export const isBottomTabNavigatorShow = atom({
  key: 'isBottomTabNavigatorShow',
  default: true,
});

export const isBottomTabNavigatorQuickHide = atom({
  key: 'isBottomTabNavigatorQuickHide',
  default: false,
});

export const isEnableHighlight = atom({
  key: 'isEnableHighlight',
  default: true,
});

export const profileImage = atom({
  key: 'profileImage',
  default: '',
});

export const currentUser = atom({
  key: 'currentUser',
  default: null,
});

export const token = atom({
  key: 'token',
  default: '',
});

export const isLoadingEnable = atom({
  key: 'isLoadingEnable',
  default: false,
});