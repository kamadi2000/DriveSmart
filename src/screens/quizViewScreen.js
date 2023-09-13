import { View, Text, ScrollView, Alert } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { BACKGROUND_COLOR } from '../utils/colors'
import PrimaryButton from '../components/basic/PrimaryButton'

const QuizViewScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const {heading, Qid} = route.params

    const handleStartQuiz =()=>{
      Alert.alert(
        "Start Quiz",
        "Quiz will be automically submitted once the allocated time is completed!",
        [{
          text:'Cancel',
          style:'cancel'
        },
        {
          text:'Start',
          style:'destructive',
          onPress:() => navigation.navigate('Exam',{heading:heading, Qid:Qid})
        }]
      )
    }

  return (
    <View style={{flex:1, backgroundColor:BACKGROUND_COLOR}}>
      {/* <ScrollView> */}
        <View style={{flex:1, marginHorizontal:15, justifyContent:'center', alignItems:'center'}} >
          <Text style={{fontFamily:'Poppins_SemiBold', fontSize:20, textAlign:'center'}} >{heading}</Text>
          <View style={{alignItems:'center', borderColor:'lightblue', borderWidth:1, borderRadius:10, padding:10}}>
            <Text style={{fontFamily:'Poppins_Medium',fontSize:18}}>Attempt No: 1</Text>
            <Text style={{fontFamily:'Poppins_Medium',fontSize:18}}>Allowed Attempts Per Day: 3</Text>
            <Text style={{fontFamily:'Poppins_Medium',fontSize:18}}>Time Limit: 20 Minutes</Text>
            <Text style={{fontFamily:'Poppins_Medium',fontSize:18}}>Grade to Pass : 75% out of 100%</Text>
            <PrimaryButton onPress={handleStartQuiz} >
              <Text style={{fontFamily:'Poppins_Medium',fontSize:16}}>Attempt Quiz Now</Text>
            </PrimaryButton>
          </View>
        </View>
      {/* </ScrollView> */}
    </View>
    
  )
}

export default QuizViewScreen