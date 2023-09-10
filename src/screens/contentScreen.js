import { View, Text, ScrollView, StyleSheet} from 'react-native'
import React, { useEffect } from 'react'
import { useRoute } from '@react-navigation/native'
import { BACKGROUND_COLOR } from '../utils/colors'
import { Video, ResizeMode } from 'expo-av';
import { WebView } from 'react-native-webview';
const ContentScreen = () => {
    const route = useRoute()
    const {heading} = route.params
    useEffect (()=>{
        
    })
  return (
    <View style={{flex:1, backgroundColor:BACKGROUND_COLOR}}>
      <View style={{borderColor:'lightblue', borderWidth:1, margin:10,marginBottom:55, borderRadius:5}}>
        <ScrollView>
          <Text style={{fontFamily:'Poppins_SemiBold', fontSize:20, textAlign:'center'}} >{heading}</Text>
          <Video
          // ref={video}
          style={styles.video}
          source={{
            uri:"https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          // onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View style={{flex:1, margin:5}}>
          <ScrollView>
          <WebView
      style={{flex: 1, height: 400, width: '100%', backgroundColor: 'transparent' }}
      originWhitelist={['*']}
      source={{
        html: `
          <div style='font-size:45px'>
            <h4 style='text-align: center;'>Course Overview: Comprehensive Driving Test Exam Preparation for Sri Lanka</h4>
            <p style='text-align:justify'>Welcome to our all-inclusive online course designed
              to prepare you thoroughly for the driving test in Sri
              Lanka. Whether you're a new driver or seeking to
              refresh your knowledge, this course covers all the
              necessary aspects of driving, legal guidelines, road
              signs, practice exams, and interactive quizzes to ensure
              your success on the road.</p>
            <h4>Course Benefits:</h4>
            <p>By completing this course, you will:
              <ul>
                <li>Develop a comprehensive grasp of Sri Lanka's driving laws and regulations.</li>
                <li>Recognize and respond effectively to various road signs and signals.</li>
                <li>Approach the driving test with confidence, prepared for both practical and theoretical segments.</li>
                <li>Foster the confidence to handle different driving scenarios safely and efficiently.</li>
              </ul>
            </p>

            <p style='text-align:justify'>
              Join us on this journey
              to becoming a skilled and informed driver on Sri Lanka's
              roads. Together, we strive for safer and more responsible
              driving practices that benefit everyone. <br />

              Please bear in mind that this course is designed for
              educational purposes only and does not replace official
              driving education or guidance.<br />

              Feel free to personalize this course overview to align with your
              course content and objectives. Best of luck with developing your
              course!<br />
            </p>
            <h4 style='text-align:center'>Thank You!</h4>
          </div>
        `,
      }}
    />
    </ScrollView>
        </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default ContentScreen

const styles = StyleSheet.create({
  video: {
    alignSelf: 'center',
    width: 350,
    height:200,
    borderColor:'gray',
    borderRadius:15,
    borderWidth:1,
  },
});