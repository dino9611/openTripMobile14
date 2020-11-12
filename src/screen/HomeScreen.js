import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native'
import {useDispatch} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
const HomeScreen=()=>{

    const dispatch=useDispatch()
    
    const onLogoutpress=()=>{
        AsyncStorage.removeItem('iduser')
        .then(()=>{
            dispatch({type:'LOGOUT'})
        })
    }

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>INI HOME</Text>
            <Button
                title='Logout'
                onPress={onLogoutpress}
            
            />
        </View>
    )
}


export default HomeScreen