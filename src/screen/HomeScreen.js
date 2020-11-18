import React,{useState} from 'react';
import {
    SafeAreaView,
    Text,
    Button,
    StatusBar,
    StyleSheet,
    Platform,
    View,
    ScrollView,
    FlatList,
    ImageBackground
} from 'react-native'
import {useDispatch,useSelector} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LinearGradient from 'react-native-linear-gradient'
import TextH1 from './../component/Texth1'
import ImagePicker from 'react-native-image-crop-picker';
import Axios from 'axios'
import Fontawesome from 'react-native-vector-icons/FontAwesome5'
import {Icon} from 'react-native-elements'
const HomeScreen=({navigation})=>{

    // const [image,setimage]=useState(null)

    const dispatch=useDispatch()

    const Auth=useSelector(state=>state.Auth)

    // const onLogoutpress=()=>{
    //     AsyncStorage.removeItem('iduser')
    //     .then(()=>{
    //         dispatch({type:'LOGOUT'})
    //     })
    // }
    
    // const openCamera=()=>{
    //     ImagePicker.openCamera({
    //         width: 300,
    //         height: 400,
    //         cropping: true
    //     }).then(image => {
    //         console.log(image);
    //         setimage(image)
    //     }).catch((err)=>{
    //         alert('errfoto')
    //     })
    // }

    // const onSendPress=async ()=>{
    //     try {
    //         const options = {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             }
    //         }
            
    //         const data = new FormData();
    //         const img = {
    //             uri: image.path,
    //             type: 'image/jpeg',
    //             name: 'photo.jpg',
    //         }
    //         data.append('image', img)
    //         data.append('data', JSON.stringify({ caption:'dari native' }))
    //         // console.log(userid)
    //         // console.log(img)
    //         const res= await Axios.post(`http://192.168.1.104:4000/prod/addProd`,data,options)
    //         console.log(res.data)
    //         alert('berhasil')
    //     } catch (error) {
    //         alert('gagal')
    //     }
      

    // }

    const Data=[
        {
            id:'1',
            foto:require('./../../assets/foto1.jpg'),
            category:'Pantai'
        },
        {
            id:'2',
            foto:require('./../../assets/foto2.jpg'),
            category:'Udara'
        },
        {
            id:'3',
            foto:require('./../../assets/foto3.jpg'),
            category:'Gunung'
        },
    ]


    const renderItem = ({ item }) => (
        <View style={{borderRadius:30}}>
            <ImageBackground
                source={item.foto}
                style={styles.imageBg}
                imageStyle={{borderRadius:5}}
            >
                <Icon
                    type='font-awesome'
                    color='white'
                    name='bookmark'
                    size={30}
                    style={{
                        alignSelf:'flex-end',
                    }}
                />
                <Text style={{color:'white',fontWeight:'bold',backgroundColor:'rgba(0, 0, 0, 0.3)',width:'40%',textAlign:'center'}}>{item.category}</Text>
            </ImageBackground>
        </View>
    );

    return(
        <View style={{flex:1,backgroundColor:'white'}}>
            <StatusBar backgroundColor={'#FF8E53'} barStyle={'light-content'}/>
            <ScrollView >
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
                <View style={{top: Platform.OS ==='ios'?40:-130,width:"100%",flex:1}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20}}>
                        <View style={{flexDirection:'row',marginTop:10}}>
                            <Fontawesome
                                name='plane-departure'
                                color='white'
                                size={20}
                            /> 
                            <TextH1 style={{fontSize:20}}>
                                {/*buat ngasih spasi aja  */}
                                {''}  
                                Opentrip
                            </TextH1>
                        </View>
                        <TextH1 style={{fontSize:20,fontWeight:'500',marginTop:10}}>
                            Halo,{Auth.username}
                        </TextH1>
                    </View>
                    <View style={styles.container1Style}>
                        <View style={styles.innercontainer1Style}>
                            <Icon type='feather' name='map' color='#FF8E53' size={30}/>
                            <Text style={styles.innertextcont1Style}>Map</Text>
                        </View>
                        <View style={styles.innercontainer1Style}>
                            <Icon type='feather' name='map-pin' color='#FF8E53' size={30}/>
                            <Text style={styles.innertextcont1Style}>Pinned</Text>
                        </View>
                        <View style={styles.innercontainer1Style}>
                            <Icon type='material-icons' name='card-travel' color='#FF8E53' size={30}/>
                            <Text style={styles.innertextcont1Style}>Wallet</Text>
                        </View>
                    </View>
                    <View style={{marginTop:20,paddingHorizontal:10}}>
                        <Text style={{fontSize:20,color:'#FF8E53'}}>What Yours?</Text>
                    </View>
                    <View style={{marginTop:10}}>
                        <FlatList
                            data={Data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                        />
                    </View> 
                    <View style={{marginTop:20,paddingHorizontal:10,flexDirection:'row'}}>
                        <Text style={{fontSize:20,color:'#FF8E53'}}>Article </Text>
                        <Icon
                            type='material-icons'
                            name='article'
                            color='#FF8E53'
                        />
                    </View>
                    <View style={{marginTop:10}}>
                        <View style={styles.articleContainersStyle}>
                            <Text style={{fontSize:15,color:'#FF8E53'}}>
                                Tips Hemat Traveling
                            </Text>
                            <Icon
                                type='antdesign'
                                name='arrowright'
                                color='#FF8E53'

                            />
                        </View>
                        <View style={styles.articleContainersStyle}>
                            <Text style={{fontSize:15,color:'#FF8E53'}}>
                                Tips hemat Uang
                            </Text>
                            <Icon
                                type='antdesign'
                                name='arrowright'
                                color='#FF8E53'
                            />
                        </View>
                        <View style={styles.articleContainersStyle}>
                            <Text style={{fontSize:15,color:'#FF8E53'}}>
                                Tips ngumpulin uang
                            </Text>
                            <Icon
                                type='antdesign'
                                name='arrowright'
                                color='#FF8E53'
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


const styles=StyleSheet.create({
    container1Style:{
        borderRadius:5,
        marginTop:50,
        backgroundColor:'white',
        marginHorizontal:30,
        flexDirection:'row',
        shadowColor:'black',
        shadowOffset:{
            width:10,
            height:100
        },
        elevation:4,
        shadowOpacity:1,
    },
    innercontainer1Style:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:15
    },
    innertextcont1Style:{
        color:'#FF8E53',
        fontSize:10,
        fontWeight:'100'
    },
    imageBg: {
        height:200,
        width:150,
        marginHorizontal:10,
        justifyContent:'space-between',
        padding:5,
        resizeMode: "cover",
    },
    articleContainersStyle:{
        borderColor:'lightgray',
        marginVertical:4,
        borderTopWidth:1,
        paddingVertical:7, 
        borderBottomWidth:2,
        paddingHorizontal:30,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})

export default HomeScreen