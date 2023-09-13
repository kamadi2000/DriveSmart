import { View, Text } from 'react-native'
import React from 'react'

const ExamHeader = ({heading}) => {
  return (
    <View style={{padding:5,margin:15,marginBottom:10,borderColor:'lightblue',borderWidth:1,borderRadius:10}}>
        <Text style={{textAlign:'center',fontSize:18,fontFamily:'Poppins_Medium'}}>{heading}</Text>
        <Text style={{fontFamily:'Poppins_Medium',fontSize:15}}>Started On: {"22 August 2023, 11.09 PM"}</Text>
        <Text style={{fontFamily:'Poppins_Medium',fontSize:15}}>Status: {"Ongoing"}</Text>
        <Text style={{fontFamily:'Poppins_Medium',fontSize:15}}>Remaining: {"10 min, 23 Sec"}</Text>
    </View >
  )
}

export default ExamHeader