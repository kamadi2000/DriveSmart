import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "../screens/dashboardScreen";
import { PRIMARY_COLOR } from "../utils/colors";
import UserProfile from "../components/UserProfile";
import { View, Text } from "react-native";
import PremiumSreen from "../screens/premiumScreen";

function DashBoardScreen() {
    return (
        <DashboardScreen />
    );
}
function RoadSignsScreen() {
    return (
        <View></View>
    )
}

function Practice_tests() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Practice tests</Text>
        </View>

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
                headerStyle: { backgroundColor: PRIMARY_COLOR },
                headerRight: () => (
                    <UserProfile />
            )
        }}>
            <Stack.Screen name="DashBoard" component={DashBoardScreen} />
            <Stack.Screen name="RoadSigns" component={RoadSignsScreen} />
            <Stack.Screen name='Practice tests' component={Practice_tests} />
            <Stack.Screen name='Progress tracking' component={Progress_tracking} />
            <Stack.Screen name='Premium' component={Premium} />

            {/* <Stack.Screen name="RoadSignsList" component={SignTypeListScreen} options={{ title: '' }} /> */}
        </Stack.Navigator>
    )
}
export default DashboardStackNav;
