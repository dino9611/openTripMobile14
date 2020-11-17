import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,

} from 'react-native';
import TextH1 from './../component/Texth1'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable'
import {Input,Icon,Button} from 'react-native-elements'
import {useDispatch,useSelector} from 'react-redux'
import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreeen= () => {

    const [isusernamefilled,setisusernamefilled]=useState(false)
    const [ispasswordfilled,setispasswordfilled]=useState(false)
    const [secure,setsecure]=useState(true)

    const [flexview,setflexview]=useState(2)
    
    const [datauser,setdatauser]=useState({
      username:'',
      password:''
    })

    const Auth=useSelector(state=>state.Auth) 

    useEffect(() => {
      Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
  
      // cleanup function
      return () => {
        Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
        Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
      };
    }, []);
  
    const _keyboardDidShow = () => {
      setflexview(6)
    };
  
    const _keyboardDidHide = () => {
      setflexview(2)
    };

    const OnInputChangetext=(text)=>{
      if(text){
        setisusernamefilled(true)
      }else{
        setisusernamefilled(false)
      }
      setdatauser({...datauser,username:text})
    }

    const onPasswordChangetext=(text)=>{
      if(text){
        setispasswordfilled(true)
      }else{
        setispasswordfilled(false)
      }
      setdatauser({...datauser,password:text})

    }
    
    const dispatch=useDispatch()

    const onLoginPress=()=>{
      dispatch({type:'LOADING'})
      Axios.post(`http://192.168.1.104:5000/auth/login`,{
        username:datauser.username,
        password:datauser.password
      }).then((res)=>{
        // console.log(res.data)
        let id=res.data.datauser.id+''
        AsyncStorage.setItem('iduser',id)
        .then(()=>{
          dispatch({type:'LOGIN',payload:res.data.datauser,cart:res.data.cart})
        }).catch((err)=>{
          alert(err)
        })
      }).catch((err)=>{
        dispatch({type:'ERROR'})
        alert(err.response.data.message)
      })
    }

    return (
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
        <LinearGradient style={{flex:1}} useAngle angle={45} locations={[0.3,0.9]} colors={['#FE6B8B','#FF8E53']}>
            <StatusBar backgroundColor={'#FF8E53'} barStyle={'light-content'}/>
            <View style={{flex:Platform.OS=='ios'?2:1,justifyContent:'center',alignItems:'center'}}>
              <TextH1>
                Welcome Back !!
              </TextH1>
            </View>
            <Animatable.View animation='fadeInUpBig' style={[styles.containerStyle,{flex:flexview}]}>
              <Input
                value={datauser.username}
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
                value={datauser.password}
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
                paddingVertical:5
              }}
              linearGradientProps={{
                useAngle:true,
                angle:45,
                locations:[0.3,0.9],
                colors:['#FE6B8B','#FF8E53']
              }}
              title='Sign In'
              loading={Auth.isLoading}
              onPress={onLoginPress}
            />
            <Button
              ViewComponent={LinearGradient}
              style={{
                paddingVertical:5
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
      </TouchableWithoutFeedback>
    );
  };
  
  const styles=StyleSheet.create({
    containerStyle:{
      backgroundColor:'white',
      borderTopRightRadius:30,
      borderTopLeftRadius:30,
      paddingHorizontal:20,
      justifyContent:'center'
    }
  })
  
  export default LoginScreeen;
  