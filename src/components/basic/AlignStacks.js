import { View } from "react-native";
import { WIDTH } from "../../helpers/constants";

export const VerticalStack = ({children,style}) =>
    <View style={{
        display : 'flex',
        flex : 1,
        flexDirection:'column',
        padding : 20,
        width : WIDTH*0.9,
        backgroundColor : '#fff',
        justifyContent : 'center',
        alignItems : 'center',
        ...style
    }}>{children}</View>

export const HorizontalStack = ({children,style}) =>
    <View style={{
        display : 'flex',
        flexDirection:'row',
        ...style
    }}>{children}</View>