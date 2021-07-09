import * as React from 'react';

import {Button, FlatList, Image, Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Home = ({navigation}) => {

    const items = [
        {
            id: Math.random(),
            name: 'Remera',
            img: 'https://tse1.mm.bing.net/th?id=OIP.7BlM7tXxR7Sbl2V_7Z05_QHaHa&pid=Api&P=0&w=300&h=300',
            description: 'Descripción Remera',
            price: 4200,
        },
        {
            id: Math.random(),
            name: 'Zapatilla',
            img: 'https://tse1.mm.bing.net/th?id=OIP.CKWtV1UnAJO5COmEXTI6tAHaHa&pid=Api&P=0&w=300&h=300',
            description: 'Descripción Zapatilla',
            price: 12500,            
        },
        {
            id: Math.random(),
            name: 'Pantalón',
            img: 'https://tse1.mm.bing.net/th?id=OIP.sSMFxh__RSpSoFIHraTAtQHaHa&pid=Api&P=0&w=300&h=300',
            description: 'Descripción Pantalón',
            price: 6000,
        },
        {
            id: Math.random(),
            name: 'Remera',
            img: 'https://tse1.mm.bing.net/th?id=OIP.7BlM7tXxR7Sbl2V_7Z05_QHaHa&pid=Api&P=0&w=300&h=300',
            description: 'Descripción Remera',
            price: 4200,
        },
        {
            id: Math.random(),
            name: 'Zapatilla',
            img: 'https://tse1.mm.bing.net/th?id=OIP.CKWtV1UnAJO5COmEXTI6tAHaHa&pid=Api&P=0&w=300&h=300',
            description: 'Descripción Zapatilla',
            price: 12500,            
        },
        {
            id: Math.random(),
            name: 'Pantalón',
            img: 'https://tse1.mm.bing.net/th?id=OIP.sSMFxh__RSpSoFIHraTAtQHaHa&pid=Api&P=0&w=300&h=300',
            description: 'Descripción Pantalón',
            price: 6000,
        },
        {
            id: Math.random(),
            name: 'Remera',
            img: 'https://tse1.mm.bing.net/th?id=OIP.7BlM7tXxR7Sbl2V_7Z05_QHaHa&pid=Api&P=0&w=300&h=300',
            description: 'Descripción Remera',
            price: 4200,
        },
        {
            id: Math.random(),
            name: 'Zapatilla',
            img: 'https://tse1.mm.bing.net/th?id=OIP.CKWtV1UnAJO5COmEXTI6tAHaHa&pid=Api&P=0&w=300&h=300',
            description: 'Descripción Zapatilla',
            price: 12500,            
        },
        {
            id: Math.random(),
            name: 'Pantalón',
            img: 'https://tse1.mm.bing.net/th?id=OIP.sSMFxh__RSpSoFIHraTAtQHaHa&pid=Api&P=0&w=300&h=300',
            description: 'Descripción Pantalón',
            price: 6000,
        },
        {
            id: Math.random(),
            name: 'Remera',
            img: 'https://tse1.mm.bing.net/th?id=OIP.7BlM7tXxR7Sbl2V_7Z05_QHaHa&pid=Api&P=0&w=300&h=300',
            description: 'Descripción Remera',
            price: 4200,
        },
        {
            id: Math.random(),
            name: 'Zapatilla',
            img: 'https://tse1.mm.bing.net/th?id=OIP.CKWtV1UnAJO5COmEXTI6tAHaHa&pid=Api&P=0&w=300&h=300',
            description: 'Descripción Zapatilla',
            price: 12500,            
        },
        {
            id: Math.random(),
            name: 'Pantalón',
            img: 'https://tse1.mm.bing.net/th?id=OIP.sSMFxh__RSpSoFIHraTAtQHaHa&pid=Api&P=0&w=300&h=300',
            description: 'Descripción Pantalón',
            price: 6000,
        },
        {
            id: Math.random(),
            name: 'Remera',
            img: 'https://tse1.mm.bing.net/th?id=OIP.7BlM7tXxR7Sbl2V_7Z05_QHaHa&pid=Api&P=0&w=300&h=300',
            description: 'Descripción Remera',
            price: 4200,
        },
        {
            id: Math.random(),
            name: 'Zapatilla',
            img: 'https://tse1.mm.bing.net/th?id=OIP.CKWtV1UnAJO5COmEXTI6tAHaHa&pid=Api&P=0&w=300&h=300',
            description: 'Descripción Zapatilla',
            price: 12500,            
        },
        {
            id: Math.random(),
            name: 'Pantalón',
            img: 'https://tse1.mm.bing.net/th?id=OIP.sSMFxh__RSpSoFIHraTAtQHaHa&pid=Api&P=0&w=300&h=300',
            description: 'Descripción Pantalón',
            price: 6000,
        },
        {
            id: Math.random(),
            name: 'Remera',
            img: 'https://tse1.mm.bing.net/th?id=OIP.7BlM7tXxR7Sbl2V_7Z05_QHaHa&pid=Api&P=0&w=300&h=300',
            description: 'Descripción Remera',
            price: 4200,
        },
        {
            id: Math.random(),
            name: 'Zapatilla',
            img: 'https://tse1.mm.bing.net/th?id=OIP.CKWtV1UnAJO5COmEXTI6tAHaHa&pid=Api&P=0&w=300&h=300',
            description: 'Descripción Zapatilla',
            price: 12500,            
        },
        {
            id: Math.random(),
            name: 'Pantalón',
            img: 'https://tse1.mm.bing.net/th?id=OIP.sSMFxh__RSpSoFIHraTAtQHaHa&pid=Api&P=0&w=300&h=300',
            description: 'Descripción Pantalón',
            price: 6000,
        },        
    ]

    return ( 

        <View style={styles.screen}>
          
          <TextInput placeholder="Search" style={{height:30, borderBottomWidth:1, borderBottomColor:'gray', marginTop:10}}/>

          <FlatList 
            data={items} 
            renderItem={data => {
            return (
                <Pressable onPress={()=>navigation.navigate('Producto', {item: data.item} )}>
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

