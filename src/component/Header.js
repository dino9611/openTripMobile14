import React from 'react';
import LinearGradient from 'react-native-linear-gradient'


const Header=(props)=>{
    return(
        <LinearGradient 
            style={[{
                height:50,
                width:'100%',
                alignSelf:'center',
                flexDirection:'row'
            },props.style]} 
            useAngle 
            angle={45} 
            locations={[0.3,0.9]} 
            colors={['#FE6B8B','#FF8E53']}
        > 
            {props.children}
        </LinearGradient>
    )
}
export default Header