import * as React from 'react';

import Home from '../screens/Home';
import ProductDetail from '../screens/ProductDetail';
import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerNavigation = () => {

    const Drawer = createDrawerNavigator();
      
    return ( 

        <Drawer.Navigator>

            <Drawer.Screen  name="Home" component={Home} />
            <Drawer.Screen  name="Producto" component={ProductDetail} />

        </Drawer.Navigator>

     );

}
 
export default DrawerNavigation;