import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screens/dashboardScreen";
import { BACKGROUND_COLOR, PRIMARY_COLOR } from "../utils/colors";
import UserProfile from "../components/UserProfile";
import { View, Text } from "react-native";
import PremiumSreen from "../screens/premiumScreen";
import ProgressTrackingScreen from "../screens/progressTrackingScreen";
import { StackActions } from '@react-navigation/native';
import PracticeQuizScreen from "../screens/PracticeQuizScreen";
// import PracticeQuiz from "../components/PracticeQuiz";
// import QuizListScreen from "../screens/QuizListScreen";
import ExamScreen from "../screens/examScreen";
import { createStackNavigator } from '@react-navigation/stack';
import RoadSignsScreen from "../screens/RoadSignsTypeScreen";
import RoadSignsListScreen from '../screens/RoadSignListScreen'
import QuizViewScreen from "../screens/quizViewScreen";
import ReviewScreen from "../screens/ReviewScreen";
import PracticequizDetailsScreen from "../screens/PracticeQuizDetailsScreen";
import QuizScreen from "../screens/QuizScreen";


function DashBoardScreen({navigation}) {
    return (
        
        <DashboardScreen />
       
       
    );
}


function Quiz_Screen(){
    return(
        <QuizViewScreen/>
    )
}
function QuizList(){
    return(
       <ExamScreen/>
    // <QuizListScreen/>
    )
}

function Practice_tests() {
    return (
        <PracticeQuizScreen/>

    )
}
function Progress_tracking() {
    return (
        <ProgressTrackingScreen/>

    )
}

function Premium() {
    return (
        <PremiumSreen/>

    )
}

const Stack = createStackNavigator();

function DashboardStackNav() {
    return (
        <Stack.Navigator 
            initialRouteName='DashBoard' 
            screenOptions= {({route}) =>({
                cardStyle : {backgroundColor : BACKGROUND_COLOR},
                headerStyle: { backgroundColor: PRIMARY_COLOR },
                headerRight: () => (
                    <UserProfile />
            )
        })}>
            <Stack.Screen 
                name="DashBoard" 
                component={DashBoardScreen}
                options={{title : 'Dashboard'}}
                />
            {/* <Stack.Screen name="RoadSignsStack" component={RoadStackNav} options={{headerShown : false}}/> */}
            <Stack.Screen name="RoadSigns" component={RoadSignsScreen}/>
            <Stack.Screen name="RoadSignsList" component={RoadSignsListScreen}/>
            <Stack.Screen name='Practice tests' component={Practice_tests} />
            <Stack.Screen name='Quiz' component={Quiz_Screen}/>
            <Stack.Screen name='Practice test' component={QuizScreen}/>
            <Stack.Screen name='PracticeQuizDetails' component={PracticequizDetailsScreen}/>
            <Stack.Screen name='QuizList' component={QuizList}/>
            <Stack.Screen name='Review' component={ReviewScreen}/>
            <Stack.Screen name='Progress tracking' component={Progress_tracking} />
            <Stack.Screen name='Premium' component={Premium} />

            {/* <Stack.Screen name="RoadSignsList" component={SignTypeListScreen} options={{ title: '' }} /> */}
        </Stack.Navigator>
    )
}
export default DashboardStackNav;
