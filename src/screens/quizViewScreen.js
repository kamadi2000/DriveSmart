import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const QuizViewScreen = () => {
    const route = useRoute()
    const {heading} = route.params
  return (
    <View>
      <Text>{heading}</Text>
    </View>
  )
}

export default QuizViewScreen