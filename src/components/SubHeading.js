import { View, Text,Pressable,Alert } from 'react-native'
import React from 'react'
import Instruction from './Instruction'
import { useNavigation } from '@react-navigation/native'


const SubHeading = ({name, isPremium, isCompleted, id, type, heading}) => {
    const navigation = useNavigation()
    const clicked =()=>{
        if(type === 'content'){
            navigation.navigate('Content', {heading:heading, Vid:id})
            return;
        }
        else{
            navigation.navigate('Quiz View',{heading:heading, Qid:id})
            return;
        }
        
    }
  return (
    <View style={{marginVertical: 15}}>
        <Pressable style={({pressed}) => pressed ? {opacity:0.70} : {opacity:1} } onPress={clicked} >
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