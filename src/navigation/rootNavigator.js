import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNav from './BottomTabNav';
import { PRIMARY_COLOR } from '../utils/colors';
// import SignUp from '../screens/SignUpScreen';
// import Login from '../screens/LoginScreen';




function LoginScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Login/>
           {/* <Text>Login</Text> */}
        </View>
    );
}
function SignUpScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SignUp/>
            {/* <Text>SignUp</Text> */}
        </View>
    );
}

function Root(){
    return(
        <BottomTabNav/>
    )
}

function Road_signs(){
    return(
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Road signs</Text>
        </View>
        
    )
}

function Practice_tests(){
    return(
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Practice tests</Text>
        </View>
        
    )
}
function Progress_tracking(){
    return(
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
         <Text>Progress tracking</Text>
        </View>
       
    )
}

function Premium(){
    return(
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Premium</Text>
        </View>
        
    )
}

const Stack = createNativeStackNavigator();
const getIsSignedIn = () => {
    // custom logic
    return true
};


function RouteNavigator() {
    const isSignedIn = getIsSignedIn()

    return (

        <Stack.Navigator screenOptions={{headerStyle : {backgroundColor : PRIMARY_COLOR}}}>
            {isSignedIn ? (
                <>
                    
                    <Stack.Screen name="root" component={Root} options={{ headerShown: false }}/>
                    <Stack.Screen name='Road signs' component={Road_signs}/>
                    <Stack.Screen name='Practice tests' component={Practice_tests}/>
                    <Stack.Screen name='Progress tracking' component={Progress_tracking}/>
                    <Stack.Screen name='Premium' component={Premium}/>
                </>
            ) : (
                <>
                    
                    <Stack.Screen name="Sign-Up" component={SignUpScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                </>
            )}

        </Stack.Navigator>

    );
}

export default RouteNavigator;
