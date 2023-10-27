import React, {useEffect} from 'react'
import { Text, TouchableOpacity, View } from "react-native"
import PopOverCommon from "./PopOverCommon"
import { BodyText, LightText } from "./basic/TextComponent"
import { useState } from "react";
import Popover from 'react-native-popover-view';
import { Ionicons } from '@expo/vector-icons';
import { WIDTH } from "../utils/constants";
import { Task_button } from "./basic/ButtonComponent";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LanguagePopOver = () => {
    const [showPopover, setShowPopover] = useState(false);
    const [language, setLanguage] = useState("")

    useEffect(() => {
        AsyncStorage.getItem("language").then(lang => {
            if(lang){
                i18n.changeLanguage(lang)
            }
        })
    }, [])

    const handleLanguageChange = (language) => {
        setLanguage(language)
        i18n.changeLanguage(language)
        AsyncStorage.setItem("language", language)
        setShowPopover(false)
    }

    const { i18n } = useTranslation()
    return (
        <>
            <TouchableOpacity style={{ backgroundColor: 'white', padding: 15, flexDirection: 'row', alignItems: 'center' }} onPress={() => setShowPopover(true)}>
                <Ionicons name="language" size={25} color="gray" />
                <Text style={{ fontFamily: 'Poppins_Regular', fontSize: 16, paddingStart: 15 }}>{t("Prefered Language")}</Text>
                <Text style={{ flex: 1, fontFamily: 'Poppins_Regular', textAlign: 'right', color: 'gray', fontSize: 14, paddingStart: 15 }}>{language}</Text>
                <Ionicons style={{ textAlign: 'right' }} name="chevron-forward" size={25} color="gray" />
            </TouchableOpacity>
            <Popover
                isVisible={showPopover}
                onRequestClose={() => setShowPopover(false)}>
                <View style={{ width: WIDTH * 0.8, padding: 20 , flex : 1, alignItems : 'center', justifyContent : 'center'}}>
                    <BodyText style={{ textAlign: 'center', marginBottom: 10, fontSize: 24 }}>{t("Change language")}</BodyText>
                    <Task_button style={{margin : 20 , width : '80%'}} onPress={() => {
                        
                        handleLanguageChange("english")}}>
                        <BodyText>English</BodyText>
                    </Task_button>
                    <Task_button style={{margin : 20 , width : '80%'}} onPress={() => {
                        
                        handleLanguageChange("sinhala")}}>
                        <BodyText>Sinhala</BodyText>
                    </Task_button>
                    <Task_button style={{margin : 20 , width : '80%'}} onPress={() => {
                        
                        handleLanguageChange("tamil")}}>
                        <BodyText>Tamil</BodyText>
                    </Task_button>
                    
                </View>
            </Popover>

        </>




    )

}

export default LanguagePopOver;