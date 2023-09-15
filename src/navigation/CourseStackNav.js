import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CoursePageScreen from '../screens/courseScreen';
import ContentScreen from '../screens/contentScreen'
import QuizViewScreen from '../screens/quizViewScreen'
import { View , Text } from "react-native";
import { BACKGROUND_COLOR, PRIMARY_COLOR } from "../utils/colors";
import UserProfile from "../components/UserProfile";
import ExamScreen from "../screens/examScreen";

function CourseScreen() {
    return <CoursePageScreen />
}

function Content() {
    return <ContentScreen/>
}

function QuizView() {
    return <QuizViewScreen />
}

function ExamView() {
    return <ExamScreen />
}

const Stack = createNativeStackNavigator()

function CourseStackNav(){
    return (
        <Stack.Navigator
            initialRouteName="Course"
            screenOptions={({ route }) => ({
                // cardStyle : {backgroundColor : BACKGROUND_COLOR},
                contentStyle : {backgroundColor : BACKGROUND_COLOR},
                headerStyle: { backgroundColor: PRIMARY_COLOR },
                
                headerRight: ()=> route.name === 'Course' ? (
                    <UserProfile />
                ) : null, // Hide the profile for other screens
              })}
        >
            <Stack.Screen name="Course" component={CourseScreen} />
            <Stack.Screen name="Content" component={Content} />
            <Stack.Screen name="Quiz View" component={QuizView} />
            <Stack.Screen name="Exam" component={ExamView} />
        </Stack.Navigator>
    )
}

export default CourseStackNav;