import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import * as AuthSession from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { Task_button } from "./ButtonComponent";
import { HorizontalStack } from "./AlignStacks";
import { FontAwesome5 } from '@expo/vector-icons';
import { BodyText } from "./TextComponent";

WebBrowser.maybeCompleteAuthSession();

const GoogleLoginButton = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "442850253199-ub37onhifoi32km1os0pubghlsd4kcma.apps.googleusercontent.com",
    iosClientId:
      "442850253199-1bui9bal38oldkqub1btffc3gl8pn3vq.apps.googleusercontent.com",
    expoClientId:
      "442850253199-aogpp9qgd4ira218r3d8g8bmqbgemcu6.apps.googleusercontent.com",
  });

  useEffect(() => {
    console.log("response: ", response);
  }, [response]);

  return (
    

      <Task_button onPress={() => promptAsync({ useProxy: false, showInRecents: true })}>
            <HorizontalStack>
              <View style={{ flex: 1 / 3 }}>
                <FontAwesome5 name="google" size={22} color="black" />
              </View>
              <View>
                <BodyText>Login with Google</BodyText>
              </View>
            </HorizontalStack>
          </Task_button>
   
  );
};

export default GoogleLoginButton;
