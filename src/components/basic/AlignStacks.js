import { View } from "react-native";

export const VerticalStack = ({children}) =>
    <View style={{
        display : 'flex',
        flex : 1,
        flexDirection:'column',
        justifyContent : 'space-between'
    }}>{children}</View>

    export const HorizontalStack = ({children}) =>
    <View style={{
        display : 'flex',
        flexDirection:'row',
        alignContent : 'space-between'
    }}>{children}</View>