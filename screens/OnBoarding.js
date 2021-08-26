import {Animated, Button, FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions} from 'react-native';
import React, {useRef, useState} from 'react';

import Paginator from '../components/Paginator';

const OnBoarding = ({navigation}) => {

    const {width} = useWindowDimensions();
    
    // const [currentIndex, setcurrentIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current;
    // const slidesRef = useRef(null);

    // const viewableItemsChanged = useRef(({ viewableItems }) => {
    //     setcurrentIndex(viewableItems[0].index);
    // }).current

    // const viewConfig = useRef({viewAreaCoveragePercentTreshold: 50 }).current;

    const onBoardingItems = [
        
        {
            id: 1,
            name: 'first',
            image: require('../assets/e_commerce_logo.png'),
            text: 'Bienvenido',
            text2: ' a E Commerce !',
            background: 'orange'
        },
    ]

    const handleOnPressStart = () => {

        navigation.navigate('LogIn', { screen: 'Intro' });
        
    }
    
    return ( 
        
        <View style={styles.container}>
                
                                <View>
                                                                    
                                    <View style={styles.footer}>

                                        <Text style={{color:'#59e0e3', fontSize:25, fontWeight:'bold', textAlign:'center', marginBottom:20}}>{onBoardingItems.text}</Text>
                                        <Text style={{color:'#59e0e3', fontSize:25, fontWeight:'bold', textAlign:'center'}}>{onBoardingItems.text2}</Text>


                                        </View>

                                        <View style={styles.header}>
                                        <Image style={[styles.image, {width, resizeMode:'contain'} ]} source={onBoardingItems.image} />

                                                <TouchableOpacity
                                                    style={styles.buttonTouchable}
                                                    onPress={handleOnPressStart}
                                                    > 
                                                    <Text style={styles.buttonText}>Comenzar</Text>
                                                </TouchableOpacity>

                                        </View>

                                </View>                

       
                <Paginator data={onBoardingItems} scrollX={scrollX} />

        </View>

     );
}

 
export default OnBoarding;

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'white',  
        // paddingVertical:20
    },
    image:{
        flex:1, 
    },
    header:{
        flex:0.8, 
        // backgroundColor: "#23c3c7",
    },
    footer:{
        flex:0.2, 
        backgroundColor:'white',
        // width: '100%',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
        justifyContent:'flex-end',
        padding: 15,
        alignItems: 'center',

    },
    buttonTouchable: {
        backgroundColor: "#59e0e3",
        alignItems: "center",
        alignSelf:'center',
        padding: 10,
        paddingHorizontal:50,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#59e0e3',
        position: 'relative',
        // marginTop: 25,
        marginBottom:50
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        fontWeight:'bold',
        borderRadius: 40,

      },

})