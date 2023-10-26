import { View, Text,StyleSheet , Pressable, Platform } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Collapsible from 'react-native-collapsible';
import {RIPPLE_COLOR } from '../utils/colors'
import SubHeading from './SubHeading';


const Heading = ({item}) => {
    const [iscollapsed, setIsCollapsed] = useState(true)
    const toggle = ()=>{
        setIsCollapsed((prv)=> !prv)
    }
  return (
    <View style={{flex:1, alignItems:'center' , marginHorizontal:20 }} >
        <View style={styles.headingContainer}>
            <Pressable onPress={toggle} android_ripple={{color:RIPPLE_COLOR}} style={({pressed}) => (pressed && Platform.OS != 'android')?[styles.pressableContainer, styles.pressed] : styles.pressableContainer} >
                <Text style={styles.textContainer}>{item.no +". " + item.title}</Text>
                <Ionicons style={{alignSelf:'center'}} name={`chevron-${ iscollapsed ? 'down': 'up'}-circle`} size={24} color= { (item.isCompleted) ? "green" :"gray"} />
            </Pressable>
            <View>
                <Collapsible collapsed={iscollapsed} >
                    <View style={{backgroundColor:'gray', height:1, marginHorizontal:2}}></View>
                    <View style={styles.subHeadingcontainer}>
                        <SubHeading 
                            id = {item.no}
                            type="content"
                            heading= {item.title}
                            name={ item.no +  ".1 Interactive Video" }
                            isCompleted={item.isCompleted} 
                            isPremium={false}/>
                        <View style={{backgroundColor:'lightgray', height:1, marginHorizontal:2}}></View>
                        <SubHeading 
                            id = {item.no}
                            heading= {item.name}
                            type="quiz"
                            name={item.no + ".2 Quiz" }
                            isCompleted={item.isCompleted} 
                            isPremium={true}/>
                    </View>
                </Collapsible>
            </View>
        </View>
    </View>
  )
}

export default Heading


const styles = StyleSheet.create({
    headingContainer:{
      borderRadius:10,
      overflow:'hidden',
      marginBottom:20,
      backgroundColor:'white',
      elevation:1,
      shadowColor:'lightgray',
      shadowOffset:{width:5,height:5},
      shadowOpacity: 1,
      shadowRadius:30,
      maxWidth:650,
      width:'100%'
    },
    pressableContainer:{
      paddingHorizontal:15,
      paddingVertical:20,
      flexDirection:'row',
      flex:1,
      justifyContent: 'center',
      overflow:'hidden',
     
      
      
    },
    textContainer:{
      fontFamily:'Poppins_SemiBold',
      fontSize:16,
      flex:1,
    },
    pressed:{
      opacity:0.70
    },
    subHeadingcontainer:{
      paddingHorizontal:20,
    }
  })