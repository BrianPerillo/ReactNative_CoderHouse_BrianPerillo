import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const Cart = () => {



    return ( 

        <View style={styles.screen}>
            <Text>CARRITO</Text>
        </View>

     );

}


const styles = StyleSheet.create({
    
    screen: {
        backgroundColor: '#F0F0F0',
        flex: 1,
        paddingTop:50,
    },

  });

export default Cart;