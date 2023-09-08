import { View, Text } from 'react-native'
import React from 'react'

const Instruction = ({type, status}) => {
  return (
    <View style={{flex:1}}>
        <Text style={{textAlign: type==='activity' ?'left' :'right' ,fontFamily:'Poppins_Light', color: (type == 'premium') ?'orange' : (status) ? 'green' :'black' }}>
            {type === 'premium' ? (status ? 'To Unlock: Upgrade' : ''): (status ? 'Done: Completed' : 'To Do: Complete')}
        </Text>
    </View>
  )
}

export default Instruction