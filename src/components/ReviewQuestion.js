import { useMemo, useState } from "react";
import { Text, View } from "react-native";
import { RadioGroup } from "react-native-radio-buttons-group";

export const ReviewQuestion = ({no ,question, selected, userAnswers}) => {
    const [selectedId, setSelectedId] = useState("0");
    const radioButtons = useMemo(() => (question.options.map((item, index)=>({
            id: `${index}`,
            label: <Text style={{fontSize:16}}>{item}</Text>,
            value: String(index),
            selected: question.options.findIndex(q => q == userAnswers[question._id])==index,
            disabled: true,
            checked: true
    }))), [question]);
  
     const correct = userAnswers[question._id] == question.answer
    const sel = question.options.findIndex(q => q == userAnswers[question._id])
    console.log({sel})
  return (
    <View style={{padding:5,margin:15,marginBottom:10}}>
            <Text style={{fontFamily:'Poppins_Light',fontSize:16}}>{no < 10 ? `0${no}.`: `no.` } {question.question}</Text>
            <RadioGroup 
                containerStyle={{alignItems:"flex-start"}}
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={`${question.options.findIndex(q => q == userAnswers[question._id])}`}
                />
                <Text style={{color: correct ? 'green': 'red', margin: 20, fontWeight: 'bold'}}>
                { correct ? question.positiveFeedback : question.negativeFeedback}
                </Text>
    </View>
  )
  }