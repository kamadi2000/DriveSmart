import { View, Text, ScrollView, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { BACKGROUND_COLOR } from '../utils/colors'
import { Video, ResizeMode } from 'expo-av';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import { BACKEND_URL } from '../utils/constants';
import { selectUserToken } from "../redux/userSlice";
import { useSelector } from 'react-redux';

const ContentScreen = () => {
    const [content, setContent] = useState()
    const route = useRoute()
    const token = useSelector(selectUserToken)
    const {heading, id} = route.params

    const axiosConfig = {
      headers: {
        'x-access-token': token,
      },
    };


    useEffect (()=>{
    axios.defaults.withCredentials = true
    axios.get(`${BACKEND_URL}/material/topic/${id}`,axiosConfig)
        .then(response => {
            // Handle the successful response here
           setContent(response.data)
          
            
        })
        .catch(error => {
            console.log("error")
        })
    },[])

    

  return (
    <View style={{flex:1, backgroundColor:BACKGROUND_COLOR}}>
      <View style={{flex:1, margin:10,marginBottom:55, borderRadius:5}}>
          <Text style={{fontFamily:'Poppins_SemiBold', fontSize:20, textAlign:'center'}} >{heading}</Text>
          <Video
          // ref={video}
          style={styles.video}
          source={{
            uri:"https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          // onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View style={{ flex:1}}>
          <WebView
            style={{flex:1, backgroundColor: 'transparent' }}
            containerStyle={{flex:1}}
            originWhitelist={['*']}
            source={{
            html: content ? content.script : '<h1>Loading...</h1>'
            }}
          />
    
        </View>
      </View>
    </View>
  )
}

export default ContentScreen

const styles = StyleSheet.create({
  video: {
    alignSelf: 'center',
    width: 380,
    flexShrink:1,
    height:217,
    borderColor:'gray',
    borderRadius:15,
    borderWidth:1,
  },
});