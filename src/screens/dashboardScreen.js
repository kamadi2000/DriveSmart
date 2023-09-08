import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {Ionicons,FontAwesome5,MaterialIcons,Entypo} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function dashboardScreen({}) {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.backgroundcontainer}>

            <TouchableOpacity onPress={() => navigation.navigate('Course')}>
                <View style={styles.textcomponent}>
                    <Ionicons name="book" size={34} color="black" />
                    <Text style={styles.texts}>Study Materials</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Road signs')}>
                <View style={styles.textcomponent}>
                    <FontAwesome5 name="road" size={34} color="black" />
                    <Text style={styles.texts}>Road Signs</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Practice tests')}>
                <View style={styles.textcomponent}>
                    <FontAwesome5 name="pen-alt" size={34} color="black" />
                    <Text style={styles.texts}>Practice Test</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('Progress tracking')}>
                <View style={styles.textcomponent}>
                    <Ionicons name="md-bar-chart" size={34} color="black" />
                    <Text style={styles.texts}>Progress Tracking</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('Premium')}>
                <View style={styles.textcomponent}>
                    <Entypo name="credit-card" size={34} color="black" />
                    <Text style={styles.texts}>Premium</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </View>
            </TouchableOpacity>

        </SafeAreaView>       
    );
}

export default dashboardScreen;

const styles = StyleSheet.create({
    backgroundcontainer: {
        flex: 1,
        // justifyContent: 'space-around',
        rowGap: 20,
        padding: 20,
        paddingTop: 50,
        backgroundColor: '#EDF3FF',
        // marginBottom: 60,
        // marginLeft: 10,
        // marginRight: 10,
        // marginTop:10,
        // borderRadius: 25,
    },
    textcomponent:{
        flexDirection:'row' ,
        justifyContent: 'space-around',
        rowGap: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        height: 90,
    },
    texts:{
        fontSize : 16,
        fontWeight: 'bold'
    }
})