import { View, Text } from 'react-native'
import React,{useState, useMemo} from 'react'
import RadioGroup from 'react-native-radio-buttons-group';

const Question = ({no ,question, selected}) => {
    const [selectedId, setSelectedId] = useState(selected);
    const radioButtons = useMemo(() => (question.options.map((item)=>({
            id: `${no}-${item.id}`,
            label: <Text style={{fontSize:16}}>{item.label}</Text>,
            value: item.id 
    }))), [question]);

     
  return (
    <View style={{padding:5,margin:15,marginBottom:10,borderColor:'lightblue',borderWidth:1,borderRadius:10}}>
            <Text style={{fontFamily:'Poppins_Light',fontSize:16}}>{no < 10 ? `0${no}.`: `no.` } {question.question}</Text>
            <RadioGroup 
                containerStyle={{alignItems:"flex-start"}}
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
                />
    </View>
  )
}

export default Question