import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DashboardItem = ({ icon, title, navigateTo }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
      <View style={styles.textComponent}>
        {icon}
        <Text style={styles.texts}>{title}</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textComponent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    rowGap: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    height: 90,
  },
  texts: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DashboardItem;
