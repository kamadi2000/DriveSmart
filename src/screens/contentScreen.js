import { View, Text, ScrollView} from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { BACKGROUND_COLOR } from '../utils/colors'


const ContentScreen = () => {
    const route = useRoute()
    const {heading} = route.params
    useEffect (()=>{
        
    })
  return (
    <View style={{flex:1, backgroundColor:BACKGROUND_COLOR}}>
      <ScrollView>
        <Text style={{fontFamily:'Poppins_SemiBold', fontSize:20, textAlign:'center'}} >{heading}</Text>
        
      </ScrollView>
    </View>
  )
}

export default ContentScreen