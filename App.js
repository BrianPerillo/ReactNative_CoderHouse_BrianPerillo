import React, {useEffect, useState} from 'react';

import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import MainNavigator from './navigation';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { fetchCart } from './db';
import { init } from './db';
import { insertProduct } from './db';
import store from './store';
import { useFonts } from 'expo-font';

export default function App() {

  // const [dataLoaded] = useFonts({
  //   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  // })
  
  init()
  .then(() => console.log('Database initialized'))
  .catch((err) => {
    console.log('Database failed to connect');
    console.log(err.message)
  });
  

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
