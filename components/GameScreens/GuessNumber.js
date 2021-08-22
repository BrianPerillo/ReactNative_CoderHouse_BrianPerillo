import { Alert, Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, {Fragment, useEffect, useState} from 'react';

import Colors from '../../stylesJS/Colors'
import { StatusBar } from 'expo-status-bar';

const generateRandomBetween = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    const random = Math.floor(Math.random() * (max - min) + min)

      return random;
    
  }
  
  var min=1;
  var max=50;

const GuessNumber = ({ number, setConfirmedNumber, setGuessNumber, setRound }) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(min, max));

    const handleEndGame = () => {
        setConfirmedNumber(0)
    }

    const handleOnPressPista = (data) => {

       if(data == 'mayor' && number > currentGuess){
          // console.log(currentGuess);
          setGuessNumber(currentGuess);
          setRound(prevState=>(prevState+1))
          min = currentGuess;
          console.log('min: ' + min + ' max: ' + max);
          setCurrentGuess(generateRandomBetween(min, max));
        }
       else if (data == 'menor' && number < currentGuess){
        setGuessNumber(currentGuess);
        setRound(prevState=>(prevState+1))
        max = currentGuess
        console.log('min: ' + min + ' max: ' + max);
        setCurrentGuess(generateRandomBetween(min, max));
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

                <Button style={styles.Button}  title="Menor"  onPress={() => handleOnPressPista('menor')}/>
                <Button style={styles.Button} title="Mayor" onPress={() => handleOnPressPista('mayor')}/>

              </View>

              {
                currentGuess == number ? 
                  <Text>El oponente acertó el número</Text>
                :
                <Text></Text>
              }
              
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