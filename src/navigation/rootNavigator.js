import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNav from './BottomTabNav';
import Login from '../screens/LoginScreen';




function LoginScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           {/* <Login/> */}
           <Text>Login</Text>
        </View>
    );
}
function SignUpScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sign-Up</Text>
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

        <Stack.Navigator>
            {isSignedIn ? (
                <>
                    
                    <Stack.Screen name="root" component={Root} options={{ headerShown: false }}/>
                </>
            ) : (
                <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Sign-Up" component={SignUpScreen} />
                </>
            )}

        </Stack.Navigator>

    );
}

export default RouteNavigator;
