import * as React from 'react';

import {Button, Image, StyleSheet, Text, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { addItem } from '../store/actions/cart.action';

const Producto = ({navigation, route}) => {

    // const item = route.params.item;

    const item = useSelector(state => state.product.selected) || {};
    const userId = useSelector(state => state.auth.user) || {}; 
    const items = useSelector(state => state.cart.items) || {}; 

    const dispatch = useDispatch();

    const handleOnPressAddToCart = () => {

        console.log("AGREGAR");
        dispatch(addItem(item,items,userId))

    }

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
            <Text>{userId}</Text>
            <View>
                <Button title="Agregar al Carrito" onPress={handleOnPressAddToCart} />
            </View>

        </View>

     );


}

const styles = StyleSheet.create({
    
    screen: {
        paddingTop:50,
        backgroundColor: 'white',
        flex: 0.9, 
        alignItems:'center',
        justifyContent:'space-around',
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
        marginTop:-50,
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