import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import DashboardItem from '../components/DashboardItem';
import LottieView from 'lottie-react-native';
import { WIDTH } from '../utils/constants';

function DashboardScreen() {

  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    // setTimeout(() => {setShowWelcome(false)}, 2000)
  }, [])

  return (
    <SafeAreaView style={styles.backgroundContainer} >
      <ScrollView style={{flex:1, rowGap: 20}}>
      {showWelcome && <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        // ref={animation}
        style={{
          width: WIDTH*0.9,
          height: 'auto',
          backgroundColor: 'transparent',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('../assets/images/welcome.json')}
      />
    </View>}
      <DashboardItem
        icon={<Ionicons name="book" size={34} color="black" />}
        title="Study Materials"
        navigateTo="CourseStack"
      />
      <DashboardItem
        icon={<FontAwesome5 name="road" size={34} color="black" />}
        title="Road Signs"
        navigateTo="RoadSigns"
      />
      <DashboardItem
        icon={<FontAwesome5 name="pen-alt" size={34} color="black" />}
        title="Practice Test"
        navigateTo="Practice tests"
      />
      <DashboardItem
        icon={<Ionicons name="md-bar-chart" size={34} color="black" />}
        title="Progress Tracking"
        navigateTo="Progress tracking"
      />
      <DashboardItem
        icon={<Entypo name="credit-card" size={34} color="black" />}
        title="Premium"
        navigateTo="Premium"
      />
      </ScrollView>
    </SafeAreaView>
  );
}

export default DashboardScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    
    padding: 20,
    paddingTop: 50,
    margin : 20,
    backgroundColor: '#EDF3FF',
  },
  animationContainer: {

  }
});
