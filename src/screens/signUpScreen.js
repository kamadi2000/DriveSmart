import { HorizontalStack, VerticalStack } from "../components/basic/AlignStacks";
import { Task_button } from "../components/basic/ButtonComponent";
import { PasswordField, TextField } from "../components/basic/InputField";
import { BodyText, HeadingText, LabelText, LightText } from "../components/basic/TextComponent";
import { TouchableWithoutFeedback, View, Keyboard, ScrollView, StyleSheet, Linking, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { CARD_COLOR, HEIGHT, WIDTH } from "../utils/constants";
import { FontAwesome5 } from '@expo/vector-icons';
import GoogleLoginButton from "../components/basic/GoogleLogin";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import useAuth from "../apis/auth";

const SignUp = () => {
  const [email,setEmail] = useState("abc@gmail.com");
  const [password,setPassword] = useState('12345678')
  const [Rpassword,setRPassword] = useState('12345678')
  const [name,setName] = useState('Abc')
  const navigation = useNavigation()
  const { handleSignUp } = useAuth()



  const  validateEmail = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setEmail(text)
      return false;
    }
    else {
      setEmail(text)
      return true
    }
  }

  const validatePassword = (text) => {
    if (text.length < 8 ){
      return false
    }else{
      setPassword(text)
      console.log("Correct password")
      return true
    }
  }
  const checkReEnter = () => {
    if (password == Rpassword){
      console.log("ready to submit", password, Rpassword)
      return true
    }else{
      return false
    }
  }
  const onSignUp = () => {
    if (validateEmail(email)){
      if (validatePassword){
        if (checkReEnter()){
          handleSignUp({ email, password, name})
        }else {
          console.log("Passwords doesn't match")
        }
      }else {
        console.log("Please enter a password with 8 characters")
      }
    }else {
      console.log("Email is Not Correct");
    }
    
  }


  return (
    <ScrollView style={{flex : 1}}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessibility={false}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 15,
          // height: HEIGHT,
          backgroundColor: CARD_COLOR,
          
        }}
      >
        <VerticalStack style={{ justifyContent: 'space-evenly', height: HEIGHT, borderRadius: 10 }}>
          <View style={{  }}>
          <HeadingText>Sign up</HeadingText>
          </View>
          <TextField 
              label={<LabelText>Name</LabelText>}
              value={name}
              onChangeText={(text) => setName(text)} />

          <TextField 
              label={<LabelText>Email</LabelText>}
              value={email}
              onChangeText={(text) => setEmail(text)}
              // onChangeText={(text) => validateEmail(text)}
              // onEndEditing={(text) => validateEmail(text)}
              />

          <PasswordField 
              label={<LabelText>Password</LabelText>}
              value={password}
              onChangeText={(text)=> setPassword(text)} 
              // onChangeText={(text) => validatePassword(text)}
              />

          <PasswordField 
              label={<LabelText>Re-enter password</LabelText>}
              value={Rpassword}
              onChangeText={(text) => setRPassword(text)} />

          <Task_button onPress={() => {
              onSignUp()
          }}>
            <BodyText>SignUp</BodyText>
          </Task_button>

          <HorizontalStack style={{ justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                borderBottomColor: 'black',
                flex: 1 / 2,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
            <View>
              <LabelText style={{ fontSize: 15, paddingHorizontal: 5 }}>OR</LabelText>
            </View>
            <View
              style={{
                borderBottomColor: 'black',
                flex: 1 / 2,
                borderBottomWidth: StyleSheet.hairlineWidth,
              }}
            />
          </HorizontalStack>

          <GoogleLoginButton />

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
          <LightText style={{ textAlign: 'center', fontSize: 10 }}>By signing up ,you are agreeing to our terms, Data Policy and Cookies Policy</LightText>

          <TouchableOpacity>
            <LightText onPress={()=> navigation.navigate('Login')}>Already have an account ? Login Now</LightText>
          </TouchableOpacity>

        </VerticalStack>
      </View>

    </TouchableWithoutFeedback>
    </ScrollView>
  )
}

export default SignUp;

