import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screens/dashboardScreen";
import { BACKGROUND_COLOR, PRIMARY_COLOR } from "../utils/colors";
import UserProfile from "../components/UserProfile";
import { View, Text } from "react-native";
import PremiumSreen from "../screens/premiumScreen";
import RoadStackNav from "./RoadStackNav";
import { StackActions } from '@react-navigation/native';
import PracticeQuizScreen from "../screens/PracticeQuizScreen";
import PracticeQuiz from "../components/PracticeQuiz";
// import QuizListScreen from "../screens/QuizListScreen";
import ExamScreen from "../screens/examScreen";

function DashBoardScreen({navigation}) {
    return (
        
        <DashboardScreen />
       
       
    );
}
function RoadSignsStackScreen() {
    return (
        <RoadStackNav/>
    
    )
}

function Quiz_Screen(){
    return(
        <PracticeQuiz/>
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Progress tracking</Text>
        </View>

    )
}

function Premium() {
    return (
        <PremiumSreen/>

    )
}

const Stack = createNativeStackNavigator()

function DashboardStackNav() {
    return (
        <Stack.Navigator 
            initialRouteName='DashBoard' 
            screenOptions={{
                contentStyle : {backgroundColor : BACKGROUND_COLOR},
                headerStyle: { backgroundColor: PRIMARY_COLOR },
                headerRight: () => (
                    <UserProfile />
            )
        }}>
            <Stack.Screen 
                name="DashBoard" 
                component={DashBoardScreen}
                />
            <Stack.Screen name="RoadSignsStack" component={RoadSignsStackScreen} options={{headerShown : false}}/>
            <Stack.Screen name='Practice tests' component={Practice_tests} />
            <Stack.Screen name='Quiz' component={Quiz_Screen}/>
            <Stack.Screen name='QuizList' component={QuizList}/>
            <Stack.Screen name='Progress tracking' component={Progress_tracking} />
            <Stack.Screen name='Premium' component={Premium} />

            {/* <Stack.Screen name="RoadSignsList" component={SignTypeListScreen} options={{ title: '' }} /> */}
        </Stack.Navigator>
    )
}
export default DashboardStackNav;
