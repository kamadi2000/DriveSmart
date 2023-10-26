import { Alert, View } from 'react-native'
import { BodyText, LabelText } from '../components/basic/TextComponent'
import { Quiz_Button } from '../components/basic/ButtonComponent'
import { HEIGHT, WIDTH } from '../utils/constants'
import { useNavigation, useRoute } from '@react-navigation/native'
import { CARD_COLOR } from '../utils/colors'
import { useEffect, useState } from 'react'


const PracticequizDetailsScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    const [time, setTime] = useState("")
    const [grade, setGrade] = useState("")
    const [completed, setCompleted] = useState(false)
    const [quizNumber, setQuizNumber] = useState("")
    const [questions, setQuestions] = useState()
    const [practiceQuiz, setPracticeQuiz] = useState([])
    useEffect(() => {
        if (route.params){
            const {practiceQuiz } = route.params
            setPracticeQuiz(practiceQuiz)
            setQuizNumber(practiceQuiz.quizNumber)
            setTime(practiceQuiz.time)
            setQuestions(practiceQuiz.questions)
            if (practiceQuiz.user_quiz){
                setCompleted(true)
                setGrade(practiceQuiz.user_quiz.grade)
            }
            
    
        }
    }, [route.params])
    
    

    

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
          onPress:() => navigation.navigate('Practice test',{questions : questions , quizNumber : quizNumber })
        }]
      )
    }

    const handleReview = () => {
      navigation.navigate("Review",{practiceQuiz : practiceQuiz })
    }

  return (

    <View style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <View style={{ width: WIDTH * 0.9, height: HEIGHT * 0.4, backgroundColor: CARD_COLOR, paddingHorizontal: 30, }}>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 40 }}>
                <BodyText style={{ fontSize: 16 }}>Practice Quiz {quizNumber}</BodyText>
                    {completed ? 
                        <BodyText style={{ fontSize: 16 }}>Grade to pass : {grade}</BodyText>
                        :
                        <BodyText style={{ fontSize: 16 }}>Time Limit : {time}</BodyText>
                    }
                    
                    
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', paddingVertical: 40 }}>
                    {/* <TouchableOpacity > */}
                    {completed ?
                        <Quiz_Button onPress={handleReview}>
                        <View>
                            <LabelText style={{ fontSize: 16, color: '#fff' }}>Review quiz</LabelText>
                        </View>
                    </Quiz_Button>
                    :
                    <Quiz_Button onPress={handleStartQuiz}>
                            <View>
                                <LabelText style={{ fontSize: 16, color: '#fff' }}>Attempt quiz</LabelText>
                            </View>
                        </Quiz_Button>
                        }
                        

                    {/* </TouchableOpacity>  */}
                </View>
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BodyText style={{ textAlign: 'center' }}>Your quiz will be submitted automatically once the allocated time is completed.</BodyText>
                </View>
                {/* <View style={{ display: 'flex', justifyContent: 'center', paddingVertical: 40 }}> */}
                    {/* <TouchableOpacity > */}
                    {/* {completed &&
                        <Quiz_Button onPress={handleReview}>
                            <View>
                                <LabelText style={{ fontSize: 16, color: '#fff' }}>Review</LabelText>
                            </View>
                        </Quiz_Button>
                    }                    */}

                    {/* </TouchableOpacity>  */}

                {/* </View>  */}


            </View>




        </View>

    
    
  )
}

export default PracticequizDetailsScreen;