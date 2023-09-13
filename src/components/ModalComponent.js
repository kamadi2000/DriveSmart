import { View, Text, Image,TextInput, TouchableOpacity } from 'react-native'
import React, {useState, useMemo, useEffect} from 'react'
import { Modal,BackHandler } from 'react-native'
import { BACKGROUND_COLOR, PRIMARY_COLOR } from '../utils/colors'
import { Ionicons } from '@expo/vector-icons';
import PrimaryButton from './basic/PrimaryButton';
import RadioGroup from 'react-native-radio-buttons-group';
const ModalComponent = ({isVisible,setIsvisible }) => {
  const [selectedId, setSelectedId] = useState();
  const [language, setLanguage] = useState(false)
  const [password, setPassword] = useState(false)
  const [username, setUsername] = useState(false)
  const radioButtons = useMemo(()=>[
    {
      id:"01",
      label: <Text>Sinhala</Text>,
      value:"01"
    },
    {
      id:"02",
      label: <Text>Tamil</Text>,
      value:"02"
    },
    {
      id:"03",
      label: <Text>English</Text>,
      value:"03"
    }
  ])


  

  return (
    <Modal  visible={isVisible} animationType="slide" transparent={true} >
      <View style={{flex:1,backgroundColor:PRIMARY_COLOR,justifyContent:'center', alignItems:'center'}}>
            <View style={{padding:15,flexDirection:'row',width:'100%',justifyContent:"flex-start" ,alignItems:'flex-start'}}>
              <TouchableOpacity>
                <Ionicons style={{paddingRight:20}} onPress={setIsvisible.bind(this,false)}  name="arrow-back-sharp" size={30} color="black" />
              </TouchableOpacity>
                
                <Text style={{fontSize:20}}>Profile</Text>
            </View>
            <View style={{padding:15,flex:1, width:'100%', backgroundColor:BACKGROUND_COLOR}}>
                <Image resizeMode="cover" style={{width:150, alignSelf:'center', borderColor:'lightgray', borderRadius:75,borderWidth:1 ,height:150}} source={require('../assets/images/profile.png')} />
                <View>
                  <View style={{flexDirection:'row', alignItems:'flex-start', paddingBottom:20,padding:10 ,borderBottomColor:'lightgray', borderBottomWidth:1}}>
                    <Ionicons style={{alignSelf:'flex-start', paddingRight:20}} name="mail" size={24} color="gray" />
                    <View style={{flex:1}}>
                      <Text>Email</Text>
                      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <Text>Someone@gmail.com</Text>
                        
                      </View>
                    </View>
                  </View>

                  <View style={{flexDirection:'row', alignItems:'flex-start',padding:10 , paddingBottom:20,borderBottomColor:'lightgray', borderBottomWidth:1}}>
                    <Ionicons style={{alignSelf:'flex-start', paddingRight:20}} name="person" size={24} color="gray" />
                    <View style={{flex:1}}>
                      <Text>User name</Text>
                      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <Text>Someone</Text>
                        <Ionicons onPress={setUsername.bind(this,true)} name="md-pencil" size={24} color="gray" />
                      </View>
                    </View>
                  </View>
                  <View style={{flexDirection:'row', alignItems:'flex-start',padding:10 , paddingBottom:20,borderBottomColor:'lightgray', borderBottomWidth:1}}>
                    <Ionicons style={{alignSelf:'flex-start', paddingRight:20}} name="language" size={24} color="gray" />
                    <View style={{flex:1}}>
                      <Text>Language</Text>
                      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <Text>Sinhala</Text>
                        <Ionicons onPress={setLanguage.bind(this, true)} name="md-pencil" size={24} color="gray" />
                      </View>
                    </View>
                  </View>

                  <View style={{flexDirection:'row', alignItems:'flex-start',padding:10 , paddingBottom:20,borderBottomColor:'lightgray', borderBottomWidth:1}}>
                    <Ionicons style={{alignSelf:'flex-start', paddingRight:20}} name="lock-closed" size={24} color="gray" />
                    <View style={{flex:1}}>
                      <Text>Password</Text>
                      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <Text>*********</Text>
                        <Ionicons onPress={setPassword.bind(this,true)} name="md-pencil" size={24} color="gray" />
                      </View>
                    </View>
                  </View>
                </View>
            </View>
      </View>


      <Modal visible={username} transparent={true}>
        <View style={{flex:1, backgroundColor:'rgba(10,10,10,0.6)', alignItems:'center'}}>
          <View style={{position:"absolute",bottom:0, width:'100%', backgroundColor:'lightblue', minHeight:150, alignItems:'center', borderTopLeftRadius:10,borderTopRightRadius:10}} >
            <TextInput
              placeholder='user name'
              style={{padding:10,fontSize:16,width:'90%',borderBottomColor:'gray', borderBottomWidth:1}}
            />
            <View style={{flexDirection:'row', justifyContent:'space-between', width:'90%'}}>
              <View style={{flex:1}}>
                <PrimaryButton onPress={setUsername.bind(this,false)}>Cancel</PrimaryButton>
              </View>
              
              <View style={{flex:1}}>
                <PrimaryButton onPress={setUsername.bind(this,false)}>Save</PrimaryButton>
              </View>
            </View>
            
          </View>
        </View>
      </Modal>



      <Modal visible={password} transparent={true}>
        <View style={{flex:1, backgroundColor:'rgba(10,10,10,0.6)', alignItems:'center'}}>
          <View style={{position:"absolute",bottom:0, width:'100%', backgroundColor:'lightblue', minHeight:150, alignItems:'center', borderTopLeftRadius:10,borderTopRightRadius:10}} >
            <TextInput
              placeholder='current password'
              style={{padding:10,fontSize:16,width:'90%',borderBottomColor:'gray', borderBottomWidth:1}}
            />
            <TextInput
              placeholder='new password'
              style={{padding:10,fontSize:16,width:'90%',borderBottomColor:'gray', borderBottomWidth:1}}
            />
            <View style={{flexDirection:'row', justifyContent:'space-between', width:'90%'}}>
              <View style={{flex:1}}>
                <PrimaryButton onPress={setPassword.bind(this,false)}>Cancel</PrimaryButton>
              </View>
              
              <View style={{flex:1}}>
                <PrimaryButton onPress={setPassword.bind(this,false)}>Save</PrimaryButton>
              </View>
            </View>
            
          </View>
        </View>
      </Modal>

      {/*Select langauge*/}
      <Modal animationType='slide' visible={language} transparent={true}>
        <View style={{flex:1, backgroundColor:'rgba(10,10,10,0.1)', alignItems:'center'}}>
          <View style={{position:"absolute",bottom:0, width:'100%', backgroundColor:'lightblue', minHeight:150, alignItems:'center', borderTopLeftRadius:10,borderTopRightRadius:10}} >
          <RadioGroup 
                
                containerStyle={{padding:10,alignItems:"flex-start", flexDirection:'row', gap:5, flexWrap:'wrap'}}
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
                />
            <View style={{flexDirection:'row', justifyContent:'space-between', width:'90%'}}>
              <View style={{flex:1}}>
                <PrimaryButton onPress={setLanguage.bind(this, false)} >Cancel</PrimaryButton>
              </View>
              
              <View style={{flex:1}}>
                <PrimaryButton onPress={setLanguage.bind(this, false)}>Save</PrimaryButton>
              </View>
            </View>
            
          </View>
        </View>
      </Modal>

    </Modal>


    

    
  )
}

export default ModalComponent