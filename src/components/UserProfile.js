import { TouchableOpacity, View, Text, StyleSheet } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import Popover from 'react-native-popover-view';
import { BodyText, LabelText } from "./basic/TextComponent";
import { WIDTH } from "../utils/constants";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/userSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";


const UserProfile = () => {
    const dispatch = useDispatch();
    const [showPopover, setShowPopover] = useState(false);
    const navigation = useNavigation()
    return (
        <Popover
            isVisible={showPopover}
            onRequestClose={() => setShowPopover(false)}
            from={(
                <TouchableOpacity onPress={() => setShowPopover(true)}>
                    <Ionicons name="md-person-circle-sharp" size={32} color="black" style={{ paddingRight: 10 }} />
                </TouchableOpacity>
            )}>
            <View style={styles.popUpContainer}>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => {
                        setShowPopover(false)
                        navigation.navigate("Settings")
                    }}>
                        <BodyText>Profile</BodyText>
                </TouchableOpacity>
                <View
                    style={{
                        borderBottomColor: 'black',
                        flex: 1 / 2,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => {
                        setShowPopover(false)
                        navigation.navigate("DashBoardStack")
                    }}>
                        <BodyText>DashBoard</BodyText>
                </TouchableOpacity>
                <View
                    style={{
                        borderBottomColor: 'black',
                        flex: 1 / 2,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <TouchableOpacity 
                    style={styles.menuItem}
                    onPress={() => {
                        setShowPopover(false)
                        navigation.navigate("Settings")
                    }}>
                        <BodyText>Help center</BodyText>
                </TouchableOpacity>
                <View
                    style={{
                        borderBottomColor: 'black',
                        flex: 1 / 2,
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />
                <TouchableOpacity 
                    style={styles.menuItem}
                    onPress={() =>
                        navigation.navigate("Settings")
                        // AsyncStorage.removeItem("authToken")
                    }>
                        <BodyText>Log out</BodyText>
                </TouchableOpacity>
            </View>
        </Popover>





    )
}

export default UserProfile;

const styles = StyleSheet.create({
    popUpContainer: {
        width: WIDTH * 0.5
    },
    menuItem: {
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})