import React from 'react';
import {
    SafeAreaView,
    Text,
    Button,
    StatusBar,
    Platform,
    View
} from 'react-native'
import {useDispatch} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LinearGradient from 'react-native-linear-gradient'
import TextH1 from './../component/Texth1'

const HomeScreen=({navigation})=>{

    const dispatch=useDispatch()

    const onLogoutpress=()=>{
        AsyncStorage.removeItem('iduser')
        .then(()=>{
            dispatch({type:'LOGOUT'})
        })
    }
    
    return(
        <View style={{flex:1}}>
            <LinearGradient 
                style={{
                    height:150,
                    width:150,
                    borderRadius:75,
                    alignSelf:'center',
                    transform:[{translateY:-20},{scaleX:5}],
                   
                }} 
                useAngle 
                angle={45} 
                locations={[0.3,0.9]} 
                colors={['#FE6B8B','#FF8E53']}
            >     
            </LinearGradient>
            <View style={{position:'absolute',top: Platform.OS ==='ios'?40:10,width:"100%",flex:1,paddingHorizontal:20}}>
                <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                    <TextH1 style={{fontSize:25,fontWeight:'500'}}>Halo,dino</TextH1>
                </View>
                <Text>INI HOME</Text>
                    <Button
                        title='to details'
                        onPress={()=>navigation.navigate('Details')}
                    />
            </View>
        </View>
    )
}


export default HomeScreen