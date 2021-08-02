import Cart from '../screens/Cart';
import Home from '../screens/Home';
import { Ionicons } from '@expo/vector-icons';
import Producto from '../screens/Producto';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { get_cart_first_time } from '../store/actions/cart.action';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const TabStack = createBottomTabNavigator();

const Tab = () => {
    
    const dispatch = useDispatch();
    const userId = useSelector(state => state.auth.user) || {}; 

    useEffect(() => {

        dispatch(get_cart_first_time(userId))

    }, [])
    
    

    return(
        
        <TabStack.Navigator 
            initialRouteName="Cart"
            tabBarOptions={{
                showLabel:false,
                style: {
                    position:'absolute',
                    bottom:25,
                    left:20,
                    right:20,
                    elevation:0,
                    borderRadius:15,
                    height:90,
                    ...styles.shadow,
            }
            
        }}>
            
            <TabStack.Screen 
                name="Home" 
                component={Home} 
                options={{ 
                    title: 'Producto',
                    tabBarIcon: ({focused}) => (
                        <View style={styles.item}>
                           <Ionicons name="md-home" size={24} color="black"/> 
                           <Text>Home</Text>
                        </View>
                    )
                }}
            />

            <TabStack.Screen 
                name="Producto" 
                component={Producto} 
                options={{ 
                    title: 'Producto',
                    tabBarIcon: ({focused}) => (
                        <View style={styles.item}>
                           <Ionicons name="home" size={24} color="black"/>
                           <Text>Producto</Text>
                        </View>
                    )
                }}
            />
            
            <TabStack.Screen 
                name="Carrito" 
                component={Cart} 
                options={{ 
                    title: 'Carrito',
                    tabBarIcon: ({focused}) => (
                        <View style={styles.item}>
                           <Ionicons name="md-home" size={24} color="black"/> 
                           <Text>Carrito</Text>
                        </View>
                    )
                }}
                />

        </TabStack.Navigator>
    )
}
 
const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7f5df0',
        shadowOffset: {width:0,height:0},
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation:5, 
    },
    item: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Tab;