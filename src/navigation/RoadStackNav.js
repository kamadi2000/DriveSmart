import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoadSignsScreen, { roadSignTypeList } from "../screens/RoadSignsTypeScreen";
import { BACKGROUND_COLOR, PRIMARY_COLOR } from "../utils/colors";
import UserProfile from "../components/UserProfile";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";
import { RoadSignsList } from "../screens/RoadSignListScreen";
import RoadSignPopOver from "../components/basic/RoadSignPopView";


function RoadSignsTypeScreen(){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: 100, height: 100, backgroundColor: 'blue' }}>
        <RoadSignsScreen/>
    </View>
        
    )
}


function RoadSignsListScreen({route , navigation}){
    const { type } = route.params
    console.log({type})

    useEffect(() => {    
        navigation.setOptions({ title: RoadSignsList.find(item => item.typeId == type).name })
    }, [type])
    const signList = RoadSignsList.find(item => item.typeId == type).signList
    console.log(signList)
    return(
        <ScrollView style={{paddingTop : 10}}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {signList.map((sign) => 
               <RoadSignPopOver key={sign.id} imgPath={sign.imgPath} title={sign.title} description={sign.description}/>
                

            )}

           
        {/* <RoadSignsListScreen/> */}
        </View>
        </ScrollView>
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
            <Stack.Screen name="RoadSigns" component={RoadSignsScreen} />
            <Stack.Screen name="RoadSignsList" component={RoadSignsListScreen} options={{title : ''}}/>
            {/* <Stack.Screen name="RoadSignsList" component={SignTypeListScreen} options={{ title: '' }} /> */}
        </Stack.Navigator>

    )
}

export default RoadStackNav;