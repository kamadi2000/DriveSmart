import { useSelector } from "react-redux"
import { BACKEND_URL } from "../utils/constants"
import { selectUserToken } from "../redux/userSlice"
import { useState } from "react"
import axios from "axios"

const useContent = () => {
    const [practiceQuizList , setPracticeQuizList] = useState([])
    const getPracticeQuizzes = async ({token}) => {
        console.log("token",token)
        const url = BACKEND_URL + '/practiceQuizzes/getPracticeQuizPapers'
        axios.get(url,{
            headers: {
                "x-access-token": token
            }
        }
        )
        // .then(async (res) => {
        //     const r = await res.json()
        //     console.log({r})
        //     return r})
        .then((res) => {
            if(res.status == 304){
                console.log("304")
            }
            
            const data = res.data
            // console.log({res})
            setPracticeQuizList(data)
            console.log(data)})
        .catch((err) => {
            console.error("load failed",err)
            })
    };

    const submitPracticeQuiz = async ({userPracticePaper, quizNumber , submitOn, startedOn, token}) => {
        const url = BACKEND_URL + '/practiceQuizzes/submitPracticeQuiz'
        console.log("hi")
        axios.post( url ,
            {
                userPracticePaper : userPracticePaper,
                quizNumber : quizNumber,
                submitOn : submitOn,
                startedOn : startedOn,
            },{
                headers : {"x-access-token" : token}
            })
            .then(response => 
                console.log({ response })
            )
            .catch(error => {
                console.log(error)


            })

    }
    return {
        practiceQuizList,
        getPracticeQuizzes,
        submitPracticeQuiz
        
    }
       
    
}
export default useContent;