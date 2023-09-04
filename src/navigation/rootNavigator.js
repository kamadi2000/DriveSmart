import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNav from './BottomTabNav';

function DashBoardScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>DashBoard Screen</Text>
        </View>
    );
}
function CourseScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Course Screen</Text>
        </View>
    );
}
function ContactUsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Contact Screen</Text>
        </View>
    );
}
function SettingsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settings Screen</Text>
        </View>
    );
}
function SignInScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SignIn Screen</Text>
        </View>
    );
}
function SignUpScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SignUp Screen</Text>
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
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                </>
            )}

        </Stack.Navigator>

    );
}

export default RouteNavigator;
