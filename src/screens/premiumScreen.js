import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native'; 
import { BodyText, SubHeadingText, LabelText } from "../components/basic/TextComponent";
import { Task_button } from "../components/basic/ButtonComponent";
import Checkbox from 'expo-checkbox';

function PremiumScreen() {
  const [isChecked, setChecked] = useState(false);

  const handleUnlockButtonPress = () => {
    if (isChecked) {
      // Show an alert when the button is pressed and the checkbox is checked
      Alert.alert(
        'Premium Unlocked',
        'You have successfully unlocked the premium features.',
        [
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
          },
        ]
      );
    } else {
      // Show an alert if the checkbox is not checked
      Alert.alert('Checkbox Not Checked', 'Please agree to the terms and conditions before unlocking.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SubHeadingText>Unlock Premium Features</SubHeadingText>
            <BodyText style={{textAlign:'center'}}>
                Boost your learning today - go premium with a one-time payment of 400.00 LKR. 
                Get access to exclusive study materials, videos, and interactive quizzes!
            </BodyText>
            <BodyText style={{fontFamily:"NotoSerifTamil_Regular", textAlign:'center'}}>
                இன்றே உங்கள் கற்றலை அதிகரிக்கவும் 400.00 LKR ஒரு முறை செலுத்துவதன் மூலம் பிரீமியத்திற்கு செல்லுங்கள். 
                பிரத்தியேக வீடியோக்கள் மற்றும் வினாடி வினாக்களுக்கான அணுகலைப் பெறுங்கள்!
            </BodyText>
            <BodyText style={{textAlign:'center'}}>
                අදම ඔබේ ඉගෙනීම ඉහළ නංවන්න - වාරිකය 400/= කට පමණයි. 
                සුවිශේෂී අධ්‍යයන ද්‍රව්‍ය, වීඩියෝ සහ අන්තර්ක්‍රියාකාරී ප්‍රශ්නාවලිය වෙත ප්‍රවේශය ලබා ගන්න!
            </BodyText>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        <LabelText>Agree with terms, conditions, and refund policy</LabelText>
      </View>
      <View style={styles.buttons}>
        <Task_button disabled={!isChecked} onPress={handleUnlockButtonPress}>
          <BodyText>Unlock Sinhala</BodyText>
        </Task_button>
        <Task_button disabled={!isChecked} onPress={handleUnlockButtonPress}>
          <BodyText>Unlock Tamil</BodyText>
        </Task_button>
        <Task_button disabled={!isChecked} onPress={handleUnlockButtonPress}>
          <BodyText>Unlock English</BodyText>
        </Task_button>
      </View>
    </SafeAreaView>
  );
}

export default PremiumScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    rowGap: 10,
    backgroundColor: '#EDF3FF',
  },
  buttons: {
    flexDirection: 'column',
    rowGap: 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    margin: 8,
  },
});
