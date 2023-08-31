import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
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

const Stack = createNativeStackNavigator();

function RouteNavigator() {
    const isSignedIn = false
    return (
        <NavigationContainer>
            <Stack.Navigator>
                isSignedIn ? (
                <>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    
                </>
                ) : (
                <>
                    <Stack.Screen name="SignIn" component={SignInScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                </>
                );

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RouteNavigator;
