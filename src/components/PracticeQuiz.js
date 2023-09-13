import { TouchableOpacity, View } from "react-native";
import { BodyText, LabelText } from "./basic/TextComponent";
import { HEIGHT, SCREEN_HEIGHT, WIDTH } from "../utils/constants";
import { CARD_COLOR } from "../utils/colors";
import { VerticalStack } from "./basic/AlignStacks";
import { Quiz_Button } from "./basic/ButtonComponent";
import { useNavigation } from "@react-navigation/native";

const PracticeQuiz = ({ attemptNumber }) => {
    const navigation = useNavigation()
    return (
        <View style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <View style={{ width: WIDTH * 0.9, height: HEIGHT * 0.5, backgroundColor: CARD_COLOR, paddingHorizontal: 30, }}>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: 40 }}>
                    <BodyText style={{ fontSize: 16 }}>Attempts No : {attemptNumber}</BodyText>
                    <BodyText style={{ fontSize: 16 }}>Attempts Per day : 3</BodyText>
                    <BodyText style={{ fontSize: 16 }}>Time Limit : 1hrs</BodyText>
                    <BodyText style={{ fontSize: 16 }}>Grade to pass : 75% out of 100%</BodyText>
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', paddingVertical: 40 }}>
                    {/* <TouchableOpacity > */}
                        <Quiz_Button onPress={() => navigation.navigate('QuizList')}>
                            <View>
                                <LabelText style={{ fontSize: 16, color: '#fff' }}>Attempt quiz now</LabelText>
                            </View>
                        </Quiz_Button>

                    {/* </TouchableOpacity>  */}

                </View>
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <BodyText style={{ textAlign: 'center' }}>Your quiz will be submitted automatically once the allocated time is completed.</BodyText>
                </View>


            </View>




        </View>


    )
}

export default PracticeQuiz;