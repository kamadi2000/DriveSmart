import { Text } from "react-native";

export const HeadingText = ({children}) => 
    <Text style={{fontFamily : 'Poppins_SemiBold',fontSize:32}}>
        {children}
    </Text>

export const LightText = ({children}) => 
    <Text style={{fontFamily : 'Poppins_Light',fontSize:10}}>
        {children}
    </Text>

export const BodyText = ({children}) => 
    <Text style={{fontFamily : 'Poppins_Medium',fontSize:16}}>
        {children}
    </Text>
