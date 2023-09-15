import { Alert, View } from 'react-native'
import { BodyText, LabelText } from '../components/basic/TextComponent'
import { Quiz_Button } from '../components/basic/ButtonComponent'
import { HEIGHT, WIDTH } from '../utils/constants'
import { useNavigation, useRoute } from '@react-navigation/native'
import { CARD_COLOR } from '../utils/colors'


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
          onPress:() => navigation.navigate('QuizList',{heading:heading, Qid:Qid})
        }]
      )
    }

  return (

    <View style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <View style={{ width: WIDTH * 0.9, height: HEIGHT * 0.5, backgroundColor: CARD_COLOR, paddingHorizontal: 30, }}>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 40 }}>
                    <BodyText style={{ fontSize: 16 }}>Attempts No : 1</BodyText>
                    <BodyText style={{ fontSize: 16 }}>Attempts Per day : 3</BodyText>
                    <BodyText style={{ fontSize: 16 }}>Time Limit : 1hrs</BodyText>
                    <BodyText style={{ fontSize: 16 }}>Grade to pass : 75% out of 100%</BodyText>
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', paddingVertical: 40 }}>
                    {/* <TouchableOpacity > */}
                        <Quiz_Button onPress={handleStartQuiz}>
                            <View>
                                <LabelText style={{ fontSize: 16, color: '#fff' }}>Attempt quiz now</LabelText>
                            </View>
                        </Quiz_Button>

                    {/* </TouchableOpacity>  */}

                </View>
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BodyText style={{ textAlign: 'center' }}>Your quiz will be submitted automatically once the allocated time is completed.</BodyText>
                </View>


            </View>




        </View>

    // <View style={{flex:1, backgroundColor:BACKGROUND_COLOR}}>
    //   {/* <ScrollView> */}
    //     <View style={{flex:1, marginHorizontal:15, justifyContent:'center', alignItems:'center'}} >
    //       <Text style={{fontFamily:'Poppins_SemiBold', fontSize:20, textAlign:'center'}} >{heading}</Text>
    //       <View style={{alignItems:'center', borderColor:'lightblue', borderWidth:1, borderRadius:10, padding:10}}>
    //         <Text style={{fontFamily:'Poppins_Medium',fontSize:18}}>Attempt No: 1</Text>
    //         <Text style={{fontFamily:'Poppins_Medium',fontSize:18}}>Allowed Attempts Per Day: 3</Text>
    //         <Text style={{fontFamily:'Poppins_Medium',fontSize:18}}>Time Limit: 20 Minutes</Text>
    //         <Text style={{fontFamily:'Poppins_Medium',fontSize:18}}>Grade to Pass : 75% out of 100%</Text>
    //         <PrimaryButton onPress={handleStartQuiz} >
    //           <Text style={{fontFamily:'Poppins_Medium',fontSize:16}}>Attempt Quiz Now</Text>
    //         </PrimaryButton>
    //       </View>
    //     </View>
    //   {/* </ScrollView> */}
    // </View>
    
  )
}

export default QuizViewScreen