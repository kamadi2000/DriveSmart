import { TouchableOpacity } from "react-native";
import { PRIMARY_COLOR,SECONDARY_COLOR,WIDTH } from "../../helpers/constants";

export const Task_button = ({children,style}) => 
<TouchableOpacity style={{
    backgroundColor : PRIMARY_COLOR,
    alignItems : 'center',
    padding : 10,
    width : WIDTH * 0.8,
    borderRadius : 13,
    ...style

}}>{children}</TouchableOpacity>