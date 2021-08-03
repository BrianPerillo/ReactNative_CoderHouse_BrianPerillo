import React, {useEffect, useState} from 'react';

import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import MainNavigator from './navigation';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import store from './store';
import { useFonts } from 'expo-font';

export default function App() {

  // const [dataLoaded] = useFonts({
  //   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  // })


  useEffect(() => {
    

  }, [])

  return (

    <Provider store={store}>
      <MainNavigator/>
    </Provider>

  );
}

const styles = StyleSheet.create({

  button: {
    padding: 20,
    margin:10,
  },

  screen: {
    paddingTop: 40,
  },

  Content: {
    padding: '10%',
  }

});
