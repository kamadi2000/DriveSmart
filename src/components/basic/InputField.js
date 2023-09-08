import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,View } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { LabelText } from './TextComponent';
import { WIDTH } from '../../utils/constants';



export const PasswordField = ({label}) => {
    const [cont, setCont] = useState('');
    const [show, setShow] = useState(false);
    return (  
        <View style={{height : 40 ,width : WIDTH*0.8}}>      
            <FloatingLabelInput
            label={label}
            isPassword
            staticLabel
            togglePassword={show}
            value={cont}
            containerStyles={{
                borderWidth: 1,
                paddingHorizontal: 10,
                backgroundColor: '#fff',
                borderColor: '#6C6A6A',
                borderRadius: 13,
                


            }}
            customLabelStyles={{
                colorFocused: '#6C6A6A',
                fontSizeFocused: 12,
            }}
            labelStyles={{
                backgroundColor: '#fff',
                paddingHorizontal: 5,
            }}
            inputStyles={{
                color: '#6C6A6A',
                paddingHorizontal: 10,
            }}
            onChangeText={value => setCont(value)}
            customShowPasswordComponent={<LabelText>Show</LabelText>}
            customHidePasswordComponent={<LabelText>Hide</LabelText>}
        />
        </View>

        

        

    );
}

export const TextField = ({label}) => {
    const [cont, setCont] = useState('');
    const [show, setShow] = useState(false);
    return (
        <View style={{height : 40 , width : WIDTH*0.8}}>
            <FloatingLabelInput
            label={label}
            staticLabel
            value={cont}
            containerStyles={{
                borderWidth: 1,
                paddingHorizontal: 10,
                backgroundColor: '#fff',
                borderColor: '#6C6A6A',
                borderRadius: 13,
            
            


            }}
            
            customLabelStyles={{
                colorFocused: '#6C6A6A',
                fontSizeFocused: 12,
            }}
            labelStyles={{
                backgroundColor: '#fff',
                paddingHorizontal: 5,
            }}
            inputStyles={{
                color: '#6C6A6A',
                paddingHorizontal: 10,
            }}
            onChangeText={value => setCont(value)}
        />
        </View>
        

        

        

    );
}

