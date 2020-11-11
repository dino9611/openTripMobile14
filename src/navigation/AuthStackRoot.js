import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import LoginScreen from './../screen/LoginScreen'
const Stack=createStackNavigator()

const AuthStackRoot=()=>{
    return(
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='Login' component={LoginScreen}/>
        </Stack.Navigator>
    )
}
export default AuthStackRoot