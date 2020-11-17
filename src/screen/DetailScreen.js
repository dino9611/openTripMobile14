import React,{useState,useRef} from 'react';
import {
    View,
    Text,
 
    ImageBackground,
    TouchableWithoutFeedback
} from 'react-native'
import { API_URL,dateformat } from '../helpers';
import {Icon,Input,Button} from 'react-native-elements'
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated'
import LinearGradient from 'react-native-linear-gradient'
import {useSelector,useDispatch} from 'react-redux'
import Axios from 'axios'

const DetailScreen=({navigation,route})=>{

    const [loading,setloading]=useState(false)
    const [qty,setqty]=useState('')

    const Auth=useSelector(state=>state.Auth)
    const dispatch=useDispatch()
    const {banner,tanggalmulai,tanggalberakhir,namaproduct,deskripsi,id}=route.params.data
    
    
    const AddtoCart=()=>{
        setloading(true)
        Axios.post(`${API_URL}/trans/Addtocart`,{
            userid:Auth.id,
            productid:id,
            qty:qty
        },{
            headers:{
                'Authorization':`Bearer ${Auth.token}`
            }
        }).then((res)=>{
            dispatch({type:'ADDTOCART',cart:res.data})
            alert('berhasil masuk cart')
            setloading(false)
        }).catch(err =>{
            console.log(err)
        })
    }

    const renderContent = () => (
        <View
          style={{
            backgroundColor: 'white',
            padding: 16,
            height: 300,
          }}
        >
            <Input
                placeholder='berapa orang'
                keyboardType='numeric'
                value={qty}
                onChangeText={(text)=>setqty(text)}

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
                title='Add to cart'
                onPress={AddtoCart}
                loading={loading}
            />
        </View>
    );

    

    const sheetRef = React.useRef(null);

    const fall = new Animated.Value(1)

    

    return(
        <>
            <Animated.View
                style={{flex:1,backgroundColor:'white',opacity: Animated.add(0.1, Animated.multiply(fall, 0.9))}}
            >
                <ImageBackground 
                    source={{uri: API_URL+banner}}
                    style={{flex:1}}
                    imageStyle={{resizeMode:'cover'}}
                >
                    <TouchableWithoutFeedback onPress={()=>navigation.goBack()}>
                        <View style={{alignSelf:'flex-start',marginLeft:20,marginTop:10,backgroundColor:'rgba(161, 153, 135, 0.58)',borderRadius:70}}>
                            <Icon
                                name='arrowleft'
                                type='antdesign'
                                color='white'
                                size={30}
                                style={{fontWeight:'bold'}}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </ImageBackground>
                <View style={{flex:2,paddingHorizontal:10,paddingTop:50}}>
                    <Text style={{fontSize:20,color:'black',marginVertical:5,textTransform:'capitalize'}}>{namaproduct} </Text>
                    <Text style={{fontSize:20,color:'#FF8E53',marginVertical:5}}>Waktu </Text>
                    <Text style={{marginVertical:5}} >{dateformat(tanggalmulai)} s/d {dateformat(tanggalberakhir)}</Text>
                    <Text style={{fontSize:20,color:'#FF8E53',marginVertical:5}}>Deskripsi </Text>
                    <Text style={{marginVertical:5}} >{deskripsi}</Text>

                    {/* <Text style={{fontSize:20,color:'#FF8E53',marginVertical:5}}>Jumlah orang </Text>
                    <Input
                        placeholder='berapa orang'
                        keyboardType='numeric'
                    /> */}
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
                            title='Fill Quantity'
                            onPress={()=>sheetRef.current.snapTo(0)}
                        />
                </View>
            </Animated.View>
            <BottomSheet
                ref={sheetRef}
                snapPoints={[300, 0]}
                borderRadius={10}
                initialSnap={1}
                renderContent={renderContent}
                callbackNode={fall}
            />
        </>
    )
}


export default DetailScreen