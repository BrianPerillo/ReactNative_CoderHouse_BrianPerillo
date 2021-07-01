import { Alert, Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {Fragment, useEffect, useState} from 'react';

import Colors from '../../stylesJS/Colors'
import { StatusBar } from 'expo-status-bar';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const random = Math.floor(Math.random() * (max - min) + min)
  
    if (random === exclude) {
      return generateRandomBetween(min, max, exclude)
    } else {
      return random;
    }
  }

const GuessNumber = ({ number, setConfirmedNumber, setGuessNumber, setRound }) => {
    
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, number));

    const handleEndGame = () => {
        setConfirmedNumber(0)
    }

    const handleOnPressPista = (data) => {

       if(data == 'mayor' && number > currentGuess){
          setGuessNumber(currentGuess);
          setRound(prevState=>(prevState+1))
       }
       else if (data == 'menor' && number < currentGuess){
        setGuessNumber(currentGuess);
        setRound(prevState=>(prevState+1))
       }
       else{
        Alert.alert(
          "",
          "Sabés que no es verdad",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
       }

    }

    
    return (  

            <View style={styles.Card}>

              <Text>La suposición del oponente</Text>
              <Text>{currentGuess}</Text>

              <View style={styles.FloatButtons}>

                <Button style={styles.Button}  title="Menor" color={Colors.primary}  onPress={() => handleOnPressPista('menor')}/>
                <Button style={styles.Button} title="Mayor" color={Colors.secondary} onPress={() => handleOnPressPista('mayor')}/>

              </View>
              
              {/* <Button title="TERMINAR" onPress={handleEndGame} color={Colors.accent} /> */}
            </View>

    );

}
 
const styles = StyleSheet.create({

  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  Card:{
    width: '100%',
    display: 'flex',
    justifyContent:'space-between',
    flexGrow: 1,
    alignSelf:'center',
    backgroundColor:'rgb(219, 219, 219)',
    padding: 20,
  },
  FloatButtons:{
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    
  },
  Button:{
      backgroundColor:Colors.primary, 
      width: Dimensions.get('window').width / 4,
      padding: 10,
  }

});
  

export default GuessNumber;