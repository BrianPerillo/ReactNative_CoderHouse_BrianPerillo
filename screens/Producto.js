import * as React from 'react';

import {Button, Image, StyleSheet, Text, View} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useSelector } from 'react-redux';

const Producto = ({navigation, route}) => {

    // const item = route.params.item;

    const item = useSelector(state => state.products.selected) || {};

    return ( 

        <View style={styles.screen}>
            <View style={styles.mainCard}>
                <Image style={{width:150, height:150, alignSelf:'center'}} source={{uri:item.img}}/>
                {/* <Text>ID: {item.id}</Text> */}
                <View style={styles.price}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                </View>
            </View>
            <View style={styles.descriptionCard}>
                <Text>Descripción</Text>
                <View style={styles.description}>
                    <Text>{item.description}</Text>
                </View>
            </View>
        </View>

     );


}

const styles = StyleSheet.create({
    
    screen: {
        padding: 30,
        backgroundColor: 'white',
        flex: 1, 
        alignItems:'center'
    },
    mainCard:{
        // backgroundColor:'gray',
        width:'70%',
        padding: 10,
        flexDirection:'column',
    },
    price:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    descriptionCard: {
        marginTop:20,
        width: '100%',
        borderRadius: 3,
    },
    description: {
        marginTop:10,
        padding: 10,
        backgroundColor:'rgb(226, 226, 226)',
        width: '100%',
        borderRadius: 3,
    },
    productName: {
        fontSize:20,
        fontWeight: 'bold',
    },
    productPrice: {
        fontSize:25,
        fontWeight: 'bold',
        color: 'rgb(200, 200, 200)',
    }

  });
  
export default Producto;