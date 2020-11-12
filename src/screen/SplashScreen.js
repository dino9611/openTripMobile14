import React from 'react';
import {
    View,
    Text
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import TextH1 from '../component/Texth1';
import * as Animatable from 'react-native-animatable'
import Fontawesome from 'react-native-vector-icons/FontAwesome5'
const SplashScreen=()=>{

    return(
   
        <LinearGradient style={{flex:1,justifyContent:'center',alignItems:'center'}} useAngle angle={45} locations={[0.3,0.9]} colors={['#FE6B8B','#FF8E53']}>
            <Animatable.View animation='bounceIn' iterationCount={'infinite'}>
                <TextH1>
                    <Fontawesome
                        name='plane-departure'
                        color='white'
                        size={25}
                    /> 
                    {' Open Trip'}
                </TextH1>
            </Animatable.View>
        </LinearGradient>
     
    )
}


export default SplashScreen