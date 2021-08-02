import { Button, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { deleteItem } from '../store/actions/cart.action';
import { findCurrentItem } from '../store/actions/findCurrentItem';

const Cart = ({navigation}) => {
  
    const dispatch = useDispatch();

    const items = useSelector(state => state.cart.items) || null
    const total_price = useSelector(state => state.cart.total) || null
    const userId = useSelector(state => state.auth.user) || null; 

    console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
    console.log(items);

    const handleOnPressDelete = (itemId) => {
        console.log(itemId); 
        dispatch(deleteItem(itemId,items,userId))

    } 

    const handleOnPressDetail = (product) => {

        console.log(product.id);
        dispatch(findCurrentItem(product.id));
        navigation.navigate('Producto', { name: product.name }); 
        
    } 

    const handleOnPressBuy = () => {
        
    } 


    return ( 

        <View style={styles.screen}>
            <View style={{marginTop:0}}>
               
                {
                
                    items.length > 0 ?
                    
                    <View style={{flex:0.95}}> 
                        
                        <FlatList
                            data={items} 
                            renderItem={data => {
                            return (
                                <Pressable>
                                    <View style={styles.orderCard}>
                                        <Image style={{height:80, width:80}} source={{uri: data.item.img}}/>
                                        {/* <Text style={{fontSize:16}}>{data.item.name}</Text>
                                        <Text style={{color:'gray',fontSize:16}}>{data.item.price}</Text> */}
                                        <View style={{flex:0.5, flexDirection:'row', justifyContent:'flex-end', justifyContent:'space-between'}}>
                                            <Button title="Ver"  onPress={()=>handleOnPressDetail(data.item)} />
                                            <Button title="Eliminar"  onPress={()=>handleOnPressDelete(data.item.id)} />
                                        </View>
                                    </View>
                                </Pressable>
                            );
                            }}
                        keyExtractor={(item) => item.id.toString()}
                        />
                        <View style={{backgroundColor:'white',height:100}}>
                            <Text style={{flex:1, alignSelf:'center', alignContent:'flex-start', position:'absolute', bottom:120}}>Total: {total_price}</Text>
                            <Button style={{position:'absolute', bottom:0}} title="Confirmar Compra"  onPress={handleOnPressBuy}/>
                        </View>
                    </View>

                    :
                    
                    <Text style={{fontSize:16}}>Vacío</Text>
                }
                 
          </View>
        </View>

     );

}


const styles = StyleSheet.create({
    
    screen: {
        backgroundColor: '#F0F0F0',
        flex: 1,
        paddingTop:50,
        backgroundColor: 'white',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    orderCard: {
        width: '90%',
        padding: 10,
        margin: 10,
        flexDirection: 'row',
        flexGrow:1,
        justifyContent:'space-between',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:'white',
    },

  });

export default Cart;