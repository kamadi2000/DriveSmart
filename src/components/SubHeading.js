import { View, Text,Pressable,Alert } from 'react-native'
import React from 'react'
import Instruction from './Instruction'


const SubHeading = ({name, isPremium, isCompleted, id}) => {
    const navigate =()=>{
        Alert.alert(
            "Clicked",
            id,
            [{text:'Okay', style:'destructive' }]
        )
    }
  return (
    <View style={{marginVertical: 15}}>
        <Pressable style={({pressed}) => pressed ? {opacity:0.70} : {opacity:1} } onPress={navigate} >
            <Text style={{fontFamily:'Poppins_Medium',fontSize:15,marginBottom:8}}>{name}</Text>
        </Pressable>
        <View style={{flexDirection:'row'}} >
            <Instruction type='activity'  status={isCompleted}/>
            { isPremium ? <Instruction type='premium'  status={isPremium}/> : ''}
        </View>
    </View>
  )
}

export default SubHeading