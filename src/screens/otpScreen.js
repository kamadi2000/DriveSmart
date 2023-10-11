import { useState } from "react"
import { BodyText, HeadingText, LabelText, LightText } from "../components/basic/TextComponent";
import { Task_button } from "../components/basic/ButtonComponent";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { OTPField } from "../components/basic/InputField";
import { HEIGHT, WIDTH } from "../utils/constants";
import { CARD_COLOR } from "../utils/colors";
import useAuth from "../apis/auth";
import { useSelector } from "react-redux";
import { login, selectUserToken } from "../redux/userSlice";


const OTPScreen = ({ email }) => {
    const [otpCode, setOtpCode] = useState('');
    const [isPinReady, setIsPinReady] = useState(false)
    const { handleVerification } = useAuth()
    const token = useSelector(selectUserToken)
    console.log({token})
    const handlePress = () => {
        if (otpCode.length === 4){
            return handleVerification({token,otpCode})
        }else{
            return console.log("Otp code is not  complete.")
            
        }
        
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessibility={false}>
            <View style={{height : HEIGHT,width : WIDTH, flex : 1,alignItems : 'center', justifyContent : 'center'}}>
                <View style={{backgroundColor : CARD_COLOR , width : WIDTH*0.9 , alignItems : 'center', justifyContent : 'center',borderRadius : 10,padding : 10}}>
                <HeadingText>Verification</HeadingText>
                <LightText>{`Please enter the verification code that was sent. The code is valid for 10 minutes.`}</LightText>
                <LightText>{email}</LightText>
                <OTPField
                    onChangeNumber={(text) => setOtpCode(text)}
                    number={otpCode} />
                <Task_button onPress={()=> {
                            Keyboard.dismiss()
                            handlePress()}}>
                    <BodyText>Verify code</BodyText>
                </Task_button>
                <LightText>{`Didn't receive the OTP?`}</LightText>
                <LightText></LightText>
                </View>
                

            </View>
        </TouchableWithoutFeedback>

    )

}
export default OTPScreen;