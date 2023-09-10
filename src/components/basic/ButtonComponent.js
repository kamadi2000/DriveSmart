import { TouchableOpacity } from "react-native";
import { WIDTH } from "../../utils/constants";
import { PRIMARY_COLOR } from "../../utils/colors";

export const Task_button = ({children,style}) => 
<TouchableOpacity style={{
    backgroundColor : PRIMARY_COLOR,
    alignItems : 'center',
    padding : 10,
    width : WIDTH * 0.8,
    borderRadius : 13,
    ...style
}}>{children}</TouchableOpacity>