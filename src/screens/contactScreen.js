import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { Task_button } from '../components/basic/ButtonComponent';
import { BodyText, HeadingText } from '../components/basic/TextComponent';
import { HEIGHT } from '../utils/constants';


const ContactUs = () => {
  return (
    <ScrollView style={{height : HEIGHT}}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessibility={false}>
    <View style={styles.container}>
        <View style={styles.contactInfo}>
            <HeadingText style={styles.heading}>Complaints Form</HeadingText>
            <TextInput
                style={styles.input}
                placeholder="Your Name"
            />
            <TextInput
                style={styles.input}
                placeholder="Your Email"
            />
            <TextInput
                style={[styles.input, styles.messageInput]}
                placeholder="Your Message"
                multiline
            />
            {/* <Button title="Submit" onPress={() => {}} /> */}
            <Task_button><BodyText>Submit</BodyText></Task_button>
        </View>
      
        <View style={styles.contactInfo}>
            <BodyText style={styles.heading}>Contact Information</BodyText>
            <BodyText>123 Main Street</BodyText>
            <BodyText>City, State ZIP</BodyText>
            <BodyText>Email: contact@example.com</BodyText>
            <BodyText>Phone: (123) 456-7890</BodyText>
        </View>
    </View>
    </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDF3FF',
    height : HEIGHT
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderRadius : 5,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '100%',
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  contactInfo: {
    marginTop: 16,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 3, // Add shadow (Android)
    shadowColor: '#000000', // Add shadow (iOS)
    shadowOffset: { width: 0, height: 2 }, // Add shadow (iOS)
    shadowOpacity: 0.3, // Add shadow (iOS)
    shadowRadius: 4, // Add shadow (iOS)
    padding: 16,
  },
});

export default ContactUs;
