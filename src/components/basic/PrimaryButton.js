import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const PrimaryButton = ({children, onPress}) => {
  
  return (
  <View  style={styles.outterContainer} >
    <Pressable style={({pressed})=> pressed ? [styles.innerContainer, styles.pressed] :styles.innerContainer} android_ripple={{color:"black"}}  onPress={onPress}  >
        <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
    </View>
    
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  innerContainer:{
    paddingVertical:10,
    paddingHorizontal:16,
    backgroundColor:"#333333",
    elevation:2,
    shadowColor:'black',
    shadowOpacity:0.15,
    shadowOffset:{width:0, height:0},
    shadowRadius:1
  },
  outterContainer:{
    borderRadius:28,
    overflow:'hidden',
    margin:10,
    
    
  },
  buttonText:{
    color:'white',
    textAlign:'center'
  },
  pressed:{
    opacity:0.75
  }
});