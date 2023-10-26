import { View, Text, Alert, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState, useEffect, } from 'react'
import { BACKGROUND_COLOR } from '../utils/colors'
import PrimaryButton from '../components/basic/PrimaryButton';
import ExamHeader from '../components/ExamHeader';
import Question from '../components/Question';
import { useNavigation, useRoute } from '@react-navigation/native';
import PracticeQuestion from '../components/PracticeQuestion';
import useContent from '../apis/content';
import { useSelector } from 'react-redux';
import { selectUserToken } from '../redux/userSlice';

const QuizScreen = () => {
    const route = useRoute()
    const [questions, setQuestions] = useState([]) // store questions
    const [currentQues, setCurrentQues] = useState(1) // store current question
    const navigation = useNavigation() // navigation
    const [answers, setAnswers] = useState({})
    const [ quizNumber, setQuizNumber] = useState("")
    const { submitPracticeQuiz } = useContent()
    const token = useSelector(selectUserToken)
    var today = new Date();
    useEffect(() => {
        if (route.params) {
            const { questions, quizNumber } = route.params
            setQuizNumber(quizNumber)
            setQuestions(questions)
        }
    }, [route.params])

    // restict curretn ques
    if (currentQues < 1) {
        setCurrentQues(1)
    }
    if (questions.length != 0 && currentQues > questions.length) {
        setCurrentQues(questions.length)
    }

    const handleAnswer = (questionID, answer) => {
        setAnswers((answerList) => {
            const newAnswerList = { ...answerList }
            newAnswerList[questionID] = answer
            console.log({ newAnswerList, answers })
            return newAnswerList
        })
    }
    const handleSubmit = () => {
        console.log({ 
            userPracticePaper : answers, 
            startedOn : today.toDateString(), 
            submitOn : today.toLocaleTimeString(),
            quizNumber : quizNumber })
        submitPracticeQuiz({ 
            userPracticePaper : answers, 
            startedOn : today.toDateString(), 
            submitOn : today.toLocaleTimeString(),
            quizNumber : quizNumber,
            token : token })
        console.log("clicked")
        
        // console.log({ answers })
        
        

    }

    // handle previous and next 
    const handleClick = (type) => {
        if (currentQues === 1 && type === "previous") {
            setCurrentQues(1)
        }
        // handle next 
        if (type === "next") {
            if (currentQues < questions.length) {
                setCurrentQues((prv) => prv + 1) // move next question
                return
            }
            // user clicked finish
            else {
                // confrimation alert
                Alert.alert(
                    "Submit exam paper",
                    "Are you sure you want to submit your exam paper? Double-check your answers before proceeding.",
                    [
                        {
                            text: "Cancel",
                            style: 'cancel'
                        },
                        {
                            text: "Submit",
                            onPress: () => {
                                handleSubmit()
                                navigation.navigate('Practice tests')
                            }, // naviaget to quizview
                            style: 'destructive'
                        }
                    ]
                )
                return
            }
        }
        else { // handle previous
            if (currentQues > 1) {

                setCurrentQues((prv) => prv - 1) // move previous
                console.log("if", currentQues)
                return
            }
            else {
                console.log("else", currentQues)
                return
            }
        }




    }

    // handle number click
    const handleNumClick = (no) => {
        setCurrentQues(no) // change current question as no
    }


    return (
        <SafeAreaView style={{ display: 'flex', flex: 1 }}>
            <View style={styles.outContainer}>
                <View style={styles.innerContainer}>


                    {/*exam header start*/}
                    {/* <ExamHeader heading={heading}/> */}
                    {/*exam header end*/}

                    {/*question number panel start*/}
                    <View style={styles.questionNoPanelContainer}>

                        {questions.map((item, index) => (
                            <Text
                                onPress={handleNumClick.bind(this, index + 1)}
                                key={item._id}
                                style={[
                                    styles.noText,
                                    { backgroundColor: `${(currentQues - 1 == index) ? "lightgray" : BACKGROUND_COLOR}` }]}>
                                {index + 1 < 10 ? '0' + (index + 1) : (index + 1)}
                            </Text>
                        ))}

                    </View >
                    {/*question number panel end*/}


                    {/*question start*/}
                    <View style={{ flex: 1 }}>
                        {(questions.length > 0 && questions.length >= currentQues && currentQues > 0)
                            &&
                            <PracticeQuestion
                                key={questions[currentQues - 1]._id} 
                                no={currentQues} 
                                question={questions[currentQues - 1]}
                                handleAnswer={handleAnswer}
                                answers={answers} />}
                    </View>
                    {/*question end*/}



                    {/*bottom button pannel start*/}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flex: 1, maxWidth: 200 }}>
                            <PrimaryButton disable={currentQues == 1} onPress={handleClick.bind(this, "previous")} >
                                <Text style={{ fontFamily: 'Poppins_Medium', fontSize: 15 }}>Previous</Text>
                            </PrimaryButton>
                        </View>
                        <View style={{ flex: 1, maxWidth: 200 }}>
                            <PrimaryButton onPress={handleClick.bind(this, "next")}  >
                                <Text style={{ fontFamily: 'Poppins_Medium', fontSize: 15 }}>{currentQues === questions.length ? "Finish" : "Next"}</Text>
                            </PrimaryButton>
                        </View>
                    </View>
                    {/*bottom button panel end*/}

                </View>
            </View>
        </SafeAreaView>
    )
}

export default QuizScreen;

const styles = StyleSheet.create({
    outContainer: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR
    },
    innerContainer: {
        marginBottom: 55,
        flex: 1
    },
    questionNoPanelContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: 10, padding: 5,
        margin: 15,
        marginBottom: 10,
        borderColor: 'lightblue',
        borderWidth: 1,
        borderRadius: 10
    },
    noText: {
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        minWidth: 60,
        margin: 2,
        marginVertical: 0,
        maxWidth: 50,
        padding: 8,
        textAlign: 'center'
    }
})