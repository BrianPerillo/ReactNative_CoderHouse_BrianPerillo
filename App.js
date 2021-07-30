import { Button, FlatList, Image, Modal, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableWithoutFeedbackComponent, View } from 'react-native';
import React, {Fragment, useEffect, useState} from 'react';

import AppLoading from 'expo-app-loading';
import BreadNavigation from './navigation/BreadNavigation';
import Colors from './stylesJS/Colors';
import GuessNumber from './components/GameScreens/GuessNumber';
import Header from './components/Header';
import MainNavigator from './navigation';
import { Provider } from 'react-redux';
import StartGameScreen from './components/StartGameScreen';
import { StatusBar } from 'expo-status-bar';
import store from './store';
import { useFonts } from 'expo-font';

export default function App() {

  const [title, setTitle] = useState('Titulo');
  const [confirmedNumber, setConfirmedNumber] = useState(null);  
  const [guessNumber, setGuessNumber] = useState(null);
  const [round, setRound] = useState(0)
  const [dataLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })


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
