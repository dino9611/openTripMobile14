import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native'




const DetailScreen=({navigation})=>{

  


    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>INI Detail</Text>
            <Button
                title='GO Back'
                onPress={()=>navigation.goBack()}
            />
        </View>
    )
}


export default DetailScreen