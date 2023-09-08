import { HorizontalStack, VerticalStack } from "../components/basic/AlignStacks";
import { Task_button } from "../components/basic/ButtonComponent";
import { PasswordField, TextField } from "../components/basic/InputField";
import { BodyText, HeadingText, LabelText, LightText } from "../components/basic/TextComponent";
import { TouchableWithoutFeedback, View, Keyboard, ScrollView, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { CARD_COLOR } from "../utils/colors";
import { FontAwesome5 } from '@expo/vector-icons';

const Login = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessibility={false}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          margin: 15,
          backgroundColor: CARD_COLOR
        }}
      >
        <VerticalStack style={{ justifyContent: 'space-evenly' }}>
          <View style={{ width: 100, height: 100, backgroundColor: 'blue' }}>
            {/* logo of the app */}
          </View>
          <TextField label={<LabelText>Email</LabelText>} />

          <View>
            <PasswordField label={<LabelText>Password</LabelText>} />
            <LabelText>Forgot your password?</LabelText>
          </View>

          <Task_button>
            <BodyText>Login</BodyText>
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

          <Task_button>
            <HorizontalStack>
              <View style={{ flex: 1 / 3 }}>
                <FontAwesome5 name="google" size={22} color="black" />
              </View>
              <View>
                <BodyText>Login with Google</BodyText>
              </View>



            </HorizontalStack>

          </Task_button>

          <Task_button>
            <HorizontalStack>
              <View style={{flex : 1/3 }}>
                <FontAwesome5 name="facebook" size={22} color="black" />
              </View>
              <View>
                <BodyText>Login with Facebook</BodyText>
              </View>
            </HorizontalStack>
          </Task_button>
          
          <TouchableOpacity>
          <LightText>Don't have an account ? Register now.</LightText>
          </TouchableOpacity>
          
        </VerticalStack>
      </View>

    </TouchableWithoutFeedback>
  )
}

export default Login;

