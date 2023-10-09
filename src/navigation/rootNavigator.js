import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabNav from './BottomTabNav';
import { PRIMARY_COLOR } from '../utils/colors';
import SignUp from '../screens/signUpScreen';
import Login from '../screens/loginScreen';
import { useSelector} from 'react-redux'
import { selectIsUserLoggedIn } from '../redux/userSlice';
import OTPScreen from '../screens/otpScreen';






function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Login />
      {/* <Text>Login</Text> */}
    </View>
  );
}
function SignUpScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <SignUp />
      {/* <Text>SignUp</Text> */}
    </View>
  );
}

function Root() {
  return <BottomTabNav />;
}

const Stack = createNativeStackNavigator();


function RouteNavigator() {
    
    const loggedIn = useSelector(selectIsUserLoggedIn)
    console.log({loggedIn})
      
    return (

        <Stack.Navigator screenOptions={{headerStyle : {backgroundColor : PRIMARY_COLOR}}}>
            {loggedIn ? (
                <>
                    
                    <Stack.Screen name="root" component={Root} options={{ headerShown: false }}/>
                    
                </>
            ) : (
                <>
                    <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="Sign-Up" component={SignUpScreen} options={{headerShown: false}} />
                    <Stack.Screen name='OTP' component={OTPScreen} options={{headerShown : false}}/>
                    
                    
                    
                </>
            )}

        </Stack.Navigator>

    );
}

export default RouteNavigator;
