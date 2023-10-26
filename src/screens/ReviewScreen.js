

import { View, Text, Alert, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState, useEffect,  } from 'react'
import { BACKGROUND_COLOR } from '../utils/colors'
import PrimaryButton from '../components/basic/PrimaryButton';
import ExamHeader from '../components/ExamHeader';
import Question, { ReviewQuestion } from '../components/Question';
import { useNavigation ,useRoute} from '@react-navigation/native';

const userReview = (paperQuestions , userAnswers) => {
  var reviewAnswers = {}
  for (const userItem of userAnswers) {
            const result = paperQuestions.find(item => item._id === userItem.quesId)
            if (result.answer == userItem.ans) {
                console.log("correct")
                reviewAnswers[result._id] = {
                    'question' : result.question,
                    'options' : result.options,
                    'userAnswer':userItem.ans,
                    'feedback' : result.positiveFeedback,
                    'color' : 'green'
                }    
            }else {
              console.log("wrong")
                reviewAnswers[result._id] = {
                    'question' : result.question,
                    'options' : result.options,
                    'userAnswer': userItem.ans,
                    'feedback' : result.negativeFeedback,
                    'color' : 'red'
                }   
            }   
        }
  // console.log(reviewAnswers)
  return reviewAnswers;

}

const ReviewScreen = () => {
    const route = useRoute()
    const [questions, setQuestions] = useState([]) // store questions
    const [currentQues,setCurrentQues] = useState(1) // store current question
    const navigation = useNavigation() // navigation
    const [ practiceQuiz, setPracticeQuiz] = useState([])
    const [ userQuiz, setUserQuiz ] = useState([])
    const [quizNum, setQuizNum] = useState()
    const [question, setQuestion] = useState([])
    const [ review, setReview] = useState([])
    const [userAnswers, setUserAnswers] = useState({})

    useEffect(() => {
      if (route.params){
          const {practiceQuiz } = route.params
          setQuizNum(practiceQuiz.quizNumber)
          setPracticeQuiz(practiceQuiz)
          setQuestions(practiceQuiz.questions)
          console.log({practiceQuiz})
          setUserQuiz(practiceQuiz.user_quiz)
          console.log(practiceQuiz.user_quiz.data)
          setReview(userReview(practiceQuiz.questions,practiceQuiz.user_quiz.data))
          const data = practiceQuiz.user_quiz.data
          const userData = {}
          data.map(d => {
            userData[d.quesId]=d.ans
          })
          setUserAnswers(userData)
          // console.log(practiceQuiz.user_quiz)
      }
  }, [route.params])

    // restict curretn ques
    if(currentQues < 1){
        setCurrentQues(1)
    }
    if( questions.length !=0 && currentQues > questions.length){
        setCurrentQues(questions.length)
    }
    // handle previous and next 
    const handleClick = (type)=>{
        
        
        if(currentQues === 1 && type==="previous"){
            setCurrentQues(1)
        }
        // handle next 
        if(type === "next"){
            if(currentQues < questions.length ){
                setCurrentQues((prv)=>prv+1) // move next question
                return
            }
            // user clicked finish
            else{
                navigation.navigate("Practice tests")
                return
            }
        }
        else{ // handle previous
            if(currentQues > 1){
                
                setCurrentQues((prv)=>prv-1) // move previous
                console.log("if",currentQues)
                return
            }
            else{
                console.log("else",currentQues)
                return
            }
        }

        

        
    }

    // handle number click
    const handleNumClick =(no)=>{
        setCurrentQues(no) // change current question as no
    }
    
    
  return (
    <SafeAreaView style={{display : 'flex',flex : 1}}>
    <View style={styles.outContainer}>
        <View   style={styles.innerContainer}>


            {/*exam header start*/}
            <ExamHeader heading={"test"}/>
            {/*exam header end*/}

            {/*question number panel start*/}
            <View style={styles.questionNoPanelContainer}>
                
                {questions.map((item,index)=>{
                  console.log({item})
                    const color = item.answer == userAnswers[item._id] ? 'green' : 'red'
                return(
                    <Text onPress={handleNumClick.bind(this, index+1)} key={item._id} style={[styles.noText, {backgroundColor:`${(currentQues-1 == index)? "lightgray" :BACKGROUND_COLOR}`,borderColor: color, color: color }]} >{index+1 < 10 ? '0'+(index+1) : (index+1)}</Text>
                )})}

            </View >
            {/*question number panel end*/}


            {/*question start*/}
            <View style={{flex:1}}>
                { (questions.length > 0 &&  questions.length >= currentQues && currentQues > 0) && <ReviewQuestion no={currentQues} question={questions[currentQues-1]} userAnswers={userAnswers}/>}
            </View>
            {/*question end*/}



            {/*bottom button pannel start*/}
            <View style={{ flexDirection:'row', justifyContent:'space-between'}}>
                <View style={{flex:1,maxWidth:200}}>
                    <PrimaryButton  disable={ currentQues==1} onPress={handleClick.bind(this, "previous")} >
                        <Text style={{fontFamily:'Poppins_Medium',fontSize:15}}>Previous</Text>
                    </PrimaryButton>
                </View>
                <View style={{flex:1, maxWidth:200}}>
                    <PrimaryButton onPress={handleClick.bind(this, "next")}  >
                        <Text style={{fontFamily:'Poppins_Medium',fontSize:15}}>{currentQues === questions.length ? "Finish" : "Next"}</Text>
                    </PrimaryButton>
                </View>
            </View>
            {/*bottom button panel end*/}

        </View>
    </View>
    </SafeAreaView>
  )
}

export default ReviewScreen

const styles = StyleSheet.create({
    outContainer:{
        flex:1,
        backgroundColor:BACKGROUND_COLOR
    },
    innerContainer:{
        marginBottom:55, 
        flex:1
    },
    questionNoPanelContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'flex-start',
        gap:10,padding:5,
        margin:15,
        marginBottom:10,
        borderColor:'lightblue',
        borderWidth:1,
        borderRadius:10
    },
    noText:{
        borderColor:'gray',
        borderWidth:1, 
        borderRadius:5,
        minWidth:60,
        margin:2,
        marginVertical:0, 
        maxWidth:50, 
        padding:8, 
        textAlign:'center'
    }
})