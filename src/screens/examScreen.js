import { View, Text } from 'react-native'
import React, { useState, useMemo } from 'react'
import { BACKGROUND_COLOR } from '../utils/colors'
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import PrimaryButton from '../components/basic/PrimaryButton';

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
        <View style={{padding:5,margin:15,marginBottom:10,borderColor:'lightblue',borderWidth:1,borderRadius:10}}>
            <Text style={{textAlign:'center',fontSize:18,fontFamily:'Poppins_Medium'}}>{"Overview"}</Text>
            <Text style={{fontFamily:'Poppins_Medium',fontSize:15}}>Started On: {"22 August 2023, 11.09 PM"}</Text>
            <Text style={{fontFamily:'Poppins_Medium',fontSize:15}}>Status: {"Ongoing"}</Text>
            <Text style={{fontFamily:'Poppins_Medium',fontSize:15}}>Remaining: {"10 min, 23 Sec"}</Text>
        </View >
        <View style={{flex:1/2,padding:2,margin:15,marginBottom:10,borderColor:'lightblue',borderWidth:1,borderRadius:10}}>
            <View style={{flex:1,margin:2,flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:1,alignItems:'center',margin:2,height:'100%',justifyContent:'center',borderColor:'lightblue',borderWidth:1,borderRadius:10}}>
                    <Text>01</Text>
                </View>
                <View style={{flex:1,alignItems:'center',margin:2,height:'100%',justifyContent:'center',borderColor:'lightblue',borderWidth:1,borderRadius:10}}>
                    <Text>02</Text>
                </View>
                <View style={{flex:1,alignItems:'center',margin:2,height:'100%',justifyContent:'center',borderColor:'lightblue',borderWidth:1,borderRadius:10}}>
                    <Text>03</Text>
                </View>
                <View style={{flex:1,alignItems:'center',margin:2,height:'100%',justifyContent:'center',borderColor:'lightblue',borderWidth:1,borderRadius:10}}>
                    <Text>04</Text>
                </View>
                <View style={{flex:1,alignItems:'center',margin:2,height:'100%',justifyContent:'center',borderColor:'lightblue',borderWidth:1,borderRadius:10}}>
                    <Text>05</Text>
                </View>
            </View>
            <View style={{flex:1,margin:2,flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:1,alignItems:'center',margin:2,height:'100%',justifyContent:'center',borderColor:'lightblue',borderWidth:1,borderRadius:10}}>
                    <Text>01</Text>
                </View>
                <View style={{flex:1,alignItems:'center',margin:2,height:'100%',justifyContent:'center',borderColor:'lightblue',borderWidth:1,borderRadius:10}}>
                    <Text>02</Text>
                </View>
                <View style={{flex:1,alignItems:'center',margin:2,height:'100%',justifyContent:'center',borderColor:'lightblue',borderWidth:1,borderRadius:10}}>
                    <Text>03</Text>
                </View>
                <View style={{flex:1,alignItems:'center',margin:2,height:'100%',justifyContent:'center',borderColor:'lightblue',borderWidth:1,borderRadius:10}}>
                    <Text>04</Text>
                </View>
                <View style={{flex:1,alignItems:'center',margin:2,height:'100%',justifyContent:'center',borderColor:'lightblue',borderWidth:1,borderRadius:10}}>
                    <Text>05</Text>
                </View>
            </View>
        </View>
        <View style={{flex:1,padding:5,margin:15,marginBottom:55,borderColor:'lightblue',borderWidth:1,borderRadius:10}}>
            <Text style={{fontFamily:'Poppins_Light',fontSize:16}}>{"01."} {"What does a circular road sign with a red border and a white center indicate?"}</Text>
            <View style={{flex:1,alignItems:'flex-start'}}>
                <RadioGroup 
                containerStyle={{flex:1, alignItems:"flex-start"}}
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
                />
            </View>
        </View>
        <View style={{flex:1, flexDirection:'row' }}>
            <View style={{flex:1}}>
                <PrimaryButton >
                    <Text style={{fontFamily:'Poppins_Medium',fontSize:15}}>Previous</Text>
                </PrimaryButton>
            </View>
            <View style={{flex:1}}>
                <PrimaryButton  >
                    <Text style={{fontFamily:'Poppins_Medium',fontSize:15}}>Next</Text>
                </PrimaryButton>
            </View>
            
        </View>
    </View>
  )
}

export default ExamScreen