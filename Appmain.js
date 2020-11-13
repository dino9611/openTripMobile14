import React,{useEffect,useState} from 'react';
// 45deg, #FE6B8B 30%, #FF8E53 90%
import {NavigationContainer} from '@react-navigation/native'
import AuthStackRoot from './src/navigation/AuthStackRoot'
import {useSelector,useDispatch} from 'react-redux'
// import HomeScreen from './src/screen/HomeScreen'
import StackRoot from './src/navigation/StackRoot'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SplashScreen from './src/screen/SplashScreen'
import Axios from 'axios'

const AppMain= () => {

    const Auth=useSelector(state=>state.Auth) 

    const [Loading,setLoading]=useState(true)

    const dispatch=useDispatch()

    useEffect(()=>{
        AsyncStorage.getItem('iduser')
        .then((value)=>{
            if(value !==null){
                Axios.get(`http://192.168.1.104:5000/auth/keeplogin/${value}`)
                .then((res)=>{
                    dispatch({type:'LOGIN',payload:res.data.datauser,cart:res.data.cart})
                }).catch((err)=>{
                    alert(err.response.data.message)
                }).finally(()=>{
                    setLoading(false)
                })
            }else{
                setLoading(false)
            }
        }).catch((err)=>{
            setLoading(false)
        })
    },[])//ini didmount


    if(Loading){
        return (
            <SplashScreen/>
        )
    }

    return (
        <NavigationContainer>
            {
                Auth.isLogin?
                <StackRoot/>
                :
                <AuthStackRoot/>
            }
        </NavigationContainer>
    );
};



export default AppMain;