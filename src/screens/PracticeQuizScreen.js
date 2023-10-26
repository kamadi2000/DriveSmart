import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Card from "../components/basic/RoadSignTypeCardComponent";
// import PracticeQuiz from "../components/PracticeQuiz";
import { useNavigation, useRoute } from "@react-navigation/native";
import useContent from "../apis/content";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUserToken } from "../redux/userSlice";
import { BACKEND_URL } from "../utils/constants";


const PracticeQuizScreen = () => {
    const { getPracticeQuizzes, practiceQuizList } = useContent()
    const navigation = useNavigation();
    const token = useSelector(selectUserToken)
    useEffect(() => {
        if (token){
            getPracticeQuizzes({token})
            console.log({practiceQuizList})
        }
       
        
        
    },[token])
    
    return (
        <ScrollView contentContainerStyle={{justifyContent : 'center',alignItems : 'center',paddingTop:10}}>
            {practiceQuizList?.map((test)=>
            <TouchableOpacity key={test._id} onPress={() => {navigation.navigate('PracticeQuizDetails',{practiceQuiz : test})}}>
                <Card  title={`Practice Quiz `+ test.quizNumber} imgPath={test.user_quiz? require("../assets/images/greenCar.jpeg"): require("../assets/images/redCar.png")}/>
            </TouchableOpacity>
            )}
        </ScrollView>
    )
}

export default PracticeQuizScreen;