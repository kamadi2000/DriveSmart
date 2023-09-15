import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import DashboardItem from '../components/DashboardItem';
function DashboardScreen() {
  return (
    <SafeAreaView style={styles.backgroundContainer}>
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
    </SafeAreaView>
  );
}

export default DashboardScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    rowGap: 20,
    padding: 20,
    paddingTop: 50,
    margin : 20,
    backgroundColor: '#EDF3FF',
  },
});
