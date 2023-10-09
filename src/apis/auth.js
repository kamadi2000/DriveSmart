import { BACKEND_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { login } from "../redux/userSlice";
import responseHandler from "./helpers";

const useAuth = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const dispatch = useDispatch()
    const hangleLogin = async ({ email , password}) => {
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
          .then((response) => response.json())
          .then(responseHandler(
            (data) => {
              console.log({ data });
              if (data && data.token) {
                // Store the token securely using AsyncStorage or any other secure storage method
                // AsyncStorage.setItem("authToken", data.token);
                // dispatch(login({loggedIn : true , token : data.token}))
      
                // console.log("data stored");
                // navigation.navigate("DashboardStackNav");
                // Navigate to the dashboard or another authorized page
              }
            }
            ))
          .catch((error) => {
            // Handle network errors or other exceptions
            console.error("Login error:", error);
          });
      };

    const handleSignUp = async ({ email, password, name}) => {
        console.log({email, password, name})

        const requestBody = {
            email : email,
            password : password,
            name : name
        }
        const signUpUrl = BACKEND_URL + "/auth/signUpApp" 
        await fetch(signUpUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "accept" : "application/json"
            },
            body: JSON.stringify(requestBody),
          })
          .then((response) => response.json())
          .then(responseHandler(
            (data) => {
              console.log({ data });
              if (data && data.token) {
                AsyncStorage.setItem("authToken", data.token);
                // navigation.navigate("OTP")
                dispatch(login({loggedIn : true , token : data.token}))     
                console.log("data stored");
              }
            }, () => {
              
            }
            ))
          .catch((error) => {
            // Handle network errors or other exceptions
            console.error("Login error:", error);
          });

    }

    return {
        authenticated,
        hangleLogin ,
        handleSignUp
    }
}

export default useAuth; 