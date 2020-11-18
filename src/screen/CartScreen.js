import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image
} from 'react-native'
import {useSelector} from 'react-redux'
import { API_URL } from '../helpers';
import Header from '../component/Header';
import {Icon,Button} from 'react-native-elements'
import TextH1 from '../component/Texth1';
import LinearGradient from 'react-native-linear-gradient'

const CartScreen=()=>{

    const Auth=useSelector(state=>state.Auth)



    const totalharga=()=>Auth.cart.reduce((total,val)=>{
        return total+(val.harga*val.qty)
    },0)

    const renderCart=(({item})=>{
        return(
            <View style={{
                flexDirection:'row',
                marginTop:10,
                backgroundColor:'white',
                elevation:4,
                shadowColor:'black',
                shadowOpacity:0.4,
                shadowOffset:{
                    width:10,
                    height:10
                },
                shadowRadius:5,
                borderTopRightRadius:5,
                borderTopLeftRadius:5
            }}>
                <View>
                    <Image
                        source={{uri:API_URL +item.banner}}
                        style={{
                            height:100,
                            width:100,
                            // borderTopRightRadius:5,
                            borderTopLeftRadius:5
                        }}
                    />
                </View>
                <View>
                    <Text>{item.namaproduct}</Text>
                    <Text>{item.harga}</Text>
                    <Text>{item.qty}</Text>
                </View>
            </View>

        )
    })

    return(
        <View style={{flex:1, justifyContent:'space-between'}}>
            <View>
                <Header style={{alignItems:'center',paddingHorizontal:10}}>
                    <View style={{marginRight:10}}>
                        <Icon name={'cart-arrow-down'} type={'font-awesome-5'} size={23}  color={'white'} />
                    </View>
                    <View>
                        <TextH1 style={{fontSize:25}}>Cart</TextH1>
                    </View>
                </Header>
                <View style={{paddingHorizontal:10}}>
                    <FlatList
                        data={Auth.cart}
                        keyExtractor={item=>item.idprod+''}
                        renderItem={renderCart}
                    />
                </View>
            </View>
            <View style={{paddingHorizontal:10,paddingBottom:1}}>
                <View style={{
                    height:70,
                    backgroundColor:'white',
                    borderRadius:5,
                    elevation:5,
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    paddingHorizontal:10
                }}>
                    <View>
                        <Text>
                            Total Harga
                        </Text>
                        <Text style={{color:'#FF8E53',fontWeight:'600',fontSize:20}}>
                            Rp.{totalharga()}
                        </Text>
                    </View>
                    <Button
                        ViewComponent={LinearGradient}
                        style={{
                            paddingVertical:5,
                            width:100
                        }}
                        linearGradientProps={{
                            useAngle:true,
                            angle:45,
                            locations:[0.3,0.9],
                            colors:['#FE6B8B','#FF8E53']
                        }}
                        title='Bayar'
                    />
                </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    
})


export default CartScreen