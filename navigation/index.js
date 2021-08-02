import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import AuthNavigation from './AuthNavigation';
import React from 'react';
import Tab from './Tab';
import { useSelector } from 'react-redux';

const MainNavigator = () => {

    const loggedIn = useSelector(state => state.auth.token);
    
    const MyTheme = {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: 'rgb(255, 45, 85)',
        //   background: 'red',
        },
      };

    return ( 

        <NavigationContainer theme={MyTheme}>

            {
                loggedIn ? 
                    <Tab/>
                   
                : 
                    <AuthNavigation />
            }

        </NavigationContainer>

     );

}
 
export default MainNavigator;

