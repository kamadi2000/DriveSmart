import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
function PremiumScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Premium Screen</Text>
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
function AboutUsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>AboutUs Screen</Text>
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
const getIsSignedIn = () => {
    // custom logic
    return true
};

function RouteNavigator() {
    const isSignedIn = getIsSignedIn()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isSignedIn ? (
                    <>
                        <Stack.Screen name="DashBoard" component={DashBoardScreen} />
                        <Stack.Screen name="Course" component={CourseScreen} />
                        <Stack.Screen name="Premium" component={PremiumScreen} />
                        <Stack.Screen name="Contact us" component={ContactUsScreen} />
                        <Stack.Screen name="About us" component={AboutUsScreen} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="SignIn" component={SignInScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                    </>
                )}

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RouteNavigator;
