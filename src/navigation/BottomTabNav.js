import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BlurView } from 'expo-blur';
import DashboardScreen from '../screens/dashboardScreen';
import { PRIMARY_COLOR } from '../utils/colors';
import UserProfile from '../components/UserProfile';
import CourseStackNav from './CourseStackNav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardStackNav from './DashboardStackNav';
import SettingsScreen from '../screens/settingsScreen';


function DashBoardStack() {
    return (
        <DashboardStackNav />
    )
}
function CourseStack() {
    return (
        <CourseStackNav />
    );
}
function ContactUsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Contact Screen</Text>
        </View>
    );
}
function SettingsScreenView() {
    return (
        <SettingsScreen />
    );
}

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator
            initialRouteName="DashBoard"
            screenOptions={({ route }) => ({
                headerStyle: { backgroundColor: PRIMARY_COLOR },
                headerRight: () => {
                    if (route.name !== "Settings") {
                        return <UserProfile />
                    }

                }

                ,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'DashBoardStack') {
                        iconName = focused
                            ? 'md-home'
                            : 'md-home-outline';
                    } else if (route.name === 'CourseStack') {
                        iconName = focused ? 'book' : 'book-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === 'Contact') {
                        iconName = focused ? 'information-circle' : 'information-circle-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#3B474F',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: { position: 'absolute' },
                tabBarBackground: () => (
                    <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
                ),
            })}

        >
            <Tab.Screen
                name="DashBoardStack"
                component={DashBoardStack}
                options={{
                    tabBarLabel: 'Dashboard',
                    headerShown: false


                }}
                listeners={({ navigation, route }) => ({
                    tabPress: e => {
                        // console.log(navigation);
                        console.log()
                        //   navigation.dispatch(StackActions.popToTop());
                       
                        navigation.popToTop();

                            // Do something with the `navigation` object
                        navigation.navigate(route.name);
                        



                    },
                })} />
            <Tab.Screen
                name="CourseStack"
                component={CourseStack}
                options={{
                    tabBarLabel: 'Course',
                    headerShown: false

                }} />
            <Tab.Screen
                name='Contact'
                component={ContactUsScreen}
                options={{
                    tabBarLabel: 'Contact',

                }} />
            <Tab.Screen
                name='Settings'
                component={SettingsScreenView}
                options={{
                    tabBarLabel: 'Settings',
                    headerShown: false,

                }} />
        </Tab.Navigator>
    )
}
export default BottomTabNav;
