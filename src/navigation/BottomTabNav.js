import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { BlurView } from 'expo-blur';
import DashboardScreen from '../screens/dashboardScreen';
import { PRIMARY_COLOR } from '../utils/colors';
import UserProfile from '../components/UserProfile';
import CoursePageScreen from '../screens/courseScreen';

function DashBoardScreen() {
    return (
        <DashboardScreen/>
    );
}
function CourseScreen() {
    return (
        <CoursePageScreen />
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

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator
            initialRouteName="DashBoard"
            screenOptions={({ route }) => ({
                headerStyle : {backgroundColor : PRIMARY_COLOR},
                headerRight : () => (
                    <UserProfile/>
                )
                    
                ,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'DashBoard') {
                        iconName = focused
                            ? 'md-home'
                            : 'md-home-outline';
                    } else if (route.name === 'Course') {
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
                name="DashBoard"
                component={DashBoardScreen}
                options={{
                    tabBarLabel: 'Dashboard',


                }} />
            <Tab.Screen
                name="Course"
                component={CourseScreen}
                options={{
                    tabBarLabel: 'Course',

                }} />
            <Tab.Screen
                name='Settings'
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',

                }} />
            <Tab.Screen
                name='Contact'
                component={ContactUsScreen}
                options={{
                    tabBarLabel: 'Contact',

                }} />
        </Tab.Navigator>
    )
}
export default BottomTabNav;
