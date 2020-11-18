import React,{useState,useEffect} from 'react';
import {
    View,
    Text,
    Button,
    FlatList,
    RefreshControl,
    ImageBackground,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native'
import Axios from 'axios'
import { API_URL } from '../helpers';
import Header from '../component/Header';
import {Icon} from 'react-native-elements'
import TextH1 from '../component/Texth1';


const SearchScreen=(props)=>{

    const [product,setproduct]=useState([])
    const [refresh,setrefresh]=useState(false)

    const fetchdata= async ()=>{
        try {
            const {data} = await Axios.get(`${API_URL}/product/getproduct`)
            setproduct(data)
            setrefresh(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        // console.log('getlagi')
        fetchdata()
    },[]) // sama dengan didmount

    
    const onTodetailsPress=(item)=>{
       
        props.navigation.navigate('Details',{data:item})
    }

  
    const RenderProduct=({item})=>{ //item sama dengan val di map
        return(
            <ImageBackground
                    source={{uri: API_URL+ item.banner}}
                    style={styles.containerimageBgstyle}
                    imageStyle={{borderRadius:5}}
                >
                <TouchableWithoutFeedback onPress={()=>onTodetailsPress(item)}>
                    <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0, 0, 0, 0.4)',flex:1}}>
                        <Text style={{color:'white',textTransform:'capitalize'}}>
                            {item.namaproduct}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </ImageBackground>
        )
    }

    const OnRefreshFlatlist=()=>{
        setrefresh(true)
        
        fetchdata()
    }

    return(

        <View style={{flex:1}}>
            <Header style={{alignItems:'center',paddingHorizontal:10}}>
                <View style={{marginRight:10}}>
                    <Icon name={'search-location'} type={'font-awesome-5'} size={23}  color={'white'} />
                </View>
                <View>
                    <TextH1 style={{fontSize:25}}>Vacation</TextH1>
                </View>
            </Header>
            <View style={{paddingHorizontal:10}}>
                <FlatList
                    data={product}
                    keyExtractor={(item)=>`${item.id}`}//harsu string biar nggak warning
                    renderItem={RenderProduct}
                    showsVerticalScrollIndicator={false}
                    // onRefresh={OnRefreshFlatlist}
                    // refreshing={refresh}
                    refreshControl={<RefreshControl colors={['#FE6B8B','#FF8E53']} progressBackgroundColor={'white'} onRefresh={OnRefreshFlatlist} refreshing={refresh} />}
                />

            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    containerimageBgstyle:{
        height:200,
        width:'100%',
        marginVertical:5,
    }
})

export default SearchScreen