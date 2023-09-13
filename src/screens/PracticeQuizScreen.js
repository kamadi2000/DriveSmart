import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Card from "../components/basic/RoadSignTypeCardComponent";
import PracticeQuiz from "../components/PracticeQuiz";
import { useNavigation } from "@react-navigation/native";

const quizList = [
    {
        id: 1,
        title: `Practice Quiz 1`,
        attemptsByUser : 1

    },
    {
        id: 2,
        title: `Practice Quiz 2`,
        attemptsByUser : 1

    },
    {
        id: 3,
        title: `Practice Quiz 3`,
        attemptsByUser : 1

    },
    {
        id: 4,
        title: `Final exam`,
        attemptsByUser : 1

    },
]

const PracticeQuizScreen = () => {
    const navigation = useNavigation();
    return (
        <ScrollView contentContainerStyle={{justifyContent : 'center',alignItems : 'center',paddingTop:10}}>
            {quizList.map((test)=>
            <TouchableOpacity key={test.id} onPress={() => navigation.navigate('Quiz')}>
                <Card  title={test.title}/>
            </TouchableOpacity>
            )}
        </ScrollView>
    )
}

export default PracticeQuizScreen;