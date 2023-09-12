import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNav from './BottomTabNav';
import { PRIMARY_COLOR } from '../utils/colors';
import Login from '../screens/loginScreen';
import SignUp from '../screens/signUpScreen';






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
