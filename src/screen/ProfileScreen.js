import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native'



const ProfileScreen=()=>{

  
    const data=['#233164','black','pink','tomato','cyan','lightblue','bluemarine','#ffefd3','#febf43']

    function renderdata(){
        return data.map((val,index)=>{
            if(index%3 === 1){
               
                return(
                    <View style={[styles.kotakstyle,{paddingHorizontal:2,marginTop:1}]}>
                        <View style={{backgroundColor:val, alignItems:'center',justifyContent:'center',height:100}}>
                            <Text style={{color:'white'}}>{index}</Text>
                        </View>
                    </View>
                )
            }else{
                    return(
                        <View style={[styles.kotakstyle,{marginTop:1}]}>
                            <View style={{backgroundColor:val, alignItems:'center',justifyContent:'center',height:100}}>
                                <Text style={{color:'white'}}>{index}</Text>
                            </View>
                        </View>
                    )

            }
        })
    }

    return(
        <View style={{flex:1}}>
            <View style={styles.containerStyle}>
                {renderdata()}
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    containerStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    kotakstyle:{
        flexBasis:'33.3%',
        height:100,
        // flexDirection:'row',
       
        
    }
})





export default ProfileScreen