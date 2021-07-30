import Cart from '../screens/Cart';
import CartScreen from '../screens/CartScreen';
import Home from '../screens/Home';
import { Platform } from 'react-native';
import Producto from '../screens/Producto';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabStack = createBottomTabNavigator();

const Tab = () => {
    
    return(
        <TabStack.Navigator initialRouteName="Cart">
            
            <TabStack.Screen name="Home" component={Home} options={{ title: 'Inicio'}} />
            <TabStack.Screen name="Carrito" component={Cart} options={{ title: 'Carrito'}} />

        </TabStack.Navigator>
    )
}
 
export default Tab;