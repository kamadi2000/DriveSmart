import { TouchableOpacity } from "react-native";
import { WIDTH } from "../../utils/constants";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "../../utils/colors";

export const Task_button = ({ children, style, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      backgroundColor: PRIMARY_COLOR,
      alignItems: "center",
      padding: 10,
      width: WIDTH * 0.8,
      borderRadius: 13,
      ...style,
    }}
  >
    {children}
  </TouchableOpacity>
);

export const Quiz_Button = ({ children, style, onPress }) => (
  <TouchableOpacity
    style={{
      backgroundColor: SECONDARY_COLOR,
      alignItems: "center",
      padding: 10,
      borderRadius: 25,
      ...style,
    }}
    onPress={onPress}
  >
    {children}
  </TouchableOpacity>
);
