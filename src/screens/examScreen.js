import { View, Text } from 'react-native'
import React, { useState, useMemo } from 'react'
import { BACKGROUND_COLOR } from '../utils/colors'
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import PrimaryButton from '../components/basic/PrimaryButton';
import { WIDTH } from '../utils/constants';
import { ScrollView } from 'react-native';

const ExamScreen = () => {
    const [selectedId, setSelectedId] = useState();
    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: <Text style={{fontSize:16}}>Yield to oncoming traffic</Text>,
            value: 'Yield to oncoming traffic',
        },
        {
            id: '2',
            label: <Text style={{fontSize:16}}>No entry</Text>,
            value: 'No entry'
        },
        {
            id: '3',
            label:<Text style={{fontSize:16}}>Give way to pedestrians</Text>,
            value: 'Give way to pedestrians'
        },
        {
            id: '4',
            label: <Text style={{fontSize:16}}>Speed limit ahead</Text>,
            value: 'Speed limit ahead'
        }
    ]), []);
  return (
    <View style={{flex:1,backgroundColor:BACKGROUND_COLOR}}>
        <ScrollView alwaysBounceVertical={false} style={{marginBottom:55}}>
        <View style={{padding:5,margin:15,marginBottom:10,borderColor:'lightblue',borderWidth:1,borderRadius:10}}>
            <Text style={{textAlign:'center',fontSize:18,fontFamily:'Poppins_Medium'}}>{"Overview"}</Text>
            <Text style={{fontFamily:'Poppins_Medium',fontSize:15}}>Started On: {"22 August 2023, 11.09 PM"}</Text>
            <Text style={{fontFamily:'Poppins_Medium',fontSize:15}}>Status: {"Ongoing"}</Text>
            <Text style={{fontFamily:'Poppins_Medium',fontSize:15}}>Remaining: {"10 min, 23 Sec"}</Text>
        </View >
        <View style={{flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',padding:5,margin:15,marginBottom:10,borderColor:'lightblue',borderWidth:1,borderRadius:10}}>
            <Text style={{borderColor:'gray',borderWidth:1, borderRadius:5,minWidth:60,margin:2, maxWidth:'50', padding:8, textAlign:'center'}} >01</Text>
            <Text style={{borderColor:'gray',borderWidth:1, borderRadius:5,minWidth:60,margin:2, maxWidth:'50', padding:8, textAlign:'center'}} >02</Text>
            <Text style={{borderColor:'gray',borderWidth:1, borderRadius:5,minWidth:60,margin:2, maxWidth:'50', padding:8, textAlign:'center'}} >03</Text>
            <Text style={{borderColor:'gray',borderWidth:1, borderRadius:5,minWidth:60,margin:2, maxWidth:'50', padding:8, textAlign:'center'}} >04</Text>
            <Text style={{borderColor:'gray',borderWidth:1, borderRadius:5,minWidth:60,margin:2, maxWidth:'50', padding:8, textAlign:'center'}} >05</Text>
            <Text style={{borderColor:'gray',borderWidth:1, borderRadius:5,minWidth:60,margin:2, maxWidth:'50', padding:8, textAlign:'center'}} >06</Text>
            <Text style={{borderColor:'gray',borderWidth:1, borderRadius:5,minWidth:60,margin:2, maxWidth:'50', padding:8, textAlign:'center'}} >07</Text>
            <Text style={{borderColor:'gray',borderWidth:1, borderRadius:5,minWidth:60,margin:2, maxWidth:'50', padding:8, textAlign:'center'}} >08</Text>
            <Text style={{borderColor:'gray',borderWidth:1, borderRadius:5,minWidth:60,margin:2, maxWidth:'50', padding:8, textAlign:'center'}} >09</Text>
            <Text style={{borderColor:'gray',borderWidth:1, borderRadius:5,minWidth:60,margin:2, maxWidth:'50', padding:8, textAlign:'center'}} >10</Text>
        </View >
        
        <View style={{padding:5,margin:15,marginBottom:10,borderColor:'lightblue',borderWidth:1,borderRadius:10}}>
            <Text style={{fontFamily:'Poppins_Light',fontSize:16}}>{"01."} {"What does a circular road sign with a red border and a white center indicate?"}</Text>
            <RadioGroup 
                containerStyle={{alignItems:"flex-start"}}
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
                />
        </View>
        <View style={{ flexDirection:'row', justifyContent:'space-between' }}>
            <View style={{flex:1,maxWidth:200}}>
                <PrimaryButton >
                    <Text style={{fontFamily:'Poppins_Medium',fontSize:15}}>Previous</Text>
                </PrimaryButton>
            </View>
            <View style={{flex:1, maxWidth:200}}>
                <PrimaryButton  >
                    <Text style={{fontFamily:'Poppins_Medium',fontSize:15}}>Next</Text>
                </PrimaryButton>
            </View>
        </View> 
        </ScrollView>
    </View>
  )
}

export default ExamScreen