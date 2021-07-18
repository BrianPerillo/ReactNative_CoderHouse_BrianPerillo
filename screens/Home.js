import * as React from 'react';

import {Button, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { findCurrentItem } from '../store/actions/findCurrentItem';
import { items } from '../data/products';
import { useDispatch } from 'react-redux';

const Home = ({navigation}) => {

    const dispatch = useDispatch();

    const handleOnPress = (product) => {
        console.log(product.id);
        dispatch(findCurrentItem(product.id));
        navigation.navigate('Producto', { name: product.name }); 
    }

    return ( 

        <View style={styles.screen}>
          
          <TextInput placeholder="Search" style={{height:30, borderBottomWidth:1, borderBottomColor:'gray', marginTop:10}}/>

          <FlatList 
            data={items} 
            renderItem={data => {
            return (
                // <Pressable onPress={()=>navigation.navigate('Producto', {item: data.item} )}>
                <Pressable onPress={() => handleOnPress(data.item)}>
                    <View style={styles.productCard}>
                        <Image style={{height:80, width:80}} source={{uri: data.item.img}}/>
                        <Text style={{fontSize:16}}>{data.item.name}</Text>
                        <Text style={{color:'gray',fontSize:16}}>{data.item.price}</Text>
                        {/* <FontAwesomeIcon icon="arrow" /> */}
                        <Text style={{color:'gray',fontSize:16}}>></Text>
                    </View>
                </Pressable>
            );
          }}
          keyExtractor={(item) => item.id.toString()}
          />

        </View>

     );
  
}

const styles = StyleSheet.create({
    
    screen: {
        backgroundColor: '#F0F0F0',
        flex: 1,
    },
    productCard: {
        flexDirection: 'row',
        flexGrow:1,
        justifyContent:'space-between',
        alignItems:'center',
        padding: 10,
        backgroundColor:'white',
        borderBottomColor:'gray',
        borderBottomWidth:0.5,
    },

  });

export default Home;

