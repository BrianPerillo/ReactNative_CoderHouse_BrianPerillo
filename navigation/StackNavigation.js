import * as React from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import Cart from '../screens/Cart';
import DrawerNavigation from './DrawerNavigation';
import Home from '../screens/Home';
import ProductDetail from '../screens/ProductDetail';
import Products from '../screens/Products';
import { color } from 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';

const StackNavigation = () => {

    const Stack = createStackNavigator();
      
    return ( 

        <Stack.Navigator>

            {/* Por defecto el name de la screen lo va a tomar para el título de la pantalla, pero sino podemos usar el atributo options con 
                y pasarle un title: 'X' para que ese sea el título y name ponerle otra cosa */}
            <Stack.Screen  name="Home" component={Home} options={{ title: 'Home',  headerTintColor: 'white', headerStyle: { backgroundColor: 'orange'} }}/>
            <Stack.Screen  name="Productos" component={Products} options={{ title: 'Productos', headerTintColor: 'white', headerStyle: { backgroundColor: 'orange'}}}/>
            <Stack.Screen  name="Detalle Producto" component={ProductDetail} options={{ title: 'Detalle Producto', headerTintColor: 'white', headerStyle: { backgroundColor: 'orange'}}}/>

        </Stack.Navigator>

     );

}
 
export default StackNavigation;