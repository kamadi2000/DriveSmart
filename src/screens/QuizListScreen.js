import { View } from "react-native"
import { CARD_COLOR } from "../utils/colors"
import { WIDTH } from "../utils/constants"
import { LabelText } from "../components/basic/TextComponent"
import { useMemo, useState } from "react"
import RadioGroup from 'react-native-radio-buttons-group';

const QuestionCard = ({ question, answerList }) => {
    const [selected, setSelected] = useState()
    return (
        <View style={{ backgroundColor: CARD_COLOR, width: WIDTH * 0.9 }}>
            <View>
                <LabelText style={{ fontSize: 12 }}>{question}</LabelText>
            </View>
            <View>

            <RadioGroup
                radioButtons={answerList}
                onPress={setSelected}
                selectedId={selected} />
            </View>

        </View>
    )
}




const QuizList = [
    {
        id: 1,
        question: `What does a circular road sign with red border and a white center indicate?`,
        answers: [{
            id : 1,
            label : `Yield to oncoming taffic`,
            value : `Yield to oncoming taffic`
        },
        {
            id : 2,
            label : `No entry`,
            value : `No entry`
        } ,
        {
            id : 3,
            label : `Give way to pedestrians`,
            value : `Give way to pedestrians`
        } ,{
            id : 4,
            label : `Speed limit ahead`,
            value : `Speed limit ahead`
        }]

    },
    {
        id: 2,
        question: `What does a circular road sign with red border and a white center indicate?`,
        answers: [`Yield to oncoming taffic`, `No entry`, `Give way to pedestrians`, `Speed limit ahead`]

    },
    {
        id: 3,
        question: `What does a circular road sign with red border and a white center indicate?`,
        answers: [`Yield to oncoming taffic`, `No entry`, `Give way to pedestrians`, `Speed limit ahead`]

    },
    {
        id: 4,
        question: `What does a circular road sign with red border and a white center indicate?`,
        answers: [`Yield to oncoming taffic`, `No entry`, `Give way to pedestrians`, `Speed limit ahead`]

    },
    {
        id: 5,
        question: `What does a circular road sign with red border and a white center indicate?`,
        answers: [`Yield to oncoming taffic`, `No entry`, `Give way to pedestrians`, `Speed limit ahead`]

    },
]

const QuizListScreen = () => {
    return (
        <View>
            {QuizList.map((question) =>
                <QuestionCard key={question.id} question={question.question} answerList={question.answers} />

            )}

        </View>
    )
}

export default QuizListScreen;