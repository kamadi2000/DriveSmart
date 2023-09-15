import { Text, TouchableOpacity, View } from "react-native"
import PopOverCommon from "./PopOverCommon"
import { BodyText, LightText } from "./basic/TextComponent"
import { useState } from "react";
import Popover from 'react-native-popover-view';
import { Ionicons } from '@expo/vector-icons';
import { WIDTH } from "../utils/constants";

const AboutUsPopOver = () => {
    const [showPopover, setShowPopover] = useState(false);
    return (
        <>
           <TouchableOpacity style={{ backgroundColor: 'white', padding: 15, flexDirection: 'row', alignItems: 'center' }} onPress={() => setShowPopover(true)}>
                <Ionicons name="help-circle-outline" size={30} color="gray" />
                <Text style={{ fontFamily: 'Poppins_Regular', fontSize: 16, paddingStart: 15 }}>About</Text>
            </TouchableOpacity>
            <Popover
                isVisible={showPopover}
                onRequestClose={() => setShowPopover(false)}>
                <View style={{width : WIDTH*0.8 , padding : 20}}>
                    <BodyText style={{textAlign : 'center',marginBottom : 10 ,fontSize : 32}}>About us</BodyText>
                    <LightText>
                        Our mission is to empower individuals with the knowledge and skills needed to navigate
                        the roads confidently and securely.Our course will guide you from the beginning to the end.It doesn’t
                        matter whether you are new learner or not,we have got you covered.Start practicing today and pave the way
                        to a life time of safe and enjoyable driving.Your road to success begins here.Our mission is to empower individuals
                        with the knowledge and skills needed to navigate the roads confidently and securely.Our course will guide you from the
                        beginning to the end.It doesn’t matter whether you are new learner or not,we have got you covered.Start practicing today
                        and pave the way to a life time of safe and enjoyable driving.Your road to success begins here.
                    </LightText>
                </View>
            </Popover>

        </>




    )

}

export default AboutUsPopOver;