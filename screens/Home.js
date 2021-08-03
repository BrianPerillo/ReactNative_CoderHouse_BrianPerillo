import {  } from '../store/actions/ProductsAction';

import * as React from 'react';

import {Button, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import { findCurrentCategoryItems, findCurrentItem, findItemsByName } from '../store/actions/ProductsAction';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Icon from "react-native-vector-icons/Ionicons";
import { Ionicons } from '@expo/vector-icons';
import { SearchBar } from 'react-native-elements';
import { categories } from '../data/categories';
import { items } from '../data/products';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Home = ({navigation}) => {

    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    const handleOnPress = (category) => {
        console.log(category.name);
        dispatch(findCurrentCategoryItems(category.name));
        navigation.navigate('Productos', { name: category.name }); 
    }

    // const handleOnChangeText = (text) => {     
    //     setSearch(text);
    //     dispatch(findCategory(text));
    // }


    return (

        <View style={styles.screen}>

{/*                       
          <SearchBar
            placeholder="Buscá un producto..."
            onChangeText={text => handleOnChangeText(text)}
            value={search}
            // lightTheme='default'
            showLoading
            /> */}

          <FlatList
            data={categories} 
            renderItem={data => {
            return (
                // <Pressable onPress={()=>navigation.navigate('Producto', {item: data.item} )}>
                <Pressable onPress={() => handleOnPress(data.item)}>
                    <View style={styles.productCard}>
                        <Image style={{height:80, width:80}} source={{uri: data.item.img}}/>
                        <Text style={{fontSize:16}}>{data.item.name}</Text>
                        {/* <Text style={{color:'orange',fontSize:16}}>${data.item.price}</Text> */}
                        {/* <FontAwesomeIcon icon="arrow" /> */}
                        <Ionicons name="arrow-forward-circle-sharp" size={24} color="orange"/> 
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
        backgroundColor: 'white',
    },
    searchSection: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        borderBottomColor:'#efefef',
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        // width:'80%',height:40, borderWidth:1, borderColor:'gray', padding:10 ,borderBottomColor:'gray'
    },
    productCard: {
        flexDirection: 'row',
        flexGrow:1,
        justifyContent:'space-between',
        alignItems:'center',
        padding: 10,
    },

  });

export default Home;

