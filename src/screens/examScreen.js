import { View, Text, Alert, StyleSheet } from 'react-native'
import React, { useState, useEffect,  } from 'react'
import { BACKGROUND_COLOR } from '../utils/colors'
import PrimaryButton from '../components/basic/PrimaryButton';
import ExamHeader from '../components/ExamHeader';
import Question from '../components/Question';
import { useNavigation ,useRoute} from '@react-navigation/native';

const ExamScreen = () => {
    const route = useRoute()
    const [questions, setQuestions] = useState([]) // store questions
    const [currentQues,setCurrentQues] = useState(1) // store current question
    const navigation = useNavigation() // navigation
    const {heading, Qid} = route.params

    // restict curretn ques
    if(currentQues < 1){
        setCurrentQues(1)
    }
    if( questions.length !=0 && currentQues > questions.length){
        setCurrentQues(questions.length)
    }

    // set data
    useEffect(()=>{
        // fetch data from database
        let fetchData = [
            {
                question_id:"1",
                question:"What does a solid double yellow line on the road in Sri Lanka indicate?",
                options:[
                    {
                    id:"1",
                    label:"No parking allowed"
                    },
                    {
                        id:"2",
                        label:"Overtaking is prohibited" 
                    },
                    {
                        id:"3",
                        label:"One-way traffic only"
                    },
                    {
                        id:"4",
                        label:"No horn allowed"
                    }
                ]
            },
            {
                question_id:"2",
                question:"In Sri Lanka, what is the legal blood alcohol concentration (BAC) limit for drivers?",
                options:[
                    {
                        id:"1",
                        label:"0.02%"
                    },
                    {
                        id:"2",
                        label:"0.05%"
                    },
                    {
                        id:"3",
                        label:"0.08%"
                    },
                    {
                        id:"4",
                        label:"0.10%"
                    }
                ]
            },
            {
                question_id:"3",
                question:"In Sri Lanka, what should you do when you approach a roundabout?",
                options:[
                    {
                        id:"1",
                        label:"Speed up to get through it quickly"
                    },
                    {
                        id:"2",
                        label:"Yield to vehicles already in the roundabout",
                    },
                    {
                        id:"3",
                        label:"Always enter the roundabout without stopping"
                    },
                    {
                        id:"4",
                        label:"Sound your horn continuously while in the roundabout"
                    }
                ]
            },
            {
                question_id:"4",
                question:"In Sri Lanka, what should you do when you approach a roundabout?",
                options:[
                    {
                        id:"1",
                        label:"Speed up to get through it quickly"
                    },
                    {
                        id:"2",
                        label:"Yield to vehicles already in the roundabout",
                    },
                    {
                        id:"3",
                        label:"Always enter the roundabout without stopping"
                    },
                    {
                        id:"4",
                        label:"Sound your horn continuously while in the roundabout"
                    }
                ]
            },
            {
                question_id:"5",
                question:"In Sri Lanka, what should you do when you approach a roundabout?",
                options:[
                    {
                        id:"1",
                        label:"Speed up to get through it quickly"
                    },
                    {
                        id:"2",
                        label:"Yield to vehicles already in the roundabout",
                    },
                    {
                        id:"3",
                        label:"Always enter the roundabout without stopping"
                    },
                    {
                        id:"4",
                        label:"Sound your horn continuously while in the roundabout"
                    }
                ]
            },
            {
                question_id:"6",
                question:"In Sri Lanka, what should you do when you approach a roundabout?",
                options:[
                    {
                        id:"1",
                        label:"Speed up to get through it quickly"
                    },
                    {
                        id:"2",
                        label:"Yield to vehicles already in the roundabout",
                    },
                    {
                        id:"3",
                        label:"Always enter the roundabout without stopping"
                    },
                    {
                        id:"4",
                        label:"Sound your horn continuously while in the roundabout"
                    }
                ]
            },
            {
                question_id:"7",
                question:"In Sri Lanka, what should you do when you approach a roundabout?",
                options:[
                    {
                        id:"1",
                        label:"Speed up to get through it quickly"
                    },
                    {
                        id:"2",
                        label:"Yield to vehicles already in the roundabout",
                    },
                    {
                        id:"3",
                        label:"Always enter the roundabout without stopping"
                    },
                    {
                        id:"4",
                        label:"Sound your horn continuously while in the roundabout"
                    }
                ]
            },
            {
                question_id:"8",
                question:"In Sri Lanka, what should you do when you approach a roundabout?",
                options:[
                    {
                        id:"1",
                        label:"Speed up to get through it quickly"
                    },
                    {
                        id:"2",
                        label:"Yield to vehicles already in the roundabout",
                    },
                    {
                        id:"3",
                        label:"Always enter the roundabout without stopping"
                    },
                    {
                        id:"4",
                        label:"Sound your horn continuously while in the roundabout"
                    }
                ]
            },
            {
                question_id:"9",
                question:"In Sri Lanka, what should you do when you approach a roundabout?",
                options:[
                    {
                        id:"1",
                        label:"Speed up to get through it quickly"
                    },
                    {
                        id:"2",
                        label:"Yield to vehicles already in the roundabout",
                    },
                    {
                        id:"3",
                        label:"Always enter the roundabout without stopping"
                    },
                    {
                        id:"4",
                        label:"Sound your horn continuously while in the roundabout"
                    }
                ]
            },
            

        ]

        setQuestions(fetchData)
    },[])

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
                // confrimation alert
                Alert.alert(
                    "Sumit exam paper",
                    "Are you sure you want to submit your exam paper? Double-check your answers before proceeding.",
                    [
                    {
                        text:"Cancel",
                        style:'cancel'
                    },
                    {
                        text:"Submit",
                        onPress: ()=> navigation.goBack(), // naviaget to quizview
                        style:'destructive'
                    }
                    ]
                )
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
    <View style={styles.outContainer}>
        <View   style={styles.innerContainer}>


            {/*exam header start*/}
            <ExamHeader heading={heading}/>
            {/*exam header end*/}

            {/*question number panel start*/}
            <View style={styles.questionNoPanelContainer}>
                
                {questions.map((item,index)=>(
                    <Text onPress={handleNumClick.bind(this, index+1)} key={item.question_id} style={[styles.noText, {backgroundColor:`${(currentQues-1 == index)? "lightgray" :BACKGROUND_COLOR}`}]} >{index+1 < 10 ? '0'+(index+1) : (index+1)}</Text>
                ))}

            </View >
            {/*question number panel end*/}


            {/*question start*/}
            <View style={{flex:1}}>
                { (questions.length > 0 &&  questions.length >= currentQues && currentQues > 0) && <Question no={currentQues} question={questions[currentQues-1]} />}
            </View>
            {/*question end*/}



            {/*bottom button pannel start*/}
            <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
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
  )
}

export default ExamScreen

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
        maxWidth:'50', 
        padding:8, 
        textAlign:'center'
    }
})