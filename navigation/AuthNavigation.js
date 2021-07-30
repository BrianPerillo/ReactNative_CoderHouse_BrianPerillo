import * as React from 'react';

import { DefaultTheme, NavigationContainer } from '@react-navigation/native';

import AuthScreen from '../screens/user/AuthScreen';
import { color } from 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';

const AuthNavigation = () => {

    const AuthStack = createStackNavigator();

    return ( 

        <AuthStack.Navigator       
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
            }}>

            <AuthStack.Screen name="Login" component={AuthScreen} />

        </AuthStack.Navigator>

     );

}
 
export default AuthNavigation;
