import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  ScrollView,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";
import { CARD_COLOR } from "../utils/colors";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextField, PasswordField } from "../components/basic/InputField";
import {
  BodyText,
  HeadingText,
  LabelText,
  LightText,
} from "../components/basic/TextComponent";
import { Task_button } from "../components/basic/ButtonComponent";
import DashboardScreen from "./dashboardScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { HorizontalStack, VerticalStack } from "../components/basic/AlignStacks";
import { BACKEND_URL, HEIGHT } from "../utils/constants";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import GoogleLoginButton from "../components/basic/GoogleLogin";

const Login = () => {
  const navigation = useNavigation();

  let [email, setEmail] = useState("someone@gmail.com");
  const [password, setPassword] = useState("pwd123");

  const dispatch = useDispatch()

  const handleLogin = async () => {
    // Construct your login request body
    // dispatch(login({loggedIn : true , token : "112344"}))
    const requestBody = {
      email: email,
      password: password,
    };

    // Replace 'YOUR_LOGIN_URL' with the actual URL where you want to send the login request
    const loginUrl = BACKEND_URL + "/auth/loginApp"

    // Send the login request using the fetch API
    await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept" : "application/json"
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (response.ok) {
          // Login successful, you can navigate to another screen or perform necessary actions
          console.log("Login successful");
          // console.log(response);
          // Add your navigation logic here
        } else {
          // Login failed, handle the error
          console.error("Login failed");
        }
        return response.json();
      })
      .then((data) => {
        // console.log('Hi');
        console.log({ data });
        if (data && data.token) {
          // Store the token securely using AsyncStorage or any other secure storage method
          AsyncStorage.setItem("authToken", data.token);
          dispatch(login({loggedIn : true , token : data.token}))

          console.log("data stored");
          // navigation.navigate("DashboardStackNav");
          // Navigate to the dashboard or another authorized page
        }
      })
      .catch((error) => {
        // Handle network errors or other exceptions
        console.error("Login error:", error);
      });
  };

  return (
    <ScrollView style={{flex : 1}}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessibility={false}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          margin: 15,
          backgroundColor: CARD_COLOR,
        }}
      >
        <VerticalStack style={{ justifyContent: 'space-evenly',height: HEIGHT, borderRadius: 10 }}>
          <View style={{}}>
           <HeadingText>Login</HeadingText>
          </View>
          <TextField
            label={<LabelText>Email</LabelText>}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <View>
            <PasswordField
              label={<LabelText>Password</LabelText>}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <LabelText>Forgot your password?</LabelText>
          </View>
          <Task_button onPress={handleLogin}>
            <BodyText>Login</BodyText>
          </Task_button>
          <HorizontalStack
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <View
              style={{
                borderBottomColor: "black",
                flex: 1 / 2,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            <View>
              <LabelText style={{ fontSize: 15, paddingHorizontal: 5 }}>
                OR
              </LabelText>
            </View>
            <View
              style={{
                borderBottomColor: "black",
                flex: 1 / 2,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
          </HorizontalStack>

          <GoogleLoginButton/>

          <Task_button>
            <HorizontalStack>
              <View style={{ flex: 1 / 3 }}>
                <FontAwesome5 name="facebook" size={22} color="black" />
              </View>
              <View>
                <BodyText>Login with Facebook</BodyText>
              </View>
            </HorizontalStack>
          </Task_button>
          
          <TouchableOpacity onPress={()=> navigation.navigate("Sign-Up")}>
          <LightText>Don't have an account ? Register now.</LightText>
          </TouchableOpacity>
        </VerticalStack>
      </View>
    </TouchableWithoutFeedback>
    </ScrollView>
  )
}

export default Login;
