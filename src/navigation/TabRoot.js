import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from './../screen/HomeScreen'
import SearchScreen from './../screen/SearchScreen'
import HistoryScreen from './../screen/HistoryScreen'
import CartScreen from './../screen/CartScreen'
import ProfileScreen from './../screen/ProfileScreen'
import {View} from 'react-native'
import {Icon} from 'react-native-elements'

const Tab=createBottomTabNavigator()

const TabRoot=()=>{
    return(
        <Tab.Navigator

            screenOptions={({route})=>({
                tabBarIcon:({focused,color,size})=>{
                    let iconName;
                    let type;
                    if (route.name === 'Home') {
                        iconName = focused? 'home': 'home';
                        type='feather'
                    } else if (route.name === 'History') {
                        iconName = focused ? 'history' : 'history';
                        type='font-awesome'
                    }else if(route.name === 'Search'){
                      iconName = focused ? 'search-location' : 'search-location';
                      type='font-awesome-5'
                      return (
                            <View style={{
                                marginTop:-40,
                                backgroundColor:'#FF8E53',
                                height:60,
                                width:60,
                                padding:10,
                                justifyContent:'center',
                                alignItems:'center',
                                borderRadius:30,    
                                borderWidth:5,
                                borderColor:'white',
                                shadowColor:'black',
                                shadowOffset:{
                                    width:10,
                                    height:100
                                },
                                elevation:7,
                                shadowRadius:50
                            }}>
                              <Icon name={iconName} type={type} size={size}  color={'white'} />
                            </View>
                      )
                    }else if(route.name === 'Cart'){
                        iconName = focused ? 'cart-arrow-down' : 'cart-arrow-down'; 
                        type='font-awesome-5'
                    }else{
                        iconName = focused ? 'user' : 'user';
                        type='font-awesome-5'
                    }
                    // You can return any component that you like here!
                    return <Icon name={iconName} type={type} size={size}  color={color} />;
                },
                tabBarLabel:({focused,color})=>{
                    // You can return any component that you like here!
                    return null
                }
            })}
            tabBarOptions={{
                inactiveTintColor:'lightgray',
                activeTintColor:'#FF8E53'
            }}
        >
            <Tab.Screen name='Home' component={HomeScreen} />
            {/* <Tab.Screen name='stackroot' component={stackroot} /> */}

            <Tab.Screen name='History' component={HistoryScreen} />
            <Tab.Screen name='Search' component={SearchScreen} />
            <Tab.Screen name='Cart' component={CartScreen} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    )
}


export default TabRoot
