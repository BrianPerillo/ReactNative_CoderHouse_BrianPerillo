import * as React from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';
import Producto from '../screens/Producto';
import { color } from 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';

const BreadNavigation = () => {

    const Stack = createStackNavigator();
      
    return ( 

        <Stack.Navigator>

            {/* Por defecto el name de la screen lo va a tomar para el título de la pantalla, pero sino podemos usar el atributo options con 
                y pasarle un title: 'X' para que ese sea el título y name ponerle otra cosa */}
            <Stack.Screen  name="Home" component={Home} options={{ title: 'Inicio'}}/>
            <Stack.Screen  name="Producto" component={Producto} options={{ title: 'Producto'}}/>

        </Stack.Navigator>

     );

}
 
export default BreadNavigation;