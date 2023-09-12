import { TouchableOpacity, View, Image } from "react-native";
import { WIDTH } from "../../utils/constants";
import { CARD_COLOR } from "../../utils/colors";
import { HorizontalStack } from "./AlignStacks";
import { BodyText } from "./TextComponent";
import { MaterialIcons } from '@expo/vector-icons';

const Card = ({ imgPath, title, id }) => {
    return (
        <View style={{
            width: WIDTH * 0.9,
            backgroundColor: CARD_COLOR,
            height: 58,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5,
        }} onPress={() => {}}>
            <HorizontalStack style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 1 / 8, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                    <Image source={imgPath} style={{width : 40,height : 35}}/>
                </View>
                <View style={{ flex: 6 / 8, justifyContent: 'center', alignItems: 'center' }}>
                    <BodyText>
                        {title}
                    </BodyText>
                </View>
                <View style={{ flex: 1 / 8, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                    <MaterialIcons name="navigate-next" size={24} color="black" />
                </View>
            </HorizontalStack>


        </View>
    )
}

export default Card;
// const type = 'warning_signs'
// const signs = {
//     'warning_signs' : [
//         {
//             id : 1,

//         }
//     ]
// }

// signs[type] 

