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
import { useNavigation } from "@react-navigation/native";
import { HorizontalStack, VerticalStack } from "../components/basic/AlignStacks";
import { BACKEND_URL, HEIGHT } from "../utils/constants";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import GoogleLoginButton from "../components/basic/GoogleLogin";
import useAuth from "../apis/auth";
import { useTranslation } from "react-i18next";

const Login = () => {
  const navigation = useNavigation();
  const { t } = useTranslation()
  const { hangleLogin } = useAuth()

  let [email, setEmail] = useState("liyanagek.20@uom.lk");
  const [password, setPassword] = useState("12345678");

  const onLogin = () => {
    hangleLogin({ email, password })
  }

  return (
    <ScrollView style={{ flex: 1 }}>
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
          <VerticalStack style={{ justifyContent: 'space-evenly', height: HEIGHT, borderRadius: 10 }}>
            <View style={{}}>
              <HeadingText>Login</HeadingText>
            </View>
            <TextField
              testID="loginEmail"
              label={<LabelText>Email</LabelText>}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <View>
              <PasswordField
                testID='loginPassword'
                label={<LabelText>Password</LabelText>}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <LabelText>Forgot your password?</LabelText>
            </View>
            <Task_button testID="loginButton" onPress={onLogin}>
              <BodyText>{t("login")}</BodyText>
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

            {/* <GoogleLoginButton/> */}

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

            <TouchableOpacity testID="register" onPress={() => navigation.navigate("Sign-Up")}>
              <LightText>Don't have an account ? Register now.</LightText>
            </TouchableOpacity>
          </VerticalStack>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  )
}

export default Login;
