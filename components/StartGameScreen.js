import { Button, Dimensions, FlatList, Image, Modal, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, TouchableWithoutFeedbackComponent, View } from 'react-native';
import React, {Fragment, useEffect, useState} from 'react';

import Colors from '../stylesJS/Colors'
import { StatusBar } from 'expo-status-bar';

const StartGameScreen = (props) => {

    const [number, setNumber] = useState('');

    const handleOnPressDescartar = () => {
        setNumber('');
        props.setConfirmedNumber('');

    }

    const handleOnPressConfirmar = () => {

        if(number != null && number != 0){
            props.setConfirmedNumber(number);
        }
    }

    const handleOnChangeText = (text) => {

        console.log(text);
        setNumber(text);

    }


    return (  

        <View style={styles.Card}>
            {/* <Text>Elija un número</Text> */}
            <TextInput style={styles.Input} value={number} keyboardType='number-pad' placeholder="Ingresá un número" onChangeText={handleOnChangeText}></TextInput>
            <View style={styles.FloatButtons}>
                <Button style={styles.Button}  title="Confirmar" color={Colors.primary} onPress={handleOnPressConfirmar}/>
                <Button style={styles.Button} title="Descartar" color={Colors.secondary} onPress={handleOnPressDescartar}/>
            </View>
        </View>

    );

}
 
const styles = StyleSheet.create({

    Card:{
        width: '100%',
        display: 'flex',
        justifyContent:'space-between',
        flexGrow: 1,
        alignSelf:'center',
        backgroundColor:'rgb(219, 219, 219)',
        padding: 20,
    },

    Input:{
        alignSelf:'center',
        borderBottomColor: 'gray',
        borderBottomWidth:1,
        marginBottom:30
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
  

export default StartGameScreen;