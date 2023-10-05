import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { LabelText } from "./TextComponent";
import { WIDTH } from "../../utils/constants";

export const PasswordField = ({ label, value, onChangeText }) => {
  const [cont, setCont] = useState("");
  const [show, setShow] = useState(false);
  const [focused, setFocused] = useState(false)
  return (
    <View style={{ height: 40, width: WIDTH * 0.8 }}>
      <FloatingLabelInput
        autoCapitalize="none"
        label={label}
        isPassword
        staticLabel
        togglePassword={show}
        value={value}
        containerStyles={{
          borderWidth: 1,
          paddingHorizontal: 10,
          backgroundColor: "#fff",
          borderColor: "#6C6A6A",
          borderRadius: 13,
        }}
        customLabelStyles={{
          colorFocused: "#6C6A6A",
          fontSizeFocused: 12,
        }}
        labelStyles={{
          backgroundColor: "#fff",
          paddingHorizontal: 5,
        }}
        inputStyles={{
          color: "#6C6A6A",
          paddingHorizontal: 10,
        }}
        onChangeText={onChangeText}
        customShowPasswordComponent={<LabelText>Show</LabelText>}
        customHidePasswordComponent={<LabelText>Hide</LabelText>}
      />
    </View>
  );
};

export const TextField = ({ label, value, onChangeText, onEndEditing ,...props }) => {
  // const [cont, setCont] = useState('');
  const [show, setShow] = useState(false);
  return (
    <View style={{ height: 40, width: WIDTH * 0.8 }}>
      <FloatingLabelInput
        label={label}
        staticLabel
        value={value}
        containerStyles={{
          borderWidth: 1,
          paddingHorizontal: 10,
          backgroundColor: "#fff",
          borderColor: "#6C6A6A",
          borderRadius: 13,
        }}
        customLabelStyles={{
          colorFocused: "#6C6A6A",
          fontSizeFocused: 12,
        }}
        labelStyles={{
          backgroundColor: "#fff",
          paddingHorizontal: 5,
        }}
        inputStyles={{
          color: "#6C6A6A",
          paddingHorizontal: 10,
        }}
        onChangeText={onChangeText}
        onEndEditing={onEndEditing}
      />
    </View>
  );
};
