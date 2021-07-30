import * as React from 'react';

import {Button, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Icon from "react-native-vector-icons/Ionicons";
import { SearchBar } from 'react-native-elements';
import { findCurrentItem } from '../store/actions/findCurrentItem';
import { findItemsByName } from '../store/actions/findItemsByName';
import { items } from '../data/products';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Home = ({navigation}) => {

    const [search, setSearch] = useState('');

    const dispatch = useDispatch();

    const handleOnPress = (product) => {
        console.log(product.id);
        dispatch(findCurrentItem(product.id));
        navigation.navigate('Producto', { name: product.name }); 
    }

    const handleOnChangeText = (text) => {     
        setSearch(text);
        dispatch(findItemsByName(text));
    }

    const items = useSelector(state => state.filtered_products_by_name.filtered_products) || {}

    return (

        <View style={styles.screen}>

          {/* <View style={styles.searchSection}>
            <Icon
                style={styles.searchIcon}
                name="md-search"
                color="#ccc"
                size={25}
            />
            <TextInput 
            placeholder="Buscar por nombre de producto"
            style={styles.input}
            onChangeText={text => handleOnChangeText(text)} />
          </View> */}

          <SearchBar
            placeholder="Buscá un producto..."
            onChangeText={text => handleOnChangeText(text)}
            value={search}
            lightTheme='default'
            showLoading
        />

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
        paddingTop:50,
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
        backgroundColor:'white',
        borderBottomColor:'gray',
        borderBottomWidth:0.5,
    },

  });

export default Home;
