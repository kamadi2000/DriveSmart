import { BACKEND_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { login } from "../redux/userSlice";
import responseHandler from "./helpers";
import { useNavigation } from "@react-navigation/native";
import { showSuccessToast } from "../components/basic/ToastComponent";


const useAuth = () => {
  const navigation = useNavigation()
  const [authenticated, setAuthenticated] = useState(false);

  const dispatch = useDispatch()

  const hangleLogin = async ({ email, password }) => {
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
        "accept": "application/json"
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then(responseHandler(
        (data) => {
          console.log({ data });
          if (data && data.token) {
            if (data.isVerified) {
              // Store the token securely using AsyncStorage or any other secure storage method
              AsyncStorage.setItem("authToken", data.token);
              dispatch(login({ loggedIn: true, token: data.token }))
              showSuccessToast("Sucess","You have logged in successfully.")
              // console.log("data stored");
              // navigation.navigate("DashboardStackNav");
              // Navigate to the dashboard or another authorized page
            } else {
              AsyncStorage.setItem("authToken", data.token);
              dispatch(login({ token: data.token }))
              navigation.navigate("OTP")
              console.log("navigated to OTP screen");

            }

          }
        }
      ))
      .catch((error) => {
        // Handle network errors or other exceptions
        console.error("Login error:", error);
      });
  };

  const handleSignUp = async ({ email, password, name }) => {
    console.log({ email, password, name })

    const requestBody = {
      email: email,
      password: password,
      name: name
    }
    const signUpUrl = BACKEND_URL + "/auth/signUpApp"
    await fetch(signUpUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then(responseHandler(
        (data) => {
          console.log({ data });
          if (data && data.token) {
            AsyncStorage.setItem("authToken", data.token);
            dispatch(login({ token: data.token }))
            navigation.navigate("OTP")   
            console.log("navigated to OTP screen");
          }
        }, () => {

        }
      ))
      .catch((error) => {
        // Handle network errors or other exceptions
        console.error("Login error:", error);
      });

  }

  const handleVerification = async ({ token, otpCode }) => {
    console.log({ token, otpCode })
    const requestBody = {
      token: token,
      otp: otpCode
    }
    const verificationUrl = BACKEND_URL + '/auth/verifyOtpApp'
    await fetch(verificationUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(requestBody)
    })
      .then((response) => response.json())
      .then(responseHandler(
        (data) => {
          console.log({ data });
          if (data && data.token) {
            AsyncStorage.setItem("authToken", data.token);
            // navigation.navigate("OTP")
            dispatch(login({ loggedIn: true, token: data.token }))
            showSuccessToast("Sucess","You have logged in successfully.")
            console.log("data stored");
          }
        }
      ))

  }

  return {
    authenticated,
    hangleLogin,
    handleSignUp,
    handleVerification
  }
}

export default useAuth; 