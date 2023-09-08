import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {Ionicons,FontAwesome5,MaterialIcons} from '@expo/vector-icons';

function dashboardScreen() {
    return (
        <SafeAreaView style={styles.backgroundcontainer}>
            <TouchableOpacity onpress={() => {}}>
                <View style={styles.textcomponent}>
                    <Ionicons name="md-bar-chart" size={34} color="black" />
                    <Text style={styles.texts}>Progress Tracking</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <View style={styles.textcomponent}>
                    <FontAwesome5 name="pen-alt" size={34} color="black" />
                    <Text style={styles.texts}>Practice Test</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.textcomponent}>
                    <FontAwesome5 name="road" size={34} color="black" />
                    <Text style={styles.texts}>Road Signs</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.textcomponent}>
                    <Ionicons name="book" size={34} color="black" />
                    <Text style={styles.texts}>Study Materials</Text>
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