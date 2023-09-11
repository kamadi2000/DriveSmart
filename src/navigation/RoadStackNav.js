import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoadSignsScreen from "../screens/RoadSignsTypeScreen";
import { BACKGROUND_COLOR, PRIMARY_COLOR } from "../utils/colors";
import UserProfile from "../components/UserProfile";
import { View } from "react-native";

function RoadSignsTypeScreen(){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <RoadSignsScreen/>
    </View>
        
    )
}

function RoadSignsListScreen(){
    return(
        <View>
            
        </View>
    )
}

const Stack = createNativeStackNavigator()
const RoadStackNav = () => {
    return (
        <Stack.Navigator 
            initialRouteName='RoadSigns' 
            screenOptions={{
                contentStyle : {backgroundColor : BACKGROUND_COLOR},
                headerStyle: { backgroundColor: PRIMARY_COLOR },
                headerRight: () => (
                    <UserProfile />
        )
    }}>
            <Stack.Screen name="RoadSigns" component={RoadSignsTypeScreen} />
            <Stack.Screen name="RoadSignsList" component={RoadSignsListScreen} />
            {/* <Stack.Screen name="RoadSignsList" component={SignTypeListScreen} options={{ title: '' }} /> */}
        </Stack.Navigator>

    )
}

export default RoadStackNav;