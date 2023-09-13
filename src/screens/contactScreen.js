import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ContactUs = () => {
  return (
    <View style={styles.container}>
        <View style={styles.contactInfo}>
            <Text style={styles.heading}>Contact Us</Text>
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
            <Button title="Submit" onPress={() => {}} />
        </View>
      
        <View style={styles.contactInfo}>
            <Text style={styles.heading}>Contact Information</Text>
            <Text>123 Main Street</Text>
            <Text>City, State ZIP</Text>
            <Text>Email: contact@example.com</Text>
            <Text>Phone: (123) 456-7890</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EDF3FF'
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
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
