import { Text } from "react-native";

export const HeadingText = ({ children , style,...rest}) =>
    <Text {...rest} style={{ fontFamily: 'Poppins_SemiBold', fontSize: 32,...style }}>
        {children}
    </Text>

export const LightText = ({ children,style, ...rest }) =>
    <Text {...rest} style={{ fontFamily: 'Poppins_Light', fontSize: 12,...style }}>
        {children}
    </Text>

export const BodyText = ({ children , style }) =>
    <Text style={{ fontFamily: 'Poppins_Regular', fontSize: 14,...style}}>
        {children}
    </Text>

export const LabelText = ({ children , style }) =>
    <Text style={{ fontFamily: 'Poppins_Medium', fontSize: 11 ,...style}}>
        {children}
    </Text>

export const SubHeadingText = ({ children }) =>
    <Text style={{ fontFamily: 'Poppins_SemiBold', fontSize: 24 }}>
        {children}
    </Text>

export const SinhalaText = ({children , style}) =>
    <Text style={{ fontFamily : 'NotoSansSinhala',...style}}>{children}</Text>
