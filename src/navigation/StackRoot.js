import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import TabRoot from './TabRoot'
import DetailScreen from './../screen/DetailScreen'

const Stack=createStackNavigator()

const StackRoot=()=>{
    return(
        <Stack.Navigator headerMode='none'>
            <Stack.Screen name='TabRoot' component={TabRoot} />
            <Stack.Screen name='Details' component={DetailScreen}/>
        </Stack.Navigator>
    )
}

export default StackRoot
