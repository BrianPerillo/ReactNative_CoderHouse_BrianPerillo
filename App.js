import React, {Fragment, useEffect, useState} from 'react';
import { StyleSheet, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import Colors from './stylesJS/Colors';
import GuessNumber from './components/GameScreens/GuessNumber';
import Header from './components/Header';
import StartGameScreen from './components/StartGameScreen';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function App() {

  const [title, setTitle] = useState('Titulo');
  const [confirmedNumber, setConfirmedNumber] = useState(0);  
  const [guessNumber, setGuessNumber] = useState(null);
  const [round, setRound] = useState(0)
  const [dataLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
  
    if(!confirmedNumber && round==0) {
      inicio = <StartGameScreen  setConfirmedNumber={setConfirmedNumber} />
    } 
    else{
      inicio = <GuessNumber number={confirmedNumber} setConfirmedNumber={setConfirmedNumber} setGuessNumber={setGuessNumber} setRound={setRound}/>
    }


  useEffect(() => {
    
    

  }, [])

  return (

    !dataLoaded ? 

      <AppLoading />

    : 
    
    <View style={styles.screen}>

      <View>
        <Header title={title}/>
      </View>

      <View style={styles.Content}>
        
        {inicio}

      </View>

    </View>

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
