import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import AppNavigator from './src/navigations';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Provider } from 'react-native-paper';

const App = () => {
  return (
    <RecoilRoot>
         <Provider>
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
      </Provider>
      </RecoilRoot>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default App;