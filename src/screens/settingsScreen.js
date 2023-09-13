import { View, Text, Image } from 'react-native'
import React from 'react'
import { BACKGROUND_COLOR, PRIMARY_COLOR, RIPPLE_COLOR } from '../utils/colors'

import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { Pressable,Share } from 'react-native';
import { Platform, ToastAndroid } from 'react-native';
const SettingsScreen = () => {
    const shareOurDownloadLink = async ()=>{
        try{
            const ourUrlPlayStore = 'https://play.google.com/store/apps/details?'
            const ourUrlAppStore = 'https://apps.apple.com/app/your-app-name/'
            if(Platform.OS == "ios"){
                await Share.share({
                    message:ourUrlAppStore
                })
            }
            else{
                await Share.share({
                    title:'Share DriveSmart',
                    message:ourUrlPlayStore
                })
            }
        } catch(error){
            ToastAndroid.show(`Failed to Share!`, ToastAndroid.SHORT);//only on android 
            // console.log(error.message)
        }
    }
  return (
    <View style={{flex:1,backgroundColor:PRIMARY_COLOR,paddingTop:40}}>
        <View style={{alignItems:'center', padding:10}}>
            <Image style={{width:80, height:80}} source={require('../assets/images/profile.png')} />
            <Text style={{fontFamily:'Poppins_Medium', fontSize:18}}>Someone</Text>
            <Text style={{fontFamily:'Poppins_Medium', fontSize:15}}>Premium Customer</Text>
            <Text style={{fontFamily:'Poppins_Medium', fontSize:15}}>Google: Someone@gmail.com</Text>
        </View>
        <View style={{flex:1 ,overflow:'hidden',backgroundColor:BACKGROUND_COLOR,borderTopRightRadius:20, borderTopLeftRadius:20}}>
            <ScrollView 
                
                style={{paddingTop:20, padding:10}}>
                
                <View style={{overflow:'hidden',borderRadius:15,margin:5}}>
                    <Pressable style={{backgroundColor:'white',padding:15, flexDirection:'row', alignItems:'center'}} android_ripple={{color:'lightgray'}}>
                        <Ionicons   name="person-outline" size={25} color="gray" />
                        <Text style={{fontFamily:'Poppins_Regular', fontSize:16, paddingStart:15}}>Profile</Text>
                        <Ionicons style={{flex:1,textAlign:'right'}} name="chevron-forward" size={25} color="gray" />
                    </Pressable>
                </View>
                
                
                <View style={{overflow:'hidden',borderRadius:15,margin:5}}>
                <Pressable style={{backgroundColor:'white',padding:15, flexDirection:'row', alignItems:'center'}} android_ripple={{color:'lightgray'}}>
                    <Ionicons   name="language" size={25} color="gray" />
                    <Text style={{fontFamily:'Poppins_Regular', fontSize:16, paddingStart:15}}>Prefered Language</Text>
                    <Text style={{flex:1,fontFamily:'Poppins_Regular',textAlign:'right',color:'gray', fontSize:14, paddingStart:15}}>English</Text>
                    <Ionicons style={{textAlign:'right'}} name="chevron-forward" size={25} color="gray" />
                </Pressable>
                </View>
                
                <View style={{overflow:'hidden',borderRadius:15,margin:5}}>
                <Pressable style={{backgroundColor:'white',padding:15, flexDirection:'row', alignItems:'center'}} android_ripple={{color:'lightgray'}}>
                    <Ionicons name="chatbubble-ellipses-outline" size={30} color="gray" />
                    <Text style={{fontFamily:'Poppins_Regular', fontSize:16, paddingStart:15}}>Help Center</Text>
                </Pressable>
                </View>
                <View style={{overflow:'hidden',borderRadius:15,margin:5}}>
                <Pressable style={{backgroundColor:'white',padding:15, flexDirection:'row', alignItems:'center'}} android_ripple={{color:'lightgray'}}>
                    <Ionicons   name="help-circle-outline" size={30} color="gray" />
                    <Text style={{fontFamily:'Poppins_Regular', fontSize:16, paddingStart:15}}>About</Text>
                </Pressable>
                </View>
                <View style={{overflow:'hidden',borderRadius:15,margin:5}}>
                <Pressable style={{backgroundColor:'white',padding:15, flexDirection:'row', alignItems:'center'}} android_ripple={{color:'lightgray'}}>
                    <Ionicons   name="lock-closed-outline" size={25} color="gray" />
                    <Text style={{fontFamily:'Poppins_Regular', fontSize:16, paddingStart:15}}>Privacy</Text>
                </Pressable>
                </View>
                <View style={{overflow:'hidden',borderRadius:15,margin:5}}>
                <Pressable onPress={shareOurDownloadLink} style={{backgroundColor:'white',padding:15, flexDirection:'row', alignItems:'center'}} android_ripple={{color:'lightgray'}}>
                    <Ionicons name="md-share-social-outline" size={30} color="gray" />
                    <Text style={{fontFamily:'Poppins_Regular', fontSize:16, paddingStart:15}}>Share</Text>
                </Pressable>
                </View>
                <View style={{overflow:'hidden',borderRadius:15,margin:5}}>
                <Pressable style={{backgroundColor:'white',padding:15, flexDirection:'row', alignItems:'center'}} android_ripple={{color:'lightgray'}}>
                    <Ionicons   name="log-out-outline" size={30} color="black" />
                    <Text style={{fontFamily:'Poppins_Regular', fontSize:16, paddingStart:15}}>Log out</Text>
                </Pressable>
                </View>


                
               
            </ScrollView>
        </View>
      
    </View>
  )
}

export default SettingsScreen