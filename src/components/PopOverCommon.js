import React, { Component, useState } from 'react'
import { Text, View } from 'react-native'
import { Modal } from 'react-native'
import Popover from 'react-native-popover-view';

function PopOverCommon ({children}){
    const [visible,setVisible] = useState(true)
    return (
        <View>
          <Popover   onRequestClose={setVisible.bind(this,false)} isVisible={visible}>
            <View style={{flex:1, width:'100%', height:"80%", backgroundColor:'lightgray'}}>
                <Text>{children}</Text>
            </View>
          </Popover>  
        </View>
        
      
    )

}

export default PopOverCommon
