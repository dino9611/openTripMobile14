import React,{useState} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform
} from 'react-native';
import TextH1 from './../component/Texth1'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable'
import {Input,Icon,Button} from 'react-native-elements'

const LoginScreeen= () => {

    const [isusernamefilled,setisusernamefilled]=useState(false)
    const [ispasswordfilled,setispasswordfilled]=useState(false)
    const [secure,setsecure]=useState(true)
  
    const OnInputChangetext=(text)=>{
      if(text){
        setisusernamefilled(true)
      }else{
        setisusernamefilled(false)
      }
    }
    const onPasswordChangetext=(text)=>{
      if(text){
        setispasswordfilled(true)
      }else{
        setispasswordfilled(false)
      }
    }
  
    return (
      <>
        <LinearGradient style={{flex:1}} useAngle angle={45} locations={[0.3,0.9]} colors={['#FE6B8B','#FF8E53']}>
          <StatusBar backgroundColor={'#FF8E53'} barStyle={'light-content'}/>
          <View style={{flex:Platform.OS=='ios'?2:1,justifyContent:'center',alignItems:'center'}}>
            <TextH1>
              Welcome Back !!
            </TextH1>
          </View>
          <Animatable.View animation='fadeInUpBig' style={styles.containerStyle}>
            <Input
              placeholder={'Username'}
              placeholderTextColor={isusernamefilled?'#FF8E53':'lightgray'}
              leftIcon={{type:'font-awesome',name:'user',color:isusernamefilled?'#FF8E53':'lightgray'}}
              inputContainerStyle={{borderColor:isusernamefilled?'#FF8E53':'lightgray'}}
              inputStyle={{color:'#FE6B8B'}}
              label={'Username'}
              labelStyle={{color:isusernamefilled?'#FF8E53':'lightgray'}}
              onChangeText={OnInputChangetext}
              // onFocus={()=>setisusernamefilled(true)}
              rightIcon={
                isusernamefilled?
                <Animatable.View animation='bounceIn' >
                  <Icon
                    type='Feather'
                    name="check-circle"
                    color="#FF8E53"
                    size={20}
                  />
                </Animatable.View>
                :null
              }
            />
            <Input
              placeholder={'Password'}
              placeholderTextColor={ispasswordfilled?'#FF8E53':'lightgray'}
              secureTextEntry={secure}
              leftIcon={{type:'font-awesome',name:'lock',color:ispasswordfilled?'#FF8E53':'lightgray'}}
              inputContainerStyle={{borderColor:ispasswordfilled?'#FF8E53':'lightgray'}}
              inputStyle={{color:'#FE6B8B'}}
              label={'Password'}
              onChangeText={onPasswordChangetext}
              labelStyle={{color:ispasswordfilled?'#FF8E53':'lightgray'}}
              rightIcon={
                secure?
                <Icon
                  type='font-awesome'
                  name="eye-slash"
                  color="lightgray"
                  size={25}
                  onPress={()=>setsecure(!secure)}
                />
                :
                <Icon
                type='font-awesome'
                name="eye"
                color="#FF8E53"
                size={25}
                onPress={()=>setsecure(!secure)}
            />
            }
          />
          <Button
            ViewComponent={LinearGradient}
            style={{
              paddingVertical:10
            }}
            linearGradientProps={{
              useAngle:true,
              angle:45,
              locations:[0.3,0.9],
              colors:['#FE6B8B','#FF8E53']
            }}
            title='Sign in'
          />
          <Button
            ViewComponent={LinearGradient}
            style={{
              paddingVertical:10
            }}
            linearGradientProps={{
              useAngle:true,
              angle:45,
              locations:[0.3,0.9],
              colors:['#FE6B8B','#FF8E53']
            }}
            title='Sign Up'
          />
          </Animatable.View>
        </LinearGradient>
      </>
    );
  };
  
  const styles=StyleSheet.create({
    containerStyle:{
      flex:2,
      backgroundColor:'white',
      borderTopRightRadius:30,
      borderTopLeftRadius:30,
      paddingHorizontal:20,
      justifyContent:'center'
    }
  })
  
  export default LoginScreeen;
  